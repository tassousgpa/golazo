// screens-match.jsx — CINEMATIC auto-playing match: pack-opening reveals,
// per-action micro-steps, animated stats, live commentary, ~45-60s, deterministic replay.

const ORDER = ['intro', 'cards', 'suspense', 'duel', 'keeper', 'outcome'];
const geq = (micro, s) => ORDER.indexOf(micro) >= ORDER.indexOf(s);

function seqFor(m) {
  if (m.penalty) return [['intro', 500], ['cards', 700], ['keeper', 1000], ['outcome', 1300]];
  if (m.type === 'duel') return [['intro', 450], ['cards', 650], ['duel', 1100], ['outcome', 1200]];
  return [['intro', 450], ['cards', 750], ['suspense', 650], ['outcome', 1100]];
}

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

function EventRail({ sim, dealt, active, resolvedUpTo }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {sim.moments.map((m, i) => {
        const open = i < dealt;
        const mgr = m.atk === 'A' ? sim.A.mgr : sim.B.mgr;
        const isActive = i === active;
        const done = i < resolvedUpTo;
        return (
          <div key={i} style={{
            flex: 1, maxWidth: 52, aspectRatio: '0.82', borderRadius: 9, position: 'relative',
            background: open ? `linear-gradient(150deg, ${mgr.color}33, rgba(0,0,0,0.3))` : 'rgba(255,255,255,0.05)',
            border: `1.5px solid ${isActive ? C.acc : open ? mgr.color + '66' : C.line}`,
            boxShadow: isActive ? `0 0 12px ${C.acc}` : 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1,
            transform: isActive ? 'scale(1.12)' : 'scale(1)', transition: 'all .3s', opacity: open ? 1 : 0.5,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 15 }}>{open ? <GzIcon name={m.icon} size={15} color={isActive ? C.accL : C.mut} /> : <span style={{ fontSize: 13, color: C.mut2, fontWeight: 800 }}>?</span>}</div>
            {done && <div style={{ position: 'absolute', bottom: 2, display: 'flex', justifyContent: 'center' }}>{m.scored ? <GzIcon name="ball" size={9} color={C.acc} /> : <span style={{ fontSize: 9, color: C.mut2 }}>·</span>}</div>}
          </div>
        );
      })}
    </div>
  );
}

function Scoreboard({ A, B, sA, sB, bump }) {
  return <PremiumScoreboard A={A} B={B} sA={sA} sB={sB} minute="0'" bump={bump} />;
}

function MatchTopBar({ onBack, journee = 5, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 10px' }}>
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

function PremiumScoreboard({ A, B, sA, sB, minute, bump, live }) {
  const rankA = rankOf(A.mid);
  const rankB = rankOf(B.mid);
  const num = (v, color, side) => (
    <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 32, color, lineHeight: 1, display: 'inline-block', animation: bump === side ? 'scorePop .5s' : 'none' }}>{v}</span>
  );
  return (
    <div style={{ padding: '0 16px 8px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 0 }}>
          <TeamEmblem mgr={A.mgr} size={42} />
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11.5, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{A.mgr.name}</div>
          <div style={{ fontSize: 10, fontWeight: 800, color: C.accL, fontFamily: 'Archivo,sans-serif' }}>{rankA === 1 ? '1er' : `${rankA}e`}</div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            {num(sA, A.mgr.color, 'A')}
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, color: C.accL }}>{minute || "0'"}</span>
            {num(sB, B.mgr.color, 'B')}
          </div>
          {live && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 8, padding: '4px 10px', borderRadius: 999, background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(50,200,112,0.35)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.lime, boxShadow: '0 0 6px #32c870' }} />
              <span style={{ fontSize: 9, fontWeight: 800, color: C.lime, fontFamily: 'Archivo,sans-serif', letterSpacing: 0.8 }}>EN DIRECT</span>
            </div>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 0 }}>
          <TeamEmblem mgr={B.mgr} size={42} />
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11.5, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{B.mgr.name}</div>
          <div style={{ fontSize: 10, fontWeight: 800, color: C.accL, fontFamily: 'Archivo,sans-serif' }}>{rankB === 1 ? '1er' : `${rankB}e`}</div>
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
      position: 'relative', width: '100%', aspectRatio: '1 / 1.05', borderRadius: 18, overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(10,20,40,0.85) 0%, rgba(10,20,40,0.3) 18%, #14693e 22%, #0c4a2c 100%)',
      border: '1px solid rgba(201,146,46,0.2)',
      boxShadow: highlight ? `inset 0 0 60px ${highlight}22, 0 8px 28px rgba(0,0,0,0.45)` : 'inset 0 0 50px rgba(0,0,0,0.4), 0 8px 28px rgba(0,0,0,0.45)',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 12%, transparent 12% 24%)' }} />
      <div style={{ position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)', width: '36%', aspectRatio: '1', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '48%', height: '16%', border: '2px solid rgba(255,255,255,0.15)', borderBottom: 'none', borderRadius: '6px 6px 0 0' }} />
      {children}
    </div>
  );
}

