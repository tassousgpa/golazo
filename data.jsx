// data.jsx — GOLAZO: CDM 2026 player pool, league state, helpers
// Player data loaded from cdm-players.jsx (generated via scripts/build-cdm-players.mjs)

const COUNTRIES = { ...window.CDM_COUNTRIES };
const PLAYERS = window.CDM_PLAYERS;

const byId = (id) => PLAYERS.find(p => p.id === id);

function resolveRoles(squads) {
  const roles = {};
  for (const [mid, sq] of Object.entries(squads)) {
    const pls = [...(sq.field || []), ...(sq.bench || [])].map(id => byId(id)).filter(Boolean);
    const att = pls.filter(p => p.pos === 'ATT').sort((a, b) => b.ovr - a.ovr)[0] || pls[0];
    const def = pls.filter(p => p.pos === 'DEF').sort((a, b) => b.ovr - a.ovr)[0] || pls[0];
    const midP = pls.filter(p => p.pos === 'MID').sort((a, b) => b.stats.pas - a.stats.pas)[0] || pls[0];
    roles[mid] = {
      corner: midP?.id,
      penalty: att?.id,
      duelAtt: att?.id,
      duelDef: def?.id,
    };
  }
  return roles;
}
const ROLES = {};

// ─── Rarity tiers ───
const RARITY = {
  commun:     { label: 'Commun',     short: 'C', ring: '#8a6228', glow: 'rgba(138,96,40,0.35)',  text: '#e8c070', holo: 0    },
  rare:       { label: 'Rare',       short: 'R', ring: '#b8c8e8', glow: 'rgba(180,200,240,0.4)', text: '#d0daf0', holo: 0.2  },
  epique:     { label: 'Épique',     short: 'É', ring: '#c9922e', glow: 'rgba(201,146,46,0.5)',  text: '#f0d090', holo: 0.55 },
  legendaire: { label: 'Légendaire', short: 'L', ring: '#e8c276', glow: 'rgba(232,194,118,0.7)', text: '#fff4d0', holo: 1    },
};
const POS_GLOW = {
  GK:  { base: ['#160828', '#0c0418'], gr: '130,50,210'  },
  DEF: { base: ['#072238', '#031018'], gr: '40,150,210'  },
  MID: { base: ['#281808', '#180e04'], gr: '210,125,35'  },
  ATT: { base: ['#060e32', '#03071e'], gr: '55,95,250'   },
};
const RAR_INTENSITY = { commun: 0.55, rare: 0.75, epique: 0.95, legendaire: 1.18 };
const RARITY_ORDER = ['commun', 'rare', 'epique', 'legendaire'];

function visualTierOf(rarity) {
  if (rarity === 'legendaire') return 'legendaire';
  if (rarity === 'rare' || rarity === 'epique') return 'rare';
  return 'commun';
}

const CARD_VISUAL = {
  commun:     { label: 'Commun',     short: 'C', ring: '#5a5a68', glow: 'transparent',              text: '#a8a8b8', holo: 0,    intensity: 0.35, frame: 0.35 },
  rare:       { label: 'Rare',       short: 'R', ring: '#9eb0d8', glow: 'rgba(158,176,216,0.38)',   text: '#d0daf0', holo: 0.22, intensity: 0.68, frame: 0.65 },
  legendaire: { label: 'Légendaire', short: 'L', ring: '#e8c276', glow: 'rgba(232,194,118,0.82)',   text: '#fff4d0', holo: 1,    intensity: 1.2,  frame: 1, shimmer: true },
};

function cardVisualOf(rarity) {
  return CARD_VISUAL[visualTierOf(rarity)];
}

const PROFILE_KEY = 'golazo_profile';
const SESSION_KEY = 'golazo_session';

function hasSession() {
  try { return sessionStorage.getItem(SESSION_KEY) === '1'; } catch { return false; }
}
function setSession(active) {
  try {
    if (active) sessionStorage.setItem(SESSION_KEY, '1');
    else sessionStorage.removeItem(SESSION_KEY);
  } catch { /* ignore */ }
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  applyProfile(profile);
}

