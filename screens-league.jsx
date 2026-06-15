// screens-league.jsx — league home hub, standings, create-league flow

function rankOf(mid) { return STANDINGS.findIndex(s => s.mid === mid) + 1; }
function rankLabel(n) { return n === 1 ? '1re Place' : `${n}e Place`; }

function HomeLogo() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 1 }}>
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, letterSpacing: -0.5, color: '#fff' }}>GOL</span>
        <HexBallIcon size={20} />
        <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, letterSpacing: -0.5, color: C.accL }}>AZO</span>
      </div>
      <div style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: 1.2, color: C.mut2, marginTop: 4, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase' }}>
        La Coupe du Monde, <span style={{ color: C.accL }}>entre potes</span>
      </div>
    </div>
  );
}

function CurrencyBar() {
  const addBtn = (tint) => (
    <button style={{
      width: 18, height: 18, borderRadius: '50%', border: `1px solid ${tint}`,
      background: 'rgba(0,0,0,0.35)', color: tint, cursor: 'pointer', fontSize: 13, lineHeight: 1,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, marginLeft: 4,
    }}>+</button>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}><CreditPill value={12450} size="sm" />{addBtn(C.accL)}</span>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}><GemPill value={320} size="sm" />{addBtn('#9eb8ff')}</span>
      <button style={{
        width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.05)', cursor: 'pointer', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <GzIcon name="bell" size={16} color={C.mut} />
        <span style={{ position: 'absolute', top: 7, right: 7, width: 7, height: 7, borderRadius: '50%', background: '#ff3b5c', border: '1.5px solid #0c0f1c' }} />
      </button>
    </div>
  );
}

function TrophyShield({ rank, pts }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
      <div style={{
        width: 58, height: 64, flexShrink: 0, position: 'relative',
        background: 'linear-gradient(160deg, rgba(201,146,46,0.35), rgba(138,95,26,0.15))',
        clipPath: 'polygon(50% 0%, 100% 18%, 88% 100%, 12% 100%, 0% 18%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 20px rgba(201,146,46,0.35)',
      }}>
        <GzIcon name="trophy" size={26} color={C.accL} />
      </div>
      <div>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 15, color: C.accL, lineHeight: 1.1 }}>{rankLabel(rank)}</div>
        <div style={{ color: C.mut, fontSize: 12, marginTop: 3, fontWeight: 700 }}>{pts} Points</div>
      </div>
    </div>
  );
}

function JerseyDot({ mgr, size = 36 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 10, flexShrink: 0,
      background: `linear-gradient(145deg, ${mgr.color}55, ${mgr.color}22)`,
      border: `1.5px solid ${mgr.color}88`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: `0 0 12px ${mgr.color}44`,
    }}>
      <GzIcon name="jersey" size={size * 0.5} color={mgr.color} />
    </div>
  );
}

