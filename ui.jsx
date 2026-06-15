// ui.jsx — GOLAZO shared UI primitives — gold/navy premium palette (v2 reference DA)
const C = {
  bg:   '#0c0f1c',
  bg2:  '#111520',
  surf: 'rgba(255,255,255,0.04)',
  surf2:'rgba(255,255,255,0.07)',
  line: 'rgba(255,255,255,0.08)',
  txt:  '#f0f2ff',
  mut:  'rgba(192,202,235,0.56)',
  mut2: 'rgba(192,202,235,0.32)',
  acc:  '#c9922e',
  acc2: '#8a5f1a',
  accL: '#e8c276',
  pink: '#bf3090',
  cyan: '#3a8aff',
  lime: '#32c870',
  gold: '#c9922e',
};

const GZ_STROKE = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };

function HexBallIcon({ size = 44, color }) {
  const s = size;
  const hex = Array.from({ length: 6 }, (_, i) => {
    const a = (i * Math.PI) / 3 - Math.PI / 6;
    return `${s / 2 + (s * 0.46) * Math.cos(a)},${s / 2 + (s * 0.46) * Math.sin(a)}`;
  }).join(' ');
  const gid = `hbg-${size}`;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color || '#e8c276'} />
          <stop offset="100%" stopColor={color ? color : '#8a5f1a'} />
        </linearGradient>
      </defs>
      <polygon points={hex} fill={`url(#${gid})`} />
      <line x1={s * 0.34} y1={s * 0.28} x2={s * 0.66} y2={s * 0.28} stroke="rgba(0,0,0,0.35)" strokeWidth={s * 0.045} strokeLinecap="round" />
      <line x1={s * 0.24} y1={s * 0.50} x2={s * 0.76} y2={s * 0.50} stroke="rgba(0,0,0,0.35)" strokeWidth={s * 0.045} strokeLinecap="round" />
      <line x1={s * 0.34} y1={s * 0.72} x2={s * 0.66} y2={s * 0.72} stroke="rgba(0,0,0,0.35)" strokeWidth={s * 0.045} strokeLinecap="round" />
    </svg>
  );
}

