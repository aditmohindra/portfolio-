# Cursor Rules Draft — Adit Mohindra Portfolio

Promote these rules to `.cursor/rules/` (or Cursor project rules) when Phase 1 begins. Rules reference companion docs in this repo.

---

## Project Rules

### Scope & stack
- **Stack:** Astro 5, TypeScript (strict), Tailwind CSS, React islands only where needed, MDX content collections.
- **Hosting:** Optimize for **Cloudflare Pages** static deploy (`dist/`). Avoid Vercel-specific or Node server APIs unless abstracted.
- **Static-first:** Default to `.astro` pages with zero client JS. Use `client:visible` or `client:idle` for islands — never `client:load` unless justified.
- **Single source of truth:** `CONTENT_INVENTORY.md` for routes and content shape; `DESIGN_SYSTEM.md` for tokens and components; `PROJECT_BRIEF.md` for scope boundaries.

### File organization (planned)
```
src/
  components/     # Astro components (default)
  components/islands/  # React islands only
  content/
    projects/
    experience/
    awards/
  layouts/
  pages/
  styles/
public/
  decor/
  resume/
```

### Dependencies
- Do not add packages without a clear need documented in code or PR description.
- Prefer Astro builtins and Tailwind over CSS-in-JS or styled-components.
- No CMS, database, or auth libraries in MVP.

### Git & deploy
- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `chore:`
- Never commit `.env`, resume sources with PII beyond public contact info, or API keys.
- Ensure `npm run build` passes before marking work complete.

### Non-goals (do not implement unless asked)
- Blog, admin UI, contact form backend, user accounts
- Pixel-perfect mockup clone
- Site-wide React router or SPA architecture

---

## Design Rules

### Visual language
- Follow **retro-modern OS UI + editorial layout** from `DESIGN_SYSTEM.md`.
- Page background: off-white (`#F2F2F2`). Primary borders: 1px black/near-black.
- Accents: muted lavender-blue (`#7B8CDE`) — not bright royal blue or purple gradients.
- Motifs (globe, barcode, star, OS window) are **decorative**. They must not compete with headlines or CTAs.

### Typography
- **Display/pixel font:** Hero name only (and rare accent words if specified).
- **Body:** Sans-serif (Inter/Geist). **Labels/nav/badges:** Monospace uppercase.
- Section labels: ALL CAPS, mono, letter-spaced — e.g. `FEATURED PROJECTS`.
- Max prose width ~65ch on about and case studies.

### Components
- Build from `DESIGN_SYSTEM.md` component inventory before one-off markup.
- Buttons: primary (black fill), secondary (white + border). Icons optional, never icon-only without `aria-label`.
- Project cards use defined variants (`dark-globe`, `blue-cube`, `light-browser`, `light-wave`).
- Shadows: avoid unless necessary; prefer borders.

### Responsive
- Mobile-first Tailwind. Test at 375px before marking UI complete.
- Hero stacks on mobile (copy first, visual second).
- Do not hide critical CTAs on mobile.

### Motion
- Transitions ≤ 300ms. Honor `prefers-reduced-motion`.
- No parallax, scroll-jacking, or cursor effects.

---

## Frontend Quality Rules

### Astro patterns
- Use `getCollection()` and content schemas (Zod) for all lists — projects, experience, awards.
- Pass collection data as props; do not duplicate content in page files.
- Images: `@astrojs/image` or `<Image />` with explicit `width`/`height` to prevent CLS.
- MDX: shared `Prose` layout component for case studies.

### TypeScript
- `strict: true`. No `any` without comment explaining why.
- Define types for collection frontmatter matching Zod inferred types.

### Tailwind
- Use semantic tokens (`bg-canvas`, `text-ink`, `border-ink`, `accent`) — not raw hex in components except token definition file.
- Avoid arbitrary values (`w-[437px]`) unless matching a documented design spec.
- Group related utilities; extract repeated patterns to components, not `@apply` abuse.

### React islands
- Islands live in `src/components/islands/`.
- Maximum island scope: single interactive widget (Atlas window, filter bar, mobile nav).
- Pass serializable props only. No global state libraries in MVP.
- Include `aria-*` attributes for interactive island UI.

### Performance budget
- Homepage JS gzipped target: **< 100KB** (excluding analytics).
- Fonts: max 2 families + mono; `font-display: swap`; subset weights in use.
- Lazy-load below-fold images. Hero LCP image prioritized.
- No third-party scripts on critical path without explicit approval.

### Code style
- Match existing file conventions when editing.
- Prefer small, focused components over monolithic page files.
- Delete unused code and imports in files you touch.

---

## Content Writing Rules

### Voice
- **Adit Mohindra** — first person optional on About; third person or neutral on resume.
- Tone: confident, specific, recruiter-scannable. No filler ("passionate about", "leveraging synergies").
- Lead with **outcome**, then method, then stack.

### Role positioning
- Always clarify: **Data Scientist / ML Engineer / AI Engineer** (exact order per Adit's final preference).
- Spotify Atlas is the **flagship** — mention in hero, resume, and OG description.

### Structure
- Card descriptions: ≤ 120 characters when possible.
- Experience bullets: start with strong verbs; include metrics where truthful.
- Case studies follow `CONTENT_INVENTORY.md` section order.
- Tech stacks: mono, dot-separated — `Python · UMAP · HDBSCAN`.

### Accuracy
- No fabricated metrics, employers, or awards.
- Mark unknown copy as `<!-- DRAFT: needs Adit -->` in MDX, not lorem ipsum on user-visible launch copy.
- External links: verify URLs. Use `target="_blank"` + `rel="noopener noreferrer"`.

### SEO copy
- Unique `<title>` and `description` per page.
- First paragraph of case studies should stand alone as a summary.

---

## Accessibility Rules

### Required on every page
- `<html lang="en">`
- Skip link to `#main`
- Single `h1`, logical heading hierarchy
- `main`, `nav`, `footer` landmarks

### Interactive elements
- Visible focus styles using `--color-focus-ring` (never `outline: none` without replacement).
- Touch targets ≥ 44×44px.
- Links must have discernible text (no empty `href` with icon alone).

### Images & decoration
- Meaningful `alt` on content images (screenshots, headshot).
- Decorative SVGs: `aria-hidden="true"`.
- Status indicators: text + icon/color (e.g. "Active" + green dot).

### Color & contrast
- Body text ≥ 4.5:1 contrast on backgrounds.
- Do not use `--color-accent` alone for small body text on white.

### Motion
```css
@media (prefers-reduced-motion: reduce) {
  /* disable animations */
}
```

### Testing before merge
- Keyboard-only navigation through header → main CTA → footer.
- Run axe or Lighthouse accessibility on changed pages.
- Screen reader spot-check: page title and `h1` announce correctly.

---

## When Implementing a Task

1. Read relevant section of `PROJECT_BRIEF.md` — confirm task is in MVP scope.
2. Check `CONTENT_INVENTORY.md` — use correct frontmatter and section structure.
3. Apply tokens/components from `DESIGN_SYSTEM.md`.
4. Implement minimal diff; no drive-by refactors.
5. Run `npm run build` and fix errors.
6. Note any new **missing content** back to `CONTENT_INVENTORY.md` if discovered.

---

## Quick Reference — Homepage 5-Second Test

A visitor must immediately see:
1. Adit Mohindra
2. Data Scientist / ML Engineer / AI Engineer
3. What you build (ML systems, music intelligence)
4. Spotify Atlas as proof
5. View Projects + Resume CTAs

If a change obscures any of the above, reject or revise.
