// screens-market.jsx — transfer market: blind auction + packs + player catalogue filters
const DEFAULT_CREDITS = 500;
const MARKET_LIST_CAP = 60;

function MarketFilters({ filters, onChange, compact }) {
  const { q, country, pos, ovrMin, ovrMax } = filters;
  const set = (patch) => onChange({ ...filters, ...patch });
  const posOpts = [
    { v: 'ALL', label: 'Tous' },
    { v: 'GK', label: 'GAR' },
    { v: 'DEF', label: 'DÉF' },
    { v: 'MID', label: 'MIL' },
    { v: 'ATT', label: 'ATT' },
  ];
  return (
    <Surface style={{ padding: compact ? 10 : 12, marginBottom: 10, borderColor: 'rgba(201,146,46,0.25)' }}>
      <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 10, letterSpacing: 0.8, color: C.mut2, textTransform: 'uppercase', marginBottom: 8 }}>Rechercher un joueur</div>
      <input
        type="search"
        placeholder="Nom du joueur…"
        value={q}
        onChange={e => set({ q: e.target.value })}
        style={{
          width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid ' + C.line,
          background: 'rgba(0,0,0,0.35)', color: C.txt, fontSize: 14, marginBottom: 10, outline: 'none',
        }}
      />
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
        {posOpts.map(o => (
          <button key={o.v} onClick={() => set({ pos: o.v })} style={{
            padding: '5px 10px', borderRadius: 999, border: `1px solid ${pos === o.v ? C.acc : C.line}`,
            background: pos === o.v ? 'rgba(201,146,46,0.15)' : 'transparent',
            color: pos === o.v ? C.accL : C.mut, fontSize: 10, fontWeight: 800, fontFamily: 'Archivo,sans-serif', cursor: 'pointer',
          }}>{o.label}</button>
        ))}
      </div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.5, marginBottom: 4, fontFamily: 'Archivo,sans-serif' }}>ÉQUIPE NATIONALE</div>
        <select
          value={country}
          onChange={e => set({ country: e.target.value })}
          style={{
            width: '100%', padding: '8px 10px', borderRadius: 10, border: '1px solid ' + C.line,
            background: C.surf2, color: C.txt, fontSize: 13, fontWeight: 600,
          }}
        >
          <option value="ALL">Toutes les équipes ({COUNTRY_LIST.length})</option>
          {COUNTRY_LIST.map(c => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 800, color: C.mut2, letterSpacing: 0.5, marginBottom: 4, fontFamily: 'Archivo,sans-serif' }}>
          <span>NOTE GLOBALE (OVR)</span>
          <span style={{ color: C.accL }}>{ovrMin} – {ovrMax}</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <input type="range" min={58} max={99} value={ovrMin} onChange={e => set({ ovrMin: Math.min(+e.target.value, ovrMax) })} className="gz-range" style={{ flex: 1 }} />
          <input type="range" min={58} max={99} value={ovrMax} onChange={e => set({ ovrMax: Math.max(+e.target.value, ovrMin) })} className="gz-range" style={{ flex: 1 }} />
        </div>
      </div>
    </Surface>
  );
}

function useMarketFilters() {
  const [filters, setFilters] = React.useState({ q: '', country: 'ALL', pos: 'ALL', ovrMin: 58, ovrMax: 99 });
  const filtered = React.useMemo(() => {
    return filterPlayers(PLAYERS, filters).sort((a, b) => b.ovr - a.ovr);
  }, [filters]);
  return { filters, setFilters, filtered };
}

