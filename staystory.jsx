// StayStory — In-Page-App (Grundgerüst v5)
const SS_STORIES = [
  { id: 'chalet', label: 'Ihr Chalet', icon: <svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg> },
  { id: 'lage', label: 'Lage', icon: <svg viewBox="0 0 24 24"><path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" /><circle cx="12" cy="11" r="2.2" /></svg> },
  { id: 'bergbahn', label: 'Bergbahn Inklusive', icon: <svg viewBox="0 0 24 24"><path d="M3 5h18M12 3v2M7 6l-1 3h12l-1-3" /><path d="M6 9h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" /></svg> },
  { id: 'lade', label: 'Ladesäule', icon: <svg viewBox="0 0 24 24"><path d="M13 2 6 13h5l-1 9 7-11h-5l1-9Z" /></svg> },
  { id: 'ski', label: 'Ski-/Fahrradraum', icon: <svg viewBox="0 0 24 24"><circle cx="5.5" cy="17.5" r="3.2" /><circle cx="18.5" cy="17.5" r="3.2" /><path d="M5.5 17.5 9 10.5h6.5M9 10.5l3.5 7 3-7.5M14 8h2.5M15.5 8l3 9.5" /></svg> }
];

const SS_APT = {
  ifen: {
    stories: [
      { id: 'wohnen', label: 'Wohnen', front: '#4A5D3A', video: 'https://iframe.mediadelivery.net/embed/745048/9f48f0dc-437f-414a-a5ae-dc9915709c1e?autoplay=true&loop=true&muted=true&preload=true&responsive=true', poster: 'https://vz-824476f1-c1c.b-cdn.net/9f48f0dc-437f-414a-a5ae-dc9915709c1e/thumbnail.jpg', hand: 'Altholz & warmes Licht', h: 'Wohnen', p: 'Großzügiger Wohn-Essbereich mit Altholz, Sitzecke und Smart-TV. Auf 63 m² haben Sie zu vier Personen wirklich Platz — auch an Regentagen.', icon: <svg viewBox="0 0 24 24"><path d="M4 11 V18 H20 V11 M3 11 H21 M6 11 V8 a2 2 0 0 1 2-2 h8 a2 2 0 0 1 2 2 v3" /></svg> },
      { id: 'schlafen', label: 'Schlafen', front: '#3f5233', hand: 'Zwei Schlafzimmer', h: 'Schlafen', p: 'Zwei separate Schlafzimmer mit Doppelbett und zwei Einzelbetten — ideal für Familien. Verdunkelung und hochwertige Matratzen in beiden Räumen.', icon: <svg viewBox="0 0 24 24"><path d="M3 18 V9 a2 2 0 0 1 2-2 h14 a2 2 0 0 1 2 2 V18 M3 14 H21 M3 18 v2 M21 18 v2" /></svg> },
      { id: 'kochen', label: 'Kochen', front: '#5a6b47', hand: 'Voll ausgestattet', h: 'Kochen', p: 'Moderne Küche mit Induktion, Backofen und Spülmaschine, dazu ein großer Esstisch für alle — vom ersten Kaffee bis zum Abendessen.', icon: <svg viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2 M7 2v20 M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z M21 15v7" /></svg> },
      { id: 'ausblick', label: 'Ausblick', front: '#4A5D3A', hand: 'Große Terrasse zum Garten', h: 'Ausblick', p: 'Südost-Terrasse mit direktem Zugang zum Garten — Morgensonne beim Frühstück und Blick in die Allgäuer Berge.', icon: <svg viewBox="0 0 24 24"><path d="M3 18 L9 8 L13 14 L17 6 L21 18 Z" /></svg> },
      { id: 'extras', label: 'Extras', front: '#3f5233', hand: 'Alles inklusive', h: 'Extras', p: 'Dazu alles, was Ihren Aufenthalt leichter macht:', chips: ['Codeschloss', 'E-Ladestation', 'Ski-/Fahrradraum', 'Bergbahn Inklusive'], icon: <svg viewBox="0 0 24 24"><path d="M12 3l2.5 5.3 5.5.8-4 4 1 5.9-5-2.8-5 2.8 1-5.9-4-4 5.5-.8Z" /></svg> }
    ]
  },
  gaisberg: {
    stories: [
      { id: 'wohnen', label: 'Wohnen', front: '#4A5D3A', hand: 'Altholz & warmes Licht', h: 'Wohnen', p: 'Offener Wohnbereich mit viel Altholz, gemütlicher Sitzecke und Smart-TV. Auf 44 m² finden Sie alles, was Sie für entspannte Tage brauchen.', icon: <svg viewBox="0 0 24 24"><path d="M4 11 V18 H20 V11 M3 11 H21 M6 11 V8 a2 2 0 0 1 2-2 h8 a2 2 0 0 1 2 2 v3" /></svg> },
      { id: 'schlafen', label: 'Schlafen', front: '#3f5233', hand: 'Ruhige Lage im Erdgeschoss', h: 'Schlafen', p: 'Das Schlafzimmer mit Doppelbett liegt zur ruhigen Seite. Verdunkelung und hochwertige Matratzen sorgen für erholsamen Schlaf.', icon: <svg viewBox="0 0 24 24"><path d="M3 18 V9 a2 2 0 0 1 2-2 h14 a2 2 0 0 1 2 2 V18 M3 14 H21 M3 18 v2 M21 18 v2" /></svg> },
      { id: 'kochen', label: 'Kochen', front: '#5a6b47', hand: 'Voll ausgestattet', h: 'Kochen', p: 'Moderne Küche mit Induktion, Spülmaschine und allem, was Selbstversorger brauchen — vom ersten Kaffee bis zum Abendessen.', icon: <svg viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2 M7 2v20 M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z M21 15v7" /></svg> },
      { id: 'ausblick', label: 'Ausblick', front: '#4A5D3A', hand: 'Terrasse mit Gartenzugang', h: 'Ausblick', p: 'Große West-Terrasse mit direktem Zugang zum Garten — perfekt für die Abendsonne mit Blick in die Allgäuer Berge.', icon: <svg viewBox="0 0 24 24"><path d="M3 18 L9 8 L13 14 L17 6 L21 18 Z" /></svg> },
      { id: 'extras', label: 'Extras', front: '#3f5233', hand: 'Alles inklusive', h: 'Extras', p: 'Dazu alles, was Ihren Aufenthalt leichter macht:', chips: ['Codeschloss', 'E-Ladestation', 'Ski-/Fahrradraum', 'Bergbahn Inklusive'], icon: <svg viewBox="0 0 24 24"><path d="M12 3l2.5 5.3 5.5.8-4 4 1 5.9-5-2.8-5 2.8 1-5.9-4-4 5.5-.8Z" /></svg> }
    ]
  }
};

function SSVideo({ src, poster, full }) {
  const wrapRef = React.useRef(null);
  const [ar, setAr] = React.useState(9 / 16);
  const [box, setBox] = React.useState(null);
  const [cover, setCover] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setCover(false), 1800);
    return () => clearTimeout(t);
  }, [src]);
  React.useEffect(() => {
    if (!poster) return;
    const i = new Image();
    i.onload = () => { if (i.naturalWidth && i.naturalHeight) setAr(i.naturalWidth / i.naturalHeight); };
    i.src = poster;
  }, [poster]);
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const calc = () => {
      const w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      const cAR = w / h;
      let bw, bh;
      if (full) { if (cAR > ar) { bh = h; bw = h * ar; } else { bw = w; bh = w / ar; } }
      else { if (cAR > ar) { bw = w; bh = w / ar; } else { bh = h; bw = h * ar; } }
      setBox({ width: Math.ceil(bw) + 'px', height: Math.ceil(bh) + 'px' });
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ar, full]);
  return (
    <div className="ss2-vidwrap" ref={wrapRef}>
      <iframe className="ss2-stage-video" src={src} loading="eager" allow="autoplay; encrypted-media" title="Video" tabIndex="-1" style={box}></iframe>
      <div className={"ss2-vidcover" + (cover ? "" : " gone")} style={poster ? { backgroundImage: 'url(' + poster + ')' } : null}></div>
    </div>);
}