function GzIcon({ name, size = 20, color = C.accL, strokeWidth = 2 }) {
  const p = { ...GZ_STROKE, stroke: color, strokeWidth };
  const f = { fill: color };
  const icons = {
    ball: <><circle cx="12" cy="12" r="9" {...p} /><path d="M8 7l4 5 4-5M7 14h10" {...p} /></>,
    fire: <path d="M12 22c4-3 6-6 6-10a6 6 0 0 0-10-4c-1 3-2 5-2 7a4 4 0 0 0 6 7z" {...p} />,
    sim: <><rect x="4" y="6" width="16" height="12" rx="2" {...p} /><path d="M9 10l3 2-3 2z" fill={color} stroke="none" /><circle cx="16" cy="10" r="1" fill={color} /><circle cx="18" cy="13" r="1" fill={color} /></>,
    plus: <path d="M12 5v14M5 12h14" {...p} />,
    whisper: <><path d="M4 10c0-3 3.5-6 8-6s8 3 8 6-3.5 6-8 6l-3 3v-5" {...p} /><path d="M9 10h.01M12 10h.01M15 10h.01" stroke={color} strokeWidth={strokeWidth * 1.5} strokeLinecap="round" /></>,
    cards: <><rect x="5" y="4" width="10" height="14" rx="1.5" {...p} /><rect x="9" y="6" width="10" height="14" rx="1.5" {...p} /></>,
    forbidden: <><circle cx="12" cy="12" r="9" {...p} /><path d="M7 7l10 10" {...p} /></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" {...p} /><path d="M8 3v4M16 3v4M4 10h16" {...p} /></>,
    bolt: <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" {...p} />,
    credits: <><circle cx="12" cy="12" r="9" {...p} /><path d="M12 7v10M9 9.5c0-1 1.3-1.5 3-1.5s3 .5 3 1.5-1.3 1.5-3 1.5-3 .5-3 1.5 1.3 1.5 3 1.5 3-.5 3-1.5" {...p} /></>,
    jeton: <><circle cx="12" cy="12" r="9" {...p} /><circle cx="12" cy="12" r="4" {...p} /></>,
    target: <><circle cx="12" cy="12" r="9" {...p} /><circle cx="12" cy="12" r="4" {...p} /><circle cx="12" cy="12" r="1" fill={color} stroke="none" /></>,
    shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" {...p} />,
    duel: <><path d="M7 8l3 8M17 8l-3 8" {...p} /><path d="M5 20h14" {...p} /></>,
    corner: <><path d="M4 20V8a4 4 0 0 1 4-4h12" {...p} /><path d="M20 4l-4 4 4 4" {...p} /></>,
    trophy: <><path d="M8 6h8v5a4 4 0 0 1-8 0V6z" {...p} /><path d="M6 6H4a2 2 0 0 0 2 4M18 6h2a2 2 0 0 1-2 4" {...p} /><path d="M10 18h4M9 21h6" {...p} /></>,
    check: <path d="M5 12l4 4 10-10" {...p} />,
    cross: <path d="M7 7l10 10M17 7L7 17" {...p} />,
    sparkle: <><path d="M12 2v4M12 18v4M2 12h4M18 12h4" {...p} /><path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" {...p} /></>,
    star: <path d="M12 3l2.4 5.5L20 9.5l-4.5 4 1.1 5.5L12 16.5 7.4 19l1.1-5.5L4 9.5l5.6-1L12 3z" {...p} />,
    chart: <><path d="M4 18V6M4 18h16" {...p} /><path d="M7 15l4-5 3 3 5-8" {...p} /></>,
    dice: <><rect x="5" y="5" width="14" height="14" rx="2" {...p} /><circle cx="9" cy="9" r="1" fill={color} /><circle cx="15" cy="15" r="1" fill={color} /><circle cx="15" cy="9" r="1" fill={color} /></>,
    exchange: <><path d="M7 8h11M7 8l3-3M7 8l3 3" {...p} /><path d="M17 16H6M17 16l-3-3M17 16l-3 3" {...p} /></>,
    mic: <><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z" {...p} /><path d="M8 11a4 4 0 0 0 8 0M12 15v3" {...p} /></>,
    bell: <><path d="M12 3a5 5 0 0 0-5 5v4l-2 3h14l-2-3V8a5 5 0 0 0-5-5z" {...p} /><path d="M10 21h4" {...p} /></>,
    crown: <><path d="M4 18h16M6 18l1-9 5 5 5-7 5 11" {...p} /></>,
    gem: <><path d="M6 8l6-4 6 4-6 12z" {...p} /><path d="M6 8h12" {...p} /></>,
    send: <><path d="M22 2L11 13" {...p} /><path d="M22 2l-7 20-4-9-9-4z" {...p} /></>,
    handshake: <><path d="M4 12l3 3M20 12l-3 3" {...p} /><path d="M7 15l2-2 3 3 5-5 2 2" {...p} /></>,
    league: <><circle cx="9" cy="9" r="3" {...p} /><circle cx="15" cy="9" r="3" {...p} /><path d="M5 18c0-2 2-3 4-3M19 18c0-2-2-3-4-3" {...p} /></>,
    pack: <><rect x="4" y="8" width="16" height="12" rx="2" {...p} /><path d="M4 12h16M12 8v12" {...p} /></>,
    goal: <><circle cx="12" cy="12" r="9" {...p} /><path d="M8 12h8" {...p} /></>,
    unique: <><circle cx="8" cy="8" r="3" {...p} /><circle cx="16" cy="16" r="3" {...p} /><path d="M10.5 10.5l3 3" {...p} /></>,
    wave: <path d="M4 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" {...p} />,
    gavel: <><path d="M14 3l7 7-3 3-7-7 3-3zM5 12l3 3" {...p} /><path d="M3 21l6-6" {...p} /></>,
    pitch: <><rect x="3" y="5" width="18" height="14" rx="2" {...p} /><circle cx="12" cy="12" r="3" {...p} /><path d="M12 5v14" {...p} /></>,
    settings: <><circle cx="12" cy="12" r="3" {...p} /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" {...p} /></>,
    chevron: <path d="M9 6l6 6-6 6" {...p} />,
    jersey: <><path d="M8 4l2 2h4l2-2 2 3v13H6V7l2-3z" {...p} /><path d="M10 9h4" {...p} /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0 }}>
      {icons[name] || icons.star}
    </svg>
  );
}