function applyProfile(profile) {
  if (!profile) return;
  const you = MANAGERS.find(m => m.you);
  if (!you) return;
  if (profile.pseudo) you.name = profile.pseudo;
  if (profile.teamName) you.teamName = profile.teamName;
  if (profile.country) you.country = profile.country;
  if (profile.leagueName) you.leagueName = profile.leagueName;
}

const MY_SQUAD_KEY = 'golazo_squad';

function applyMySquad(playerIds) {
  if (!playerIds?.length) return;
  const players = playerIds.map(byId).filter(Boolean);
  const gk = players.find(p => p.pos === 'GK');
  const rest = players.filter(p => p !== gk);
  const gkId = gk?.id || players[0]?.id;
  const others = gk ? rest : players.slice(1);
  SQUADS.m1 = {
    gk: gkId,
    field: others.slice(0, 3).map(p => p.id),
    bench: others.slice(3).map(p => p.id),
  };
  syncRoles();
  try { localStorage.setItem(MY_SQUAD_KEY, JSON.stringify(playerIds)); } catch { /* ignore */ }
}

function loadMySquad() {
  try {
    const raw = localStorage.getItem(MY_SQUAD_KEY);
    if (raw) applyMySquad(JSON.parse(raw));
  } catch { /* ignore */ }
}

function isTestPseudo(pseudo) {
  return normSearch(pseudo) === 'test';
}

function initialsOf(name) {
  const s = (name || '').trim();
  if (!s) return '?';
  const parts = s.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return s.slice(0, 2).toUpperCase();
}

function squadIdsFrom(mid, squads) {
  const sq = (squads || SQUADS)[mid];
  if (!sq) return [];
  return [sq.gk, ...(sq.field || []), ...(sq.bench || [])].filter(Boolean);
}

const POS = {
  GK:  { label: 'GAR', full: 'Gardien',     color: '#ffd24a' },
  DEF: { label: 'DÉF', full: 'Défenseur',   color: '#4ad6ff' },
  MID: { label: 'MIL', full: 'Milieu',      color: '#4affa0' },
  ATT: { label: 'ATT', full: 'Attaquant',   color: '#ff6b8a' },
};

const STAT_KEYS = ['vit', 'tir', 'dri', 'pas', 'phy', 'def'];
const STAT_LABEL = { vit: 'Vitesse', tir: 'Tir', dri: 'Dribble', pas: 'Passe', phy: 'Physique', def: 'Défense' };
const STAT_ABBR  = { vit: 'VIT', tir: 'TIR', dri: 'DRI', pas: 'PAS', phy: 'PHY', def: 'DÉF' };

function overall(p) {
  const s = p.stats;
  if (p.pos === 'GK') return s.def;
  const w = {
    DEF: { vit: 1, tir: 0.4, dri: 0.6, pas: 1, phy: 1.3, def: 1.6 },
    MID: { vit: 1, tir: 0.9, dri: 1.2, pas: 1.4, phy: 1, def: 0.9 },
    ATT: { vit: 1.2, tir: 1.5, dri: 1.3, pas: 0.9, phy: 0.9, def: 0.4 },
  }[p.pos];
  let num = 0, den = 0;
  for (const k of STAT_KEYS) { num += s[k] * w[k]; den += w[k]; }
  return Math.round(num / den);
}

