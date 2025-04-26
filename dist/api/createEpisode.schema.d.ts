import { z } from "zod";
export declare const EpisodeRequestSchema: z.ZodObject<{
    script: z.ZodString;
    podcastTitle: z.ZodString;
    labels: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    sounds: z.ZodObject<{
        intro: z.ZodString;
        outro: z.ZodString;
        transition: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        intro: string;
        outro: string;
        transition: string;
    }, {
        intro: string;
        outro: string;
        transition: string;
    }>;
    hosts: z.ZodObject<{
        host1: z.ZodString;
        host2: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        host1: string;
        host2: string;
    }, {
        host1: string;
        host2: string;
    }>;
}, "strip", z.ZodTypeAny, {
    labels: string[];
    script: string;
    podcastTitle: string;
    sounds: {
        intro: string;
        outro: string;
        transition: string;
    };
    hosts: {
        host1: string;
        host2: string;
    };
}, {
    script: string;
    podcastTitle: string;
    sounds: {
        intro: string;
        outro: string;
        transition: string;
    };
    hosts: {
        host1: string;
        host2: string;
    };
    labels?: string[] | undefined;
}>;
export type EpisodeRequest = z.infer<typeof EpisodeRequestSchema>;
