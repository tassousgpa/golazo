// screens-onboarding.jsx — GOLAZO v2 onboarding matching the reference DA

function Logo({ size = 1 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 * size }}>
      <HexBallIcon size={44 * size} />
      <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 34 * size, letterSpacing: -1, color: '#fff', lineHeight: 1 }}>
        GOL<span style={{ color: C.accL }}>AZO</span>
      </span>
    </div>
  );
}

const CONCEPT_ITEMS = [
  { icon: 'league', title: 'CRÉE',      sub: 'ta ligue privée' },
  { icon: 'cards',  title: 'CONSTRUIS', sub: 'ton équipe' },
  { icon: 'trophy', title: 'AFFRONTE',  sub: 'tes potes' },
  { icon: 'chart',  title: 'GAGNE',     sub: 'grâce aux perfs de la Coupe du Monde' },
];

const FEATURE_SLIDES = [
  { title: 'LES STATS EN TEMPS RÉEL', body: 'Les performances de la Coupe du Monde boostent tes joueurs en direct.', icon: 'chart', player: null, playerName: 'Kevin De Bruyne' },
  { title: 'PRIORITÉ PACK', body: 'Ouvre un pack et récupère tes joueurs avant tout le monde.', icon: 'cards', player: null, playerName: 'Mike Maignan' },
  { title: 'MATCHS EN DIRECT', body: '6 actions clés, suspense à chaque tirage, résultat en 60s.', icon: 'trophy', player: null, playerName: 'Kylian Mbappé' },
];

function Onboarding({ onAuth, onDemo }) {
  const [authMode, setAuthMode] = React.useState(null);
  const [slideIdx, setSlideIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setSlideIdx(i => (i + 1) % FEATURE_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Featured player cards for the concept card (fanned)
  const featPlayers = [
    playerByName('William Saliba'),
    playerByName('Mike Maignan'),
    playerByName('Kylian Mbappé'),
  ].filter(Boolean);

  return (
    <div style={{ height: '100%', overflowY: 'auto', position: 'relative' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: 0, left: -40, width: 260, height: 260, background: 'radial-gradient(circle, rgba(201,146,46,0.18), transparent 65%)', borderRadius: '50%', filter: 'blur(18px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 180, right: -50, width: 240, height: 240, background: 'radial-gradient(circle, rgba(58,138,255,0.14), transparent 65%)', borderRadius: '50%', filter: 'blur(18px)', pointerEvents: 'none' }} />

      <div style={{ padding: '64px 22px 32px', position: 'relative', zIndex: 2 }}>
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <Logo />
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: C.mut, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GzIcon name="bell" size={18} color={C.mut} /></button>
        </div>
        <div style={{ fontSize: 14.5, color: C.mut, marginBottom: 24, fontWeight: 500 }}>
          La Coupe du Monde, <span style={{ color: C.accL, fontWeight: 700 }}>entre potes.</span>
        </div>

        {/* Concept card */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 22, border: `1px solid rgba(201,146,46,0.22)`, padding: '18px 18px 20px', boxShadow: '0 20px 50px rgba(0,0,0,0.45)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {CONCEPT_ITEMS.map(item => (
                <div key={item.icon} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <IconBadge name={item.icon} size={38} iconSize={20} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 15, color: '#fff', letterSpacing: 0.5 }}>{item.title}</div>
                    <div style={{ color: C.mut, fontSize: 12.5, marginTop: 1 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fanned cards — below concept, no overlap */}
          <div style={{ position: 'relative', height: 148, marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', left: '18%', transform: 'rotate(-11deg)', zIndex: 1 }}>
              <PlayerCard player={featPlayers[0]} w={78} interactive={false} flippable={false} />
            </div>
            <div style={{ position: 'relative', zIndex: 3 }}>
              <PlayerCard player={featPlayers[2]} w={96} interactive={false} flippable={false} />
            </div>
            <div style={{ position: 'absolute', right: '18%', transform: 'rotate(11deg)', zIndex: 1 }}>
              <PlayerCard player={featPlayers[1]} w={76} interactive={false} flippable={false} />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <Btn full size="lg" onClick={() => setAuthMode('signup')} style={{ marginBottom: 12, letterSpacing: 2 }}>CRÉER UN COMPTE</Btn>
        <Btn full size="lg" kind="ghost" onClick={() => setAuthMode('login')} style={{ marginBottom: 12, letterSpacing: 2 }}>SE CONNECTER</Btn>
        <Btn full size="lg" kind="dark" onClick={onDemo} style={{ letterSpacing: 1.5 }}>▶ VOIR LA DÉMO</Btn>

        {/* Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '18px 0 16px' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.5, color: C.mut2, fontFamily: 'Archivo,sans-serif', whiteSpace: 'nowrap' }}>DÉJÀ PLUS DE 250 000 JOUEURS</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Feature slider */}
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', transform: `translateX(-${slideIdx * 100}%)`, transition: 'transform .5s cubic-bezier(.2,.8,.2,1)' }}>
            {FEATURE_SLIDES.map((slide, i) => (
              <div key={i} style={{ minWidth: '100%' }}>
                <div style={{ background: 'rgba(255,255,255,0.038)', borderRadius: 16, border: '1px solid rgba(201,146,46,0.16)', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <MiniCard player={withBoost(playerByName(slide.playerName) || featPlayers[0])} w={54} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12.5, color: C.accL, letterSpacing: 0.8, marginBottom: 4 }}>{slide.title}</div>
                    <div style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.4 }}>{slide.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 7, justifyContent: 'center', marginTop: 14 }}>
          {FEATURE_SLIDES.map((_, i) => (
            <div key={i} onClick={() => setSlideIdx(i)} style={{ width: i === slideIdx ? 24 : 8, height: 8, borderRadius: 999, cursor: 'pointer', background: i === slideIdx ? C.acc : C.line, transition: 'all .3s' }} />
          ))}
        </div>
      </div>

      {/* Auth sheet */}
      <Sheet open={!!authMode} onClose={() => setAuthMode(null)} title={authMode === 'signup' ? 'Créer ton compte' : 'Connexion'}>
        <AuthForm mode={authMode} onAuth={onAuth} />
      </Sheet>
    </div>
  );
}

function AuthForm({ mode, onAuth }) {
  const [pseudo, setPseudo] = React.useState('');
  const Field = ({ ph, type = 'text', value, onChange }) => (
    <input placeholder={ph} type={type} value={value} onChange={onChange} style={{ width: '100%', boxSizing: 'border-box', padding: '15px 16px', borderRadius: 14, marginBottom: 11, background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.line}`, color: C.txt, fontSize: 15, fontFamily: 'Hanken Grotesk,sans-serif', outline: 'none' }} />
  );
  const submit = () => onAuth(mode === 'signup' ? { pseudo: pseudo.trim() } : {});
  return (
    <div>
      {mode === 'signup' && <Field ph="Ton pseudo" value={pseudo} onChange={e => setPseudo(e.target.value)} />}
      <Field ph="Email" type="email" />
      <Field ph="Mot de passe" type="password" />
      <div style={{ height: 6 }} />
      <Btn full size="lg" onClick={submit}>{mode === 'signup' ? "C'est parti" : 'Se connecter'}</Btn>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0' }}>
        <div style={{ flex: 1, height: 1, background: C.line }} /><span style={{ color: C.mut2, fontSize: 12 }}>ou</span><div style={{ flex: 1, height: 1, background: C.line }} />
      </div>
      <Btn full kind="dark" onClick={submit}> Continuer avec Apple</Btn>
    </div>
  );
}

Object.assign(window, { Onboarding, Logo });
