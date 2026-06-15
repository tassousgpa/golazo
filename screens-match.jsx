// Layout mobile — safe areas + hauteur utilisable
const MATCH_PAD_TOP = 'max(40px, env(safe-area-inset-top, 0px))';
const MATCH_PAD_BOTTOM = 'max(6px, env(safe-area-inset-bottom, 0px))';

const ORDER = ['draw', 'action', 'finish', 'suspense', 'outcome', 'stopped'];

const MICRO_HINTS = {
  draw: 'Tirage',
  action: 'Le duel se joue',
  finish: 'Face au gardien',
  suspense: '…',
  outcome: 'Résultat',
  stopped: 'Action stoppée',
};

function seqFor(m) {
  const draw = [['draw', 1600]];
  const action = [['action', 3400]];
  if (m.penalty) return [...draw, ['action', 3000], ['suspense', 1200], ['outcome', 2200]];
  if (m.won) return [...draw, ...action, ['finish', 2600], ['suspense', 1100], ['outcome', 2200]];
  return [...draw, ...action, ['stopped', 2200]];
}

function resolveActionSides(m, A, B, youSide) {
  const atkMgr = m.atk === 'A' ? A.mgr : B.mgr;
  const defMgr = m.atk === 'A' ? B.mgr : A.mgr;
  const atkSide = { mgr: atkMgr, player: m.atkPlayer, lines: m.atkLines || [] };
  const defSide = { mgr: defMgr, player: m.defPlayer, lines: m.defLines || [] };
  const youAttack = m.atk === youSide;
  return { left: youAttack ? atkSide : defSide, right: youAttack ? defSide : atkSide, youAttack };
}

function resolveFinishSides(m, A, B, youSide) {
  const atkTeam = m.atk === 'A' ? A : B;
  const defTeam = m.atk === 'A' ? B : A;
  const shooter = m.atkPlayer;
  const gk = m.penalty ? m.defPlayer : defTeam.field.gk;
  const gkDef = m.penalty ? defTeam.agg.gkDef : gk?.stats?.def ?? defTeam.agg.gkDef;
  const shooterSide = {
    mgr: atkTeam.mgr,
    player: shooter,
    lines: [{ label: 'Tir', key: 'tir', value: shooter.stats.tir, bonus: shooter.boost?.stat === 'tir' ? shooter.boost.amount : 0 }],
  };
  const gkSide = {
    mgr: defTeam.mgr,
    player: gk,
    lines: [{ label: 'Défense gardien', key: 'def', value: gkDef }],
  };
  const youAttack = m.atk === youSide;
  return { left: youAttack ? shooterSide : gkSide, right: youAttack ? gkSide : shooterSide, youAttack };
}

function youSideOf(A, B) { return A.mgr.you ? 'A' : B.mgr.you ? 'B' : 'A'; }

// Terrain : but défendu en bas (y élevé), attaque vers le bas. Gardiens toujours sur leur ligne.
const PITCH = {
  ATK_GOAL_Y: 14,
  DEF_GOAL_Y: 86,
  GK_ATK: { x: 50, y: 12 },
  GK_DEF: { x: 50, y: 88 },
  PEN_SPOT: { x: 50, y: 74 },
  BOX_TOP: 62,
};

const easeOut = (p) => 1 - Math.pow(1 - p, 3);
function AnimatedNumber({ from = 0, to, go, dur = 900 }) {
  const [v, setV] = React.useState(go ? from : to);
  React.useEffect(() => {
    if (!go) { setV(to); return; }
    let raf, start;
    const tick = (ts) => { if (!start) start = ts; const p = Math.min(1, (ts - start) / dur); setV(Math.round(from + (to - from) * easeOut(p))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [go, from, to, dur]);
  return <React.Fragment>{v}</React.Fragment>;
}

function ProbRing({ pct, label, color }) {
  const R = 40, CIRC = 2 * Math.PI * R;
  const off = CIRC * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return (
    <div style={{ position: 'relative', width: 104, height: 104 }}>
      <svg width="104" height="104">
        <circle cx="52" cy="52" r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle cx="52" cy="52" r={R} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={CIRC} strokeDashoffset={off} transform="rotate(-90 52 52)"
          style={{ transition: 'stroke-dashoffset .8s cubic-bezier(.2,.8,.2,1)', filter: `drop-shadow(0 0 6px ${color})` }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 28, color: '#fff', lineHeight: 1 }}><AnimatedNumber to={pct} go dur={800} />%</div>
        <div style={{ fontSize: 8.5, fontWeight: 800, color: C.mut, letterSpacing: 0.5, marginTop: 2, fontFamily: 'Archivo,sans-serif', textAlign: 'center', maxWidth: 86 }}>{label}</div>
      </div>
    </div>
  );
}

function StatLineV({ line, go, align = 'left' }) {
  return <DuelStatRow line={line} go={go} align={align} />;
}

// ─── Match stats clarity system ───
function ImpactLegend({ compact }) {
  const items = [
    { color: C.accL, border: 'rgba(201,146,46,0.4)', label: 'Joueur', desc: 'stat individuelle' },
    { color: C.cyan, border: 'rgba(58,138,255,0.4)', label: 'Équipe', desc: 'moyenne du terrain' },
    { color: C.lime, border: 'rgba(50,200,112,0.4)', label: '+N', desc: 'boost Coupe du Monde' },
    { color: C.pink, border: 'rgba(191,48,144,0.4)', label: '−', desc: 'malus de situation' },
  ];
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: compact ? 6 : 8, padding: compact ? '8px 10px' : '10px 12px',
      borderRadius: 12, background: 'rgba(0,0,0,0.28)', border: '1px solid ' + C.line, marginBottom: compact ? 8 : 12,
    }}>
      {items.map(it => (
        <div key={it.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: compact ? 9.5 : 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, background: it.color + '44', border: `1.5px solid ${it.border}`, flexShrink: 0 }} />
          <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, color: it.color }}>{it.label}</span>
          <span style={{ color: C.mut2 }}>{it.desc}</span>
        </div>
      ))}
    </div>
  );
}

function StatTypeTag({ team, malus }) {
  const label = malus ? 'Malus' : team ? 'Équipe' : 'Joueur';
  const color = malus ? C.pink : team ? C.cyan : C.accL;
  return (
    <span style={{
      fontSize: 8, fontWeight: 900, letterSpacing: 0.5, fontFamily: 'Archivo,sans-serif',
      padding: '2px 5px', borderRadius: 4, textTransform: 'uppercase',
      background: color + '18', color, border: `1px solid ${color}44`, flexShrink: 0,
    }}>{label}</span>
  );
}

function ImpactChip({ bonus, malus, reason }) {
  if (!bonus && !malus) return null;
  const color = malus ? C.pink : C.lime;
  const text = malus ? 'Malus situation' : `+${bonus} ${reason ? reason.split(' ').slice(0, 2).join(' ') : 'CDM'}`;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 9, fontWeight: 800,
      fontFamily: 'Archivo,sans-serif', padding: '2px 6px', borderRadius: 999,
      background: color + '18', color, border: `1px solid ${color}44`, whiteSpace: 'nowrap',
    }}>
      {malus ? <GzIcon name="bolt" size={9} color={color} /> : <GzIcon name="fire" size={9} color={color} />}
      {text}
    </span>
  );
}

function DuelStatRow({ line, go, align = 'left' }) {
  const hasBonus = line.bonus > 0;
  const base = hasBonus ? line.value - line.bonus : line.value;
  const pct = Math.max(8, Math.min(100, line.value));
  const barColor = line.malus ? C.pink : line.team ? C.cyan : (STAT_COL[line.key] || C.accL);
  const isRight = align === 'right';
  return (
    <div style={{
      padding: '6px 8px', borderRadius: 10, marginBottom: 5,
      background: line.team ? 'rgba(58,138,255,0.06)' : 'rgba(201,146,46,0.06)',
      borderLeft: isRight ? 'none' : `3px solid ${line.malus ? C.pink : line.team ? C.cyan : C.acc}`,
      borderRight: isRight ? `3px solid ${line.malus ? C.pink : line.team ? C.cyan : C.acc}` : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4, flexDirection: isRight ? 'row-reverse' : 'row' }}>
        <StatTypeTag team={line.team} malus={line.malus} />
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 10, color: line.malus ? C.pink : C.mut, flex: 1, textAlign: isRight ? 'right' : 'left' }}>{line.label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexDirection: isRight ? 'row-reverse' : 'row' }}>
        <div style={{ flex: 1, height: 6, borderRadius: 999, background: 'rgba(0,0,0,0.35)', overflow: 'hidden' }}>
          <div style={{ width: pct + '%', height: '100%', borderRadius: 999, background: `linear-gradient(90deg, ${barColor}, ${barColor}aa)`, transition: 'width .8s' }} />
        </div>
        <div style={{ textAlign: isRight ? 'left' : 'right', minWidth: 52 }}>
          <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 15, color: line.malus ? C.pink : '#fff' }}>
            {line.malus ? '−' : ''}<AnimatedNumber from={hasBonus ? base : 0} to={line.value} go={go} dur={950} />
          </span>
          {hasBonus && <div style={{ fontSize: 9, color: C.mut2, fontWeight: 700 }}>base {base}</div>}
        </div>
      </div>
      {(hasBonus || line.malus) && (
        <div style={{ marginTop: 4, display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start' }}>
          <ImpactChip bonus={line.bonus} malus={line.malus} />
        </div>
      )}
    </div>
  );
}