function IconBadge({ name, size = 36, iconSize, color, glow }) {
  const s = size;
  return (
    <div style={{
      width: s, height: s, borderRadius: '50%', flexShrink: 0,
      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,146,46,0.22)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: glow ? `0 0 14px ${glow}` : '0 0 12px rgba(201,146,46,0.12)',
    }}>
      <GzIcon name={name} size={iconSize || s * 0.52} color={color || C.accL} />
    </div>
  );
}

function PageHeader({ greeting, sub, title, right, pills, size = 24 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
      <div>
        {greeting && <div style={{ color: C.mut, fontSize: 13, fontWeight: 700 }}>{greeting}</div>}
        {sub && <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: C.acc, textTransform: 'uppercase', fontFamily: 'Archivo,sans-serif', marginBottom: 2 }}>{sub}</div>}
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: size, letterSpacing: -0.5, color: C.txt, lineHeight: 1.05 }}>{title}</div>
      </div>
      {(right || pills) && <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>{pills}{right}</div>}
    </div>
  );
}

function Banner({ icon, title, body, children, tint = 'gold' }) {
  const tints = {
    gold:  { bg: 'linear-gradient(120deg, rgba(201,146,46,0.16), rgba(191,48,144,0.10))', border: 'rgba(201,146,46,0.3)' },
    cyan:  { bg: 'rgba(58,138,255,0.08)', border: 'rgba(58,138,255,0.28)' },
    lime:  { bg: 'rgba(50,200,112,0.08)', border: 'rgba(50,200,112,0.3)' },
    pink:  { bg: 'rgba(191,48,144,0.08)', border: 'rgba(191,48,144,0.28)' },
  }[tint] || tints.gold;
  return (
    <Surface style={{ padding: 12, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10, background: tints.bg, borderColor: tints.border }}>
      {typeof icon === 'string' ? <IconBadge name={icon} size={40} iconSize={20} /> : icon}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13.5, color: C.txt }}>{title}</div>}
        {body && <div style={{ color: C.mut, fontSize: 12, marginTop: title ? 2 : 0, lineHeight: 1.4 }}>{body}</div>}
      </div>
      {children}
    </Surface>
  );
}

function ModeCard({ icon, title, desc, onClick, tint = 'gold' }) {
  const tints = {
    gold: { bg: 'rgba(201,146,46,0.08)', border: 'rgba(201,146,46,0.28)' },
    cyan: { bg: 'rgba(58,138,255,0.08)', border: 'rgba(58,138,255,0.28)' },
    pink: { bg: 'rgba(191,48,144,0.08)', border: 'rgba(191,48,144,0.28)' },
    lime: { bg: 'rgba(50,200,112,0.08)', border: 'rgba(50,200,112,0.28)' },
  }[tint] || tints.gold;
  return (
    <Surface onClick={onClick} style={{ flex: 1, padding: 15, cursor: onClick ? 'pointer' : undefined, background: tints.bg, borderColor: tints.border }}>
      <IconBadge name={icon} size={44} iconSize={22} />
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 15, marginTop: 10, color: C.txt }}>{title}</div>
      <div style={{ color: C.mut, fontSize: 12.5, marginTop: 4, lineHeight: 1.4 }}>{desc}</div>
    </Surface>
  );
}

