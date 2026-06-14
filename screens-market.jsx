// screens-market.jsx — transfer market: blind auction + packs (shared budget)
const START_CREDITS = 500;
const POOL_IDS = ['p19', 'p20', 'p12', 'p13', 'p5', 'p1', 'p21', 'p14', 'p6', 'p2', 'p16', 'p23'];

function MarketScreen({ onDone, cardStyle, onOpenPack }) {
  const [phase, setPhase] = React.useState('intro');
  const [marketTab, setMarketTab] = React.useState('encheres');
  const [bids, setBids] = React.useState({});
  const [bidFor, setBidFor] = React.useState(null);
  const [results, setResults] = React.useState(null);
  const [revealN, setRevealN] = React.useState(0);
  const [won, setWon] = React.useState([]);
  const [packSpent, setPackSpent] = React.useState(0);
  const [packConflicts, setPackConflicts] = React.useState([]);
  const [toast, setToast] = React.useState(null);

  const pool = POOL_IDS.map(byId);
  const bidTotal = Object.values(bids).reduce((s, x) => s + x, 0);
  const credits = START_CREDITS - bidTotal - packSpent;

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2400); };

  const runReveal = () => {
    const res = pool.map(p => {
      const mine = bids[p.id] || 0;
      const rivals = [];
      const nRivals = mine ? (Math.random() < 0.7 ? 2 : 1) : (Math.random() < 0.45 ? 1 : 0);
      for (let i = 0; i < nRivals; i++) {
        const mgr = MANAGERS[1 + ((i + Math.floor(Math.random() * 3)) % 3)];
        rivals.push({ mgr, amt: Math.round((p.price * (0.7 + Math.random() * 0.85)) / 5) * 5 });
      }
      const all = [{ mgr: MANAGERS[0], amt: mine, you: true }, ...rivals].filter(b => b.amt > 0);
      all.sort((a, b) => b.amt - a.amt);
      const winner = all[0];
      // if pack winner already owns this player, they yield
      const inPack = won.includes(p.id);
      const youWon = !inPack && (winner && winner.you);
      return { p, mine, all, winner: inPack ? null : winner, youWon };
    });
    setResults(res);
    const newWon = [...won, ...res.filter(r => r.youWon).map(r => r.p.id)];
    setWon([...new Set(newWon)]);
    setPhase('reveal'); setRevealN(0);
    let i = 0;
    const tick = setInterval(() => { i++; setRevealN(i); if (i >= res.length) clearInterval(tick); }, 480);
  };

  const placeBid = (amt) => { setBids(b => ({ ...b, [bidFor.id]: amt })); setBidFor(null); };

  const handleBuyPack = (tier) => {
    const price = PACK_DEFS[tier].price;
    if (credits < price) { flash('Crédits insuffisants !'); return; }
    setPackSpent(s => s + price);
    onOpenPack(tier, 'market', (selectedIds) => {
      // check conflicts with auction bids
      const conflicts = selectedIds.filter(id => Object.keys(bids).includes(id));
      setWon(prev => [...new Set([...prev, ...selectedIds])]);
      if (conflicts.length) {
        setPackConflicts(prev => [...prev, ...conflicts]);
        flash(`Pack ouvert · ${conflicts.length} joueur(s) récupéré(s) sur des enchères adverses — crédits remboursés !`);
      } else {
        flash(`Pack ouvert — ${selectedIds.length} joueur(s) ajouté(s)`);
      }
    });
  };

  // ─── INTRO ───
  if (phase === 'intro') return (
    <div>
      <PageHeader sub="Coupe entre potes" title="Marché des transferts" />
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <CreditPill value={START_CREDITS} /><span style={{ color: C.mut, fontSize: 12.5, alignSelf: 'center' }}>budget de départ · identique pour tous</span>
      </div>
      <div style={{ display: 'flex', gap: 11 }}>
        <ModeCard icon="whisper" title="Enchères secrètes" desc="Mise sur des joueurs précis. Révélation à la fin." onClick={() => setPhase('bid')} tint="gold" />
        <ModeCard icon="cards" title="Packs" desc="10 joueurs révélés, gardes-en 6. Priorité sur les enchères adverses." onClick={() => { setPhase('bid'); setMarketTab('packs'); }} tint="gold" />
      </div>
      <Section title="Règles" />
      <RuleList items={[
        { icon: 'whisper', title: 'Enchères secrètes', desc: 'Le plus offrant remporte le joueur' },
        { icon: 'cards', title: 'Packs', desc: '10 joueurs, tu gardes 6, priorité sur rivaux' },
        { icon: 'forbidden', title: 'Joueurs uniques', desc: '1 joueur = 1 manager dans la ligue' },
        { icon: 'bolt', title: 'Priorité pack', desc: 'Pack > enchère — remboursement auto' },
      ]} />
      <div style={{ height: 16 }} />
      <Btn full size="lg" onClick={() => setPhase('bid')}>Accéder au marché →</Btn>
    </div>
  );

  // ─── BID + PACKS ───
  if (phase === 'bid') return (
    <div>
      <PageHeader title="Marché" pills={<CreditPill value={credits} size="sm" />} />
      {packConflicts.length > 0 && (
        <Banner icon="bolt" tint="lime" title={`${packConflicts.length} joueur(s) récupéré(s)`} body="Priorité pack — crédits d'enchère remboursés" />
      )}
      <Seg value={marketTab} onChange={setMarketTab} options={[{ v: 'encheres', label: 'Enchères' }, { v: 'packs', label: 'Packs' }]} />
      <div style={{ height: 14 }} />

      {marketTab === 'encheres' && (
        <div>
          <div style={{ color: C.mut, fontSize: 12, marginBottom: 12 }}>Touche un joueur pour miser. Mises secrètes jusqu'à la révélation.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {pool.map(p => {
              const mine = bids[p.id];
              const inPack = won.includes(p.id);
              return (
                <Surface key={p.id} style={{ padding: 10, position: 'relative', borderColor: inPack ? 'rgba(50,200,112,0.5)' : mine ? 'rgba(201,146,46,0.5)' : C.line, background: inPack ? 'rgba(50,200,112,0.06)' : C.surf }}>
                  {inPack && <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 5 }}><Chip color={C.lime} solid>✓ Pack</Chip></div>}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <PlayerCard player={p} w={108} interactive={false} flippable={false} cardStyle={cardStyle} dim={inPack} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                    <div style={{ color: C.mut, fontSize: 11 }}>valeur</div><CreditPill value={p.price} size="sm" />
                  </div>
                  <div style={{ height: 8 }} />
                  {inPack ? <div style={{ textAlign: 'center', fontSize: 11.5, color: C.lime, fontWeight: 800 }}>Dans ton pack</div>
                    : mine ? <Btn full size="sm" kind="pink" onClick={() => setBidFor(p)}>Misé : {mine}</Btn>
                    : <Btn full size="sm" onClick={() => setBidFor(p)}>Miser</Btn>}
                </Surface>
              );
            })}
          </div>
          <div style={{ height: 16 }} />
          <Btn full size="lg" disabled={Object.keys(bids).length === 0 && won.length === 0} onClick={runReveal}>Verrouiller mes enchères →</Btn>
          <div style={{ textAlign: 'center', color: C.mut2, fontSize: 11, marginTop: 8 }}>{Object.keys(bids).length} mise(s) · {won.length} joueur(s) pack</div>
        </div>
      )}

      {marketTab === 'packs' && (
        <MarketPackSection onBuyPack={handleBuyPack} spentCredits={packSpent} />
      )}

      <Sheet open={!!bidFor} onClose={() => setBidFor(null)} title={bidFor ? `Miser sur ${bidFor.name}` : ''}>
        {bidFor && <BidPad player={bidFor} max={credits + (bids[bidFor.id] || 0)} current={bids[bidFor.id] || 0} onConfirm={placeBid} cardStyle={cardStyle} />}
      </Sheet>

      {toast && <div style={{ position: 'absolute', bottom: 96, left: 14, right: 14, zIndex: 300, background: C.bg2, border: '1px solid ' + C.line, borderRadius: 14, padding: '13px 16px', textAlign: 'center', fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, boxShadow: '0 10px 30px rgba(0,0,0,0.5)', animation: 'sheetUp .3s' }}>{toast}</div>}
    </div>
  );

  // ─── REVEAL ───
  if (phase === 'reveal') return (
    <div>
      <TopBar title="Révélation" sub="Enchères secrètes" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {results.map((r, i) => {
          const shown = i < revealN;
          const inPack = packConflicts.includes(r.p.id) || (!r.winner && won.includes(r.p.id));
          return (
            <Surface key={r.p.id} style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 12, opacity: shown ? 1 : 0.25, transition: 'all .4s', borderColor: shown && (r.youWon || inPack) ? 'rgba(50,200,112,0.5)' : C.line, background: shown && (r.youWon || inPack) ? 'rgba(50,200,112,0.08)' : C.surf }}>
              <MiniCard player={r.p} w={46} cardStyle={cardStyle} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{r.p.name}</div>
                {shown ? (
                  inPack ? <div style={{ fontSize: 12, color: C.lime }}><b>Pack prioritaire</b> — tu récupères ce joueur</div>
                  : r.youWon ? <div style={{ fontSize: 12, color: C.lime }}><b>Remporté pour {r.winner.amt} crédits</b></div>
                  : r.winner ? <div style={{ fontSize: 12, color: C.mut }}>Remporté par <b style={{ color: C.txt }}>{r.winner.mgr.name}</b> · ta mise {r.mine || '—'}</div>
                  : <div style={{ fontSize: 12, color: C.mut2 }}>Aucune mise</div>
                ) : <div style={{ fontSize: 12, color: C.mut2 }}>···</div>}
              </div>
              {shown && (r.youWon || inPack ? <GzIcon name="check" size={20} color={C.lime} /> : r.mine ? <GzIcon name="cross" size={18} color={C.pink} /> : null)}
            </Surface>
          );
        })}
      </div>
      {revealN >= results.length && (
        <div style={{ marginTop: 18 }}>
          <Surface style={{ padding: 14, textAlign: 'center', marginBottom: 14 }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18 }}>{won.length} joueur(s) dans ton équipe</div>
            <div style={{ color: C.mut, fontSize: 13, marginTop: 3 }}>Il te faut 6 joueurs. Complète au marché fixe.</div>
          </Surface>
          <Btn full size="lg" onClick={() => setPhase('fixed')}>Compléter mon équipe →</Btn>
        </div>
      )}
    </div>
  );

  // ─── FIXED PRICE ───
  if (phase === 'fixed') return <FixedMarket won={won} setWon={setWon} cardStyle={cardStyle} onDone={() => setPhase('summary')} />;

  // ─── SUMMARY ───
  return (
    <div>
      <TopBar title="Ton équipe est prête" sub="Marché terminé" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {won.map(id => <div key={id} style={{ display: 'flex', justifyContent: 'center' }}><PlayerCard player={byId(id)} w={98} interactive={false} flippable={false} cardStyle={cardStyle} /></div>)}
      </div>
      <div style={{ height: 20 }} />
      <Btn full size="lg" onClick={onDone}>Composer mon équipe →</Btn>
    </div>
  );
}