function DuelStatBlock({ lines, go, align, title }) {
  const player = lines.filter(l => !l.team);
  const team = lines.filter(l => l.team);
  if (!lines.length) return null;
  return (
    <div style={{ marginBottom: 8 }}>
      {title && <div style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.8, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase', marginBottom: 6, textAlign: align === 'right' ? 'right' : 'left' }}>{title}</div>}
      {player.length > 0 && (
        <div style={{ marginBottom: team.length ? 6 : 0 }}>
          <div style={{ fontSize: 8.5, fontWeight: 800, color: C.accL, letterSpacing: 0.6, marginBottom: 4, textAlign: align === 'right' ? 'right' : 'left', fontFamily: 'Archivo,sans-serif' }}>JOUEUR</div>
          {player.map((l, i) => <DuelStatRow key={i} line={l} go={go} align={align} />)}
        </div>
      )}
      {team.length > 0 && (
        <div>
          <div style={{ fontSize: 8.5, fontWeight: 800, color: C.cyan, letterSpacing: 0.6, marginBottom: 4, textAlign: align === 'right' ? 'right' : 'left', fontFamily: 'Archivo,sans-serif' }}>ÉQUIPE</div>
          {team.map((l, i) => <DuelStatRow key={i} line={l} go={go} align={align} />)}
        </div>
      )}
    </div>
  );
}

function ActiveImpacts({ atkPlayer, defPlayer, atkLines, defLines }) {
  const chips = [];
  [atkPlayer, defPlayer].forEach(p => {
    if (p?.boost) chips.push({ key: p.id, label: `${p.name.split(' ').pop()} +${p.boost.amount} ${STAT_LABEL[p.boost.stat]}`, color: C.lime });
  });
  atkLines.concat(defLines).filter(l => l.malus).forEach((l, i) => {
    chips.push({ key: 'm' + i, label: `${l.label} : malus`, color: C.pink });
  });
  if (!chips.length) return null;
  return (
    <Surface style={{ padding: '8px 10px', marginTop: 8, background: 'rgba(0,0,0,0.25)' }}>
      <div style={{ fontSize: 8.5, fontWeight: 800, color: C.mut2, letterSpacing: 0.8, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase', marginBottom: 6 }}>Impacts actifs sur cette action</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {chips.map(c => (
          <span key={c.key} style={{ fontSize: 9.5, fontWeight: 800, fontFamily: 'Archivo,sans-serif', padding: '4px 8px', borderRadius: 999, background: c.color + '15', color: c.color, border: `1px solid ${c.color}44` }}>{c.label}</span>
        ))}
      </div>
    </Surface>
  );
}

function ActionStatsCompare({ m, go, atkMgr, defMgr }) {
  return (
    <div style={{ marginTop: 8 }}>
      <ImpactLegend compact />
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <Avatar mgr={atkMgr} size={20} />
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, color: atkMgr.color }}>ATTAQUE</span>
          </div>
          <DuelStatBlock lines={m.atkLines} go={go} align="left" />
        </div>
        <div style={{ width: 1, background: C.line, flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, justifyContent: 'flex-end' }}>
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, color: defMgr.color }}>DÉFENSE</span>
            <Avatar mgr={defMgr} size={20} />
          </div>
          <DuelStatBlock lines={m.defLines} go={go} align="right" />
        </div>
      </div>
      <ActiveImpacts atkPlayer={m.atkPlayer} defPlayer={m.defPlayer} atkLines={m.atkLines} defLines={m.defLines} />
    </div>
  );
}

function StatsSectionTitle({ icon, title, subtitle }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <IconBadge name={icon} size={28} iconSize={14} />
        <div>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 13, color: C.txt }}>{title}</div>
          {subtitle && <div style={{ color: C.mut2, fontSize: 11, marginTop: 1 }}>{subtitle}</div>}
        </div>
      </div>
    </div>
  );
}

function TeamStatsCompare({ A, B }) {
  const keys = ['vit', 'tir', 'dri', 'pas', 'phy', 'def'];
  return (
    <Surface style={{ padding: 14, marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 10, fontWeight: 800, fontFamily: 'Archivo,sans-serif' }}>
        <span style={{ color: A.mgr.color }}>{A.mgr.name}</span>
        <span style={{ color: C.mut2 }}>Équipe vs équipe</span>
        <span style={{ color: B.mgr.color }}>{B.mgr.name}</span>
      </div>
      {keys.map(k => (
        <div key={k} style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 9, color: C.mut2, fontWeight: 800, marginBottom: 4, fontFamily: 'Archivo,sans-serif', letterSpacing: 0.4 }}>{STAT_LABEL[k]} · moyenne terrain</div>
          <VsBar a={Math.round(A.agg[k])} b={Math.round(B.agg[k])} aLabel={String(Math.round(A.agg[k]))} bLabel={String(Math.round(B.agg[k]))} aColor={A.mgr.color} bColor={B.mgr.color} height={8} />
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, paddingTop: 10, borderTop: '1px solid ' + C.line }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: A.mgr.color }}>{A.agg.ovr}</div>
          <div style={{ fontSize: 9, color: C.mut2, fontWeight: 800 }}>OVR ÉQUIPE</div>
        </div>
        <div style={{ fontSize: 10, color: C.mut2, alignSelf: 'center', fontWeight: 800 }}>vs</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: B.mgr.color }}>{B.agg.ovr}</div>
          <div style={{ fontSize: 9, color: C.mut2, fontWeight: 800 }}>OVR ÉQUIPE</div>
        </div>
      </div>
    </Surface>
  );
}

function PlayerRosterStats({ team, label }) {
  const { gk, outfield } = team.field;
  const players = [gk, ...outfield];
  return (
    <Surface style={{ padding: 12, marginBottom: 10 }}>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, color: team.mgr.color, marginBottom: 10 }}>{label || team.mgr.name}</div>
      {players.map(p => {
        const boost = p.boost;
        const mainKey = p.pos === 'GK' ? 'def' : ({ ATT: 'tir', MID: 'pas', DEF: 'def' }[p.pos] || 'vit');
        return (
          <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid ' + C.line }}>
            <MiniCard player={p} w={36} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 12 }}>{p.name.split(' ').pop()}</div>
              <div style={{ fontSize: 10, color: C.mut2 }}>{POS[p.pos].full} · OVR {p.ovr}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 16, color: STAT_COL[mainKey] || C.txt }}>{p.stats[mainKey]}</div>
              <div style={{ fontSize: 9, color: C.mut2, fontWeight: 700 }}>{STAT_ABBR[mainKey]}</div>
              {boost && <ImpactChip bonus={boost.amount} reason={STAT_LABEL[boost.stat]} />}
            </div>
          </div>
        );
      })}
    </Surface>
  );
}

function MatchStatsPanel({ A, B }) {
  return (
    <div>
      <ImpactLegend />
      <StatsSectionTitle icon="shield" title="Stats équipe" subtitle="Moyennes calculées sur les 4 joueurs sur le terrain" />
      <TeamStatsCompare A={A} B={B} />
      <StatsSectionTitle icon="ball" title="Stats joueurs" subtitle="Stat clé par poste + boosts Coupe du Monde actifs" />
      <PlayerRosterStats team={A} />
      <PlayerRosterStats team={B} />
    </div>
  );
}

function MomentTimeline({ moments, active, resolvedUpTo }) {
  return (
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center', padding: '0 2px', marginBottom: 4 }}>
      {moments.map((mom, i) => {
        const done = i < resolvedUpTo;
        const isActive = i === active;
        const ec = EVENT_COLORS[mom.type] || C.acc;
        return (
          <div key={i} title={done ? mom.label : ''} style={{
            flex: 1, height: 4, borderRadius: 999, maxWidth: 48,
            background: done ? (mom.scored ? C.acc : 'rgba(255,255,255,0.22)') : isActive ? ec : 'rgba(255,255,255,0.08)',
            boxShadow: isActive ? `0 0 8px ${ec}` : 'none',
            transition: 'all .35s',
            transform: isActive ? 'scaleY(1.5)' : 'scaleY(1)',
          }} />
        );
      })}
    </div>
  );
}

