import { z } from "zod";
export declare const llmDialogueResponseSchema: z.ZodObject<{
    speakerId: z.ZodNumber;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    speakerId: number;
}, {
    text: string;
    speakerId: number;
}>;
export declare const llmSectionResponseSchema: z.ZodObject<{
    title: z.ZodString;
    dialogues: z.ZodArray<z.ZodObject<{
        speakerId: z.ZodNumber;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        speakerId: number;
    }, {
        text: string;
        speakerId: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    dialogues: {
        text: string;
        speakerId: number;
    }[];
}, {
    title: string;
    dialogues: {
        text: string;
        speakerId: number;
    }[];
}>;
export declare const llmEpisodeResponseSchema: z.ZodObject<{
    title: z.ZodString;
    sections: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        dialogues: z.ZodArray<z.ZodObject<{
            speakerId: z.ZodNumber;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            speakerId: number;
        }, {
            text: string;
            speakerId: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        dialogues: {
            text: string;
            speakerId: number;
        }[];
    }, {
        title: string;
        dialogues: {
            text: string;
            speakerId: number;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    sections: {
        title: string;
        dialogues: {
            text: string;
            speakerId: number;
        }[];
    }[];
}, {
    title: string;
    sections: {
        title: string;
        dialogues: {
            text: string;
            speakerId: number;
        }[];
    }[];
}>;
export type LlmDialogueResponse = z.infer<typeof llmDialogueResponseSchema>;
export type LlmSectionResponse = z.infer<typeof llmSectionResponseSchema>;
export type LlmEpisodeResponse = z.infer<typeof llmEpisodeResponseSchema>;
