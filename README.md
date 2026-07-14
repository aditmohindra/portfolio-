Visit [Adit Portfolio](https://aditmohindra.com) to see.
<img width="1901" height="1409" alt="image" src="https://github.com/user-attachments/assets/f1cd35de-f2b1-4ea1-bea3-e2146a7f299e" />

## Stack

- [Astro](https://astro.build/) (static output)
- TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/vite` (CSS-first `@theme` in `src/styles/global.css`)
- `@astrojs/react` (islands only — wired up, no React components yet)
- `@astrojs/mdx` + content collections (`src/content.config.ts`)

**Note:** Astro 6 resolves to Vite 7 via an npm `overrides` entry so `@tailwindcss/vite` builds correctly on npm (avoids Vite 8 / rolldown incompatibility).

## Prerequisites

- Node.js 20 LTS or newer
- npm 10+

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output is written to `dist/` as static HTML/assets.

## Preview production build

```bash
npm run preview
```

## Quality checks

```bash
npm run check   # astro check (TypeScript + Astro diagnostics)
npm run lint    # eslint + prettier
```

Fix lint issues:

```bash
npm run lint:fix
```

## Project structure

```
src/
  components/layout/   # SiteHeader, SiteFooter, Container
  components/ui/       # Reusable UI (Phase 2+)
  content/             # projects (MDX), experience & awards (YAML)
  content.config.ts    # Content collection schemas + loaders
  layouts/             # BaseLayout
  pages/               # Route stubs
  styles/global.css    # Tailwind v4 @theme tokens
public/
  decor/               # Decorative SVG assets (Phase 2+)
  resume/              # Resume PDF (Phase 3+)
```

## Cloudflare Pages deployment

This site uses Astro's default **static** output (`output: 'static'`). No `@astrojs/cloudflare` adapter is required.

1. Push the repo to GitHub (or GitLab).
2. In Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → Connect to Git.
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 20 (set via `NODE_VERSION=20` environment variable if needed)
4. Deploy. Preview deployments run on each push; production on `main`.

No server-side rendering, environment secrets, or Cloudflare adapter are needed for MVP.

## Phase status

- **Phase 0:** Planning docs ✅
- **Phase 1:** Foundation (this scaffold) ✅
- **Phase 2+:** Homepage UI, full content, polish — see `ROADMAP.md`
