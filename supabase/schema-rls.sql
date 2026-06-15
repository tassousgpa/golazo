-- GOLAZO — RLS complet (idempotent)
-- Exécuter APRÈS schema.sql dans SQL Editor → Run
-- Remplace / complète schema-patch.sql si déjà exécuté

-- ─── Profil auto à l'inscription (FK leagues.owner_id → profiles) ───
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, pseudo, team_name, country)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data->>'pseudo'), ''), 'Joueur'),
    coalesce(nullif(trim(new.raw_user_meta_data->>'team_name'), ''), 'Mon équipe'),
    coalesce(nullif(trim(new.raw_user_meta_data->>'country'), ''), 'FRA')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─── Intégrité member_id ↔ league_id ───
create or replace function public.validate_member_league()
returns trigger
language plpgsql
as $$
begin
  if not exists (
    select 1 from public.league_members lm
    where lm.id = new.member_id and lm.league_id = new.league_id
  ) then
    raise exception 'member_id does not belong to league_id';
  end if;
  return new;
end;
$$;

drop trigger if exists market_bids_member_league on public.market_bids;
create trigger market_bids_member_league
  before insert or update on public.market_bids
  for each row execute function public.validate_member_league();

drop trigger if exists squad_players_member_league on public.squad_players;
create trigger squad_players_member_league
  before insert or update on public.squad_players
  for each row execute function public.validate_member_league();

-- ─── RPC : rejoindre une ligue sans exposer toutes les ligues ───
create or replace function public.find_league_by_invite(p_code text)
returns setof public.leagues
language plpgsql
security definer
stable
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;
  return query
    select *
    from public.leagues
    where invite_code = upper(trim(p_code))
    limit 1;
end;
$$;

grant execute on function public.find_league_by_invite(text) to authenticated;

-- ─── RPC : révélation marché ───
create or replace function public.reveal_league_market(p_league_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from public.league_members
    where league_id = p_league_id and user_id = auth.uid()
  ) then
    raise exception 'not a league member';
  end if;

  update public.market_bids
  set revealed = true
  where league_id = p_league_id;

  update public.leagues
  set status = 'active'
  where id = p_league_id and status = 'market';
end;
$$;

grant execute on function public.reveal_league_market(uuid) to authenticated;

-- ─── RPC : marquer les gagnants d'enchères (cross-user, post-révélation) ───
create or replace function public.finalize_auction_winners(p_league_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from public.league_members
    where league_id = p_league_id and user_id = auth.uid()
  ) then
    raise exception 'not a league member';
  end if;

  update public.market_bids
  set won = false
  where league_id = p_league_id and revealed = true;

  update public.market_bids b
  set won = true
  from (
    select distinct on (player_id) id
    from public.market_bids
    where league_id = p_league_id and revealed = true and amount > 0
    order by player_id, amount desc, created_at asc
  ) w
  where b.id = w.id;
end;
$$;

grant execute on function public.finalize_auction_winners(uuid) to authenticated;

-- ─── Drop anciennes policies ───
drop policy if exists "profiles read all" on public.profiles;
drop policy if exists "profiles upsert own" on public.profiles;
drop policy if exists "profiles insert own" on public.profiles;
drop policy if exists "profiles update own" on public.profiles;

drop policy if exists "leagues read members" on public.leagues;
drop policy if exists "leagues read for join" on public.leagues;
drop policy if exists "leagues insert own" on public.leagues;
drop policy if exists "leagues update owner" on public.leagues;

drop policy if exists "members read league" on public.league_members;
drop policy if exists "members insert self" on public.league_members;
drop policy if exists "members update self" on public.league_members;

drop policy if exists "squad read league" on public.squad_players;
drop policy if exists "squad insert own" on public.squad_players;
drop policy if exists "squad update own" on public.squad_players;
drop policy if exists "squad delete own" on public.squad_players;