function MomentDrawReveal({ m, atkMgr, youSide }) {
  const isYours = m.atk === youSide;
  const ec = EVENT_COLORS[m.type] || C.acc;
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, padding: '8px 16px' }}>
      <div style={{ animation: 'momentDraw .55s ease both', textAlign: 'center' }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 1.6, textTransform: 'uppercase', fontFamily: 'Archivo,sans-serif' }}>Tirage — moment {m.i != null ? m.i + 1 : ''}</div>
        <div style={{
          width: 132, aspectRatio: '0.72', margin: '10px auto', borderRadius: 14, overflow: 'hidden', position: 'relative',
          background: 'linear-gradient(155deg, rgba(18,14,30,0.96), rgba(8,6,18,0.98))',
          border: `2px solid ${ec}`, boxShadow: `0 0 28px ${ec}55`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
          animation: 'cardFlip .55s cubic-bezier(.2,.8,.2,1) both',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 40%, ${ec}22, transparent 65%)` }} />
          <GzIcon name={m.icon} size={34} color={ec} />
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, color: '#fff', letterSpacing: 0.5, position: 'relative' }}>{m.label.toUpperCase()}</div>
        </div>
      </div>
      <div style={{ animation: 'fadeIn .45s .25s both', textAlign: 'center', maxWidth: 300 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, padding: '9px 18px', borderRadius: 999,
          background: isYours ? 'rgba(201,146,46,0.18)' : 'rgba(0,0,0,0.45)',
          border: `1.5px solid ${isYours ? C.acc : atkMgr.color}`,
          boxShadow: isYours ? '0 0 16px rgba(201,146,46,0.25)' : `0 0 12px ${atkMgr.color}33`,
        }}>
          <Avatar mgr={atkMgr} size={26} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 8.5, color: isYours ? C.accL : C.mut2, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 0.7, fontFamily: 'Archivo,sans-serif' }}>{isYours ? 'Ton moment' : 'Adversaire'}</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, color: atkMgr.color }}>{atkMgr.name} attaque</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvolvedPlayerCard({ player, cardStyle, highlight, gkGlow }) {
  if (!player) return null;
  const vis = cardVisualOf(player.rarity);
  const active = highlight || gkGlow;
  return (
    <div style={{
      padding: 6, borderRadius: 18, textAlign: 'center',
      background: active ? `linear-gradient(160deg, ${gkGlow ? '#66d9e840' : vis.ring + '40'}, transparent)` : 'transparent',
      boxShadow: gkGlow ? '0 0 36px rgba(102,217,232,0.55)' : (active ? `0 0 28px ${vis.glow}` : 'none'),
      animation: active ? 'cardEnter .5s ease both' : 'none',
    }}>
      <PlayerCard player={player} w={112} interactive={false} flippable={false} cardStyle={cardStyle} glowPulse={active} />
      <div style={{ marginTop: 6, fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 10, letterSpacing: 0.6, color: gkGlow ? '#66d9e8' : vis.text }}>
        {gkGlow ? 'GARDIEN' : vis.label.toUpperCase()}
      </div>
    </div>
  );
}

function CompactStatList({ lines, align, animate }) {
  if (!lines?.length) return null;
  const isRight = align === 'right';
  return (
    <div style={{ width: '100%', maxWidth: 148, marginTop: 10 }}>
      {lines.map((line, i) => {
        const col = line.malus ? C.pink : line.team ? C.cyan : (STAT_COL[line.key] || C.accL);
        return (
          <div key={line.label + i} style={{
            marginBottom: 8, padding: '8px 10px', borderRadius: 10,
            background: 'rgba(0,0,0,0.35)', border: `1px solid ${col}44`,
            textAlign: isRight ? 'right' : 'left',
            animation: animate ? `fadeIn .4s ${i * 0.08}s both` : 'none',
          }}>
            <div style={{ fontSize: 8.5, fontWeight: 800, color: C.mut2, letterSpacing: 0.5, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase' }}>
              {line.label}{line.team ? ' · équipe' : ''}{line.malus ? ' · malus' : ''}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, justifyContent: isRight ? 'flex-end' : 'flex-start', marginTop: 2 }}>
              <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: line.malus ? C.pink : '#fff', lineHeight: 1 }}>
                {line.malus ? '−' : ''}{animate ? <AnimatedNumber to={line.value} go dur={700} /> : line.value}
              </span>
              {line.bonus > 0 && (
                <span style={{ fontSize: 10, fontWeight: 800, color: C.lime, fontFamily: 'Archivo,sans-serif' }}>+{line.bonus}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CenterProbability({ pct, label, pulse }) {
  return (
    <div style={{
      position: 'absolute', left: '50%', bottom: 14, transform: 'translateX(-50%)', zIndex: 10,
      textAlign: 'center', padding: '10px 20px', borderRadius: 16,
      background: 'rgba(8,10,20,0.92)', border: '2px solid rgba(201,146,46,0.55)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.55), 0 0 24px rgba(201,146,46,0.2)',
      minWidth: 120, animation: pulse ? 'cardPulse 0.9s ease-in-out infinite' : 'fadeIn .35s',
    }}>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 36, color: C.accL, lineHeight: 1 }}>
        <AnimatedNumber to={pct} go dur={900} />%
      </div>
      <div style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.6, marginTop: 4, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  );
}

function MomentTypeBadge({ m }) {
  const ec = EVENT_COLORS[m.type] || C.acc;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '6px 0 8px', flexShrink: 0 }}>
      <GzIcon name={m.icon} size={14} color={ec} />
      <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, letterSpacing: 0.8, color: ec, textTransform: 'uppercase' }}>{m.label}</span>
    </div>
  );
}

function SplitCamp({ side, align, cardStyle, highlight, gkGlow, animate }) {
  const tint = side.mgr.color;
  return (
    <div style={{
      flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '10px 8px 72px', position: 'relative',
      background: `linear-gradient(180deg, ${tint}12 0%, transparent 55%)`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
        <Avatar mgr={side.mgr} size={22} />
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, color: tint }}>{side.mgr.name}</span>
        {side.mgr.you && <Chip color={C.acc} solid style={{ fontSize: 8 }}>Toi</Chip>}
      </div>
      <InvolvedPlayerCard player={side.player} cardStyle={cardStyle} highlight={highlight} gkGlow={gkGlow} />
      <CompactStatList lines={side.lines} align={align} animate={animate} />
    </div>
  );
}

function SplitMomentScreen({ m, sides, cardStyle, prob, probLabel, animate, pulse, gkLeft, gkRight, highlightPlayers }) {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <MomentTypeBadge m={m} />
      <div style={{ flex: 1, minHeight: 0, display: 'flex', position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid ' + C.line }}>
        <SplitCamp side={sides.left} align="left" cardStyle={cardStyle} highlight={highlightPlayers} gkGlow={gkLeft} animate={animate} />
        <div style={{ width: 3, flexShrink: 0, background: 'linear-gradient(180deg, transparent, rgba(201,146,46,0.65), transparent)', boxShadow: '0 0 12px rgba(201,146,46,0.35)' }} />
        <SplitCamp side={sides.right} align="right" cardStyle={cardStyle} highlight={highlightPlayers} gkGlow={gkRight} animate={animate} />
        {prob != null && <CenterProbability pct={prob} label={probLabel} pulse={pulse} />}
      </div>
    </div>
  );
}

function OutcomeBanner({ m, show }) {
  if (!show) return null;
  const scored = m.scored;
  const stopped = !m.won && !m.penalty;
  const label = scored ? 'BUT !' : stopped ? 'STOPPÉ' : 'ARRÊT !';
  const color = scored ? C.lime : C.pink;
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.55)', zIndex: 20, animation: 'fadeIn .25s',
    }}>
      <div style={{
        padding: '16px 32px', borderRadius: 16, animation: 'scorePop .5s',
        background: scored ? `linear-gradient(135deg, ${C.lime}, ${C.acc})` : 'rgba(14,12,24,0.96)',
        border: scored ? 'none' : `2px solid ${color}`,
        boxShadow: scored ? `0 0 40px ${C.lime}66` : `0 0 24px ${color}44`,
      }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 32, letterSpacing: 2, color: scored ? '#160b02' : color }}>{label}</div>
      </div>
    </div>
  );
}

function AdvantagePanel({ m, atkMgr, defMgr, compact }) {
  if (!m.edgeNarration) return null;
  const favorColor = m.edgeFavor === 'atk' ? atkMgr.color : m.edgeFavor === 'def' ? defMgr.color : C.gold;
  return (
    <div style={{
      padding: compact ? '10px 12px' : '12px 14px', borderRadius: 12, flexShrink: 0,
      background: `linear-gradient(135deg, ${favorColor}12, rgba(0,0,0,0.5))`,
      border: `1px solid ${favorColor}55`,
      animation: 'fadeIn .4s',
    }}>
      <div style={{ fontSize: 8, fontWeight: 900, color: C.accL, letterSpacing: 0.8, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase', marginBottom: 6, textAlign: 'center' }}>Qui a l'avantage ?</div>
      <div style={{ fontFamily: 'Hanken Grotesk,sans-serif', fontSize: compact ? 12.5 : 13.5, color: C.txt, lineHeight: 1.45, textAlign: 'center' }}>{m.edgeNarration}</div>
      <div style={{ display: 'flex', gap: 10, marginTop: 8, justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 900, color: atkMgr.color, fontFamily: 'Archivo,sans-serif' }}>ATQ {m.A}</span>
        <span style={{ fontSize: 9, color: C.mut2, fontWeight: 800 }}>vs</span>
        <span style={{ fontSize: 10, fontWeight: 900, color: defMgr.color, fontFamily: 'Archivo,sans-serif' }}>DEF {m.D}</span>
      </div>
    </div>
  );
}

function Scoreboard({ A, B, sA, sB, bump }) {
  return <PremiumScoreboard A={A} B={B} sA={sA} sB={sB} minute="0'" bump={bump} />;
}

function MatchTopBar({ onBack, journee = 5, right, compact }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: compact ? '0 10px 4px' : '0 16px 10px', flexShrink: 0 }}>
      <button onClick={onBack} style={{ width: 34, height: 34, borderRadius: 11, border: '1px solid ' + C.line, background: C.surf2, color: C.txt, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ display: 'inline-flex', transform: 'rotate(180deg)' }}><GzIcon name="chevron" size={16} color={C.txt} /></span>
      </button>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, letterSpacing: 1.5, color: C.mut, textTransform: 'uppercase' }}>Journée {journee}</div>
      <div style={{ width: 34, display: 'flex', justifyContent: 'flex-end' }}>{right || (
        <button style={{ width: 34, height: 34, borderRadius: 11, border: '1px solid ' + C.line, background: C.surf2, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, padding: 0 }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: C.mut }} />)}
        </button>
      )}</div>
    </div>
  );
}

function TeamEmblem({ mgr, size = 44 }) {
  const isGold = mgr.you || mgr.color === '#ff8a1e';
  return (
    <div style={{
      width: size, height: size, borderRadius: isGold ? '50%' : 12, flexShrink: 0,
      background: isGold
        ? 'linear-gradient(145deg, rgba(201,146,46,0.35), rgba(138,95,26,0.15))'
        : `linear-gradient(145deg, ${mgr.color}44, ${mgr.color}18)`,
      border: `2px solid ${isGold ? C.accL : mgr.color + 'aa'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: isGold ? '0 0 16px rgba(201,146,46,0.35)' : `0 0 12px ${mgr.color}33`,
    }}>
      {isGold ? <HexBallIcon size={size * 0.55} /> : <GzIcon name="shield" size={size * 0.45} color={mgr.color} />}
    </div>
  );
}

