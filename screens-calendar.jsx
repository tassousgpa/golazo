// screens-calendar.jsx — calendrier des matchs à venir et en cours

function fixtureStatusLabel(f) {
  if (f.status === 'live') return 'En cours';
  if (f.status === 'finished') return 'Terminé';
  return 'À venir';
}

function fixtureStatusColor(f) {
  if (f.status === 'live') return C.lime;
  if (f.status === 'finished') return C.mut2;
  return C.accL;
}

function FixtureRow({ f, cardStyle, onWatch }) {
  const ma = MANAGERS.find(m => m.id === f.midA);
  const mb = MANAGERS.find(m => m.id === f.midB);
  if (!ma || !mb) return null;
  const youInvolved = ma.you || mb.you;
  return (
    <Surface style={{
      padding: 12, marginBottom: 10,
      borderColor: f.status === 'live' ? 'rgba(50,200,112,0.45)' : youInvolved ? 'rgba(201,146,46,0.3)' : C.line,
      background: f.status === 'live' ? 'rgba(50,200,112,0.06)' : C.surf,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <Chip color={fixtureStatusColor(f)} solid={f.status === 'live'}>{fixtureStatusLabel(f)}</Chip>
        <span style={{ fontSize: 10, fontWeight: 800, color: C.mut2, fontFamily: 'Archivo,sans-serif' }}>Journée {f.day}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <Avatar mgr={ma} size={28} />
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ma.name}</div>
        </div>
        <div style={{ textAlign: 'center', flexShrink: 0, minWidth: 52 }}>
          {f.status === 'finished' || f.status === 'live' ? (
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18, color: C.txt }}>{f.scoreA ?? 0} — {f.scoreB ?? 0}</div>
          ) : (
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, color: C.mut2 }}>VS</div>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', minWidth: 0 }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'right' }}>{mb.name}</div>
          <Avatar mgr={mb} size={28} />
        </div>
      </div>
      {youInvolved && f.status !== 'finished' && onWatch && (
        <React.Fragment>
          <div style={{ height: 10 }} />
          <Btn full size="sm" onClick={() => onWatch(f)}>{f.status === 'live' ? 'Voir le match' : 'Préparer le match'}</Btn>
        </React.Fragment>
      )}
    </Surface>
  );
}

function CalendarScreen({ cardStyle, onStartMatch }) {
  const live = FIXTURES.filter(f => f.status === 'live');
  const upcoming = FIXTURES.filter(f => f.status === 'scheduled');
  const you = MANAGERS.find(m => m.you);

  const watch = (f) => {
    const opp = f.midA === you?.id ? f.midB : f.midA;
    if (opp) onStartMatch(opp);
  };

  if (!FIXTURES.length) {
    return (
      <div>
        <PageHeader title="Calendrier" sub="Matchs de la ligue" />
        <Surface style={{ padding: 20, textAlign: 'center' }}>
          <div style={{ color: C.mut, fontSize: 13 }}>Aucun match programmé — rejoins ou crée une ligue.</div>
        </Surface>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Calendrier" sub={profileLeagueName()} />

      {live.length > 0 && (
        <React.Fragment>
          <Section title="En cours" />
          {live.map(f => <FixtureRow key={f.id} f={f} cardStyle={cardStyle} onWatch={watch} />)}
        </React.Fragment>
      )}

      <Section title="À venir" />
      {upcoming.length === 0 ? (
        <Surface style={{ padding: 16, textAlign: 'center' }}><div style={{ color: C.mut, fontSize: 13 }}>Pas de match à venir.</div></Surface>
      ) : upcoming.map(f => <FixtureRow key={f.id} f={f} cardStyle={cardStyle} onWatch={watch} />)}
    </div>
  );
}

function profileLeagueName() {
  const p = loadProfile();
  return p?.leagueName || 'Coupe entre potes';
}

Object.assign(window, { CalendarScreen, FixtureRow });
