import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 1. Profile Collection (About, Manifesto, Persona & Contact)
 * Matches CONTENT-MODEL.md Section 1
 */
const profile = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/profile' }),
  schema: z.object({
    name: z.string(),
    display_title: z.string(),
    edition: z.string(),
    tagline_primary: z.string(),
    tagline_secondary: z.string().optional(),
    hero_video: z.string(),
    portrait_main: z.string(),
    portrait_gallery: z.array(z.string()).optional(),
    skills: z.array(z.string()),
    email: z.string(),
    phone: z.string(),
    website: z.string().optional(),
  }),
});

/**
 * 2. Works Collection (Campaigns, Billboards & Ad Creatives)
 * Matches CONTENT-MODEL.md Section 2
 */
const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/works' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.enum(['billboard', 'print', 'social', 'branding']),
    featured: z.boolean(),
    order: z.number().int().optional(),
    image: z.string(),
    secondary_images: z.array(z.string()).optional(),
    language: z.string().optional(),
    objective: z.string().optional(),
    headline_copy: z.string().optional(),
  }),
});

/**
 * 3. Clients Collection (Client Brands & Collaborators)
 * Matches CONTENT-MODEL.md Section 3
 */
const clients = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/clients' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    industry: z.string(),
    logo: z.string(),
    is_white_logo: z.boolean().optional(),
    order: z.number().int().optional(),
  }),
});

/**
 * 4. Proof Collection (Analytics, Viral Reach & Evidence)
 * Matches CONTENT-MODEL.md Section 4
 */
const proof = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/proof' }),
  schema: z.object({
    title: z.string(),
    stat_number: z.string(),
    stat_suffix: z.string().optional(),
    platform: z.enum(['Instagram', 'YouTube', 'Omnichannel']),
    screenshot: z.string(),
    highlight: z.string().optional(),
  }),
});

/**
 * 5. Process Collection (5-Stage Creative Framework)
 * Matches CONTENT-MODEL.md Section 5
 */
const process = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/process' }),
  schema: z.object({
    step_number: z.number().int(),
    title: z.string(),
    summary: z.string(),
    deliverables: z.array(z.string()).optional(),
  }),
});

export const collections = {
  profile,
  works,
  clients,
  proof,
  process,
};