function RuleList({ items }) {
  return (
    <Surface style={{ padding: 4 }}>
      {items.map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 12px', alignItems: 'center', borderBottom: i < items.length - 1 ? '1px solid ' + C.line : 'none' }}>
          <IconBadge name={r.icon} size={36} iconSize={18} />
          <div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13.5, color: C.txt }}>{r.title}</div>
            <div style={{ color: C.mut, fontSize: 12, marginTop: 1 }}>{r.desc}</div>
          </div>
        </div>
      ))}
    </Surface>
  );
}

function Btn({ children, onClick, kind = 'primary', size = 'md', full, disabled, style = {} }) {
  const sizes = {
    sm: { p: '9px 15px',  fs: 13, r: 12, ls: 0.5 },
    md: { p: '14px 22px', fs: 15, r: 16, ls: 0.6 },
    lg: { p: '16px 24px', fs: 15, r: 18, ls: 1.2 },
  }[size];
  const kinds = {
    primary: { background: `linear-gradient(135deg, ${C.accL}, ${C.acc})`, color: '#1a0e02',
               boxShadow: `0 5px 22px rgba(201,146,46,0.4), inset 0 1px 0 rgba(255,255,255,0.18)` },
    pink:    { background: `linear-gradient(135deg, #d04090, ${C.pink})`, color: '#1a0010',
               boxShadow: '0 5px 20px rgba(191,48,144,0.45)' },
    ghost:   { background: 'transparent', color: C.accL,
               boxShadow: `inset 0 0 0 1.5px rgba(201,146,46,0.55)` },
    dark:    { background: 'rgba(255,255,255,0.06)', color: C.txt,
               boxShadow: `inset 0 0 0 1px ${C.line}` },
  }[kind];
  const isLg = size === 'lg';
  return (
    <button onClick={disabled ? undefined : onClick} style={{
      border: 'none', cursor: disabled ? 'default' : 'pointer',
      width: full ? '100%' : undefined,
      padding: sizes.p, borderRadius: sizes.r, fontSize: sizes.fs,
      fontFamily: 'Archivo, sans-serif', fontWeight: 800,
      letterSpacing: isLg ? sizes.ls : 0.2,
      textTransform: isLg ? 'uppercase' : undefined,
      whiteSpace: 'nowrap',
      opacity: disabled ? 0.38 : 1, transition: 'transform .12s, opacity .2s',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      ...kinds, ...style,
    }}
      onPointerDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.96)'; }}
      onPointerUp={e => e.currentTarget.style.transform = 'scale(1)'}
      onPointerLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >{children}</button>
  );
}

function Surface({ children, style = {}, onClick, glow }) {
  return (
    <div onClick={onClick} style={{
      background: 'rgba(255,255,255,0.035)', borderRadius: 18,
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: glow ? `0 0 28px ${glow}` : '0 8px 28px rgba(0,0,0,0.38)',
      ...style,
    }}>{children}</div>
  );
}

function Chip({ children, color = C.acc, solid, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800,
      fontFamily: 'Archivo, sans-serif', letterSpacing: 0.4,
      background: solid ? color : `${color}1e`, color: solid ? '#1a0e02' : color,
      border: solid ? 'none' : `1px solid ${color}44`, ...style,
    }}>{children}</span>
  );
}

function Avatar({ mgr, size = 38, ring }) {
  const initial = (mgr.name || '?').charAt(0).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.42, fontFamily: 'Archivo,sans-serif', fontWeight: 900,
      background: `linear-gradient(145deg, ${mgr.color}44, ${mgr.color}18)`,
      color: mgr.color,
      boxShadow: `inset 0 0 0 1.5px ${ring || mgr.color}88`,
    }}>{initial}</div>
  );
}

function GemPill({ value, size = 'md' }) {
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: sm ? '3px 9px' : '5px 12px', borderRadius: 999,
      background: 'rgba(88,120,255,0.12)', border: '1px solid rgba(120,160,255,0.32)',
      fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: sm ? 12 : 14, color: '#9eb8ff',
    }}><GzIcon name="gem" size={sm ? 13 : 15} color="#9eb8ff" /> {typeof value === 'number' ? value.toLocaleString('fr-FR') : value}</span>
  );
}

