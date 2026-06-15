// sim.jsx — match simulation engine. Implements the probability logic from the brief.
// Exports: buildTeam, teamAgg, simulateMatch, MOMENT_META

// rare = fréquence du tirage (inverse de la facilité à marquer)
const MOMENT_META = {
  possession:{ label: 'Possession',     icon: 'target', rare: 38 },
  corner:    { label: 'Corner',         icon: 'corner', rare: 27 },
  contre:    { label: 'Contre-attaque', icon: 'bolt',   rare: 20 },
  duel:      { label: '1 contre 1',     icon: 'duel',   rare: 12 },
  penalty:   { label: 'Penalty',        icon: 'dice',   rare: 5  },
};

// du plus dur au plus facile à marquer
const MOMENT_SCORE_BIAS = { possession: -0.85, corner: -0.55, contre: 0.05, duel: 0.15, penalty: 0.95 };
const MOMENT_CONVERT_MOD = { possession: 0.62, corner: 0.72, contre: 0.86, duel: 0.91, penalty: 1 };

// dynamic commentary pools (selected with the seeded rng → identical on replay)
const COMMENTS = {
  reveal: {
    corner:     ['Corner à jouer !', 'Coup de pied de coin…', 'Tout se joue sur ce centre.'],
    contre:     ['Contre-attaque éclair !', 'Ça part très vite devant !', 'Transition fulgurante !'],
    possession: ['Belle phase de possession.', 'Ils font tourner le ballon…', 'Patient, ils construisent.'],
    duel:       ['Duel en tête-à-tête !', 'Un contre un, ça va faire mal !', 'Face-à-face décisif !'],
    penalty:    ['PENALTY !! Énorme occasion !', 'Tout sur un penalty !', 'Le point de penalty… silence.'],
  },
  duelWon:  ['Quel contrôle !', 'Il déborde son adversaire !', 'Magnifique action !', 'Il prend le dessus !', 'Quelle accélération !'],
  duelLost: ['Le défenseur est parfaitement placé.', 'Bien contré, rien à faire.', "L'action est stoppée net.", 'Superbe retour défensif !', 'Le mur tient bon.'],
  goal:     ['BUT ! Incroyable !', 'Au fond des filets !', 'Quelle frappe imparable !', 'IL MARQUE ! Splendide !', 'Le gardien est battu !'],
  save:     ["Le gardien sort l'arrêt du match !", 'Quelle parade !', 'Sauvé par le portier !', 'Le gardien dit non !', 'Arrêt réflexe exceptionnel !'],
  miss:     ['Le ballon passe juste à côté !', 'Ça frôle le poteau !', 'À quelques centimètres !'],
};
const pickC = (rng, arr) => arr[Math.floor(rng() * arr.length)];
const bof = (p, k) => (p.boost && p.boost.stat === k ? p.boost.amount : 0);

const logistic = (x) => 1 / (1 + Math.exp(-x));
const n = (v) => v / 99;            // normalise a stat to 0..1
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const avg = (arr) => arr.reduce((s, x) => s + x, 0) / arr.length;

// aggregate team stats from the 4 on-field players (gk only counts for keeping)
function teamAgg(field) {
  const o = field.outfield;
  const g = (k) => avg(o.map(p => p.stats[k]));
  const agg = {
    vit: g('vit'), tir: g('tir'), dri: g('dri'),
    pas: g('pas'), phy: g('phy'), def: g('def'),
    gkDef: field.gk.stats.def,
  };
  agg.ovr = Math.round((agg.vit + agg.tir + agg.dri + agg.pas + agg.phy + agg.def) / 6);
  return agg;
}

function cloneField(field) {
  const cloneP = (p) => ({ ...p, stats: { ...p.stats }, boost: p.boost ? { ...p.boost } : undefined });
  const gk = cloneP(field.gk);
  const outfield = field.outfield.map(cloneP);
  return { gk, outfield, all: [gk, ...outfield] };
}

