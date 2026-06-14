// screens-match.jsx — CINEMATIC auto-playing match: pack-opening reveals,
// per-action micro-steps, animated stats, live commentary, ~45-60s, deterministic replay.

const ORDER = ['intro', 'cards', 'stats', 'prob', 'suspense', 'duel', 'shot', 'keeper', 'outcome'];
const geq = (micro, s) => ORDER.indexOf(micro) >= ORDER.indexOf(s);

function seqFor(m) {
  const base = [['intro', 850], ['cards', 800], ['stats', 1200], ['prob', 900], ['suspense', 520]];
  if (m.penalty) return [...base, ['keeper', 900], ['outcome', 1450]];
  if (m.won) return [...base, ['duel', 680], ['shot', 460], ['keeper', 880], ['outcome', 1500]];
  return [...base, ['duel', 800], ['outcome', 1450]];
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
  const has = line.bonus > 0;
  const from = has ? line.value - line.bonus : 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, justifyContent: align === 'right' ? 'flex-end' : 'flex-start', flexDirection: align === 'right' ? 'row-reverse' : 'row' }}>
      <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 10.5, color: line.malus ? C.pink : C.mut, minWidth: 64, textAlign: align }}>{line.label}</span>
      <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, color: line.malus ? C.pink : '#fff' }}>{line.malus ? '−' : ''}<AnimatedNumber from={from} to={line.value} go={go} dur={950} /></span>
      {has && <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, color: C.lime, animation: go ? 'sheetUp .5s .3s both' : 'none' }}>+{line.bonus}</span>}
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
  const num = (v, color, side) => (
    <span key={v + side} style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 26, color, display: 'inline-block', animation: bump === side ? 'scorePop .5s' : 'none' }}>{v}</span>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, flex: 1, justifyContent: 'flex-end', minWidth: 0 }}>
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{A.mgr.name}</span>
        <Avatar mgr={A.mgr} size={30} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(0,0,0,0.4)', padding: '4px 13px', borderRadius: 12 }}>
        {num(sA, A.mgr.color, 'A')}<span style={{ color: C.mut2, fontWeight: 900 }}>:</span>{num(sB, B.mgr.color, 'B')}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, flex: 1, minWidth: 0 }}>
        <Avatar mgr={B.mgr} size={30} />
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{B.mgr.name}</span>
      </div>
    </div>
  );
}

