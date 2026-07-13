export type HubAwardIcon = 'trophy' | 'medal' | 'star';

export interface HubTimelineEntry {
  role: string;
  company: string;
  dates: string;
  logo: string;
  logoAlt: string;
  description: string;
  tags: string[];
}

export interface HubAwardEntry {
  title: string;
  description: string;
  icon: HubAwardIcon;
}

export interface HubCurrentlyEntry {
  title: string;
  description: string;
  icon: 'globe' | 'chart' | 'turntable';
}

export const experienceTimeline: HubTimelineEntry[] = [
  {
    role: 'Data Scientist',
    company: 'Cotality',
    dates: 'Sep 2025 – Present',
    logo: '/logos/CoreLogic_logo.png',
    logoAlt: 'Cotality logo',
    description:
      'Working across machine learning, forecasting, and data science to support analytical decision-making.',
    tags: ['PYTHON', 'XGBOOST', 'SQL'],
  },
  {
    role: 'Machine Learning Researcher',
    company: 'UCI x Cotality',
    dates: 'Jan 2025 – Jun 2025',
    logo: '/logos/UCI_Anteaters_logo.png',
    logoAlt: 'UC Irvine Anteaters logo',
    description:
      'Designed and delivered an end-to-end predictive ML system quantifying ZIP-level real estate market hotness. Awarded 1st Place at the 2025 UCI ICS Project Expo among 300+ participants.',
    tags: ['PYTHON', 'XGBOOST', 'SARIMA', 'SQL'],
  },
  {
    role: 'Data Science Intern',
    company: 'Procon Analytics',
    dates: 'Jul 2024 – Aug 2025',
    logo: '/logos/ProconLogo.jpg',
    logoAlt: 'Procon Analytics logo',
    description:
      'Built predictive churn models and real-time dashboards; engineered a cross-platform customer identity system resolving 100K+ fragmented records.',
    tags: ['PYTHON', 'SQL', 'TABLEAU', 'STREAMLIT'],
  },
  {
    role: 'Data for Good Hackathon',
    company: 'J.P. Morgan Chase',
    dates: 'Oct 2023',
    logo: '/logos/JPMorgan-Chase-Logo-SVG-desktop.jpg',
    logoAlt: 'J.P. Morgan Chase logo',
    description:
      'Built ML models to predict housing stability and deliver actionable insights for affordable housing solutions. Honorable Mention.',
    tags: ['PYTHON', 'CLUSTERING'],
  },
];

export const experienceAwards: HubAwardEntry[] = [
  {
    title: '1st Place — 2025 UCI ICS Project Expo',
    description: 'Built an ML solution for real estate market prediction.',
    icon: 'trophy',
  },
  {
    title: 'Honorable Mention — JPMC Data for Good Hackathon',
    description: 'Built an ML solution for affordable housing stability prediction.',
    icon: 'medal',
  },
  {
    title: "Dean's List — UCI",
    description: 'Recognized for academic excellence, 2023 – 2025.',
    icon: 'star',
  },
];

export const currentlyItems: HubCurrentlyEntry[] = [
  {
    title: 'Building Spotify Atlas',
    description: 'Music intelligence platform with embeddings, clustering, and map-like UI.',
    icon: 'globe',
  },
  {
    title: 'Music & Data',
    description:
      'Exploring taste profiles, listening patterns, and cultural signals in audio data.',
    icon: 'chart',
  },
  {
    title: 'DJ & Curator',
    description: 'Mixing sets and building playlists that bridge genres and moods.',
    icon: 'turntable',
  },
];

export const featuredProjectSlugs = [
  'spotify-atlas',
  'corelogic-hotness',
  'healthmaxx',
  'web-crawler',
] as const;

export const connectLinks = {
  email: 'aditmohindra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aditmohindra',
  github: 'https://github.com/aditmohindra',
} as const;
