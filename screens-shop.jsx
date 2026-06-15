// screens-shop.jsx — boutique: crédits €, packs 🎴, bonus jetons, échanges

const CREDIT_PACKS = [
  { c: 120,  p: '1,99 €',  icon: 'jeton' },
  { c: 550,  p: '7,99 €',  icon: 'credits', tag: 'Populaire' },
  { c: 1250, p: '15,99 €', icon: 'gem', tag: '+25%' },
  { c: 3000, p: '34,99 €', icon: 'crown', tag: 'Meilleure offre' },
];

const BONUSES = [
  { k: 'pen',    icon: 'target', name: 'Forcer un penalty',   desc: 'Transforme une de tes actions en penalty garanti.',      cost: 40, hot: true },
  { k: 'pick',   icon: 'dice',   name: 'Choix de moment',     desc: 'Choisis 1 de tes actions parmi 2 tirées au hasard.',     cost: 18 },
  { k: 'team',   icon: 'chart',  name: "Boost d'équipe",       desc: "+4 sur une stat d'équipe, pour 1 match.",                cost: 22 },
  { k: 'player', icon: 'star',   name: 'Boost joueur',         desc: '+6 sur une stat d\'un joueur, pour 1 match.',            cost: 14 },
];

function ShopScreen({ cardStyle, profile, onOpenPack }) {
  const [tab, setTab] = React.useState('credits');
  const [credits, setCredits] = React.useState(340);
  const [jetons, setJetons] = React.useState(46);
  const [toast, setToast] = React.useState(null);
  const isDraft = !profile?.marketComplete;

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(null), 1800); };

  const buyPack = (packId) => {
    const def = MARKET_PACK_DEFS[packId];
    if (!def) return;
    if (credits < def.price) { flash('Crédits insuffisants !'); return; }
    setCredits(c => c - def.price);
    onOpenPack(packId, 'shop', (result) => {
      if (Array.isArray(result) && result[0]?.in) {
        applySquadSwaps(result);
        flash(result.length ? `${result.length} échange(s) effectué(s)` : 'Pack jeté');
      } else if (Array.isArray(result) && result.length) {
        flash(`${result.length} joueur(s) recruté(s)`);
      } else {
        flash('Pack jeté');
      }
    }, { flow: isDraft ? 'initial' : 'swap' });
  };

  return (
    <div>
      <PageHeader
        title="Boutique"
        pills={<><CreditPill value={credits} size="sm" /><JetonPill value={jetons} size="sm" /></>}
      />

      <Seg value={tab} onChange={setTab} options={[
        { v: 'credits', label: 'Crédits' },
        { v: 'packs',   label: 'Packs' },
        { v: 'bonus',   label: 'Bonus' },
        { v: 'trade',   label: 'Échanges' },
      ]} />
      <div style={{ height: 14 }} />

      {/* ── Crédits ── */}
      {tab === 'credits' && (
        <div>
          <div style={{ color: C.mut, fontSize: 12.5, marginBottom: 12 }}>Les crédits servent aux enchères du marché des transferts.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {CREDIT_PACKS.map(pk => (
              <Surface key={pk.c} style={{ padding: 16, textAlign: 'center', position: 'relative', borderColor: pk.tag === 'Meilleure offre' ? 'rgba(201,146,46,0.5)' : C.line, background: pk.tag === 'Meilleure offre' ? 'rgba(201,146,46,0.07)' : C.surf }}>
                {pk.tag && <div style={{ position: 'absolute', top: -9, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}><Chip color={pk.tag === 'Meilleure offre' ? C.gold : C.acc} solid>{pk.tag}</Chip></div>}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}><IconBadge name={pk.icon} size={48} iconSize={24} /></div>
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 900, fontSize: 22, color: C.gold, marginTop: 4 }}>{pk.c.toLocaleString('fr-FR')}</div>
                <div style={{ color: C.mut2, fontSize: 11, marginBottom: 12 }}>crédits</div>
                <Btn full size="sm" onClick={() => { setCredits(c => c + pk.c); flash(`+${pk.c} crédits ajoutés`); }}>{pk.p}</Btn>
              </Surface>
            ))}
          </div>
          <div style={{ textAlign: 'center', color: C.mut2, fontSize: 11, marginTop: 14 }}>Paiement sécurisé · achat simulé pour le prototype</div>
        </div>
      )}

      {/* ── Packs ── */}
      {tab === 'packs' && (
        <div>
          <Banner icon="cards" tint="gold" title="Packs Standard & Premium" body="Même sélection qu'à la création d'équipe. Après la ligue : échange avec ton effectif ou jette tout." />
          <MarketPackSection onBuyPack={buyPack} />
        </div>
      )}

      {/* ── Bonus jetons ── */}
      {tab === 'bonus' && (
        <div>
          <Banner icon="jeton" tint="cyan" title="Jetons de match" body={<>Les jetons se gagnent en remportant des matchs. Ils s'utilisent <b style={{ color: C.txt }}>uniquement</b> ici pour des bonus de match.</>} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {BONUSES.map(b => (
              <Surface key={b.k} style={{ padding: 13, display: 'flex', alignItems: 'center', gap: 13, borderColor: b.hot ? 'rgba(201,146,46,0.4)' : C.line }}>
                <IconBadge name={b.icon} size={46} iconSize={22} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>{b.name}{b.hot && <span style={{ color: C.acc, fontSize: 11 }}> · premium</span>}</div>
                  <div style={{ color: C.mut, fontSize: 12, lineHeight: 1.35 }}>{b.desc}</div>
                </div>
                <Btn size="sm" kind={b.hot ? 'pink' : 'primary'} disabled={jetons < b.cost} onClick={() => { setJetons(j => j - b.cost); flash(`${b.name} activé`); }}><JetonPill value={b.cost} size="sm" /></Btn>
              </Surface>
            ))}
          </div>
        </div>
      )}

      {/* ── Échanges ── */}
      {tab === 'trade' && <TradeTab cardStyle={cardStyle} flash={flash} />}

      {toast && (
        <div style={{ position: 'absolute', bottom: 96, left: 16, right: 16, zIndex: 300, background: C.bg2, border: '1px solid ' + C.line, borderRadius: 14, padding: '13px 16px', textAlign: 'center', fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14, boxShadow: '0 10px 30px rgba(0,0,0,0.5)', animation: 'sheetUp .3s' }}>{toast}</div>
      )}
    </div>
  );
}

