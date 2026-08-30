# Staff

A public personal board: an interactive org chart of door names and seats. Click a name for role, story (with a generated portrait), duties, and cadence.

Live: https://siriusbontea.github.io/grok-bot-task-org/

## Serve locally

No build step. From this directory:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`. Or just open `index.html` in a browser.

## What’s here

- `index.html`, `styles.css`, `app.js` — the site
- `portraits/` — Wikimedia Commons files (credits in `portraits/CREDITS.md`)

Deep links: `#carl` `#cordoba` `#cato` `#jomini` `#rommel` `#xenophon` `#moltke` `#fukuzawa` `#vauban` `#polybius` `#hattori` `#hopper` `#faraday` `#lovelace` `#galen` `#tesler`

## For later editors

This page is public. Keep the copy to door names, seats, and the historical figures. Do not add workplace systems, internal tools, employer or vendor names, file-share paths, or private search language. Do not invent metrics, awards, or program names. Story portraits are generated reimaginings (`portraits/*-imagine.png`); do not put faces on the door tiles. If you replace an imagine file, keep the caption honest and update `CREDITS.md`.

## License

MIT. Portraits remain under the licenses in `portraits/CREDITS.md`.
