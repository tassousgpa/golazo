// data.jsx — GOLAZO test data: countries, players, league state, helpers
// All players are FICTIONAL. No real-player likeness or names.

// ─── Countries (simplified stylised flags — 2-3 colour bars) ───
const COUNTRIES = {
  FRA: { name: 'France',     flag: ['#1b3fa0', '#ffffff', '#e8123b'], dir: 'v' },
  BRA: { name: 'Brésil',     flag: ['#0a9c4a', '#ffd400', '#0a9c4a'], dir: 'v' },
  ARG: { name: 'Argentine',  flag: ['#6ca7e0', '#ffffff', '#6ca7e0'], dir: 'h' },
  ESP: { name: 'Espagne',    flag: ['#c60b1e', '#ffc400', '#c60b1e'], dir: 'h' },
  ENG: { name: 'Angleterre', flag: ['#ffffff', '#cf142b', '#ffffff'], dir: 'h' },
  GER: { name: 'Allemagne',  flag: ['#111111', '#dd0000', '#ffce00'], dir: 'h' },
  POR: { name: 'Portugal',   flag: ['#0a6b2d', '#d4202a', '#d4202a'], dir: 'v' },
  NED: { name: 'Pays-Bas',   flag: ['#c8102e', '#ffffff', '#21468b'], dir: 'h' },
  BEL: { name: 'Belgique',   flag: ['#111111', '#ffd90f', '#e8123b'], dir: 'v' },
  CRO: { name: 'Croatie',    flag: ['#e8123b', '#ffffff', '#1b3fa0'], dir: 'h' },
  MAR: { name: 'Maroc',      flag: ['#c1272d', '#0a7b3e', '#c1272d'], dir: 'h' },
  JPN: { name: 'Japon',      flag: ['#ffffff', '#bc002d', '#ffffff'], dir: 'h' },
  USA: { name: 'États-Unis', flag: ['#b22234', '#ffffff', '#3c3b6e'], dir: 'h' },
  SEN: { name: 'Sénégal',    flag: ['#0a853f', '#ffe300', '#e31b23'], dir: 'v' },
};

// ─── Rarity tiers (ring/holo only — card bg driven by position in cards.jsx) ───
const RARITY = {
  commun:     { label: 'Commun',     short: 'C', ring: '#8a6228', glow: 'rgba(138,96,40,0.35)',  text: '#e8c070', holo: 0    },
  rare:       { label: 'Rare',       short: 'R', ring: '#b8c8e8', glow: 'rgba(180,200,240,0.4)', text: '#d0daf0', holo: 0.2  },
  epique:     { label: 'Épique',     short: 'É', ring: '#c9922e', glow: 'rgba(201,146,46,0.5)',  text: '#f0d090', holo: 0.55 },
  legendaire: { label: 'Légendaire', short: 'L', ring: '#e8c276', glow: 'rgba(232,194,118,0.7)', text: '#fff4d0', holo: 1    },
};
// Position-driven card background tints (matches reference: ATT=blue, MID=amber, DEF=teal, GK=purple)
const POS_GLOW = {
  GK:  { base: ['#160828', '#0c0418'], gr: '130,50,210'  },
  DEF: { base: ['#072238', '#031018'], gr: '40,150,210'  },
  MID: { base: ['#281808', '#180e04'], gr: '210,125,35'  },
  ATT: { base: ['#060e32', '#03071e'], gr: '55,95,250'   },
};
const RAR_INTENSITY = { commun: 0.55, rare: 0.75, epique: 0.95, legendaire: 1.18 };
const RARITY_ORDER = ['commun', 'rare', 'epique', 'legendaire'];

// ─── Positions ───
const POS = {
  GK:  { label: 'GAR', full: 'Gardien',     color: '#ffd24a' },
  DEF: { label: 'DÉF', full: 'Défenseur',   color: '#4ad6ff' },
  MID: { label: 'MIL', full: 'Milieu',      color: '#4affa0' },
  ATT: { label: 'ATT', full: 'Attaquant',   color: '#ff6b8a' },
};

// stat keys
const STAT_KEYS = ['vit', 'tir', 'dri', 'pas', 'phy', 'def'];
const STAT_LABEL = { vit: 'Vitesse', tir: 'Tir', dri: 'Dribble', pas: 'Passe', phy: 'Physique', def: 'Défense' };
const STAT_ABBR  = { vit: 'VIT', tir: 'TIR', dri: 'DRI', pas: 'PAS', phy: 'PHY', def: 'DÉF' };