function SSAptScreen({ w, onBack, full, setFull }) {
  const conf = SS_APT[w.id];
  const [sid, setSid] = React.useState(conf.stories[0].id);
  const st = conf.stories.find((s) => s.id === sid);
  return (
    <div className="ss2-scroll">
      <button className="ss2-back" onClick={onBack}>← Wohnungen</button>
      <div className={"ss2-stage" + (full ? " is-full" : "")}>
        {st.video ? <SSVideo key={st.id} src={st.video} poster={st.poster} full={full} /> : <StayPano frontFill={st.front} />}
        <div className="ss2-stage-scrim"></div>
        <div className="ss2-stage-tag">
          <div className="ss2-hand">{st.label}</div>
          <div className="ss2-stage-name">Wohnung {w.name}</div>
        </div>
        {!st.video && <div className="ss2-stage-note">Immersives Video — folgt</div>}
        {!full && <button className="ss2-fullscreen" onClick={() => setFull(true)} aria-label="Vollbild">
          <svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
        </button>}
        {full && <button className="ss2-full-x" onClick={() => setFull(false)} aria-label="Vollbild schließen">×</button>}
      </div>
      <div className="ss2-stories">
        {conf.stories.map((s) =>
        <button key={s.id} className={"ss2-story" + (sid === s.id ? " on" : "")} onClick={() => setSid(s.id)}>
            <span className="ss2-story-ring"><span className="ss2-story-icon">{s.icon}</span></span>
            <span className="ss2-story-lbl">{s.label}</span>
          </button>
        )}
      </div>
      <div className="ss2-body">
        <h3>{st.h}</h3>
        <div className="ss2-hand ss2-body-sub">{st.hand}</div>
        <p>{st.p}</p>
        {st.chips && <div className="ss2-chips">{st.chips.map((c) => <span key={c}>{c}</span>)}</div>}
        <p className="ss2-apt-meta">{w.meta}</p>
      </div>
    </div>);
}

