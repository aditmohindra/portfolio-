# Design System — Adit Mohindra Portfolio

Design language extracted from the reference mockup: **retro-modern OS UI** + **editorial layout**. The site should feel like a polished technical dossier — structured, browsable, and memorable — not a generic Tailwind template.

**Principle:** Distinctive ornament, restrained color, ruthless readability.

---

## Visual Direction

### Mood
- Calm, precise, slightly nostalgic (window chrome, status panels, pixel display type)
- Recruiter-friendly: clear hierarchy, obvious CTAs, no hidden navigation
- Technical without clutter: globes, barcodes, and stars are **accent**, not noise

### Layout
- **Editorial grid:** Strong horizontal bands, generous whitespace, 1px dividers
- **Max content width:** ~1200px (`max-w-7xl` scale); full-bleed accents allowed for hero background motifs
- **Section rhythm:** Label (mono, small caps) → content → optional CTA link with arrow
- **Columns:** 12-column mental model; homepage uses 2-col hero (copy left, visual right on `lg+`)

### Motifs (use sparingly, repeat for cohesion)
| Motif | Usage |
|-------|--------|
| OS window chrome | Hero ATLAS.EXE panel, optional project previews |
| System info panel | Floating card with labeled rows (FOCUS, DATA, MODELS, …) |
| Wireframe globe | Hero background, Spotify Atlas card, footer |
| Barcode strip | Header/footer flanking element |
| Four-pointed star | Logo, bullet prefix, corner marks |
| Crosshair | Micro-decoration in hero corners |
| Checker / wave block | About section accent |
| Pixel art | Isometric map in hero window only — not site-wide |

### Borders & surfaces
- **Border width:** 1px default (`border border-black/100` or token `--border`)
- **Border radius:** Small (4px) for buttons/cards; 0 for window title bars if going authentic OS
- **Shadows:** Minimal or none; prefer border definition over drop shadows
- **Background:** Off-white base; cards may be white or very light gray; Spotify Atlas card may use dark surface

---

## Typography

### Font roles

| Role | Font (recommended) | Fallback | Usage |
|------|-------------------|----------|--------|
| **Display** | Custom pixel-serif or `Press Start 2P` / similar | serif | Hero name only — use large size cautiously for readability |
| **Sans (body)** | `Inter` or `Geist Sans` | system-ui | Body, nav, headings h2–h4 |
| **Mono (labels)** | `JetBrains Mono` or `IBM Plex Mono` | monospace | Role line, section labels, badges, tech stacks, system panel |

**Note:** Pixel display font is for **name and select accents only**. Do not set body text in pixel font.

### Scale (rem, mobile-first)

| Token | Size | Line height | Weight | Use |
|-------|------|-------------|--------|-----|
| `text-display` | clamp(2.5rem, 8vw, 4.5rem) | 1.05 | 700 | Hero name |
| `text-h1` | 2rem → 2.5rem | 1.2 | 600 | Page titles |
| `text-h2` | 1.25rem → 1.5rem | 1.3 | 600 | Section headers |
| `text-h3` | 1.125rem | 1.4 | 600 | Card titles |
| `text-body` | 1rem | 1.6 | 400 | Paragraphs |
| `text-small` | 0.875rem | 1.5 | 400 | Secondary copy |
| `text-label` | 0.75rem → 0.8125rem | 1.4 | 500 | Mono labels, ALL CAPS nav |
| `text-micro` | 0.6875rem | 1.3 | 500 | Badges, metadata |

### Typographic rules
- Section labels: mono, uppercase, letter-spacing `0.08em`
- Nav links: sans or mono, uppercase, `text-label`
- Paragraph max-width: `65ch` for long prose (about, case studies)
- Use `tabular-nums` for dates in experience timeline

---

## Color Tokens

### Core palette

```css
/* Semantic tokens — implement in Tailwind @theme or CSS variables */
--color-bg:           #F2F2F2;   /* page background */
--color-surface:      #FAFAFA;   /* cards, panels */
--color-surface-dark: #1A1A1A;   /* Spotify Atlas card */
--color-text:         #0A0A0A;   /* primary text */
--color-text-muted:   #5C5C5C;   /* secondary text */
--color-border:       #0A0A0A;   /* primary borders */
--color-border-muted: #D4D4D4;   /* dividers on light bg */

--color-accent:       #7B8CDE;   /* muted lavender-blue */
--color-accent-deep:  #5A6BB5;   /* hover, emphasis */
--color-accent-wash:  #E8EBF8;   /* gradient backgrounds */
--color-accent-glow:  #C5D0F0;   /* soft hero gradient corner */

--color-status-active:#1DB954;   /* Spotify green — "currently building" dot only */
--color-status-open:  #0A0A0A;   /* open to work badge */
--color-focus-ring:   #5A6BB5;   /* keyboard focus */
```

