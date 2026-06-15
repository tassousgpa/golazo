// screens-standings.jsx — classement + résultats par journée

function StandingsTable({ onSelectManager }) {
  const sorted = [...STANDINGS].sort((a, b) => (b.pts || 0) - (a.pts || 0) || ((b.gf || 0) - (b.ga || 0)) - ((a.gf || 0) - (a.ga || 0)));
  return (
    <Surface style={{ overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr 52px 40px', gap: 8, padding: '10px 14px', borderBottom: '1px solid ' + C.line, fontSize: 9, fontWeight: 800, color: C.mut2, fontFamily: 'Archivo,sans-serif', letterSpacing: 0.5 }}>
        <span>#</span><span>MANAGER</span><span style={{ textAlign: 'right' }}>PTS</span><span style={{ textAlign: 'right' }}>DIFF</span>
      </div>
      {sorted.map((row, i) => {
        const m = MANAGERS.find(x => x.id === row.mid);
        if (!m) return null;
        return (
          <div
            key={row.mid}
            onClick={() => onSelectManager && onSelectManager(m)}
            style={{
              display: 'grid', gridTemplateColumns: '28px 1fr 52px 40px', gap: 8, alignItems: 'center',
              padding: '11px 14px', borderBottom: i < sorted.length - 1 ? '1px solid ' + C.line : 'none',
              background: m.you ? 'rgba(201,146,46,0.08)' : 'transparent', cursor: onSelectManager ? 'pointer' : 'default',
            }}
          >
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, color: i === 0 ? C.gold : C.mut }}>{i + 1}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
              <Avatar mgr={m} size={30} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{m.name}{m.you && <span style={{ color: C.acc, fontSize: 11 }}> · toi</span>}</div>
                <div style={{ color: C.mut2, fontSize: 10.5 }}>{row.w}V {row.d}N {row.l}D · {row.gf}:{row.ga}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right', fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 17, color: C.acc }}>{row.pts}</div>
            <div style={{ textAlign: 'right', fontSize: 12, fontWeight: 800, color: (row.gf || 0) - (row.ga || 0) >= 0 ? C.lime : C.pink }}>{(row.gf || 0) - (row.ga || 0) > 0 ? '+' : ''}{(row.gf || 0) - (row.ga || 0)}</div>
          </div>
        );
      })}
    </Surface>
  );
}

function ResultsByDay({ cardStyle }) {
  const days = fixturesByDay();
  if (!days.length) {
    return <Surface style={{ padding: 16, textAlign: 'center' }}><div style={{ color: C.mut }}>Aucun résultat.</div></Surface>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {days.map(({ day, matches }) => (
        <div key={day}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, color: C.accL, letterSpacing: 0.6, marginBottom: 8 }}>JOURNÉE {day}</div>
          {matches.map(f => {
            const ma = MANAGERS.find(m => m.id === f.midA);
            const mb = MANAGERS.find(m => m.id === f.midB);
            if (!ma || !mb) return null;
            const done = f.status === 'finished' || f.status === 'live';
            return (
              <Surface key={f.id} style={{ padding: 10, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
                <Avatar mgr={ma} size={26} />
                <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14 }}>
                  {done ? `${f.scoreA ?? 0} — ${f.scoreB ?? 0}` : <span style={{ color: C.mut2, fontSize: 12 }}>vs</span>}
                </div>
                <Avatar mgr={mb} size={26} />
              </Surface>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ManagerSquadSheet({ mgr, cardStyle, onClose }) {
  if (!mgr) return null;
  const ids = getManagerSquadIds(mgr.id);
  const players = ids.map(byId).filter(Boolean);
  return (
    <Sheet open onClose={onClose} title={`Effectif · ${mgr.name}`}>
      {players.length === 0 ? (
        <div style={{ color: C.mut, textAlign: 'center', padding: 16 }}>Effectif vide.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {players.map(p => (
            <div key={p.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <PlayerCard player={withBoost(p)} w={108} interactive={false} flippable={false} cardStyle={cardStyle} showName />
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 11, textAlign: 'center', color: C.txt, lineHeight: 1.2 }}>{p.name}</div>
            </div>
          ))}
        </div>
      )}
    </Sheet>
  );
}

function StandingsScreen({ cardStyle }) {
  const [sub, setSub] = React.useState('classement');
  const [viewMgr, setViewMgr] = React.useState(null);

  return (
    <div>
      <PageHeader title="Ligue" sub={loadProfile()?.leagueName || 'Classement'} />
      <Seg value={sub} onChange={setSub} options={[
        { v: 'classement', label: 'Classement' },
        { v: 'resultats', label: 'Résultats' },
      ]} />
      <div style={{ height: 12 }} />
      {sub === 'classement' ? (
        STANDINGS.length === 0 ? (
          <Surface style={{ padding: 20, textAlign: 'center' }}><div style={{ color: C.mut }}>Classement vide.</div></Surface>
        ) : (
          <StandingsTable onSelectManager={setViewMgr} />
        )
      ) : (
        <ResultsByDay cardStyle={cardStyle} />
      )}
      <ManagerSquadSheet mgr={viewMgr} cardStyle={cardStyle} onClose={() => setViewMgr(null)} />
    </div>
  );
}

Object.assign(window, { StandingsScreen, StandingsTable, ResultsByDay });
