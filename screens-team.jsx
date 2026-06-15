// screens-team.jsx — Club: pitch composition (1 GK + 3), bench, role assignment, card detail

function Pitch({ gk, outfield, onTap }) {
  const spot = (p, left, top, big) => (
    <div key={p.id} onClick={() => onTap(p)} style={{ position: 'absolute', left: left + '%', top: top + '%', transform: 'translate(-50%,-50%)', cursor: 'pointer' }}>
      <MiniCard player={p} w={big ? 74 : 70} />
    </div>
  );
  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: '1 / 1.05', borderRadius: 22, overflow: 'hidden',
      background: 'linear-gradient(170deg, #14693e, #0c4a2c)', border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: 'inset 0 0 60px rgba(0,0,0,0.35)',
    }}>
      {/* stripes */}
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 14%, transparent 14% 28%)' }} />
      {/* center circle + lines */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', aspectRatio: '1', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.18)', marginTop: '-20%' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '52%', height: '20%', border: '2px solid rgba(255,255,255,0.18)', borderBottom: 'none', borderRadius: '8px 8px 0 0' }} />
      {/* attackers/mid row */}
      {outfield[0] && spot(outfield[0], 22, 30)}
      {outfield[1] && spot(outfield[1], 50, 22, true)}
      {outfield[2] && spot(outfield[2], 78, 30)}
      {/* gk */}
      {gk && spot(gk, 50, 82)}
      <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 10.5, fontWeight: 800, fontFamily: 'Archivo,sans-serif', letterSpacing: 1 }}>1 GARDIEN · 3 JOUEURS DE CHAMP</div>
    </div>
  );
}

const ROLE_DEFS = [
  { k: 'corner', label: 'Tireur de corner', icon: 'corner', hint: 'Passe décisive sur coups de pied' },
  { k: 'penalty', label: 'Tireur de penalty', icon: 'target', hint: 'Stat de tir face au gardien' },
  { k: 'duelAtt', label: 'Attaquant 1v1', icon: 'duel', hint: 'Vitesse × dribble en duel' },
  { k: 'duelDef', label: 'Défenseur 1v1', icon: 'shield', hint: 'Stoppe les attaquants adverses' },
];