const SS_TI = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  rain: '<path d="M7 15a4 4 0 0 1 .5-8 5 5 0 0 1 9.3-1A3.5 3.5 0 0 1 17 15Z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',
  snow: '<path d="M12 2v20M3 7l18 10M21 7L3 17"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/>',
  family: '<circle cx="8" cy="6" r="2.4"/><circle cx="16" cy="7" r="2"/><path d="M4 20v-4a4 4 0 0 1 8 0v4M13 20v-3a3 3 0 0 1 6 0v3"/>',
  coffee: '<path d="M4 8h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z"/><path d="M16 9h2a2 2 0 0 1 0 4h-2"/><path d="M7 2v2M11 2v2"/>',
  cablecar: '<path d="M3 5h18M12 3v2M7 6l-1 3h12l-1-3"/><path d="M6 9h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/>',
  mountain: '<path d="M3 20l6-12 4 7 2-3 6 8Z"/>',
  fork: '<path d="M3 2v7c0 1.1.9 2 2 2a2 2 0 0 0 2-2V2M5 11v9M16 14V2a4 4 0 0 0-3 4v5c0 1 .8 2 2 2h1Zm0 0v8"/>',
  drop: '<path d="M12 3s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10Z"/>',
  hut: '<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
  stars: '<path d="M18 4a7 7 0 1 0 2.5 8.5A5.5 5.5 0 0 1 18 4Z"/><path d="M6 5l.6 1.5L8 7l-1.4.6L6 9l-.6-1.4L4 7l1.4-.5Z"/>',
  win: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M4 12h16"/>',
  waves: '<path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
  home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/>',
  pool: '<path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M6 14V6a2 2 0 0 1 4 0M14 14V6a2 2 0 0 1 4 0"/>',
  pizza: '<path d="M12 3 3 20l9-3 9 3Z"/><path d="M11 10h.01M9 14h.01M14 14h.01"/>'
};
const SSIcon = ({ k }) => <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: SS_TI[k] || '' }} />;
const SS_PH = {
  dawn: { node: '#e0a35f', mg: 'linear-gradient(135deg,#e9b985,#f2dcb4)' },
  day: { node: '#6f97ac', mg: 'linear-gradient(135deg,#9ec4d4,#c7d9c4)' },
  gold: { node: '#A8C617', mg: 'linear-gradient(135deg,#c5d668,#a8c617)' },
  dusk: { node: '#bb6f44', mg: 'linear-gradient(135deg,#b9764a,#6e4a37)' },
  night: { node: '#64708e', mg: 'linear-gradient(135deg,#3b3450,#222533)' },
  rain: { node: '#6f8a9c', mg: 'linear-gradient(135deg,#7e8b93,#aab4ba)' }
};
const SS_TAGE = [
  { id: 'aktiv', icon: 'sun', title: 'Aktiv am Berg', sub: 'Wandern, Gipfel, frische Luft',
    head: 'Ihr Tag am Fellhorngrat', intro: 'Vom ersten Kaffee auf dem Balkon bis zum Sternenhimmel — so fühlt sich ein Aktivtag bei uns an.',
    close: 'So fühlt sich ein Aktivtag bei uns an.',
    beats: [
      { ph: 'dawn', m: '360°', ic: 'sun', time: 'Morgens', h: 'Aufwachen', t: 'Sie wachen auf, kein Wecker. Der erste Kaffee auf dem Balkon, die Oberstdorfer Berge noch im Morgenlicht — und Sie wissen schon, wo es heute raufgeht.' },
      { ph: 'dawn', m: 'Foto', ic: 'coffee', time: 'Morgens', h: 'Frühstück', t: 'In Ruhe in Ihrer eigenen Küche, so früh oder spät Sie mögen. Heute brauchen Sie Kraft.' },
      { ph: 'day', m: 'Foto', ic: 'cablecar', time: 'Vormittag', h: 'Aufbruch', t: 'Ihr Bergbahnticket liegt schon bereit — von Mai bis Oktober inklusive. Rauf mit der Bahn, und vor Ihnen öffnet sich der Grat.' },
      { ph: 'day', m: 'Video', ic: 'mountain', time: 'Mittags', h: 'Am Fellhorngrat', t: 'Links und rechts fällt die Welt ab, vor Ihnen Gipfel bis zum Horizont. Bei jedem Schritt genau der Blick, für den Sie gekommen sind.' },
      { ph: 'gold', m: 'Foto', ic: 'fork', time: 'Mittags', h: 'Brotzeit oben', t: 'Eine Pause am Grat, die Beine baumeln überm Tal, ein Stück Bergkäse. Niemand, der Sie drängt.' },
      { ph: 'gold', m: '360°', ic: 'drop', time: 'Nachmittag', h: 'Heimkehr & Dusche', t: 'Zurück im Chalet, müde Beine — und dann unter die Regendusche. Der erste richtig gute Moment des Feierabends.' },
      { ph: 'dusk', m: 'Foto', ic: 'hut', time: 'Abends', h: 'Alpe Dornach', t: 'Am Abend zur Alpe Dornach: deftig essen, wo der Tag noch nachklingt und die Sonne tief über den Wiesen steht.' },
      { ph: 'night', m: 'Foto', ic: 'stars', time: 'Nachts', h: 'Ausklang', t: 'Zurück auf dem Balkon, die Berge nur noch Schatten, der Himmel voller Sterne. Morgen vielleicht der nächste Grat.' }
    ] },
  { id: 'regen', icon: 'rain', title: 'Der Regentag', sub: 'Und trotzdem ein guter Tag',
    head: 'Der Regentag', intro: 'Schlechtes Wetter? Bei uns wird auch das ein Tag, an den Sie sich gern erinnern.',
    close: 'Auch bei Regen wird es ein guter Tag bei uns.',
    beats: [
      { ph: 'rain', m: 'Foto', ic: 'win', time: 'Morgens', h: 'Regen am Fenster', t: 'Es regnet. Und genau heute ist das kein Problem, sondern ein anderer, schöner Tag. Kaffee, das Trommeln am Fenster, kein Stress.' },
      { ph: 'rain', m: 'Foto', ic: 'coffee', time: 'Morgens', h: 'Langes Frühstück', t: 'Niemand muss los. Sie bleiben im Warmen, so lange Sie mögen.' },
      { ph: 'rain', m: 'Video', ic: 'waves', time: 'Vormittag', h: 'Breitachklamm', t: 'Die Breitachklamm liegt quasi vor Ihrer Haustür — und bei Regen tost sie am eindrucksvollsten. Das Wasser donnert, der Fels glänzt nass. Gerade weil es schüttet, ist es magisch.' },
      { ph: 'rain', m: 'Foto', ic: 'home', time: 'Mittags', h: 'Kurz nach Hause', t: 'Zurück ins Chalet, nasse Jacke weg, kurz aufwärmen. Dann geht es weiter — trocken diesmal.' },
      { ph: 'day', m: 'Foto', ic: 'pool', time: 'Nachmittag', h: 'Oberstdorf Therme', t: 'Mit der Gästekarte bequem hin: warmes Wasser, draußen Regen, drinnen Dampf und Ruhe. Stunden, in denen die Zeit egal ist.' },
      { ph: 'dusk', m: 'Foto', ic: 'pizza', time: 'Abends', h: 'Ai Quattro Canti', t: 'Zum Ausklang in die Pizzeria Ai Quattro Canti in Oberstdorf: knusprige Pizza, ein Glas Wein, warm und satt — während es draußen weiterregnet.' },
      { ph: 'night', m: 'Foto', ic: 'stars', time: 'Nachts', h: 'Heimkommen', t: 'Trockene Socken, vielleicht ein Film. Ein Regentag, der sich am Ende wie ein Geschenk angefühlt hat.' }
    ] },
  { id: 'langlauf', icon: 'snow', title: 'Langlauf', sub: 'Loipe direkt ab dem Garten', soon: true },
  { id: 'zuzweit', icon: 'heart', title: 'Zu zweit', sub: 'Ruhe, Genuss, Zeit füreinander', soon: true },
  { id: 'familie', icon: 'family', title: 'Mit der Familie', sub: 'Für Große und Kleine', soon: true }
];

