// app.jsx — GOLAZO root: routing, nav, match/market flows
const { useState } = React;

function App() {
  window.__cardStyle = 'blason';
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 520);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 520);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const [auth, setAuth] = useState(() => !!loadProfile()?.setupComplete);
  const [profile, setProfile] = useState(() => {
    const p = loadProfile();
    if (p?.setupComplete) applyProfile(p);
    return p;
  });
  const [setup, setSetup] = useState(false);
  const [tab, setTab] = useState('home');
  const [flow, setFlow] = useState(null);
  const [match, setMatch] = useState(null);
  const [packOpen, setPackOpen] = useState(null);
  const [plannedBonus, setPlannedBonus] = useState(() => loadPlannedBonus());
  const [demo, setDemo] = useState(false);

  const cardStyle = 'blason';
  const bg = 'radial-gradient(120% 80% at 50% 0%, #111a2e, #0c0f1c 65%)';

  const openPack = (tier, mode, onComplete) => setPackOpen({ tier, mode, onComplete });
  const closePack = () => setPackOpen(null);

  const startMatch = (oppMid, opts = {}) => setMatch({
    midA: 'm1', midB: oppMid,
    bonusA: opts.bonusA !== undefined ? opts.bonusA : plannedBonus,
    ...opts,
  });

  const goTab = (k) => { setFlow(null); setTab(k); };
  const saveBonusPlan = (bonus) => {
    savePlannedBonus(bonus);
    setPlannedBonus(bonus);
  };

  const handleAuth = (data = {}) => {
    setAuth(true);
    const existing = loadProfile();
    if (existing?.setupComplete) {
      applyProfile(existing);
      setProfile(existing);
      setTab('home');
    } else {
      if (data.pseudo && !existing?.pseudo) {
        const draft = { ...(existing || {}), pseudo: data.pseudo };
        setProfile(draft);
      }
      setSetup(true);
    }
  };

  const handleSetupComplete = (p) => {
    setProfile(p);
    setSetup(false);
    setFlow('createMarket');
  };

  const handleMarketDone = () => {
    const p = { ...(profile || loadProfile() || {}), marketComplete: true };
    saveProfile(p);
    setProfile(p);
    setFlow(null);
    setTab('club');
  };

  const scheduledOpponent = () => {
    const you = MANAGERS.find(m => m.you);
    const oppRow = STANDINGS.find(s => s.mid !== you.id);
    return oppRow?.mid || 'm3';
  };

  let content;
  if (setup) {
    content = (
      <TeamSetup
        initialPseudo={profile?.pseudo}
        onBack={() => { setAuth(false); setSetup(false); }}
        onComplete={handleSetupComplete}
      />
    );
  } else if (flow === 'createMarket') {
    content = (
      <MarketScreen
        cardStyle={cardStyle}
        onOpenPack={openPack}
        onDone={handleMarketDone}
        firstTime
      />
    );
  } else if (tab === 'home') {
    content = (
      <LeagueHome
        cardStyle={cardStyle}
        profile={profile}
        plannedBonus={plannedBonus}
        onPlanBonus={saveBonusPlan}
        onStartMatch={(mid) => startMatch(mid)}
        onOpenMarket={() => setTab('market')}
        onOpenSquad={() => setTab('club')}
        onOpenShop={() => setTab('shop')}
      />
    );
  } else if (tab === 'club') {
    content = <ClubScreen cardStyle={cardStyle} />;
  } else if (tab === 'market') {
    content = <MarketScreen cardStyle={cardStyle} onOpenPack={openPack} onDone={() => setTab('club')} />;
  } else if (tab === 'shop') {
    content = <ShopScreen cardStyle={cardStyle} onOpenPack={openPack} />;
  }

  const showNav = auth && !match && !flow && !setup;

  return (
    <div style={{
      display: 'flex', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'center',
      minHeight: isMobile ? '100dvh' : '100vh', height: isMobile ? '100dvh' : 'auto',
      padding: isMobile ? 0 : 16, boxSizing: 'border-box', overflow: 'hidden',
    }}>
      <IOSDevice dark fullscreen={isMobile}>
        <div style={{ height: '100%', position: 'relative', background: bg, color: C.txt, fontFamily: 'Hanken Grotesk, sans-serif', overflow: 'hidden' }}>
          {!auth ? (
            <React.Fragment>
              <Onboarding onAuth={handleAuth} onDemo={() => setDemo(true)} />
              {demo && <ProductDemo onClose={() => setDemo(false)} cardStyle={cardStyle} />}
            </React.Fragment>
          ) : match ? (
            <div style={{ position: 'absolute', inset: 0, zIndex: 150, background: bg, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <MatchFlow {...match} onExit={() => setMatch(null)} isMobile={isMobile} />
            </div>
          ) : (
            <div style={{ height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', padding: '58px 18px 110px' }} key={flow || tab || (setup ? 'setup' : 'main')}>
              {content}
            </div>
          )}

          {packOpen && (
            <PackOpening
              tier={packOpen.tier}
              mode={packOpen.mode}
              onComplete={(ids) => { packOpen.onComplete(ids); closePack(); }}
              onClose={closePack}
            />
          )}

          {showNav && (
            <BottomNav
              tab={tab}
              onTab={goTab}
              onMatch={() => startMatch(scheduledOpponent())}
            />
          )}
        </div>
      </IOSDevice>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
