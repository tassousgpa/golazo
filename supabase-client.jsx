// supabase-client.jsx — auth, ligue, enchères, effectif

const cfg = () => window.GOLAZO_CONFIG || {};

function isSupabaseReady() {
  const c = cfg();
  return !!(c.supabaseUrl && c.supabaseAnonKey);
}

let _client = null;

function getSupabase() {
  if (!isSupabaseReady()) return null;
  if (_client) return _client;
  if (!window.supabase?.createClient) {
    console.warn('GOLAZO: @supabase/supabase-js non chargé');
    return null;
  }
  _client = window.supabase.createClient(cfg().supabaseUrl, cfg().supabaseAnonKey);
  return _client;
}

function formatSupabaseError(error) {
  if (!error) return null;
  const code = error.code || '';
  const msg = error.message || String(error);
  if (code === '42501' || /row-level security/i.test(msg)) {
    return `Accès refusé (RLS) : ${msg}`;
  }
  if (code === '23503') return `Référence invalide — profil ou ligue manquant : ${msg}`;
  if (code === '23505') return `Doublon — données déjà enregistrées : ${msg}`;
  return msg;
}

async function supabaseUserId() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user?.id || null;
}

function generateInviteCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = 'GOL-';
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

// ─── Auth ───

async function supabaseSignUp({ email, password, pseudo }) {
  const sb = getSupabase();
  if (!sb) return { user: null, error: null, offline: true };
  const { data, error } = await sb.auth.signUp({
    email,
    password,
    options: { data: { pseudo: pseudo || '' } },
  });
  return { user: data.user, error, offline: false };
}

async function supabaseSignIn({ email, password }) {
  const sb = getSupabase();
  if (!sb) return { user: null, error: null, offline: true };
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  return { user: data.user, error, offline: false };
}

async function supabaseSignOut() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
}

async function supabaseGetSession() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session;
}

// ─── Profil ───

async function supabaseUpsertProfile(profile) {
  const sb = getSupabase();
  if (!sb) return { error: null, offline: true };
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return { error: new Error('Non connecté'), offline: false };
  const { error } = await sb.from('profiles').upsert({
    id: user.id,
    pseudo: profile.pseudo,
    team_name: profile.teamName,
    country: profile.country || 'FRA',
    updated_at: new Date().toISOString(),
  }, { onConflict: 'id' });
  return { error, offline: false, message: formatSupabaseError(error) };
}

async function supabaseFetchProfile() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return null;
  const { data, error } = await sb.from('profiles').select('*').eq('id', user.id).maybeSingle();
  if (error || !data) return null;
  return {
    pseudo: data.pseudo,
    teamName: data.team_name,
    country: data.country,
    setupComplete: !!(data.pseudo && data.team_name),
  };
}

// ─── Ligue ───

function mapLeagueRow(row) {
  if (!row) return null;
  const league = row.leagues || row.league || row;
  const member = row.id ? row : null;
  return {
    leagueId: league.id,
    memberId: member?.id || row.member_id,
    leagueName: league.name,
    inviteCode: league.invite_code,
    startCredits: league.start_credits ?? 500,
    marketHours: league.market_hours ?? 6,
    leagueStatus: league.status,
    marketEndsAt: league.market_ends_at,
    marketCredits: member?.market_credits ?? league.start_credits ?? 500,
    isOwner: member?.user_id ? undefined : row.is_owner,
  };
}

async function supabaseFetchMyLeague() {
  const sb = getSupabase();
  const uid = await supabaseUserId();
  if (!sb || !uid) return null;

  const { data, error } = await sb
    .from('league_members')
    .select('id, market_credits, user_id, leagues(id, name, invite_code, start_credits, market_hours, market_ends_at, status, owner_id)')
    .eq('user_id', uid)
    .order('id', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data?.leagues) return null;
  const ctx = mapLeagueRow(data);
  if (ctx) ctx.isOwner = data.leagues.owner_id === uid;
  return ctx;
}

async function supabaseCreateLeague(profile) {
  const sb = getSupabase();
  const uid = await supabaseUserId();
  if (!sb || !uid) return { error: new Error('Non connecté'), offline: true };

  const inviteCode = profile.inviteCode || generateInviteCode();
  const hours = profile.marketHours || 6;
  const credits = profile.startCredits || 500;
  const marketEnds = new Date(Date.now() + hours * 3600000).toISOString();

  const { data: league, error: leagueErr } = await sb
    .from('leagues')
    .insert({
      name: profile.leagueName || 'Coupe entre potes',
      invite_code: inviteCode,
      owner_id: uid,
      market_hours: hours,
      start_credits: credits,
      market_ends_at: marketEnds,
      status: 'market',
    })
    .select()
    .single();

  if (leagueErr) return { error: leagueErr, offline: false, message: formatSupabaseError(leagueErr) };

  const { data: member, error: memberErr } = await sb
    .from('league_members')
    .insert({
      league_id: league.id,
      user_id: uid,
      slot_label: profile.teamName || profile.pseudo,
      market_credits: credits,
    })
    .select()
    .single();

  if (memberErr) return { error: memberErr, offline: false, message: formatSupabaseError(memberErr) };

  return {
    offline: false,
    error: null,
    leagueId: league.id,
    memberId: member.id,
    inviteCode: league.invite_code,
    startCredits: credits,
    leagueName: league.name,
    leagueStatus: league.status,
    marketEndsAt: league.market_ends_at,
  };
}