function applyPlayerStatBoost(field, playerId, stat, amount) {
  const f = cloneField(field);
  const touch = (p) => {
    if (p.id !== playerId) return p;
    const stats = { ...p.stats };
    stats[stat] = Math.min(99, stats[stat] + amount);
    const np = { ...p, stats, matchBonus: { stat, amount } };
    np.ovr = overall(np);
    return np;
  };
  f.gk = touch(f.gk);
  f.outfield = f.outfield.map(touch);
  f.all = [f.gk, ...f.outfield];
  return f;
}

function applyTeamStatBoost(field, stat, amount) {
  const f = cloneField(field);
  const touch = (p) => {
    const stats = { ...p.stats };
    stats[stat] = Math.min(99, stats[stat] + amount);
    const np = { ...p, stats };
    np.ovr = overall(np);
    return np;
  };
  f.gk = touch(f.gk);
  f.outfield = f.outfield.map(touch);
  f.all = [f.gk, ...f.outfield];
  return f;
}

function applyMatchBonus(team, bonus) {
  if (!bonus || !bonus.type) return team;
  let field = team.field;
  if (bonus.type === 'team' && bonus.stat) field = applyTeamStatBoost(field, bonus.stat, 4);
  if (bonus.type === 'player' && bonus.playerId && bonus.stat) field = applyPlayerStatBoost(field, bonus.playerId, bonus.stat, 6);
  const rl = ROLES[team.mid];
  const find = (id) => field.all.find(p => p.id === id) || withBoost(byId(id));
  return {
    ...team,
    field,
    agg: teamAgg(field),
    roles: {
      corner: find(rl.corner),
      penalty: find(rl.penalty),
      duelAtt: find(rl.duelAtt),
      duelDef: find(rl.duelDef),
    },
    matchBonus: bonus,
  };
}

// build a full team object for a manager id
function buildTeam(mid) {
  const field = fieldOf(mid);
  const rl = ROLES[mid];
  const find = (id) => field.all.find(p => p.id === id) || withBoost(byId(id));
  return {
    mid,
    mgr: MANAGERS.find(m => m.id === mid),
    field,
    agg: teamAgg(field),
    roles: {
      corner: find(rl.corner),
      penalty: find(rl.penalty),
      duelAtt: find(rl.duelAtt),
      duelDef: find(rl.duelDef),
    },
  };
}

const pick = (arr, k, mode = 'max') =>
  arr.slice().sort((a, b) => mode === 'max' ? b.stats[k] - a.stats[k] : a.stats[k] - b.stats[k])[0];

// generate the 6 key-moment types (3 per team), penalty kept rare
function drawMoments(rng) {
  const types = Object.keys(MOMENT_META);
  const weighted = [];
  types.forEach(t => { for (let i = 0; i < MOMENT_META[t].rare; i++) weighted.push(t); });
  const drawOne = () => weighted[Math.floor(rng() * weighted.length)];
  // 3 for A, 3 for B, alternating possession
  const out = [];
  for (let i = 0; i < 6; i++) {
    out.push({ atk: i % 2 === 0 ? 'A' : 'B', type: drawOne() });
  }
  // shuffle order a touch (keep 3/3 balance)
  return out;
}

