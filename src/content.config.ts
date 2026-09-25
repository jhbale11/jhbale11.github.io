import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    authors: z.array(
      z.object({
        name: z.string(),
        me: z.boolean().optional(),
        equal: z.boolean().optional(),
      }),
    ),
    year: z.number(),
    venue: z.string(),
    venueShort: z.string(),
    category: z.enum(['first-author', 'co-author', 'preprint', 'domestic']),
    format: z.string(),
    status: z.string().optional(),
    presentation: z.string().optional(),
    award: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    pdf: z.string().optional(),
    arxiv: z.string().optional(),
    scholar: z.string().optional(),
    conferenceUrl: z.string().optional(),
    conferenceName: z.string().optional(),
    pages: z.string().optional(),
    teaser: z.string().optional(),
    teaserAlt: z.string().optional(),
    areas: z.array(z.string()).default([]),
    selected: z.boolean().default(false),
    order: z.number().default(0),
    lang: z.enum(['en', 'ko']).default('en'),
    abstractSource: z.enum(['official', 'overview']).default('official'),
    bibkey: z.string(),
    bibtype: z.enum(['inproceedings', 'article', 'misc']).default('inproceedings'),
  }),
});

export const collections = { publications };
