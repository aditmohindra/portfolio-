# Content Inventory — Adit Mohindra Portfolio

This document maps every page, section, and content artifact required for the MVP. Use it as the single checklist for what exists, what is drafted, and what Adit still needs to provide.

---

## Required Pages


| Route                     | Page                         | Purpose                                              | MVP priority |
| ------------------------- | ---------------------------- | ---------------------------------------------------- | ------------ |
| `/`                       | Home                         | Role clarity, flagship project, summaries, CTAs      | P0           |
| `/projects`               | Projects index               | Scannable grid of all projects with filters/tags     | P0           |
| `/projects/spotify-atlas` | Spotify Atlas case study     | Deep flagship narrative                              | P0           |
| `/projects/[slug]`        | Other project case studies   | Lighter case studies for secondary projects          | P1           |
| `/experience`             | Experience                   | Full employment timeline                             | P0           |
| `/about`                  | About                        | Bio, values, interests, optional photo               | P0           |
| `/contact`                | Contact                      | Email, social links, availability                    | P0           |
| `/resume`                 | Resume                       | On-page resume + PDF download                        | P0           |
| `/awards`                 | Awards (optional standalone) | Full awards list if homepage preview is insufficient | P2           |


**Navigation (header):** HOME · PROJECTS · EXPERIENCE · AWARDS · ABOUT · CONTACT · RESUME

**Footer:** Tagline, GitHub / LinkedIn / Email, copyright.

---

## Homepage Sections

Ordered top to bottom. Each section should work as a standalone skim block.

### 1. Header / Navigation

- Logo mark (star or minimal monogram)
- Nav links with active indicator (dot under current page)
- Decorative accents: barcode strip (right), star (left) — non-interactive

### 2. Hero


| Element       | Content                                                                         |
| ------------- | ------------------------------------------------------------------------------- |
| Name          | Adit Mohindra                                                                   |
| Role line     | DATA SCIENTIST / ML ENGINEER / AI ENGINEER                                      |
| Tagline       | 1–2 sentences on what you build (ML systems, music intelligence, data products) |
| Primary CTA   | VIEW PROJECTS → `/projects`                                                     |
| Secondary CTA | RESUME → `/resume` or direct PDF                                                |
| Status badges | Bay Area · Open to ML/DS roles · Currently building Spotify Atlas               |
| Visual        | ATLAS.EXE window mock, system info panel, wireframe globe (decorative)          |


### 3. Featured Projects

- Section label: FEATURED PROJECTS
- Link: VIEW ALL PROJECTS →
- **4 project cards** (see Project List below)
- Each card: title, 1-line description, tech stack string, external link icon if live demo exists

### 4. Experience Preview

- Section label: EXPERIENCE
- **3–4 most recent/relevant roles** (timeline style)
- Link: VIEW FULL EXPERIENCE → `/experience`

### 5. Awards Preview

- Section label: AWARDS & RECOGNITION
- **3–5 top awards** with icon + one line each
- Link: VIEW ALL → `/awards` (if standalone page exists)

### 6. About Preview

- Section label: ABOUT ME
- **Short bio** (~80–120 words)
- CTA: MORE ABOUT ME → `/about`
- Decorative pattern block (checker/wave motif)

### 7. Footer

- Left: "Let's build something meaningful" (or similar CTA line)
- Center: GitHub, LinkedIn, Email
- Right: © 2026 Adit Mohindra (update year at launch)

---

## Project List

### Featured (homepage cards)


| #   | Project                              | Card tone             | One-line description (draft)                                       | Tech (draft)                                        | Case study           |
| --- | ------------------------------------ | --------------------- | ------------------------------------------------------------------ | --------------------------------------------------- | -------------------- |
| 1   | **Spotify Atlas**                    | Dark / globe motif    | Interactive music intelligence platform from personal Spotify data | Python, embeddings, UMAP, HDBSCAN, Streamlit/Folium | P0 full              |
| 2   | **JPMC Data for Good**               | Blue / wireframe      | Data science for social impact at JPMorgan Chase                   | Python, SQL, pandas, visualization                  | P1 summary or medium |
| 3   | **UCI x Cotality: Capstone Project** | Light / browser motif | UCI Capstone Data Science winning project                          | ML, Streamlit, Forecasting                          | P1 summary           |
| 4   | **[Generic Project Name]**           | Light / waveform      | [Generic description]                                              | [Generic tech]                                      | P1 summary           |


