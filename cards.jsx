// cards.jsx — GOLAZO v2 cards: position-tinted bg, stadium glow, gold CardFrame SVG, 3×2 stats
// Exports: Flag, PlayerCard, MiniCard, StatBar, EventCard, initialsOf

function initialsOf(name) {
  const parts = String(name).replace(/[.]/g, '').split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function BoostBadge({ amount, S = 1, compact }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 3 * S,
      background: `linear-gradient(135deg,${C.accL},${C.acc})`, borderRadius: 999,
      padding: compact ? `${1 * S}px ${4 * S}px` : `${2 * S}px ${6 * S}px`,
      fontSize: 9 * S, fontWeight: 900, fontFamily: 'Archivo,sans-serif',
      color: '#1a0e02', boxShadow: `0 0 10px rgba(232,194,118,0.9)`,
    }}>
      <span style={{ fontSize: 8 * S, lineHeight: 1, color: '#1a0e02' }}>▲</span>
      {amount != null && `+${amount}`}
    </div>
  );
}

// ─── stat colour palette ───
const STAT_COL = { vit:'#f5e642', tir:'#ff6b35', dri:'#4a9eff', pas:'#4affb0', phy:'#ff4a6b', def:'#66d9e8' };

// ─── Flag chip ───
function Flag({ code, w = 22, r = 4, style = {} }) {
  const c = COUNTRIES[code]; if (!c) return null;
  const h = Math.round(w * 0.66); const horizontal = c.dir === 'h';
  return (
    <div title={c.name} style={{ width: w, height: h, borderRadius: r, overflow: 'hidden', flexShrink: 0, display: 'flex', flexDirection: horizontal ? 'column' : 'row', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)', ...style }}>
      {c.flag.map((col, i) => <div key={i} style={{ flex: 1, background: col }} />)}
    </div>
  );
}

// ─── StatBar (for back of card / stats screens) ───
function StatBar({ k, val, boost = 0 }) {
  const pct = Math.max(4, Math.min(100, val));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 34, fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.3 }}>{STAT_ABBR[k]}</span>
      <div style={{ flex: 1, height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.10)', overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', borderRadius: 4, background: boost ? `linear-gradient(90deg,${C.accL},${C.acc})` : `linear-gradient(90deg,${STAT_COL[k] || C.acc},rgba(255,255,255,0.7))` }} />
      </div>
      <span style={{ width: 24, textAlign: 'right', fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, color: boost ? C.accL : '#fff' }}>{val}{boost ? <span style={{ fontSize: 9, color: C.accL }}> ↑</span> : null}</span>
    </div>
  );
}

// ─── Gold card frame SVG overlay ───
function CardFrame({ w, h, S, color, opacity = 1 }) {
  const cx = w / 2;
  // 5-point star
  const starPts = Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI * 2) / 10 - Math.PI / 2;
    const r = i % 2 === 0 ? 6 * S : 2.5 * S;
    return `${cx + Math.cos(a) * r},${8 * S + Math.sin(a) * r}`;
  }).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }}>
      {/* outer border */}
      <rect x={1.5 * S} y={1.5 * S} width={w - 3 * S} height={h - 3 * S} rx={16 * S} ry={16 * S} fill="none" stroke={color} strokeWidth={1.5 * S} opacity={(0.72 * opacity).toFixed(2)} />
      {/* inner subtle border */}
      <rect x={3.5 * S} y={3.5 * S} width={w - 7 * S} height={h - 7 * S} rx={14 * S} ry={14 * S} fill="none" stroke={color} strokeWidth={0.5 * S} opacity={(0.25 * opacity).toFixed(2)} />
      {/* top-left corner bracket */}
      <path d={`M ${8 * S} ${16 * S} L ${8 * S} ${7 * S} L ${18 * S} ${7 * S}`} fill="none" stroke={color} strokeWidth={2 * S} opacity={(0.85 * opacity).toFixed(2)} strokeLinecap="round" strokeLinejoin="round" />
      {/* top-right corner bracket */}
      <path d={`M ${w - 8 * S} ${16 * S} L ${w - 8 * S} ${7 * S} L ${w - 18 * S} ${7 * S}`} fill="none" stroke={color} strokeWidth={2 * S} opacity={(0.85 * opacity).toFixed(2)} strokeLinecap="round" strokeLinejoin="round" />
      {/* star at top center */}
      {opacity > 0.5 && <polygon points={starPts} fill={color} opacity={(0.82 * opacity).toFixed(2)} />}
      {/* bottom small emblem */}
      <line x1={cx - 10 * S} y1={h - 9 * S} x2={cx + 10 * S} y2={h - 9 * S} stroke={color} strokeWidth={S} opacity="0.4" />
      <circle cx={cx} cy={h - 9 * S} r={2.5 * S} fill={color} opacity="0.55" />
    </svg>
  );
}

