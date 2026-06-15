// data.jsx — GOLAZO: CDM 2026 player pool, league state, helpers
// Player data loaded from cdm-players.jsx (generated via scripts/build-cdm-players.mjs)

const COUNTRIES = { ...window.CDM_COUNTRIES };
const PLAYERS = window.CDM_PLAYERS;
const SQUADS = window.CDM_DEMO_SQUADS;

const byId = (id) => PLAYERS.find(p => p.id === id);

function resolveRoles(squads) {
  const roles = {};
  for (const [mid, sq] of Object.entries(squads)) {
    const pls = [...sq.field, ...sq.bench].map(id => byId(id)).filter(Boolean);
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
const ROLES = resolveRoles(SQUADS);

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
const MANAGERS = [
  { id: 'm1', name: 'Toi',   avatar: '🦊', color: '#ff8a1e', you: true },
  { id: 'm2', name: 'Léa',   avatar: '🐯', color: '#4ad6ff' },
  { id: 'm3', name: 'Karim', avatar: '🦅', color: '#4affa0' },
  { id: 'm4', name: 'Sofia', avatar: '🐉', color: '#ff5da2' },
];

const STANDINGS = [
  { mid: 'm3', pts: 9, w: 3, d: 0, l: 1, gf: 8, ga: 4 },
  { mid: 'm1', pts: 7, w: 2, d: 1, l: 1, gf: 6, ga: 5 },
  { mid: 'm4', pts: 4, w: 1, d: 1, l: 2, gf: 5, ga: 6 },
  { mid: 'm2', pts: 4, w: 1, d: 1, l: 2, gf: 4, ga: 8 },
];

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
  const sq = SQUADS[mid];
  const gk = withBoost(byId(sq.gk));
  const outfield = sq.field.map(id => withBoost(byId(id)));
  return { gk, outfield, all: [gk, ...outfield] };
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

Object.assign(window, {
  COUNTRIES, RARITY, RARITY_ORDER, POS, STAT_KEYS, STAT_LABEL, STAT_ABBR,
  PLAYERS, byId, MANAGERS, SQUADS, ROLES, STANDINGS, LIVE_BOOSTS,
  MATCH_BONUSES, MATCH_BONUS_STATS, PLANNED_BONUS_KEY,
  COUNTRY_LIST, filterPlayers, normSearch, AUCTION_POOL_IDS, playerByName,
  overall, fieldOf, withBoost, loadPlannedBonus, savePlannedBonus, bonusLabel,
});
