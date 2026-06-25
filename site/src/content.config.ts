import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// Publications live in one JSON file — adding a paper is a one-object edit.
const publications = defineCollection({
  loader: file("src/data/publications.json"),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    type: z.enum(["conference", "journal", "preprint"]),
    venue: z.string(),
    doi: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { publications };
