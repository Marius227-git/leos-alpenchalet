// Leos Alpenchalet — components for Startseite (one file, all sections)
const D = window.LEOS_DATA;
const TRAMINO = "https://leos-alpenchalet.tramino.de/api/widgets/booking/";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="Leos Alpenchalet">
          <img src="img/logo.png" alt="Leos Alpenchalet" className="logo-img" />
        </a>
        <nav className="nav">
          <a href="#wohnungen">Wohnen</a>
          <a href="#tipps">Aktivitäten</a>
          <a href="#lage">Kontakt</a>
          <a href={TRAMINO} target="_blank" rel="noopener" className="nav-btn">Buchen</a>
        </nav>
      </div>
    </header>);

}

function Hero() {
  const h = D.hero;
  return (
    <section className="hero hero-full" id="top">
      <div className="hero-bg">
        <picture>
          <source media="(max-width: 720px)" srcSet="img/hero-haus-mobile.jpg" />
          <img src="img/hero-haus.jpg" alt="Leos Alpenchalet, Außenansicht in Tiefenbach" />
        </picture>
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-full-inner">
        <h1 className="hero-h1 hero-h1-full">
          <span className="hero-h1-line">Ihr Chalet zum</span>
          <span className="hero-h1-line"><em>Wohlfühlen</em></span>
        </h1>
        <p className="hero-sub hero-sub-light" style={{ color: "rgb(255, 255, 255)" }}>{h.sub}</p>
        <div className="hero-actions">
          <a href={TRAMINO} target="_blank" rel="noopener" className="btn-primary">{h.primary}</a>
          <a href="#wohnungen" className="btn-secondary-light" style={{ color: "rgb(255, 255, 255)", borderColor: "rgb(255, 255, 255)" }}>{h.secondary} →</a>
        </div>
      </div>
    </section>);

}

function HeaderScrollAware() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const btnRef = React.useRef(null);
  const [origin, setOrigin] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (menuOpen) {
      const sb = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (sb > 0) document.body.style.paddingRight = sb + 'px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [menuOpen]);

  const openMenu = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }
    setMenuOpen(true);
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={"header header-overlay" + (scrolled ? " header-scrolled" : "") + (menuOpen ? " header-menu-open" : "")}>
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label="Leos Alpenchalet" onClick={closeMenu}>
            <img src="img/logo-light.png" alt="Leos Alpenchalet" className="logo-img logo-img-light" />
            <img src="img/logo.png" alt="" aria-hidden="true" className="logo-img logo-img-dark" />
          </a>
          <nav className="nav">
            <a href="#wohnungen">Wohnen</a>
            <a href="#tipps">Aktivitäten</a>
            <a href="#lage">Kontakt</a>
            <a href={TRAMINO} target="_blank" rel="noopener" className="nav-btn">Buchen</a>
          </nav>
          <button
            ref={btnRef}
            className={"hamburger" + (menuOpen ? " is-open" : "")}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => menuOpen ? closeMenu() : openMenu()}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} origin={origin} onClose={closeMenu} />
    </>);

}