function BidPad({ player, max, current, onConfirm, cardStyle }) {
  const [amt, setAmt] = React.useState(current || Math.min(max, player.price));
  return (
    <div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
        <PlayerCard player={player} w={96} interactive={false} flippable={false} cardStyle={cardStyle} />
        <div>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18 }}>{player.name}</div>
          <div style={{ color: C.mut, fontSize: 13, marginTop: 2 }}>{POS[player.pos].full} · {COUNTRIES[player.country].name}</div>
          <div style={{ marginTop: 8 }}><Chip color={C.mut}>Valeur estimée <CreditPill value={player.price} size="sm" /></Chip></div>
        </div>
      </div>
      <div style={{ textAlign: 'center', margin: '6px 0 4px' }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 40, color: C.acc }}>{amt}</div>
        <div style={{ color: C.mut2, fontSize: 12 }}>crédits · dispo {max}</div>
      </div>
      <input type="range" min={5} max={Math.max(5, max)} step={5} value={amt} onChange={e => setAmt(+e.target.value)} className="gz-range" style={{ width: '100%', marginTop: 8 }} />
      <div style={{ display: 'flex', gap: 8, margin: '14px 0' }}>
        {[-25, -5, +5, +25].map(d => <Btn key={d} kind="dark" size="sm" style={{ flex: 1 }} onClick={() => setAmt(a => Math.max(5, Math.min(max, a + d)))}>{d > 0 ? '+' : ''}{d}</Btn>)}
      </div>
      <Btn full size="lg" kind="pink" onClick={() => onConfirm(amt)}>Confirmer ma mise secrète</Btn>
    </div>
  );
}

