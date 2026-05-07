# Handoff: Spartan Flow Website

## Overview

Full B2B marketing site for **Spartan Flow** — an appointment-setting service for industrial operators (manufacturing, distribution, MSPs, logistics, B2B services). The audience skews 45–60-year-old plant managers, ops directors, and owner-operators who are skeptical of typical "AI agency" pitches.

The design intentionally rejects 2024 SaaS-template tropes (pastel feature grids, three-stat hero cards, icon-decorated bullets, glassmorphism). It reads as **editorial industrial** — *The Economist* layout × Linear's restraint × the texture of a well-made field manual.

## About the Design Files

The HTML files in this bundle are **design references** — React-in-the-browser prototypes built with inline Babel for fast iteration. They show intended look, copy, structure, and behavior. **Do not ship the HTML as-is.** Recreate it in the target codebase's existing environment (the brief specifies React + Vite + Tailwind on Replit) using your project's established patterns: real component files, design tokens declared in `tailwind.config.js` or as CSS custom properties, semantic HTML, accessibility passes.

If no environment exists yet, set up React + Vite + Tailwind to match the brief. One component per file, tokens declared once.

## Fidelity

**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all decided. Recreate pixel-perfectly. The placeholder image slots (portraits, industrial scenes) are explicitly placeholders — the user will supply real photography during build. Replace `<PlaceholderImage>` instances with real `<img>` elements when assets arrive.

---

## Design tokens

### Colors

| Token | Value | Use |
|---|---|---|
| `--bone` | `#F5F2EC` | Page canvas. The default background everywhere. |
| `--ink` | `#0B1220` | Primary heading color, footer background, dark stat strip. |
| `--graphite` | `#2A2F38` | Body text, secondary headings, eyebrow text default. |
| `--graphite-dim` | `#6B6F77` | Muted labels, sub-copy, mono detail lines, secondary mono. |
| `--rule` | `rgba(42, 47, 56, 0.18)` | Default 1px hairline divider. |
| `--rule-strong` | `rgba(42, 47, 56, 0.32)` | Stronger hairline (section borders, button outlines). |
| `--paper` | `#FFFFFF` | Pure white — **only** for select inputs and the case-study stat cells. Never used as a section background. |
| `--accent` | `#B85C2A` | Copper-rust. The single accent color. |
| `--accent-ink` | `#8A4520` | Hover/pressed state for accent backgrounds. |
| Section bone-tinted | `#EFEBE2` | Slightly darker bone for alternating sections (engine, voices, FAQ). |
| Footer ink overlays | `rgba(245,242,236,0.85)` / `0.7` / `0.55` / `0.18` / `0.15` | Bone-on-ink hierarchy in the footer. |

**Pure white is restricted.** Bone is the canvas. Pure white only appears on the case-study stat cells inside `Results`.

**No gradients.** No purple, no AI lavender, no pastel feature tints.

### Typography

Three families, loaded from Google Fonts:

- **Display / body sans:** Inter (weights 400, 500, 600, 700, 800) — `font-family: "Inter", system-ui, -apple-system, sans-serif`
- **Editorial italic:** Fraunces, italic only (weights 400, 500) — `font-family: "Fraunces", "Iowan Old Style", Georgia, serif; font-style: italic`
- **Mono:** JetBrains Mono (weights 400, 500) — `font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`

#### Type roles

