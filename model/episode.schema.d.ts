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
export declare const episodeLLMResponseSchema: z.ZodObject<{
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
export declare const statusSchema: z.ZodObject<{
    state: z.ZodString;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    state: string;
    timestamp: string;
}, {
    state: string;
    timestamp: string;
}>;
export declare const episodeRequestSchema: z.ZodObject<{
    name: z.ZodString;
    status: z.ZodDefault<z.ZodArray<z.ZodObject<{
        state: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        state: string;
        timestamp: string;
    }, {
        state: string;
        timestamp: string;
    }>, "many">>;
    publicationDate: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: {
        state: string;
        timestamp: string;
    }[];
    name: string;
    publicationDate?: string | undefined;
}, {
    name: string;
    status?: {
        state: string;
        timestamp: string;
    }[] | undefined;
    publicationDate?: string | undefined;
}>;
export declare const episodeStoreSchema: z.ZodObject<{
    name: z.ZodString;
    status: z.ZodDefault<z.ZodArray<z.ZodObject<{
        state: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        state: string;
        timestamp: string;
    }, {
        state: string;
        timestamp: string;
    }>, "many">>;
    publicationDate: z.ZodOptional<z.ZodString>;
} & {
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: {
        state: string;
        timestamp: string;
    }[];
    name: string;
    updatedAt: string;
    publicationDate?: string | undefined;
}, {
    name: string;
    updatedAt: string;
    status?: {
        state: string;
        timestamp: string;
    }[] | undefined;
    publicationDate?: string | undefined;
}>;
export declare const episodeSchema: z.ZodObject<{
    name: z.ZodString;
    status: z.ZodDefault<z.ZodArray<z.ZodObject<{
        state: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        state: string;
        timestamp: string;
    }, {
        state: string;
        timestamp: string;
    }>, "many">>;
    publicationDate: z.ZodOptional<z.ZodString>;
} & {
    updatedAt: z.ZodString;
} & {
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: {
        state: string;
        timestamp: string;
    }[];
    name: string;
    updatedAt: string;
    id: string;
    publicationDate?: string | undefined;
}, {
    name: string;
    updatedAt: string;
    id: string;
    status?: {
        state: string;
        timestamp: string;
    }[] | undefined;
    publicationDate?: string | undefined;
}>;
export declare const episodeRequestListSchema: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    status: z.ZodDefault<z.ZodArray<z.ZodObject<{
        state: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        state: string;
        timestamp: string;
    }, {
        state: string;
        timestamp: string;
    }>, "many">>;
    publicationDate: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: {
        state: string;
        timestamp: string;
    }[];
    name: string;
    publicationDate?: string | undefined;
}, {
    name: string;
    status?: {
        state: string;
        timestamp: string;
    }[] | undefined;
    publicationDate?: string | undefined;
}>, "many">;
export declare const episodeListSchema: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    status: z.ZodDefault<z.ZodArray<z.ZodObject<{
        state: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        state: string;
        timestamp: string;
    }, {
        state: string;
        timestamp: string;
    }>, "many">>;
    publicationDate: z.ZodOptional<z.ZodString>;
} & {
    updatedAt: z.ZodString;
} & {
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: {
        state: string;
        timestamp: string;
    }[];
    name: string;
    updatedAt: string;
    id: string;
    publicationDate?: string | undefined;
}, {
    name: string;
    updatedAt: string;
    id: string;
    status?: {
        state: string;
        timestamp: string;
    }[] | undefined;
    publicationDate?: string | undefined;
}>, "many">;
export type Dialogue = z.infer<typeof dialogueSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type EpisodeMetadata = z.infer<typeof episodeMetadataSchema>;
export type EpisodeLLMResponse = z.infer<typeof episodeLLMResponseSchema>;
export type Status = z.infer<typeof statusSchema>;
export type EpisodeRequest = z.infer<typeof episodeRequestSchema>;
export type EpisodeStore = z.infer<typeof episodeStoreSchema>;
export type Episode = z.infer<typeof episodeSchema>;
export type EpisodeRequestList = z.infer<typeof episodeRequestListSchema>;
export type EpisodeList = z.infer<typeof episodeListSchema>;
