// screens-demo.jsx — product demo overlay (market + match showcase)

const DEMO_MARKET_PLAYERS = [
  'Kylian Mbappé', 'Jude Bellingham', 'Viní Jr.', 'Lamine Yamal',
].map(playerByName).filter(Boolean);

const DEMO_MATCH_STEPS = [
  { k: 'draw', title: 'Tirage du moment', body: '6 moments clés par match.', icon: 'cards' },
  { k: 'action', title: '3 contre 3', body: 'Les joueurs de champ s\'affrontent — le gardien intervient sur la frappe.', icon: 'bolt' },
  { k: 'finish', title: 'Face au gardien', body: 'Tireur vs gardien, probabilité en direct.', icon: 'target' },
  { k: 'outcome', title: 'Résultat', body: 'But, arrêt ou action stoppée.', icon: 'trophy' },
];

function ProductDemo({ onClose, cardStyle = 'blason' }) {
  const [tab, setTab] = React.useState('market');
  const [marketTab, setMarketTab] = React.useState('encheres');
  const [detail, setDetail] = React.useState(null);
  const [matchStep, setMatchStep] = React.useState(0);
  const [runMatch, setRunMatch] = React.useState(false);
  const [demoReady, setDemoReady] = React.useState(false);

  React.useEffect(() => {
    const savedProfile = loadProfile();
    applyTestState(buildTestProfile());
    setDemoReady(true);
    return () => {
      if (savedProfile) syncGameStateFromProfile(savedProfile);
      else applyBlankState();
    };
  }, []);

  React.useEffect(() => {
    if (tab !== 'match' || runMatch) return;
    const t = setInterval(() => setMatchStep(i => (i + 1) % DEMO_MATCH_STEPS.length), 2800);
    return () => clearInterval(t);
  }, [tab, runMatch]);

  const teamA = demoReady ? fieldOf('m1') : { outfield: [] };
  const teamB = demoReady ? fieldOf('m3') : { outfield: [] };
  const step = DEMO_MATCH_STEPS[matchStep];

  const flashPack = () => {
    /* démo — pas d'ouverture réelle */
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 200, background: 'radial-gradient(120% 80% at 50% 0%, #111a2e, #0c0f1c 65%)',
      color: C.txt, display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <div style={{ padding: '52px 18px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 20 }}>Démo GOLAZO</div>
          <div style={{ color: C.mut, fontSize: 12.5, marginTop: 2 }}>Aperçu marché & match</div>
        </div>
        <button onClick={onClose} style={{
          width: 38, height: 38, borderRadius: '50%', border: '1px solid ' + C.line,
          background: 'rgba(255,255,255,0.06)', color: C.txt, cursor: 'pointer', fontSize: 18,
        }}>×</button>
      </div>

      <div style={{ padding: '0 18px 12px' }}>
        <Seg value={tab} onChange={setTab} options={[
          { v: 'market', label: 'Marché transferts' },
          { v: 'match', label: 'Système de match' },
        ]} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 18px 24px', WebkitOverflowScrolling: 'touch' }}>
        {!demoReady ? (
          <div style={{ textAlign: 'center', padding: 32, color: C.mut }}>Chargement de la démo…</div>
        ) : tab === 'market' && !runMatch ? (
          <React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <CreditPill value={500} size="sm" />
              <MarketHelpButton />
            </div>
            <Seg value={marketTab} onChange={setMarketTab} options={[
              { v: 'encheres', label: 'Enchères' },
              { v: 'packs', label: 'Packs' },
            ]} />
            <div style={{ height: 10 }} />

            {marketTab === 'encheres' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {DEMO_MARKET_PLAYERS.map(p => (
                  <Surface key={p.id} onClick={() => setDetail(p)} style={{ padding: 10, cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <PlayerCard player={withBoost(p)} w={100} interactive={false} flippable={false} cardStyle={cardStyle} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                        <Flag code={p.country} w={14} />
                        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11 }}>{p.name.split(' ').pop()}</span>
                      </div>
                      <div style={{ fontSize: 9.5, color: cardVisualOf(p.rarity).ring, fontWeight: 800, marginTop: 2 }}>{cardVisualOf(p.rarity).label}</div>
                    </div>
                    <div style={{ height: 8 }} />
                    <Btn full size="sm" kind="dark" onClick={e => { e.stopPropagation(); }}>Miser</Btn>
                  </Surface>
                ))}
              </div>
            )}

            {marketTab === 'packs' && (
              <MarketPackSection onBuyPack={flashPack} />
            )}
          </React.Fragment>
        ) : tab === 'match' && !runMatch ? (
          <React.Fragment>
            <Surface glow="rgba(201,146,46,0.2)" style={{ padding: 16, marginBottom: 14, textAlign: 'center' }}>
              <IconBadge name={step.icon} size={52} iconSize={26} />
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, marginTop: 10, color: C.accL }}>{step.title}</div>
              <div style={{ color: C.mut, fontSize: 13, marginTop: 6, lineHeight: 1.45 }}>{step.body}</div>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 14 }}>
                {DEMO_MATCH_STEPS.map((_, i) => (
                  <div key={i} style={{ width: i === matchStep ? 20 : 6, height: 6, borderRadius: 999, background: i === matchStep ? C.acc : C.line, transition: 'all .3s' }} />
                ))}
              </div>
            </Surface>

            <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'stretch' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: MANAGERS[0]?.color, textAlign: 'center', marginBottom: 6, fontFamily: 'Archivo,sans-serif' }}>{MANAGERS[0]?.name}</div>
                <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                  {teamA.outfield.map(p => (
                    <PlayerCard key={p.id} player={p} w={54} interactive={false} flippable={false} cardStyle={cardStyle} />
                  ))}
                </div>
              </div>
              <div style={{ width: 2, background: 'linear-gradient(180deg, transparent, rgba(201,146,46,0.5), transparent)', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: MANAGERS[2]?.color, textAlign: 'center', marginBottom: 6, fontFamily: 'Archivo,sans-serif' }}>{MANAGERS[2]?.name}</div>
                <div style={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                  {teamB.outfield.map(p => (
                    <PlayerCard key={p.id} player={p} w={54} interactive={false} flippable={false} cardStyle={cardStyle} />
                  ))}
                </div>
              </div>
            </div>

            <Surface style={{ padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <Avatar mgr={MANAGERS[0]} size={40} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 24, color: C.accL }}>2 — 1</div>
                <div style={{ fontSize: 10, color: C.mut2, fontWeight: 800, letterSpacing: 0.5 }}>EN DIRECT</div>
              </div>
              <Avatar mgr={MANAGERS[2]} size={40} />
            </Surface>

            <div style={{ height: 14 }} />
            <Btn full size="lg" onClick={() => setRunMatch(true)}>Voir un extrait de match →</Btn>
          </React.Fragment>
        ) : null}

        {runMatch && demoReady && (
          <div style={{ position: 'relative', minHeight: 420, borderRadius: 18, overflow: 'hidden', border: '1px solid ' + C.line }}>
            <MatchFlow midA="m1" midB="m3" seed={4242} replay onExit={() => setRunMatch(false)} isMobile />
          </div>
        )}
      </div>

      <Sheet open={!!detail} onClose={() => setDetail(null)}>
        {detail && <CardDetail player={withBoost(detail)} cardStyle={cardStyle} />}
      </Sheet>
    </div>
  );
}

Object.assign(window, { ProductDemo });
