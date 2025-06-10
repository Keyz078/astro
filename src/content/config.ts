import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    isDraft: z.boolean().optional().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