// ─── Front of card (reference-accurate layout) ───
function FrontBlason({ player, S, r, pos }) {
  const pg = POS_GLOW[player.pos];
  const gi = r.intensity || 0.5;
  const glowAlpha = (0.52 * gi).toFixed(2);
  const boostK = player.boost ? player.boost.stat : null;

  // 3×2 stat grid rows: [left, right]
  const statRows = player.pos === 'GK'
    ? null
    : [
        [['vit', player.stats.vit], ['pas', player.stats.pas]],
        [['tir', player.stats.tir], ['phy', player.stats.phy]],
        [['dri', player.stats.dri], ['def', player.stats.def]],
      ];

  return (
    <React.Fragment>
      {/* stadium glow (position-tinted) */}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 82% 62% at 50% 30%, rgba(${pg.gr},${glowAlpha}), transparent 64%)`, pointerEvents: 'none' }} />

      {/* OVR + pos + flag — top-left */}
      <div style={{ position: 'absolute', top: 10 * S, left: 10 * S, zIndex: 4 }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 36 * S, lineHeight: 0.88, color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>{player.ovr}</div>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 10.5 * S, color: pos.color, letterSpacing: 0.6, marginTop: 3 * S }}>{pos.label}</div>
        <div style={{ marginTop: 5 * S }}><Flag code={player.country} w={22 * S} /></div>
      </div>

      {/* rarity label — top-right (hidden for commun) */}
      {r.intensity > 0.5 && (
        <div style={{ position: 'absolute', top: 10 * S, right: 10 * S, zIndex: 4 }}>
          <div style={{ padding: `${2 * S}px ${6 * S}px`, borderRadius: 999, background: `${r.ring}20`, border: `1px solid ${r.ring}55`, fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 8 * S, letterSpacing: 0.8, color: r.ring }}>{r.label.toUpperCase()}</div>
        </div>
      )}

      {/* silhouette */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: statRows ? 50 * S : 30 * S, display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none', zIndex: 2 }}>
        <div style={{ width: 50 * S, height: 50 * S, borderRadius: '50%', background: `rgba(0,0,0,${0.34 + gi * 0.06})` }} />
        <div style={{ width: 96 * S, height: 62 * S, borderRadius: `${48 * S}px ${48 * S}px 0 0`, background: `rgba(0,0,0,${0.26 + gi * 0.04})`, marginTop: -8 * S }} />
      </div>

      {/* boost badge */}
      {player.boost && (
        <div style={{ position: 'absolute', top: 8 * S, right: 8 * S, zIndex: 6 }}><BoostBadge amount={player.boost.amount} S={S} /></div>
      )}

      {/* name + flag */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: statRows ? 28 * S : 10 * S, zIndex: 4, textAlign: 'center', padding: `0 ${8 * S}px` }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4 * S, maxWidth: '100%' }}>
          <Flag code={player.country} w={14 * S} r={2} />
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11.5 * S, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.9)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{player.name}</div>
        </div>
      </div>

      {/* 3×2 stats grid */}
      {statRows && (
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 4, padding: `${6 * S}px ${8 * S}px ${8 * S}px`, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 85%, transparent)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: 3 * S, columnGap: 0 }}>
            {statRows.map(([left, right], ri) => (
              <React.Fragment key={ri}>
                <StatCell k={left[0]} val={left[1]} S={S} boost={boostK === left[0] && player.boost ? player.boost.amount : 0} />
                <StatCell k={right[0]} val={right[1]} S={S} boost={boostK === right[0] && player.boost ? player.boost.amount : 0} align="right" />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {/* GK single stat */}
      {!statRows && (
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 4, padding: `${6 * S}px`, textAlign: 'center', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14 * S, color: '#fff' }}><span style={{ display: 'inline-block', width: 7 * S, height: 7 * S, borderRadius: '50%', background: STAT_COL.def, marginRight: 4 * S, verticalAlign: 'middle' }} />DÉF {player.stats.def}</div>
        </div>
      )}
    </React.Fragment>
  );
}

function StatCell({ k, val, S, boost = 0, align = 'left' }) {
  const col = STAT_COL[k] || '#fff';
  return (
    <div style={{ textAlign: align, lineHeight: 1.1 }}>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 7.5 * S, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.4 }}>{STAT_ABBR[k]}</div>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14 * S, color: boost ? C.accL : '#fff' }}>
        {val}{boost > 0 && <span style={{ fontSize: 8 * S, color: C.accL }}>↑</span>}
      </div>
    </div>
  );
}

// Maillot front (style variant)
function FrontMaillot({ player, S, r, pos }) {
  const fc = COUNTRIES[player.country].flag;
  const boostK = player.boost ? player.boost.stat : null;
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', top: 10 * S, left: 11 * S, zIndex: 4 }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 32 * S, color: '#fff', lineHeight: 0.9 }}>{player.ovr}</div>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 10 * S, color: pos.color, marginTop: 3 * S }}>{pos.label}</div>
        <div style={{ marginTop: 5 * S }}><Flag code={player.country} w={20 * S} /></div>
      </div>
      {player.boost && <div style={{ position: 'absolute', top: 8 * S, right: 8 * S, zIndex: 6 }}><BoostBadge amount={player.boost.amount} S={S} /></div>}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <div style={{ position: 'relative', width: 108 * S, height: 96 * S, marginTop: 8 * S }}>
          <div style={{ position: 'absolute', top: 8 * S, left: -6 * S, width: 34 * S, height: 34 * S, background: fc[2] || fc[0], borderRadius: 8 * S, transform: 'skewY(20deg)' }} />
          <div style={{ position: 'absolute', top: 8 * S, right: -6 * S, width: 34 * S, height: 34 * S, background: fc[2] || fc[0], borderRadius: 8 * S, transform: 'skewY(-20deg)' }} />
          <div style={{ position: 'absolute', top: 2 * S, left: 18 * S, right: 18 * S, bottom: 0, background: `linear-gradient(165deg,${fc[0]},${fc[1] || fc[0]})`, borderRadius: `${10 * S}px ${10 * S}px ${14 * S}px ${14 * S}px`, boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 20 * S, color: '#fff' }}>{initialsOf(player.name)}</span>
          </div>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 26 * S, height: 12 * S, background: 'rgba(0,0,0,0.22)', borderRadius: `0 0 ${10 * S}px ${10 * S}px` }} />
        </div>
      </div>
      <FrontFooterStats player={player} S={S} boostK={boostK} />
    </React.Fragment>
  );
}

// Minimal front
function FrontMinimal({ player, S, r, pos }) {
  const boostK = player.boost ? player.boost.stat : null;
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', top: 12 * S, right: 12 * S, zIndex: 4 }}><Flag code={player.country} w={24 * S} /></div>
      <div style={{ position: 'absolute', top: 11 * S, left: 13 * S, zIndex: 4, fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12 * S, letterSpacing: 1, color: pos.color }}>{pos.label}</div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2, gap: 2 * S }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 52 * S, lineHeight: 0.85, color: '#fff', letterSpacing: -2 }}>{initialsOf(player.name)}</div>
        <div style={{ width: 36 * S, height: 2.5 * S, borderRadius: 3, background: r.ring }} />
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 24 * S, color: r.ring, marginTop: 4 * S }}>{player.ovr}</div>
      </div>
      <FrontFooterStats player={player} S={S} boostK={boostK} />
    </React.Fragment>
  );
}

function FrontFooterStats({ player, S, boostK }) {
  if (player.pos === 'GK') return null;
  const pairs = ['vit','tir','dri','pas','phy','def'];
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 4, padding: `${14 * S}px ${8 * S}px ${7 * S}px`, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 82%, transparent)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: 3 * S }}>
        {[[pairs[0],pairs[3]],[pairs[1],pairs[4]],[pairs[2],pairs[5]]].map(([l,rr],ri) => (
          <React.Fragment key={ri}>
            <StatCell k={l} val={player.stats[l]} S={S} boost={boostK===l&&player.boost?player.boost.amount:0} />
            <StatCell k={rr} val={player.stats[rr]} S={S} boost={boostK===rr&&player.boost?player.boost.amount:0} align="right" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ─── Main PlayerCard ───
function PlayerCard({ player, w = 200, interactive = true, flippable = true, flipped: flippedProp, onClick, dim = false, cardStyle = (typeof window !== 'undefined' && window.__cardStyle) || 'blason', selected = false, glowPulse = false, style = {} }) {
  const [flip, setFlip] = React.useState(false);
  const flipped = flippedProp !== undefined ? flippedProp : flip;
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0, mx: 50, my: 50, active: false });
  const r = cardVisualOf(player.rarity); const pos = POS[player.pos];
  const h = w * 1.4; const S = w / 200; const ringW = Math.max(1, 2.5 * S * (r.frame || 1));
  const pg = POS_GLOW[player.pos];
  const cardBg = `linear-gradient(165deg, ${pg.base[0]}, ${pg.base[1]} 80%)`;
  const isLegend = visualTierOf(player.rarity) === 'legendaire';

  const move = (e) => {
    if (!interactive || !ref.current) return;
    const pt = e.touches ? e.touches[0] : e;
    const b = ref.current.getBoundingClientRect();
    const px = (pt.clientX - b.left) / b.width, py = (pt.clientY - b.top) / b.height;
    setTilt({ rx: (0.5 - py) * 16, ry: (px - 0.5) * 16, mx: px * 100, my: py * 100, active: true });
  };
  const leave = () => setTilt({ rx: 0, ry: 0, mx: 50, my: 50, active: false });
  const doFlip = (e) => { if (onClick) { onClick(e); return; } if (flippable && flippedProp === undefined) setFlip(f => !f); };

  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={leave} onClick={doFlip} style={{ width: w, height: h, perspective: 900, cursor: 'pointer', flexShrink: 0, filter: dim ? 'grayscale(0.65) brightness(0.55)' : 'none', transition: 'filter .25s', ...style }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: `rotateX(${tilt.rx}deg) rotateY(${(flipped ? 180 : 0) + tilt.ry}deg) scale(${tilt.active ? 1.03 : 1})`, transition: tilt.active ? 'transform .08s linear' : 'transform .5s cubic-bezier(.2,.8,.2,1)' }}>
        {/* FRONT */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', borderRadius: 18 * S, overflow: 'hidden', background: cardBg, boxShadow: `0 0 0 ${ringW}px ${r.ring}${selected ? '' : (visualTierOf(player.rarity) === 'commun' ? '44' : '66')}, 0 ${10 * S}px ${28 * S}px rgba(0,0,0,0.6)${r.glow !== 'transparent' ? `, 0 0 ${selected || glowPulse || isLegend ? 36 * S : 18 * S}px ${r.glow}` : ''}`, ...(glowPulse || isLegend ? { animation: isLegend ? 'cardPulse 1.8s ease-in-out infinite' : 'cardPulse 1.3s ease-in-out infinite' } : {}) }}>
          <CardFrame w={w} h={h} S={S} color={r.ring} opacity={r.frame || 1} />
          {cardStyle === 'maillot' ? <FrontMaillot player={player} S={S} r={r} pos={pos} /> : cardStyle === 'minimal' ? <FrontMinimal player={player} S={S} r={r} pos={pos} /> : <FrontBlason player={player} S={S} r={r} pos={pos} />}
          {/* holographic sheen */}
          {r.holo > 0 && <div style={{ position: 'absolute', inset: 0, borderRadius: 18 * S, pointerEvents: 'none', mixBlendMode: 'color-dodge', opacity: (tilt.active ? 0.55 : 0.22) * r.holo, backgroundImage: 'repeating-linear-gradient(115deg,#e8c276 0%,#c9922e 18%,#fff 36%,#4a8aff 54%,#c9922e 72%,#e8c276 90%)', backgroundSize: '260% 260%', backgroundPosition: `${tilt.mx}% ${tilt.my}%`, transition: tilt.active ? 'none' : 'opacity .4s' }} />}
          {isLegend && <div style={{ position: 'absolute', inset: -2, borderRadius: 20 * S, pointerEvents: 'none', background: 'conic-gradient(from 0deg, transparent, rgba(232,194,118,0.35), transparent, rgba(74,138,255,0.2), transparent)', animation: 'spin 4s linear infinite', opacity: 0.7 }} />}
          {/* glare */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 18 * S, pointerEvents: 'none', background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,${tilt.active ? 0.32 : 0.08}), transparent 42%)`, mixBlendMode: 'soft-light' }} />
        </div>
        {/* BACK */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderRadius: 18 * S, overflow: 'hidden', background: `linear-gradient(165deg, ${pg.base[0]}cc, #060810 90%)`, boxShadow: `0 0 0 ${ringW}px ${r.ring}66, 0 ${10 * S}px ${28 * S}px rgba(0,0,0,0.6)`, padding: 14 * S, boxSizing: 'border-box', color: '#fff', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 * S, marginBottom: 10 * S }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 30 * S, color: r.ring, lineHeight: 1 }}>{player.ovr}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 * S, lineHeight: 1.05, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{player.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 * S, marginTop: 3 * S }}>
                <Flag code={player.country} w={16 * S} />
                <span style={{ fontSize: 10 * S, color: 'rgba(255,255,255,0.55)', fontWeight: 700 }}>{COUNTRIES[player.country].name}</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 * S, flex: 1, justifyContent: 'center' }}>
            {player.pos === 'GK' ? <StatBar k="def" val={player.stats.def} boost={player.boost && player.boost.stat === 'def' ? player.boost.amount : 0} /> : STAT_KEYS.map(k => <StatBar key={k} val={player.stats[k]} k={k} boost={player.boost && player.boost.stat === k ? player.boost.amount : 0} />)}
          </div>
          <div style={{ marginTop: 8 * S, fontSize: 9 * S, textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontFamily: 'Archivo,sans-serif', fontWeight: 700 }}>TOUCHER POUR RETOURNER</div>
        </div>
      </div>
    </div>
  );
}