### Tailwind mapping (planned)
- `bg-canvas` → `--color-bg`
- `bg-surface` → `--color-surface`
- `text-ink` / `text-ink-muted`
- `border-ink` / `border-muted`
- `accent` / `accent-deep` / `accent-wash`
- `status-active` (use only for live project indicator)

### Gradients
- **Hero corner:** `accent-wash` → transparent, optional grain overlay at 3–5% opacity
- **System panel bar:** stepped blue-to-white blocks (CSS linear gradient or SVG)
- Avoid rainbow or neon gradients

### Contrast requirements
- Body text on `--color-bg`: ≥ 4.5:1 (black/near-black on #F2F2F2 passes)
- Muted text on light bg: verify ≥ 4.5:1; darken `#5C5C5C` if needed
- White text on `--color-surface-dark`: verify ≥ 4.5:1
- `--color-accent` as text on white: use only for large text or UI chrome, not small body copy

---

## Spacing & Grid

| Token | Value | Use |
|-------|-------|-----|
| `space-section` | 4rem → 6rem | Between homepage sections |
| `space-block` | 1.5rem → 2rem | Inside cards |
| `space-inline` | 1rem | Between related inline elements |
| `gap-grid` | 1rem → 1.5rem | Project grid, info columns |

**Container padding:** `px-4` mobile, `px-6` tablet, `px-8` desktop.

---

## Component Inventory

### Global

| Component | Description | Notes |
|-----------|-------------|-------|
| `SiteHeader` | Nav + decorative barcode/star | Sticky optional; active link dot indicator |
| `SiteFooter` | CTA line, socials, copyright, globe | Thin top border |
| `SectionHeader` | Label + optional right link | "FEATURED PROJECTS" / "VIEW ALL →" |
| `Container` | Max-width wrapper | Consistent horizontal padding |
| `Divider` | 1px horizontal rule | Section separators |

### Hero

| Component | Description |
|-----------|-------------|
| `Hero` | Two-column layout, headline stack, CTAs, badges |
| `RoleLabel` | Mono uppercase with leading blue dot |
| `Tagline` | Star-prefixed sentence |
| `ButtonPrimary` | Black fill, white text, star icon |
| `ButtonSecondary` | White fill, black border, download icon |
| `StatusBadge` | Pill with icon + label |
| `AtlasWindow` | OS title bar + pixel/map visual (React island) |
| `SystemInfoPanel` | Label/value rows + gradient footer bar |
| `DecorativeGlobe` | Wireframe SVG, low opacity |
| `DecorativeCrosshair` | Corner SVG marks |

### Projects

| Component | Description |
|-----------|-------------|
| `ProjectCard` | Bordered card, variant themes (dark-globe, blue-cube, light-browser, light-wave) |
| `ProjectGrid` | Responsive 1 → 2 → 4 columns |
| `TechStack` | Mono dot-separated list |
| `ExternalLinkIcon` | Top-right on cards |
| `ProjectFilter` | Optional island: tag chips |

### Experience & Awards

| Component | Description |
|-----------|-------------|
| `Timeline` | Vertical line + circle nodes |
| `TimelineItem` | Title, company, location, dates, description |
| `AwardItem` | Icon + title + optional date |

### About & Contact

| Component | Description |
|-----------|-------------|
| `BioBlock` | Prose styles for about content |
| `PatternBlock` | Checker/wave decorative panel |
| `SocialLinks` | Icon + label row |
| `ContactCard` | Email prominent, availability note |

### Resume

| Component | Description |
|-----------|-------------|
| `ResumeLayout` | Print-friendly single column |
| `DownloadButton` | Prominent PDF CTA |

### Case study (MDX)

| Component | Description |
|-----------|-------------|
| `CaseStudyHero` | Title, meta, hero image |
| `Prose` | MDX typography defaults |
| `StackList` | Structured tech display |
| `Figure` | Captioned screenshots |
| `Callout` | Optional note/warning panels (bordered, not loud) |

### Icons
- Prefer inline SVG sprite or `lucide-react` in islands only
- Style: monochrome, 1.5px stroke, match `currentColor`

---

## Motion Principles

### Philosophy
Motion supports orientation and delight; it never blocks reading or hurts performance.

### Allowed
| Pattern | Spec |
|---------|------|
| Hover (cards) | `translateY(-2px)` or border color → `accent-deep`, 150ms ease |
| Hover (buttons) | Background invert or darken, 150ms |
| Link underline | 1px offset underline on hover |
| Hero window | Subtle float or blink on title bar dot, optional map pan (CSS) |
| Page load | Fade-in hero content, `opacity` + `translateY(8px)`, 300ms, **respect `prefers-reduced-motion`** |
| Focus | Visible ring, no animation required |

### Avoid
- Parallax scroll
- Long choreographed sequences on load
- Auto-playing video with sound
- Continuous distracting loops (except very subtle hero accent, pausable)
- Layout shift from lazy animations

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility Principles

### Structure
- One `h1` per page
- Logical heading order (no skipped levels)
- Landmarks: `header`, `nav`, `main`, `footer`
- Skip link: "Skip to main content" as first focusable element

### Keyboard & focus
- All interactive elements reachable via Tab
- Focus ring visible (`--color-focus-ring`, 2px offset)
- No keyboard traps in islands
- Mobile menu (if added) traps focus while open and restores on close

### Visual
- Minimum 4.5:1 contrast for normal text
- Touch targets ≥ 44×44px
- Do not rely on color alone for status (pair green dot with text "Active")
- Pixel display name: provide sufficient size; if readability fails, swap to high-contrast serif for `prefers-contrast: more`

### Media
- All meaningful images have `alt` text
- Decorative SVGs: `aria-hidden="true"`
- OG images don't need alt on site but assets should be named clearly

### Motion & cognition
- Honor `prefers-reduced-motion`
- Avoid flashing content (WCAG 2.3.1)

### Forms (if added later)
- Visible labels, described errors, logical tab order

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| `< 640px` | Single column; hero visual below copy; 1-col project grid |
| `640–1024px` | 2-col project grid; hero may stack |
| `≥ 1024px` | Full mockup-inspired layout: hero side-by-side, 4-col projects, 3-col info grid |

**Navigation:** Horizontal links on desktop; consider hamburger or condensed mono nav on mobile — must remain obvious.

---

## What to Avoid

### Visual
- ❌ Generic purple-gradient-on-white "AI startup" aesthetic
- ❌ Heavy glassmorphism, neumorphism, or excessive blur
- ❌ Stock photo hero backgrounds
- ❌ Clipart-style icons mixed with refined OS motifs
- ❌ Competing display fonts (one pixel/display face only)
- ❌ Full-site dark mode mismatch at launch (pick light-first system)
- ❌ Tiny low-contrast gray text for body copy

### UX
- ❌ Mystery meat navigation (icons only, no labels)
- ❌ Carousel-only project showcase (hurts skim and a11y)
- ❌ Autoplay audio/video
- ❌ "Fun" cursor effects or scroll-jacking
- ❌ Pop-ups for newsletter or chat

### Technical
- ❌ Client-side rendering for static prose pages
- ❌ Loading entire React tree for decorative animation
- ❌ Unoptimized multi-MB hero assets
- ❌ Third-party font loads without `font-display: swap` and subsetting
- ❌ Inline styles that bypass token system

### Content
- ❌ Buzzword soup skills cloud without structure
- ❌ Placeholder lorem on launch
- ❌ Broken demo links or private repos presented as public

---

## Implementation Notes (for build phase)

1. Define tokens in `src/styles/global.css` using Tailwind v4 `@theme` or `tailwind.config` extend
2. Document components in Storybook only if time permits; otherwise a `/styleguide` dev page
3. SVG decorations as static assets in `/public/decor/` or Astro components
4. React islands limited to: `AtlasWindow`, optional `ProjectFilter`, optional mobile `NavMenu`
5. Print stylesheet for resume page (`@media print`)

---

## Design Acceptance Checklist

Before marking design phase complete:

- [ ] Token file matches this doc
- [ ] Hero readable at 375px and 1440px widths
- [ ] Project cards distinguishable without color alone (title + iconography)
- [ ] Focus states visible on all interactive elements
- [ ] `prefers-reduced-motion` tested
- [ ] Spotify Atlas dark card contrast verified
- [ ] No more than 2 font families (+ mono) loaded
