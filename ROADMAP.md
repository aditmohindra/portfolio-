# Roadmap — Adit Mohindra Portfolio

Phased delivery plan for a static-first Astro portfolio. Each phase has deliverables, acceptance criteria, and a **gate checklist** before proceeding.

**Estimated total:** 4–6 focused build sessions after content is provided.

---

## Phase Overview

| Phase | Name | Outcome |
|-------|------|---------|
| 0 | Planning | Brief, content inventory, design system, rules (this repo) |
| 1 | Foundation | Astro scaffold, tokens, layout shell, deploy pipeline |
| 2 | Core pages | Home, projects index, experience, about, contact, resume |
| 3 | Flagship content | Spotify Atlas MDX case study + project cards |
| 4 | Polish & ship | A11y, SEO, performance, OG, production deploy |

---

## Phase 0 — Planning ✅

### Deliverables
- [x] `PROJECT_BRIEF.md`
- [x] `CONTENT_INVENTORY.md`
- [x] `DESIGN_SYSTEM.md`
- [x] `ROADMAP.md`
- [x] `CURSOR_RULES_DRAFT.md`

### Acceptance criteria
- Stakeholder (Adit) reviews and approves positioning, MVP scope, and design direction
- Missing content checklist in `CONTENT_INVENTORY.md` acknowledged

### Gate: proceed to Phase 1 when
- [ ] Adit confirms role line and hero tagline (or explicitly delegates draft copy)
- [ ] Hosting target confirmed: Cloudflare Pages
- [ ] Repo location and name agreed (`adit-mohindra-portfolio` or custom domain repo)

---

## Phase 1 — Foundation

### Goals
Scaffold the Astro project with Tailwind, TypeScript, content collections skeleton, and empty deploy pipeline — no polished UI yet.

### Deliverables
| Item | Details |
|------|---------|
| Astro 5 + TypeScript | Strict TS, `@astrojs/check` optional |
| Tailwind CSS | Tokens from `DESIGN_SYSTEM.md` in global CSS |
| React integration | `@astrojs/react` for islands only |
| MDX + collections | `src/content/projects/`, `experience/`, `awards/` schemas |
| Layout shell | `BaseLayout`, `SiteHeader`, `SiteFooter`, `Container` |
| Routing stubs | Empty pages for all MVP routes |
| Public assets folder | `public/decor/`, `public/resume/` |
| CI/deploy config | Cloudflare Pages build (`npm run build`, output `dist`) |
| `CURSOR_RULES` | Promote `CURSOR_RULES_DRAFT.md` → `.cursor/rules/` or project rules |
| README | Setup, dev, build, deploy commands |

### Acceptance criteria
- `npm run dev` serves all routes without error
- `npm run build` produces static `dist/`
- Tailwind tokens compile; sample page shows correct bg, border, fonts
- ESLint/Prettier or Astro formatter configured (minimal)
- No React hydration on static layout pages

### Tests / checks before Phase 2
```bash
npm run build          # exits 0
npm run preview        # manual smoke: all routes 200
npx astro check        # if enabled, no errors
```
- [ ] Lighthouse on stub home (performance baseline recorded)
- [ ] Cloudflare Pages project connected; preview deploy succeeds on push
- [ ] Git repo initialized; `.gitignore` includes `node_modules`, `dist`

---

## Phase 2 — Core Pages & Components

### Goals
Implement homepage and secondary pages with real layout and design system components. Content may use **draft/placeholder** only where flagged in `CONTENT_INVENTORY.md`.

### Deliverables

#### Homepage
- Hero (name, role, tagline, CTAs, badges)
- Featured projects grid (4 cards, draft copy OK)
- Experience preview (timeline)
- Awards preview
- About preview + pattern block
- Footer

#### Other pages
- `/projects` — grid + tags from collections
- `/experience` — full timeline from collection
- `/about` — bio prose layout
- `/contact` — social links, email
- `/resume` — HTML resume layout + PDF link (PDF may be placeholder until Adit provides)

#### Components (from design system)
- Buttons, badges, section headers, timeline, project cards, dividers
- Decorative SVGs (globe, barcode, star) as Astro components

#### Content collections
- Zod schemas matching `CONTENT_INVENTORY.md` frontmatter
- Seed MDX files for all 4 featured projects (minimal body)

### Acceptance criteria
- Homepage matches design language: thin borders, off-white bg, mono labels, OS hero panel
- Navigation works; active state visible on each page
- Responsive at 375px, 768px, 1280px without horizontal scroll
- All text content readable; no pixel font in body
- Collections drive project and experience lists (no hardcoded duplicates)

### Tests / checks before Phase 3
```bash
npm run build
```
Manual QA:
- [ ] Tab through header, CTAs, cards, footer links — focus visible
- [ ] iPhone SE width: hero stacks sensibly
- [ ] Desktop: 4-column project grid aligns
- [ ] Print preview on `/resume` is acceptable (even if content draft)
- [ ] No console errors on static pages
- [ ] React island count documented (target: ≤ 2 on homepage)

