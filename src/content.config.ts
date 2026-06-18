import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projectStatus = z.enum(['Active', 'Completed', 'Archived']);
const cardVariant = z.enum(['dark-globe', 'blue-cube', 'light-browser', 'light-wave']);
const awardIcon = z.enum(['trophy', 'medal', 'star', 'certificate']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    role: z.string(),
    timeline: z.string(),
    status: projectStatus,
    summary: z.string(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    links: z
      .object({
        demo: z.string().url().or(z.literal('')).default(''),
        github: z.string().url().or(z.literal('')).default(''),
        writeup: z.string().url().or(z.literal('')).default(''),
      })
      .default({ demo: '', github: '', writeup: '' }),
    heroImage: z.string().optional(),
    cardVariant,
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    start: z.string(),
    end: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/awards' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    description: z.string().optional(),
    icon: awardIcon.default('star'),
    link: z.string().url().or(z.literal('')).optional(),
    order: z.number(),
  }),
});

export const collections = { projects, experience, awards };