// overall rating from stats (position-weighted)
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

// fictional player factory
let _pid = 0;
function mk(name, country, pos, rarity, stats) {
  const p = { id: 'p' + (++_pid), name, country, pos, rarity, stats };
  p.ovr = overall(p);
  // base market price scales with ovr & rarity
  const rMul = { commun: 1, rare: 1.35, epique: 1.8, legendaire: 2.6 }[rarity];
  p.price = Math.round((p.ovr * 1.6 + (p.ovr - 60) * (p.ovr - 60) * 0.05) * rMul / 5) * 5;
  if (p.price < 15) p.price = 15;
  return p;
}

// ─── 24 fictional players ───
const PLAYERS = [
  // Goalkeepers
  mk('V. Marchal',  'FRA', 'GK', 'legendaire', { vit: 58, tir: 30, dri: 42, pas: 70, phy: 84, def: 89 }),
  mk('K. Adeyemi',  'SEN', 'GK', 'epique',     { vit: 60, tir: 28, dri: 40, pas: 66, phy: 82, def: 84 }),
  mk('T. Brenner',  'GER', 'GK', 'rare',       { vit: 55, tir: 25, dri: 38, pas: 68, phy: 80, def: 79 }),
  mk('R. Okabe',    'JPN', 'GK', 'commun',     { vit: 57, tir: 24, dri: 36, pas: 64, phy: 75, def: 73 }),
  // Defenders
  mk('L. Hoffmann', 'GER', 'DEF', 'legendaire',{ vit: 78, tir: 52, dri: 64, pas: 80, phy: 88, def: 90 }),
  mk('D. Mensah',   'SEN', 'DEF', 'epique',    { vit: 84, tir: 48, dri: 66, pas: 74, phy: 86, def: 85 }),
  mk('A. Ferreira', 'POR', 'DEF', 'epique',    { vit: 80, tir: 50, dri: 70, pas: 82, phy: 80, def: 83 }),
  mk('M. Halilović','CRO', 'DEF', 'rare',      { vit: 75, tir: 46, dri: 60, pas: 78, phy: 84, def: 81 }),
  mk('J. Whitlock', 'ENG', 'DEF', 'rare',      { vit: 77, tir: 44, dri: 58, pas: 72, phy: 86, def: 80 }),
  mk('C. Romero',   'ARG', 'DEF', 'commun',    { vit: 73, tir: 40, dri: 56, pas: 70, phy: 82, def: 77 }),
  mk('E. Larsson',  'NED', 'DEF', 'commun',    { vit: 76, tir: 42, dri: 62, pas: 75, phy: 78, def: 75 }),
  // Midfielders
  mk('N. Belkacem', 'MAR', 'MID', 'legendaire',{ vit: 84, tir: 80, dri: 90, pas: 92, phy: 76, def: 72 }),
  mk('R. Santos',   'BRA', 'MID', 'legendaire',{ vit: 88, tir: 78, dri: 93, pas: 88, phy: 70, def: 64 }),
  mk('F. Moretti',  'ESP', 'MID', 'epique',    { vit: 80, tir: 74, dri: 88, pas: 90, phy: 72, def: 70 }),
  mk('I. Kovač',    'CRO', 'MID', 'epique',    { vit: 78, tir: 76, dri: 84, pas: 86, phy: 80, def: 74 }),
  mk('S. Dubois',   'FRA', 'MID', 'rare',      { vit: 82, tir: 70, dri: 82, pas: 84, phy: 74, def: 68 }),
  mk('Y. Tanaka',   'JPN', 'MID', 'rare',      { vit: 85, tir: 68, dri: 86, pas: 80, phy: 66, def: 66 }),
  mk('G. Ramsey',   'USA', 'MID', 'commun',    { vit: 79, tir: 66, dri: 78, pas: 78, phy: 72, def: 70 }),
  // Attackers
  mk('M. Costa',    'BRA', 'ATT', 'legendaire',{ vit: 93, tir: 92, dri: 91, pas: 80, phy: 78, def: 38 }),
  mk('A. Bauer',    'GER', 'ATT', 'legendaire',{ vit: 90, tir: 94, dri: 86, pas: 76, phy: 86, def: 40 }),
  mk('O. Diallo',   'SEN', 'ATT', 'epique',    { vit: 95, tir: 86, dri: 88, pas: 72, phy: 82, def: 36 }),
  mk('P. Navarro',  'ESP', 'ATT', 'epique',    { vit: 89, tir: 88, dri: 90, pas: 78, phy: 70, def: 34 }),
  mk('H. Vermeer',  'NED', 'ATT', 'rare',      { vit: 86, tir: 84, dri: 82, pas: 74, phy: 80, def: 38 }),
  mk('L. Moreau',   'FRA', 'ATT', 'commun',    { vit: 88, tir: 80, dri: 80, pas: 70, phy: 72, def: 32 }),
];