| Role | Family | Weight | Size | Tracking | Line-height | Notes |
|---|---|---|---|---|---|---|
| Hero headline | Inter | 800 | `clamp(44px, 6.4vw, 92px)` | `-0.022em` | 1.02 | Two lines max. Last line uses Fraunces italic at the same size in `--accent`. |
| H2 (section titles) | Inter | 800 | `clamp(32px, 4vw, 56px)` | `-0.022em` | 1.05–1.15 | Often has one Fraunces italic phrase in `--accent`. |
| H3 (case headlines, founder names) | Inter | 700 | 28–40px | `-0.015em` | 1.1 | |
| Italic headings (problem essays) | Fraunces | 400 italic | 28px | `-0.012em` | 1.15 | Field-manual chapter feel. |
| Pull quotes | Fraunces | 400 italic | `clamp(24px, 2.6vw, 38px)` | `-0.012em` | 1.3 | Wrapped in `"`. |
| Body | Inter | 400 | 16–18px | default | 1.6–1.7 | Generous. Default body is 17/1.65. |
| CTA strip line | Fraunces | 400 italic | 22px | `-0.012em` | 1.3 | |
| Eyebrow | JetBrains Mono | 500 | 11px | `0.16em` | default | UPPERCASE. Used for section markers, all-caps labels. |
| Stat label (mono small) | JetBrains Mono | 500 | 10–11px | `0.14em` – `0.16em` | default | UPPERCASE. |
| Big stat number | JetBrains Mono | 500 | 32–184px | `-0.02em` | 0.95 | `font-feature-settings: "zero", "tnum"` for tabular numerals. |
| Detail mono | JetBrains Mono | 400 | 11–14px | varies | 1.6 | Dim color. Used for "what we actually do" detail lines. |

**Italics carry emphasis.** Don't use bold for emphasis in body copy. The Fraunces italic is doing the work that bold would do in a normal site.

**Inter font features:** `"ss01", "cv11"` (alt single-storey `a`, alt curved `l`) — gives Inter slightly more character.

### Spacing

| Token | Value | Use |
|---|---|---|
| Page gutter | 32px | Horizontal padding on `.shell`. |
| Shell max-width | 1280px | Default content width. |
| Shell narrow max-width | 760px | Used for guarantee, final CTA. |
| Section vertical | 112px | Default `padding: 112px 0` on `<section>`. |
| Section vertical (mobile) | 72px | Below 720px breakpoint. |
| Final CTA section | 160px / 160px | Generous space. |
| Element gap small | 16–24px | Within blocks. |
| Element gap medium | 32–48px | Between elements within a section. |
| Element gap large | 64–96px | Between major sub-blocks. |
| Hero stat top padding | 24px | Above the big `8–12` number. |

### Borders & rules

- **Hairline default:** 1px solid `var(--rule)`
- **Hairline strong:** 1px solid `var(--rule-strong)`
- Section structure is 99% hairline rules. **No card backgrounds, no rounded corners on layout containers, no drop shadows.**
- `border-radius: 0` everywhere. Buttons, blocks, dividers — all square edges.

### Shadows

**None.** No drop shadows anywhere.

### Motion

- Scroll reveal: 8px translate-up + opacity 0→1, 900ms `cubic-bezier(0.2, 0.6, 0.2, 1)`. Triggered once on first intersection. **Has a 250ms fallback timeout** so above-the-fold content shows even if `IntersectionObserver` doesn't fire (this is non-negotiable — the hero is otherwise invisible in some iframe contexts).
- Number tick-up: 1.4s ease-out cubic. Ticks once and stops. Same 250ms fallback.
- Hover transitions: 180–240ms ease.
- Arrow icons translate `4px` on hover.
- **No parallax, no scroll-jacking, no hover-explosion effects, no background videos, no custom cursors, no trailing dots.**

### Focus state

`outline: 2px solid var(--accent); outline-offset: 3px;` on `:focus-visible`. Visible everywhere. Skip-to-content link at top of page (`.skip`).

---

## Layout system

- **12-column grid implied; asymmetric in practice.** Sections break wider, narrower, off-center as the content demands.
- **`.shell`** is the default content container: `max-width: 1280px`, `padding: 0 32px`, centered.
- **`.shell--narrow`** is `max-width: 760px` for longform-article feel (guarantee, final CTA).
- **Mobile breakpoint at 980px.** Below this, multi-column grids collapse to single column, the desktop nav collapses to an off-canvas drawer, and the engine's stage diagram switches from horizontal to vertical with rotated arrows.
- **Test viewport range: 320px → 1920px.**

---

## Components & sections

Sections are numbered as they appear in the page. Each is its own React component file.

### 1. Nav (`<Nav>`)