function PremiumScoreboard({ A, B, sA, sB, minute, bump, live, compact }) {
  const rankA = rankOf(A.mid);
  const rankB = rankOf(B.mid);
  const em = compact ? 32 : 42;
  const scoreSize = compact ? 26 : 32;
  const num = (v, color, side) => (
    <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: scoreSize, color, lineHeight: 1, display: 'inline-block', animation: bump === side ? 'scorePop .5s' : 'none' }}>{v}</span>
  );
  return (
    <div style={{ padding: compact ? '0 0 6px' : '0 16px 8px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: compact ? 3 : 6, minWidth: 0 }}>
          <TeamEmblem mgr={A.mgr} size={em} />
          {!compact && <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11.5, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{A.mgr.name}</div>}
          {!compact && <div style={{ fontSize: 10, fontWeight: 800, color: C.accL, fontFamily: 'Archivo,sans-serif' }}>{rankA === 1 ? '1er' : `${rankA}e`}</div>}
        </div>
        <div style={{ textAlign: 'center', paddingTop: compact ? 0 : 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            {num(sA, A.mgr.color, 'A')}
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: compact ? 12 : 14, color: C.accL }}>{minute || "0'"}</span>
            {num(sB, B.mgr.color, 'B')}
          </div>
          {live && !compact && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 8, padding: '4px 10px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(50,200,112,0.35)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.lime, boxShadow: '0 0 6px #32c870' }} />
              <span style={{ fontSize: 9, fontWeight: 800, color: C.lime, fontFamily: 'Archivo,sans-serif', letterSpacing: 0.8 }}>EN DIRECT</span>
            </div>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: compact ? 3 : 6, minWidth: 0 }}>
          <TeamEmblem mgr={B.mgr} size={em} />
          {!compact && <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11.5, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{B.mgr.name}</div>}
          {!compact && <div style={{ fontSize: 10, fontWeight: 800, color: C.accL, fontFamily: 'Archivo,sans-serif' }}>{rankB === 1 ? '1er' : `${rankB}e`}</div>}
        </div>
      </div>
    </div>
  );
}

function MatchTabs({ tab, onChange }) {
  const tabs = [
    { k: 'resume', label: 'Résumé' },
    { k: 'compo', label: 'Compo' },
    { k: 'stats', label: 'Stats' },
    { k: 'duel', label: 'Duel' },
  ];
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid ' + C.line, margin: '0 16px 12px' }}>
      {tabs.map(t => (
        <button key={t.k} onClick={() => onChange(t.k)} style={{
          flex: 1, border: 'none', background: 'none', cursor: 'pointer', padding: '10px 4px',
          fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 10.5, letterSpacing: 0.6,
          textTransform: 'uppercase', color: tab === t.k ? C.accL : C.mut2,
          borderBottom: tab === t.k ? `2px solid ${C.acc}` : '2px solid transparent',
          marginBottom: -1,
        }}>{t.label}</button>
      ))}
    </div>
  );
}

function PitchFormation4({ team, cardStyle, heroId }) {
  const { gk, outfield } = team.field;
  const all = [gk, ...outfield];
  const best = all.reduce((a, b) => (b.ovr > a.ovr ? b : a), all[0]);
  const hero = heroId || best.id;
  const spot = (p, left, top, big) => (
    <div key={p.id} style={{
      position: 'absolute', left: left + '%', top: top + '%', transform: 'translate(-50%,-50%)',
      filter: p.id === hero ? 'drop-shadow(0 0 14px rgba(168,85,247,0.65))' : 'none',
    }}>
      <div style={{
        borderRadius: 12, padding: p.id === hero ? 2 : 0,
        background: p.id === hero ? 'linear-gradient(135deg, rgba(168,85,247,0.5), rgba(201,146,46,0.4))' : 'transparent',
        boxShadow: p.id === hero ? '0 0 20px rgba(168,85,247,0.4)' : 'none',
      }}>
        <PlayerCard player={p} w={big ? 82 : 74} interactive={false} flippable={false} cardStyle={cardStyle} />
      </div>
    </div>
  );
  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: '1 / 1.12', borderRadius: 18, overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(10,20,40,0.85) 0%, rgba(10,20,40,0.3) 18%, #14693e 22%, #0c4a2c 100%)',
      border: '1px solid rgba(201,146,46,0.2)',
      boxShadow: 'inset 0 0 50px rgba(0,0,0,0.4), 0 8px 28px rgba(0,0,0,0.45)',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 12%, transparent 12% 24%)' }} />
      <div style={{ position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)', width: '36%', aspectRatio: '1', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '48%', height: '16%', border: '2px solid rgba(255,255,255,0.15)', borderBottom: 'none', borderRadius: '6px 6px 0 0' }} />
      {outfield[0] && spot(outfield[0], 28, 36, false)}
      {outfield[1] && spot(outfield[1], 50, 26, true)}
      {outfield[2] && spot(outfield[2], 72, 36, false)}
      {spot(gk, 50, 80, false)}
    </div>
  );
}

function HighlightsTimeline({ moments, sim, preview }) {
  const mins = [12, 24, 38, 45, 58, 68];
  const events = moments.filter(m => m.scored || preview);
  if (!events.length && !preview) {
    return (
      <Surface style={{ padding: 16, borderColor: 'rgba(201,146,46,0.2)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, letterSpacing: 1, color: C.mut2, textTransform: 'uppercase', marginBottom: 6 }}>Temps forts</div>
        <div style={{ color: C.mut, fontSize: 12.5 }}>Les actions décisives apparaîtront ici pendant le match.</div>
      </Surface>
    );
  }
  const list = preview ? moments : moments.filter(m => m.scored);
  return (
    <Surface style={{ padding: '14px 10px', borderColor: 'rgba(201,146,46,0.25)' }}>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, letterSpacing: 1, color: C.mut2, textTransform: 'uppercase', marginBottom: 14, paddingLeft: 6 }}>Temps forts</div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: '50%', top: 4, bottom: 4, width: 2, background: 'rgba(255,255,255,0.1)', transform: 'translateX(-50%)' }} />
        {list.map((m, i) => {
          const isA = m.atk === 'A';
          const mgr = isA ? sim.A.mgr : sim.B.mgr;
          const min = mins[m.i ?? i] || (12 + i * 11);
          return (
            <div key={i} style={{ display: 'flex', justifyContent: isA ? 'flex-start' : 'flex-end', marginBottom: 14, position: 'relative' }}>
              <div style={{
                width: '46%', padding: isA ? '0 12px 0 0' : '0 0 0 12px',
                textAlign: isA ? 'right' : 'left',
              }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, color: C.accL, letterSpacing: 0.3 }}>{m.atkPlayer.name.split(' ').pop().toUpperCase()} {min}'</div>
                {m.scored && <div style={{ color: C.mut2, fontSize: 10, marginTop: 2 }}>Passe de {m.atkPlayer.name.split(' ')[0]}</div>}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 6,
                  padding: '5px 8px', borderRadius: 8, background: 'rgba(0,0,0,0.35)',
                  border: `1px solid ${mgr.color}55`,
                }}>
                  <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(201,146,46,0.15)', border: '1px solid rgba(201,146,46,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GzIcon name={m.scored ? 'ball' : m.icon} size={14} color={m.scored ? C.accL : C.mut} />
                  </div>
                  <span style={{ fontSize: 10, color: C.mut, fontWeight: 700 }}>{m.scored ? 'But' : m.label}</span>
                </div>
              </div>
              <div style={{
                position: 'absolute', left: '50%', top: 8, transform: 'translateX(-50%)',
                width: 8, height: 8, borderRadius: '50%', background: m.scored ? C.acc : C.mut2,
                border: '2px solid #0c0f1c', boxShadow: m.scored ? '0 0 8px rgba(201,146,46,0.6)' : 'none',
              }} />
            </div>
          );
        })}
      </div>
    </Surface>
  );
}