function MobileMenu({ open, origin, onClose }) {
  const [render, setRender] = React.useState(open);
  const [animOpen, setAnimOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setRender(true);
      // next frame: trigger transition from circle(0) to full
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimOpen(true)));
      return () => cancelAnimationFrame(id);
    } else {
      setAnimOpen(false);
      const t = setTimeout(() => setRender(false), 560);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!render) return null;

  // radius to cover from origin to furthest viewport corner
  const vw = window.innerWidth,vh = window.innerHeight;
  const dx = Math.max(origin.x, vw - origin.x);
  const dy = Math.max(origin.y, vh - origin.y);
  const r = Math.ceil(Math.sqrt(dx * dx + dy * dy)) + 40;

  const links = [
  { href: "#wohnungen", label: "Wohnen" },
  { href: "#hier-wohnen-sie", label: "Das Haus" },
  { href: "#tipps", label: "Aktivitäten" },
  { href: "#lage", label: "Anreise & Lage" },
  { href: "#faq", label: "Häufige Fragen" },
  { href: "#kontakt", label: "Kontakt" }];


  const handleClick = (e) => {
    onClose();
  };

  const clipStyle = {
    clipPath: animOpen ?
    `circle(${r}px at ${origin.x}px ${origin.y}px)` :
    `circle(0px at ${origin.x}px ${origin.y}px)`,
    WebkitClipPath: animOpen ?
    `circle(${r}px at ${origin.x}px ${origin.y}px)` :
    `circle(0px at ${origin.x}px ${origin.y}px)`
  };

  return (
    <div className={"mobile-menu" + (animOpen ? " is-open" : "")} style={clipStyle} role="dialog" aria-modal="true" aria-label="Hauptmenü">
      <div className="mobile-menu-inner">
        <nav className="mobile-menu-nav">
          {links.map((l, i) =>
          <a key={l.href} href={l.href} onClick={handleClick} style={{ transitionDelay: (animOpen ? 0.18 + i * 0.05 : 0) + 's' }}>
              <span className="mm-num">0{i + 1}</span>
              <span className="mm-label">{l.label}</span>
            </a>
          )}
        </nav>
        <div className="mobile-menu-foot">
          <a href={TRAMINO} target="_blank" rel="noopener" className="mobile-menu-cta" onClick={handleClick}>Jetzt buchen</a>
          <div className="mobile-menu-meta">
            <div>Rohrmooser Str. 22</div>
            <div>87561 Oberstdorf-Tiefenbach</div>
          </div>
        </div>
      </div>
    </div>);

}

function Trust() {
  const items = D.trust;
  // doubled list for seamless infinite scroll
  const renderItems = (keyPrefix) => items.map((it, i) =>
  <React.Fragment key={keyPrefix + i}>
      <span className="trust-item">
        {it.star && <span className="star">★</span>}
        {it.text}
      </span>
      <span className="trust-sep">·</span>
    </React.Fragment>
  );
  return (
    <section className="trust" aria-label="Auf einen Blick">
      <div className="trust-track">
        {renderItems('a')}
        {renderItems('b')}
      </div>
    </section>);

}

function Intro() {
  const i = D.intro;
  return (
    <section className="sec sec-altpapier" id="hier-wohnen-sie">
      <a href="#bergbahn" className="bergbahn-pin" aria-label="Bergbahn Unlimited — Ticket inklusive">
        <span className="bergbahn-pin-tape" aria-hidden="true"></span>
        <span className="bergbahn-pin-dot" aria-hidden="true"></span>
        <img src="img/bergbahn-unlimited.png" alt="Bergbahn Unlimited" />
        <span className="bergbahn-pin-caption">Mai – Okt. <em>inklusive</em></span>
      </a>
      <div className="container intro-grid">
        <div className="intro-text">
          <div className="eyebrow">{i.eyebrow}</div>
          <h2 className="h2 h2-logo-green">{i.h2Pre}<em>{i.h2Italic}</em>{i.h2Post}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{i.text}</p>
        </div>
        <div className="video-wrap">
          <img src="img/intro-video-preview.jpg" alt="Standbild Drohnen-Video" />
          <button className="play-button" aria-label="Drohnen-Video abspielen">
            <span className="play-circle">▶</span>
          </button>
        </div>
      </div>
    </section>);

}

