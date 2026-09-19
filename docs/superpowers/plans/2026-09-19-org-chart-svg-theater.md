# Three-Theater SVG Org Chart Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the public Staff chart as a Giggling-Platypus-style chip tree: Carl on top, three theater headers (Command · Primary Staff · Special Staff), embossed portrait chips, gold SVG connectors, existing dossiers unchanged.

**Architecture:** Keep `STAFF` as the data source. Reorganize `#chart` markup into a Cos chip plus three theater columns. Extract pure connector helpers (`rowGroups`, `buildTreePaths`) in `app.js` so Node tests can require them without a browser. Hydrate circular chip portraits from `STAFF` + `COMMONS_FALLBACK`. Extend `#lines` redraw on resize, panel open, fonts, and chip image load.

**Tech Stack:** Static GitHub Pages (`index.html`, `styles.css`, `app.js`). Node.js built-in test runner (`node --test`). No new framework or build step.

## Global Constraints

- Middle theater label is **Primary Staff**, never “Operations”.
- Edit `index.html`, `styles.css`, `app.js` in place; do not change the Pages deploy pipeline.
- Public sanitize: no CostPoint, VELEN internals, JETT/SAM, Outlook, quiet job hunt, or staff callsigns beyond door names + seat codes.
- No empty J6/J7 doors. No new portraits or story rewrites.
- Person controls stay `<button aria-expanded aria-controls="panel">`. Theater headers are non-interactive labels.
- Preserve hash deep links, Escape close, Role/Story/Duties tabs, narrow scrim.
- Emboss: dark face, gold border, inset highlight, drop shadow; flatten under `prefers-reduced-motion`.
- Usable at ~390px without horizontal overflow.
- Open a PR; do not force-push `main`.

---

### Task 1: Characterization tests (hierarchy, sanitize, connectors)

**Files:**
- Create: `tests/org-chart.test.js`
- Modify: `app.js` (export-only guards after implementation; tests written first against the intended API)

**Interfaces:**
- Consumes: current `index.html` / `app.js` / `styles.css` / `README.md`
- Produces: Node tests that fail until markup, sanitize, and `buildTreePaths()` exist

- [ ] **Step 1: Write the failing test**

`tests/org-chart.test.js` asserts:

1. `index.html` has exactly the labels Command, Primary Staff, Special Staff; no `>Operations<` theater label.
2. Person `data-id` order under those theaters matches the spec lists; no `data-id` for j6/j7.
3. Every `.node[data-id]` is a `<button>` with `aria-controls="panel"`.
4. Theater labels are not `<button>`.
5. Source files contain none of: CostPoint, VELEN, JETT, SAM (word), Outlook, job hunt.
6. `buildTreePaths` (required from `../app.js`) draws Carl → header bar → headers → person stubs on desktop, and a spine + stubs when `stacked: true`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/org-chart.test.js`

Expected: FAIL — current markup is a CoS / DCoS / J-row plus an `off-staff` aside; `buildTreePaths` is not exported.

- [ ] **Step 3: Commit tests**

```bash
git add tests/org-chart.test.js docs/superpowers/plans/2026-09-19-org-chart-svg-theater.md
git commit -m "test: characterize three-theater Primary Staff org chart"
```

---

### Task 2: Chart markup, embossed chips, SVG connectors

**Files:**
- Modify: `index.html` — `#chart` becomes Carl + three `.theater` sections; remove `.off-staff` aside
- Modify: `styles.css` — Platypus-like columns, circular portraits, emboss, stacked mobile
- Modify: `app.js` — `hydrateChipPortraits()`, `buildTreePaths()`, `drawLines()` rewrite; DOM init guarded for Node
- Modify: `README.md` — chips now show portraits; keep sanitize note

**Interfaces:**
- Consumes: `STAFF`, `COMMONS_FALLBACK`, `box()`, `rowGroups()`, existing `openPerson` / `closePanel` / tabs / hash
- Produces: `buildTreePaths({ root, headers, groups, stacked }) → string[]` of orthogonal SVG `d` attributes; live `#lines` overlay

Chip markup (every person):

```html
<button class="node chip" type="button" data-id="cato" id="n-cato" aria-expanded="false" aria-controls="panel">
  <img class="chip-face" alt="" width="56" height="56">
  <span class="chip-copy">
    <span class="node-name">Cato</span>
    <span class="node-code">J1</span>
  </span>
</button>
```

Carl uses `chip chip-wide`. Theater labels:

```html
<p class="theater-label" id="th-primary">Primary Staff</p>
```

`drawLines()` measures `#n-carl`, `#th-command|primary|special`, and each theater’s person buttons relative to `#chart`. Desktop: spine to a header bar, down to each label, then per-theater person bars (Special Staff may wrap). Narrow (`max-width: 860px`): stack theaters; spine + short stubs.

- [ ] **Step 1: Implement markup, CSS, and JS**
- [ ] **Step 2: Run `node --test tests/org-chart.test.js` — expect PASS**
- [ ] **Step 3: Commit**

```bash
git add index.html styles.css app.js README.md
git commit -m "feat: rebuild org chart as three-theater portrait tree #spec"
```

---

### Task 3: Verify locally and open PR

**Files:** none required beyond fixes found in review.

- [ ] Serve with `python3 -m http.server 8080`
- [ ] Check desktop tree, `#carl` deep link, dossier tabs, Escape, 390px overflow, Primary Staff label
- [ ] Push `cursor/org-chart-svg-theater-46d1` and open a PR against `main` with local/Pages verify notes
