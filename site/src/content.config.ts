import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
// Astro 7 deprecated re-exporting `z` from astro:content; use its bundled zod.
import { z } from "astro/zod";

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

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { publications, projects, blog };