function SSTag() {
  const [day, setDay] = React.useState(null);
  if (day === null) return (
    <div className="ss2-scroll">
      <div className="ss2-whead">
        <div className="ss2-hand">Ihr Tag bei uns</div>
        <h3>Wie sieht Ihr<br />perfekter Tag aus?</h3>
        <p className="ss2-whead-sub">Wählen Sie, wofür Sie kommen — wir nehmen Sie mit, vom Morgen bis in die Nacht.</p>
      </div>
      <div className="ss2-personas">
        {SS_TAGE.map((p, i) =>
        <button key={p.id} className={"ss2-persona" + (p.soon ? " soon" : "")} onClick={() => { if (!p.soon) setDay(i); }}>
            <span className="ss2-persona-pic"><SSIcon k={p.icon} /></span>
            <span className="ss2-persona-tx"><b>{p.title}</b><span>{p.sub}</span></span>
            {p.soon ? <span className="ss2-persona-soon">bald</span> : <span className="ss2-persona-go">→</span>}
          </button>
        )}
      </div>
    </div>);
  const p = SS_TAGE[day];
  return (
    <div className="ss2-scroll">
      <button className="ss2-back" onClick={() => setDay(null)}>← Andere Tage</button>
      <div className="ss2-whead" style={{ paddingTop: 0 }}>
        <div className="ss2-hand">Ihr Tag</div>
        <h3>{p.head}</h3>
        <p className="ss2-whead-sub">{p.intro}</p>
      </div>
      <div className="ss2-timeline">
        {p.beats.map((b, i) => {
          const ph = SS_PH[b.ph] || SS_PH.day;
          return (
            <div className="ss2-beat" key={i} style={{ '--node': ph.node }}>
              <span className="ss2-beat-node"></span>
              <div className="ss2-beat-time">{b.time}</div>
              <div className="ss2-beat-media" style={{ background: ph.mg }}>
                <span className="ss2-beat-micon"><SSIcon k={b.ic} /></span>
                <span className="ss2-beat-mtype">{b.m}</span>
              </div>
              <h4>{b.h}</h4>
              <p>{b.t}</p>
            </div>);
        })}
      </div>
      <div className="ss2-day-close"><b>{p.close}</b></div>
    </div>);
}