function MatchDuelPanel({ A, B }) {
  const roleRow = (label, pa, pb, statKey) => {
    const ba = pa.boost && pa.boost.stat === statKey ? pa.boost.amount : 0;
    const bb = pb.boost && pb.boost.stat === statKey ? pb.boost.amount : 0;
    return (
      <div key={label} style={{ padding: '10px 0', borderBottom: '1px solid ' + C.line }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.6, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase', marginBottom: 8, textAlign: 'center' }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <MiniCard player={pa} w={40} />
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11, marginTop: 4 }}>{pa.name.split(' ').pop()}</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 16, color: A.mgr.color, marginTop: 2 }}>{pa.stats[statKey]}{ba ? <span style={{ fontSize: 11, color: C.lime }}> +{ba}</span> : ''}</div>
            <StatTypeTag team={false} />
          </div>
          <div style={{ fontSize: 10, color: C.mut2, fontWeight: 800 }}>{STAT_ABBR[statKey]}</div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <MiniCard player={pb} w={40} />
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11, marginTop: 4 }}>{pb.name.split(' ').pop()}</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 16, color: B.mgr.color, marginTop: 2 }}>{pb.stats[statKey]}{bb ? <span style={{ fontSize: 11, color: C.lime }}> +{bb}</span> : ''}</div>
            <StatTypeTag team={false} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <ImpactLegend compact />
      <Surface style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{ textAlign: 'center' }}>
          <TeamEmblem mgr={A.mgr} size={48} />
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 28, color: A.mgr.color, marginTop: 8 }}>{A.agg.ovr}</div>
          <StatTypeTag team />
          <div style={{ color: C.mut2, fontSize: 9, fontWeight: 800, marginTop: 4 }}>OVR ÉQUIPE</div>
        </div>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: C.acc }}>VS</div>
        <div style={{ textAlign: 'center' }}>
          <TeamEmblem mgr={B.mgr} size={48} />
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 28, color: B.mgr.color, marginTop: 8 }}>{B.agg.ovr}</div>
          <StatTypeTag team />
          <div style={{ color: C.mut2, fontSize: 9, fontWeight: 800, marginTop: 4 }}>OVR ÉQUIPE</div>
        </div>
      </Surface>
      <Surface style={{ padding: 12 }}>
        <StatsSectionTitle icon="duel" title="Duels par rôle" subtitle="Stats joueur individuelles sur chaque poste clé" />
        {roleRow('Tireur penalty', A.roles.penalty, B.roles.penalty, 'tir')}
        {roleRow('Attaquant 1v1', A.roles.duelAtt, B.roles.duelAtt, 'dri')}
        {roleRow('Défenseur 1v1', A.roles.duelDef, B.roles.duelDef, 'def')}
      </Surface>
    </div>
  );
}

function MatchFooter({ rating, points, pointsLabel = 'Bonus actif', pointsIcon = 'star', pointsColor = C.accL, cta, onCta, ctaKind = 'primary' }) {
  return (
    <div style={{ padding: '12px 16px 20px', background: 'linear-gradient(to top, rgba(12,15,28,0.98), transparent)' }}>
      <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
        <Surface style={{ flex: 1, padding: '10px 12px', textAlign: 'center' }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.6, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase' }}>Notes équipe</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 4 }}>
            <GzIcon name="star" size={14} color={C.accL} />
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 20, color: C.accL }}>{rating}</span>
          </div>
        </Surface>
        <Surface style={{ flex: 1, padding: '10px 12px', textAlign: 'center' }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.6, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase' }}>{pointsLabel}</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 4 }}>
            <GzIcon name={pointsIcon} size={14} color={pointsColor} />
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: pointsLabel === 'Points gagnés' ? 20 : 13, color: pointsColor }}>{points}</span>
          </div>
        </Surface>
      </div>
      <Btn full size="lg" kind={ctaKind} onClick={onCta}>{cta}</Btn>
    </div>
  );
}

function CountdownPill() {
  return (
    <div style={{ margin: '0 16px 10px', padding: '8px 14px', borderRadius: 999, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
      <span style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.8, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase' }}>Prochain match dans</span>
      <GzIcon name="calendar" size={12} color={C.accL} />
      <span style={{ fontSize: 11, fontWeight: 800, color: C.accL, fontFamily: 'Archivo,sans-serif' }}>2j 14h 32m</span>
    </div>
  );
}

function PitchShell({ children, highlight }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, borderRadius: 12, overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(10,20,40,0.9) 0%, rgba(10,20,40,0.35) 10%, #14693e 14%, #0f5c36 50%, #0c4a2c 86%, rgba(10,20,40,0.35) 94%, rgba(10,20,40,0.9) 100%)',
      border: '1px solid rgba(201,146,46,0.25)',
      boxShadow: highlight ? `inset 0 0 50px ${highlight}18` : 'inset 0 0 40px rgba(0,0,0,0.35)',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 10%, transparent 10% 20%)' }} />
      {/* but haut */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '44%', height: '9%', border: '2px solid rgba(255,255,255,0.18)', borderTop: 'none', borderRadius: '0 0 8px 8px' }} />
      {/* but bas */}
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '44%', height: '9%', border: '2px solid rgba(255,255,255,0.18)', borderBottom: 'none', borderRadius: '8px 8px 0 0' }} />
      {/* rond central */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '32%', aspectRatio: '1', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.14)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }} />
      {children}
    </div>
  );
}

function PitchFitBox({ children, highlight }) {
  return (
    <div style={{ flex: 1, minHeight: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: 'auto', maxWidth: '100%', aspectRatio: '10 / 13', position: 'relative' }}>
        <PitchShell highlight={highlight}>{children}</PitchShell>
      </div>
    </div>
  );
}

