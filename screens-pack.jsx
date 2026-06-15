// screens-pack.jsx — Pack system: opening sequence, market packs, shop packs

const PACK_DEFS = {
  bronze:     { label: 'Pack Bronze',     color: '#cd7f32', g1: '#3a2210', g2: '#1a0f06', price: 60,  jPrice: 18,  probs: { commun: 0.78, rare: 0.18, epique: 0.04, legendaire: 0 }    },
  argent:     { label: 'Pack Argent',     color: '#c0c0c0', g1: '#2a3040', g2: '#141c28', price: 140, jPrice: 40,  probs: { commun: 0.52, rare: 0.36, epique: 0.10, legendaire: 0.02 } },
  or:         { label: 'Pack Or',         color: '#ffd24a', g1: '#3a2c00', g2: '#1c1500', price: 280, jPrice: 80,  probs: { commun: 0.28, rare: 0.42, epique: 0.24, legendaire: 0.06 } },
  elite:      { label: 'Pack Élite',      color: '#a855f7', g1: '#2a1050', g2: '#140828', price: 520, jPrice: 150, probs: { commun: 0.08, rare: 0.32, epique: 0.46, legendaire: 0.14 } },
  legendaire: { label: 'Pack Légendaire', color: '#ffb020', g1: '#3a2000', g2: '#180e00', price: 950, jPrice: 270, probs: { commun: 0,    rare: 0.18, epique: 0.52, legendaire: 0.30 } },
};

const MARKET_PACK_DEFS = {
  standard: {
    id: 'standard',
    label: 'Pack Standard',
    color: '#c9922e',
    g1: '#3a2c00',
    g2: '#1c1500',
    price: 500,
    count: 10,
    picks: 6,
    desc: '6 communs · 4 rares ou légendaires',
    breakdown: '10 joueurs · tu en gardes 6',
  },
  premium: {
    id: 'premium',
    label: 'Pack Premium',
    color: '#e8c276',
    g1: '#3a2000',
    g2: '#180e00',
    price: 750,
    count: 10,
    picks: 6,
    desc: '5 communs · 4 rares · 1 légendaire',
    breakdown: '10 joueurs · tu en gardes 6',
  },
};

const AUCTION_CONFLICTS = new Set(['p6', 'p13', 'p14', 'p20', 'p7']);

function poolBySlot(slot, used) {
  return PLAYERS.filter(p => {
    if (used.has(p.id)) return false;
    const tier = visualTierOf(p.rarity);
    if (slot === 'commun') return tier === 'commun';
    if (slot === 'rare') return tier === 'rare' || p.rarity === 'epique';
    if (slot === 'legendaire') return p.rarity === 'legendaire';
    if (slot === 'rareOrLeg') return tier !== 'commun';
    return false;
  });
}

function pickFromPool(pool, used) {
  if (!pool.length) {
    const fallback = PLAYERS.filter(p => !used.has(p.id));
    if (!fallback.length) return null;
    const p = fallback[Math.floor(Math.random() * fallback.length)];
    used.add(p.id);
    return p;
  }
  const p = pool[Math.floor(Math.random() * pool.length)];
  used.add(p.id);
  return p;
}

function generateMarketPack(packId) {
  const used = new Set();
  const result = [];
  const add = (slot, n) => {
    for (let i = 0; i < n; i++) {
      const p = pickFromPool(poolBySlot(slot, used), used);
      if (p) result.push(p);
    }
  };
  if (packId === 'premium') {
    add('commun', 5);
    add('rare', 4);
    add('legendaire', 1);
  } else {
    add('commun', 6);
    add('rareOrLeg', 4);
  }
  return result.sort((a, b) => a.ovr - b.ovr);
}

function generatePackPlayers(tier, count) {
  const def = PACK_DEFS[tier]; const used = new Set(); const result = [];
  let attempts = 0;
  while (result.length < count && attempts < 200) {
    attempts++;
    const roll = Math.random(); let rarity = 'commun'; let cum = 0;
    for (const [r, p] of Object.entries(def.probs)) {
      cum += p; if (roll < cum) { rarity = r; break; }
    }
    const pool = PLAYERS.filter(p => p.rarity === rarity && !used.has(p.id));
    const fallback = PLAYERS.filter(p => !used.has(p.id));
    const src = pool.length ? pool : fallback;
    if (!src.length) break;
    const p = src[Math.floor(Math.random() * src.length)];
    used.add(p.id); result.push(p);
  }
  return result.sort((a, b) => a.ovr - b.ovr);
}