- Sticky on scroll. **Hairline border-bottom appears only after `window.scrollY > 40`** — transitions in over 240ms.
- Background: `var(--bone)`. Height: 72px. Z-index: 80.
- Left: a 10×10px diamond (rotated square) in `var(--accent)`, then "Spartan Flow" in display 19px / `-0.01em`.
- Center/right: five links — How It Works · Results · About · Blog — at 14px / 500 / `var(--graphite)`. Then a primary button "Book a Call" in `--accent`, 14px, `padding: 10px 18px`.
- **Mobile:** burger button reading "MENU" in mono 11px / `0.16em`, with a `1px solid var(--rule-strong)` outline. Tapping opens an off-canvas drawer that translates from `-100%` to `0` over 320ms.
  - Drawer is `position: fixed; inset: 0;` with `var(--bone)` background.
  - Each link is a 22px / 500 row with a hairline bottom border, 20px vertical padding, and a small mono number `01`–`05` on the right.
  - "CLOSE" button mirrors the burger.

### 2. Hero (`<Hero>`)

- Eyebrow: `B2B APPOINTMENT SETTING / BUILT FOR INDUSTRIAL OPERATORS` (mono small caps).
- 56px gap.
- Asymmetric two-column grid (`1.4fr 1fr`, 64px gap, `align-items: end`).
- **Left column:**
  - H1 in Inter 800, `clamp(44px, 6.4vw, 92px)`. Three lines:
    > We book the meetings
    > your sales team
    > *actually closes.* ← Fraunces italic 400 in `--accent`
  - 36px below: subline in 18px / 1.55, max-width 540px.
    > For manufacturing, distribution, MSPs, and B2B services teams that don't have time to chase cold leads.
  - 40px below: two CTAs side by side.
    - Primary: "Book a Strategy Call" + arrow.
    - Text link: "See how it works" + arrow.
- **Right column:** ONE hero stat. Eyebrow `Per client, monthly`, 12px gap, then the big mono number `8–12` at `clamp(96px, 14vw, 184px)`. Below: 14px copy max-width 280px.
  > Qualified meetings booked per month, per client. The kind your AEs don't ghost.
- 96px below hero grid: a thin "Currently working with [hairline] 28 industrial operators across NA" strip — eyebrow + flex-grow hairline + mono 12px tick-up number.

**Critical:** No "no credit card needed" microcopy. No three-stat hero cards. ONE hero stat — confidence.

### 3. Problem (`<Problem>`)

Editorial three-column block. **No icons, no cards.**

- Header row: `auto 1fr` grid. Left: eyebrow `§ 01 / The problem`. Right: H2 "Three ways outbound usually goes wrong." (max-width 760px).
- 80px gap.
- Top hairline-strong, then a 3-column grid with vertical hairline dividers (1px solid `var(--rule)`) between cells, 32px padding right of cell content / 32px left padding on inner cells.
- Each cell: mono `01`/`02`/`03` (11px / `--graphite-dim` / `0.16em`), 16px gap, Fraunces italic 28px title in `--ink`, 20px gap, body 16/1.6 in `--graphite`.
  - **The three titles are literal:**
    - *The revolving door of SDRs*
    - *DIY outreach that fizzled*
    - *The agency that booked junk*
  - Bodies are 2–3 sentences each, specific. See `sections-2-problem.jsx` for exact copy.
- Bottom hairline-strong.
- 80px gap.
- Final centered line in Fraunces italic 26px / `--ink` / max-width 640px:
  > "There's a way to run outbound that doesn't require any of those."
- Below: text-link "How we do it" with arrow.

### 4. How It Works (`<HowItWorks>`)

Typographic timeline. **No 4-step icon grid.**

- Eyebrow `§ 02 / How it works`, 20px gap, H2 "From kickoff to your first qualified meeting in *30–45 days*." (italic span on the timeframe in `--accent`), max-width 880px.
- 80px gap.
- Four rows. Each row: `120px 1fr 280px` grid, 48px gap, 40px vertical padding, hairline-strong top border (and bottom on the last row), `align-items: start`.
  - **Col 1 (mono):** step number `01`–`04` (14px / `--graphite`), 8px gap, time-window label like `2 WEEKS` (11px / `--graphite-dim` / `0.16em` / uppercase).
  - **Col 2:** display 30px / 700 title, 16px gap, 17/1.6 body (max-width 620px).
  - **Col 3 (mono):** detail line "/ ICP workshops · win-loss interviews · objection mapping" — 12px / `--graphite-dim` / 1.6.