**Content gate:** Adit provides employment history and contact links before calling Phase 2 complete.

---

## Phase 3 — Flagship Content (Spotify Atlas)

### Goals
Ship the deep case study and replace draft copy with real content across primary pages.

### Deliverables
| Item | Details |
|------|---------|
| Spotify Atlas MDX | Full section structure per `CONTENT_INVENTORY.md` |
| Screenshots | Optimized WebP/AVIF in `src/assets` or `public` |
| `AtlasWindow` island | Subtle motion; respects reduced motion |
| Project card variant | Dark globe theme for Spotify Atlas |
| Secondary case studies | JPMC, Web Crawler, Music Analytics — summary depth |
| Resume PDF | Hosted at stable URL, linked from hero + resume page |
| Real copy | Hero tagline, about bio, experience bullets |

### Acceptance criteria
- Spotify Atlas page tells complete story: data → embeddings → clustering → UX
- At least 3 screenshots with captions on case study
- Demo link works OR page clearly states "case study / screenshots" with no broken links
- Homepage status badge "Currently building Spotify Atlas" matches project `status`
- OG tags correct for Atlas page (title, description, image)

### Tests / checks before Phase 4
```bash
npm run build
```
- [ ] All internal links resolve (no 404s)
- [ ] External links open in new tab with `rel="noopener noreferrer"`
- [ ] MDX renders code blocks and figures correctly
- [ ] Image lazy-loading does not cause CLS > 0.1 on Atlas page
- [ ] Read time: case study skimmable in 3 min, deep read in 8–10 min

**Content gate:** All items in `CONTENT_INVENTORY.md` "Blocking for content phase" checked off.

---

## Phase 4 — Polish, Accessibility & Launch

### Goals
Production hardening, SEO, performance budget, and custom domain (if ready).

### Deliverables
| Item | Details |
|------|---------|
| SEO | `sitemap.xml`, `robots.txt`, canonical URLs, per-page meta |
| OG image | Branded 1200×630 static image |
| Favicon | SVG + PNG fallbacks |
| A11y pass | Skip link, landmarks, alt text audit, contrast check |
| Performance | Image optimization, font subsetting, minimal JS |
| Analytics | Optional Plausible/Cloudflare Web Analytics (privacy-friendly) |
| 404 page | On-brand, link home |
| Custom domain | DNS + HTTPS on Cloudflare (if applicable) |
| `README` deploy section | Final production URL documented |

### Acceptance criteria
- Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- WCAG 2.1 AA: no critical axe violations on home, projects, atlas, resume
- Total homepage JS transfer &lt; 100KB gzipped (excluding optional analytics)
- Site loads on Cloudflare Pages production URL
- Resume PDF downloads correctly

### Tests / checks — launch gate
```bash
npm run build
npx lighthouse https://<production-url> --view  # or CI equivalent
```
Automated (recommended):
- [ ] `axe-core` CLI or Playwright a11y scan on key routes
- [ ] HTML validator on built `dist/index.html` (no critical errors)

Manual:
- [ ] Recruiter test: colleague skims homepage for 30s — can state role and flagship project
- [ ] Mobile Safari + Chrome Android smoke test
- [ ] `prefers-reduced-motion: reduce` — no distracting animation
- [ ] Share link preview on LinkedIn/iMessage (OG image and title)
- [ ] PDF resume matches on-page resume content

---

## Post-MVP Backlog (not blocking launch)

| Item | Priority |
|------|----------|
| Standalone `/awards` page | P2 |
| Project filter island on `/projects` | P2 |
| Dark mode | P3 |
| Blog / notes collection | P3 |
| Contact form (Formspree, Cloudflare Workers) | P3 |
| Spotify Atlas embedded demo (iframe) | P2 if demo hosted |
| Internationalization | P4 |
| View transitions / page animations | P3 |

---

## Risk Register

| Risk | Mitigation |
|------|------------|
| Spotify Atlas repo private | Lead with screenshots + architecture; link demo only if public |
| Pixel font illegible on mobile | Clamp size; fallback to serif for small viewports |
| Content delays | Ship structure with `[DRAFT]` markers; block launch not structure |
| CF Pages build fails | Test `npm run build` in CI; pin Node LTS |
| Performance budget blown by hero art | SVG-first; lazy-load heavy visuals; static poster for island |

---

## Definition of Done (MVP)

The MVP is **done** when:

1. All Phase 4 launch gate checks pass
2. `CONTENT_INVENTORY.md` blocking items are resolved (no draft placeholders on launch-critical copy)
3. Production URL is shareable on resume and LinkedIn
4. Adit signs off on visual tone and factual accuracy

---

## Suggested Session Plan

| Session | Focus |
|---------|--------|
| 1 | Phase 1 — scaffold + deploy |
| 2 | Phase 2 — homepage + components |
| 3 | Phase 2 — secondary pages + collections |
| 4 | Phase 3 — Spotify Atlas + real content |
| 5 | Phase 4 — a11y, SEO, perf, launch |

Adjust if content arrives in bulk earlier — Phase 3 content can parallel Phase 2 UI once schemas exist.