function packVisualDef(tier, packId, mode) {
  if (mode === 'market' && packId) return MARKET_PACK_DEFS[packId];
  return PACK_DEFS[tier];
}

function PackCard({ tier, packId, mode, w = 180, animate }) {
  const def = packVisualDef(tier, packId, mode);
  const h = w * 1.5; const S = w / 180;
  return (
    <div style={{
      width: w, height: h, borderRadius: 20 * S, position: 'relative', overflow: 'hidden', flexShrink: 0,
      background: `linear-gradient(155deg, ${def.g1}, ${def.g2})`,
      boxShadow: `0 0 0 2px ${def.color}66, 0 0 40px ${def.color}44, 0 ${16 * S}px ${40 * S}px rgba(0,0,0,0.7)`,
      ...(animate ? { animation: 'packShake .5s cubic-bezier(.2,.8,.2,1)' } : {}),
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .3, background: `repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 ${10 * S}px, transparent ${10 * S}px ${22 * S}px)` }} />
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 38%, ${def.color}22, transparent 60%)` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-55%)', width: 100 * S, height: 100 * S, borderRadius: '50%', background: `radial-gradient(circle, ${def.color}28, transparent 70%)`, boxShadow: `0 0 40px ${def.color}44` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-60%)', textAlign: 'center', width: '100%' }}>
        <HexBallIcon size={52 * S} />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: `${20 * S}px ${14 * S}px ${18 * S}px`, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 16 * S, color: def.color, letterSpacing: 0.8, textShadow: `0 0 12px ${def.color}` }}>{def.label.toUpperCase()}</div>
        <div style={{ marginTop: 4 * S, width: '50%', height: 2 * S, borderRadius: 999, background: def.color, margin: `${6 * S}px auto 0`, boxShadow: `0 0 8px ${def.color}` }} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: '20%', width: '30%', height: '50%', background: 'linear-gradient(160deg, rgba(255,255,255,0.14), transparent)', borderRadius: '0 0 50% 50%', pointerEvents: 'none' }} />
    </div>
  );
}

function PackOpening({ tier, packId, mode, onComplete, onClose }) {
  const marketDef = mode === 'market' ? MARKET_PACK_DEFS[packId || 'standard'] : null;
  const def = marketDef || PACK_DEFS[tier];
  const count = mode === 'market' ? marketDef.count : 3;
  const maxPicks = mode === 'market' ? marketDef.picks : 1;

  const [phase, setPhase] = React.useState('sealed');
  const [flash, setFlash] = React.useState(false);
  const [flippedCount, setFlippedCount] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [shaking, setShaking] = React.useState(false);

  const players = React.useMemo(() => (
    mode === 'market'
      ? generateMarketPack(packId || 'standard')
      : generatePackPlayers(tier, count)
  ), [tier, packId, mode, count]);

  const openPack = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false); setFlash(true); setPhase('opening');
      setTimeout(() => { setFlash(false); setPhase('reveal'); }, 350);
    }, 500);
  };

  React.useEffect(() => {
    if (phase !== 'reveal') return;
    setFlippedCount(0);
    let i = 0;
    const delay = count === 3 ? 750 : 480;
    const t = setInterval(() => {
      i++; setFlippedCount(i);
      if (i >= count) { clearInterval(t); setTimeout(() => setPhase('choose'), 700); }
    }, delay);
    return () => clearInterval(t);
  }, [phase, count]);

  const toggleSelect = (pid) => {
    if (mode === 'shop') { setSelected([pid]); return; }
    setSelected(prev => prev.includes(pid) ? prev.filter(x => x !== pid) : prev.length < maxPicks ? [...prev, pid] : prev);
  };

  const confirm = () => {
    setPhase('done');
    setTimeout(() => onComplete(selected), 400);
  };

  const canConfirm = mode === 'shop' ? selected.length === 1 : selected.length === maxPicks;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 160, background: `radial-gradient(ellipse at 50% 20%, ${def.g1}, #09060f 60%)`, overflowY: 'auto', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y', paddingTop: 56, paddingBottom: 30, display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(255,255,255,0.9), transparent 55%)', opacity: flash ? 1 : 0, transition: 'opacity .35s', pointerEvents: 'none', zIndex: 10 }} />
      <div style={{ position: 'absolute', top: 56, right: 16, zIndex: 20 }}>
        <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 11, border: '1px solid ' + C.line, background: C.surf2, color: C.txt, fontSize: 15, cursor: 'pointer' }}>✕</button>
      </div>
      <div style={{ textAlign: 'center', padding: '0 24px 12px' }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 13, color: def.color, letterSpacing: 2, marginBottom: 4 }}>OUVERTURE DE PACK</div>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: '#fff' }}>{def.label}</div>
      </div>
      {(phase === 'sealed' || phase === 'opening') && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: '0 24px' }}>
          <PackCard tier={tier} packId={packId} mode={mode} w={190} animate={shaking} />
          <div style={{ textAlign: 'center', color: C.mut, fontSize: 13, maxWidth: 280 }}>
            {mode === 'market' ? marketDef.breakdown : '3 joueurs · tu en gardes 1'}
          </div>
          <Btn full size="lg" onClick={openPack} style={{ background: `linear-gradient(135deg, ${def.color}, ${def.g1})`, color: '#160b02' }}>
            <GzIcon name="sparkle" size={18} color="#160b02" /> Ouvrir le pack
          </Btn>
        </div>
      )}
      {(phase === 'reveal' || phase === 'choose') && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 14px' }}>
          {phase === 'choose' && (
            <div style={{ textAlign: 'center', marginBottom: 12, padding: '0 10px' }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17 }}>
                {mode === 'market' ? `Choisis ${maxPicks} joueurs` : 'Choisis 1 joueur'}
              </div>
              <div style={{ color: C.mut, fontSize: 12.5, marginTop: 3 }}>
                {mode === 'market' ? `${selected.length}/${maxPicks} sélectionnés` : (selected.length ? '1 sélectionné' : `${selected.length}/${maxPicks}`)}
              </div>
            </div>
          )}
          {phase === 'reveal' && (
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17 }}>Révélation…</div>
              <div style={{ color: def.color, fontSize: 13, marginTop: 3 }}>{flippedCount}/{count} cartes révélées</div>
            </div>
          )}
          {count === 3 ? (
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
              {players.map((p, i) => <FlipCard key={p.id} player={p} i={i} flippedCount={flippedCount} selected={selected.includes(p.id)} onSelect={() => toggleSelect(p.id)} phase={phase} big />)}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 7 }}>
              {players.map((p, i) => <FlipCard key={p.id} player={p} i={i} flippedCount={flippedCount} selected={selected.includes(p.id)} onSelect={() => toggleSelect(p.id)} phase={phase} />)}
            </div>
          )}
          {phase === 'choose' && (
            <div style={{ marginTop: 14 }}>
              <Btn full size="lg" disabled={!canConfirm} onClick={confirm} style={canConfirm ? { background: `linear-gradient(135deg, ${def.color}, ${def.g1})`, color: '#160b02' } : {}}>
                {canConfirm ? (mode === 'market' ? `Recruter ces ${maxPicks} joueurs ✓` : 'Recruter ce joueur ✓') : `Encore ${maxPicks - selected.length} à choisir`}
              </Btn>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FlipCard({ player, i, flippedCount, selected, onSelect, phase, big }) {
  const flipped = i < flippedCount;
  const r = RARITY[player.rarity];
  const w = big ? 104 : 58;
  const h = w * 1.4;
  return (
    <div style={{ perspective: 600 }}>
      <div style={{
        width: w, height: h, transformStyle: 'preserve-3d', position: 'relative',
        transform: `rotateY(${flipped ? 0 : 180}deg)`,
        transition: `transform .55s cubic-bezier(.2,.8,.2,1)`,
      }}>
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', borderRadius: big ? 14 : 9, background: 'linear-gradient(157deg,#221a38,#0d0a18)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: .2, background: 'repeating-linear-gradient(45deg,rgba(255,255,255,0.07) 0 5px,transparent 5px 11px)' }} />
          <span style={{ fontSize: big ? 28 : 18, opacity: .3 }}>?</span>
        </div>
        <div onClick={phase === 'choose' ? onSelect : undefined} style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', cursor: phase === 'choose' ? 'pointer' : 'default' }}>
          {big
            ? <PlayerCard player={player} w={w} interactive={false} flippable={false} glowPulse={selected} selected={selected} />
            : <MiniCard player={player} w={w} selected={selected} onClick={undefined} />}
          {flipped && (player.rarity === 'legendaire' || player.rarity === 'epique') && (
            <div style={{ position: 'absolute', top: -6, right: -6, background: r.ring, borderRadius: 999, padding: '2px 5px', fontSize: 7.5, fontWeight: 900, fontFamily: 'Archivo,sans-serif', color: '#160b02', boxShadow: `0 0 10px ${r.ring}`, animation: 'scorePop .5s', zIndex: 5 }}>{r.label.slice(0, 3).toUpperCase()}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function MarketPackSection({ onBuyPack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {Object.values(MARKET_PACK_DEFS).map(def => (
        <Surface key={def.id} style={{ padding: 16, borderColor: `${def.color}55`, background: `linear-gradient(135deg, ${def.color}10, rgba(0,0,0,0.2))` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <PackCard packId={def.id} mode="market" w={72} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, color: def.color }}>{def.label}</div>
              <div style={{ color: C.txt, fontSize: 13, marginTop: 6, fontWeight: 600 }}>{def.desc}</div>
              <div style={{ color: C.mut, fontSize: 12, marginTop: 4 }}>{def.breakdown}</div>
            </div>
          </div>
          <div style={{ height: 12 }} />
          <Btn full size="lg" onClick={() => onBuyPack(def.id)} style={{ background: `linear-gradient(135deg, ${def.color}, ${def.g1})`, color: '#160b02', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            Ouvrir · <CreditPill value={def.price} size="sm" />
          </Btn>
        </Surface>
      ))}
    </div>
  );
}

function ShopPackSection({ credits, jetons, onBuyWithCredits, onBuyWithJetons }) {
  const [buyMode, setBuyMode] = React.useState('credits');
  return (
    <div>
      <Seg value={buyMode} onChange={setBuyMode} options={[{ v: 'credits', label: 'Crédits' }, { v: 'jetons', label: 'Jetons' }]} />
      <div style={{ color: C.mut, fontSize: 12, marginTop: 10, marginBottom: 14, lineHeight: 1.45 }}>
        Reçois 3 joueurs, <b style={{ color: C.txt }}>tu en gardes 1</b>. Rapport qualité/prix très avantageux.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {Object.entries(PACK_DEFS).map(([tier, def]) => {
          const price = buyMode === 'credits' ? def.price : def.jPrice;
          const balance = buyMode === 'credits' ? credits : jetons;
          const disabled = balance < price;
          return (
            <Surface key={tier} style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 12, borderColor: `${def.color}44` }}>
              <div style={{ width: 48, height: 72, borderRadius: 9, background: `linear-gradient(155deg, ${def.g1}, ${def.g2})`, border: `1.5px solid ${def.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 0 12px ${def.color}28` }}>
                <HexBallIcon size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, color: def.color }}>{def.label}</div>
                <div style={{ display: 'flex', gap: 5, marginTop: 5, flexWrap: 'wrap' }}>
                  {Object.entries(def.probs).filter(([, v]) => v > 0).map(([r, v]) => (
                    <Chip key={r} color={RARITY[r].ring} style={{ fontSize: 9.5, padding: '1px 6px' }}>{Math.round(v * 100)}% {RARITY[r].label.slice(0, 3)}</Chip>
                  ))}
                </div>
              </div>
              <Btn size="sm" disabled={disabled} onClick={() => buyMode === 'credits' ? onBuyWithCredits(tier, price) : onBuyWithJetons(tier, price)} style={!disabled ? { background: `linear-gradient(135deg, ${def.color}, ${def.g1})`, color: '#160b02', display: 'inline-flex', alignItems: 'center', gap: 6 } : {}}>
                {buyMode === 'credits' ? <CreditPill value={price} size="sm" /> : <JetonPill value={price} size="sm" />}
              </Btn>
            </Surface>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { PACK_DEFS, MARKET_PACK_DEFS, generatePackPlayers, generateMarketPack, PackCard, PackOpening, MarketPackSection, ShopPackSection, AUCTION_CONFLICTS });