- 80px gap.
- CTA strip: 3-column `1fr auto 1fr`, 48px gap, vertically centered.
  - Left: eyebrow `Ready?`, then Fraunces italic 22px line: "Book a 30-minute call. We'll tell you whether we can help."
  - Center: 1×60px hairline-strong divider.
  - Right (justify-end): primary button "Book a Strategy Call" + arrow.

**Step copy (verbatim):**

| # | Title | Time | Body |
|---|---|---|---|
| 01 | Learn your business | 2 weeks | We sit with your sales team, your AEs, your founder. We read your last twelve closed-won deals. We don't write a single email until we can describe your buyer the way you do. |
| 02 | Build your outreach system | 1 week | Domains warmed, lists scrubbed, sequences written by humans, signal-based triggers wired up. We show you every email before it goes out. |
| 03 | Land in your calendar | Ongoing | Replies route to a real person on our team. We qualify, push back on tire-kickers, and only book what fits your ICP. First qualified meeting usually lands in 30–45 days. |
| 04 | Optimize and scale | Ongoing | Weekly call, monthly written report, quarterly strategy. Sequences that aren't working get killed. The ones that are get more volume. |

### 5. Engine (`<Engine>`)

Background: `#EFEBE2` (slightly tinted bone). Top + bottom 1px hairline.

- Eyebrow `§ 03 / The engine`, H2 "What actually runs under the hood."
- 64px gap.
- **Stage diagram:** 7-column grid `1fr auto 1fr auto 1fr auto 1fr`, top + bottom hairline-strong, 32px vertical padding.
  - 4 stages — each a centered text block: mono `STAGE 01`–`04` label, 10px gap, display 18px / 600 stage name, 6px gap, mono 11px sub-label.
    1. Lead Intelligence — *Clay + signals*
    2. ICP Filtering — *Hand-reviewed*
    3. Personalized Outreach — *Written by humans*
    4. Meeting Booked — *Live qualifier*
  - Between stages: a 32px-wide right-arrow SVG in `--accent`, 1.4 stroke.
  - **Mobile:** grid collapses to 1 column, arrows rotate 90° (`transform: rotate(90deg)`) with 8px vertical padding.
- 64px gap.
- **2×2 cell grid:** 1px hairline-strong outer border. Inner cells separated by 1px lines (use a `gap: 1px` + `background: var(--rule-strong)` trick on the grid container; cells themselves have `#EFEBE2` background and 40px / 36px padding).
  - Each cell: mono label "01 / Lead intelligence" (11px / `--graphite-dim` / `0.16em` / uppercase), 16px gap, body 17/1.6 max-width 540px.

### 6. Results (`<Results>`)

Trust section. Reads like a quarterly report.

- Eyebrow `§ 04 / Real numbers`. H2: "*Real* campaigns. Pulled straight from client dashboards." (italic on "Real" in `--accent`).
- 64px gap.
- **Aggregate stat strip — full-bleed dark block.** Background `--ink`, color `--bone`, 40px vertical padding.
  - 4-column grid, 32px horizontal cell padding, vertical hairlines between cells (`1px solid rgba(245,242,236,0.18)`).
  - Each cell: bignum `clamp(48px, 6vw, 80px)` in `--bone`, with `<TickNumber>` (animates once when in view).
    - 142 — Meetings booked / Q3
    - $18.4M — Pipeline generated
    - 41% — Avg. show rate
    - 11 — Active clients
  - Footer line in `.shell`, 24px gap above and 1px hairline at `0.18` opacity, mono 11px/`0.16em` at 0.55 opacity:
    > AGGREGATE, ALL CLIENTS · TRAILING 90 DAYS · UPDATED WEEKLY
  - **Mobile:** 2×2 grid, no vertical rules, 16/32px padding.
