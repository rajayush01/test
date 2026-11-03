# Suzlon Brand Centre — React + TypeScript + Tailwind

1. Copy `Homepage Images/` and `Promise/` from the original site into `public/`.
2. `npm install`, then `npm run dev` (or `npm run build`).

Routes: `/`, `/the-good-identity`, `/the-good-expression`, `/touchpoints`, `/the-good-voice`, `/good-energy-people` (`/visual-identity` = same page as voice, as in the original).

- `src/pages/` — one TSX file per original page; inline styles are Tailwind utilities.
- `src/components/` — Header (with mobile menu), ShowcaseHub, BrandSearch, ManifestoCarousel.
- `src/styles/` — original CSS, kept intact inside Tailwind's `components` layer (utilities override it, as inline styles did). Tailwind Preflight is intentionally not loaded.
- Brand colours are Tailwind tokens: `text-ever-teal`, `bg-prime-yellow`, `bg-humble-beige`, ...
- Static hosting needs an SPA fallback to `index.html` (BrowserRouter).
