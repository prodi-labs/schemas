import { z } from "zod";
export declare const dialogueSchema: z.ZodObject<{
    text: z.ZodString;
    delay: z.ZodNumber;
    voice: z.ZodString;
    voiceId: z.ZodString;
    audioUrl: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    text: string;
    delay: number;
    voice: string;
    voiceId: string;
    audioUrl: string;
    color?: string | undefined;
}, {
    text: string;
    delay: number;
    voice: string;
    voiceId: string;
    audioUrl: string;
    color?: string | undefined;
}>;
export declare const sectionSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    order: z.ZodNumber;
    dialogues: z.ZodArray<z.ZodObject<{
        text: z.ZodString;
        delay: z.ZodNumber;
        voice: z.ZodString;
        voiceId: z.ZodString;
        audioUrl: z.ZodString;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        delay: number;
        voice: string;
        voiceId: string;
        audioUrl: string;
        color?: string | undefined;
    }, {
        text: string;
        delay: number;
        voice: string;
        voiceId: string;
        audioUrl: string;
        color?: string | undefined;
    }>, "many">;
    backgroundSong: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    order: number;
    dialogues: {
        text: string;
        delay: number;
        voice: string;
        voiceId: string;
        audioUrl: string;
        color?: string | undefined;
    }[];
    title?: string | undefined;
    backgroundSong?: string | null | undefined;
}, {
    order: number;
    dialogues: {
        text: string;
        delay: number;
        voice: string;
        voiceId: string;
        audioUrl: string;
        color?: string | undefined;
    }[];
    title?: string | undefined;
    backgroundSong?: string | null | undefined;
}>;
export declare const episodeMetadataSchema: z.ZodObject<{
    title: z.ZodString;
    createdAt: z.ZodString;
    intro: z.ZodString;
    outro: z.ZodString;
    transition: z.ZodString;
    labels: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    createdAt: string;
    intro: string;
    outro: string;
    transition: string;
    labels: string[];
}, {
    title: string;
    createdAt: string;
    intro: string;
    outro: string;
    transition: string;
    labels: string[];
}>;
export declare const episodeSchema: z.ZodObject<{
    metadata: z.ZodObject<{
        title: z.ZodString;
        createdAt: z.ZodString;
        intro: z.ZodString;
        outro: z.ZodString;
        transition: z.ZodString;
        labels: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        createdAt: string;
        intro: string;
        outro: string;
        transition: string;
        labels: string[];
    }, {
        title: string;
        createdAt: string;
        intro: string;
        outro: string;
        transition: string;
        labels: string[];
    }>;
    sections: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        order: z.ZodNumber;
        dialogues: z.ZodArray<z.ZodObject<{
            text: z.ZodString;
            delay: z.ZodNumber;
            voice: z.ZodString;
            voiceId: z.ZodString;
            audioUrl: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            delay: number;
            voice: string;
            voiceId: string;
            audioUrl: string;
            color?: string | undefined;
        }, {
            text: string;
            delay: number;
            voice: string;
            voiceId: string;
            audioUrl: string;
            color?: string | undefined;
        }>, "many">;
        backgroundSong: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        order: number;
        dialogues: {
            text: string;
            delay: number;
            voice: string;
            voiceId: string;
            audioUrl: string;
            color?: string | undefined;
        }[];
        title?: string | undefined;
        backgroundSong?: string | null | undefined;
    }, {
        order: number;
        dialogues: {
            text: string;
            delay: number;
            voice: string;
            voiceId: string;
            audioUrl: string;
            color?: string | undefined;
        }[];
        title?: string | undefined;
        backgroundSong?: string | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    metadata: {
        title: string;
        createdAt: string;
        intro: string;
        outro: string;
        transition: string;
        labels: string[];
    };
    sections: {
        order: number;
        dialogues: {
            text: string;
            delay: number;
            voice: string;
            voiceId: string;
            audioUrl: string;
            color?: string | undefined;
        }[];
        title?: string | undefined;
        backgroundSong?: string | null | undefined;
    }[];
}, {
    metadata: {
        title: string;
        createdAt: string;
        intro: string;
        outro: string;
        transition: string;
        labels: string[];
    };
    sections: {
        order: number;
        dialogues: {
            text: string;
            delay: number;
            voice: string;
            voiceId: string;
            audioUrl: string;
            color?: string | undefined;
        }[];
        title?: string | undefined;
        backgroundSong?: string | null | undefined;
    }[];
}>;
export type Dialogue = z.infer<typeof dialogueSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type EpisodeMetadata = z.infer<typeof episodeMetadataSchema>;
export type EpisodeSchema = z.infer<typeof episodeSchema>;
