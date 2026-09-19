# Design: grok-bot-task-org three-theater SVG chart

**Date:** 2026-09-19  
**Repo:** siriusbontea/grok-bot-task-org (GitHub Pages)  
**Status:** Awaiting owner review before implementation

## Goal
Revise the public Staff org chart to a Giggling-Platypus-style hierarchical chip tree under Carl, with three theater columns, dark/gold embossed chips (shadow + highlight), cyborg portraits on chips, and click-to-open dossiers. Prefer an **SVG connector diagram** for the tree lines (the site already uses `#lines` SVG; extend that model rather than switching to CSS-only connectors).

## Locked decisions
- Group under Carl into **three theaters:** Command (DCoS), Operations (J1–J8 doors that exist), Special Staff.
- Person chips keep **cyborg portraits** and **click-to-open dossiers**.
- Visual theme: existing dark/gold palette; chips look high-end via emboss (inner light edge + drop shadow). Soft gold SVG strokes for hierarchy.
- Public sanitize unchanged: no CostPoint, VELEN internals, JETT/SAM, Outlook, quiet job hunt, or staff callsigns beyond door names + seat codes.

## Hierarchy (desktop)
1. **Carl** — single wide CoS chip (portrait + Carl / CoS).
2. SVG spine down to a horizontal bar.
3. Three **theater header chips** (gold-tinted labels, not people): Command · Operations · Special Staff.
4. Under each header, person chips:
   - **Command:** Córdoba (DCoS)
   - **Operations:** Cato J1, Jomini J2, Rommel J3, Xenophon J4, Moltke J5, Colbert J8 (no J6/J7 doors)
   - **Special Staff:** Fukuzawa Career, Vauban Design, Polybius Continuity, Hattori Certs, Hopper Learn, Faraday Agents, Lovelace LangChain, Galen Health, Tesler Swift, Licklider AWS

## Chip anatomy
- Rounded rectangle, dark face (`~#14110e` family), gold border (`#c4a46a` family).
- Emboss: inset highlight on top/left, soft drop shadow bottom/right; respect `prefers-reduced-motion` (flatten shadow/animation when reduced).
- Circular portrait (existing `portraits/*-imagine.jpg`, Commons fallback unchanged).
- Door name + seat code under/ beside portrait (Platypus-like density, not text-only doors).
- Selected / open state: stronger gold edge; dossier panel behavior stays as today.

## SVG connectors
- Keep overlay `#lines` (or equivalent) sized to the chart container; redraw on resize / panel open / fonts ready.
- Paths: Carl → theater bar → each theater header → person row(s). Orthogonal (H/V) strokes, gold, ~0.7 opacity, square caps.
- Special Staff may wrap to two rows on mid widths; connectors must target the actual chip boxes (reuse / extend current `box()` + `rowGroups()` approach).
- On narrow mobile (~390px): stack theaters vertically; simplify connectors (spine + short stubs) or hide non-essential bars if they clutter — hierarchy must remain readable without horizontal overflow.

## Interaction & a11y
- Preserve: hash deep links (`#carl`), Escape close, dossier tabs (Role / Story / Duties), scrim on narrow, keyboard tablist behavior.
- Each person control remains a `<button>` with `aria-expanded` / `aria-controls="panel"`.
- Theater headers are non-interactive labels (or `role="presentation"` group labels), not fake people.

## Out of scope
- New portraits or story rewrites.
- Adding empty J6/J7 doors.
- Changing Pages deploy pipeline.
- Non-public internal org names in visible copy.

## Success criteria
- Live Pages chart shows three theaters under Carl with embossed portrait chips.
- SVG connectors read as a deliberate tree (not a flat door grid).
- Clicking a person still opens the existing dossier content.
- Usable at ~390px, tablet, and desktop without horizontal scroll.
- Public sanitize still holds.

## Implementation note
Prefer editing `index.html` / `styles.css` / `app.js` in place on `main` via PR (or direct merge per owner preference). STAFF data model in `app.js` stays the source of truth; chart markup is reorganized around theater groups.