function buildEdgeNarration(type, atkPlayer, defPlayer, Aatk, Adef, atkT, defT) {
  const diff = Math.round(Aatk - Adef);
  const a = atkPlayer.name.split(' ').pop();
  const d = defPlayer?.name?.split(' ').pop() || 'la défense';
  const favor = diff > 6 ? 'atk' : diff < -6 ? 'def' : 'even';
  let text;
  switch (type) {
    case 'duel':
      text = diff > 6
        ? `${a} combine vitesse et dribble — +${diff} pts sur ${d} dans ce duel.`
        : diff < -6
          ? `${d} est solide défensivement et freine ${a} (−${Math.abs(diff)} pts).`
          : `${a} et ${d} sont au coude-à-coude : le moindre détail fera la différence.`;
      break;
    case 'penalty':
      text = diff > 5
        ? `Le tir de ${a} (${Math.round(Aatk)}) dépasse le gardien ${d} (${Math.round(Adef)}).`
        : diff < -5
          ? `${d} lit bien la frappe — avantage au gardien.`
          : `Tir puissant contre gardien réactif : tout est possible.`;
      break;
    case 'corner':
      text = diff > 5
        ? `Le centre de ${a} profite d'une passe précise et d'un jeu de tête favorable.`
        : `La défense de ${defT.mgr.name} est bien placée sur ce corner.`;
      break;
    case 'contre':
      text = diff > 5
        ? `Vitesse fulgurante : ${a} exploite l'espace laissé par la défense réduite.`
        : `${defT.mgr.name} a replié vite malgré le joueur sorti du marquage.`;
      break;
    case 'possession':
    default:
      text = diff > 5
        ? `${atkT.mgr.name} fait circuler le ballon avec plus de maîtrise collective (+${diff}).`
        : diff < -5
          ? `${defT.mgr.name} compresse l'espace et gêne la construction.`
          : `Possession équilibrée — le pressing décidera de l'action.`;
      break;
  }
  return { text, favor, diff };
}

