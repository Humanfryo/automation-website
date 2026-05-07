# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The Spartan Flow marketing site — single-page editorial-industrial landing for a B2B appointment-setting service. Pure static React + Vite SPA, deployed to Vercel.

## Commands

Run from the project root:

- `npm run dev` — Start Vite dev server on `http://localhost:5173/`
- `npm run build` — Production build to `dist/`
- `npm run preview` — Serve the production build locally
- `npm run check` — TypeScript type check (no emit)

## Architecture

Static single-page React + TypeScript SPA. No backend. No router. No state management. Everything is one composed page rendered from [client/src/App.tsx](client/src/App.tsx).

```
client/
├── index.html              ← entry, includes GA, fonts, SEO meta
└── src/
    ├── main.tsx            ← React root
    ├── App.tsx             ← composes all 13 sections
    ├── index.css           ← design tokens (CSS vars), base styles, responsive overrides
    ├── components/         ← 13 section components + 5 helpers
    └── hooks/
        └── useReveal.ts    ← IntersectionObserver hook with 250ms fallback
```

### Component composition

Order in App.tsx (matches handoff brief):
Nav → Hero → Problem → HowItWorks → Engine → Results → Guarantee → Testimonials → Founders → Integrations → FAQ → FinalCTA → Footer.

Helpers (one per file): [Reveal](client/src/components/Reveal.tsx), [TickNumber](client/src/components/TickNumber.tsx), [Eyebrow](client/src/components/Eyebrow.tsx), [ArrowIcon](client/src/components/ArrowIcon.tsx), [PlaceholderImage](client/src/components/PlaceholderImage.tsx).

## Design tokens

CSS custom properties declared once in [client/src/index.css](client/src/index.css) under `:root`. Components use these via `var(--token)` in inline styles — there's no Tailwind in this project. Tokens:

| Token | Value |
| --- | --- |
| `--bone` | `#F5F2EC` (page canvas) |
| `--ink` | `#0B1220` (headings, footer) |
| `--graphite` / `--graphite-dim` | body text / muted |
| `--rule` / `--rule-strong` | hairline dividers |
| `--accent` / `--accent-ink` | `#B85C2A` copper-rust + hover |
| `--paper` | `#FFFFFF` (only case-study stat cells) |

Section bone-tinted backgrounds (`#EFEBE2`) are inlined per section, not tokenized.

Fonts (Google Fonts, loaded in [client/index.html](client/index.html)):
- Inter (400-800) — display + body
- Fraunces (italic 400, 500) — emphasis only
- JetBrains Mono (400, 500) — eyebrows, big numbers, mono details

## Style conventions

- **Inline styles + CSS variables** for component-specific layout. No CSS modules, no Tailwind, no styled-components.
- **Custom utility classes** (`.shell`, `.shell--narrow`, `.btn`, `.display`, `.serif-italic`, `.eyebrow`, `.bignum`, `.hairline`, `.reveal`) live in [client/src/index.css](client/src/index.css).
- **`border-radius: 0` everywhere.** No rounded corners on layout containers.
- **No drop shadows, no gradients.** Section structure is hairline rules.
- **Responsive overrides** are at the bottom of [client/src/index.css](client/src/index.css), gated on `@media (max-width: 980px)`. Inline styles can't do media queries — that's why these live in CSS.

## Voice & copy rules

The handoff has a strict voice doc — see [design_handoff_spartanflow_website/README.md](design_handoff_spartanflow_website/README.md) "Voice & copy rules" section. Banned words, banned phrases, banned constructions. If editing copy: read that section first.

## Deploy

Vercel, configured via [vercel.json](vercel.json). Push to `main` triggers a build; PRs get preview deployments. Build output is `dist/` at the repo root. Custom domain `spartanflow.com` is configured in the Vercel dashboard, not in this repo.

## Reference

- [design_handoff_spartanflow_website/](design_handoff_spartanflow_website/) — full design brief, source-of-truth JSX, exact copy, voice rules. **Don't ship its files** — they're prototype scaffolding (in-browser Babel + window globals). The React port lives in `client/src/components/`.
- SEO: GA tag `G-3ZTSW8QJQ5` in [client/index.html](client/index.html). JSON-LD `ProfessionalService` block also there. [client/public/sitemap.xml](client/public/sitemap.xml) + [client/public/robots.txt](client/public/robots.txt).
