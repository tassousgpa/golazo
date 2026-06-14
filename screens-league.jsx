// screens-league.jsx — league home hub, standings, create-league flow

function rankOf(mid) { return STANDINGS.findIndex(s => s.mid === mid) + 1; }

function LeagueHome({ onStartMatch, onSimulate, onCreateLeague, onOpenMarket, onOpenSquad }) {
  const you = MANAGERS.find(m => m.you);
  const oppRow = STANDINGS.find(s => s.mid !== you.id);
  const opp = MANAGERS.find(m => m.id === oppRow.mid);
  const boosts = Object.keys(LIVE_BOOSTS);

  return (
    <div>
      <PageHeader
        greeting={`Salut ${you.name}`}
        title="Coupe entre potes"
        pills={<><CreditPill value={340} size="sm" /><JetonPill value={12} size="sm" /></>}
      />

      <Banner
        icon="fire"
        title="Boosts Coupe du Monde actifs"
        body={`${boosts.length} de tes cartes sont dopées pour le prochain match`}
      >
        <div style={{ display: 'flex' }}>
          {boosts.slice(0, 3).map((id, i) => (
            <div key={id} style={{ marginLeft: i ? -10 : 0 }}><MiniCard player={withBoost(byId(id))} w={30} /></div>
          ))}
        </div>
      </Banner>

      {/* NEXT MATCH hero */}
      <Surface glow="rgba(201,146,46,0.22)" style={{ padding: 18, marginBottom: 8, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,146,46,0.22), transparent 70%)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
          <Chip color={C.acc} solid>JOURNÉE 5 · DANS 1H42</Chip>
          <Chip color={C.cyan}>Poule A</Chip>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '20px 0 18px', position: 'relative' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar mgr={you} size={56} />
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14, marginTop: 7 }}>{you.name}</div>
            <div style={{ color: C.mut2, fontSize: 11 }}>#{rankOf(you.id)} · OVR {buildTeam(you.id).agg.ovr}</div>
          </div>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 30, color: C.acc, textShadow: '0 0 18px rgba(201,146,46,0.45)' }}>VS</div>
          <div style={{ textAlign: 'center' }}>
            <Avatar mgr={opp} size={56} />
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14, marginTop: 7 }}>{opp.name}</div>
            <div style={{ color: C.mut2, fontSize: 11 }}>#{rankOf(opp.id)} · OVR {buildTeam(opp.id).agg.ovr}</div>
          </div>
        </div>
        <Btn full size="lg" onClick={() => onStartMatch(opp.id)}><GzIcon name="ball" size={18} color="#1a0e02" /> Démarrer le match</Btn>
        <div style={{ textAlign: 'center', color: C.mut2, fontSize: 11.5, marginTop: 9 }}>Lancement auto si personne ne démarre · simulé en arrière-plan</div>
      </Surface>

      {/* modes */}
      <Section title="Deux façons de jouer" />
      <div style={{ display: 'flex', gap: 11 }}>
        <ModeCard icon="sim" title="Simulation rapide" desc="Vois un match complet tout de suite, avec la ligue déjà créée." onClick={onSimulate} tint="cyan" />
        <ModeCard icon="plus" title="Créer ma ligue" desc="Invite tes potes et lance le marché des transferts." onClick={onCreateLeague} tint="pink" />
      </div>

      {/* standings */}
      <Section title="Classement" action="Marché →" onAction={onOpenMarket} />
      <Surface style={{ overflow: 'hidden' }}>
        {STANDINGS.map((row, i) => {
          const m = MANAGERS.find(x => x.id === row.mid);
          return (
            <div key={row.mid} style={{
              display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px',
              borderBottom: i < STANDINGS.length - 1 ? '1px solid ' + C.line : 'none',
              background: m.you ? 'rgba(201,146,46,0.08)' : 'transparent',
            }}>
              <div style={{ width: 20, textAlign: 'center', fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 15, color: i === 0 ? C.gold : C.mut }}>{i + 1}</div>
              <Avatar mgr={m} size={34} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{m.name}{m.you && <span style={{ color: C.acc, fontSize: 11 }}> · toi</span>}</div>
                <div style={{ color: C.mut2, fontSize: 11 }}>{row.w}V {row.d}N {row.l}D · {row.gf}:{row.ga}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, color: C.acc }}>{row.pts}</div>
                <div style={{ color: C.mut2, fontSize: 10 }}>PTS</div>
              </div>
            </div>
          );
        })}
      </Surface>
      <div style={{ textAlign: 'center', color: C.mut2, fontSize: 11.5, marginTop: 12 }}>
        Système de poule · pas d'élimination · matchs tous les 3 jours
      </div>
    </div>
  );
}