function PitchCardSpot({ player, left, top, w, cardStyle, dim, anim, glow, isGk, teamColor, hero, entering }) {
  if (!player) return null;
  const r = RARITY[player.rarity];
  const enterAnim = entering ? 'cardEnter .55s ease both' : undefined;
  return (
    <div style={{
      position: 'absolute', left: left + '%', top: top + '%', transform: 'translate(-50%,-50%)',
      opacity: dim ? 0.28 : 1, transition: 'opacity .5s, top .6s ease, left .6s ease',
      animation: anim || enterAnim || 'none', zIndex: hero ? 5 : isGk ? 2 : 1,
    }}>
      <div style={{
        borderRadius: hero ? 12 : 8, padding: hero ? 3 : 1,
        background: hero ? `linear-gradient(145deg, ${r.ring}55, ${teamColor || C.acc}33)` : 'transparent',
        border: `2px solid ${hero ? r.ring : (teamColor || 'rgba(255,255,255,0.15)')}`,
        boxShadow: hero ? `0 0 18px ${r.glow}` : glow ? `0 0 14px ${teamColor || C.acc}66` : 'none',
      }}>
        <PlayerCard player={player} w={w} interactive={false} flippable={false} cardStyle={cardStyle} glowPulse={glow} />
        {hero && (
          <div style={{ textAlign: 'center', marginTop: 2 }}>
            <span style={{ fontSize: 7, fontWeight: 900, fontFamily: 'Archivo,sans-serif', color: r.text, letterSpacing: 0.5 }}>{r.label.toUpperCase()}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function placeGk(spots, push, team, side, w, opts = {}) {
  const pos = side === 'def' ? PITCH.GK_DEF : PITCH.GK_ATK;
  push(team.field.gk, pos.x, pos.y, w, { isGk: true, ...opts });
}

function MomentStatStrip({ m, micro, atkMgr, defMgr, compact }) {
  const showStats = micro === 'stats';
  const showProb = (micro === 'clash' || micro === 'keeper') && micro !== 'outcome';
  if (!showStats && !showProb) return null;

  const statBar = (line, color, align) => {
    if (!line) return null;
    const pctW = Math.max(10, Math.min(100, line.value));
    return (
      <div key={line.label + align} style={{ marginBottom: compact ? 4 : 6 }}>
        <div style={{ fontSize: compact ? 8 : 9, fontWeight: 800, color: C.mut2, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase', letterSpacing: 0.3, textAlign: align, marginBottom: 2 }}>
          {line.label}{line.team ? ' · équipe' : ''}{line.malus ? ' · malus' : ''}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexDirection: align === 'right' ? 'row-reverse' : 'row' }}>
          <div style={{ flex: 1, height: compact ? 5 : 6, borderRadius: 999, background: 'rgba(0,0,0,0.4)', overflow: 'hidden' }}>
            <div style={{ width: pctW + '%', height: '100%', borderRadius: 999, background: `linear-gradient(90deg, ${line.malus ? C.pink : color}, ${line.malus ? C.pink : color}88)`, transition: 'width 1.1s ease' }} />
          </div>
          <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: compact ? 14 : 16, color: line.malus ? C.pink : '#fff', minWidth: 24, textAlign: align }}>{line.malus ? '−' : ''}{line.value}</span>
        </div>
      </div>
    );
  };

  const pct = micro === 'keeper' ? m.keeperPct : m.duelPct;
  const pctLabel = micro === 'keeper'
    ? (m.penalty ? 'Chance de marquer' : 'Chance de but')
    : 'Réussite de l\'action';

  return (
    <div style={{ padding: compact ? '8px 10px' : '10px 12px', borderRadius: 12, background: 'rgba(0,0,0,0.45)', border: '1px solid ' + C.line, flexShrink: 0, maxHeight: compact ? 130 : undefined, overflowY: compact ? 'auto' : 'visible' }}>
      <div style={{ fontSize: 8, fontWeight: 800, color: C.accL, letterSpacing: 0.7, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase', marginBottom: compact ? 5 : 8, textAlign: 'center' }}>
        {MICRO_HINTS[micro]}
      </div>
      {showStats && (
        <div style={{ display: 'flex', gap: compact ? 6 : 10 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 8, fontWeight: 900, color: atkMgr.color, fontFamily: 'Archivo,sans-serif', marginBottom: 3 }}>ATTAQUE</div>
            {m.atkLines.map((l, i) => statBar(l, atkMgr.color, 'left'))}
          </div>
          <div style={{ width: 1, background: C.line, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 8, fontWeight: 900, color: defMgr.color, fontFamily: 'Archivo,sans-serif', marginBottom: 3, textAlign: 'right' }}>DÉFENSE</div>
            {m.defLines.map((l, i) => statBar(l, defMgr.color, 'right'))}
          </div>
        </div>
      )}
      {showProb && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: showStats ? 6 : 0, paddingTop: showStats ? 6 : 0, borderTop: showStats ? '1px solid ' + C.line : 'none' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: compact ? 30 : 38, color: m.penalty || micro === 'keeper' ? C.gold : atkMgr.color, lineHeight: 1 }}>
              <AnimatedNumber to={pct} go dur={1100} />%
            </div>
            <div style={{ fontSize: 9, color: C.mut2, fontWeight: 700, marginTop: 2 }}>{pctLabel}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function MomentProgress({ ai, micro, total, compact }) {
  const steps = ['draw', 'action', 'finish', 'outcome'];
  const mapMicro = micro === 'suspense' ? 'finish' : micro === 'stopped' ? 'outcome' : micro;
  const idx = Math.max(0, steps.indexOf(mapMicro));
  return (
    <div style={{ marginBottom: compact ? 4 : 8, padding: '0 2px', flexShrink: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: compact ? 4 : 6 }}>
        <span style={{ fontSize: compact ? 9 : 10, fontWeight: 800, color: C.mut2, fontFamily: 'Archivo,sans-serif' }}>Moment {ai + 1} / {total}</span>
        <span style={{ fontSize: compact ? 9 : 10, fontWeight: 800, color: C.accL, fontFamily: 'Archivo,sans-serif' }}>{MICRO_HINTS[micro]}</span>
      </div>
      <div style={{ display: 'flex', gap: 3 }}>
        {steps.map((s, i) => (
          <div key={s} style={{
            flex: 1, height: 3, borderRadius: 999,
            background: i <= idx ? C.acc : 'rgba(255,255,255,0.1)',
            transition: 'background .4s',
          }} />
        ))}
      </div>
    </div>
  );
}

function MatchPitchScene({ m, micro, atkTeam, defTeam, atkMgr, defMgr, cardStyle }) {
  if (micro === 'draw') return null;

  const showLineup = geq(micro, 'lineup');
  const entering = micro === 'lineup';
  const clash = micro === 'clash' || micro === 'keeper';
  const outcome = micro === 'outcome';
  const type = m.type;
  const ec = EVENT_COLORS[type] || C.acc;
  const splitPitch = type === 'duel' || type === 'penalty' || m.penalty;
  const wSm = 30, wMd = 40, wLg = 52, wGk = 32;
  const atkGlow = outcome && m.scored;
  const defGlow = outcome && !m.scored && (m.penalty || m.won);
  const clashAnim = clash ? 'duelClash .6s ease-in-out infinite' : undefined;
  const winAnim = outcome ? 'duelWin .7s ease' : undefined;
  const atkColor = atkMgr.color;
  const defColor = defMgr.color;

  const spots = [];
  const push = (player, left, top, w, opts = {}) => {
    if (!player) return;
    spots.push({ key: player.id + '-' + left + '-' + top, player, left, top, w: w || wSm, ...opts });
  };

  const defGk = () => placeGk(spots, push, defTeam, 'def', wGk, { dim: !showLineup, teamColor: defColor });
  const atkGk = () => placeGk(spots, push, atkTeam, 'atk', wGk, { dim: true, teamColor: atkColor });

  if (!showLineup) {
    defGk(); atkGk();
  } else if (type === 'possession') {
    const atkO = atkTeam.field.outfield;
    atkO.forEach((p, i) => push(p, [22, 36, 64, 78][i], [32, 40, 40, 32][i], wSm, { teamColor: atkColor, entering }));
    push(atkTeam.field.gk, 50, 18, wGk, { isGk: true, teamColor: atkColor, dim: true, entering });
    defTeam.field.outfield.forEach((p, i) => push(p, [24, 40, 60, 76][i], [58, 66, 66, 58][i], wSm, { teamColor: defColor, dim: micro === 'edge' && !clash, entering }));
    push(defTeam.field.gk, 50, 82, wGk, { isGk: true, teamColor: defColor, entering });
  } else if (type === 'corner') {
    const taker = m.atkPlayer;
    const others = atkTeam.field.outfield.filter(p => p.id !== taker.id);
    atkGk();
    push(taker, 88, 76, wLg, { anim: clashAnim || winAnim, glow: atkGlow, hero: true, teamColor: atkColor, entering });
    others.forEach((p, i) => push(p, [36, 50, 64][i] || 50, [64, 68, 64][i] || 66, wSm, { teamColor: atkColor, dim: true, entering }));
    defGk();
    defTeam.field.outfield.forEach((p, i) => push(p, [34, 50, 66][i] || 50, [72, 68, 72][i] || 70, wSm, { teamColor: defColor, dim: !clash, entering }));
  } else if (type === 'contre') {
    atkGk();
    push(m.atkPlayer, 48, 44, wLg, { anim: clashAnim || winAnim, glow: atkGlow, hero: true, teamColor: atkColor, entering });
    const excluded = m.defExcluded;
    defGk();
    defTeam.field.outfield.forEach(p => {
      if (excluded && p.id === excluded.id) push(p, 8, 52, wSm, { dim: true, teamColor: defColor, entering });
      else push(p, p.id === m.defPlayer?.id ? 64 : 36, 60, wMd, {
        anim: p.id === m.defPlayer?.id ? (clashAnim || winAnim) : undefined,
        glow: defGlow && p.id === m.defPlayer?.id,
        hero: p.id === m.defPlayer?.id,
        teamColor: defColor,
        entering,
      });
    });
  } else if (type === 'duel') {
    atkGk(); defGk();
    push(m.atkPlayer, 32, 50, wLg, { anim: clash ? clashAnim : winAnim, glow: atkGlow, hero: true, teamColor: atkColor, entering });
    push(m.defPlayer, 68, 50, wLg, { anim: clash ? clashAnim : winAnim, glow: defGlow, hero: true, teamColor: defColor, entering });
  } else if (type === 'penalty' || m.penalty) {
    atkGk();
    push(m.atkPlayer, PITCH.PEN_SPOT.x, PITCH.PEN_SPOT.y, wLg, { anim: clash || micro === 'edge' ? clashAnim : winAnim, glow: atkGlow, hero: true, teamColor: atkColor, entering });
    push(m.defPlayer || defTeam.field.gk, PITCH.GK_DEF.x, PITCH.GK_DEF.y, wGk, { isGk: true, anim: clash ? clashAnim : winAnim, glow: defGlow, hero: true, teamColor: defColor, entering });
  }

  const banner = outcome
    ? (m.scored ? 'BUT !' : (m.penalty || m.won) ? 'ARRÊT !' : 'STOPPÉ')
    : null;

  const heroNames = type === 'duel' || type === 'penalty' || m.penalty
    ? `${m.atkPlayer?.name?.split(' ').pop()} vs ${m.defPlayer?.name?.split(' ').pop()}`
    : type === 'corner' || type === 'contre'
      ? m.atkPlayer?.name
      : null;

  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 4, flexShrink: 0 }}>
        <GzIcon name={m.icon} size={14} color={ec} />
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, letterSpacing: 0.5, color: ec }}>{m.label.toUpperCase()}</span>
        {heroNames && showLineup && (
          <span style={{ fontSize: 9, color: C.mut2, fontWeight: 700, marginLeft: 4 }}>· {heroNames}</span>
        )}
      </div>
      <PitchFitBox highlight={ec}>
        {splitPitch && showLineup && (
          <>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', background: `${atkColor}0a`, borderRight: '1px solid rgba(255,255,255,0.12)', animation: 'pitchSplit .5s ease both', pointerEvents: 'none', zIndex: 0 }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', background: `${defColor}0a`, animation: 'pitchSplit .5s ease both', pointerEvents: 'none', zIndex: 0 }} />
            <div style={{ position: 'absolute', left: '50%', top: '8%', bottom: '8%', width: 2, transform: 'translateX(-50%)', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.35), transparent)', zIndex: 1, pointerEvents: 'none' }} />
          </>
        )}
        {type === 'possession' && showLineup && (
          <div style={{ position: 'absolute', top: 6, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 8%', zIndex: 3, pointerEvents: 'none' }}>
            <span style={{ fontSize: 8, fontWeight: 900, color: atkColor, fontFamily: 'Archivo,sans-serif', letterSpacing: 0.5 }}>{atkMgr.name.split(' ')[0].toUpperCase()}</span>
            <span style={{ fontSize: 8, fontWeight: 900, color: defColor, fontFamily: 'Archivo,sans-serif', letterSpacing: 0.5 }}>{defMgr.name.split(' ')[0].toUpperCase()}</span>
          </div>
        )}
        {spots.map(s => (
          <PitchCardSpot key={s.key} player={s.player} left={s.left} top={s.top} w={s.w} cardStyle={cardStyle}
            dim={s.dim} anim={s.anim} glow={s.glow} isGk={s.isGk} teamColor={s.teamColor} hero={s.hero} entering={s.entering} />
        ))}
        {outcome && banner && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 8, background: 'rgba(0,0,0,0.42)' }}>
            <div style={{
              padding: '12px 24px', borderRadius: 14, animation: 'scorePop .55s',
              background: m.scored ? `linear-gradient(135deg, ${atkMgr.color}, ${C.acc})` : 'rgba(12,10,22,0.94)',
              border: m.scored ? 'none' : '1.5px solid ' + C.line,
            }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 26, letterSpacing: 1, color: m.scored ? '#160b02' : C.txt }}>{banner}</div>
            </div>
          </div>
        )}
      </PitchFitBox>
    </div>
  );
}