- 96px gap.
- **Three case-study blocks**, each a full-width article:
  - Top hairline-strong, last one also has bottom hairline-strong, 56px vertical padding, 2-col `1fr 1fr` 64px gap.
  - **Left column:**
    - Mono tag "CASE 01 / MANUFACTURING / OEM" (11px / `--graphite-dim` / `0.16em` / 20px bottom margin).
    - H3 display `clamp(28px, 3vw, 40px)` / 1.1.
    - 28px gap, 2 paragraphs body 16/1.65.
    - 32px gap, blockquote: Fraunces italic 22px / 1.35 in `--ink`, then attribution mono 11px / `0.12em` / `--graphite-dim`. Format: `— Director of Sales, precision machining (Ohio)`.
  - **Right column:**
    - 4:3 placeholder image labeled "Industrial scene · {tag}". Replace with real photography.
    - 24px gap, 2×2 stat grid with `1px solid var(--rule-strong)` outer border, `var(--paper)` (white) cell backgrounds, 24/20px cell padding, internal hairlines (`var(--rule)`).
      - Each stat cell: bignum 32px / `--ink`, 10px gap, mono 10/`0.14em`/uppercase label.
    - 24px gap, text-link "Read the full case" + arrow.

**Three case studies (use exactly):**

1. **Manufacturing / OEM** — "14 enterprise demos in 90 days, from a cold start." Stats: 14 demos, $2.4M pipeline, $340K closed Q1, 38.4% reply rate. Quote: *"First month I almost canceled. Second month we closed two and the third was already on the calendar."* — Director of Sales, precision machining (Ohio).
2. **Managed IT Services** — "First predictable pipeline in 11 years." Stats: 22 meetings, $780K ARR, 52.7% show rate, 2 closed Q1. Quote: *"I stopped checking the calendar every morning to see if anything had come in. It just does now."* — Founder, regional MSP (Indiana).
3. **Logistics / 3PL** — "Replaced a $14K/month SDR with a measurable system." Stats: 31 meetings, $29.2K cost/mo, 94% lead quality, $847K closed-won. Quote: *"I haven't had to sit through a single discovery with the wrong person all quarter. That alone paid for it."* — VP Sales, mid-market 3PL (Texas).

Full body copy in `sections-3-engine.jsx`.

### 7. Guarantee (`<Guarantee>`)

`.shell--narrow`, centered.

- Eyebrow `60-Day Guarantee`.
- 24px gap, H2 `clamp(32px, 4vw, 48px)` / 1.15:
  > "If we don't book a qualified meeting in *sixty days*, you don't pay for the next sixty." (italic in `--accent` on "sixty days")
- 32px gap, body 18/1.65 explaining the mechanic — that this has activated twice in three years.
- 40px gap, primary button "Start with the Guarantee" + arrow.

### 8. Voices / Testimonials (`<Testimonials>`)

Background `#EFEBE2`. Top + bottom hairline.

- Eyebrow `§ 05 / Voices`. 64px gap.
- Three pull quotes, no avatars, no star ratings, no pill tags.
- Each row: `auto 1fr` grid, 48px gap, top + (last row only) bottom hairline-strong, 64px vertical padding.
  - Left: mono `01 / 03` index (12px / `0.16em` / `--graphite-dim`).
  - Right: Fraunces italic `clamp(24px, 2.6vw, 38px)` / 1.3 quote in `--ink`, max-width 880px. Then 24px gap, attribution mono 12 / `0.14em` / uppercase: name in `--graphite`, role/company in `--graphite-dim` after a `·`.

Three quotes (use verbatim) — see `sections-4-people.jsx`.

### 9. Founders (`<Founders>`)

Section id `about`.

- Eyebrow `§ 06 / Who we are`, H2 "Two operators who got tired of watching outbound get botched." (max-width 800px).
- 80px gap.
- 2-col `1fr 1fr` 64px grid (collapses on mobile).
  - Each card has top hairline-strong, 32px top padding.
  - Portrait placeholder (4:5) for now — replace with real character-driven photo.
  - 28px gap, display 32px name.
  - 6px gap, mono 12 / `0.14em` / uppercase / `--graphite-dim` role.
  - 24px gap, 17/1.65 first-person bio (4–5 sentences).
  - 20px gap, mono 12 / `0.1em` / `--graphite-dim` location ("Based in Austin, TX").

Bios are 4–5 sentences in **first person singular ("I")**, self-aware, specific. See `sections-4-people.jsx`. **Real photography needed** — character portraits, not corporate headshots.