function WohnungenGrid() {
  return (
    <section className="sec sec-altpapier" id="wohnungen">
      <div className="container">
        <div className="eyebrow">Unsere sechs Wohnungen</div>
        <h2 className="h2">Neu renoviert.<br /><em>Zum Wohlfühlen</em>.</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', color: 'var(--color-text-muted)', maxWidth: '56ch', marginTop: '1rem' }}>Alle Wohnungen sind komplett neu renoviert und eingerichtet. Modern, komfortabel, gemütlich.

        </p>
        <div className="w-grid">
          {D.wohnungen.map((w) =>
          <a key={w.id} href={"#" + w.id} className="w-card">
              <div className="w-card-img"><img src={w.img} alt={"Wohnung " + w.name} /></div>
              <div className="w-card-eyebrow">{w.eyebrow || "Wohnung " + w.name}</div>
              <h3>{w.name}</h3>
              <p className="w-card-tag">{w.tagline}.</p>
              <p className="w-card-meta">{w.meta}</p>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function BergbahnStripe() {
  const b = D.bergbahn;
  return (
    <section className="sec-wiese" id="bergbahn">
      <div className="container bergbahn-inner">
        <span className="bergbahn-cv">{b.caveat}</span>
        <h3 className="bergbahn-h3">{b.h3}</h3>
        <p className="bergbahn-sub">{b.text}</p>
      </div>
    </section>);

}

function Reviews() {
  const r = D.reviews;
  const BOOKING_URL = "https://www.booking.com/hotel/de/leos-alpenchalet.de.html?aid=311092&label=leos-alpenchalet-g56YA4KGhL6x**mYqTQbyAS601051771087%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2272179989903%3Alp9042385%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YTptaWLFanNKScTlTR7Hrwg&sid=f815cc37d4782347471b25b6ec067058&dest_id=-1837930&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1777632921&srpvid=ac5a4cca643b021a&type=total&ucfs=1&activeTab=main#tab-reviews";
  const [idx, setIdx] = React.useState(0);
  const total = r.slider.length;

  // Responsive visible card count — must match CSS breakpoints below
  const [visible, setVisible] = React.useState(3);
  React.useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 640px)');
    const mqTablet = window.matchMedia('(max-width: 980px)');
    const update = () => {
      if (mqMobile.matches) setVisible(1);
      else if (mqTablet.matches) setVisible(2);
      else setVisible(3);
    };
    update();
    mqMobile.addEventListener('change', update);
    mqTablet.addEventListener('change', update);
    return () => {
      mqMobile.removeEventListener('change', update);
      mqTablet.removeEventListener('change', update);
    };
  }, []);

  const maxIdx = Math.max(0, total - visible);
  // Clamp idx if visible changes (e.g. resize) so we never overshoot
  React.useEffect(() => {
    if (idx > maxIdx) setIdx(maxIdx);
  }, [maxIdx, idx]);

  // Categories from data (Booking sub-scores)
  const cats = r.categories || [];

  // Initials for avatar bubbles
  const initials = (name) => (name || '?').trim().slice(0, 1).toUpperCase();

  // Touch swipe support
  const touchStartX = React.useRef(null);
  const touchDeltaX = React.useRef(0);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0; };
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const d = touchDeltaX.current;
    if (Math.abs(d) > 40) {
      if (d < 0) setIdx((i) => Math.min(maxIdx, i + 1));
      else setIdx((i) => Math.max(0, i - 1));
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className="sec sec-altpapier rv2" id="bewertungen">
      <div className="container">
        <div className="rv2-head">
          <div className="eyebrow">{r.eyebrow}</div>
          <h2 className="h2 rv2-h2">Was unsere Gäste <em>sagen</em>.</h2>
        </div>

        <div className="rv2-hero">
          <div className="rv2-score-card">
            <div className="rv2-score-top">
              <div className="rv2-score-num">{r.score.value}</div>
              <div className="rv2-score-meta">
                <div className="rv2-score-label">{r.score.label || 'Außergewöhnlich'}</div>
                <div className="rv2-score-stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => <span key={i}>★</span>)}
                </div>
                <div className="rv2-score-count">aus <strong>{r.score.count}</strong> Bewertungen</div>
                <div className="rv2-score-source">Booking.com · verifiziert</div>
              </div>
            </div>
            <div className="rv2-cats-head">Kategorien</div>
            <div className="rv2-score-bars">
              {cats.map((s, i) => {
                const pct = Math.min(100, parseFloat(s.value) / 10 * 100);
                return (
                  <div className="rv2-bar-row" key={i}>
                    <span className="rv2-bar-label">{s.label}</span>
                    <span className="rv2-bar-track"><span className="rv2-bar-fill" style={{ width: pct + '%' }} /></span>
                    <span className="rv2-bar-val">{s.value.replace('.', ',')}</span>
                  </div>);

              })}
            </div>
          </div>

          <figure className="rv2-featured">
            <div className="rv2-featured-mark" aria-hidden="true">"</div>
            <span className="rv2-featured-tag">GÄSTE-STIMME</span>
            <blockquote className="rv2-featured-text">{r.featured.text}</blockquote>
            <figcaption className="rv2-featured-foot">
              <div className="rv2-avatar" aria-hidden="true">{initials(r.featured.who)}</div>
              <div className="rv2-foot-meta">
                <div className="rv2-foot-name">{r.featured.who}</div>
                <div className="rv2-foot-stay">{r.featured.date} · {r.featured.stay}</div>
              </div>
              <div className="rv2-foot-score">
                <span className="rv2-foot-score-num">{r.featured.score}</span>
                <span className="rv2-foot-score-of">/10</span>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="rv2-slider">
          <div className="rv2-slider-head">
            <h3 className="rv2-slider-title">Mehr Stimmen aus dem Gästebuch</h3>
            <div className="rv2-slider-nav">
              <button className="rv2-arrow" onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} aria-label="Vorheriges">←</button>
              <span className="rv2-slider-count">{(() => {
                const start = idx + 1;
                const end = Math.min(idx + visible, total);
                return start === end ? `${start}` : `${start}–${end}`;
              })()} <span>/ {total}</span></span>
              <button className="rv2-arrow" onClick={() => setIdx(Math.min(maxIdx, idx + 1))} disabled={idx >= maxIdx} aria-label="Nächstes">→</button>
            </div>
          </div>
          <div className="rv2-viewport" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="rv2-track" style={{ transform: `translateX(calc(${-idx} * (100% + 1.5rem) / ${visible}))` }}>
              {r.slider.map((rv, i) =>
              <article className="rv2-card" key={i}>
                  <div className="rv2-card-top">
                    <div className="rv2-card-score">{rv.score}</div>
                    <div className="rv2-card-stars" aria-hidden="true">★★★★★</div>
                  </div>
                  <p className="rv2-card-text">{rv.text}</p>
                  <div className="rv2-card-foot">
                    <div className="rv2-avatar rv2-avatar-sm" aria-hidden="true">{initials(rv.who)}</div>
                    <div>
                      <div className="rv2-card-name">{rv.who}</div>
                      <div className="rv2-card-stay">{rv.date} · {rv.stay}</div>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
          <div className="rv2-dots" role="tablist" aria-label="Bewertungs-Seiten">
            {Array.from({ length: maxIdx + 1 }).map((_, i) =>
            <button key={i} className={"rv2-dot " + (i === idx ? "is-active" : "")} onClick={() => setIdx(i)} aria-label={`Seite ${i + 1}`} />
            )}
          </div>
          <div className="rv2-cta">
            <a href={BOOKING_URL} target="_blank" rel="noopener">Alle {r.score.count} Bewertungen auf Booking.com <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>);

}

function Familie() {
  const f = D.family;
  return (
    <section className="sec sec-altpapier" id="gastgeber">
      <div className="container fam-grid">
        <div className="fam-img">
          <div className="fam-img-frame">
            <span className="fam-img-label">Familienbild Pinn</span>
            <span className="fam-img-credit">Foto folgt · Nicole Pinn</span>
          </div>
        </div>
        <div className="fam-text">
          <div className="eyebrow">{f.eyebrow}</div>
          <h2 className="h2">
            <span dangerouslySetInnerHTML={{ __html: f.h2Pre }} />
            <em>{f.h2Italic}</em>{f.h2Post}
          </h2>
          {f.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="fam-sig">{f.signature}</div>
        </div>
      </div>
    </section>);

}

function CTABuchen() {
  const c = D.ctaBuchen;
  return (
    <section className="sec-glut" id="buchen">
      <div className="container cta-inner">
        <div>
          <h3 className="cta-h">{c.h3}</h3>
          <p className="cta-sub">{c.sub}</p>
        </div>
        <a href={c.href} target="_blank" rel="noopener" className="cta-btn">{c.button}</a>
      </div>
    </section>);

}

function Tipps() {
  const t = D.tipps;
  return (
    <section className="sec sec-altpapier" id="tipps">
      <div className="container">
        <div className="eyebrow">{t.eyebrow}</div>
        <h2 className="h2">{t.h2Pre}<em>{t.h2Italic}</em>{t.h2Post}</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', color: 'var(--color-text-muted)', maxWidth: '56ch', marginTop: '1rem' }}>{t.sub}</p>
        <div className="tipps-grid">
          {t.cards.map((c, i) =>
          <div className="tipp-card" key={i}>
              <div className="tipp-img">
                {c.img ?
              <img src={c.img} alt={c.title} /> :
              <span className="tipp-img-placeholder">Bild · {c.cat}</span>}
              </div>
              <div className="tipp-cat">{c.cat}</div>
              <h4>{c.title}</h4>
              <p style={{ whiteSpace: 'pre-line' }}>{c.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Lage() {
  const l = D.lage;
  const a = D.brand.address;
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let map;
    const fallback = [47.4203, 10.2464];
    const build = (ll) => {
      if (!mapRef.current || !window.L) return;
      map = window.L.map(mapRef.current, { scrollWheelZoom: false, zoomControl: true }).setView(ll, 13);
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
      window.L.marker(ll).addTo(map).bindPopup('Leos Alpenchalet<br>Rohrmooser Straße 22');
    };
    const start = () => {
      fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&street=Rohrmooser%20Stra%C3%9Fe%2022&city=Oberstdorf&postalcode=87561&country=Germany')
        .then(r => r.json())
        .then(d => build(d && d[0] ? [parseFloat(d[0].lat), parseFloat(d[0].lon)] : fallback))
        .catch(() => build(fallback));
    };
    if (window.L) start();
    else {
      const css = document.createElement('link');
      css.rel = 'stylesheet'; css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(css);
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      s.onload = start; document.head.appendChild(s);
    }
    return () => { if (map) map.remove(); };
  }, []);
  return (
    <section className="sec sec-altpapier" id="lage">
      <div className="container">
        <div className="eyebrow">{l.eyebrow}</div>
        <h2 className="h2">{l.h2Pre}<em>{l.h2Italic}</em>{l.h2Post}</h2>
        <div className="lage-grid">
          <div className="lage-map">
            <div className="lage-map-canvas" ref={mapRef}></div>
          </div>
          <div className="lage-cols">
            <div className="lage-block">
              <h4 className="lage-block-h">Adresse</h4>
              <p className="lage-addr">
                {D.brand.name}<br />
                {a.street}<br />
                {a.city}
              </p>
            </div>
            <div className="lage-block">
              <h4 className="lage-block-h">Entfernung mit dem Auto</h4>
              <table className="lage-table">
                <tbody>
                  {l.distances.map((d, i) =>
                  <tr key={i}>
                      <td>{d.ziel}</td>
                      <td>{d.km}</td>
                      <td>{d.time}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="lage-block">
              <h4 className="lage-block-h">Highlights in der Nähe</h4>
              <ul className="lage-highlights">
                {l.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function FAQ() {
  const f = D.faq;
  const [open, setOpen] = React.useState(-1);
  return (
    <section className="sec sec-altpapier" id="faq">
      <div className="container">
        <div className="faq-head">
          <div className="eyebrow" style={{ display: 'block', marginBottom: '0.8rem' }}>{f.eyebrow}</div>
          <h2 className="h2">{f.h2}</h2>
        </div>
        <div className="faq-list">
          {f.items.map((it, i) =>
          <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="faq-plus">+</span>
              </button>
              {open === i && <p className="faq-a">{it.a}</p>}
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Footer() {
  const a = D.brand.address;
  return (
    <footer className="sec-laerche footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-brand-name">Leos Alpenchalet</h4>
            <p className="footer-text">
              {a.street}<br />
              {a.city}<br />
              {a.region}
            </p>
          </div>
          <div>
            <h5>Wohnungen</h5>
            <ul>
              {D.wohnungen.map((w) => <li key={w.id}><a href={"#" + w.id}>{w.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h5>Service</h5>
            <ul>
              <li><a href="#bergbahn">Bergbahn-Ticket</a></li>
              <li><a href="#lage">Lage & Region</a></li>
              <li><a href="#faq">Häufige Fragen</a></li>
              <li><a href="#gastgeber">Kontakt & Anfrage</a></li>
            </ul>
          </div>
          <div>
            <h5>Rechtliches</h5>
            <ul>
              <li><a href="#impressum">Impressum</a></li>
              <li><a href="#datenschutz">Datenschutzerklärung</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-credits">Ihre Familie Pinn</span>
          <span className="footer-copy">© 2026 Leos Alpenchalet</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Header, HeaderScrollAware, Hero, Trust, Intro, WohnungenGrid, BergbahnStripe, Reviews, Familie, CTABuchen, Tipps, Lage, FAQ, Footer });
const StayPano = ({ frontFill = "#4A5D3A", backFill = "#9aa890" }) => (
  <div className="ss-pano" aria-hidden="true">
    <div className="ss-sun"></div>
    <div className="ss-range ss-back">
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none"><path d="M0,250 L150,170 L320,232 L470,150 L640,222 L820,140 L1000,210 L1200,250 L1200,400 L0,400 Z" fill={backFill} /></svg>
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none"><path d="M0,250 L150,170 L320,232 L470,150 L640,222 L820,140 L1000,210 L1200,250 L1200,400 L0,400 Z" fill={backFill} /></svg>
    </div>
    <div className="ss-range ss-front">
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none"><path d="M0,300 L200,210 L380,292 L560,188 L760,286 L980,206 L1200,300 L1200,400 L0,400 Z" fill={frontFill} /></svg>
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none"><path d="M0,300 L200,210 L380,292 L560,188 L760,286 L980,206 L1200,300 L1200,400 L0,400 Z" fill={frontFill} /></svg>
    </div>
    <div className="ss-haze"></div>
  </div>
);

function openStayStory(eye, title) {
  window.dispatchEvent(new CustomEvent('staystory:open', { detail: { eye, title } }));
}

function StayStoryTeaser() {
  return (
    <section className="ss-teaser" id="staystory" onClick={() => openStayStory('Dein Tag', 'So fühlt sich ein Tag bei uns an')}>
      <StayPano frontFill="#3f5233" />
      <div className="container ss-teaser-inner">
        <div className="ss-teaser-txt">
          <div className="ss-hand">Erlebe den Tag vorab</div>
          <h2 className="ss-teaser-h">So fühlt sich ein Tag <em>bei uns</em> an</h2>
          <p className="ss-teaser-sub">Die interaktive Hausführung: 360°-Blick in jede Wohnung, vom ersten Kaffee auf dem Balkon bis zum Sonnenuntergang über dem Ifen.</p>
          <span className="ss-go">Tag erleben
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
    </section>);
}

function StayStoryPill() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button className={"ss-pill" + (show ? " is-show" : "")} onClick={() => openStayStory('Leos Alpenchalet', 'Schau dich im ganzen Haus um')} aria-label="Haus erleben — StayStory öffnen">
      <span className="ss-pill-thumb"><StayPano /></span>
      <span className="ss-pill-txt"><b>Haus erleben</b><span>Digitale Hausführung</span></span>
      <span className="ss-pill-arrow">→</span>
    </button>);
}

Object.assign(window, { StayPano, openStayStory, StayStoryTeaser, StayStoryPill });