function HexFrame({ size = 52, children }) {
  const s = size;
  const hex = Array.from({ length: 6 }, (_, i) => {
    const a = (i * Math.PI) / 3 - Math.PI / 6;
    return `${s / 2 + (s * 0.44) * Math.cos(a)},${s / 2 + (s * 0.44) * Math.sin(a)}`;
  }).join(' ');
  return (
    <div style={{ width: s, height: s, position: 'relative', flexShrink: 0 }}>
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0 }}>
        <polygon points={hex} fill="rgba(201,146,46,0.08)" stroke="rgba(201,146,46,0.55)" strokeWidth={2} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
    </div>
  );
}

function XpBar({ level, current, max }) {
  const pct = Math.round((current / max) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 34, height: 34, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(201,146,46,0.25), rgba(201,146,46,0.08))',
        clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
        fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, color: C.accL,
        boxShadow: '0 0 12px rgba(201,146,46,0.25)',
      }}>{level}</div>
      <div style={{ flex: 1 }}>
        <div style={{ height: 8, borderRadius: 999, background: 'rgba(0,0,0,0.45)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ width: pct + '%', height: '100%', background: `linear-gradient(90deg, ${C.acc2}, ${C.accL})`, boxShadow: `0 0 10px rgba(201,146,46,0.5)` }} />
        </div>
        <div style={{ fontSize: 10.5, color: C.mut2, marginTop: 4, fontWeight: 700 }}>{current.toLocaleString('fr-FR')} / {max.toLocaleString('fr-FR')} XP</div>
      </div>
    </div>
  );
}

