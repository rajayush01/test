# Suzlon Brand Centre — React + Tailwind + CSS

This is the original static HTML "Suzlon Brand Centre" site converted to a
React (Vite) single-page app, with Tailwind CSS set up alongside the site's
original hand-written CSS. The visual design is unchanged — the three
original stylesheets (`style.css`, `Navpagescss.css`, `pillar-layout.css`)
are ported over verbatim.

## What changed vs. the original static site
- Multi-page HTML → React components + React Router routes (no full page reloads).
- The interactive image-swap / slider `<script>` blocks (Touchpoints, Visual
  Identity, The Good Identity) are now real React state via `LinkSwapHub`.
- The scroll-parallax and scroll-reveal `<script>` blocks are now
  `useParallax()` / `useRevealOnScroll()` hooks.
- Added a working mobile hamburger menu — the original nav simply
  `display: none`'d below 768px with no way to reopen it. This is the
  only real behavioural addition; it was needed to make the site usable on
  small screens as requested. Everything else is visually identical.
- Two tiny original CSS typos that broke strict CSS parsing (a missing
  semicolon and a bare `sticky;` token) were fixed just enough to build;
  neither changes what a browser already rendered.
- A handful of internal links in the original site pointed to pages that
  never existed in the zip (e.g. `goodexpression.html`, `templates.html`,
  `Downloads/*.zip`). Those are left exactly as authored (plain `<a>` tags)
  rather than "fixed", to stay faithful to the original.

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure
- `src/pages/` — one component per original HTML page
- `src/components/` — shared `Header` (incl. mobile menu), `Footer`, and
  `LinkSwapHub` (the interactive hub visual/gallery pattern)
- `src/hooks/` — `useParallax`, `useRevealOnScroll`
- `src/styles/` — the ported original CSS, plus small additive
  `responsive.css` (mobile nav + small-screen polish) and per-page scoped
  CSS that used to live in inline `<style>` blocks
- `public/images/` — all original brand assets (unchanged filenames)