function MatchBonusPicker({ team, value, onChange }) {
  const [kind, setKind] = React.useState(value?.type || null);
  const [stat, setStat] = React.useState(value?.stat || 'tir');
  const [playerId, setPlayerId] = React.useState(value?.playerId || team.field.outfield[0]?.id);
  const players = team.field.all;

  const buildBonus = (type, s = stat, pid = playerId) => {
    if (!type) return null;
    if (type === 'force_pen') return { type };
    if (type === 'team') return { type, stat: s };
    return { type, playerId: pid, stat: s };
  };

  const pickKind = (k) => {
    setKind(k);
    onChange(buildBonus(k));
  };
  const pickStat = (s) => {
    setStat(s);
    if (kind) onChange(buildBonus(kind, s, playerId));
  };
  const pickPlayer = (pid) => {
    setPlayerId(pid);
    if (kind === 'player') onChange(buildBonus('player', stat, pid));
  };

  return (
    <Surface style={{ padding: 12, marginBottom: 10, borderColor: 'rgba(201,146,46,0.3)' }}>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, letterSpacing: 0.6, color: C.mut2, textTransform: 'uppercase', marginBottom: 8 }}>Bonus de match</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: kind && kind !== 'force_pen' ? 10 : 0 }}>
        <button onClick={() => pickKind(null)} style={{
          padding: '6px 10px', borderRadius: 999, border: `1px solid ${!kind ? C.acc : C.line}`,
          background: !kind ? 'rgba(201,146,46,0.15)' : 'transparent', color: !kind ? C.accL : C.mut,
          fontSize: 10, fontWeight: 800, fontFamily: 'Archivo,sans-serif', cursor: 'pointer',
        }}>Aucun</button>
        {MATCH_BONUSES.map(b => (
          <button key={b.k} onClick={() => pickKind(b.k)} style={{
            padding: '6px 10px', borderRadius: 999, border: `1px solid ${kind === b.k ? C.acc : C.line}`,
            background: kind === b.k ? 'rgba(201,146,46,0.15)' : 'transparent', color: kind === b.k ? C.accL : C.mut,
            fontSize: 10, fontWeight: 800, fontFamily: 'Archivo,sans-serif', cursor: 'pointer',
          }}>{b.name}</button>
        ))}
      </div>
      {kind === 'team' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {MATCH_BONUS_STATS.map(k => (
            <button key={k} onClick={() => pickStat(k)} style={{
              padding: '5px 8px', borderRadius: 8, border: `1px solid ${stat === k ? C.cyan : C.line}`,
              background: stat === k ? 'rgba(58,138,255,0.12)' : 'transparent', color: stat === k ? C.cyan : C.mut2,
              fontSize: 9.5, fontWeight: 800, cursor: 'pointer', fontFamily: 'Archivo,sans-serif',
            }}>{STAT_ABBR[k]}</button>
          ))}
        </div>
      )}
      {kind === 'player' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
            {players.map(p => (
              <button key={p.id} onClick={() => pickPlayer(p.id)} style={{
                border: `1.5px solid ${playerId === p.id ? C.acc : C.line}`, borderRadius: 10, padding: 2,
                background: 'transparent', cursor: 'pointer', flexShrink: 0,
              }}><MiniCard player={p} w={44} /></button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {MATCH_BONUS_STATS.map(k => (
              <button key={k} onClick={() => pickStat(k)} style={{
                padding: '5px 8px', borderRadius: 8, border: `1px solid ${stat === k ? C.acc : C.line}`,
                background: stat === k ? 'rgba(201,146,46,0.12)' : 'transparent', color: stat === k ? C.accL : C.mut2,
                fontSize: 9.5, fontWeight: 800, cursor: 'pointer', fontFamily: 'Archivo,sans-serif',
              }}>{STAT_ABBR[k]}</button>
            ))}
          </div>
        </div>
      )}
      {kind === 'force_pen' && <div style={{ color: C.mut, fontSize: 11 }}>Un de tes 3 moments sera transformé en penalty.</div>}
    </Surface>
  );
}

