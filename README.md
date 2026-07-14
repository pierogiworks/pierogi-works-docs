# Pierogi Works Studio Guide

Internal docs site for Pierogi Works brand, voice, visuals, assets, and studio practice.

## Stack

- [Astro](https://astro.build) 7
- Plain CSS with brand tokens (no UI kit)
- Type: Cooper\* Black (self-hosted, OFL) + Atkinson Hyperlegible (Google Fonts)

## Commands

```bash
npm run dev       # local docs at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build
```

When using the Astro CLI background helper from this repo:

```bash
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

## Structure

- `src/pages/` — overview + docs pages
- `src/layouts/DocsLayout.astro` — sidebar shell
- `src/components/` — sidebar, footer, shared doc page chrome
- `src/data/nav.ts` — navigation + brand palette
- `public/mascot.png` / `public/mascot-hero.png` — mascot assets