### 10. Integrations (`<Integrations>`)

64px top/bottom padding.

- Single hairline-strong-bordered horizontal strip with 32px vertical padding.
- 2-column `auto 1fr` grid, 48px gap. Left: eyebrow `Works with`. Right: flex-wrap row of wordmarks.
- Wordmarks set as **plain display text** at 18–20px / 600 / `--graphite` / 0.85 opacity, separated by mono `/` slashes in `--rule-strong`.
- Tools: HubSpot · Salesforce · Google Calendar · Outlook · Slack · Zapier.
- **Do not use vendor logos unless licensed.** Wordmarks-as-text is the safe default; if real logos are licensed for the client, swap them in at the same vertical rhythm.

### 11. FAQ (`<FAQ>`)

Background `#EFEBE2`. Top + bottom hairline.

- Eyebrow `§ 07 / Common questions`, H2 "Things buyers ask before signing."
- 64px gap.
- Accordion list, top hairline-strong, each item bottom-hairline-strong.
- **First item open by default.**
- Each item button: full-width transparent button, 28px vertical padding, 3-col `auto 1fr auto` 32px-gap grid, baseline-aligned.
  - Left: mono 12 / `0.14em` / `--graphite-dim` index `01`.
  - Center: display `clamp(20px, 2vw, 26px)` / 600 question.
  - Right: a `+` glyph in mono 18px / `--accent` that rotates to `45deg` (becomes ×) when open, 240ms ease.
- Answer panel uses a `max-height` transition (0 → 400px) over 360ms `cubic-bezier(0.2, 0.6, 0.2, 1)`, plus padding-bottom transition. Answer body 17/1.65 max-width 720px, in `--graphite`.
- Six questions. See `sections-5-tail.jsx` for verbatim copy.

### 12. Final CTA (`<FinalCTA>`)

`.shell--narrow`, centered, 160px top/bottom padding.

- Eyebrow `§ 08 / Next step`.
- 32px gap, H2 `clamp(40px, 6vw, 80px)` / 1.05:
  > "Thirty minutes. *One honest answer.*" (italic span in `--accent`)
- Body 18/1.6 max-width 520px, 44px gap below.
- Primary button "Book a Strategy Call" + arrow, 18/28px padding, 16px font.
- 28px gap, mono 11 / `0.16em` / uppercase / `--graphite-dim`:
  > "Currently accepting 3 new clients for Q3"

### 13. Footer (`<Footer>`)

Background `--ink`. Color `--bone`.

- 80/32px padding.
- 3-col `1.4fr 1fr 1fr`, 64px gap.
  - **Col 1:** diamond + "Spartan Flow" wordmark (display 22). 24px gap. Tagline in Fraunces italic 20 / 1.4 / `0.85` opacity, max-width 380:
    > "Outbound, run by people who've been in your industry."
  - **Col 2:** eyebrow `Sitemap`, 20px gap, vertical list (`gap: 12`) of How It Works · Results · About · Blog · Book a Call. Each link 15px / `0.8` opacity.
  - **Col 3:** eyebrow `Contact`, 20px gap, list of `hello@spartanflow.com` and LinkedIn. **Only socials that are actually used.** No fake LinkedIn/Twitter/IG/YouTube/TikTok lineup.
- 64px gap.
- 1px top border at `0.15` opacity, 24px gap above.
- Bottom row: space-between flex, mono 11 / `0.14em` / uppercase / `0.55` opacity.
  - Left: "© 2026 Spartan Flow LLC · Built in Austin & Pittsburgh"
  - Right: "v1.4 · Updated Apr 2026"

---

## Buttons

Three button styles. **All have `border-radius: 0`.**

| Class | Background | Color | Border | Hover |
|---|---|---|---|---|
| `.btn--primary` | `--accent` | `--bone` | none | bg → `--accent-ink` |
| `.btn--ghost` | transparent | `--ink` | `1px solid --rule-strong` | bg → `--ink`, color → `--bone` |
| `.btn--text` | transparent | `--ink` | `1px solid --ink` (bottom only) | color + border → `--accent` |

Default padding `14px 22px`, font `Inter 500 / 15px`. Small variant `10px 18px / 14px`. Large variant `18px 28px / 16px`.

