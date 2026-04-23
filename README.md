# Shoonyapurna Website — UI Kit

High-fidelity recreation of **shoonyapurna.com**. Pixel-parity components lifted from the canonical `index.html` in `para9/Shoonyapurna@main`.

## Files

- `index.html` — composite demo: nav → hero → services → features → about → waitlist → contact → footer, with the AI chat panel and scroll reveals. Opens like the live site.
- `Nav.jsx` — fixed top nav + coming-soon banner, AI badge pill.
- `Hero.jsx` — orbit-around-zero centerpiece with animated rings, tagline, CTAs, scroll hint.
- `Services.jsx` — 2×4 service grid using the 1px gold-gap trick.
- `FeaturesBand.jsx` — Free-tool pills on the navy×burgundy band.
- `About.jsx` — two-column about + CEO quote card.
- `Waitlist.jsx` — full waitlist form with selectable service tags + success state.
- `Contact.jsx` — two-column contact info + direct enquiry form.
- `Footer.jsx` — footer zero + copy.
- `ChatPanel.jsx` — AI FAB + panel with AI / user message bubbles.

Load order in `index.html`:

```html
<script type="text/babel" data-presets="env,react" src="Nav.jsx"></script>
<script type="text/babel" data-presets="env,react" src="Hero.jsx"></script>
<!-- … one per component … -->
<script type="text/babel" data-presets="env,react" src="App.jsx"></script>
```

Each component attaches itself to `window` so later scripts can reference it.

## Known differences from the live site

- Form submissions are local-only (no backend call).
- The AI chat echoes a canned response rather than hitting Anthropic's API.
- Scroll reveals use a simple `IntersectionObserver` with a stagger; close to but not byte-identical to the original.