### Extended (projects index — add as available)


| Project                                           | Notes                                         |
| ------------------------------------------------- | --------------------------------------------- |
| Additional ML/DS coursework or hackathon projects | Include only if they strengthen the narrative |
| Kaggle or competition entries                     | If notable placement                          |
| Open-source contributions                         | If meaningful and linkable                    |


**Tag dimensions for filtering (projects index):**

- Domain: `music`, `finance`, `nlp`, `cv`, `general-ml`
- Type: `platform`, `analysis`, `pipeline`, `research`
- Stack: `python`, `sql`, `streamlit`, `pytorch`, etc.

---

## Project Case Study Structure

Use as MDX frontmatter + section template. Spotify Atlas uses all sections; lighter projects may omit optional blocks.

### Frontmatter schema (draft)

```yaml
title: "Spotify Atlas"
slug: "spotify-atlas"
featured: true
order: 1
role: "Personal project"
timeline: "2024 – Present"
status: "Active" # Active | Completed | Archived
summary: "One sentence for cards and OG description"
tags: ["music", "embeddings", "clustering", "visualization"]
stack: ["Python", "UMAP", "HDBSCAN", "OpenAI API", "Streamlit", "Folium"]
links:
  demo: ""      # URL if live
  github: ""    # URL if public
  writeup: ""   # Optional external article
heroImage: ""   # Path in /public or content asset
cardVariant: "dark-globe" # Design system variant
```

### Case study body sections

1. **Overview** — What it is, who it's for, why it exists (2–3 short paragraphs)
2. **Problem** — What question or gap you were exploring
3. **Approach** — High-level architecture; embeddings → dimensionality reduction → clustering → naming → profiles
4. **Technical deep-dive** — Data pipeline, model choices, evaluation (bullet-friendly for recruiters, detail for engineers)
5. **Visualization & UX** — Map-like UI, archetypes, taste profiles, identity summaries
6. **Results & learnings** — What worked, what you'd improve, metrics if any
7. **Stack** — Repeat/consolidate technologies with context
8. **Links** — Demo, repo, screenshots gallery

### Spotify Atlas — required narrative beats

Adit must provide or confirm copy for:

- [ ] Data source and scale (e.g., number of tracks, time range)
- [ ] Embedding model / method used
- [ ] Why UMAP + HDBSCAN (brief justification)
- [ ] AI naming / archetype generation approach
- [ ] What "taste profiles" and "identity summaries" mean in product terms
- [ ] Screenshots or screen recording of the map UI
- [ ] Live demo URL or explicit "screenshots only" decision
- [ ] GitHub visibility (public / private / no repo)

---

## Experience Content

### Per-role fields

```yaml
title: "Data Scientist"
company: "Company Name"
location: "City, ST / Remote"
start: "YYYY-MM"
end: "YYYY-MM" # or "Present"
description: "1–2 sentence summary"
highlights:
  - "Bullet with metric or outcome"
  - "Bullet with tech stack"
tags: ["ml", "nlp"]
```

### Minimum for MVP

- [ ] All roles from resume with accurate dates
- [ ] 2–4 bullets per recent role; 1–2 for older roles
- [ ] Consistent tense (past for ended, present for current)

---

## Awards Content

### Per-award fields

```yaml
title: "Award name"
issuer: "Organization"
date: "YYYY"
description: "Optional one line"
icon: "trophy" # trophy | medal | star | certificate
link: "" # optional
```

### Minimum for MVP

- [ ] 3–5 awards for homepage
- [ ] Full list if `/awards` page is included

---

## About Page Requirements

