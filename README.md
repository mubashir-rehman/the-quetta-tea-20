# The Quetta Tea 20 — Restaurant Website

A fast, mobile-first marketing site for **The Quetta Tea 20 (QT20)**, a rooftop
tea and food cafe in Barkat Market, New Garden Town, Lahore. Single-page,
statically generated, and tuned for local SEO and Core Web Vitals.

**Live:** https://the-quetta-tea-20.vercel.app

---

## PageSpeed Insights

Latest run — _Jul 16, 2026_ ([desktop report](https://pagespeed.web.dev/analysis/https-the-quetta-tea-20-vercel-app/zavfsbnh16?hl=en&form_factor=desktop)):

| Category | Mobile | Desktop |
|---|---|---|
| Performance | **95** | **100** |
| Accessibility | **100** | **100** |
| Best Practices | **100** | **100** |
| SEO | **100** | **100** |

Core Web Vitals — Mobile: LCP 2.4 s · CLS 0 · TBT 0 ms (FCP 1.4 s, SI 4.1 s).
Desktop: LCP 0.5 s · CLS 0 · TBT 0 ms (FCP 0.4 s, SI 0.4 s).

---

## Tech stack

- **[Astro 5](https://astro.build)** — static output (`output: 'static'`), zero
  server. The whole site is one page (`src/pages/index.astro`).
- **Tailwind CSS 3** (`@astrojs/tailwind`) for styling.
- **TypeScript** for the content data files and type-checking (`astro check`).
- **[Swiper 12](https://swiperjs.com)** for the gallery and reviews carousels
  (lazy-initialized so they don't block first paint).
- **`@astrojs/sitemap`** for `sitemap.xml`.
- Self-hosted fonts (no Google Fonts request): **Inter** (variable, body/UI) and
  **Playfair Display** (display serif for headings).
- Hosted on **Vercel** (auto-deploys from `main`).

## Features

- **Menu** — all 20 categories stacked and browsable, with a sticky quick-jump
  bar (scroll-spy) and a section-header photo per category. Handles multi-size
  pricing (pizza S/M/L, Half/Full, Full-only) generically.
- **Deals** — six Rs. 999 combo cards, each with a photo and a pre-filled
  "Order on WhatsApp" link.
- **Reviews** — a Swiper carousel of real 5-star Google reviews with reviewer
  photos (initials fallback) and the live 4.0★ rating linked to Google.
- **Ordering** — primary CTAs to **Foodpanda** (delivery) and **WhatsApp**
  (dine-in / takeaway / events).
- **Mobile bottom navigation** (`BottomNav.astro`) — Deals · Menu · ⟨Order⟩ ·
  Reviews · Find Us, with an elevated center Order button that opens a
  Foodpanda + WhatsApp sheet. Handles iOS safe-area insets and pins to the
  visual viewport during Android's URL-bar animation.
- **Find Us** — address, hours, an embedded Google Map (exact verified pin),
  delivery line, and a small Birthdays & Events mention (rooftop seating for 50).
- **FAQ** — six questions answering location, hours, delivery, cuisine, rooftop,
  and events.
- **SEO** — local-intent title/description, canonical + Open Graph/Twitter tags,
  JSON-LD (`FoodEstablishment` + `FAQPage`), and a sitemap. NAP matches the
  Google Business Profile.
- **Accessibility** — WCAG-AA contrast, aria-labels on icon controls,
  `role="img"` on star ratings, keyboard-friendly, respects reduced-motion.

## Project structure

```
src/
  pages/
    index.astro          # the entire page (all sections + inline scripts)
  layouts/
    Layout.astro         # <head>: SEO meta, canonical, OG, JSON-LD, font preloads
  components/
    BottomNav.astro      # mobile bottom nav + elevated Order FAB
    GalleryCarousel.astro# Swiper gallery (lazy-init)
  data/
    menu.ts              # MENU_CATEGORIES + DEALS + section-image map
    reviews.ts           # REVIEWS (real Google 5-star reviews)
  styles/
    global.css           # @font-face, design tokens, utilities
public/
  media/                 # webp images (hero, gallery, deals) + menu/ headers
  fonts/                 # Inter + Playfair Display woff2
  favicon.ico, apple-touch-icon.png, ...
astro.config.mjs         # static output, inlined CSS, sitemap
tailwind.config.mjs      # Playfair Display headline + Inter body tokens
```

## Editing content

All content is data-driven — no need to touch markup for routine updates:

- **Menu & deals:** edit `src/data/menu.ts`. Items use `price` (number) or
  `prices` (a `{ label: number }` map for sizes). `DEALS` holds the six combos.
  Section-header images are mapped in `SECTION_IMAGE` (currently the cafe's own
  Foodpanda dish photos; swap to `/media/menu/<slug>.webp` to self-host).
- **Reviews:** edit `src/data/reviews.ts`. Each entry has `name`, `initial`,
  `avatar` (Google profile photo URL), and `text`.
- **Hours / address / phone / links:** in `src/pages/index.astro` (Find Us +
  footer) and the JSON-LD in `src/layouts/Layout.astro` — keep them in sync.

## Local development

Requires **Node.js**.

```bash
npm install
npm run dev        # dev server at http://localhost:3000
npm run build      # static build to ./dist
npm run preview    # preview the production build
npm run lint       # astro check (type-check)
```

## Deployment

Hosted on **Vercel**; pushing to `main` triggers a production deploy. Output is
static, so it works on any static host.

## Design & implementation notes

- **Refined dark editorial** look: Playfair Display display serif over a dark
  palette with an amber/gold accent, keeping the rooftop night-time brand mood.
- **Performance:** all imagery is resized WebP; fonts are self-hosted and
  preloaded; CSS is inlined (`build.inlineStylesheets: 'always'`) to remove
  render-blocking requests; the hero image is `fetchpriority="high"` with no
  entrance animation; carousels lazy-init on scroll.
- **External images:** menu section headers use the cafe's Foodpanda CDN photos
  and reviewer avatars use Google's CDN — both hotlinked with graceful fallbacks
  (initials for avatars). Replace with self-hosted assets for long-term
  stability.
- **Ordering & events** run through WhatsApp (`+92 314 9998804`) and Foodpanda;
  there is intentionally no chatbot (kept lean; the FAQ + WhatsApp cover Q&A).

## Credits

Designed & developed by **[Mubashir Rehman](https://mubashir-rehman.is-a.dev/contact)**.
Content, menu, and photography © The Quetta Tea 20.