// ─── Mini card ───
function MiniCard({ player, w = 60, onClick, selected, cardStyle = (typeof window !== 'undefined' && window.__cardStyle) || 'blason', label }) {
  const r = cardVisualOf(player.rarity); const pos = POS[player.pos]; const S = w / 200;
  const h = w * 1.4; const pg = POS_GLOW[player.pos];
  return (
    <div onClick={onClick} style={{ width: w, height: h, borderRadius: 11 * S, position: 'relative', overflow: 'hidden', cursor: onClick ? 'pointer' : 'default', flexShrink: 0, background: `linear-gradient(165deg, ${pg.base[0]}, ${pg.base[1]} 80%)`, boxShadow: `0 0 0 ${selected ? 2.5 : 1.5}px ${selected ? C.acc : r.ring + '66'}, 0 4px 14px rgba(0,0,0,0.5)` }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 55% at 50% 28%, rgba(${pg.gr},0.45), transparent 60%)` }} />
      {/* CardFrame mini */}
      <CardFrame w={w} h={h} S={S} color={r.ring} opacity={r.frame || 1} />
      <div style={{ position: 'absolute', top: 5 * S, left: 6 * S, fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18 * S, color: '#fff', lineHeight: 0.9, textShadow: '0 1px 3px rgba(0,0,0,0.6)', zIndex: 4 }}>
        {player.ovr}
        <div style={{ fontSize: 8 * S, color: pos.color, letterSpacing: 0.5 }}>{pos.label}</div>
      </div>
      <div style={{ position: 'absolute', top: 6 * S, right: 6 * S, zIndex: 4 }}><Flag code={player.country} w={16 * S} /></div>
      <div style={{ position: 'absolute', bottom: 22 * S, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
        <div style={{ width: 20 * S, height: 20 * S, borderRadius: '50%', background: 'rgba(0,0,0,0.38)' }} />
        <div style={{ width: 36 * S, height: 22 * S, borderRadius: `${18 * S}px ${18 * S}px 0 0`, background: 'rgba(0,0,0,0.28)', marginTop: -3 * S }} />
      </div>
      {player.boost && <div style={{ position: 'absolute', bottom: 22 * S, right: 5 * S, zIndex: 5 }}><BoostBadge S={S} compact /></div>}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: `${10 * S}px ${4 * S}px ${5 * S}px`, background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)', fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 9.5 * S, color: '#fff', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', zIndex: 4 }}>{label || player.name.split(' ').pop()}</div>
    </div>
  );
}

// ─── Event Card ───
const EVENT_COLORS = { corner: '#3a8aff', contre: '#c9922e', possession: '#32c870', duel: '#bf3090', penalty: '#e8c276' };
function EventCard({ type, w = 130, mgr }) {
  const meta = MOMENT_META[type]; if (!meta) return null;
  const color = EVENT_COLORS[type] || '#fff';
  const h = w * 1.4; const S = w / 130;
  return (
    <div style={{ width: w, height: h, borderRadius: 14 * S, overflow: 'hidden', position: 'relative', flexShrink: 0, background: 'linear-gradient(155deg, rgba(14,10,26,0.97), rgba(6,4,14,0.99))', border: `1.5px solid ${color}44`, boxShadow: `0 0 20px ${color}28, 0 8px 28px rgba(0,0,0,0.65)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: `${14 * S}px ${8 * S}px ${12 * S}px` }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 42%, ${color}16, transparent 60%)` }} />
      {mgr && <div style={{ position: 'relative', zIndex: 2, padding: `${2 * S}px ${8 * S}px`, borderRadius: 999, background: `${mgr.color}1e`, border: `1px solid ${mgr.color}55`, fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 8.5 * S, color: mgr.color }}>{mgr.avatar} {mgr.name}</div>}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ width: 66 * S, height: 66 * S, borderRadius: '50%', background: `radial-gradient(circle, ${color}24, ${color}08)`, border: `1.5px solid ${color}3a`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 22px ${color}3a` }}>
          <span style={{ fontSize: 34 * S, filter: `drop-shadow(0 0 7px ${color})` }}>{meta.icon}</span>
        </div>
      </div>
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11.5 * S, color: '#fff', letterSpacing: 0.8, textShadow: `0 0 10px ${color}` }}>{meta.label.toUpperCase()}</div>
        <div style={{ marginTop: 4 * S, width: '55%', height: 2 * S, borderRadius: 999, background: color, margin: `${4 * S}px auto 0`, boxShadow: `0 0 7px ${color}` }} />
      </div>
    </div>
  );
}

Object.assign(window, { Flag, PlayerCard, MiniCard, StatBar, EventCard, initialsOf, EVENT_COLORS, STAT_COL });
