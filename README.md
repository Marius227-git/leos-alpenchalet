# Leos Alpenchalet — Startseite

Statische Seite. Kein Build-Schritt: `index.html` im Root, JSX wird im Browser von Babel Standalone transpiliert.

## Deployment (Vercel)
Repo-Inhalt mit diesen Dateien ersetzen, committen — Vercel deployt automatisch. Framework-Preset: **Other / Static**. Kein Build Command, Output Directory = Root.

## Dateien
- `index.html` — Einstieg
- `styles.css`, `colors_and_type.css` — Styles
- `data.js` — Inhalte (Wohnungen, Bewertungen, Tipps)
- `components.jsx` — Website-Sektionen
- `staystory.jsx` — StayStory-Overlay
- `app.jsx` — Zusammensetzung
- `img/` — Bilder
