export const PROJECT_FILTERS = [
  'All',
  'ML/AI',
  'Data Product',
  'Visualization',
  'University',
  'Misc',
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export type ProjectCategory = Exclude<ProjectFilter, 'All'>;

export type CardVariant = 'dark-globe' | 'blue-cube' | 'light-browser' | 'light-wave';

export interface ProjectCardData {
  id: string;
  title: string;
  slug: string;
  summary: string;
  categories: ProjectCategory[];
  stack: string[];
  status?: string;
  cardVariant: CardVariant;
  image?: string;
  externalHref: string;
  comingSoon: boolean;
}

export function categoryLabel(category: ProjectCategory): string {
  return category;
}