function TradeTab({ cardStyle, flash }) {
  const [offers, setOffers] = React.useState([
    { id: 1, from: 'm3', give: 'p7',  want: 'p12', credits: 40  },
    { id: 2, from: 'm4', give: 'p11', want: 'p5',  credits: -20 },
  ]);
  const [compose, setCompose] = React.useState(false);
  return (
    <div>
      <div style={{ color: C.mut, fontSize: 12.5, marginBottom: 12 }}>Entre les matchs, échange des joueurs avec les autres managers (joueur + crédits).</div>
      <Btn full kind="pink" onClick={() => setCompose(true)}><GzIcon name="plus" size={16} color="#1a0010" /> Proposer un échange</Btn>
      <Section title="Offres reçues" />
      {offers.length === 0 && <div style={{ color: C.mut2, fontSize: 13, textAlign: 'center', padding: 20 }}>Aucune offre pour l'instant.</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {offers.map(o => {
          const mgr = MANAGERS.find(m => m.id === o.from);
          const give = byId(o.give), want = byId(o.want);
          if (!mgr || !give || !want) return null;
          return (
            <Surface key={o.id} style={{ padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Avatar mgr={mgr} size={28} />
                <div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 13 }}>{mgr.name} te propose</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <div style={{ textAlign: 'center' }}><MiniCard player={give} w={62} cardStyle={cardStyle} /><div style={{ fontSize: 10, color: C.lime, fontWeight: 800, marginTop: 4 }}>TU REÇOIS</div></div>
                <div style={{ textAlign: 'center' }}>
                  <GzIcon name="exchange" size={22} color={C.acc} />
                  {o.credits !== 0 && <div style={{ fontSize: 10.5, color: o.credits > 0 ? C.lime : C.pink, fontWeight: 800, marginTop: 4 }}>{o.credits > 0 ? '+' : ''}{o.credits}</div>}
                </div>
                <div style={{ textAlign: 'center' }}><MiniCard player={want} w={62} cardStyle={cardStyle} /><div style={{ fontSize: 10, color: C.pink, fontWeight: 800, marginTop: 4 }}>TU DONNES</div></div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                <Btn size="sm" kind="ghost" style={{ flex: 1 }} onClick={() => { setOffers(of => of.filter(x => x.id !== o.id)); flash('Offre refusée'); }}>Refuser</Btn>
                <Btn size="sm" style={{ flex: 1 }} onClick={() => { setOffers(of => of.filter(x => x.id !== o.id)); flash('Échange accepté'); }}>Accepter</Btn>
              </div>
            </Surface>
          );
        })}
      </div>
      <Sheet open={compose} onClose={() => setCompose(false)} title="Proposer un échange">
        <ComposeTrade onSend={() => { setCompose(false); flash('Offre envoyée'); }} cardStyle={cardStyle} />
      </Sheet>
    </div>
  );
}

function ComposeTrade({ onSend, cardStyle }) {
  const mine = (SQUADS.m1?.field || []).map(byId).filter(Boolean);
  const theirsMgr = MANAGERS.find(m => m.id === 'm2') || MANAGERS[1];
  const theirs = (SQUADS.m2?.field || []).map(byId).filter(Boolean);
  const [give, setGive] = React.useState(mine[0]?.id || '');
  const [want, setWant] = React.useState(theirs[0]?.id || '');
  const [credits, setCredits] = React.useState(0);
  if (!theirsMgr || !mine.length || !theirs.length) {
    return <Surface style={{ padding: 16, textAlign: 'center' }}><div style={{ color: C.mut }}>Effectif insuffisant pour proposer un échange.</div></Surface>;
  }
  const Row = ({ list, val, set, label, labelColor }) => (
    <div>
      <div style={{ fontSize: 12, fontWeight: 800, color: labelColor || C.mut, marginBottom: 8, fontFamily: 'Archivo,sans-serif' }}>{label}</div>
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
        {list.map(p => <MiniCard key={p.id} player={p} w={56} selected={val === p.id} onClick={() => set(p.id)} cardStyle={cardStyle} />)}
      </div>
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Avatar mgr={theirsMgr} size={28} /><div style={{ fontFamily: 'Archivo,sans-serif', fontWeight: 800, fontSize: 14 }}>Échange avec {theirsMgr.name}</div></div>
      <Row list={mine}   val={give} set={setGive} label="Tu donnes" labelColor={C.lime} />
      <Row list={theirs} val={want} set={setWant} label="Tu veux" labelColor={C.pink} />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 800, color: C.mut, marginBottom: 8, fontFamily: 'Archivo,sans-serif' }}><span>Crédits ajoutés</span><CreditPill value={credits} size="sm" /></div>
        <input type="range" min={0} max={150} step={10} value={credits} onChange={e => setCredits(+e.target.value)} className="gz-range" style={{ width: '100%' }} />
      </div>
      <Btn full size="lg" kind="pink" onClick={onSend}><GzIcon name="send" size={16} color="#1a0010" /> Envoyer l'offre</Btn>
    </div>
  );
}

Object.assign(window, { ShopScreen });