function SSStay() {
  const [phase, setPhase] = React.useState('anreise');
  const [copied, setCopied] = React.useState(false);
  const copyWifi = () => {
    try { navigator.clipboard.writeText('alpenchalet2026'); } catch (e) {}
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };
  return (
    <>
      <div className="ss2-subtabs">
        <button className={phase === 'anreise' ? 'on' : ''} onClick={() => setPhase('anreise')}>Anreise</button>
        <button className={phase === 'aufenthalt' ? 'on' : ''} onClick={() => setPhase('aufenthalt')}>Aufenthalt</button>
        <button className={phase === 'abreise' ? 'on' : ''} onClick={() => setPhase('abreise')}>Abreise</button>
      </div>
      {phase === 'anreise' && <div className="ss2-scroll">
        <div className="ss2-whead">
          <div className="ss2-hand">Willkommen, Familie Meier</div>
          <h3>Ihre Anreise</h3>
        </div>
        <div className="ss2-cards">
          <div className="ss2-info">
            <b>Adresse</b>
            <p>Rohrmooser Straße 22<br />87561 Oberstdorf-Tiefenbach</p>
            <a className="ss2-info-btn" href="https://maps.apple.com/?q=Rohrmooser+Stra%C3%9Fe+22,+87561+Oberstdorf" target="_blank" rel="noopener">Route öffnen</a>
          </div>
          <div className="ss2-info ss2-info-accent">
            <b>Codeschloss</b>
            <p>Ihr Zugangscode ab Anreisetag, 15:00 Uhr:</p>
            <div className="ss2-code">4 7 1 1 #</div>
            <span className="ss2-info-note">Gilt für Haustür und Wohnung Gaisberg</span>
          </div>
          <div className="ss2-info">
            <b>Parken</b>
            <p>Ihr Stellplatz Nr. 3 direkt am Haus, teils überdacht. E-Ladestation daneben — Kabel liegt bereit.</p>
          </div>
          <div className="ss2-info">
            <b>Check-in</b>
            <p>Ab 15:00 Uhr, ganz ohne Schlüsselübergabe. Bei Fragen sind wir jederzeit erreichbar.</p>
          </div>
        </div>
      </div>}
      {phase === 'aufenthalt' && <div className="ss2-scroll">
        <div className="ss2-whead">
          <div className="ss2-hand">Schön, dass Sie da sind</div>
          <h3>Ihr Aufenthalt</h3>
        </div>
        <div className="ss2-cards">
          <div className="ss2-info ss2-info-accent">
            <b>WLAN</b>
            <p>Netz: <strong>Leos-Alpenchalet</strong><br />Passwort: <strong>alpenchalet2026</strong></p>
            <button className="ss2-info-btn" onClick={copyWifi}>{copied ? 'Kopiert ✓' : 'Passwort kopieren'}</button>
          </div>
          <div className="ss2-info">
            <b>Bergbahn Inklusive</b>
            <p>Ihre Tickets liegen auf dem Esstisch. Alle 8 Bahnen in Oberstdorf &amp; Kleinwalsertal, täglich 8:30–16:30 Uhr.</p>
          </div>
          <div className="ss2-info">
            <b>Brötchenservice</b>
            <p>Bis 18:00 Uhr bestellen — frisch geliefert ab 7:30 Uhr vor Ihre Tür.</p>
          </div>
          <div className="ss2-info">
            <b>Tipp für morgen</b>
            <p>Es wird sonnig — perfekt für das Rohrmoostal, direkt ab Haustür. Bei Regen: Breitachklamm (30 Gehminuten), dann Oberstdorf Therme.</p>
          </div>
        </div>
      </div>}
      {phase === 'abreise' && <div className="ss2-scroll">
        <div className="ss2-whead">
          <div className="ss2-hand">Bis zum nächsten Mal</div>
          <h3>Ihre Abreise</h3>
        </div>
        <div className="ss2-cards">
          <div className="ss2-info">
            <b>Check-out bis 10:00 Uhr</b>
            <p>Geschirrspüler starten, Fenster schließen, Tür einfach zuziehen — das war's schon.</p>
          </div>
          <div className="ss2-info">
            <b>Müll</b>
            <p>Restmüll und Gelber Sack in die Tonnen am Schuppen, Glas bitte mitnehmen oder zum Container an der Dorfstraße.</p>
          </div>
          <div className="ss2-info ss2-info-accent">
            <b>Hat es Ihnen gefallen?</b>
            <p>Über eine Bewertung freuen wir uns sehr — und beim nächsten Mal buchen Sie am besten direkt bei uns.</p>
            <a className="ss2-info-btn" href="#bewertungen" target="_blank" rel="noopener">Bewertung schreiben</a>
          </div>
        </div>
      </div>}
    </>);
}