function MarketScreen({ onDone, cardStyle, onOpenPack, firstTime, profile }) {
  const startCredits = profile?.startCredits || DEFAULT_CREDITS;
  const leagueId = profile?.leagueId;
  const memberId = profile?.memberId;

  const [phase, setPhase] = React.useState('intro');
  const [marketTab, setMarketTab] = React.useState('encheres');
  const [bids, setBids] = React.useState({});
  const [bidFor, setBidFor] = React.useState(null);
  const [detail, setDetail] = React.useState(null);
  const [results, setResults] = React.useState(null);
  const [revealN, setRevealN] = React.useState(0);
  const [won, setWon] = React.useState([]);
  const [packSpent, setPackSpent] = React.useState(0);
  const [packConflicts, setPackConflicts] = React.useState([]);
  const [toast, setToast] = React.useState(null);
  const [revealing, setRevealing] = React.useState(false);
  const { filters, setFilters, filtered } = useMarketFilters();

  React.useEffect(() => {
    if (!isSupabaseReady() || !leagueId || !memberId) return;
    let cancelled = false;
    supabaseFetchMyBids(leagueId, memberId).then((remote) => {
      if (!cancelled && remote && Object.keys(remote).length) setBids(remote);
    });
    return () => { cancelled = true; };
  }, [leagueId, memberId]);

  const ownedSet = React.useMemo(() => new Set(won), [won]);
  const auctionCandidates = React.useMemo(() => {
    const base = filters.q || filters.country !== 'ALL' || filters.pos !== 'ALL' || filters.ovrMin > 58 || filters.ovrMax < 99
      ? filtered.filter(p => !ownedSet.has(p.id))
      : AUCTION_POOL_IDS.map(byId).filter(p => p && !ownedSet.has(p.id));
    return base.slice(0, MARKET_LIST_CAP);
  }, [filtered, filters, ownedSet]);

  const bidTotal = Object.values(bids).reduce((s, x) => s + x, 0);
  const credits = startCredits - bidTotal - packSpent;

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2400); };

  const startRevealAnim = (res, nextWon) => {
    setResults(res);
    setWon([...new Set(nextWon)]);
    setPhase('reveal');
    setRevealN(0);
    let i = 0;
    const tick = setInterval(() => {
      i++;
      setRevealN(i);
      if (i >= res.length) clearInterval(tick);
    }, 480);
  };

  const runRevealLocal = () => {
    const bidPool = Object.keys(bids).map(byId).filter(Boolean);
    const packOnly = won.filter(id => !bids[id]).map(byId).filter(Boolean);
    const pool = [...bidPool, ...packOnly.filter(p => !bidPool.some(x => x.id === p.id))];
    const res = pool.map(p => {
      const mine = bids[p.id] || 0;
      const inPack = won.includes(p.id) && !mine;
      if (inPack) return { p, mine: 0, all: [], winner: null, youWon: true, inPack: true };
      const rivals = [];
      const nRivals = mine ? (Math.random() < 0.7 ? 2 : 1) : (Math.random() < 0.45 ? 1 : 0);
      for (let i = 0; i < nRivals; i++) {
        const mgr = MANAGERS[1 + ((i + Math.floor(Math.random() * 3)) % 3)];
        rivals.push({ mgr, amt: Math.round((p.price * (0.7 + Math.random() * 0.85)) / 5) * 5 });
      }
      const all = [{ mgr: MANAGERS[0], amt: mine, you: true }, ...rivals].filter(b => b.amt > 0);
      all.sort((a, b) => b.amt - a.amt);
      const winner = all[0];
      const youWon = !!(winner && winner.you);
      return { p, mine, all, winner, youWon, inPack: false };
    });
    const newWon = [...new Set([...won, ...res.filter(r => r.youWon).map(r => r.p.id)])];
    startRevealAnim(res.length ? res : packOnly.map(p => ({ p, mine: 0, all: [], winner: null, youWon: true, inPack: true })), newWon);
  };

  const runReveal = async () => {
    if (revealing) return;
    setRevealing(true);
    try {
      if (isSupabaseReady() && leagueId && memberId) {
        const resolved = await supabaseResolveAuction(leagueId, memberId, bids, won);
        if (resolved) {
          const newWon = [...new Set([...won, ...resolved.wonIds])];
          startRevealAnim(resolved.results, newWon);
          return;
        }
      }
      runRevealLocal();
    } catch (e) {
      console.warn('GOLAZO reveal:', e);
      flash('Sync en ligne impossible — révélation locale');
      runRevealLocal();
    } finally {
      setRevealing(false);
    }
  };

  const placeBid = (amt) => {
    const next = { ...bids, [bidFor.id]: amt };
    setBids(next);
    setBidFor(null);
    if (isSupabaseReady() && leagueId && memberId) {
      supabaseSyncBids(leagueId, memberId, next);
    }
  };

  const handleBuyPack = (packId) => {
    const def = MARKET_PACK_DEFS[packId];
    if (!def) return;
    if (credits < def.price) { flash('Crédits insuffisants !'); return; }
    setPackSpent(s => s + def.price);
    onOpenPack(packId, 'market', (selectedIds) => {
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

  const resultCount = filtered.length;

  if (phase === 'intro') return (
    <div>
      <PageHeader sub="Coupe du Monde 2026" title="Marché des transferts" />
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <CreditPill value={startCredits} /><span style={{ color: C.mut, fontSize: 12.5, alignSelf: 'center' }}>{PLAYERS.length} joueurs CDM · budget identique pour tous</span>
      </div>
      <div style={{ display: 'flex', gap: 11 }}>
        <ModeCard icon="whisper" title="Enchères secrètes" desc="Mise sur des joueurs précis. Révélation à la fin." onClick={() => setPhase('bid')} tint="gold" />
        <ModeCard icon="cards" title="Packs" desc="2 packs fixes : Standard 500 cr ou Premium 750 cr." onClick={() => { setPhase('bid'); setMarketTab('packs'); }} tint="gold" />
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

  if (phase === 'bid') return (
    <div>
      <PageHeader title="Marché" pills={<CreditPill value={credits} size="sm" />} />
      {packConflicts.length > 0 && (
        <Banner icon="bolt" tint="lime" title={`${packConflicts.length} joueur(s) récupéré(s)`} body="Priorité pack — crédits d'enchère remboursés" />
      )}
      <Seg value={marketTab} onChange={setMarketTab} options={[{ v: 'encheres', label: 'Enchères' }, { v: 'packs', label: 'Packs' }]} />
      <div style={{ height: 10 }} />

      {marketTab === 'encheres' && (
        <React.Fragment>
          <MarketFilters filters={filters} onChange={setFilters} compact />
          <div style={{ color: C.mut2, fontSize: 11, marginBottom: 10, fontWeight: 700 }}>
            {resultCount} joueur{resultCount > 1 ? 's' : ''} correspondant{resultCount > 1 ? 's' : ''}
            {auctionCandidates.length < resultCount ? ` · ${auctionCandidates.length} affiché${auctionCandidates.length > 1 ? 's' : ''}` : ''}
          </div>
        </React.Fragment>
      )}

      {marketTab === 'encheres' && (
        <div>
          <div style={{ color: C.mut, fontSize: 12, marginBottom: 12 }}>Touche une carte pour la vue 3D · bouton pour miser.</div>
          {auctionCandidates.length === 0 ? (
            <Surface style={{ padding: 16, textAlign: 'center' }}><div style={{ color: C.mut }}>Aucun joueur pour ces filtres.</div></Surface>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {auctionCandidates.map(p => {
                const mine = bids[p.id];
                const inPack = won.includes(p.id);
                return (
                  <Surface key={p.id} style={{ padding: 10, position: 'relative', borderColor: inPack ? 'rgba(50,200,112,0.5)' : mine ? 'rgba(201,146,46,0.5)' : C.line, background: inPack ? 'rgba(50,200,112,0.06)' : C.surf }}>
                    {inPack && <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 5 }}><Chip color={C.lime} solid>✓ Pack</Chip></div>}
                    <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={() => !inPack && setDetail(p)}>
                      <PlayerCard player={p} w={108} interactive={false} flippable={false} cardStyle={cardStyle} dim={inPack} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                        <Flag code={p.country} w={12} />
                        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                      </div>
                      <div style={{ fontSize: 9.5, color: cardVisualOf(p.rarity).ring, fontWeight: 800, marginTop: 2 }}>{cardVisualOf(p.rarity).label} · OVR {p.ovr}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
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
          )}
          <div style={{ height: 16 }} />
          <Btn full size="lg" disabled={revealing || (Object.keys(bids).length === 0 && won.length === 0)} onClick={runReveal}>
            {revealing ? 'Révélation en cours…' : 'Verrouiller mes enchères →'}
          </Btn>
          <div style={{ textAlign: 'center', color: C.mut2, fontSize: 11, marginTop: 8 }}>{Object.keys(bids).length} mise(s) · {won.length} joueur(s) pack</div>
        </div>
      )}

      {marketTab === 'packs' && (
        <MarketPackSection onBuyPack={handleBuyPack} />
      )}

      <Sheet open={!!bidFor} onClose={() => setBidFor(null)} title={bidFor ? `Miser sur ${bidFor.name}` : ''}>
        {bidFor && <BidPad player={bidFor} max={credits + (bids[bidFor.id] || 0)} current={bids[bidFor.id] || 0} onConfirm={placeBid} cardStyle={cardStyle} />}
      </Sheet>

      <Sheet open={!!detail} onClose={() => setDetail(null)}>
        {detail && typeof CardDetail !== 'undefined' && (
          <React.Fragment>
            <CardDetail player={detail} cardStyle={cardStyle} />
            <div style={{ height: 12 }} />
            {!won.includes(detail.id) && (
              <Btn full onClick={() => { setBidFor(detail); setDetail(null); }}>Miser sur ce joueur</Btn>
            )}
          </React.Fragment>
        )}
      </Sheet>

      {toast && <div style={{ position: 'absolute', bottom: 96, left: 14, right: 14, zIndex: 300, background: C.bg2, border: '1px solid ' + C.line, borderRadius: 14, padding: '13px 16px', textAlign: 'center', fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, boxShadow: '0 10px 30px rgba(0,0,0,0.5)', animation: 'sheetUp .3s' }}>{toast}</div>}
    </div>
  );

  if (phase === 'reveal') return (
    <div>
      <TopBar title="Révélation" sub="Enchères secrètes" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {results.map((r, i) => {
          const shown = i < revealN;
          const inPack = r.inPack || packConflicts.includes(r.p.id) || (!r.winner && won.includes(r.p.id));
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

  if (phase === 'fixed') return (
    <FixedMarket won={won} setWon={setWon} cardStyle={cardStyle} onDone={() => setPhase('summary')} filters={filters} setFilters={setFilters} />
  );

  return (
    <div>
      <TopBar title="Ton équipe est prête" sub="Marché terminé" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {won.map(id => <div key={id} style={{ display: 'flex', justifyContent: 'center' }}><PlayerCard player={byId(id)} w={98} interactive flippable cardStyle={cardStyle} /></div>)}
      </div>
      <div style={{ height: 20 }} />
      <Btn full size="lg" onClick={() => onDone(won)}>Composer mon équipe →</Btn>
    </div>
  );
}

function BidPad({ player, max, current, onConfirm, cardStyle }) {
  const [amt, setAmt] = React.useState(current || Math.min(max, player.price));
  return (
    <div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
        <PlayerCard player={player} w={96} interactive flippable cardStyle={cardStyle} />
        <div>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18 }}>{player.name}</div>
          <div style={{ color: C.mut, fontSize: 13, marginTop: 2 }}>{POS[player.pos].full} · {COUNTRIES[player.country].name}</div>
          <div style={{ marginTop: 8 }}><Chip color={C.mut}>OVR {player.ovr} · <CreditPill value={player.price} size="sm" /></Chip></div>
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

function FixedMarket({ won, setWon, onDone, cardStyle, filters, setFilters }) {
  const need = 6 - won.length;
  const ownedSet = new Set(won);
  const filtered = React.useMemo(() => {
    return filterPlayers(PLAYERS.filter(p => !ownedSet.has(p.id)), filters).sort((a, b) => b.ovr - a.ovr).slice(0, MARKET_LIST_CAP);
  }, [filters, won]);
  const hasGK = won.some(id => byId(id)?.pos === 'GK');
  const totalMatch = filterPlayers(PLAYERS.filter(p => !ownedSet.has(p.id)), filters).length;

  return (
    <div>
      <TopBar title="Marché fixe" sub={`${Math.max(0, need)} place${need > 1 ? 's' : ''} à remplir`} />
      <MarketFilters filters={filters} onChange={setFilters} compact />
      <div style={{ color: C.mut2, fontSize: 11, marginBottom: 8, fontWeight: 700 }}>{totalMatch} joueur{totalMatch > 1 ? 's' : ''} disponible{totalMatch > 1 ? 's' : ''}</div>
      <Banner icon="bolt" tint="cyan" title="Au plus rapide !" body={<>Prix fixe, premier arrivé premier servi.{!hasGK && <span style={{ color: C.gold }}> Il te faut un gardien.</span>}</>} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: '52vh', overflowY: 'auto' }}>
        {filtered.length === 0 ? (
          <Surface style={{ padding: 16, textAlign: 'center' }}><div style={{ color: C.mut }}>Aucun joueur pour ces filtres.</div></Surface>
        ) : filtered.map(p => (
          <Surface key={p.id} style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
            <MiniCard player={p} w={44} cardStyle={cardStyle} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{p.name}</div>
              <div style={{ color: C.mut, fontSize: 11.5 }}>{POS[p.pos].full} · {COUNTRIES[p.country].name} · OVR {p.ovr} · {cardVisualOf(p.rarity).label}</div>
            </div>
            <Btn size="sm" disabled={need <= 0} onClick={() => setWon(w => [...w, p.id])}><CreditPill value={p.price} size="sm" /></Btn>
          </Surface>
        ))}
      </div>
      <div style={{ height: 18 }} />
      <Btn full size="lg" disabled={won.length < 4 || !hasGK} onClick={onDone}>
        {won.length < 4 ? `Encore ${4 - won.length} joueur(s) minimum` : !hasGK ? 'Ajoute un gardien' : 'Valider mon équipe →'}
      </Btn>
    </div>
  );
}

Object.assign(window, { MarketScreen });
