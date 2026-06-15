// app.jsx — GOLAZO root: routing, nav, match/market flows
const { useState, useEffect } = React;

function AppShell() {
  window.__cardStyle = 'blason';
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 520);
  const [booting, setBooting] = useState(() => isSupabaseReady());
  const [auth, setAuth] = useState(() => hasSession());
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
  const [authError, setAuthError] = useState(null);
  const [setupError, setSetupError] = useState(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 520);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const mergeRemoteState = async (base) => {
    let merged = { ...(base || {}) };
    if (!isSupabaseReady()) return merged;
    const remote = await supabaseFetchProfile();
    if (remote) merged = { ...merged, ...remote };
    const league = await supabaseFetchMyLeague();
    if (league) merged = { ...merged, ...league };
    if (merged.marketComplete && merged.leagueId && merged.memberId) {
      const squad = await supabaseFetchMySquad(merged.leagueId, merged.memberId);
      if (squad.length) {
        merged.mySquad = squad;
        applyMySquad(squad);
      }
    }
    return merged;
  };

  useEffect(() => {
    if (!isSupabaseReady()) { setBooting(false); return; }
    let cancelled = false;
    (async () => {
      const session = await supabaseGetSession();
      if (cancelled) return;
      if (session) {
        setSession(true);
        setAuth(true);
        const merged = await mergeRemoteState(loadProfile());
        if (cancelled) return;
        saveProfile(merged);
        setProfile(merged);
        if (merged.setupComplete && !merged.marketComplete) setFlow('createMarket');
      }
      setBooting(false);
    })();
    return () => { cancelled = true; };
  }, []);

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

  const handleAuth = async (data = {}) => {
    setAuthError(null);
    const { mode, email, password, pseudo } = data;

    if (isSupabaseReady() && email && password) {
      const res = mode === 'signup'
        ? await supabaseSignUp({ email, password, pseudo })
        : await supabaseSignIn({ email, password });
      if (res.error) {
        setAuthError(res.error.message || 'Connexion impossible');
        return;
      }
      if (mode === 'signup' && res.user && !res.user.confirmed_at) {
        setAuthError('Vérifie ta boîte mail pour confirmer ton compte, puis reconnecte-toi.');
        return;
      }
    }

    setSession(true);
    setAuth(true);
    const merged = await mergeRemoteState({ ...(loadProfile() || {}), ...(pseudo && !loadProfile()?.pseudo ? { pseudo } : {}) });

    if (merged.setupComplete) {
      applyProfile(merged);
      setProfile(merged);
      setSetup(false);
      if (!merged.marketComplete) setFlow('createMarket');
      else setTab('home');
    } else {
      if (pseudo && !merged.pseudo) merged.pseudo = pseudo;
      setProfile(merged);
      setSetup(true);
    }
  };

  const handleSetupComplete = async (p) => {
    setSetupError(null);
    let next = { ...p };
    if (isSupabaseReady()) {
      const profRes = await supabaseUpsertProfile(next);
      if (profRes.error) {
        setSetupError(profRes.message || 'Impossible d\'enregistrer le profil');
        return;
      }
      if (!next.leagueId) {
        const res = await supabaseCreateLeague(next);
        if (!res.offline && res.error) {
          setSetupError(res.message || 'Impossible de créer la ligue');
          return;
        }
        if (!res.offline && !res.error) {
          next = {
            ...next,
            leagueId: res.leagueId,
            memberId: res.memberId,
            inviteCode: res.inviteCode,
            startCredits: res.startCredits,
          };
        }
      }
    }
    saveProfile(next);
    setProfile(next);
    setSetup(false);
    setFlow('createMarket');
  };

  const handleMarketDone = async (wonIds) => {
    let p = { ...(profile || loadProfile() || {}), marketComplete: true };
    if (wonIds?.length) {
      applyMySquad(wonIds);
      p.mySquad = wonIds;
    }
    if (isSupabaseReady() && p.leagueId && p.memberId && wonIds?.length) {
      const squadRes = await supabaseSyncSquad(p.leagueId, p.memberId, wonIds);
      if (squadRes.error) {
        console.warn('GOLAZO squad sync:', squadRes.message || squadRes.error);
      }
    }
    saveProfile(p);
    setProfile(p);
    setFlow(null);
    setTab('club');
  };

  const scheduledOpponent = () => {
    const you = MANAGERS.find(m => m.you);
    if (!you) return 'm3';
    const oppRow = STANDINGS.find(s => s.mid !== you.id);
    return oppRow?.mid || 'm3';
  };

  let content = null;
  if (setup) {
    content = (
      <TeamSetup
        initialPseudo={profile?.pseudo}
        setupError={setupError}
        onBack={() => { setSession(false); setAuth(false); setSetup(false); setSetupError(null); }}
        onComplete={handleSetupComplete}
      />
    );
  } else if (flow === 'createMarket') {
    content = (
      <MarketScreen
        cardStyle={cardStyle}
        profile={profile}
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
    content = <MarketScreen cardStyle={cardStyle} profile={profile} onOpenPack={openPack} onDone={(ids) => { if (ids?.length) applyMySquad(ids); setTab('club'); }} />;
  } else if (tab === 'shop') {
    content = <ShopScreen cardStyle={cardStyle} onOpenPack={openPack} />;
  }

  const showNav = auth && !match && !flow && !setup && !booting;

  if (booting) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', background: '#0c0f1c', color: C.txt }}>
        <div style={{ textAlign: 'center' }}>
          <HexBallIcon size={48} />
          <div style={{ marginTop: 12, fontFamily: 'Archivo,sans-serif', fontWeight: 800, color: C.mut }}>Chargement…</div>
        </div>
      </div>
    );
  }

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
              <Onboarding onAuth={handleAuth} authError={authError} onDemo={() => setDemo(true)} />
              {demo && <ProductDemo onClose={() => setDemo(false)} cardStyle={cardStyle} />}
            </React.Fragment>
          ) : match ? (
            <div style={{ position: 'absolute', inset: 0, zIndex: 150, background: bg, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <MatchFlow {...match} onExit={() => setMatch(null)} isMobile={isMobile} />
            </div>
          ) : (
            <div style={{ minHeight: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', padding: '58px 18px 110px' }} key={flow || tab || (setup ? 'setup' : 'main')}>
              {content || (
                <div style={{ textAlign: 'center', padding: 32 }}>
                  <div style={{ color: C.mut, marginBottom: 16 }}>Aucun écran à afficher.</div>
                  <Btn onClick={() => { setSetup(true); setTab('home'); }}>Configurer mon profil</Btn>
                </div>
              )}
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

function App() {
  return (
    <ErrorBoundary>
      <AppShell />
    </ErrorBoundary>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
