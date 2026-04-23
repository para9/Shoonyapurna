# Shoonyapurna Design System

> **Zero. Infinite possibilities.**

Shoonyapurna (शून्यपूर्ण — "zero → full") is a multidisciplinary consulting and technology firm headquartered in Greater Noida, India. The flagship product is an **AI OS platform** that unifies Legal Intelligence, Media Intelligence, Operational Management, Financial Services, Survey & Research, Computer Networking, and Software Development under one domain — all augmented by an in-house AI assistant. Free public utilities include OCR and multilingual translation.

The brand voice leans philosophical and editorial — more *luxury journal* than *SaaS landing page*. The "0" is not emptiness; it is the origin. That metaphor drives everything: the mark, the orbit animation around the hero zero, the pairing of a literary serif with monospace micro-copy, the ink/paper/gold palette.

---

## Sources

This system was derived from one source repository:

- **GitHub:** [`para9/Shoonyapurna`](https://github.com/para9/Shoonyapurna) @ `main` — a single-page marketing site (`index.html`, ~52 KB) serving https://shoonyapurna.com. Contains the full design vocabulary: palette variables, typography stack, hero orbit, service grid, waitlist and contact forms, and an in-house AI chat widget. No separate design system, Figma file, or component library was provided.
- **CEO:** Usha Singh · shoonyapurna@shoonyapurna.com · +91 94331 30278
- **Location:** Greater Noida, Uttar Pradesh, India

Related para9 repositories exist (`ShunyaPoorna_AI`, `shunyapoorna-website`, `Infocrunch-HRMS`, etc.) but the design system here is scoped to the `Shoonyapurna` marketing site, which is the canonical source of brand expression.

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This file — brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Agent skill entry point. Read this when invoking the skill. |
| `colors_and_type.css` | CSS variables for the full palette + typography scale. Import this first. |
| `fonts/` | Google Fonts references (Cormorant Garamond, Syne, Space Mono). Loaded via CDN — no local `.ttf` files needed. |
| `assets/` | Brand marks, the orbit motif, and placeholder illustrations. |
| `preview/` | Cards rendered in the Design System review tab — type, colors, spacing, components, brand. |
| `ui_kits/website/` | High-fidelity recreation of the shoonyapurna.com marketing site. |

---

## Content fundamentals

**Tone.** Philosophical, editorial, quietly confident. The brand is named after a Sanskrit idea — *shoonya* (zero, void) + *purna* (fullness, completeness). Copy leans into that paradox without being precious.

**Voice.** "We" — plural, institutional, unhurried. Second person "you" appears only in forms and CTAs ("Your full name", "Describe your use case"). Never "I".

**Casing.**
- **ALL CAPS with wide letter-spacing** for micro-labels (nav links, section eyebrows, form labels, footer copy). Space Mono.
- **Sentence case** for display headlines ("Every domain. *One address.*"). Cormorant Garamond, 300 weight.
- **Title Case** only in proper nouns and service names ("Legal Intelligence", "Media Intelligence").

**Italics carry meaning.** Italicized Cormorant phrases *always* get the gold-light color — "*Infinite* Possibilities", "*One address.*", "*zero*", "*conversation.*". They're the brand's accent — literally the gold foil on the page.

**Punctuation.**
- Em-dashes and interpuncts (`·`) instead of commas to separate thoughts.
- Trailing periods on display headlines ("Born from zero.", "Join the waitlist.") — even fragments get closure.
- Arrows for CTAs ("Submit Interest →").
- No Oxford commas; British spellings ("optimisation", "organisation") in marketing prose.

**Emoji.** Used functionally but sparingly — only as list-item glyphs in service cards (⚖️ 📡 ⚙️ 💹 📊 🌐 💻 🤖) and contact info (📍 📧 📞 🌐). Never in headlines or body prose. They render flat with a subtle grayscale filter (`filter: grayscale(0.3)`). They are placeholders — the long-term goal is a custom icon set; see Iconography.

**Phrasing tics.**
- **Unity / oneness:** "All under one domain", "One address", "Every domain. One address."
- **Origin metaphor:** "Born from zero", "Building from zero to full-scale solutions", "Zero is not emptiness".
- **Gated access:** "Limited rollout", "Early access platform", "We review each submission individually", "Expected review time: 3–7 business days".
- **Openness:** "Access to capability should not be gated" — the free OCR/translation tools are explicitly framed as generosity.
- **Greeting:** The AI opens with *"Namaste!"* — the only Hindi word on the entire site, used deliberately.

**Sample copy (verbatim):**
- "Zero. *Infinite* Possibilities."
- "Multidisciplinary Consulting & In-House AI — All Under One Domain"
- "Every domain. *One address.*"
- "We believe zero is not emptiness; it is the origin of all possibility."
- "Start the *conversation.*"

---

## Visual foundations

**Palette.** Deep ink black (`#0a0a0a`) as the ground, warm parchment (`#f5f0e8`) as the ink, **antique gold** (`#c8a96e`) as the single accent, with muted navy (`#1a3a5c`) and burgundy (`#8b2635`) as secondary accents used very sparingly (AI badge, "Free" pill). Everything else is alpha-modulated — `rgba(200,169,110,0.08–0.4)` for gold strokes and fills, `rgba(245,240,232,0.6–0.9)` for paper text at varying emphasis.

**Type.** A three-family system:
1. **Cormorant Garamond** — serif display + body. Weights 300 / 400 / 600, with italic 300. Used for all headlines, long-form paragraphs, form inputs, chat messages. The italic *is* the accent.
2. **Syne** — sans-serif for the brand mark, nav logo, service names, and a few UI labels. Weights 400 / 700 / 800 with tight negative letter-spacing (`-1px` to `-8px`) on the big "0".
3. **Space Mono** — monospace for eyebrows, micro-labels, badges, counters, timestamps, everything uppercase with wide tracking. Weights 400 / 700.

**Type feel.** Display sizes are generous (clamp 32–56px for section titles, clamp 28–52px for hero), body is 15–18px, and mono labels shrink to 7–10px with `letter-spacing: 2–4px` and `text-transform: uppercase`. The mono-at-tiny-size-with-wide-tracking move is the brand's signature.

**Backgrounds.** Almost always black. The hero uses a radial gradient (`radial-gradient(ellipse at 50% 60%, #1a2a3a 0%, #0a0a0a 70%)`) overlaid with an inline SVG fractal-noise grain at 0.04 opacity for paper texture. Sections alternate between pure black and `rgba(255,255,255,0.015)` — nearly invisible tonal shifts. One feature band uses a very low-opacity `linear-gradient(135deg, rgba(26,58,92,0.15), rgba(139,38,53,0.08))` — navy → burgundy. **No photography. No stock illustrations.**

**Motifs.**
- The **orbit system** around the zero — three concentric circles (260 / 330 / 400 px) with rotating service labels, one solid and one dashed border, dots at 12 o'clock that emit a gold glow. This is the hero's centerpiece and the brand's visual DNA.
- **Hairline dividers** — 1px gradients from `rgba(200,169,110,0.4)` to transparent, placed after section eyebrows.
- **Quote glyphs** — an enormous 80px serif `"` sits at 0.15 opacity in the top-left of the CEO card.

**Animation.** Slow and celestial, never bouncy.
- `pulse-glow` on the hero zero — 3s infinite ease-in-out, animates `text-shadow` from small gold halo to a larger one.
- Orbit rotations at 18s / 28s / 40s (reversed on the dashed middle ring) — linear, infinite.
- `fadeUp` on hero elements — 1.2s ease with staggered 0.4s / 0.6s / 0.8s / 1s delays.
- `bounce` on the scroll hint — 2s ease-in-out.
- Transitions on hover are uniformly `0.3s ease` (buttons, nav links, form borders, service cards).
- The chat panel opens with `cubic-bezier(0.16, 1, 0.3, 1)` over 0.4s — smooth, slightly overshooting.

**Hover states.** Outlined buttons **invert** on hover (outline → filled, paper on gold). Filled buttons invert the other direction (filled → outline). Nav links shift from `rgba(245,240,232,0.6)` to gold. Service cards get a subtle `#0f0f0f` background plus a 135° gold gradient overlay fading in.

**Press states.** No explicit press treatment — the hover invert covers it.

**Borders.** Almost always 1px, gold at low opacity (`rgba(200,169,110,0.08–0.25)`). Occasionally dashed on the middle orbit. Border-radius is minimal: `--radius: 2px` is the global token. Circular only for the AI FAB and chat avatar.

**Shadows.** Subtle and gold-tinted.
- Button glow: `0 0 10px var(--gold)` on the orbit dots.
- Chat panel: `0 24px 80px rgba(0,0,0,0.7)` — deep, soft, black.
- AI FAB: `0 8px 32px rgba(26,58,92,0.5)` hovering to `0 12px 40px rgba(26,58,92,0.7)`.
- Hero zero: animated `text-shadow` — `0 0 40px rgba(200,169,110,0.2), 0 0 80px rgba(200,169,110,0.05)` pulsing to 80px / 160px.

**Transparency & blur.** The nav uses `backdrop-filter: blur(8px)` with a gradient from 95% → 70% black. The "Coming Soon" banner uses `blur(4px)` over a 10%-gold tint. Cards sit on `rgba(255,255,255,0.03–0.06)`.

**Corners.** 2px radius as the global default. Inputs, cards, buttons — all sharp. Circles only for the FAB, avatar, and orbits.

**Cards.** Black background, 1px low-opacity gold border, flat (no shadow), generous padding (32–40px). The service grid is a special case: a 1px gold-tinted background behind the grid with 1px gaps between cards creates the illusion of internal dividers — no per-card borders needed.

**Cursor.** `crosshair` globally. Editorial, precise, slightly alien.

**Layout.**
- Max content width: **1200px**. Everything centers within it.
- Section padding: `100px 48px` desktop, `60px 20px` mobile.
- Grid gap default: 16–32px for forms, 80px for about/contact two-column.
- Fixed elements: nav (top), coming-soon banner (64px below nav), AI FAB (bottom-right, 24px inset), chat panel (replaces FAB when open).

**Color vibe of imagery.** There is no imagery. If placeholders are needed, use warm sepia / gold-tinted duotone on black — never cool, never high-saturation.

---

## Iconography

**Current state: emoji placeholders.** The live site uses emoji (⚖️ 📡 ⚙️ 💹 📊 🌐 💻 🤖 📍 📧 📞) styled with `filter: grayscale(0.3)` so they read as muted, near-monochrome glyphs against the dark ground. This is intentional but provisional — the brand is clearly heading toward a custom gold-line icon set that matches the orbit/brass-on-ink aesthetic.

**No icon font or SVG sprite is defined in the source.** No Lucide, Heroicons, Material, or similar are imported.

**Unicode glyphs.** A few appear:
- `✦` (4-pointed star) in the waitlist success screen.
- `⬡` (hexagon) prepended to the "In-House AI" badge via `::before`.
- `→` at the end of every CTA button.
- `"` serif quote mark as a decorative watermark on the CEO card.

**Recommendation for agents generating new surfaces.** If you need an icon and none exist in `assets/`:
1. **Prefer Lucide** ([lucide.dev](https://lucide.dev)) loaded from CDN — stroke-based, 1.5–2px, matches the hairline aesthetic and recolors cleanly to gold.
2. **Flag the substitution** — add a comment noting Lucide was used in place of a native icon set.
3. **Never** draw bespoke SVG icons from scratch, add a second icon system, or mix filled and outline styles on the same surface.
4. **Never** replace the existing emoji without asking — they are part of the current brand expression.

**Logos & marks.** The "0" is the mark. It appears in three forms documented in `assets/`:
- Monogram zero (outline gold, hero).
- Nav logo ("0" followed by "Shoonyapurna" in italic serif, gold + paper).
- Footer zero (solid gold, small).

---

## Substitutions flagged

- **Fonts** — Cormorant Garamond, Syne, and Space Mono all loaded from Google Fonts, matching the source site exactly. No substitution needed.
- **Icons** — The source uses emoji throughout; this system keeps that. If a cleaner icon set is desired, Lucide is the proposed path (not yet wired up).
- **Imagery** — The source has no photography or illustration; none has been invented here.