const byId = (id) => PLAYERS.find(p => p.id === id);

// ─── Demo league already created — 4 friends, 6 players each (4 on field) ───
// Field role: each team picks 1 GK + 3 outfield as starters; 2 on bench.
const MANAGERS = [
  { id: 'm1', name: 'Toi',   avatar: '🦊', color: '#ff8a1e', you: true },
  { id: 'm2', name: 'Léa',   avatar: '🐯', color: '#4ad6ff' },
  { id: 'm3', name: 'Karim', avatar: '🦅', color: '#4affa0' },
  { id: 'm4', name: 'Sofia', avatar: '🐉', color: '#ff5da2' },
];

// distribute players (no duplicates across the league)
const SQUADS = {
  m1: { gk: 'p1',  field: ['p5', 'p12', 'p19'], bench: ['p16', 'p23'] },
  m2: { gk: 'p2',  field: ['p6', 'p13', 'p20'], bench: ['p8', 'p21'] },
  m3: { gk: 'p3',  field: ['p7', 'p14', 'p22'], bench: ['p9', 'p17'] },
  m4: { gk: 'p4',  field: ['p11', 'p15', 'p24'], bench: ['p10', 'p18'] },
};

// roles set per manager for the competition (corner/penalty/1v1 att/1v1 def)
const ROLES = {
  m1: { corner: 'p12', penalty: 'p19', duelAtt: 'p19', duelDef: 'p5' },
  m2: { corner: 'p13', penalty: 'p20', duelAtt: 'p20', duelDef: 'p6' },
  m3: { corner: 'p14', penalty: 'p22', duelAtt: 'p22', duelDef: 'p7' },
  m4: { corner: 'p15', penalty: 'p24', duelAtt: 'p24', duelDef: 'p11' },
};

// standings (after a few matchdays)
const STANDINGS = [
  { mid: 'm3', pts: 9, w: 3, d: 0, l: 1, gf: 8, ga: 4 },
  { mid: 'm1', pts: 7, w: 2, d: 1, l: 1, gf: 6, ga: 5 },
  { mid: 'm4', pts: 4, w: 1, d: 1, l: 2, gf: 5, ga: 6 },
  { mid: 'm2', pts: 4, w: 1, d: 1, l: 2, gf: 4, ga: 8 },
];

// live World Cup boosts (temporary, next match only)
const LIVE_BOOSTS = {
  p19: { stat: 'tir', amount: 6, reason: 'A marqué hier en Coupe du Monde', big: true },
  p13: { stat: 'dri', amount: 3, reason: 'Son équipe a gagné en Coupe du Monde', big: false },
  p6:  { stat: 'def', amount: 3, reason: 'Son équipe a gagné en Coupe du Monde', big: false },
};

// helper: a manager's on-field 4 (gk + 3) with boosts applied
function fieldOf(mid) {
  const sq = SQUADS[mid];
  const gk = withBoost(byId(sq.gk));
  const outfield = sq.field.map(id => withBoost(byId(id)));
  return { gk, outfield, all: [gk, ...outfield] };
}
function withBoost(p) {
  const b = LIVE_BOOSTS[p.id];
  if (!b) return { ...p, stats: { ...p.stats } };
  const stats = { ...p.stats };
  stats[b.stat] = Math.min(99, stats[b.stat] + b.amount);
  const np = { ...p, stats, boost: b };
  np.ovr = overall(np);
  return np;
}

Object.assign(window, {
  COUNTRIES, RARITY, RARITY_ORDER, POS, STAT_KEYS, STAT_LABEL, STAT_ABBR,
  PLAYERS, byId, MANAGERS, SQUADS, ROLES, STANDINGS, LIVE_BOOSTS,
  overall, fieldOf, withBoost,
});
