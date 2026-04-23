---
name: shoonyapurna-design
description: Use this skill to generate well-branded interfaces and assets for Shoonyapurna, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Files in this skill

- `README.md` — brand context, content fundamentals, visual foundations, iconography (read this first)
- `colors_and_type.css` — drop-in CSS variables for colors, type, spacing, radii, shadows
- `fonts/` — Google Fonts references (Cormorant Garamond, Syne, Space Mono)
- `assets/` — logo SVGs (orbit, wordmark, outline, solid)
- `preview/` — 19 example cards demonstrating the system in use
- `ui_kits/website/` — high-fidelity recreation of shoonyapurna.com with React components

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css" />
```

Then use CSS variables like `var(--ink)`, `var(--gold)`, `var(--font-serif)`, and the semantic classes `.h-hero`, `.eyebrow`, `.p-body`.

## The one rule

The "0" is sacred. Italicized phrases are always gold-light. Eyebrows are always mono, uppercase, wide-tracked. If you break these, you're not designing Shoonyapurna.
