import { z } from "zod";
export declare const SaveEpisodeRequestSchema: z.ZodObject<{
    podcastId: z.ZodString;
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
    files: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
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
    podcastId: string;
    files: string[];
}, {
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
    podcastId: string;
    files: string[];
}>;