drop policy if exists "bids own" on public.market_bids;
drop policy if exists "bids select" on public.market_bids;
drop policy if exists "bids insert own" on public.market_bids;
drop policy if exists "bids update own" on public.market_bids;
drop policy if exists "bids delete own" on public.market_bids;

-- ─── PROFILES ───
create policy "profiles read all" on public.profiles
  for select using (true);

create policy "profiles insert own" on public.profiles
  for insert with check (auth.uid() = id);

create policy "profiles update own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- ─── LEAGUES ───
create policy "leagues read members" on public.leagues
  for select using (
    owner_id = auth.uid()
    or exists (
      select 1 from public.league_members m
      where m.league_id = leagues.id and m.user_id = auth.uid()
    )
  );

create policy "leagues insert own" on public.leagues
  for insert with check (owner_id = auth.uid());

create policy "leagues update owner" on public.leagues
  for update using (owner_id = auth.uid()) with check (owner_id = auth.uid());

-- ─── LEAGUE MEMBERS ───
create policy "members read league" on public.league_members
  for select using (
    exists (
      select 1 from public.league_members m
      where m.league_id = league_members.league_id and m.user_id = auth.uid()
    )
  );

create policy "members insert self" on public.league_members
  for insert with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.leagues l
      where l.id = league_id and l.status = 'market'
    )
  );

create policy "members update self" on public.league_members
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ─── SQUAD ───
create policy "squad read league" on public.squad_players
  for select using (
    exists (
      select 1 from public.league_members m
      where m.league_id = squad_players.league_id and m.user_id = auth.uid()
    )
  );

create policy "squad insert own" on public.squad_players
  for insert with check (
    exists (
      select 1 from public.league_members lm
      join public.leagues l on l.id = lm.league_id
      where lm.id = member_id
        and lm.user_id = auth.uid()
        and lm.league_id = squad_players.league_id
        and l.status in ('market', 'active')
    )
  );

create policy "squad update own" on public.squad_players
  for update using (
    exists (
      select 1 from public.league_members lm
      where lm.id = member_id and lm.user_id = auth.uid() and lm.league_id = squad_players.league_id
    )
  ) with check (
    exists (
      select 1 from public.league_members lm
      where lm.id = member_id and lm.user_id = auth.uid() and lm.league_id = squad_players.league_id
    )
  );

create policy "squad delete own" on public.squad_players
  for delete using (
    exists (
      select 1 from public.league_members lm
      where lm.id = member_id and lm.user_id = auth.uid() and lm.league_id = squad_players.league_id
    )
  );

-- ─── MARKET BIDS ───
create policy "bids select" on public.market_bids
  for select using (
    exists (
      select 1 from public.league_members lm
      where lm.id = member_id and lm.user_id = auth.uid()
    )
    or (
      revealed = true
      and exists (
        select 1 from public.league_members m
        where m.league_id = market_bids.league_id and m.user_id = auth.uid()
      )
    )
  );

create policy "bids insert own" on public.market_bids
  for insert with check (
    exists (
      select 1 from public.league_members lm
      join public.leagues l on l.id = lm.league_id
      where lm.id = member_id
        and lm.user_id = auth.uid()
        and lm.league_id = market_bids.league_id
        and l.status = 'market'
    )
  );

create policy "bids update own" on public.market_bids
  for update using (
    exists (
      select 1 from public.league_members lm
      where lm.id = member_id and lm.user_id = auth.uid() and lm.league_id = market_bids.league_id
    )
  ) with check (
    exists (
      select 1 from public.league_members lm
      join public.leagues l on l.id = lm.league_id
      where lm.id = member_id
        and lm.user_id = auth.uid()
        and lm.league_id = market_bids.league_id
        and (l.status = 'market' or (l.status = 'active' and revealed = true))
    )
  );

create policy "bids delete own" on public.market_bids
  for delete using (
    exists (
      select 1 from public.league_members lm
      join public.leagues l on l.id = lm.league_id
      where lm.id = member_id
        and lm.user_id = auth.uid()
        and lm.league_id = market_bids.league_id
        and l.status = 'market'
    )
  );