Arrow icon (14px square SVG) translates `4px` on hover (220ms cubic-bezier).

## Helpers

- **`<Reveal>`** wrapper: applies `.reveal` class, observes intersection, adds `.is-in` once. Has 250ms timeout fallback. Accepts `delay` prop (ms) for cascading reveals (typical: 0, 60, 80, 90, 140, 160, 200, 240, 320, 400).
- **`<TickNumber value suffix prefix duration decimals>`**: counts up from 0 once in view (with same 250ms fallback). Locale-formats integers; uses `toFixed(decimals)` for floats.
- **`<Eyebrow>`**: mono small caps section marker. `dim` prop drops to `--graphite-dim`.
- **`<ArrowIcon size>`**: the standard right-arrow SVG used in CTAs.
- **`<PlaceholderImage label ratio tone>`**: striped placeholder at a given aspect ratio (default `4 / 3`). `tone` is `warm` (default) or `dark`. **Replace all instances with real `<img>` once photography arrives.**

## Images & assets needed

When the user supplies real photography, replace these `<PlaceholderImage>` slots:

1. Three case-study scene shots (4:3) — desaturated industrial scenes only: machine shop interiors, warehouse aisles, control rooms, hands on equipment. **No** smiling office stock photos, no people pointing at laptops.
2. Two founder portraits (4:5) — character shots, not corporate headshots. Real photography of Chris Berkemeyer (Austin) and Hari Rajashekar (Pittsburgh).

Optional: licensed logo SVGs for the integrations strip. Otherwise keep wordmarks-as-text.

## Voice & copy rules (non-negotiable)

The copy carries as much weight as the visuals. **Strip every adjective that isn't earning its place.** If a word doesn't earn its place, cut it.

### Banned words

leverage, unlock, empower, elevate, amplify, harness, transformative, groundbreaking, seamless, intuitive, robust, holistic, comprehensive (when filler), cutting-edge, next-generation, game-changing, world-class, showcase, delve, navigate (figurative), foster, cultivate, streamline, drive (figurative), revolutionize, reimagine, redefine, supercharge.

### Banned phrases

- "In today's rapidly evolving..."
- "It's worth noting that..."
- "At its core..."
- "A testament to..."
- "Paving the way for..."
- "In the realm of..."
- "Cannot be overstated"
- "Let's dive in"
- "We're on a mission to"
- "Trusted by industry leaders"

### Banned constructions

- Three-item parallels for decoration ("faster, smarter, simpler")
- "It's not just X, it's Y" / "Not only X but also Y"
- Em dash as a drama beat every other sentence
- Stacked adjectives ("genuinely engaging", "incredibly powerful")
- Engagement-bait questions at the end
- Knowledge-cutoff hedges
- Sycophantic openers

### Voice rules

- **First-person plural ("we") for the company**, **first-person singular ("I") in founder bios.**
- Plain words. Numbers over adjectives. "8–12 meetings/month" beats "high-impact pipeline."
- Show the messy middle. "30–45 days to first qualified meeting" is more trustworthy than "Get meetings fast."
- Tone: calm operator, dry, slightly self-aware.
- No emojis. No hashtags. No exclamation marks except in genuine moments.

## Interactions & behavior

- **Sticky nav with scroll-triggered hairline border** at `scrollY > 40`.
- **Mobile menu**: off-canvas drawer (translate-Y -100% → 0), 320ms cubic.
- **Reveal-on-scroll**: 8px translate + opacity, 900ms cubic, once per element. With 250ms fallback timeout.
- **Number tick-up**: hero `28`, aggregate stats `142`, `$18.4M`, `41%`, `11` — all once.
- **FAQ accordion**: max-height + padding-bottom transition, 360ms cubic, plus-rotates-to-cross icon.
- **Button hover**: 180ms color change, 220ms arrow translate.
- All transitions use `cubic-bezier(0.2, 0.6, 0.2, 1)` for ease-out.
- **No** parallax, scroll-jacking, hover explosions, custom cursors, trailing dots, background videos.

## Accessibility