function normSearch(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function filterPlayers(players, { q = '', country = 'ALL', pos = 'ALL', ovrMin = 58, ovrMax = 99 } = {}) {
  const nq = normSearch(q);
  return players.filter(p => {
    if (nq && !normSearch(p.name).includes(nq)) return false;
    if (country !== 'ALL' && p.country !== country) return false;
    if (pos !== 'ALL' && p.pos !== pos) return false;
    if (p.ovr < ovrMin || p.ovr > ovrMax) return false;
    return true;
  });
}

const COUNTRY_LIST = Object.entries(COUNTRIES)
  .map(([code, c]) => ({ code, name: c.name }))
  .sort((a, b) => a.name.localeCompare(b.name, 'fr'));

function playerByName(name) {
  const n = normSearch(name);
  return PLAYERS.find(p => normSearch(p.name) === n);
}

// ─── Demo league — 4 friends, 6 players each ───
const DEMO_SQUADS = JSON.parse(JSON.stringify(window.CDM_DEMO_SQUADS));
const SQUADS = JSON.parse(JSON.stringify(DEMO_SQUADS));

const DEMO_MANAGERS = [
  { id: 'm1', name: 'Toi',   avatar: '🦊', color: '#ff8a1e', you: true },
  { id: 'm2', name: 'Léa',   avatar: '🐯', color: '#4ad6ff' },
  { id: 'm3', name: 'Karim', avatar: '🦅', color: '#4affa0' },
  { id: 'm4', name: 'Sofia', avatar: '🐉', color: '#ff5da2' },
];
const MANAGERS = JSON.parse(JSON.stringify(DEMO_MANAGERS));

const DEMO_STANDINGS = [
  { mid: 'm3', pts: 9, w: 3, d: 0, l: 1, gf: 8, ga: 4 },
  { mid: 'm1', pts: 7, w: 2, d: 1, l: 1, gf: 6, ga: 5 },
  { mid: 'm4', pts: 4, w: 1, d: 1, l: 2, gf: 5, ga: 6 },
  { mid: 'm2', pts: 4, w: 1, d: 1, l: 2, gf: 4, ga: 8 },
];
const STANDINGS = [];

function restoreManagers(src) {
  MANAGERS.length = 0;
  src.forEach(m => MANAGERS.push({ ...m }));
}

function restoreStandings(src) {
  STANDINGS.length = 0;
  src.forEach(s => STANDINGS.push({ ...s }));
}

function restoreSquads(src) {
  Object.keys(SQUADS).forEach(k => delete SQUADS[k]);
  Object.keys(src).forEach(k => {
    SQUADS[k] = JSON.parse(JSON.stringify(src[k]));
  });
}

function syncRoles() {
  const r = resolveRoles(SQUADS);
  Object.keys(ROLES).forEach(k => delete ROLES[k]);
  Object.assign(ROLES, r);
}

function buildTestProfile(overrides = {}) {
  return {
    pseudo: 'TEST',
    teamName: 'FC Démo',
    country: 'FRA',
    leagueName: 'Ligue Démo',
    marketHours: 6,
    startCredits: 500,
    inviteCode: 'TST-DEMO',
    setupComplete: true,
    marketComplete: true,
    testMode: true,
    mySquad: squadIdsFrom('m1', DEMO_SQUADS),
    ...overrides,
  };
}

function applyBlankState() {
  restoreSquads({ m1: { gk: null, field: [], bench: [] } });
  restoreStandings([]);
  restoreManagers([{ id: 'm1', name: 'Toi', avatar: '🦊', color: '#ff8a1e', you: true }]);
  syncRoles();
  try { localStorage.removeItem(MY_SQUAD_KEY); } catch { /* ignore */ }
}

function applyTestState(profile) {
  restoreSquads(DEMO_SQUADS);
  restoreStandings(DEMO_STANDINGS);
  restoreManagers(DEMO_MANAGERS);
  syncRoles();
  const p = { ...buildTestProfile(), ...profile };
  applyProfile(p);
  applyMySquad(p.mySquad || squadIdsFrom('m1', DEMO_SQUADS));
  return p;
}

function syncGameStateFromProfile(profile) {
  if (!profile) {
    applyBlankState();
    return;
  }
  if (isTestPseudo(profile.pseudo) || profile.testMode) {
    applyTestState(profile);
    return;
  }
  applyBlankState();
  applyProfile(profile);
  if (profile.mySquad?.length && profile.marketComplete) {
    applyMySquad(profile.mySquad);
  }
}

function bootstrapGameState() {
  syncGameStateFromProfile(loadProfile());
}

const LIVE_BOOSTS = (() => {
  const b = (name, stat, amount, reason, big = false) => {
    const p = playerByName(name);
    if (!p) return null;
    return [p.id, { stat, amount, reason, big }];
  };
  return Object.fromEntries([
    b('Kylian Mbappé', 'tir', 6, 'A marqué hier en Coupe du Monde', true),
    b('Kevin De Bruyne', 'dri', 3, 'Son équipe a gagné en Coupe du Monde', false),
    b('Marquinhos', 'def', 3, 'Son équipe a gagné en Coupe du Monde', false),
  ].filter(Boolean));
})();

function fieldOf(mid) {
  const sq = SQUADS[mid] || { gk: null, field: [], bench: [] };
  const gk = sq.gk ? withBoost(byId(sq.gk)) : null;
  const outfield = (sq.field || []).map(id => withBoost(byId(id))).filter(Boolean);
  return { gk, outfield, all: [gk, ...outfield].filter(Boolean) };
}
function withBoost(p) {
  if (!p) return p;
  const b = LIVE_BOOSTS[p.id];
  if (!b) return { ...p, stats: { ...p.stats } };
  const stats = { ...p.stats };
  stats[b.stat] = Math.min(99, stats[b.stat] + b.amount);
  const np = { ...p, stats, boost: b };
  np.ovr = overall(np);
  return np;
}

const MATCH_BONUSES = [
  { k: 'team', icon: 'chart', name: "Boost d'équipe", desc: '+4 sur une stat d\'équipe pour ce match' },
  { k: 'player', icon: 'star', name: 'Boost joueur', desc: '+6 sur un joueur pour ce match' },
  { k: 'force_pen', icon: 'target', name: 'Penalty forcé', desc: 'Un de tes moments devient un penalty' },
];
const MATCH_BONUS_STATS = ['vit', 'tir', 'dri', 'pas', 'phy', 'def'];
const PLANNED_BONUS_KEY = 'golazo_planned_bonus';

function loadPlannedBonus() {
  try {
    const raw = localStorage.getItem(PLANNED_BONUS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}
function savePlannedBonus(bonus) {
  if (!bonus) localStorage.removeItem(PLANNED_BONUS_KEY);
  else localStorage.setItem(PLANNED_BONUS_KEY, JSON.stringify(bonus));
}
function bonusLabel(bonus) {
  if (!bonus) return null;
  const meta = MATCH_BONUSES.find(x => x.k === bonus.type);
  if (!meta) return null;
  if (bonus.type === 'force_pen') return meta.name;
  if (bonus.type === 'team') return `${meta.name} · ${STAT_LABEL[bonus.stat] || bonus.stat}`;
  const p = bonus.playerId ? byId(bonus.playerId) : null;
  return p ? `${meta.name} · ${p.name.split(' ').pop()} ${STAT_ABBR[bonus.stat] || ''}` : meta.name;
}

// Pool d'enchères par défaut — stars CDM 2026
const AUCTION_POOL_NAMES = [
  'Kylian Mbappé', 'Erling Braut Haaland', 'Jude Bellingham', 'Rodri', 'Mohamed Salah',
  'Viní Jr.', 'Lamine Yamal', 'Florian Wirtz', 'Jamal Musiala', 'Virgil van Dijk',
  'Kevin De Bruyne', 'Harry Kane', 'Federico Valverde', 'Achraf Hakimi', 'Lautaro Martínez',
];
const AUCTION_POOL_IDS = AUCTION_POOL_NAMES.map(playerByName).filter(Boolean).map(p => p.id);

bootstrapGameState();

Object.assign(window, {
  COUNTRIES, RARITY, RARITY_ORDER, CARD_VISUAL, POS, STAT_KEYS, STAT_LABEL, STAT_ABBR,
  PLAYERS, byId, MANAGERS, SQUADS, ROLES, STANDINGS, LIVE_BOOSTS,
  MATCH_BONUSES, MATCH_BONUS_STATS, PLANNED_BONUS_KEY, PROFILE_KEY, SESSION_KEY,
  COUNTRY_LIST, filterPlayers, normSearch, AUCTION_POOL_IDS, playerByName,
  overall, fieldOf, withBoost, loadPlannedBonus, savePlannedBonus, bonusLabel,
  visualTierOf, cardVisualOf, loadProfile, saveProfile, applyProfile,
  hasSession, setSession, applyMySquad, loadMySquad, MY_SQUAD_KEY,
  isTestPseudo, initialsOf, buildTestProfile, applyBlankState, applyTestState,
  syncGameStateFromProfile, bootstrapGameState,
});
