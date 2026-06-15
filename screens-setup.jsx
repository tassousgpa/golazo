// screens-setup.jsx — team profile + league creation (full onboarding journey)

const SETUP_COUNTRIES = ['FRA', 'BRA', 'ARG', 'GER', 'ESP', 'ENG', 'POR', 'ITA', 'NED', 'BEL', 'MAR', 'SEN', 'USA', 'MEX', 'JPN', 'KOR'];

function TeamSetup({ initialPseudo, onComplete, onBack }) {
  const [step, setStep] = React.useState(0);
  const [pseudo, setPseudo] = React.useState(initialPseudo || '');
  const [teamName, setTeamName] = React.useState('');
  const [country, setCountry] = React.useState('FRA');
  const [leagueName, setLeagueName] = React.useState('Coupe entre potes');
  const [hours, setHours] = React.useState(6);
  const [credits, setCredits] = React.useState(500);
  const code = 'GOL-4F2K';

  const canNext = step === 0
    ? pseudo.trim().length >= 2 && teamName.trim().length >= 2
    : step === 1 ? !!country : true;

  const finish = () => {
    const profile = {
      pseudo: pseudo.trim(),
      teamName: teamName.trim(),
      country,
      leagueName: leagueName.trim() || 'Coupe entre potes',
      marketHours: hours,
      startCredits: credits,
      inviteCode: code,
      setupComplete: true,
      marketComplete: false,
    };
    saveProfile(profile);
    onComplete(profile);
  };

  const inputStyle = {
    width: '100%', boxSizing: 'border-box', padding: '15px 16px', borderRadius: 14, marginTop: 8,
    background: 'rgba(0,0,0,0.3)', border: '1px solid ' + C.line, color: C.txt,
    fontSize: 16, fontFamily: 'Archivo,sans-serif', fontWeight: 800, outline: 'none',
  };

  return (
    <div>
      <TopBar
        title={step === 0 ? 'Ton profil' : step === 1 ? 'Ta nation' : 'Ta ligue'}
        sub={`Étape ${step + 1} / 3`}
        onBack={step > 0 ? () => setStep(s => s - 1) : onBack}
      />

      <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 999, background: i <= step ? C.acc : C.line, transition: 'background .3s' }} />
        ))}
      </div>

      {step === 0 && (
        <React.Fragment>
          <div style={{ color: C.mut, fontSize: 13, marginBottom: 16, lineHeight: 1.45 }}>
            Choisis ton pseudo et le nom de ton équipe. C'est ce que tes potes verront en ligue.
          </div>
          <label style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, color: C.mut }}>Pseudo</label>
          <input value={pseudo} onChange={e => setPseudo(e.target.value)} placeholder="Ex. Zizou" style={inputStyle} maxLength={20} />
          <div style={{ height: 14 }} />
          <label style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, color: C.mut }}>Nom d'équipe</label>
          <input value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="Ex. Les Bleus FC" style={inputStyle} maxLength={24} />
          {pseudo && teamName && (
            <Surface style={{ padding: 14, marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <HexFrame size={48}><Flag code={country} w={28} /></HexFrame>
              <div>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 16 }}>{teamName}</div>
                <div style={{ color: C.mut, fontSize: 12.5, marginTop: 2 }}>Manager · {pseudo}</div>
              </div>
            </Surface>
          )}
        </React.Fragment>
      )}

      {step === 1 && (
        <React.Fragment>
          <div style={{ color: C.mut, fontSize: 13, marginBottom: 14, lineHeight: 1.45 }}>
            Sélectionne la nation que tu représentes. Un drapeau s'affichera à côté de ton nom et de tes joueurs.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {SETUP_COUNTRIES.map(code => {
              const c = COUNTRIES[code];
              const sel = country === code;
              return (
                <button key={code} onClick={() => setCountry(code)} style={{
                  padding: '12px 6px', borderRadius: 14, cursor: 'pointer',
                  border: `1.5px solid ${sel ? C.acc : C.line}`,
                  background: sel ? 'rgba(201,146,46,0.12)' : 'rgba(255,255,255,0.03)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                }}>
                  <Flag code={code} w={32} />
                  <span style={{ fontSize: 9, fontWeight: 800, color: sel ? C.accL : C.mut2, fontFamily: 'Archivo,sans-serif', textAlign: 'center', lineHeight: 1.2 }}>{c.name}</span>
                </button>
              );
            })}
          </div>
          <Surface style={{ padding: 14, marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <PlayerCard player={withBoost(playerByName('Kylian Mbappé') || PLAYERS[0])} w={72} interactive={false} flippable={false} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: C.mut2, marginBottom: 4 }}>Aperçu carte</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Flag code={country} w={18} />
                <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{pseudo || 'Ton pseudo'}</span>
              </div>
              <div style={{ color: C.mut, fontSize: 12, marginTop: 4 }}>{teamName || 'Ton équipe'} · {COUNTRIES[country].name}</div>
            </div>
          </Surface>
        </React.Fragment>
      )}

      {step === 2 && (
        <React.Fragment>
          <label style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, color: C.mut }}>Nom de la ligue</label>
          <input value={leagueName} onChange={e => setLeagueName(e.target.value)} style={inputStyle} />

          <Surface style={{ padding: 16, marginTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>Durée du marché</div>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18, color: C.acc }}>{hours}h</div>
            </div>
            <input type="range" min={1} max={24} value={hours} onChange={e => setHours(+e.target.value)} className="gz-range" style={{ width: '100%', marginTop: 14 }} />
          </Surface>

          <Surface style={{ padding: 16, marginTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>Crédits par joueur</div>
              <CreditPill value={credits} />
            </div>
            <input type="range" min={300} max={800} step={50} value={credits} onChange={e => setCredits(+e.target.value)} className="gz-range" style={{ width: '100%', marginTop: 14 }} />
          </Surface>

          <Surface style={{ padding: 16, marginTop: 16, textAlign: 'center', background: 'rgba(201,146,46,0.08)', borderColor: 'rgba(201,146,46,0.3)' }}>
            <div style={{ color: C.mut, fontSize: 12.5, fontWeight: 700 }}>Code d'invitation</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 28, letterSpacing: 3, color: C.acc, margin: '6px 0' }}>{code}</div>
            <div style={{ color: C.mut2, fontSize: 12 }}>Partage-le à tes potes</div>
          </Surface>
        </React.Fragment>
      )}

      <div style={{ height: 20 }} />
      {step < 2 ? (
        <Btn full size="lg" disabled={!canNext} onClick={() => setStep(s => s + 1)}>Continuer →</Btn>
      ) : (
        <Btn full size="lg" onClick={finish}>Lancer le marché des transferts →</Btn>
      )}
    </div>
  );
}

Object.assign(window, { TeamSetup });