function ClubScreen({ cardStyle }) {
  const mid = 'm1';
  const base = SQUADS[mid];
  const [field, setField] = React.useState([base.gk, ...base.field]); // [gk, o1,o2,o3]
  const [bench, setBench] = React.useState(base.bench);
  const [roles, setRoles] = React.useState(ROLES[mid]);
  const [detail, setDetail] = React.useState(null);
  const [rolePick, setRolePick] = React.useState(null);
  const [swap, setSwap] = React.useState(null);

  const gk = withBoost(byId(field[0]));
  const outfield = field.slice(1).map(id => withBoost(byId(id))).filter(Boolean);
  if (!gk) {
    return (
      <div style={{ textAlign: 'center', padding: 24 }}>
        <div style={{ color: C.mut, marginBottom: 12 }}>Effectif incomplet — recharge la page ou refais le marché.</div>
        <Btn onClick={() => window.location.reload()}>Recharger</Btn>
      </div>
    );
  }
  const agg = teamAgg({ gk, outfield });
  const you = MANAGERS[0];

  const setRole = (k, id) => { setRoles(r => ({ ...r, [k]: id })); setRolePick(null); };

  const doSwap = (benchId) => {
    if (swap == null) return;
    // swap field[swap] (must be outfield index 1..3) with benchId
    const fIdx = swap;
    const out = byId(field[fIdx]); const inc = byId(benchId);
    if (out.pos === 'GK' || inc.pos === 'GK') { // keep GK slot consistent: only allow if both gk-compatible
      if (!(out.pos === 'GK' && inc.pos === 'GK')) { setSwap(null); return; }
    }
    setField(f => f.map((x, i) => i === fIdx ? benchId : x));
    setBench(b => b.map(x => x === benchId ? field[fIdx] : x));
    setSwap(null);
  };

  return (
    <div>
      <PageHeader
        greeting={`#${rankOf(mid)} au classement`}
        title="Mon club"
        right={<>
          <Surface style={{ padding: '8px 14px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: C.acc, lineHeight: 1 }}>{agg.ovr}</div>
            <div style={{ color: C.mut2, fontSize: 10, fontWeight: 800 }}>OVR ÉQUIPE</div>
          </Surface>
          <Avatar mgr={you} size={42} />
        </>}
      />

      <Pitch gk={gk} outfield={outfield} onTap={setDetail} />

      {/* team stats summary */}
      <Surface style={{ padding: 14, marginTop: 14 }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, marginBottom: 12 }}>Stats d'équipe</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px' }}>
          {STAT_KEYS.map(k => <StatBar key={k} k={k} val={Math.round(agg[k])} />)}
        </div>
      </Surface>

      {/* bench */}
      <Section title="Banc" />
      <div style={{ display: 'flex', gap: 10 }}>
        {bench.map(id => (
          <Surface key={id} style={{ flex: 1, padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <MiniCard player={byId(id)} w={60} onClick={() => setDetail(byId(id))} />
            <Btn size="sm" kind={swap === id ? 'primary' : 'dark'} full onClick={() => setSwap(s => s === id ? null : id)}>{swap === id ? 'Annuler' : 'Faire entrer'}</Btn>
          </Surface>
        ))}
      </div>
      {swap !== null && (
        <Surface style={{ padding: 12, marginTop: 10, borderColor: 'rgba(201,146,46,0.4)' }}>
          <div style={{ fontSize: 12.5, color: C.mut, marginBottom: 10 }}>Quel joueur de champ <b style={{ color: C.txt }}>{byId(swap).name}</b> remplace-t-il ?</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <MiniCard player={byId(field[i])} w={56} onClick={() => {
                  const benchId = swap, outId = field[i];
                  setField(f => f.map((x, idx) => idx === i ? benchId : x));
                  setBench(b => b.map(x => x === benchId ? outId : x));
                  setSwap(null);
                }} />
              </div>
            ))}
          </div>
          <div style={{ height: 8 }} />
          <Btn size="sm" kind="ghost" full onClick={() => setSwap(null)}>Annuler</Btn>
        </Surface>
      )}

      {/* roles */}
      <Section title="Rôles pour le match" />
      <div style={{ color: C.mut, fontSize: 12, marginTop: -6, marginBottom: 10 }}>Définis pour la compétition · ajustable avant chaque match</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {ROLE_DEFS.map(rd => {
          const pid = roles[rd.k]; const p = byId(pid);
          return (
            <Surface key={rd.k} onClick={() => setRolePick(rd)} style={{ padding: 11, display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer' }}>
              <IconBadge name={rd.icon} size={36} iconSize={18} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13.5 }}>{rd.label}</div>
                <div style={{ color: C.mut2, fontSize: 11 }}>{rd.hint}</div>
              </div>
              {p && <MiniCard player={withBoost(p)} w={36} />}
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13, color: C.acc, maxWidth: 70, textAlign: 'right' }}>{p ? p.name.split(' ').pop() : '—'}</div>
            </Surface>
          );
        })}
      </div>

      <div style={{ height: 14 }} />

      {/* card detail */}
      <Sheet open={!!detail} onClose={() => setDetail(null)}>
        {detail && <CardDetail player={withBoost(detail)} cardStyle={cardStyle} />}
      </Sheet>

      {/* role picker */}
      <Sheet open={!!rolePick} onClose={() => setRolePick(null)} title={rolePick ? rolePick.label : ''}>
        {rolePick && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {outfield.map(p => {
              const sel = roles[rolePick.k] === p.id;
              const keyStat = rolePick.k === 'corner' ? 'pas' : rolePick.k === 'penalty' ? 'tir' : rolePick.k === 'duelAtt' ? 'dri' : 'def';
              return (
                <Surface key={p.id} onClick={() => setRole(rolePick.k, p.id)} style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', borderColor: sel ? C.acc : C.line, background: sel ? 'rgba(201,146,46,0.1)' : C.surf }}>
                  <MiniCard player={p} w={42} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{p.name}</div>
                    <div style={{ color: C.mut, fontSize: 11.5 }}>{STAT_LABEL[keyStat]} <b style={{ color: C.txt }}>{p.stats[keyStat]}</b></div>
                  </div>
                  {sel && <GzIcon name="check" size={20} color={C.lime} />}
                </Surface>
              );
            })}
          </div>
        )}
      </Sheet>
    </div>
  );
}

function CardDetail({ player, cardStyle }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PlayerCard player={player} w={210} cardStyle={cardStyle} />
      <div style={{ color: C.mut2, fontSize: 11.5, marginTop: 10 }}>Bouge la carte · touche pour retourner</div>
      {player.boost && (
        <Surface style={{ padding: 12, marginTop: 14, width: '100%', boxSizing: 'border-box', display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(201,146,46,0.1)', borderColor: 'rgba(201,146,46,0.35)' }}>
          <IconBadge name="fire" size={38} iconSize={18} />
          <div style={{ fontSize: 12.5 }}>
            <b style={{ color: C.gold }}>+{player.boost.amount} {STAT_LABEL[player.boost.stat]}</b>
            <div style={{ color: C.mut }}>{player.boost.reason} · ce match uniquement</div>
          </div>
        </Surface>
      )}
      <div style={{ display: 'flex', gap: 16, marginTop: 16, marginBottom: 4 }}>
        <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: C.acc }}>{player.ovr}</div><div style={{ color: C.mut2, fontSize: 10 }}>OVR</div></div>
        <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22 }}>{POS[player.pos].label}</div><div style={{ color: C.mut2, fontSize: 10 }}>POSTE</div></div>
        <div style={{ textAlign: 'center' }}><div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: cardVisualOf(player.rarity).ring }}>{cardVisualOf(player.rarity).short}</div><div style={{ color: C.mut2, fontSize: 10 }}>{cardVisualOf(player.rarity).label}</div></div>
      </div>
    </div>
  );
}

Object.assign(window, { ClubScreen, Pitch, CardDetail });