// ─── Create league flow ───
function CreateLeague({ onBack, onLaunchMarket }) {
  const [name, setName] = React.useState('Coupe entre potes');
  const [hours, setHours] = React.useState(6);
  const [credits, setCredits] = React.useState(500);
  const code = 'GOL-4F2K';
  return (
    <div>
      <TopBar title="Nouvelle ligue" sub="Admin" onBack={onBack} />

      <label style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, color: C.mut }}>Nom de la ligue</label>
      <input value={name} onChange={e => setName(e.target.value)} style={{
        width: '100%', boxSizing: 'border-box', padding: '15px 16px', borderRadius: 14, marginTop: 8,
        background: 'rgba(0,0,0,0.3)', border: '1px solid ' + C.line, color: C.txt, fontSize: 16, fontFamily: 'Archivo,sans-serif', fontWeight: 800, outline: 'none',
      }} />

      <Surface style={{ padding: 16, marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>Durée du marché des transferts</div>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18, color: C.acc }}>{hours}h</div>
        </div>
        <input type="range" min={1} max={24} value={hours} onChange={e => setHours(+e.target.value)} className="gz-range" style={{ width: '100%', marginTop: 14 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', color: C.mut2, fontSize: 11, marginTop: 2 }}><span>1h · rapide</span><span>24h · tranquille</span></div>
      </Surface>

      <Surface style={{ padding: 16, marginTop: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>Crédits par joueur</div>
          <CreditPill value={credits} />
        </div>
        <input type="range" min={300} max={800} step={50} value={credits} onChange={e => setCredits(+e.target.value)} className="gz-range" style={{ width: '100%', marginTop: 14 }} />
        <div style={{ color: C.mut2, fontSize: 11.5, marginTop: 2 }}>Tout le monde démarre avec le même budget pour les enchères.</div>
      </Surface>

      <Section title="Règles" />
      <RuleList items={[
        { icon: 'ball', title: 'Équipe de 6 joueurs', desc: '4 sur le terrain · 1 gardien + 3 joueurs' },
        { icon: 'whisper', title: 'Enchères secrètes', desc: 'Personne ne voit les mises des autres' },
        { icon: 'forbidden', title: 'Joueurs uniques', desc: 'Deux managers ne peuvent pas avoir le même joueur' },
        { icon: 'calendar', title: 'Match tous les 3 jours', desc: 'Poules · classement · sans élimination' },
      ]} />

      <Surface style={{ padding: 16, marginTop: 16, textAlign: 'center', background: 'rgba(201,146,46,0.08)', borderColor: 'rgba(201,146,46,0.3)' }}>
        <div style={{ color: C.mut, fontSize: 12.5, fontWeight: 700 }}>Code d'invitation</div>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 30, letterSpacing: 3, color: C.acc, margin: '6px 0' }}>{code}</div>
        <div style={{ color: C.mut2, fontSize: 12 }}>Partage-le à tes potes pour qu'ils rejoignent</div>
      </Surface>

      <div style={{ height: 16 }} />
      <Btn full size="lg" onClick={onLaunchMarket}>Lancer le marché des transferts →</Btn>
      <div style={{ height: 10 }} />
    </div>
  );
}

Object.assign(window, { LeagueHome, CreateLeague, rankOf });
