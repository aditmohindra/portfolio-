/**
 * Site-level copy — canonical strings referenced by CONTENT_INVENTORY.md and PROJECT_BRIEF.md.
 * Page markup imports from here; do not duplicate in Astro templates.
 */
export const siteConfig = {
  name: 'Adit Mohindra',
  roleLine: 'DATA SCIENTIST / ML ENGINEER',
  /** Compact tagline for sidebar identity block */
  sidebarTagline: 'DATA + ML + SYSTEMS',
  tagline:
    'Builds ML systems and music intelligence tools — from embeddings and clustering to interactive, map-like experiences.',
  /** Punchy uppercase accent line for Record 01 hero — distinct from sidebarTagline */
  heroAccentLine: 'DATA SCIENTIST / ML ENGINEER',
  heroPositioning:
    'Data Scientist / ML Engineer building ML systems, music intelligence tools, and interactive data products.',
  heroBio:
    'Focused on applied machine learning — pipelines, embeddings, clustering, and the product layer that makes models useful.',
  aboutPreview:
    'Data scientist and ML engineer focused on applied machine learning — pipelines, embeddings, clustering, and the product layer that makes models useful. Flagship work includes Spotify Atlas, an interactive music intelligence platform built from personal listening data. Comfortable across Python, SQL, visualization, and interactive tooling; looking for roles where I can ship end-to-end data products with measurable impact.',
  location: 'Bay Area',
  availability: 'Open to ML / DS roles',
  focus: 'ML systems & music intelligence',
  /** Placeholder until education details are confirmed in CONTENT_INVENTORY.md */
  education: 'TBD — degree & institution pending',
  currentBuild: 'Currently building Spotify Atlas',
  social: {
    github: 'https://github.com/aditmohindra',
    linkedin: 'https://linkedin.com/in/aditmohindra',
    email: 'hello@example.com',
  },
  resumeHref: '/resume',
} as const;