function PitchCardSpot({ player, left, top, w, cardStyle, dim, anim, glow }) {
  if (!player) return null;
  return (
    <div style={{
      position: 'absolute', left: left + '%', top: top + '%', transform: 'translate(-50%,-50%)',
      opacity: dim ? 0.28 : 1, transition: 'opacity .45s, transform .45s',
      animation: anim || 'none', filter: glow ? 'drop-shadow(0 0 14px rgba(201,146,46,0.7))' : 'none',
    }}>
      <PlayerCard player={player} w={w} interactive={false} flippable={false} cardStyle={cardStyle} glowPulse={glow} />
    </div>
  );
}

function MatchPitchScene({ m, micro, atkTeam, defTeam, atkMgr, defMgr, cardStyle }) {
  const showCards = geq(micro, 'cards');
  const clash = micro === 'duel' || micro === 'keeper';
  const suspense = micro === 'suspense';
  const outcome = micro === 'outcome';
  const type = m.type;
  const ec = EVENT_COLORS[type] || C.acc;
  const wSmall = 48, wMed = 58, wBig = 86;
  const atkGlow = outcome && m.scored;
  const defGlow = outcome && !m.scored && (m.penalty || m.won);
  const clashAnim = clash ? 'duelClash .55s ease-in-out infinite' : undefined;
  const winAnim = outcome ? (atkGlow ? 'duelWin .65s ease' : defGlow ? 'duelWin .65s ease' : undefined) : undefined;

  const spots = [];
  const push = (player, left, top, w, opts = {}) => {
    if (!player) return;
    spots.push({ key: player.id + left + top, player, left, top, w: w || wSmall, ...opts });
  };

  if (!showCards) {
    // empty pitch during intro
  } else if (type === 'possession') {
    const atkAll = [atkTeam.field.gk, ...atkTeam.field.outfield];
    const defAll = [defTeam.field.gk, ...defTeam.field.outfield];
    const atkX = [22, 42, 58, 78];
    const defX = [28, 48, 52, 72];
    atkAll.forEach((p, i) => push(p, atkX[i], 28 + (i % 2) * 8, wSmall));
    defAll.forEach((p, i) => push(p, defX[i], 68 - (i % 2) * 8, wSmall, { dim: suspense }));
  } else if (type === 'corner') {
    const taker = m.atkPlayer;
    const others = atkTeam.field.outfield.filter(p => p.id !== taker.id);
    push(taker, 94, 10, wMed, { anim: clashAnim, glow: atkGlow });
    others.forEach((p, i) => push(p, [38, 52, 66][i] || 50, [20, 24, 20][i] || 22, wSmall));
    push(defTeam.field.gk, 50, 32, wSmall, { dim: !clash });
    defTeam.field.outfield.forEach((p, i) => push(p, [36, 50, 64][i] || 50, [26, 22, 26][i] || 24, wSmall, { dim: suspense && !clash }));
  } else if (type === 'contre') {
    push(m.atkPlayer, 50, 22, wMed, { anim: clashAnim, glow: atkGlow });
    const excluded = m.defExcluded;
    defTeam.field.outfield.forEach(p => {
      if (excluded && p.id === excluded.id) push(p, 8, 50, wSmall, { dim: true });
      else push(p, p.id === m.defPlayer?.id ? 58 : 42, 38, wSmall, { anim: p.id === m.defPlayer?.id ? clashAnim : undefined, glow: defGlow && p.id === m.defPlayer?.id });
    });
    push(defTeam.field.gk, 50, 30, wSmall);
  } else if (type === 'duel') {
    push(m.atkPlayer, 36, 50, wBig, { anim: clash ? clashAnim : winAnim, glow: atkGlow });
    push(m.defPlayer, 64, 50, wBig, { anim: clash ? clashAnim : winAnim, glow: defGlow });
  } else if (type === 'penalty' || m.penalty) {
    push(m.atkPlayer, 50, 72, wBig, { anim: clash || suspense ? clashAnim : winAnim, glow: atkGlow });
    push(m.defPlayer || defTeam.field.gk, 50, 26, wMed, { anim: clash ? clashAnim : winAnim, glow: defGlow });
  }

  const banner = outcome
    ? (m.scored ? 'BUT !' : (m.penalty || m.won) ? 'ARRÊT !' : 'STOPPÉ')
    : null;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, letterSpacing: 0.8, color: ec }}>{m.label.toUpperCase()}</span>
      </div>
      <PitchShell highlight={ec}>
        {spots.map(s => (
          <PitchCardSpot key={s.key} player={s.player} left={s.left} top={s.top} w={s.w} cardStyle={cardStyle}
            dim={s.dim} anim={s.anim} glow={s.glow} />
        ))}
        {outcome && banner && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 5, background: 'rgba(0,0,0,0.35)' }}>
            <div style={{
              padding: '12px 28px', borderRadius: 16, animation: 'scorePop .5s',
              background: m.scored ? `linear-gradient(135deg, ${atkMgr.color}, ${C.acc})` : 'rgba(12,10,22,0.92)',
              border: m.scored ? 'none' : '1.5px solid ' + C.line,
              boxShadow: m.scored ? `0 8px 32px ${atkMgr.color}88` : 'none',
            }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 32, letterSpacing: 1, color: m.scored ? '#160b02' : C.txt }}>{banner}</div>
            </div>
          </div>
        )}
      </PitchShell>
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