function FixedMarket({ won, setWon, onDone, cardStyle }) {
  const need = 6 - won.length;
  const ownedSet = new Set(won);
  const avail = PLAYERS.filter(p => !ownedSet.has(p.id)).sort((a, b) => b.ovr - a.ovr).slice(0, 9);
  const hasGK = won.some(id => byId(id).pos === 'GK');
  return (
    <div>
      <TopBar title="Marché fixe" sub={`${Math.max(0, need)} place${need > 1 ? 's' : ''} à remplir`} />
      <Banner icon="bolt" tint="cyan" title="Au plus rapide !" body={<>Prix fixe, premier arrivé premier servi.{!hasGK && <span style={{ color: C.gold }}> Il te faut un gardien.</span>}</>} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {avail.map(p => {
          const owned = ownedSet.has(p.id);
          return (
            <Surface key={p.id} style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
              <MiniCard player={p} w={44} cardStyle={cardStyle} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{p.name}</div>
                <div style={{ color: C.mut, fontSize: 11.5 }}>{POS[p.pos].full} · OVR {p.ovr} · {RARITY[p.rarity].label}</div>
              </div>
              {owned ? <Chip color={C.lime}>Acquis</Chip> : <Btn size="sm" disabled={need <= 0} onClick={() => setWon(w => [...w, p.id])}><CreditPill value={p.price} size="sm" /></Btn>}
            </Surface>
          );
        })}
      </div>
      <div style={{ height: 18 }} />
      <Btn full size="lg" disabled={won.length < 4 || !hasGK} onClick={onDone}>
        {won.length < 4 ? `Encore ${4 - won.length} joueur(s) minimum` : !hasGK ? 'Ajoute un gardien' : 'Valider mon équipe →'}
      </Btn>
    </div>
  );
}

Object.assign(window, { MarketScreen });
