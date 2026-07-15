# QT20 Website Restructure — Working State

_Last updated: 2026-07-15. This is the session state file. Read this first when resuming._

## TL;DR status

Full restructure of the-quetta-tea-20 (Astro static site). Menu data, deals,
design updates, and performance fixes are **implemented in code**. The only
open item is a **clean production build verification** (the sandbox build timed
out — see "Open / next steps").

| # | Task | Status |
|---|------|--------|
| 1 | Write this state + plan file | ✅ done |
| 2 | Optimize images (deal PNGs + gallery) | ✅ done |
| 3 | Update menu.ts data + add deals | ✅ done |
| 4 | Fix multi-price rendering (generic) | ✅ done |
| 5 | Build deals section (KFC/McDonald's style) | ✅ done |
| 6 | Fix address / SEO / perf attributes | ✅ done |
| 7 | Build + verify | ⏳ pending (build timed out in sandbox) |

## Business context (for design decisions)

- Cafe: **The Quetta Tea 20 (QT20)**, rooftop tea + fast food + desi/Chinese.
- Location (corrected): **30 Civic Center, Barkat Market, Garden Town, Lahore.**
  (Old code wrongly said "Commercial Area Garden Town, 54000" — now fixed
  everywhere: copy, footer, JSON-LD schema.)
- Audience: ~40% students & couples, 30% job holders, 30% family/others; some
  birthday celebrations. We do **birthday decor + event seating for ~50**.
- Positioning kept: nostalgic open-air rooftop, NFAK melodies, late night
  (12 PM – 2 AM). WhatsApp-based ordering (0314-9998804).
- Deals decision: user said "don't reinvent the wheel — do it like KFC /
  McDonald's." → image-forward deal cards, price badge front and center,
  what's-included list, one-tap order CTA, given a prominent standalone section.
- Events decision: **small mention only** (added a line in Find Us), not a full
  section.

## Tech stack

Astro 5 (static output) + Tailwind. Single page: `src/pages/index.astro`.
Data in `src/data/menu.ts`. Gallery in `src/components/GalleryCarousel.astro`.
Layout/head/SEO in `src/layouts/Layout.astro`. Styles in `src/styles/global.css`.

## Performance analysis (why the PSI scores were bad)

Root causes found in code + assets (PSI report at repo parent confirmed
`unsized-images`, `server-response-time`, `total-byte-weight`,
`render-blocking-resources` audits firing):

1. **Enormous images** — 6 deal PNGs ~2 MB each + 8 gallery JPGs ~1 MB each =
   ~15 MB. Killed LCP and total byte weight on mobile.
2. **Unsized images** — no width/height → layout shift (CLS).
3. **Render-blocking Google Fonts** request (Noto Serif + Inter, many weights).
4. **LCP hero image** was hidden with `opacity-0` + `onload` fade — delayed the
   largest paint.
5. Below-the-fold images not lazy-loaded.

### Learnings borrowed from `mubashir-rehman.github.io`

That repo's commit "perf/a11y: self-host fonts (PSI findings)" self-hosted fonts
to remove the render-blocking Google Fonts request. We copied its exact
`inter-latin-wght-normal.woff2` and applied the same pattern here.

## What was changed (implemented)

### Images (`public/media/`)
- Converted deal + gallery images to **WebP**, resized (deals ≤900px q80,
  gallery ≤1400px q78). **15 MB → ~1.1 MB total.**
- Originals (.png/.jpg) kept in place; site now references `.webp`.
- **`deal_2.png` still missing.** Data points `deal-2.image` → `/media/deal_2.png`
  as a placeholder. **When you add `deal_2.png`, run:**
  `convert deal_2.png -resize '900x900>' -strip -quality 80 deal_2.webp`
  then change `image` in `src/data/menu.ts` from `/media/deal_2.png` to
  `/media/deal_2.webp`.

### Fonts (`public/fonts/` + `global.css` + `Layout.astro`)
- Self-hosted **Inter** (variable) + **Noto Serif** (400/700/900 + 400 italic),
  latin subset woff2 (~160 KB total). Declared via `@font-face` in
  `global.css`. Removed the Google Fonts `<link>`. Added `<link rel="preload">`
  for Inter + Noto Serif 900 (the above-the-fold headline weight).

### Menu data (`src/data/menu.ts`) — fully replaced
- New **20-category** structure matching the supplied JSON exactly. Prices are
  now **numbers**; UI adds the "Rs." prefix.
- New `DEALS` export (6 deals @ Rs. 999, each with an `image`).
- Added TypeScript interfaces (`MenuItem`, `MenuCategory`, `Deal`).
- **Corrected prices/items vs. the old hardcoded data**, including: Doodh Patti
  250 (was 280), Jalapeno Burger 500 (was 600), Pizza Burger 600 (was 500),
  Chicken Fried Rice Full 549 (was 649), Garlic Naan 180 (was 150), Chicken
  Handi now single 1100 (was Half/Full), Chowmein Full-only 600, several pizza
  sizes (Chicken Supreme & Quetta Signature now have **no Small**), Strawberry
  Margarita 300, etc. Split old combined categories into: Starters, Tea, Coffee,
  Mocktail, Paratha, Paratha Roll, Sandwich, Burger, Wraps, Shawarma, Steaks,
  Pizza, Pasta, Chinese (Rice), Chinese (Gravy), Karahi, Chicken Handi,
  Tandoori, Beverages, Salad.

### Multi-price rendering bug — FIXED (`index.astro`)
- Old code **hardcoded** S/M/L and Half/Full keys, so it broke on items with
  missing sizes (e.g. pizzas with no S, Chowmein Full-only). Rewrote both the
  Astro template render and the client-side `updateMenu()` to **iterate
  `Object.entries(item.prices)`** and show whatever size labels exist. Single
  price items show `Rs. {price}`. No code changes needed for future size combos.

### Deals section — NEW (`index.astro`)
- Prominent `#deals` section (dark, after hero, before gallery), heading
  "Deals @ Rs. 999", responsive 1/2/3-col grid of image cards. Each card: WebP
  image with a "Rs. 999" badge + deal tag, included-items checklist, and an
  **"Order on WhatsApp" button with a pre-filled message** per deal.
- Added **Deals** to desktop nav, mobile nav, and footer nav.

### SEO / address / a11y (`Layout.astro` + `index.astro`)
- Address corrected in copy, footer, and JSON-LD `streetAddress` (+ postalCode
  54600). Menu schema prices spot-checked — still valid.
- Descriptive `alt` text; hero image `fetchpriority="high"`; below-the-fold
  images `loading="lazy" decoding="async"` with explicit width/height (fixes CLS).

## Open / next steps (do these when resuming)

1. **Verify the build.** Sandbox `npx astro build` timed out (it tried to fetch
   astro@7 — use the local install). Run locally:
   `cd the-quetta-tea-20 && npm install && npm run build` (or `npm run dev` to
   eyeball it). Confirm: no TS/astro errors, deals render, every menu category's
   sizes show correctly (check Pizza, Chinese Rice/Gravy, Karahi, Chowmein).
2. Add **`deal_2.png`** and generate its WebP (command above).
3. Re-run **PageSpeed Insights** after deploy to confirm gains (expect large
   LCP / total-byte-weight / CLS improvements from images + fonts + sizing).
4. Optional polish for a later pass: real embedded Google Map (the "map" is a
   static image link), Instagram feed, per-item photos for hero menu items,
   an OG image hosted on our own domain (currently a googleusercontent URL).

## Files touched
- `src/data/menu.ts` (rewritten)
- `src/pages/index.astro` (deals section, generic prices, perf attrs, address, events line, webp)
- `src/components/GalleryCarousel.astro` (webp + lazy + dims)
- `src/layouts/Layout.astro` (self-hosted fonts, address/schema)
- `src/styles/global.css` (@font-face declarations)
- `public/fonts/*` (new: Inter + Noto Serif woff2)
- `public/media/*.webp` (new optimized images)
