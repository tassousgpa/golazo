// screens-pack.jsx — Pack system: reveal → conceal → pick / swap

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
    breakdown: '10 joueurs révélés',
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
    breakdown: '10 joueurs révélés',
  },
};

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

function PackCard({ packId, w = 180, animate }) {
  const def = MARKET_PACK_DEFS[packId || 'standard'];
  const h = w * 1.5; const S = w / 180;
  return (
    <div style={{
      width: w, height: h, borderRadius: 20 * S, position: 'relative', overflow: 'hidden', flexShrink: 0,
      background: `linear-gradient(155deg, ${def.g1}, ${def.g2})`,
      boxShadow: `0 0 0 2px ${def.color}66, 0 0 40px ${def.color}44`,
      ...(animate ? { animation: 'packShake .5s cubic-bezier(.2,.8,.2,1)' } : {}),
    }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-60%)' }}><HexBallIcon size={52 * S} /></div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: `${16 * S}px`, textAlign: 'center', background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14 * S, color: def.color }}>{def.label.toUpperCase()}</div>
      </div>
    </div>
  );
}

function PackRevealCard({ player, w, faceUp, selected, onClick }) {
  const h = w * 1.4;
  return (
    <div onClick={onClick} style={{ width: w, cursor: onClick ? 'pointer' : 'default' }}>
      <div style={{
        width: w, height: h, borderRadius: 12, overflow: 'hidden', position: 'relative',
        boxShadow: selected ? `0 0 0 2px ${C.acc}, 0 0 14px rgba(201,146,46,0.4)` : '0 4px 12px rgba(0,0,0,0.45)',
        transition: 'box-shadow .2s',
      }}>
        {faceUp ? (
          <MiniCard player={player} w={w} />
        ) : (
          <div style={{
            width: '100%', height: '100%', background: 'linear-gradient(157deg,#221a38,#0d0a18)',
            border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 20, color: 'rgba(255,255,255,0.28)' }}>✕</span>
          </div>
        )}
      </div>
      {faceUp && (
        <div style={{ marginTop: 4, fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 8.5, color: C.txt, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{player.name}</div>
      )}
    </div>
  );
}

function PackOpening({ packId, flow, onComplete, onClose }) {
  const def = MARKET_PACK_DEFS[packId || 'standard'];
  const isSwap = flow === 'swap';
  const count = def.count;

  const [phase, setPhase] = React.useState('sealed');
  const [flash, setFlash] = React.useState(false);
  const [revealed, setRevealed] = React.useState(0);
  const [faceUp, setFaceUp] = React.useState(true);
  const [selected, setSelected] = React.useState([]);
  const [swapStep, setSwapStep] = React.useState(0);
  const [pendingSwaps, setPendingSwaps] = React.useState([]);
  const [shaking, setShaking] = React.useState(false);

  const players = React.useMemo(() => generateMarketPack(packId || 'standard'), [packId]);
  const squadPlayers = React.useMemo(() => getManagerSquadIds('m1').map(byId).filter(Boolean), []);

  const openPackAnim = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      setFlash(true);
      setPhase('reveal');
      setFaceUp(true);
      setRevealed(0);
      setTimeout(() => setFlash(false), 350);
    }, 500);
  };

  React.useEffect(() => {
    if (phase !== 'reveal') return;
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= count) {
        clearInterval(t);
        setTimeout(() => { setFaceUp(false); setPhase('pick'); }, 800);
      }
    }, 400);
    return () => clearInterval(t);
  }, [phase, count]);

  const togglePick = (pid) => {
    if (!isSwap && selected.length >= def.picks && !selected.includes(pid)) return;
    setSelected(prev => (prev.includes(pid) ? prev.filter(x => x !== pid) : [...prev, pid]));
  };

  const discardAll = () => {
    setPhase('done');
    setTimeout(() => onComplete([]), 280);
  };

  const startSwap = () => {
    if (!selected.length) { discardAll(); return; }
    setPendingSwaps(selected.map(id => ({ in: id, out: null })));
    setSwapStep(0);
    setPhase('swap');
  };

  const confirmInitial = () => {
    setPhase('done');
    setTimeout(() => onComplete(selected), 280);
  };

  const pickOut = (outId) => {
    setPendingSwaps(prev => {
      const next = prev.map((s, i) => (i === swapStep ? { ...s, out: outId } : s));
      if (swapStep + 1 >= selected.length) {
        setPhase('done');
        setTimeout(() => onComplete(next.filter(s => s.out)), 280);
      } else {
        setSwapStep(swapStep + 1);
      }
      return next;
    });
  };

  const currentIn = pendingSwaps[swapStep] ? byId(pendingSwaps[swapStep].in) : null;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 160, background: `radial-gradient(ellipse at 50% 20%, ${def.g1}, #09060f 60%)`, overflowY: 'auto', paddingTop: 56, paddingBottom: 28 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(255,255,255,0.85), transparent 55%)', opacity: flash ? 1 : 0, transition: 'opacity .3s', pointerEvents: 'none' }} />
      <button onClick={onClose} style={{ position: 'absolute', top: 56, right: 16, zIndex: 20, width: 34, height: 34, borderRadius: 11, border: '1px solid ' + C.line, background: C.surf2, color: C.txt, cursor: 'pointer' }}>✕</button>

      <div style={{ textAlign: 'center', padding: '0 20px 12px' }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: '#fff' }}>{def.label}</div>
      </div>

      {phase === 'sealed' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 24 }}>
          <PackCard packId={packId} w={180} animate={shaking} />
          <Btn full size="lg" onClick={openPackAnim} style={{ background: `linear-gradient(135deg, ${def.color}, ${def.g1})`, color: '#160b02' }}>Ouvrir le pack</Btn>
        </div>
      )}

      {(phase === 'reveal' || phase === 'pick' || phase === 'swap') && (
        <div style={{ padding: '0 12px' }}>
          {phase === 'reveal' && <div style={{ textAlign: 'center', marginBottom: 10, color: def.color, fontWeight: 800, fontFamily: 'Archivo,sans-serif' }}>Révélation {revealed}/{count}</div>}
          {phase === 'pick' && (
            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 16 }}>{isSwap ? 'Sélectionne puis échange' : `Choisis ${def.picks} joueurs`}</div>
              <div style={{ color: C.mut, fontSize: 12 }}>{selected.length} sélectionné{selected.length > 1 ? 's' : ''}</div>
            </div>
          )}
          {phase !== 'swap' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
              {players.map((p, i) => (
                <PackRevealCard
                  key={p.id}
                  player={p}
                  w={56}
                  faceUp={faceUp && i < revealed}
                  selected={selected.includes(p.id)}
                  onClick={phase === 'pick' ? () => togglePick(p.id) : undefined}
                />
              ))}
            </div>
          )}
          {phase === 'pick' && (
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {isSwap ? (
                <React.Fragment>
                  <Btn full kind="ghost" onClick={discardAll}>Tout jeter</Btn>
                  <Btn full size="lg" disabled={!selected.length} onClick={startSwap}>Échanger ({selected.length})</Btn>
                </React.Fragment>
              ) : (
                <Btn full size="lg" disabled={selected.length !== def.picks} onClick={confirmInitial}>Recruter ces {def.picks}</Btn>
              )}
            </div>
          )}
          {phase === 'swap' && currentIn && (
            <div>
              <Surface style={{ padding: 12, marginBottom: 12, textAlign: 'center' }}>
                <div style={{ color: C.mut, fontSize: 12, marginBottom: 6 }}>Qui remplace <b style={{ color: C.txt }}>{currentIn.name}</b> ?</div>
                <MiniCard player={currentIn} w={70} />
              </Surface>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {squadPlayers.map(p => (
                  <div key={p.id} onClick={() => pickOut(p.id)} style={{ cursor: 'pointer', textAlign: 'center' }}>
                    <MiniCard player={p} w={62} />
                    <div style={{ fontSize: 9, fontWeight: 800, color: C.mut, marginTop: 4 }}>{p.name.split(' ').pop()}</div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', color: C.mut2, fontSize: 11, marginTop: 10 }}>{swapStep + 1}/{selected.length}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MarketPackSection({ onBuyPack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {Object.values(MARKET_PACK_DEFS).map(def => (
        <Surface key={def.id} style={{ padding: 16, borderColor: `${def.color}55` }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <PackCard packId={def.id} w={72} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, color: def.color }}>{def.label}</div>
              <div style={{ color: C.mut, fontSize: 13, marginTop: 4 }}>{def.desc}</div>
            </div>
          </div>
          <div style={{ height: 10 }} />
          <Btn full size="lg" onClick={() => onBuyPack(def.id)} style={{ background: `linear-gradient(135deg, ${def.color}, ${def.g1})`, color: '#160b02' }}>
            Ouvrir · <CreditPill value={def.price} size="sm" />
          </Btn>
        </Surface>
      ))}
    </div>
  );
}

function ShopPackSection({ onBuyPack }) {
  return <MarketPackSection onBuyPack={onBuyPack} />;
}

Object.assign(window, { MARKET_PACK_DEFS, generateMarketPack, PackCard, PackOpening, MarketPackSection, ShopPackSection });