function StayStoryIntro({ onDone }) {
  React.useEffect(() => {
    const t = setTimeout(onDone, 2100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="ss2-intro">
      <img src="img/logo.png" alt="Leos Alpenchalet" className="ss2-intro-logo" />
      <div className="ss2-intro-sub">Digitale Hausführung</div>
    </div>);
}

function StayStoryApp({ onClose }) {
  const [mode, setMode] = React.useState('unterkunft');
  const [tab, setTab] = React.useState('ueberblick');
  const [story, setStory] = React.useState(null);
  const [full, setFull] = React.useState(false);
  const [persons, setPersons] = React.useState(null);
  const [apt, setApt] = React.useState(null);
  React.useEffect(() => {
    if (!full) return;
    const key = (e) => { if (e.key === 'Escape') { e.stopPropagation(); setFull(false); } };
    window.addEventListener('keydown', key, true);
    return () => window.removeEventListener('keydown', key, true);
  }, [full]);
  return (
    <div className="ss2-app">
      <div className="ss2-topbar">
        <div className="ss2-modes">
          <button className={mode === 'unterkunft' ? 'on' : ''} onClick={() => setMode('unterkunft')}>Unterkunft</button>
          <button className={mode === 'tag' ? 'on' : ''} onClick={() => setMode('tag')}>Ihr Tag</button>
          <button className={mode === 'stay' ? 'on' : ''} onClick={() => setMode('stay')}>Ihr Aufenthalt</button>
        </div>
        <button className="ss2-x" onClick={onClose} aria-label="StayStory schließen">×</button>
      </div>
      {mode === 'unterkunft' && <div className="ss2-subtabs">
        <button className={tab === 'ueberblick' ? 'on' : ''} onClick={() => setTab('ueberblick')}>Überblick</button>
        <button className={tab === 'wohnungen' ? 'on' : ''} onClick={() => { setTab('wohnungen'); setApt(null); }}>Wohnungen</button>
      </div>}
      {mode === 'unterkunft' && tab === 'ueberblick' && <div className="ss2-scroll">
        <div className={"ss2-stage" + (full ? " is-full" : "")}>
          <StayPano frontFill="#3f5233" />
          <div className="ss2-stage-scrim"></div>
          <div className="ss2-stage-tag">
            <div className="ss2-hand">{story ? SS_STORIES.find((s) => s.id === story).label : 'Willkommen'}</div>
            <div className="ss2-stage-name">Leos Alpenchalet</div>
          </div>
          <div className="ss2-stage-note">Immersives Video — folgt</div>
          {!full && <button className="ss2-fullscreen" onClick={() => setFull(true)} aria-label="Vollbild">
            <svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
          </button>}
          {full && <button className="ss2-full-x" onClick={() => setFull(false)} aria-label="Vollbild schließen">×</button>}
        </div>
        <div className="ss2-stories">
          {SS_STORIES.map((s) =>
          <button key={s.id} className={"ss2-story" + (story === s.id ? " on" : "")} onClick={() => setStory(s.id)}>
              <span className="ss2-story-ring"><span className="ss2-story-icon">{s.icon}</span></span>
              <span className="ss2-story-lbl">{s.label}</span>
            </button>
          )}
        </div>
        <div className="ss2-body">
          <h3>Ankommen &amp; Durchatmen</h3>
          <div className="ss2-hand ss2-body-sub">Alpenchalet in ruhiger Lage</div>
          <p>In erhöhter Ortsrandlage von Tiefenbach, mit freiem Blick ins Alpenpanorama. Sechs neu renovierte Wohnungen, große Balkone, viel Altholz — und die Breitachklamm vor der Haustür.</p>
        </div>
      </div>}
      {mode === 'unterkunft' && tab === 'wohnungen' && persons === null && <div className="ss2-ask">
        <div className="ss2-hand">Wohnungen</div>
        <h3>Zu wie vielen Personen<br />kommen Sie?</h3>
        <p>Wir zeigen Ihnen die Wohnungen, die zu Ihnen passen.</p>
        <div className="ss2-ask-grid">
          {[1, 2, 3, 4].map((n) =>
          <button key={n} onClick={() => setPersons(n)}>
              <b>{n}</b><span>{n === 1 ? 'Person' : 'Personen'}</span>
            </button>
          )}
        </div>
      </div>}
      {mode === 'unterkunft' && tab === 'wohnungen' && persons !== null && apt !== null && <SSAptScreen w={apt} onBack={() => setApt(null)} full={full} setFull={setFull} />}
      {mode === 'unterkunft' && tab === 'wohnungen' && persons !== null && apt === null && <div className="ss2-scroll">
        <div className="ss2-whead">
          <div className="ss2-hand">{persons >= 4 ? 'Für Familien' : 'Passend für Sie'}</div>
          <h3>Welche passt zu Ihnen?</h3>
          <button className="ss2-persons" onClick={() => setPersons(null)}>{persons} {persons === 1 ? 'Person' : 'Personen'} · ändern</button>
        </div>
        <div className="ss2-wlist">
          {window.LEOS_DATA.wohnungen.filter((w) => persons >= 4 ? (w.id === 'ifen' || w.id === 'himmeleck') : (w.id !== 'ifen' && w.id !== 'himmeleck')).map((w) =>
          <button key={w.id} className="ss2-wcard" onClick={() => { if (SS_APT[w.id]) setApt(w); }}>
              <span className="ss2-wcard-img"><img src={w.img} alt={"Wohnung " + w.name} /></span>
              <span className="ss2-wcard-tx">
                <span className="ss2-wcard-eyebrow">{w.eyebrow}</span>
                <b>{w.name}</b>
                <span className="ss2-wcard-tag">{w.tagline}</span>
                <span className="ss2-wcard-meta">{w.meta}</span>
              </span>
              <span className="ss2-wcard-go">→</span>
            </button>
          )}
        </div>
      </div>}
      {mode === 'stay' && <SSStay />}
      {mode === 'tag' && <SSTag />}
      {mode !== 'stay' && <div className="ss2-cta">
        <div className="ss2-cta-meta"><b>ab 189 €</b><span>pro Nacht · inkl. Endreinigung</span></div>
        <a href="#buchen" onClick={onClose}>Diese Wohnung buchen</a>
      </div>}
      {mode === 'stay' && <div className="ss2-cta">
        <div className="ss2-cta-meta"><b>Fragen?</b><span>Wir sind jederzeit für Sie da</span></div>
        <a href="tel:+4983226067370">Gastgeber anrufen</a>
      </div>}
    </div>);
}

function StayStoryOverlay() {
  const [phase, setPhase] = React.useState(null);
  React.useEffect(() => {
    const open = () => setPhase('intro');
    const key = (e) => { if (e.key === 'Escape') setPhase(null); };
    window.addEventListener('staystory:open', open);
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener('staystory:open', open); window.removeEventListener('keydown', key); };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = phase ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [phase]);
  if (!phase) return null;
  return (
    <div className="ss2-ov">
      <div className="ss2-phone">
        {phase === 'intro' ? <StayStoryIntro onDone={() => setPhase('app')} /> : <StayStoryApp onClose={() => setPhase(null)} />}
      </div>
    </div>);
}
Object.assign(window, { StayStoryOverlay });