function resolveMoment(m, A, B, rng) {
  const atkT = m.atk === 'A' ? A : B;
  const defT = m.atk === 'A' ? B : A;
  const ag = atkT.agg, dg = defT.agg;
  let Aatk, Adef, atkPlayer, defPlayer, aLabel, dLabel, k1 = 12, bias = 0;
  let penalty = false;
  let atkLines = [], defLines = [], keeperLabel = null;
  let defExcluded = null;

  switch (m.type) {
    case 'corner': {
      const taker = atkT.roles.corner;
      const others = atkT.field.outfield.filter(p => p.id !== taker.id);
      const phyOthers = others.length ? avg(others.map(p => p.stats.phy)) : ag.phy;
      Aatk = 0.5 * taker.stats.pas + 0.3 * phyOthers + 0.2 * ag.tir;
      Adef = 0.62 * dg.def + 0.38 * dg.tir;
      atkPlayer = taker; defPlayer = pick(defT.field.outfield, 'def');
      aLabel = `Passe ${taker.stats.pas} · Physique ${Math.round(phyOthers)} · Tir ${Math.round(ag.tir)}`;
      dLabel = `Défense ${Math.round(dg.def)} · Tir ${Math.round(dg.tir)}`;
      atkLines = [{ label: 'Passe', key: 'pas', value: taker.stats.pas, bonus: bof(taker, 'pas') }, { label: 'Physique équipe', key: 'phy', value: Math.round(phyOthers), team: true }];
      defLines = [{ label: 'Défense', key: 'def', value: Math.round(dg.def), team: true }];
      bias = MOMENT_SCORE_BIAS.corner;
      break;
    }
    case 'contre': {
      const weakest = pick(defT.field.outfield, 'def', 'min');
      const remaining = defT.field.outfield.filter(p => p.id !== weakest.id);
      const defReduced = remaining.length ? avg(remaining.map(p => p.stats.def)) : dg.def;
      Aatk = 100 * n(ag.vit) * n(ag.pas);
      Adef = 100 * n(defReduced) * n(dg.vit) * 0.84;
      atkPlayer = pick(atkT.field.outfield, 'vit');
      defPlayer = pick(remaining, 'def');
      aLabel = `Vitesse ${Math.round(ag.vit)} × Passe ${Math.round(ag.pas)}`;
      dLabel = `Défense ${Math.round(defReduced)} (sans ${weakest.name.split(' ').pop()})`;
      atkLines = [{ label: 'Vitesse équipe', key: 'vit', value: Math.round(ag.vit), team: true }, { label: 'Passe équipe', key: 'pas', value: Math.round(ag.pas), team: true }];
      defLines = [{ label: 'Défense réduite', key: 'def', value: Math.round(defReduced), team: true, malus: true }];
      bias = MOMENT_SCORE_BIAS.contre;
      defExcluded = weakest;
      break;
    }
    case 'possession': {
      Aatk = 100 * n(ag.pas) * n(ag.dri);
      Adef = dg.def;
      atkPlayer = pick(atkT.field.outfield, 'pas');
      defPlayer = pick(defT.field.outfield, 'def');
      aLabel = `Passe ${Math.round(ag.pas)} × Dribble ${Math.round(ag.dri)}`;
      dLabel = `Défense ${Math.round(dg.def)}`;
      atkLines = [{ label: 'Passe équipe', key: 'pas', value: Math.round(ag.pas), team: true }, { label: 'Dribble équipe', key: 'dri', value: Math.round(ag.dri), team: true }];
      defLines = [{ label: 'Défense', key: 'def', value: Math.round(dg.def), team: true }];
      bias = MOMENT_SCORE_BIAS.possession;
      break;
    }
    case 'duel': {
      const att = atkT.roles.duelAtt, dfn = defT.roles.duelDef;
      Aatk = 100 * Math.sqrt(n(att.stats.vit) * n(att.stats.dri));
      Adef = 100 * Math.cbrt(n(dfn.stats.def) * n(dfn.stats.vit) * n(dfn.stats.phy));
      atkPlayer = att; defPlayer = dfn;
      aLabel = `Vitesse ${att.stats.vit} × Dribble ${att.stats.dri}`;
      dLabel = `Déf ${dfn.stats.def} × Vit ${dfn.stats.vit} × Phy ${dfn.stats.phy}`;
      atkLines = [{ label: 'Vitesse', key: 'vit', value: att.stats.vit, bonus: bof(att, 'vit') }, { label: 'Dribble', key: 'dri', value: att.stats.dri, bonus: bof(att, 'dri') }];
      defLines = [{ label: 'Défense', key: 'def', value: dfn.stats.def, bonus: bof(dfn, 'def') }, { label: 'Physique', key: 'phy', value: dfn.stats.phy, bonus: bof(dfn, 'phy') }];
      bias = MOMENT_SCORE_BIAS.duel;
      break;
    }
    case 'penalty': {
      penalty = true;
      const taker = atkT.roles.penalty;
      atkPlayer = taker; defPlayer = defT.field.gk;
      Aatk = taker.stats.tir; Adef = defT.agg.gkDef;
      aLabel = `Tir ${taker.stats.tir}`;
      dLabel = `Gardien ${defT.agg.gkDef}`;
      atkLines = [{ label: 'Tir', key: 'tir', value: taker.stats.tir, bonus: bof(taker, 'tir') }];
      defLines = [{ label: 'Gardien', key: 'def', value: defT.agg.gkDef }];
      keeperLabel = 'Gardien';
      k1 = 15; bias = MOMENT_SCORE_BIAS.penalty;
      break;
    }
  }

  const pMoment = clamp(logistic((Aatk - Adef) / k1 + bias), 0.04, 0.97);
  const wonRoll = rng();
  const won = wonRoll < pMoment;

  let scored = false, pConvert = 0, explain;
  if (penalty) {
    scored = won;
    explain = won
      ? `But ! ${atkPlayer.name} (tir ${Aatk}) prend le gardien (${Adef}) à contre-pied.`
      : `Arrêt ! Le gardien (${Adef}) détourne la frappe de ${atkPlayer.name} (tir ${Aatk}).`;
  } else if (!won) {
    explain = `${defT.mgr.name} reprend le dessus — l'action est stoppée avant la frappe.`;
  } else {
    // chance created → shot, slightly favourable, keeper can still save
    const keeperSave = clamp(0.18 + (dg.gkDef - 50) / 130, 0.12, 0.62);
    const convertMod = MOMENT_CONVERT_MOD[m.type] || 0.85;
    pConvert = clamp((0.92 - keeperSave + (ag.tir - 70) / 320) * convertMod, 0.28, 0.95);
    scored = rng() < pConvert;
    explain = scored
      ? `But ! ${atkPlayer.name} gagne l'action et bat le gardien (${Math.round(dg.gkDef)}).`
      : `Le gardien de ${defT.mgr.name} (${Math.round(dg.gkDef)}) sort la parade sur la frappe !`;
  }

  const comments = {
    reveal: pickC(rng, COMMENTS.reveal[m.type]),
    mid: won ? pickC(rng, COMMENTS.duelWon) : pickC(rng, COMMENTS.duelLost),
    result: scored ? pickC(rng, COMMENTS.goal) : (penalty || won ? pickC(rng, COMMENTS.save) : pickC(rng, COMMENTS.duelLost)),
  };
  const duelPct = Math.round(pMoment * 100);
  const keeperPct = penalty ? Math.round(pMoment * 100) : Math.round((pConvert || 0) * 100);
  const edge = buildEdgeNarration(m.type, atkPlayer, defPlayer, Aatk, Adef, atkT, defT);

  return {
    type: m.type, ...MOMENT_META[m.type],
    atk: m.atk, atkMid: atkT.mid, defMid: defT.mid,
    atkPlayer, defPlayer, penalty,
    A: Math.round(Aatk), D: Math.round(Adef), aLabel, dLabel,
    pMoment, won, pConvert, scored, explain,
    atkLines, defLines, keeperLabel, duelPct, keeperPct, comments, defExcluded,
    edgeNarration: edge.text, edgeFavor: edge.favor, edgeDiff: edge.diff,
  };
}

