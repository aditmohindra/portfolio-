# Project Brief — Adit Mohindra Portfolio

## Overview

A production-quality personal portfolio website for **Adit Mohindra**, positioned as a **Data Scientist / ML Engineer / AI Engineer**. The site is static-first, recruiter-friendly, and visually distinctive without sacrificing clarity or performance.

**Visual north star:** Retro-modern OS UI meets editorial layout — thin borders, off-white surfaces, muted blue/lavender accents, atlas/map motifs, status panels, and subtle technical ornamentation (barcodes, globes, stars). Inspired by the reference mockup; not a pixel-perfect copy.

**Stack (planned):** Astro, TypeScript, Tailwind CSS, React islands, MDX/content collections.

**Hosting priority:** Cloudflare Pages → Vercel → GitHub Pages fallback.

---

## Product Goals

| Priority | Goal | Why it matters |
|----------|------|----------------|
| 1 | **Instant role clarity** | Recruiters spend seconds on a profile; DS/ML/AI identity must be obvious immediately |
| 2 | **Flagship proof of work** | Spotify Atlas demonstrates end-to-end ML systems thinking, not just notebook snippets |
| 3 | **Low-friction navigation** | Hiring managers should reach projects, experience, and resume in one click |
| 4 | **Memorable but professional** | Stand out visually while remaining readable, fast, and credible |
| 5 | **Cheap/free to operate** | Static-first MVP with no backend, minimal build complexity, edge-deployable |

---

## Target Audience

### Primary
- **Technical recruiters** sourcing DS/ML/AI roles (Bay Area and remote)
- **Hiring managers** on data science, ML engineering, and applied AI teams
- **ML/data team leads** evaluating portfolio depth before interviews

### Secondary
- **Peers and collaborators** checking project work or contact info
- **Conference / award reviewers** validating credentials quickly

### Audience assumptions
- Skim-heavy behavior: 30–90 seconds on homepage, 2–5 minutes if interested
- Mobile usage is common but desktop is primary for deep review
- Expect links to GitHub, LinkedIn, resume PDF, and at least one flagship demo

---

## Site Positioning

**One-line positioning:**
> Adit Mohindra builds ML systems and music intelligence tools — from embeddings and clustering to interactive, map-like experiences.

**Differentiation angles:**
- **Applied ML, not just models:** pipelines, embeddings, clustering, naming, archetypes, taste profiles
- **Product-minded DS:** Spotify Atlas is a full platform narrative, not a Kaggle notebook
- **Visual storytelling:** map/atlas metaphor reinforces spatial intelligence and data exploration
- **Recruiter-optimized structure:** clear sections, scannable cards, downloadable resume, no mystery navigation

**Tone:** Confident, precise, technically literate. Avoid hype words ("revolutionary," "cutting-edge") unless backed by specifics.

---

## 5-Second Homepage Test

Within **5 seconds**, a visitor must understand:

1. **Who:** Adit Mohindra
2. **What role:** Data Scientist / ML Engineer / AI Engineer
3. **What you build:** ML systems, music intelligence, data products
4. **Proof:** Spotify Atlas is the flagship; other projects are visible below the fold
5. **Next step:** Clear CTAs — View Projects, Download Resume, Contact

**Visual signals in those 5 seconds:**
- Large name + role line (monospace label with blue dot)
- Status badges (location, availability, current build)
- ATLAS.EXE-style window or map motif anchoring the hero
- Navigation with obvious destinations (Projects, Experience, Resume)

If any of the above requires scrolling on desktop, the hero hierarchy needs revision.

---

## Success Criteria

### Launch (MVP)
- [ ] Lighthouse Performance ≥ 90 on mobile and desktop (static pages)
- [ ] Role + flagship project identifiable within 5 seconds on homepage
- [ ] All MVP pages load without JS for core content (progressive enhancement via islands)
- [ ] Resume downloadable as PDF; contact links work
- [ ] Deployed to Cloudflare Pages with custom domain or `*.pages.dev` URL
- [ ] No accessibility blockers: keyboard nav, focus states, sufficient contrast, semantic headings

### 30 days post-launch
- [ ] Recruiters can share a single URL that answers "what does Adit do?"
- [ ] Spotify Atlas case study tells a complete story (problem → approach → stack → outcome)
- [ ] Analytics (optional, privacy-respecting) confirm top paths: Home → Projects → Resume

### Quality bar
- [ ] Design feels cohesive with mockup language (OS panels, thin borders, editorial grid)
- [ ] Content is factual — no placeholder lorem beyond explicit draft markers
- [ ] Build time under 60s; total JS budget reasonable for islands only

---

## MVP Scope

### In scope
- **Pages:** Home, Projects (index), Project case studies (MDX), Experience, About, Contact, Resume
- **Content system:** Astro content collections for projects, experience, awards
- **Homepage sections:** Hero, featured projects, experience preview, awards preview, about preview, footer
- **Spotify Atlas:** Dedicated case study with rich MDX (diagrams, stack, screenshots)
- **Static assets:** Optimized images, OG meta, favicon, resume PDF
- **React islands (minimal):** Interactive hero accents (e.g., ATLAS window animation), project filters if needed
- **SEO basics:** Title/description per page, Open Graph, `sitemap.xml`, `robots.txt`
- **Deployment:** Cloudflare Pages pipeline (Git push → build → deploy)

### Out of scope for MVP (see Non-Goals)
- Blog, CMS, auth, database, contact form backend
- Full pixel recreation of mockup
- Heavy WebGL or large client bundles

---

## Non-Goals

| Non-goal | Rationale |
|----------|-----------|
| Pixel-perfect mockup clone | Extract design language; adapt for responsiveness and accessibility |
| CMS / admin panel | MDX + git is sufficient for personal portfolio cadence |
| Server-side API or database | Conflicts with static-first, free hosting goal |
| Contact form with email backend | Use `mailto:` or third-party form later if needed |
| Blog at launch | Adds content burden; defer unless hiring narrative needs it |
| Dark mode at launch | Nice-to-have; design system should allow it later |
| Analytics requiring cookie banners | Prefer lightweight, privacy-friendly analytics or defer |
| Every project as a full case study | MVP: 1 deep (Spotify Atlas) + 3–4 card summaries |
| AI chatbot or gimmicky interactions | Undermines recruiter trust and performance budget |

---

## Key Constraints

- **Budget:** $0/month hosting and tooling where possible
- **Maintenance:** Single maintainer; content updates via MDX/git
- **Performance:** Static HTML default; React only where interaction adds clear value
- **Accessibility:** WCAG 2.1 AA target for text, contrast, keyboard, and screen readers
- **Browser support:** Last 2 versions of Chrome, Firefox, Safari, Edge; graceful degradation elsewhere

---

## Open Decisions (resolve before build)

1. Custom domain vs. `*.pages.dev` for launch
2. Resume: single PDF vs. on-page + PDF
3. Spotify Atlas: link to live demo, screenshots only, or both
4. Contact: email visible vs. obfuscated vs. form service
5. Awards section: full list or curated top 3–5

---

## Stakeholder

**Owner:** Adit Mohindra — final approval on copy, project ordering, and visual tone.

**AI/build assistant:** Implements from this brief and companion docs (`DESIGN_SYSTEM.md`, `CONTENT_INVENTORY.md`, `ROADMAP.md`).