function CommentaryBar({ text }) {
  return (
    <div style={{ padding: '11px 14px', background: 'rgba(0,0,0,0.4)', borderRadius: 14, border: '1px solid ' + C.line, display: 'flex', alignItems: 'center', gap: 9, minHeight: 22 }}>
      <GzIcon name="mic" size={16} color={C.accL} />
      <span key={text} style={{ fontFamily: 'Hanken Grotesk,sans-serif', fontWeight: 600, fontSize: 13.5, color: C.txt, animation: 'fadeIn .3s' }}>{text}</span>
    </div>
  );
}

function MatchFlow({ midA, midB, replay, seed, bonusA: initialBonusA, onExit }) {
  const [sim, setSim] = React.useState(() => replay ? simulateMatch(midA, midB, seed || 777, { bonusA: initialBonusA }) : null);
  const [phase, setPhase] = React.useState(replay ? 'deal' : 'kickoff');
  const [dealt, setDealt] = React.useState(0);
  const [ai, setAi] = React.useState(0);
  const [micro, setMicro] = React.useState('intro');
  const tok = React.useRef(0);
  const cardStyle = window.__cardStyle || 'blason';

  React.useEffect(() => {
    if (phase !== 'deal' || !sim) return;
    setDealt(0); setAi(0);
    let i = 0;
    const t = setInterval(() => { i++; setDealt(i); if (i >= 6) { clearInterval(t); setTimeout(() => setPhase('play'), 650); } }, 430);
    return () => clearInterval(t);
  }, [phase, sim]);

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
          setPhase('deal');
        }}
        onExit={onExit}
      />
    );
  }

  if (!sim) return null;
  const A = sim.A, B = sim.B;

  const resolvedUpTo = ai + (micro === 'outcome' ? 1 : 0);
  const sA = sim.moments.slice(0, resolvedUpTo).filter(x => x.scored && x.atk === 'A').length;
  const sB = sim.moments.slice(0, resolvedUpTo).filter(x => x.scored && x.atk === 'B').length;

  if (phase === 'result') return <ResultScreen sim={sim} sA={sim.scoreA} sB={sim.scoreB} replay={replay} onExit={onExit} onReplay={() => { setAi(0); setPhase('deal'); }} />;

  const m = phase === 'play' ? sim.moments[ai] : null;
  if (phase === 'play' && !m) {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 54 }}>
        <Btn onClick={onExit}>Retour</Btn>
      </div>
    );
  }
  const atkMgr = m ? (m.atk === 'A' ? A.mgr : B.mgr) : A.mgr;
  const defMgr = m ? (m.atk === 'A' ? B.mgr : A.mgr) : B.mgr;
  const bump = (phase === 'play' && micro === 'outcome' && m.scored) ? m.atk : null;

  const atkTeam = m ? (m.atk === 'A' ? A : B) : A;
  const defTeam = m ? (m.atk === 'A' ? B : A) : B;
  const commentary = phase !== 'play' ? 'Tirage des moments décisifs…'
    : micro === 'outcome' ? m.comments.result
    : (micro === 'duel' || micro === 'keeper') ? m.comments.mid
    : m.comments.reveal;

  const minute = phase === 'play' ? `${12 + ai * 9}'` : "0'";

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 54 }} onClick={phase === 'play' ? skip : undefined}>
      <MatchTopBar onBack={onExit} right={phase === 'play' ? (
        <button onClick={e => { e.stopPropagation(); skip(); }} style={{ padding: '7px 11px', borderRadius: 11, border: '1px solid ' + C.line, background: C.surf2, color: C.mut, fontSize: 11, fontWeight: 800, fontFamily: 'Archivo,sans-serif', cursor: 'pointer' }}>Passer</button>
      ) : replay ? <Chip color={C.cyan}>Replay</Chip> : null} />
      <PremiumScoreboard A={A} B={B} sA={sA} sB={sB} minute={minute} bump={bump} live={phase === 'play'} />

      {phase === 'deal' ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '0 16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11, color: C.mut, letterSpacing: 2, textTransform: 'uppercase' }}>Tirage des moments</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 20, marginTop: 2 }}>6 moments décisifs</div>
          </div>
          {dealt < 6 && <div style={{ animation: 'spin .7s linear infinite', lineHeight: 1 }}><HexBallIcon size={28} /></div>}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, width: '100%' }}>
            {sim.moments.map((m2, i) => {
              const open = i < dealt;
              const mgr2 = m2.atk === 'A' ? A.mgr : B.mgr;
              const ec = EVENT_COLORS[m2.type];
              return (
                <div key={i} style={{ perspective: 600, aspectRatio: '0.72' }}>
                  <div style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: `rotateY(${open ? 180 : 0}deg)`, transition: 'transform .5s cubic-bezier(.2,.8,.2,1)', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', borderRadius: 10, background: 'linear-gradient(157deg,#221a38,#0d0a18)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', inset: 0, opacity: .22, background: 'repeating-linear-gradient(45deg,rgba(255,255,255,0.07) 0 6px,transparent 6px 12px)' }} />
                      <span style={{ fontSize: 22, opacity: .4, position: 'relative' }}>?</span>
                    </div>
                    <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderRadius: 10, overflow: 'hidden', background: `linear-gradient(155deg,rgba(18,14,30,0.96),rgba(8,6,18,0.98))`, border: `1.5px solid ${ec}55`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '8px 6px 6px' }}>
                      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 45%, ${ec}18, transparent 62%)` }} />
                      <GzIcon name={m2.icon} size={26} color={ec} />
                      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 9, color: '#fff', letterSpacing: .6 }}>{m2.label.toUpperCase()}</div>
                        <div style={{ fontSize: 8, color: mgr2.color, fontWeight: 800, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}><Avatar mgr={mgr2} size={14} /> {mgr2.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {dealt >= 6 && <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, color: C.acc, animation: 'scorePop .5s', display: 'flex', alignItems: 'center', gap: 6 }}><GzIcon name="bolt" size={18} color={C.accL} /> Que le match commence !</div>}
        </div>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '4px 16px 12px', minHeight: 0 }}>
          <MatchPitchScene
            m={m} micro={micro}
            atkTeam={atkTeam} defTeam={defTeam}
            atkMgr={atkMgr} defMgr={defMgr}
            cardStyle={cardStyle}
          />
          <div style={{ marginTop: 8 }}><CommentaryBar text={commentary} /></div>
        </div>
      )}
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
        <div style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.45 }}>6 moments décisifs — possession, corners, contre-attaques, duels et penalties. Choisis ton bonus avant le coup d'envoi.</div>
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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 54 }}>
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
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 54 }}>
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