- Skip-to-content link at top (`.skip`, hidden until focused).
- All interactive elements have `:focus-visible` outline (2px `--accent`, 3px offset).
- Semantic HTML: `<header>`, `<main>`, `<section>` with `id`, `<nav>`, `<article>` for case studies, `<blockquote>` for pull quotes, `<button>` for accordion triggers (with `aria-expanded`), `<footer>`.
- All `<PlaceholderImage>` instances expose `role="img"` + `aria-label`. Real images need `alt`.
- Color contrast: `--graphite on --bone` is ~10:1; `--graphite-dim on --bone` is ~5:1; the `--bone` on `--accent (#B85C2A)` button is ~5:1 — all clear AA.
- `aria-hidden="true"` on decorative diamond + arrow SVGs.
- Test keyboard nav front to back; tab order should follow document order.

## Lighthouse target

95+ on Performance, Accessibility, Best Practices, SEO. The current prototype loads three Google Font families — in production, subset them or self-host. Inline above-the-fold CSS if needed. No JS frameworks beyond what the project requires.

## Tech stack (per brief)

- React + Vite + Tailwind CSS (Replit project).
- Tokens declared in `tailwind.config.js` or as CSS custom properties.
- One component per file.
- WCAG 2.1 AA: focus states, 4.5:1 contrast, semantic HTML, alt text everywhere, skip link, keyboard nav.
- No Framer Motion if a CSS transition does the job. No GSAP unless needed.
- Test viewport range 320px → 1920px.

## What not to do (recap)

- No gradients (except subtle background washes, if any).
- No glassmorphism, neumorphism, bevels, or 3D card stacks.
- No "AI sparkle" four-pointed star icons. Mono number labels instead.
- No emoji icons in features.
- No three-card grids of pastel-tinted boxes.
- No standard testimonial cards (avatar + name + role + quote layout). Pull quotes only.
- No countdown timers, urgency banners, exit-intent popups.
- No chat widget unless a real human is on the other end.
- No "Trusted by 500+ companies" logo wall in the hero.
- No stock photos of people pointing at laptops.

## Files in this handoff

- `Spartan Flow.html` — the entry HTML, sets up React, Babel, Google Fonts, Tweaks panel, and renders `<App>`.
- `styles.css` — tokens (CSS variables), base typography, helpers (`.shell`, `.eyebrow`, `.display`, `.bignum`, `.serif-italic`, `.btn`, `.hairline`, `.reveal`, `.skip`, focus styles).
- `components.jsx` — shared helpers: `useReveal` (with 250ms fallback), `Reveal`, `TickNumber`, `Eyebrow`, `ArrowIcon`, `PlaceholderImage`.
- `sections-1-hero.jsx` — `<Nav>`, `<Hero>`.
- `sections-2-problem.jsx` — `<Problem>`, `<HowItWorks>`.
- `sections-3-engine.jsx` — `<Engine>`, `<Results>`.
- `sections-4-people.jsx` — `<Guarantee>`, `<Testimonials>`, `<Founders>`.
- `sections-5-tail.jsx` — `<Integrations>`, `<FAQ>`, `<FinalCTA>`, `<Footer>`.
- `tweaks-panel.jsx` — in-page Tweaks panel scaffold (the prototype's accent color picker; not part of production).

## Implementation note

When porting to React + Vite + Tailwind:

1. Move tokens into `tailwind.config.js` under `theme.extend.colors` (`bone`, `ink`, `graphite`, `graphite-dim`, `rule`, `rule-strong`, `paper`, `accent`, `accent-ink`).
2. Set `theme.extend.fontFamily` to `{ display: ['Inter', ...], serif: ['Fraunces', ...], mono: ['JetBrains Mono', ...] }`.
3. Use `theme.extend.fontSize` for the headline scale, or apply `clamp()` directly in component classes.
4. Components map 1:1 to JSX files. Drop the `useTweaks` / `<TweaksPanel>` scaffolding — that's prototype-only.
5. Re-implement `useReveal` and `TickNumber` as proper hooks. **Keep the 250ms fallback timeout.**
6. Replace `<PlaceholderImage>` with real `<img>` (with `loading="lazy"`, `decoding="async"`, dimensions set, alt text written).
7. Self-host or subset Google Fonts to hit Lighthouse perf.