function NavTile({ icon, title, sub, tint, onClick }) {
  const themes = {
    gold:   { glow: 'rgba(201,146,46,0.35)',  border: 'rgba(201,146,46,0.45)',  bg: 'linear-gradient(180deg, rgba(201,146,46,0.14) 0%, rgba(0,0,0,0.2) 100%)', icon: C.accL },
    purple: { glow: 'rgba(168,85,247,0.35)',  border: 'rgba(168,85,247,0.45)',  bg: 'linear-gradient(180deg, rgba(168,85,247,0.14) 0%, rgba(0,0,0,0.2) 100%)', icon: '#c084fc' },
    teal:   { glow: 'rgba(45,212,191,0.32)',   border: 'rgba(45,212,191,0.42)',  bg: 'linear-gradient(180deg, rgba(45,212,191,0.12) 0%, rgba(0,0,0,0.2) 100%)', icon: '#5eead4' },
    blue:   { glow: 'rgba(58,138,255,0.32)',   border: 'rgba(58,138,255,0.42)',  bg: 'linear-gradient(180deg, rgba(58,138,255,0.12) 0%, rgba(0,0,0,0.2) 100%)', icon: '#7eb4ff' },
  }[tint] || themes.gold;
  return (
    <button onClick={onClick} style={{
      flex: 1, minWidth: 0, border: `1px solid ${themes.border}`, borderRadius: 16, cursor: 'pointer',
      background: themes.bg, padding: '14px 10px 12px', display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center', boxShadow: `0 0 24px ${themes.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
      color: C.txt,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: '50%', marginBottom: 10,
        background: 'rgba(0,0,0,0.35)', border: `1px solid ${themes.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 0 16px ${themes.glow}`,
      }}>
        <GzIcon name={icon} size={22} color={themes.icon} />
      </div>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11.5, letterSpacing: 0.3, lineHeight: 1.2, textTransform: 'uppercase' }}>{title}</div>
      <div style={{ color: C.mut2, fontSize: 10, marginTop: 4, lineHeight: 1.3 }}>{sub}</div>
      <div style={{
        marginTop: 10, width: 28, height: 28, borderRadius: '50%',
        background: 'rgba(0,0,0,0.4)', border: `1px solid ${themes.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <GzIcon name="chevron" size={14} color={themes.icon} />
      </div>
    </button>
  );
}

function CreditPill({ value, size = 'md' }) {
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: sm ? '3px 9px' : '5px 12px', borderRadius: 999,
      background: 'rgba(201,146,46,0.12)', border: '1px solid rgba(201,146,46,0.3)',
      fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: sm ? 12 : 14, color: C.accL,
    }}><GzIcon name="credits" size={sm ? 13 : 15} color={C.accL} /> {typeof value === 'number' ? value.toLocaleString('fr-FR') : value}</span>
  );
}
function JetonPill({ value, size = 'md' }) {
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: sm ? '3px 9px' : '5px 12px', borderRadius: 999,
      background: 'rgba(58,138,255,0.12)', border: '1px solid rgba(58,138,255,0.28)',
      fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: sm ? 12 : 14, color: C.cyan,
    }}><GzIcon name="jeton" size={sm ? 13 : 15} color={C.cyan} /> {typeof value === 'number' ? value.toLocaleString('fr-FR') : value}</span>
  );
}

function VsBar({ a, b, aLabel, bLabel, aColor = C.acc, bColor = C.cyan, height = 10 }) {
  const total = a + b || 1; const ap = Math.round((a / total) * 100);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 800, fontFamily: 'Archivo,sans-serif', marginBottom: 5 }}>
        <span style={{ color: aColor }}>{aLabel}</span><span style={{ color: bColor }}>{bLabel}</span>
      </div>
      <div style={{ display: 'flex', height, borderRadius: 999, overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ width: ap + '%', background: aColor, transition: 'width .6s cubic-bezier(.2,.8,.2,1)' }} />
        <div style={{ flex: 1, background: bColor }} />
      </div>
    </div>
  );
}

function AppLogoBar({ onHome, onBack }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 120,
      paddingTop: 'max(10px, env(safe-area-inset-top, 0px))',
      paddingBottom: 8, paddingLeft: 12, paddingRight: 12,
      display: 'flex', alignItems: 'center', gap: 8,
      background: 'linear-gradient(180deg, rgba(12,15,28,0.96) 0%, rgba(12,15,28,0.75) 70%, transparent 100%)',
      pointerEvents: 'none',
    }}>
      {onBack && (
        <button type="button" onClick={onBack} aria-label="Retour" style={{
          pointerEvents: 'auto', width: 38, height: 38, borderRadius: 12, flexShrink: 0,
          border: '1px solid ' + C.line, background: C.surf2, color: C.txt, cursor: 'pointer',
          fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>‹</button>
      )}
      <button type="button" onClick={onHome} aria-label="Accueil GOLAZO" style={{
        pointerEvents: 'auto', width: 42, height: 42, borderRadius: 14, flexShrink: 0,
        border: '1px solid rgba(201,146,46,0.45)', background: 'rgba(201,146,46,0.12)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 16px rgba(201,146,46,0.2)',
      }}>
        <HexBallIcon size={26} />
      </button>
      <div style={{ flex: 1, fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 13, letterSpacing: 1.2, color: C.accL, pointerEvents: 'none' }}>GOLAZO</div>
    </div>
  );
}

function TopBar({ title, sub, onBack, right, big }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
      {onBack && (
        <button onClick={onBack} style={{ width: 38, height: 38, borderRadius: 12, flexShrink: 0, border: '1px solid ' + C.line, background: C.surf2, color: C.txt, cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        {sub && <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: C.acc, textTransform: 'uppercase', fontFamily: 'Archivo,sans-serif', marginBottom: 2 }}>{sub}</div>}
        <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: big ? 28 : 22, color: C.txt, lineHeight: 1.05, letterSpacing: -0.5 }}>{title}</div>
      </div>
      {right}
    </div>
  );
}

function Section({ title, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '22px 0 11px' }}>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 16, color: C.txt, letterSpacing: -0.2 }}>{title}</div>
      {action && <button onClick={onAction} style={{ background: 'none', border: 'none', color: C.acc, fontWeight: 800, fontSize: 13, fontFamily: 'Archivo,sans-serif', cursor: 'pointer' }}>{action}</button>}
    </div>
  );
}

function Seg({ options, value, onChange }) {
  return (
    <div style={{ display: 'flex', background: 'rgba(0,0,0,0.35)', borderRadius: 14, padding: 4, gap: 3 }}>
      {options.map(o => (
        <button key={o.v} onClick={() => onChange(o.v)} style={{
          flex: 1, border: 'none', cursor: 'pointer', padding: '9px 6px', borderRadius: 10, whiteSpace: 'nowrap',
          fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 12.5,
          background: value === o.v ? `linear-gradient(135deg, ${C.accL}, ${C.acc})` : 'transparent',
          color: value === o.v ? '#1a0e02' : C.mut, transition: 'all .2s',
        }}>{o.label}</button>
      ))}
    </div>
  );
}

function Sheet({ open, onClose, children, title }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', animation: 'fadeIn .2s' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: C.bg2, borderRadius: '26px 26px 0 0', border: `1px solid ${C.line}`, borderBottom: 'none', padding: '14px 18px 34px', maxHeight: '88%', overflowY: 'auto', animation: 'sheetUp .32s cubic-bezier(.2,.9,.2,1)', boxShadow: '0 -20px 60px rgba(0,0,0,0.6)' }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: C.line, margin: '0 auto 14px' }} />
        {title && <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 20, marginBottom: 14, color: C.txt }}>{title}</div>}
        {children}
      </div>
    </div>
  );
}

const NavIcon = ({ name, active }) => {
  const c = active ? C.acc : C.mut2;
  const p = { fill: 'none', stroke: c, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    home:   <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" {...p} />,
    club:   <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" {...p} />,
    market: <path d="M3 7l2-3h14l2 3M3 7v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7M3 7h18M9 11a3 3 0 0 0 6 0" {...p} />,
    shop:   <path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM9 8V6a3 3 0 0 1 6 0v2" {...p} />,
  };
  return <svg width="24" height="24" viewBox="0 0 24 24">{icons[name]}</svg>;
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18, color: C.accL, marginBottom: 10 }}>Oups — erreur d'affichage</div>
          <div style={{ color: C.mut, fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>{String(this.state.error.message || this.state.error)}</div>
          <Btn onClick={() => { try { localStorage.removeItem(PROFILE_KEY); sessionStorage.removeItem(SESSION_KEY); } catch {} window.location.reload(); }}>
            Réinitialiser et recharger
          </Btn>
        </div>
      );
    }
    return this.props.children;
  }
}

function BottomNav({ tab, onTab, onMatch }) {
  const items = [
    { k: 'home',   label: 'Accueil', icon: 'home'   },
    { k: 'club',   label: 'Club',    icon: 'club'   },
    { k: '_match' },
    { k: 'market', label: 'Marché',  icon: 'market' },
    { k: 'shop',   label: 'Boutique',icon: 'shop'   },
  ];
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 100, paddingBottom: 22, paddingTop: 8, background: `linear-gradient(to top, ${C.bg} 60%, transparent)` }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 8px' }}>
        {items.map(it => it.k === '_match' ? (
          <button key="m" onClick={onMatch} style={{
            width: 56, height: 56, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: `linear-gradient(135deg, ${C.accL}, ${C.acc})`,
            color: '#1a0e02', boxShadow: `0 8px 24px rgba(201,146,46,0.5)`,
            marginTop: -20, fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><HexBallIcon size={26} /></button>
        ) : (
          <button key={it.k} onClick={() => onTab(it.k)} style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 3, padding: '2px 6px', width: 60,
          }}>
            <NavIcon name={it.icon} active={tab === it.k} />
            <span style={{ fontSize: 10, fontWeight: 800, fontFamily: 'Archivo,sans-serif', color: tab === it.k ? C.acc : C.mut2 }}>{it.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { C, HexBallIcon, GzIcon, IconBadge, PageHeader, Banner, ModeCard, RuleList, GemPill, HexFrame, XpBar, NavTile, Btn, Surface, Chip, Avatar, CreditPill, JetonPill, VsBar, TopBar, Section, Seg, Sheet, BottomNav, ErrorBoundary, AppLogoBar });
