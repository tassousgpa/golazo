-- GOLAZO — schéma Supabase v1
-- ═══════════════════════════════════════════════════════════════════
-- OÙ EXÉCUTER : Supabase Dashboard → SQL Editor → New query → Run
-- (pas via l'API REST, pas un replica, pas un outil en lecture seule)
--
-- ERREUR 25006 "read-only transaction" ?
-- 1) Projet en PAUSE (gratuit) → Dashboard → Restore project / Unpause
-- 2) Disque > 95 % → libérer de l'espace ou upgrader le plan
-- 3) Vérifier avec la requête ci-dessous (read_only doit être "off")
-- ═══════════════════════════════════════════════════════════════════

-- Diagnostic (exécuter seul d'abord si tu as l'erreur 25006)
-- select
--   pg_is_in_recovery() as replica_read_only,
--   current_setting('default_transaction_read_only') as default_read_only;

-- Si default_read_only = 'on' ET que le projet est actif, décommenter puis Run :
-- set session characteristics as transaction read write;

-- ─── Tables ───────────────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  pseudo text not null check (char_length(pseudo) >= 2),
  team_name text not null check (char_length(team_name) >= 2),
  country char(3) not null default 'FRA',
  avatar_emoji text default '🦊',
  xp int not null default 0,
  level int not null default 1,
  credits int not null default 12450,
  gems int not null default 320,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Ligues privées
create table if not exists public.leagues (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  invite_code text not null unique,
  owner_id uuid not null references public.profiles(id) on delete cascade,
  market_hours int not null default 6,
  start_credits int not null default 500,
  market_ends_at timestamptz,
  status text not null default 'draft' check (status in ('draft', 'market', 'active', 'finished')),
  created_at timestamptz not null default now()
);

-- Membres d'une ligue (1 ligne = 1 manager)
create table if not exists public.league_members (
  id uuid primary key default gen_random_uuid(),
  league_id uuid not null references public.leagues(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  slot_label text,
  pts int not null default 0,
  w int not null default 0,
  d int not null default 0,
  l int not null default 0,
  gf int not null default 0,
  ga int not null default 0,
  market_credits int not null default 500,
  unique (league_id, user_id)
);

-- Effectif : joueurs possédés (catalogue CDM = ids p1…p1250 côté app)
create table if not exists public.squad_players (
  id uuid primary key default gen_random_uuid(),
  league_id uuid not null references public.leagues(id) on delete cascade,
  member_id uuid not null references public.league_members(id) on delete cascade,
  player_id text not null,
  slot text not null check (slot in ('gk', 'field', 'bench')),
  slot_order int not null default 0,
  unique (league_id, player_id)
);

-- Enchères secrètes
create table if not exists public.market_bids (
  id uuid primary key default gen_random_uuid(),
  league_id uuid not null references public.leagues(id) on delete cascade,
  member_id uuid not null references public.league_members(id) on delete cascade,
  player_id text not null,
  amount int not null check (amount > 0),
  revealed boolean not null default false,
  won boolean,
  created_at timestamptz not null default now(),
  unique (league_id, member_id, player_id)
);

-- Un joueur = 1 seul manager par ligue
create unique index if not exists squad_players_league_player_uidx
  on public.squad_players (league_id, player_id);

-- RLS
alter table public.profiles enable row level security;
alter table public.leagues enable row level security;
alter table public.league_members enable row level security;
alter table public.squad_players enable row level security;
alter table public.market_bids enable row level security;

create policy "profiles read all" on public.profiles for select using (true);
create policy "profiles upsert own" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "leagues read members" on public.leagues for select using (
  exists (select 1 from public.league_members m where m.league_id = leagues.id and m.user_id = auth.uid())
  or owner_id = auth.uid()
);

create policy "leagues insert own" on public.leagues for insert with check (owner_id = auth.uid());

create policy "members read league" on public.league_members for select using (
  exists (select 1 from public.league_members m where m.league_id = league_members.league_id and m.user_id = auth.uid())
);

create policy "members insert self" on public.league_members for insert with check (user_id = auth.uid());

create policy "squad read league" on public.squad_players for select using (
  exists (
    select 1 from public.league_members m
    where m.id = squad_players.member_id and m.league_id in (
      select league_id from public.league_members where user_id = auth.uid()
    )
  )
);

-- Suite obligatoire : exécuter schema-rls.sql (ou schema-patch.sql, même contenu)
-- pour policies complètes, triggers profil, RPC join/révélation/gagnants.
