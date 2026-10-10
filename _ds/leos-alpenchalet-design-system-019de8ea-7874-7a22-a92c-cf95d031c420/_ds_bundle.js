/* @ds-bundle: {"format":4,"namespace":"LeosAlpenchaletDesignSystem_019de8","components":[],"sourceHashes":{"ui_kits/website/app.jsx":"5f0cc6792504","ui_kits/website/components.jsx":"1b65991851d5","ui_kits/website/data.js":"02931dabdee6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LeosAlpenchaletDesignSystem_019de8 = window.LeosAlpenchaletDesignSystem_019de8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/app.jsx
try { (() => {
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Trust, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(WohnungenGrid, null), /*#__PURE__*/React.createElement(BergbahnStripe, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(Familie, null), /*#__PURE__*/React.createElement(CTABuchen, null), /*#__PURE__*/React.createElement(Tipps, null), /*#__PURE__*/React.createElement(Lage, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
// Leos Alpenchalet — components for Startseite (one file, all sections)
const D = window.LEOS_DATA;
const TRAMINO = "https://leos-alpenchalet.tramino.de/api/widgets/booking/";
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "logo"
  }, "Leos Alpenchalet"), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#wohnungen"
  }, "Wohnen"), /*#__PURE__*/React.createElement("a", {
    href: "#tipps"
  }, "Aktivit\xE4ten"), /*#__PURE__*/React.createElement("a", {
    href: "#lage"
  }, "Kontakt"), /*#__PURE__*/React.createElement("a", {
    href: TRAMINO,
    target: "_blank",
    rel: "noopener",
    className: "nav-btn"
  }, "Buchen"))));
}
function Hero() {
  const h = D.hero;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/hero-haus.jpg",
    alt: "Leos Alpenchalet, Au\xDFenansicht"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, h.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: h.h1Pre
    }
  }), /*#__PURE__*/React.createElement("em", null, h.h1Italic), h.h1Post), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, h.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: TRAMINO,
    target: "_blank",
    rel: "noopener",
    className: "btn-primary"
  }, h.primary), /*#__PURE__*/React.createElement("a", {
    href: "#wohnungen",
    className: "btn-secondary"
  }, h.secondary, " \u2192"))));
}
function Trust() {
  const items = D.trust;
  // doubled list for seamless infinite scroll
  const renderItems = keyPrefix => items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: keyPrefix + i
  }, /*#__PURE__*/React.createElement("span", {
    className: "trust-item"
  }, it.star && /*#__PURE__*/React.createElement("span", {
    className: "star"
  }, "\u2605"), it.text), /*#__PURE__*/React.createElement("span", {
    className: "trust-sep"
  }, "\xB7")));
  return /*#__PURE__*/React.createElement("section", {
    className: "trust",
    "aria-label": "Auf einen Blick"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-track"
  }, renderItems('a'), renderItems('b')));
}
function Intro() {
  const i = D.intro;
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-altpapier",
    id: "hier-wohnen-sie"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container intro-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, i.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, i.h2Pre, /*#__PURE__*/React.createElement("em", null, i.h2Italic), i.h2Post), /*#__PURE__*/React.createElement("p", null, i.text)), /*#__PURE__*/React.createElement("div", {
    className: "video-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/hero-haus.jpg",
    alt: "Standbild Drohnen-Video"
  }), /*#__PURE__*/React.createElement("button", {
    className: "play-button",
    "aria-label": "Drohnen-Video abspielen"
  }, /*#__PURE__*/React.createElement("span", {
    className: "play-circle"
  }, "\u25B6")))));
}
function WohnungenGrid() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-altpapier",
    id: "wohnungen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Unsere sechs Wohnungen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Sechs Wohnungen", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Sechs Wohlf\xFChloasen"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1.08rem',
      color: 'var(--color-text-muted)',
      maxWidth: '56ch',
      marginTop: '1rem'
    }
  }, "Jede tr\xE4gt den Namen eines Allg\xE4uer Berges. Allesamt komplett neu renoviert und eingerichtet. Modern, komfortabel, gem\xFCtlich."), /*#__PURE__*/React.createElement("div", {
    className: "w-grid"
  }, D.wohnungen.map(w => /*#__PURE__*/React.createElement("a", {
    key: w.id,
    href: "#" + w.id,
    className: "w-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-card-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: w.img,
    alt: "Wohnung " + w.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-card-eyebrow"
  }, "Wohnung ", w.name), /*#__PURE__*/React.createElement("h3", null, w.name), /*#__PURE__*/React.createElement("p", {
    className: "w-card-tag"
  }, w.tagline, "."), /*#__PURE__*/React.createElement("p", {
    className: "w-card-meta"
  }, w.meta))))));
}
function BergbahnStripe() {
  const b = D.bergbahn;
  return /*#__PURE__*/React.createElement("section", {
    className: "sec-wiese",
    id: "bergbahn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container bergbahn-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bergbahn-cv"
  }, b.caveat), /*#__PURE__*/React.createElement("h3", {
    className: "bergbahn-h3"
  }, b.h3), /*#__PURE__*/React.createElement("p", {
    className: "bergbahn-sub"
  }, b.text)));
}
function Reviews() {
  const r = D.reviews;
  const [idx, setIdx] = React.useState(0);
  const total = r.slider.length;
  const visible = 3;
  const maxIdx = Math.max(0, total - visible);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-altpapier",
    id: "bewertungen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reviews-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      display: 'block',
      marginBottom: '1.6rem'
    }
  }, r.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "score-circle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "score-num"
  }, r.score.value), /*#__PURE__*/React.createElement("div", {
    className: "score-stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("div", {
    className: "score-of"
  }, "aus ", r.score.count, " Bewertungen")), /*#__PURE__*/React.createElement("p", {
    className: "score-subs"
  }, r.score.subs)), /*#__PURE__*/React.createElement("div", {
    className: "featured-quote"
  }, /*#__PURE__*/React.createElement("span", {
    className: "featured-tag"
  }, "Hervorgehoben"), /*#__PURE__*/React.createElement("p", {
    className: "featured-text"
  }, "\"", r.featured.text, "\""), /*#__PURE__*/React.createElement("p", {
    className: "featured-attr"
  }, "\u2014 ", r.featured.who, ", ", r.featured.date, " \xB7 ", r.featured.stay), /*#__PURE__*/React.createElement("p", {
    className: "featured-score"
  }, "Bewertet ", r.featured.score)), /*#__PURE__*/React.createElement("div", {
    className: "slider"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slider-track",
    style: {
      transform: `translateX(calc(${-idx} * (100% / ${visible} + ${idx > 0 ? '0.5rem' : '0px'})))`
    }
  }, r.slider.map((rv, i) => /*#__PURE__*/React.createElement("div", {
    className: "slider-card",
    key: i
  }, /*#__PURE__*/React.createElement("p", null, "\"", rv.text, "\""), /*#__PURE__*/React.createElement("p", {
    className: "slider-attr"
  }, "\u2014 ", rv.who, ", ", rv.date, " \xB7 ", rv.stay, " \xB7 ", rv.score))))), /*#__PURE__*/React.createElement("div", {
    className: "slider-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "slider-arrow",
    onClick: () => setIdx(Math.max(0, idx - 1)),
    disabled: idx === 0,
    "aria-label": "Vorheriges"
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    className: "slider-arrow",
    onClick: () => setIdx(Math.min(maxIdx, idx + 1)),
    disabled: idx >= maxIdx,
    "aria-label": "N\xE4chstes"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "slider-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.booking.com/",
    target: "_blank",
    rel: "noopener"
  }, "Alle 80 Bewertungen auf Booking.com \u2192")))));
}
function Familie() {
  const f = D.family;
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-altpapier",
    id: "gastgeber"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container fam-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fam-img"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fam-img-placeholder"
  }, "Familienbild \xB7 Nicole Pinn")), /*#__PURE__*/React.createElement("div", {
    className: "fam-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, f.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: f.h2Pre
    }
  }), /*#__PURE__*/React.createElement("em", null, f.h2Italic), f.h2Post), f.paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)), /*#__PURE__*/React.createElement("div", {
    className: "fam-sig"
  }, f.signature))));
}
function CTABuchen() {
  const c = D.ctaBuchen;
  return /*#__PURE__*/React.createElement("section", {
    className: "sec-glut",
    id: "buchen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container cta-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "cta-h"
  }, c.h3), /*#__PURE__*/React.createElement("p", {
    className: "cta-sub"
  }, c.sub)), /*#__PURE__*/React.createElement("a", {
    href: c.href,
    target: "_blank",
    rel: "noopener",
    className: "cta-btn"
  }, c.button)));
}
function Tipps() {
  const t = D.tipps;
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-altpapier",
    id: "tipps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, t.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, t.h2Pre, /*#__PURE__*/React.createElement("em", null, t.h2Italic), t.h2Post), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '1.08rem',
      color: 'var(--color-text-muted)',
      maxWidth: '56ch',
      marginTop: '1rem'
    }
  }, t.sub), /*#__PURE__*/React.createElement("div", {
    className: "tipps-grid"
  }, t.cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "tipp-card",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "tipp-img"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tipp-img-placeholder"
  }, c.cat)), /*#__PURE__*/React.createElement("div", {
    className: "tipp-cat"
  }, c.cat), /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("p", null, c.text))))));
}
function Lage() {
  const l = D.lage;
  const a = D.brand.address;
  const mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=10.245,47.395,10.275,47.415&layer=mapnik&marker=47.405,10.260";
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-altpapier",
    id: "lage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, l.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, l.h2Pre, /*#__PURE__*/React.createElement("em", null, l.h2Italic), l.h2Post), /*#__PURE__*/React.createElement("div", {
    className: "lage-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lage-map"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: mapSrc,
    title: "Karte Tiefenbach",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lage-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lage-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "lage-block-h"
  }, "Adresse"), /*#__PURE__*/React.createElement("p", {
    className: "lage-addr"
  }, D.brand.name, /*#__PURE__*/React.createElement("br", null), a.street, /*#__PURE__*/React.createElement("br", null), a.city)), /*#__PURE__*/React.createElement("div", {
    className: "lage-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "lage-block-h"
  }, "Entfernung mit dem Auto"), /*#__PURE__*/React.createElement("table", {
    className: "lage-table"
  }, /*#__PURE__*/React.createElement("tbody", null, l.distances.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, d.ziel), /*#__PURE__*/React.createElement("td", null, d.km), /*#__PURE__*/React.createElement("td", null, d.time)))))), /*#__PURE__*/React.createElement("div", {
    className: "lage-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "lage-block-h"
  }, "Highlights in der N\xE4he"), /*#__PURE__*/React.createElement("ul", {
    className: "lage-highlights"
  }, l.highlights.map((h, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, h))))))));
}
function FAQ() {
  const f = D.faq;
  const [open, setOpen] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec sec-altpapier",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      display: 'block',
      marginBottom: '0.8rem'
    }
  }, f.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, f.h2)), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, f.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "faq-item" + (open === i ? " open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
    className: "faq-plus"
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    className: "faq-a"
  }, it.a))))));
}
function Footer() {
  const a = D.brand.address;
  return /*#__PURE__*/React.createElement("footer", {
    className: "sec-laerche footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "footer-brand-name"
  }, "Leos Alpenchalet"), /*#__PURE__*/React.createElement("p", {
    className: "footer-text"
  }, a.street, /*#__PURE__*/React.createElement("br", null), a.city, /*#__PURE__*/React.createElement("br", null), a.region)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Wohnungen"), /*#__PURE__*/React.createElement("ul", null, D.wohnungen.map(w => /*#__PURE__*/React.createElement("li", {
    key: w.id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#" + w.id
  }, w.name))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Service"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#bergbahn"
  }, "Bergbahn-Ticket")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#lage"
  }, "Lage & Region")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "H\xE4ufige Fragen")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#gastgeber"
  }, "Kontakt & Anfrage")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Rechtliches"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#impressum"
  }, "Impressum")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#datenschutz"
  }, "Datenschutzerkl\xE4rung"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer-credits"
  }, "\u2014 Bilder \xB7 Nicole Pinn"), /*#__PURE__*/React.createElement("span", {
    className: "footer-copy"
  }, "\xA9 2026 Leos Alpenchalet"))));
}
Object.assign(window, {
  Header,
  Hero,
  Trust,
  Intro,
  WohnungenGrid,
  BergbahnStripe,
  Reviews,
  Familie,
  CTABuchen,
  Tipps,
  Lage,
  FAQ,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Leos Alpenchalet — Website data (Startseite, single source of truth)
window.LEOS_DATA = {
  brand: {
    name: "Leos Alpenchalet",
    address: {
      street: "Rohrmooser Straße 22",
      city: "87561 Oberstdorf-Tiefenbach",
      region: "Allgäu, Deutschland"
    }
  },
  hero: {
    eyebrow: "Tiefenbach · Oberstdorf",
    h1Pre: "Ankommen<br>in ",
    h1Italic: "Tiefenbach",
    h1Post: ".",
    sub: "Ruhig gelegen, modern & traditionell eingerichtet, mit allem, was Sie im Urlaub brauchen.",
    primary: "Verfügbarkeit prüfen",
    secondary: "Wohnungen ansehen"
  },
  trust: [{
    star: true,
    text: "9.6/10 aus 80 Bewertungen"
  }, {
    text: "8 Min. mit dem Auto bis Oberstdorf-Zentrum"
  }, {
    text: "Bergbahn-Ticket Mai bis Oktober inklusive"
  }, {
    text: "Ruhige Lage am Ortsrand"
  }, {
    text: "E-Auto-Ladestation am Haus"
  }, {
    text: "Ski-Paradies um die Ecke"
  }, {
    text: "Loipe vor der Haustür"
  }],
  intro: {
    eyebrow: "Hier wohnen Sie",
    h2Pre: "Ein Haus, sechs Wohnungen — ",
    h2Italic: "am Eingang ins Rohrmoostal",
    h2Post: ".",
    text: "Tiefenbach liegt 8 Min. Autofahrt von Oberstdorf entfernt. Die Wanderwege beginnen vor unserer Haustür, die Söllereckbahn ist bequem zu Fuß erreichbar. Entdecke bei einer Wanderung durch das Rohmoos- oder Lochbachtal die Schönheit der unberührten Natur."
  },
  wohnungen: [{
    id: "ifen",
    name: "Ifen",
    tagline: "Familienzentrale, ebenerdig",
    meta: "63 m² · EG · Südost · 1–4 Personen",
    img: "img/ifen.jpg"
  }, {
    id: "himmeleck",
    name: "Himmeleck",
    tagline: "Panorama-Suite",
    meta: "63 m² · 1. OG · Südost · 1–4 Personen",
    img: "img/himmeleck.jpg"
  }, {
    id: "gaisberg",
    name: "Gaisberg",
    tagline: "Sonnenuntergangs-Nest",
    meta: "44 m² · EG · West · 1–3 Personen",
    img: "img/gaisberg.jpg"
  }, {
    id: "schneck",
    name: "Schneck",
    tagline: "Rückzugs-Studio",
    meta: "44 m² · 1. OG · West · 1–3 Personen",
    img: "img/schneck.jpg"
  }, {
    id: "hohes-licht",
    name: "Hohes Licht",
    tagline: "Sonnenaufgangs-Loft",
    meta: "55 m² · DG · Südost · 1–3 Personen",
    img: "img/hohes-licht.jpg"
  }, {
    id: "hochvogel",
    name: "Hochvogel",
    tagline: "Dachstuhl-Refugium",
    meta: "60 m² · DG · West · 1–3 Personen",
    img: "img/hochvogel.jpg"
  }],
  bergbahn: {
    caveat: "— im Übernachtungspreis bereits enthalten",
    h3: "Bergbahn-Ticket Mai bis Oktober",
    text: "Alle 7 Bergbahnen in Oberstdorf und im Kleinwalsertal — unbegrenzt nutzbar während Ihres gesamten Aufenthalts. Fellhorn, Kanzelwand, Nebelhorn, Söllereck, Ifenbahn, Heubergbahn, Zaferne-Sesselbahn, Walmedingerhorn (im Sommer 2026 geschlossen): einsteigen, hochfahren, ganz bequem."
  },
  reviews: {
    eyebrow: "Was unsere Gäste sagen",
    score: {
      value: "9.6",
      count: "80",
      subs: "Sauberkeit 9.9 · Komfort 9.9 · Ausstattung 9.9"
    },
    featured: {
      text: "Sehr schöne Ausstattung aus Holz; 2 Toiletten, funktionelle Küche, wir haben an 2 Tagen selbst gekocht. Sehr ruhige Lage, in laufbarer Nähe gibt es 2 tolle Restaurants. Sehr gute Ausgangsposition für Wanderungen ins Rohrmoos oder Lochbachtal. Am Haus ist ein riesiger Schuppen im Ski und Fahrräder unterzustellen.",
      who: "Norbert",
      date: "April 2026",
      stay: "5 Nächte · Familie",
      score: "9,0"
    },
    slider: [{
      text: "Wir werden gerne wiederkommen. Sehr schöne Lage. Gute Ausstattung. Sehr nette und freundliche Gastgeber. Ladestation für E Auto.",
      who: "Horst",
      date: "März 2026",
      stay: "14 Nächte · Paar",
      score: "10/10"
    }, {
      text: "Wohlfühlurlaub von A–Z. Komplett ausgestattetes Apartment. Sehr sauber und gemütliches Apartment.",
      who: "Kai",
      date: "Februar 2026",
      stay: "7 Nächte · Paar",
      score: "10/10"
    }, {
      text: "Wunderschöne Ferienwohnung in traumhafter Lage. Es ist sehr gemütlich eingerichtet und man findet alles, was man benötigt. Die Lage ist perfekt für Wanderungen in der wunderschönen Natur. Es sind nur 10 Minuten mit dem Auto bis zum Zentrum in Oberstdorf oder einer Einkaufsmöglichkeit.",
      who: "Anne",
      date: "September 2025",
      stay: "7 Nächte · Paar",
      score: "10/10"
    }, {
      text: "Tolle Unterkunft, hochwertiges Wohnen und nette Gastgeberin. Das Appartement war sehr schön und wir haben uns gleich wohl gefühlt. Die Einrichtung ist mit liebevollen Details ausgestattet, hochwertig und es hat uns an nichts gefehlt. Sehr netter Kontakt. Wir empfehlen das Alpenchalet uneingeschränkt weiter!",
      who: "Anke",
      date: "August 2025",
      stay: "10 Nächte · Paar",
      score: "10/10"
    }, {
      text: "Wunderschöner Familienurlaub. Super nette, herzliche Gastgeber. Die Wohnung ist wirklich top und sehr geschmackvoll eingerichtet. Wir kommen gerne wieder! Die Gegend hat viel zu bieten.",
      who: "Ina",
      date: "Juli 2025",
      stay: "7 Nächte · Familie",
      score: "10/10"
    }, {
      text: "Beste Ferienwohnung ever. Ruhige Lage, Nähe zu Oberstdorf, Breitachklamm und Kleinwalsertal, perfekt ausgestattet, Parkplatz, teils überdacht, direkt am Haus.",
      who: "Friedrich",
      date: "Mai 2025",
      stay: "7 Nächte",
      score: "10/10"
    }]
  },
  family: {
    eyebrow: "Ihre Gastgeber",
    h2Pre: "Familie Pinn<br>",
    h2Italic: "ist immer da",
    h2Post: ".",
    paragraphs: ["Wir freuen uns, Sie im Leos Alpenchalet begrüßen zu dürfen. Mit viel Zeit und Liebe zum Detail haben wir das Haus so gestaltet, wie wir selbst gerne ankommen würden: ruhig, hochwertig und unkompliziert.", "Uns ist wichtig, dass Sie sich hier von Anfang an wohlfühlen – ganz ohne großen Aufwand, sondern einfach, weil alles passt. Wenn Fragen auftauchen oder Sie Tipps für die Umgebung suchen, sind wir jederzeit gerne für Sie da."],
    signature: "— Ihre Familie Pinn"
  },
  ctaBuchen: {
    h3: "Bereit für Ihren Urlaub?",
    sub: "Verfügbarkeit prüfen, Wohnung wählen, buchen — alles in einem Schritt.",
    button: "Jetzt buchen →",
    href: "https://leos-alpenchalet.tramino.de/api/widgets/booking/"
  },
  tipps: {
    eyebrow: "Familie Pinns Tipps",
    h2Pre: "Was wir tun würden, ",
    h2Italic: "wenn wir Sie wären",
    h2Post: ".",
    sub: "Die schönsten Wege, Hütten, Plätze, an denen wir selbst am liebsten sind.",
    cards: [{
      cat: "Wanderung",
      title: "Rundweg durchs Rohrmoostal",
      text: "Drei Stunden, leichte Steigung. Beginnt direkt vor unserem Haus, führt am Lochbach entlang bis zum Wasserfall und zurück durchs Moor."
    }, {
      cat: "Naturwunder",
      title: "Breitachklamm",
      text: "Drei Kilometer von uns. Eine der eindrucksvollsten Felsschluchten Mitteleuropas — nach Regen besonders mächtig."
    }, {
      cat: "Einkehr",
      title: "Alpe Dornach",
      text: "Auf der Alpe Dornach genießen Sie regionale Küche in entspannter Atmosphäre mit schönem Blick in die Allgäuer Bergwelt."
    }, {
      cat: "Winter",
      title: "Skifahren am Ifen",
      text: "Am Ifen erwartet Sie entspanntes Skifahren auf weiten, sonnigen Pisten mit beeindruckendem Blick ins Kleinwalsertal."
    }]
  },
  lage: {
    eyebrow: "Wo Sie sein werden",
    h2Pre: "Tiefenbach — ",
    h2Italic: "drei Kilometer Allgäu",
    h2Post: " westlich von Oberstdorf.",
    distances: [{
      ziel: "Oberstdorf-Zentrum",
      km: "6 km",
      time: "8 Min."
    }, {
      ziel: "Nebelhornbahn",
      km: "8 km",
      time: "12 Min."
    }, {
      ziel: "Breitachklamm",
      km: "3 km",
      time: "6 Min."
    }, {
      ziel: "Fellhornbahn",
      km: "14 km",
      time: "17 Min."
    }, {
      ziel: "Söllereckbahn",
      km: "7 km",
      time: "8 Min. mit dem Auto"
    }],
    highlights: ["Breitachklamm", "Söllereck", "Fellhorn", "Nebelhorn", "Hoher Ifen", "Walmendinger Horn"]
  },
  faq: {
    eyebrow: "Häufige Fragen",
    h2: "Was Sie wissen sollten.",
    items: [{
      q: "Wann sind Check-in und Check-out?",
      a: "Check-in ist ab 16:00 Uhr möglich, Check-out bis 10:00 Uhr am Abreisetag. Wenn Sie früher ankommen oder später abreisen möchten, sprechen Sie uns an — meistens lässt sich das einrichten."
    }, {
      q: "Sind Bettwäsche und Handtücher inklusive?",
      a: "Ja, vollständig. Bettwäsche, Bad- und Geschirrtücher sind in jeder Wohnung bei Anreise frisch bezogen — Sie brauchen nichts mitzubringen."
    }, {
      q: "Sind Haustiere erlaubt?",
      a: "Hunde sind nach vorheriger Absprache willkommen. Bitte fragen Sie uns vor der Buchung kurz an, dann klären wir es gemeinsam."
    }, {
      q: "Wie funktioniert das Bergbahn-Ticket?",
      a: "Ihr Bergbahn-Ticket bekommen Sie bei uns am Tag der Ankunft per Mail. Es gilt von Anfang Mai bis Ende Oktober für alle 8 Bergbahnen in Oberstdorf und im Kleinwalsertal — unbegrenzt während Ihres Aufenthalts."
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

})();