async function supabaseJoinLeague(inviteCode) {
  const sb = getSupabase();
  const uid = await supabaseUserId();
  if (!sb || !uid) return { error: new Error('Non connecté'), offline: true };

  const code = (inviteCode || '').trim().toUpperCase();
  const { data: leagues, error: findErr } = await sb.rpc('find_league_by_invite', { p_code: code });
  const league = Array.isArray(leagues) ? leagues[0] : leagues;

  if (findErr || !league) return { error: findErr || new Error('Ligue introuvable'), offline: false, message: formatSupabaseError(findErr) || 'Ligue introuvable' };
  if (league.status !== 'market') return { error: new Error('Le marché de cette ligue est fermé'), offline: false };

  const { data: existing } = await sb
    .from('league_members')
    .select('id')
    .eq('league_id', league.id)
    .eq('user_id', uid)
    .maybeSingle();

  if (existing) {
    return {
      offline: false,
      error: null,
      leagueId: league.id,
      memberId: existing.id,
      inviteCode: league.invite_code,
      startCredits: league.start_credits,
      leagueName: league.name,
      leagueStatus: league.status,
    };
  }

  const { data: member, error: joinErr } = await sb
    .from('league_members')
    .insert({
      league_id: league.id,
      user_id: uid,
      market_credits: league.start_credits,
    })
    .select()
    .single();

  if (joinErr) return { error: joinErr, offline: false };

  return {
    offline: false,
    error: null,
    leagueId: league.id,
    memberId: member.id,
    inviteCode: league.invite_code,
    startCredits: league.start_credits,
    leagueName: league.name,
    leagueStatus: league.status,
  };
}

async function supabaseFetchLeagueMembers(leagueId) {
  const sb = getSupabase();
  if (!sb || !leagueId) return [];
  const { data, error } = await sb
    .from('league_members')
    .select('id, pts, w, d, l, gf, ga, market_credits, profiles(pseudo, team_name, country)')
    .eq('league_id', leagueId);
  if (error || !data) return [];
  return data.map(m => ({
    memberId: m.id,
    name: m.profiles?.pseudo || m.profiles?.team_name || 'Joueur',
    teamName: m.profiles?.team_name,
    country: m.profiles?.country,
    pts: m.pts,
    w: m.w, d: m.d, l: m.l, gf: m.gf, ga: m.ga,
    marketCredits: m.market_credits,
  }));
}

// ─── Enchères ───

async function supabaseSyncBids(leagueId, memberId, bidsMap) {
  const sb = getSupabase();
  if (!sb || !leagueId || !memberId) return { error: null, offline: true };

  const rows = Object.entries(bidsMap || {})
    .filter(([, amount]) => amount > 0)
    .map(([player_id, amount]) => ({
      league_id: leagueId,
      member_id: memberId,
      player_id,
      amount,
      revealed: false,
    }));

  if (rows.length === 0) return { error: null, offline: false };

  const { error } = await sb
    .from('market_bids')
    .upsert(rows, { onConflict: 'league_id,member_id,player_id' });

  return { error, offline: false, message: formatSupabaseError(error) };
}

async function supabaseFetchMyBids(leagueId, memberId) {
  const sb = getSupabase();
  if (!sb || !leagueId || !memberId) return {};
  const { data, error } = await sb
    .from('market_bids')
    .select('player_id, amount')
    .eq('league_id', leagueId)
    .eq('member_id', memberId);
  if (error || !data) return {};
  return Object.fromEntries(data.map(b => [b.player_id, b.amount]));
}

async function supabaseFinalizeWinners(leagueId) {
  const sb = getSupabase();
  if (!sb || !leagueId) return { error: null, offline: true };
  const { error } = await sb.rpc('finalize_auction_winners', { p_league_id: leagueId });
  return { error, offline: false, message: formatSupabaseError(error) };
}

async function supabaseRevealMarket(leagueId) {
  const sb = getSupabase();
  if (!sb || !leagueId) return { error: null, offline: true };
  const { error } = await sb.rpc('reveal_league_market', { p_league_id: leagueId });
  return { error, offline: false, message: formatSupabaseError(error) };
}

