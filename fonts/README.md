# Fonts

All three brand families are loaded from **Google Fonts** — this matches the source site exactly. No local `.ttf` / `.woff2` files are needed.

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
```

Or import via `colors_and_type.css` (it does this for you).

| Family | Role | Weights used |
|---|---|---|
| **Cormorant Garamond** | Serif display + body. Headlines, paragraphs, form inputs, chat messages. Italic 300 for emphasis. | 300 / 400 / 600 / italic 300 |
| **Syne** | Sans-serif display. Brand mark "0", nav logo, service names, avatar glyph. | 400 / 700 / 800 |
| **Space Mono** | Monospace micro-labels. Eyebrows, nav links, form labels, counters, CTAs. | 400 / 700 |

No substitution was needed. If the user later requests self-hosted files, download the TTFs from Google Fonts and drop them into this folder with a matching `@font-face` block.