- [ ] Professional headshot (optional but recommended) — provide file or confirm illustration-only
- [ ] Extended bio (~200–300 words): background, what you're looking for, how you work
- [ ] **Skills summary** grouped: ML/AI, engineering, data, tools (not an exhaustive keyword dump)
- [ ] Education (degree, school, year)
- [ ] Optional: interests that humanize (music, etc.) — keep brief

---

## Resume Requirements

### Formats

1. **PDF** — Primary artifact for recruiters (`/resume/adit-mohindra-resume.pdf` or similar)
2. **On-page HTML** — Semantic, printable, matches PDF content

### Sections (align PDF and web)

- [ ] Name, contact, links (GitHub, LinkedIn)
- [ ] Summary / headline (DS/ML/AI positioning)
- [ ] Experience (reverse chronological)
- [ ] Projects (Spotify Atlas called out)
- [ ] Skills
- [ ] Education
- [ ] Awards (optional compact list)

### Resume rules

- One page preferred for early career; two pages max if justified
- Metrics and outcomes where possible
- No photo required on US tech resume unless Adit prefers it

---

## Contact Page Requirements

- [ ] Professional email
- [ ] GitHub URL
- [ ] LinkedIn URL
- [ ] Optional: Calendly or scheduling link
- [ ] Availability statement ("Open to ML/DS roles in …")
- [ ] No physical address required

---

## Global SEO & Meta


| Item                | Status                                        |
| ------------------- | --------------------------------------------- |
| Site title template | `[Page] · Adit Mohindra`                      |
| Default description | Role + Spotify Atlas one-liner                |
| OG image            | Branded 1200×630 (name + role + visual motif) |
| Favicon             | Star/globe mark                               |
| `sitemap.xml`       | All public routes                             |
| `robots.txt`        | Allow all                                     |


---

## Assets to Produce


| Asset                                | Owner        | Notes                                 |
| ------------------------------------ | ------------ | ------------------------------------- |
| Spotify Atlas screenshots (3–6)      | Adit         | Map, clusters, profile views          |
| Project card thumbnails              | Design/build | Can be SVG/CSS compositions initially |
| Hero ATLAS.EXE illustration          | Design/build | SVG or optimized PNG                  |
| Wireframe globe, barcode, star icons | Design/build | SVG sprites                           |
| Resume PDF                           | Adit         | Export from final content             |
| OG image                             | Design/build | Once typography/colors locked         |


---

## Missing Content — Adit Must Provide

Use this as the pre-build checklist. Items marked **blocking** must exist before respective phase (see `ROADMAP.md`).

### Blocking for content phase

- [ ] **Final role title preference** — "Data Scientist / ML Engineer" vs including "AI Engineer" everywhere
- [ ] **Hero tagline** — exact 1–2 sentences
- [ ] **Employment history** — companies, titles, dates, locations (**blocking**)
- [ ] **Experience bullets** with outcomes/metrics (**blocking**)
- [ ] **Resume PDF** or Word source to convert (**blocking** for `/resume`)
- [ ] **Contact email** and social URLs (**blocking**)
- [ ] **Spotify Atlas** — demo URL, repo policy, screenshots (**blocking** for flagship case study)

### Blocking for polish phase

- [ ] **Awards list** with dates and issuers
- [ ] **Education** details
- [ ] **About bio** extended version
- [ ] **JPMC Data for Good** — description, stack, linkable artifacts
- [ ] **Web Crawler** — description, stack, repo/demo
- [ ] **Music Analytics** — description, stack, repo/demo
- [ ] **Headshot** yes/no and file
- [ ] **Open to work** geography and role types (remote, hybrid, relocation)
- [ ] **Copyright year** and legal name spelling confirmation

### Nice-to-have (can ship without)

- [ ] Testimonials or quotes
- [ ] Speaking / publications
- [ ] Blog posts to link
- [ ] Video walkthrough of Spotify Atlas

---

## Content Voice Guidelines (summary)

- Lead with outcomes, then methods
- Use concrete nouns: embeddings, clustering, pipelines, dashboards
- Avoid empty superlatives; prefer "built," "shipped," "measured," "reduced"
- Keep card copy under ~120 characters where possible