// ─── the action theater ───
function Theater({ m, micro, atkMgr, defMgr }) {
  const showCards = geq(micro, 'cards');
  const showStats = geq(micro, 'stats');
  const showProb = geq(micro, 'prob');
  const suspense = micro === 'suspense';
  const keeperStage = geq(micro, 'keeper');
  const outcome = micro === 'outcome';
  const clash = geq(micro, 'duel');

  const ringPct = keeperStage ? m.keeperPct : m.duelPct;
  const ringLabel = keeperStage ? (m.penalty ? 'TIR AU BUT' : 'FACE AU GARDIEN') : 'OCCASION';
  const ringColor = keeperStage ? C.gold : atkMgr.color;

  // who glows
  const atkGlow = clash && (m.won || m.scored);
  const defGlow = (outcome && !m.scored) || (keeperStage && !m.scored && (m.penalty || m.won));

  const banner = outcome
    ? (m.scored ? 'BUT !' : (m.penalty || m.won) ? 'ARRÊT !' : 'STOPPÉ')
    : null;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* event banner — EventCard-inspired horizontal strip */}
      <div key={m.i} style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', marginBottom: 6,
        borderRadius: 14, background: `linear-gradient(130deg, ${EVENT_COLORS[m.type]}1e, rgba(0,0,0,0.45))`,
        border: `1px solid ${EVENT_COLORS[m.type]}44`, boxShadow: `0 4px 16px ${EVENT_COLORS[m.type]}22`,
        animation: 'scorePop .4s',
      }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `radial-gradient(circle, ${EVENT_COLORS[m.type]}28, ${EVENT_COLORS[m.type]}0a)`, border: `1.5px solid ${EVENT_COLORS[m.type]}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 16px ${EVENT_COLORS[m.type]}44`, flexShrink: 0 }}>
          <span style={{ fontSize: 22, filter: `drop-shadow(0 0 7px ${EVENT_COLORS[m.type]})` }}>{m.icon}</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 15, color: '#fff', letterSpacing: 0.4, textShadow: `0 0 12px ${EVENT_COLORS[m.type]}` }}>{m.label.toUpperCase()}</div>
          <div style={{ color: C.mut, fontSize: 11 }}><b style={{ color: atkMgr.color }}>{atkMgr.name}</b> attaque</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${atkMgr.color}22`, border: `1.5px solid ${atkMgr.color}66`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>{atkMgr.avatar}</div>
      </div>

      {/* duel area */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, position: 'relative', minHeight: 0 }}>
        {/* attacker */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, transition: 'all .5s', transform: showCards ? `translateX(${clash ? 8 : 0}px)` : 'translateX(-40px)', opacity: showCards ? 1 : 0 }}>
          <PlayerCard player={m.atkPlayer} w={104} interactive={false} flippable={false} glowPulse={atkGlow} dim={outcome && !m.scored && !m.penalty && m.won ? false : (defGlow && false)} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minHeight: 44 }}>
            {showStats && m.atkLines.map((l, i) => <StatLineV key={i} line={l} go={showStats} align="left" />)}
          </div>
        </div>

        {/* center */}
        <div style={{ width: 110, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {suspense ? (
            <div style={{ display: 'flex', gap: 6 }}>
              {[0, 1, 2].map(i => <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: C.acc, animation: `bounce 0.6s ${i * 0.15}s infinite` }} />)}
            </div>
          ) : showProb ? (
            <ProbRing pct={ringPct} label={ringLabel} color={ringColor} />
          ) : (
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: C.mut2 }}>VS</div>
          )}
        </div>

        {/* defender */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, transition: 'all .5s', transform: showCards ? `translateX(${clash ? -8 : 0}px)` : 'translateX(40px)', opacity: showCards ? 1 : 0 }}>
          <PlayerCard player={m.defPlayer} w={104} interactive={false} flippable={false} glowPulse={defGlow} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minHeight: 44 }}>
            {showStats && m.defLines.map((l, i) => <StatLineV key={i} line={l} go={showStats} align="right" />)}
          </div>
        </div>
      </div>

      {/* outcome overlay */}
      {outcome && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 5 }}>
          <div style={{
            padding: '14px 30px', borderRadius: 18, textAlign: 'center', animation: 'scorePop .5s',
            background: m.scored ? `linear-gradient(135deg, ${atkMgr.color}, ${C.acc})` : 'rgba(15,12,24,0.92)',
            border: m.scored ? 'none' : '1.5px solid ' + C.line,
            boxShadow: m.scored ? `0 10px 40px ${atkMgr.color}` : '0 10px 30px rgba(0,0,0,0.6)',
          }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 38, letterSpacing: 1, color: m.scored ? '#160b02' : C.txt }}>{banner}</div>
          </div>
        </div>
      )}
    </div>
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

function MatchFlow({ midA, midB, replay, seed, onExit }) {
  const sim = React.useMemo(() => simulateMatch(midA, midB, seed || (replay ? 777 : undefined)), [midA, midB, seed, replay]);
  const A = sim.A, B = sim.B;
  const [phase, setPhase] = React.useState(replay ? 'deal' : 'kickoff');
  const [dealt, setDealt] = React.useState(0);
  const [ai, setAi] = React.useState(0);
  const [micro, setMicro] = React.useState('intro');
  const tok = React.useRef(0);

  // deal phase
  React.useEffect(() => {
    if (phase !== 'deal') return;
    setDealt(0); setAi(0);
    let i = 0;
    const t = setInterval(() => { i++; setDealt(i); if (i >= 6) { clearInterval(t); setTimeout(() => setPhase('play'), 650); } }, 430);
    return () => clearInterval(t);
  }, [phase]);

  // play runner — per action micro-step sequence
  React.useEffect(() => {
    if (phase !== 'play') return;
    const myTok = ++tok.current;
    const m = sim.moments[ai];
    const seq = seqFor(m);
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
  }, [phase, ai, replay]);

  const skip = () => { if (phase !== 'play') return; tok.current++; if (ai < 5) setAi(ai + 1); else setPhase('result'); };

  // live score
  const resolvedUpTo = ai + (micro === 'outcome' ? 1 : 0);
  const sA = sim.moments.slice(0, resolvedUpTo).filter(x => x.scored && x.atk === 'A').length;
  const sB = sim.moments.slice(0, resolvedUpTo).filter(x => x.scored && x.atk === 'B').length;

  if (phase === 'kickoff') return <Kickoff A={A} B={B} onStart={() => { setAi(0); setPhase('deal'); }} onExit={onExit} />;
  if (phase === 'result') return <ResultScreen sim={sim} sA={sim.scoreA} sB={sim.scoreB} replay={replay} onExit={onExit} onReplay={() => { setAi(0); setPhase('deal'); }} />;

  const m = phase === 'play' ? sim.moments[ai] : null;
  const atkMgr = m ? (m.atk === 'A' ? A.mgr : B.mgr) : A.mgr;
  const defMgr = m ? (m.atk === 'A' ? B.mgr : A.mgr) : B.mgr;
  const bump = (phase === 'play' && micro === 'outcome' && m.scored) ? m.atk : null;

  const commentary = phase !== 'play' ? 'Tirage des moments décisifs…'
    : micro === 'outcome' ? m.comments.result
    : (!m.penalty && geq(micro, 'duel')) ? m.comments.mid
    : m.comments.reveal;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 54 }} onClick={phase === 'play' ? skip : undefined}>
      {/* top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 8px' }} onClick={e => e.stopPropagation()}>
        <button onClick={onExit} style={{ width: 34, height: 34, borderRadius: 11, border: '1px solid ' + C.line, background: C.surf2, color: C.txt, fontSize: 15, cursor: 'pointer' }}>✕</button>
        {replay && <Chip color={C.cyan}>⏪ REPLAY</Chip>}
        {phase === 'play' && <button onClick={skip} style={{ padding: '7px 13px', borderRadius: 11, border: '1px solid ' + C.line, background: C.surf2, color: C.mut, fontSize: 12, fontWeight: 800, fontFamily: 'Archivo,sans-serif', cursor: 'pointer' }}>Passer ⏭</button>}
      </div>

      <div style={{ padding: '0 16px' }}>
        <Scoreboard A={A} B={B} sA={sA} sB={sB} bump={bump} />
        <div style={{ marginTop: 10 }}><EventRail sim={sim} dealt={dealt} active={phase === 'play' ? ai : -1} resolvedUpTo={resolvedUpTo} /></div>
      </div>

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
                      <span style={{ fontSize: 28, filter: `drop-shadow(0 0 9px ${ec})`, position: 'relative', zIndex: 2 }}>{m2.icon}</span>
                      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 9, color: '#fff', letterSpacing: .6 }}>{m2.label.toUpperCase()}</div>
                        <div style={{ fontSize: 8, color: mgr2.color, fontWeight: 800, marginTop: 1 }}>{mgr2.avatar} {mgr2.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {dealt >= 6 && <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, color: C.acc, animation: 'scorePop .5s' }}>⚡ Que le match commence !</div>}
        </div>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '4px 16px 12px', minHeight: 0 }}>
          <Theater m={m} micro={micro} atkMgr={atkMgr} defMgr={defMgr} />
          <div style={{ marginTop: 6 }}><CommentaryBar text={commentary} /></div>
          <div style={{ textAlign: 'center', color: C.mut2, fontSize: 10, marginTop: 6 }}>Touche l'écran pour accélérer</div>
        </div>
      )}
    </div>
  );
}

function Kickoff({ A, B, onStart, onExit }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 60, position: 'relative' }}>
      <div style={{ position: 'absolute', top: 56, left: 16, zIndex: 5 }}>
        <button onClick={onExit} style={{ width: 36, height: 36, borderRadius: 12, border: '1px solid ' + C.line, background: C.surf2, color: C.txt, fontSize: 17, cursor: 'pointer' }}>✕</button>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, rgba(255,138,30,0.2), transparent 60%)' }} />
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 24px' }}>
        <Chip color={C.acc} solid>JOURNÉE 5 · POULE A</Chip>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 26, marginTop: 14 }}>Le match va commencer</div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'relative', zIndex: 2, padding: '0 20px' }}>
        {[A, B].map(T => (
          <div key={T.mid} style={{ textAlign: 'center' }}>
            <Avatar mgr={T.mgr} size={76} />
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18, marginTop: 10 }}>{T.mgr.name}</div>
            <div style={{ color: C.mut, fontSize: 12 }}>OVR {T.agg.ovr}</div>
          </div>
        ))}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 40, color: C.acc, textShadow: '0 0 24px rgba(255,138,30,0.6)' }}>VS</div>
      </div>
      <div style={{ padding: '0 24px 34px', position: 'relative', zIndex: 2 }}>
        <Btn full size="lg" onClick={onStart}><GzIcon name="ball" size={18} color="#1a0e02" /> Démarrer le match</Btn>
        <div style={{ textAlign: 'center', color: C.mut2, fontSize: 11.5, marginTop: 10 }}>Si personne ne démarre dans 30 min, le match se lance tout seul en arrière-plan.</div>
      </div>
    </div>
  );
}

function ResultScreen({ sim, sA, sB, replay, onExit, onReplay }) {
  const you = sim.A.mgr.you ? 'A' : 'B';
  const myScore = you === 'A' ? sA : sB, oppScore = you === 'A' ? sB : sA;
  const win = myScore > oppScore, draw = myScore === oppScore;
  const pts = win ? 3 : draw ? 1 : 0;
  const jetons = win ? 25 : draw ? 12 : 6;
  const scorers = sim.moments.filter(m => m.scored).map(m => m.atkPlayer);
  const mvp = scorers[0] || sim.A.field.outfield[0];
  const outcomeColor = win ? '#22d47a' : draw ? C.gold : '#e8123b';
  const outcomeLabel = win ? 'VICTOIRE !' : draw ? 'MATCH NUL' : 'DÉFAITE';

  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingTop: 60, paddingBottom: 30 }}>
      {/* hero banner */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '24px 24px 20px', textAlign: 'center', marginBottom: 4 }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${outcomeColor}22, transparent 65%)` }} />
        {replay && <div style={{ position: 'relative', marginBottom: 8 }}><Chip color={C.cyan}>⏪ REPLAY TERMINÉ</Chip></div>}
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 40, letterSpacing: 1, color: outcomeColor, textShadow: `0 0 24px ${outcomeColor}88`, lineHeight: 1, position: 'relative' }}>{outcomeLabel}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, margin: '18px 0 4px', position: 'relative' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 54, height: 54, borderRadius: '50%', background: `${sim.A.mgr.color}22`, border: `2px solid ${sim.A.mgr.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto' }}>{sim.A.mgr.avatar}</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 12, marginTop: 5 }}>{sim.A.mgr.name}</div>
          </div>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900 }}>
            <span style={{ fontSize: 52, color: sim.A.mgr.color, lineHeight: 1 }}>{sA}</span>
            <span style={{ fontSize: 28, color: C.mut2, margin: '0 6px' }}>:</span>
            <span style={{ fontSize: 52, color: sim.B.mgr.color, lineHeight: 1 }}>{sB}</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 54, height: 54, borderRadius: '50%', background: `${sim.B.mgr.color}22`, border: `2px solid ${sim.B.mgr.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto' }}>{sim.B.mgr.avatar}</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 12, marginTop: 5 }}>{sim.B.mgr.name}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 18px' }}>
        {!replay && (
          <Surface style={{ padding: 16, marginBottom: 14, background: 'linear-gradient(135deg, rgba(255,138,30,0.14), rgba(74,214,255,0.1))' }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, marginBottom: 12 }}>Récompenses</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ flex: 1, textAlign: 'center', background: 'rgba(0,0,0,0.25)', borderRadius: 14, padding: 12 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 26, color: C.acc }}>+{pts}</div>
                <div style={{ color: C.mut, fontSize: 11, fontWeight: 700 }}>POINTS CLASSEMENT</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', background: 'rgba(0,0,0,0.25)', borderRadius: 14, padding: 12 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 26, color: C.cyan }}>+{jetons}</div>
                <div style={{ color: C.mut, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}><GzIcon name="jeton" size={12} color={C.cyan} /> JETONS</div>
              </div>
            </div>
          </Surface>
        )}

        <Surface style={{ padding: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
          <PlayerCard player={mvp} w={84} interactive={false} flippable={false} />
          <div>
            <Chip color={C.gold}><GzIcon name="star" size={12} color={C.gold} /> HOMME DU MATCH</Chip>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, marginTop: 8 }}>{mvp.name}</div>
            <div style={{ color: C.mut, fontSize: 12.5, marginTop: 2 }}>Décisif sur l'action clé du match</div>
          </div>
        </Surface>

        <Section title="Résumé des actions" />
        <Surface style={{ overflow: 'hidden' }}>
          {sim.moments.map((m, i) => {
            const mgr = m.atk === 'A' ? sim.A.mgr : sim.B.mgr;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '10px 13px', borderBottom: i < 5 ? '1px solid ' + C.line : 'none' }}>
                <span style={{ fontSize: 17, width: 22, textAlign: 'center' }}>{m.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 12.5 }}>{m.label} · <span style={{ color: mgr.color }}>{mgr.name}</span></div>
                  <div style={{ color: C.mut2, fontSize: 11 }}>{m.atkPlayer.name.split(' ').pop()} · occasion {m.duelPct}%</div>
                </div>
                {m.scored ? <Chip color={C.lime} solid>BUT</Chip> : <Chip color={C.mut}>—</Chip>}
              </div>
            );
          })}
        </Surface>

        <div style={{ height: 18 }} />
        <Btn full size="lg" kind="ghost" onClick={onReplay}>⏪ Revoir le match (replay)</Btn>
        <div style={{ height: 10 }} />
        <Btn full size="lg" onClick={onExit}>Retour à la ligue</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { MatchFlow });