function CommentaryBar({ text, compact }) {
  return (
    <div style={{ padding: compact ? '8px 10px' : '11px 14px', background: 'rgba(0,0,0,0.4)', borderRadius: 12, border: '1px solid ' + C.line, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
      <GzIcon name="mic" size={compact ? 14 : 16} color={C.accL} />
      <span key={text} style={{ fontFamily: 'Hanken Grotesk,sans-serif', fontWeight: 600, fontSize: compact ? 12 : 13.5, color: C.txt, animation: 'fadeIn .3s', lineHeight: 1.35 }}>{text}</span>
    </div>
  );
}

function MatchFlow({ midA, midB, replay, seed, bonusA: initialBonusA, onExit, isMobile }) {
  const [sim, setSim] = React.useState(() => replay ? simulateMatch(midA, midB, seed || 777, { bonusA: initialBonusA }) : null);
  const [phase, setPhase] = React.useState(replay ? 'play' : 'kickoff');
  const [ai, setAi] = React.useState(0);
  const [micro, setMicro] = React.useState('draw');
  const tok = React.useRef(0);
  const cardStyle = window.__cardStyle || 'blason';

  React.useEffect(() => {
    if (phase !== 'play' || !sim) return;
    const myTok = ++tok.current;
    const moment = sim.moments[ai];
    const seq = seqFor(moment);
    let idx = 0; let timer;
    setMicro(seq[0][0]);
    const run = () => {
      timer = setTimeout(() => {
        if (tok.current !== myTok) return;
        idx++;
        if (idx < seq.length) { setMicro(seq[idx][0]); run(); }
        else if (ai < 5) setAi(ai + 1);
        else setTimeout(() => { if (tok.current === myTok) setPhase('result'); }, 350);
      }, seq[idx][1]);
    };
    run();
    return () => { clearTimeout(timer); };
  }, [phase, ai, replay, sim]);

  const skip = () => { if (phase !== 'play') return; tok.current++; if (ai < 5) setAi(ai + 1); else setPhase('result'); };

  if (phase === 'kickoff') {
    const previewA = buildTeam(midA), previewB = buildTeam(midB);
    return (
      <Kickoff
        A={previewA} B={previewB}
        bonusA={initialBonusA}
        onStart={(bonus) => {
          setSim(simulateMatch(midA, midB, seed, { bonusA: bonus }));
          setAi(0);
          setMicro('draw');
          setPhase('play');
        }}
        onExit={onExit}
      />
    );
  }

  if (!sim) return null;
  const A = sim.A, B = sim.B;
  const youSide = youSideOf(A, B);

  const resolvedUpTo = ai + (['outcome', 'stopped'].includes(micro) ? 1 : 0);
  const sA = sim.moments.slice(0, resolvedUpTo).filter(x => x.scored && x.atk === 'A').length;
  const sB = sim.moments.slice(0, resolvedUpTo).filter(x => x.scored && x.atk === 'B').length;

  if (phase === 'result') return <ResultScreen sim={sim} sA={sim.scoreA} sB={sim.scoreB} replay={replay} onExit={onExit} onReplay={() => { setAi(0); setMicro('draw'); setPhase('play'); }} />;

  const m = phase === 'play' ? sim.moments[ai] : null;
  if (phase === 'play' && !m) {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: MATCH_PAD_TOP }}>
        <Btn onClick={onExit}>Retour</Btn>
      </div>
    );
  }
  const atkMgr = m ? (m.atk === 'A' ? A.mgr : B.mgr) : A.mgr;
  const defMgr = m ? (m.atk === 'A' ? B.mgr : A.mgr) : B.mgr;
  const bump = (phase === 'play' && micro === 'outcome' && m.scored) ? m.atk : null;

  const atkTeam = m ? (m.atk === 'A' ? A : B) : A;
  const defTeam = m ? (m.atk === 'A' ? B : A) : B;
  const actionSides = m ? resolveActionSides(m, A, B, youSide) : null;
  const finishSides = m ? resolveFinishSides(m, A, B, youSide) : null;

  const renderPlay = () => {
    if (micro === 'draw') return <MomentDrawReveal m={m} atkMgr={atkMgr} youSide={youSide} />;

    if (micro === 'action') {
      const prob = m.duelPct;
      const probLabel = m.penalty ? 'Chance de marquer' : 'Réussite de l\'action';
      const sides = m.penalty ? finishSides : actionSides;
      const gkLeft = m.penalty && !finishSides.youAttack;
      const gkRight = m.penalty && finishSides.youAttack;
      return (
        <SplitMomentScreen
          m={m} sides={sides} cardStyle={cardStyle}
          prob={prob} probLabel={probLabel} animate highlightPlayers
          gkLeft={gkLeft} gkRight={gkRight}
        />
      );
    }

    if (micro === 'finish') {
      const gkLeft = !finishSides.youAttack;
      const gkRight = finishSides.youAttack;
      return (
        <SplitMomentScreen
          m={m} sides={finishSides} cardStyle={cardStyle}
          prob={m.keeperPct} probLabel="Chance de marquer" animate={false}
          gkLeft={gkLeft} gkRight={gkRight}
        />
      );
    }

    if (micro === 'suspense') {
      const sides = finishSides;
      const prob = m.penalty ? m.duelPct : m.keeperPct;
      const gkLeft = !finishSides.youAttack;
      const gkRight = finishSides.youAttack;
      return (
        <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
          <SplitMomentScreen
            m={m} sides={sides} cardStyle={cardStyle}
            prob={prob} probLabel="Suspense…" animate={false} pulse
            gkLeft={gkLeft} gkRight={gkRight}
          />
        </div>
      );
    }

    if (micro === 'outcome') {
      const sides = m.penalty || m.won ? finishSides : actionSides;
      const gkLeft = (m.penalty || m.won) && !finishSides.youAttack;
      const gkRight = (m.penalty || m.won) && finishSides.youAttack;
      return (
        <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
          <SplitMomentScreen m={m} sides={sides} cardStyle={cardStyle} animate={false} gkLeft={gkLeft} gkRight={gkRight} />
          <OutcomeBanner m={m} show />
        </div>
      );
    }

    if (micro === 'stopped') {
      return (
        <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
          <SplitMomentScreen m={m} sides={actionSides} cardStyle={cardStyle} animate={false} />
          <OutcomeBanner m={m} show />
        </div>
      );
    }

    return null;
  };

  const minute = phase === 'play' ? `${12 + ai * 9}'` : "0'";

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden',
      paddingTop: MATCH_PAD_TOP, paddingBottom: MATCH_PAD_BOTTOM, boxSizing: 'border-box',
    }} onClick={phase === 'play' ? skip : undefined}>
      <MatchTopBar onBack={onExit} compact={phase === 'play'} right={phase === 'play' ? (
        <button onClick={e => { e.stopPropagation(); skip(); }} style={{ padding: '6px 10px', borderRadius: 10, border: '1px solid ' + C.line, background: C.surf2, color: C.mut, fontSize: 10, fontWeight: 800, fontFamily: 'Archivo,sans-serif', cursor: 'pointer' }}>Passer</button>
      ) : replay ? <Chip color={C.cyan}>Replay</Chip> : null} />
      <div style={{ padding: '0 10px', flexShrink: 0 }}>
        <PremiumScoreboard A={A} B={B} sA={sA} sB={sB} minute={minute} bump={bump} live={phase === 'play'} compact={phase === 'play'} />
      </div>

      {phase === 'play' ? (
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: '0 10px', gap: 4, overflow: 'hidden' }}>
          <MomentTimeline moments={sim.moments} active={ai} resolvedUpTo={resolvedUpTo} />
          <MomentProgress ai={ai} micro={micro} total={6} compact />
          {renderPlay()}
        </div>
      ) : null}
    </div>
  );
}

function Kickoff({ A, B, bonusA: initialBonus, onStart, onExit }) {
  const [tab, setTab] = React.useState('compo');
  const [bonus, setBonus] = React.useState(initialBonus || loadPlannedBonus());
  const youTeam = A.mgr.you ? A : B;
  const cardStyle = window.__cardStyle || 'blason';
  const rating = (youTeam.agg.ovr / 10 + 0.55).toFixed(1).replace('.', ',');

  const tabContent = {
    resume: (
      <Surface style={{ padding: 14, textAlign: 'center', borderColor: 'rgba(201,146,46,0.2)' }}>
        <div style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.45 }}>6 moments forts — écran scindé, stats clés et probabilité en direct. Choisis ton bonus avant le coup d'envoi.</div>
      </Surface>
    ),
    compo: <PitchFormation4 team={youTeam} cardStyle={cardStyle} />,
    stats: <MatchStatsPanel A={A} B={B} />,
    duel: <MatchDuelPanel A={A} B={B} />,
  };

  const handleStart = () => {
    if (bonus) savePlannedBonus(bonus);
    onStart(bonus || null);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: MATCH_PAD_TOP, paddingBottom: MATCH_PAD_BOTTOM, boxSizing: 'border-box', overflow: 'hidden' }}>
      <MatchTopBar onBack={onExit} />
      <PremiumScoreboard A={A} B={B} sA={0} sB={0} minute="0'" />
      <MatchTabs tab={tab} onChange={setTab} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px', minHeight: 0 }}>
        <MatchBonusPicker team={youTeam} value={bonus} onChange={setBonus} />
        {tabContent[tab]}
      </div>
      <MatchFooter
        rating={rating}
        points={bonusLabel(bonus) || '—'}
        cta={<><GzIcon name="ball" size={18} color="#1a0e02" /> Voir le match</>}
        onCta={handleStart}
      />
    </div>
  );
}

function ResultScreen({ sim, sA, sB, replay, onExit, onReplay }) {
  const [tab, setTab] = React.useState('resume');
  const you = sim.A.mgr.you ? 'A' : 'B';
  const myScore = you === 'A' ? sA : sB, oppScore = you === 'A' ? sB : sA;
  const win = myScore > oppScore, draw = myScore === oppScore;
  const pts = win ? 3 : draw ? 1 : 0;
  const jetons = win ? 25 : draw ? 12 : 6;
  const youTeam = you === 'A' ? sim.A : sim.B;
  const cardStyle = window.__cardStyle || 'blason';
  const scorers = sim.moments.filter(m => m.scored).map(m => m.atkPlayer);
  const mvp = scorers[0] || youTeam.field.outfield[0];
  const rating = (youTeam.agg.ovr / 10 + (win ? 1.2 : draw ? 0.4 : -0.3)).toFixed(1).replace('.', ',');
  const outcomeColor = win ? C.lime : draw ? C.gold : '#e8123b';
  const outcomeLabel = win ? 'Victoire' : draw ? 'Match nul' : 'Défaite';

  const tabContent = {
    resume: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Surface style={{ padding: 14, textAlign: 'center', background: `linear-gradient(135deg, ${outcomeColor}18, rgba(0,0,0,0.2))`, borderColor: outcomeColor + '44' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: outcomeColor, letterSpacing: 0.5 }}>{outcomeLabel.toUpperCase()}</div>
          {replay && <div style={{ marginTop: 6 }}><Chip color={C.cyan}>Replay terminé</Chip></div>}
        </Surface>
        <HighlightsTimeline moments={sim.moments} sim={sim} />
        <Surface style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <PlayerCard player={mvp} w={72} interactive={false} flippable={false} cardStyle={cardStyle} />
          <div>
            <Chip color={C.gold}><GzIcon name="star" size={12} color={C.gold} /> Homme du match</Chip>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 15, marginTop: 6 }}>{mvp.name}</div>
          </div>
        </Surface>
      </div>
    ),
    compo: <PitchFormation4 team={youTeam} cardStyle={cardStyle} heroId={mvp.id} />,
    stats: <MatchStatsPanel A={sim.A} B={sim.B} />,
    duel: <MatchDuelPanel A={sim.A} B={sim.B} />,
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: MATCH_PAD_TOP, paddingBottom: MATCH_PAD_BOTTOM, boxSizing: 'border-box', overflow: 'hidden' }}>
      <MatchTopBar onBack={onExit} />
      <PremiumScoreboard A={sim.A} B={sim.B} sA={sA} sB={sB} minute="FT" />
      <MatchTabs tab={tab} onChange={setTab} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px', minHeight: 0 }}>
        {tabContent[tab]}
      </div>
      <MatchFooter
        rating={rating}
        points={replay ? '—' : `+${pts} · ${jetons} jetons`}
        pointsLabel="Points gagnés"
        pointsIcon="trophy"
        pointsColor={C.lime}
        cta={replay ? 'Retour à la ligue' : 'Revoir le match'}
        ctaKind={replay ? 'primary' : 'ghost'}
        onCta={replay ? onExit : onReplay}
      />
      {!replay && (
        <div style={{ padding: '0 16px 16px' }}>
          <Btn full size="lg" onClick={onExit}>Retour à la ligue</Btn>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { MatchFlow, MatchBonusPicker });