function memberLabel(memberRow) {
  const p = memberRow?.profiles;
  return p?.pseudo || p?.team_name || 'Joueur';
}

async function supabaseResolveAuction(leagueId, myMemberId, myBids, packPlayerIds = []) {
  const sb = getSupabase();
  if (!sb || !leagueId) return null;

  await supabaseSyncBids(leagueId, myMemberId, myBids);
  const { error: revealErr } = await supabaseRevealMarket(leagueId);
  if (revealErr) throw revealErr;
  const { error: finalizeErr } = await supabaseFinalizeWinners(leagueId);
  if (finalizeErr) throw finalizeErr;

  const playerIds = [...new Set([
    ...Object.keys(myBids || {}),
    ...packPlayerIds,
  ])];

  const { data: allBids, error } = await sb
    .from('market_bids')
    .select('player_id, amount, member_id, won, league_members(id, user_id, profiles(pseudo, team_name))')
    .eq('league_id', leagueId)
    .in('player_id', playerIds.length ? playerIds : ['__none__']);

  if (error) throw error;

  const packSet = new Set(packPlayerIds);
  const byPlayer = {};
  (allBids || []).forEach(b => {
    if (!byPlayer[b.player_id]) byPlayer[b.player_id] = [];
    byPlayer[b.player_id].push(b);
  });

  const results = playerIds.map(pid => {
    const p = byId(pid);
    if (!p) return null;
    const mine = myBids[pid] || 0;
    const inPack = packSet.has(pid);

    if (inPack) {
      return { p, mine, all: [], winner: null, youWon: true, inPack: true };
    }

    const pool = byPlayer[pid] || [];
    const ranked = pool
      .filter(b => b.amount > 0)
      .sort((a, b) => b.amount - a.amount);

    const top = ranked[0];
    const youWon = top && top.member_id === myMemberId;

    const all = ranked.map(b => ({
      mgr: { name: memberLabel(b.league_members), you: b.member_id === myMemberId },
      amt: b.amount,
      you: b.member_id === myMemberId,
    }));

    if (mine && !all.some(x => x.you)) {
      all.push({ mgr: { name: 'Toi', you: true }, amt: mine, you: true });
      all.sort((a, b) => b.amt - a.amt);
    }

    const winner = all[0] || null;

    return {
      p,
      mine,
      all,
      winner: winner ? { mgr: winner.mgr, amt: winner.amt, you: winner.you } : null,
      youWon: !!youWon,
      inPack: false,
    };
  }).filter(Boolean);

  const wonIds = results.filter(r => r.youWon || r.inPack).map(r => r.p.id);

  return { results, wonIds };
}

// ─── Effectif ───

async function supabaseSyncSquad(leagueId, memberId, playerIds) {
  const sb = getSupabase();
  if (!sb || !leagueId || !memberId || !playerIds?.length) return { error: null, offline: true };

  await sb.from('squad_players').delete().eq('member_id', memberId);

  const players = playerIds.map(id => byId(id)).filter(Boolean);
  const gk = players.find(p => p.pos === 'GK');
  const ordered = [
    ...(gk ? [gk] : []),
    ...players.filter(p => p !== gk),
  ];

  const rows = ordered.map((p, i) => {
    let slot = 'bench';
    if (p.pos === 'GK') slot = 'gk';
    else if (i <= 3) slot = 'field';
    return {
      league_id: leagueId,
      member_id: memberId,
      player_id: p.id,
      slot,
      slot_order: i,
    };
  });

  const { error } = await sb.from('squad_players').insert(rows);
  return { error, offline: false, message: formatSupabaseError(error) };
}

async function supabaseFetchMySquad(leagueId, memberId) {
  const sb = getSupabase();
  if (!sb || !leagueId || !memberId) return [];
  const { data, error } = await sb
    .from('squad_players')
    .select('player_id, slot, slot_order')
    .eq('league_id', leagueId)
    .eq('member_id', memberId)
    .order('slot_order');
  if (error || !data) return [];
  return data.map(r => r.player_id);
}

Object.assign(window, {
  isSupabaseReady, getSupabase, generateInviteCode, formatSupabaseError,
  supabaseSignUp, supabaseSignIn, supabaseSignOut, supabaseGetSession,
  supabaseUpsertProfile, supabaseFetchProfile,
  supabaseFetchMyLeague, supabaseCreateLeague, supabaseJoinLeague, supabaseFetchLeagueMembers,
  supabaseSyncBids, supabaseFetchMyBids, supabaseRevealMarket, supabaseFinalizeWinners, supabaseResolveAuction,
  supabaseSyncSquad, supabaseFetchMySquad,
});