function LeagueHome({ onStartMatch, onOpenMarket, onOpenSquad, onOpenShop, cardStyle, plannedBonus, onPlanBonus, profile }) {
  const you = MANAGERS.find(m => m.you);
  const yourRow = you ? (STANDINGS.find(s => s.mid === you.id) || { pts: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 }) : null;
  const oppRow = you ? STANDINGS.find(s => s.mid !== you.id) : null;
  const opp = oppRow ? MANAGERS.find(m => m.id === oppRow.mid) : MANAGERS[1];
  const rank = you ? (rankOf(you.id) || 1) : 1;
  const boosts = Object.keys(LIVE_BOOSTS || {});
  const livePlayers = boosts.map(id => withBoost(byId(id))).filter(Boolean);
  const [showStandings, setShowStandings] = React.useState(false);
  const [showBonusPlan, setShowBonusPlan] = React.useState(false);
  const [draftBonus, setDraftBonus] = React.useState(plannedBonus);
  const youTeam = you ? buildTeam(you.id) : null;
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => { setDraftBonus(plannedBonus); }, [plannedBonus]);

  React.useEffect(() => {
    if (livePlayers.length <= 1) return;
    const t = setInterval(() => setSlide(i => (i + 1) % livePlayers.length), 3500);
    return () => clearInterval(t);
  }, [livePlayers.length]);

  if (!you) {
    return (
      <div style={{ textAlign: 'center', padding: 24 }}>
        <div style={{ color: C.mut, marginBottom: 12 }}>Profil introuvable.</div>
        <Btn onClick={() => window.location.reload()}>Recharger</Btn>
      </div>
    );
  }

  return (
    <div>
      {/* ── Header ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, gap: 8 }}>
        <HomeLogo />
        <CurrencyBar />
      </div>

      {/* ── Profil joueur ── */}
      <Surface glow="rgba(201,146,46,0.15)" style={{ padding: 14, marginBottom: 14, background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
          <HexFrame size={52}>
            {you.country ? <Flag code={you.country} w={30} /> : <HexBallIcon size={30} />}
          </HexFrame>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              {you.country && <Flag code={you.country} w={16} />}
              <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 18, color: C.txt }}>Salut {you.name}</div>
            </div>
            <div style={{ color: C.mut, fontSize: 12.5, marginTop: 2 }}>
              {you.teamName || profile?.teamName || 'Mon équipe'}
              {you.leagueName || profile?.leagueName ? ` · ${you.leagueName || profile.leagueName}` : ''}
            </div>
          </div>
        </div>
        <XpBar level={12} current={850} max={1200} />
      </Surface>

      {/* ── Grille navigation ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        <NavTile icon="gavel" title="Marché des transferts" sub="Enchères & Packs" tint="gold" onClick={onOpenMarket} />
        <NavTile icon="pack" title="Boutique" sub="Packs & Offres" tint="purple" onClick={onOpenShop} />
        <NavTile icon="pitch" title="Mon équipe" sub="Gère ton effectif" tint="teal" onClick={onOpenSquad} />
        <NavTile icon="trophy" title="Classement" sub="Découvre la ligue" tint="blue" onClick={() => setShowStandings(true)} />
      </div>

      {/* ── Ligue & prochain match ── */}
      <Surface style={{ padding: 14, marginBottom: 16, background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 13, letterSpacing: 0.8, textTransform: 'uppercase' }}>{profile?.leagueName || you.leagueName || 'Coupe entre potes'}</div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}><GzIcon name="settings" size={15} color={C.mut2} /></button>
          </div>
          <Chip color={C.acc} solid style={{ fontSize: 10 }}>{MANAGERS.length} / {MANAGERS.length} joueurs</Chip>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
          <TrophyShield rank={rank} pts={yourRow.pts * 280 + 196} />
          <div style={{
            flex: 1, minWidth: 0, borderRadius: 14, padding: '10px 12px',
            background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(201,146,46,0.25)',
            boxShadow: 'inset 0 0 20px rgba(201,146,46,0.08)',
          }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 1, color: C.mut2, fontFamily: 'Archivo,sans-serif', textTransform: 'uppercase' }}>Prochain match</div>
            <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 13, color: C.accL, margin: '4px 0 8px' }}>2j 14h 32m</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <JerseyDot mgr={you} size={32} />
              <span style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 11, color: C.mut2 }}>VS</span>
              <JerseyDot mgr={opp} size={32} />
            </div>
            {plannedBonus && (
              <div style={{ marginTop: 8, textAlign: 'center' }}>
                <Chip color={C.gold}><GzIcon name="star" size={11} color={C.gold} /> {bonusLabel(plannedBonus)}</Chip>
              </div>
            )}
          </div>
        </div>
        <div style={{ height: 12 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn kind="ghost" full onClick={() => setShowBonusPlan(true)}>Planifier bonus</Btn>
          <Btn full size="lg" onClick={() => onStartMatch(opp.id)}>Voir le match</Btn>
        </div>
      </Surface>

      <Sheet open={showBonusPlan} onClose={() => setShowBonusPlan(false)} title="Bonus pour le prochain match">
        <MatchBonusPicker team={youTeam} value={draftBonus} onChange={setDraftBonus} />
        <div style={{ height: 12 }} />
        <Btn full onClick={() => { onPlanBonus(draftBonus); setShowBonusPlan(false); }}>Enregistrer</Btn>
        {plannedBonus && (
          <Btn kind="ghost" full style={{ marginTop: 8 }} onClick={() => { onPlanBonus(null); setDraftBonus(null); setShowBonusPlan(false); }}>Retirer le bonus planifié</Btn>
        )}
      </Sheet>

      {/* ── Performances temps réel ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase' }}>Performances en temps réel</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff3b5c', boxShadow: '0 0 8px #ff3b5c' }} />
          <span style={{ fontSize: 10, fontWeight: 800, color: '#ff6b8a', fontFamily: 'Archivo,sans-serif', letterSpacing: 0.5 }}>LIVE</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 6, marginBottom: 8, scrollSnapType: 'x mandatory' }}>
        {livePlayers.map((p, i) => (
          <div key={p.id} style={{ flexShrink: 0, scrollSnapAlign: 'start', position: 'relative' }}>
            <PlayerCard player={p} w={108} interactive={false} flippable={false} cardStyle={cardStyle} />
            {p.boost && (
              <div style={{
                position: 'absolute', top: 6, right: 6, display: 'flex', alignItems: 'center', gap: 2,
                background: 'rgba(50,200,112,0.2)', border: '1px solid rgba(50,200,112,0.5)',
                borderRadius: 999, padding: '2px 7px', fontSize: 10, fontWeight: 900, color: C.lime,
                fontFamily: 'Archivo,sans-serif',
              }}>▲ +{p.boost.amount}</div>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 16 }}>
        {livePlayers.map((_, i) => (
          <div key={i} style={{ width: i === slide % livePlayers.length ? 18 : 6, height: 6, borderRadius: 999, background: i === slide % livePlayers.length ? C.acc : C.line, transition: 'all .3s' }} />
        ))}
      </div>

      {/* ── Promo pack élite ── */}
      <Surface onClick={onOpenShop} style={{
        padding: 14, marginBottom: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
        background: 'linear-gradient(120deg, rgba(168,85,247,0.12), rgba(201,146,46,0.10))',
        borderColor: 'rgba(168,85,247,0.35)', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: -10, top: -10, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,146,46,0.2), transparent 70%)' }} />
        <div style={{
          width: 56, height: 72, borderRadius: 10, flexShrink: 0,
          background: 'linear-gradient(155deg, #2a1050, #140828)',
          border: '1.5px solid rgba(168,85,247,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(168,85,247,0.35)',
        }}>
          <HexBallIcon size={28} />
        </div>
        <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
          <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 14, color: '#d8b4fe', letterSpacing: 0.5 }}>PACK ÉLITE</div>
          <div style={{ color: C.mut, fontSize: 11.5, marginTop: 3, lineHeight: 1.35 }}>3 joueurs · 1 choix · à prix réduit</div>
        </div>
        <Btn size="sm" kind="ghost" style={{ flexShrink: 0, position: 'relative' }}>Découvrir</Btn>
      </Surface>

      <Sheet open={showStandings} onClose={() => setShowStandings(false)} title="Classement">
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
        <div style={{ height: 12 }} />
        <Btn full kind="ghost" onClick={() => { setShowStandings(false); onOpenMarket(); }}>Aller au marché</Btn>
      </Sheet>
    </div>
  );
}

// ─── Create league flow (legacy — used by setup) ───
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
