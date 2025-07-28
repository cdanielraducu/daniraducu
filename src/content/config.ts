import { defineCollection, z } from "astro:content";

const postsCollections = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    title: z.string(),
    industry: z.string(),
    duration: z.string(),
  }),
});

export const collections = {
  posts: postsCollections,
  "posts-ro": postsCollections,
};
