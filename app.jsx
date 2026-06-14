// app.jsx — GOLAZO root: routing, nav, match/market/pack flows, tweaks
const { useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cardStyle": "blason",
  "theme": "navy"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  window.__cardStyle = t.cardStyle;

  const [auth, setAuth] = useState(false);
  const [tab, setTab] = useState('home');
  const [flow, setFlow] = useState(null);      // null | 'create' | 'createMarket'
  const [match, setMatch] = useState(null);    // {midA, midB, replay, seed}
  const [packOpen, setPackOpen] = useState(null); // {tier, mode, onComplete}

  const openPack = (tier, mode, onComplete) => setPackOpen({ tier, mode, onComplete });
  const closePack = () => setPackOpen(null);

  const bg = t.theme === 'nuit'
    ? 'radial-gradient(120% 80% at 50% 0%, #090c18, #04060f 70%)'
    : 'radial-gradient(120% 80% at 50% 0%, #111a2e, #0c0f1c 65%)';

  const startMatch = (oppMid, opts = {}) => setMatch({ midA: 'm1', midB: oppMid, ...opts });
  const goTab = (k) => { setFlow(null); setTab(k); };

  let content;
  if (flow === 'create') {
    content = <CreateLeague onBack={() => setFlow(null)} onLaunchMarket={() => setFlow('createMarket')} />;
  } else if (flow === 'createMarket') {
    content = <MarketScreen cardStyle={t.cardStyle} onOpenPack={openPack} onDone={() => { setFlow(null); setTab('club'); }} />;
  } else if (tab === 'home') {
    content = <LeagueHome
      cardStyle={t.cardStyle}
      onStartMatch={(mid) => startMatch(mid)}
      onSimulate={() => startMatch('m3', { seed: 4242 })}
      onCreateLeague={() => setFlow('create')}
      onOpenMarket={() => setTab('market')}
      onOpenSquad={() => setTab('club')}
      onOpenShop={() => setTab('shop')} />;
  } else if (tab === 'club') {
    content = <ClubScreen cardStyle={t.cardStyle} />;
  } else if (tab === 'market') {
    content = <MarketScreen cardStyle={t.cardStyle} onOpenPack={openPack} onDone={() => setTab('club')} />;
  } else if (tab === 'shop') {
    content = <ShopScreen cardStyle={t.cardStyle} onOpenPack={openPack} />;
  }

  const showNav = auth && !match && !flow;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 16, boxSizing: 'border-box' }}>
      <IOSDevice dark>
        <div style={{ height: '100%', position: 'relative', background: bg, color: C.txt, fontFamily: 'Hanken Grotesk, sans-serif', overflow: 'hidden' }}>
          {!auth ? (
            <Onboarding onAuth={() => { setAuth(true); setTab('home'); }} />
          ) : match ? (
            <div style={{ position: 'absolute', inset: 0, zIndex: 150, background: bg }}>
              <MatchFlow {...match} onExit={() => setMatch(null)} />
            </div>
          ) : (
            <div style={{ height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', padding: '58px 18px 110px' }} key={flow || tab}>
              {content}
            </div>
          )}

          {/* Pack opening overlay — above everything except TweaksPanel */}
          {packOpen && (
            <PackOpening
              tier={packOpen.tier}
              mode={packOpen.mode}
              onComplete={(ids) => { packOpen.onComplete(ids); closePack(); }}
              onClose={closePack}
            />
          )}

          {showNav && <BottomNav tab={tab} onTab={goTab} onMatch={() => startMatch('m3')} />}
        </div>
      </IOSDevice>

      <TweaksPanel>
        <TweakSection label="Cartes" />
        <TweakRadio label="Style de carte" value={t.cardStyle}
          options={['blason', 'maillot', 'minimal']}
          onChange={(v) => setTweak('cardStyle', v)} />
        <TweakSection label="Ambiance" />
        <TweakRadio label="Fond" value={t.theme}
          options={['indigo', 'nuit']}
          onChange={(v) => setTweak('theme', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
