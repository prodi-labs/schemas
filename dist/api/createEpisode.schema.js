// createEpisode.schema.ts
import { z } from "zod";
export const EpisodeRequestSchema = z.object({
    script: z.string().min(1, "Script is required"),
    podcastTitle: z.string().min(1, "Podcast title is required"),
    labels: z.array(z.string()).default([]).describe("Optional labels for the episode"),
    sounds: z.object({
        intro: z.string().min(1, "Intro sound is required"),
        outro: z.string().min(1, "Outro sound is required"),
        transition: z.string().min(1, "Transition sound is required"),
    }),
    hosts: z.object({
        host1: z.string().min(1, "Host 1 is required"),
        host2: z.string().min(1, "Host 2 is required"),
    }),
});