function simpleRng(seed) {
  let s = seed >>> 0 || 12345;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

function forcePenaltyMoment(plan, side) {
  const idx = plan.findIndex(m => m.atk === side);
  if (idx >= 0) plan[idx] = { ...plan[idx], type: 'penalty' };
}

function pickOpponentBonus(rng, mid) {
  const stats = ['vit', 'tir', 'dri', 'pas', 'phy', 'def'];
  const roll = rng();
  if (roll < 0.45) return { type: 'team', stat: stats[Math.floor(rng() * stats.length)] };
  const field = fieldOf(mid);
  const p = field.all[Math.floor(rng() * field.all.length)];
  return { type: 'player', playerId: p.id, stat: stats[Math.floor(rng() * stats.length)] };
}

function simulateMatch(midA, midB, seed, opts = {}) {
  const rng = simpleRng(seed || (Date.now() & 0xffffff));
  let A = buildTeam(midA), B = buildTeam(midB);
  const bonusA = opts.bonusA || null;
  const bonusB = opts.bonusB || pickOpponentBonus(rng, midB);
  if (bonusA) A = applyMatchBonus(A, bonusA);
  if (bonusB) B = applyMatchBonus(B, bonusB);
  const plan = drawMoments(rng);
  if (bonusA?.type === 'force_pen') forcePenaltyMoment(plan, 'A');
  if (bonusB?.type === 'force_pen') forcePenaltyMoment(plan, 'B');
  const moments = plan.map(m => resolveMoment(m, A, B, rng));
  let scoreA = 0, scoreB = 0;
  moments.forEach((r, i) => {
    r.i = i;
    if (r.scored) { if (r.atk === 'A') scoreA++; else scoreB++; }
    r.runA = scoreA; r.runB = scoreB;
  });
  return { A, B, moments, scoreA, scoreB, seed: seed || 0, bonusA, bonusB };
}

Object.assign(window, { MOMENT_META, MOMENT_SCORE_BIAS, teamAgg, buildTeam, applyMatchBonus, simulateMatch, pickOpponentBonus });
