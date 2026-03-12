# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the project root (`Website design/Project 4 Spartan Flow/`):

- `npm run dev` — Start dev server (Express + Vite HMR, default port 5001)
- `npm run build` — Production build (Vite client → `dist/public/`, esbuild server → `dist/index.cjs`)
- `npm run start` — Serve production build
- `npm run check` — TypeScript type check (no emit)
- `npm run db:push` — Push Drizzle schema to database (requires `DATABASE_URL` env var)
- `npm run deploy` — Deploy client to GitHub Pages via `gh-pages` (copies `index.html` → `404.html` for SPA routing)

## Architecture

React 18 + Express full-stack app, originally scaffolded on Replit. Single server serves both API and client.

### Client (`client/`)
- **Entry**: `client/src/main.tsx` → `App.tsx`
- **Routing**: `wouter` — routes in `App.tsx`: Home (`/`), Contact (`/contact`), 3 case study pages (`/case-studies/channel-fusion-14-demos-90-days`, `/case-studies/precision-networks-first-predictable-pipeline`, `/case-studies/austin-answer-pro-voice-ai-agent`). Unknown routes fall back to Home.
- **UI**: Tailwind CSS + shadcn/ui (new-york style, primitives in `client/src/components/ui/`)
- **Animations**: Framer Motion throughout section components
- **Data fetching**: TanStack React Query (`client/src/lib/queryClient.ts`)
- **Cal.com embed**: `@calcom/embed-react` on Contact page for booking
- **Additional libs**: Swiper (carousels), react-countup (animated numbers), react-intersection-observer (scroll triggers)
- **Static data**: `client/src/data/workflows.json`

### Server (`server/`)
- **Entry**: `server/index.ts` → Express + HTTP server
- **Routes**: `server/routes.ts` — API routes (prefix `/api`), currently scaffold only
- **Storage**: `server/storage.ts` — `IStorage` interface with in-memory `MemStorage`
- **Static serving**: `server/static.ts` (production), `server/vite.ts` (dev HMR proxy)

### Shared (`shared/`)
- `shared/schema.ts` — Drizzle ORM schema (PostgreSQL) and Zod validation, shared between client and server

### Build (`script/build.ts`)
Two-phase: Vite builds client, esbuild bundles server to CJS. Server deps on an allowlist are bundled; others are externalized.

## Path Aliases

| Alias | Resolves to |
|-------|------------|
| `@/` | `client/src/` |
| `@shared/` | `shared/` |
| `@assets/` | `attached_assets/` |

Configured in both `vite.config.ts` and `tsconfig.json`.

## Design System

Light/professional theme. Key colors in `tailwind.config.ts`:
- **Primary**: `#1E3A5F` (navy blue) — headings, CTAs, brand identity
- **Accent**: `#0D9488` (teal) — highlights, secondary actions, success states
- **Background**: white (`#FFFFFF`)
- **Cards/sections**: light gray (`hsl(210 20% 98%)`)
- **Warm accents**: `#F59E0B` (amber) — used sparingly for emphasis
- **Font stack**: Inter (body), DM Sans (headings)

CSS custom properties for shadcn/ui theming defined in `client/src/index.css`. Note: `design_guidelines.md` is from an earlier portfolio project (dark theme) and does **not** reflect the current Spartan Flow design — refer to `tailwind.config.ts` and `client/src/index.css` as the source of truth.

## Key Conventions

- Pages in `client/src/pages/`, section components in `client/src/components/`
- Home page is composed of 13 section components in order: Hero → TrustBar → PainPoints → HowItWorksVideo → HowItWorks → TechnologyDifferentiator → ClientResults → Guarantee → Testimonials → FounderSection → Integrations → FAQ → FinalCTA
- shadcn/ui config in `components.json` — use `@/components/ui/` for primitives
- API routes must be prefixed with `/api`
- Database schema changes go in `shared/schema.ts` using Drizzle ORM, then run `npm run db:push`
- `attached_assets/` contains founder photos, generated images, and design reference text files
- GitHub Pages deployment: `base: "/"` in `vite.config.ts`, custom domain `spartanflow.com` (via `Humanfryo.github.io/automation-website`). Deploy copies `index.html` → `404.html` for SPA client-side routing.
- SEO: `client/index.html` includes structured data (JSON-LD), Open Graph/Twitter meta tags, Google Analytics (`G-3ZTSW8QJQ5`), and `sitemap.xml`/`robots.txt` in `client/public/`
