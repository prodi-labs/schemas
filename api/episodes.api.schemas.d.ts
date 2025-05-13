import { z } from "zod";
export declare const CreateEpisodeParamsSchema: z.ZodObject<{
    projectId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    projectId: string;
}, {
    projectId: string;
}>;
export declare const CreateEpisodeRequestSchema: z.ZodObject<{
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
export declare const CreateEpisodeResponseSchema: z.ZodObject<{
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
export declare const GetEpisodesParamsSchema: z.ZodObject<{
    projectId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    projectId: string;
}, {
    projectId: string;
}>;
export declare const GetEpisodesResponseSchema: z.ZodArray<z.ZodObject<{
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
export declare const UpdateEpisodeParamsSchema: z.ZodObject<{
    projectId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    projectId: string;
}, {
    id: string;
    projectId: string;
}>;
export declare const UpdateEpisodeRequestSchema: z.ZodObject<{
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
export declare const UpdateEpisodeResponseSchema: z.ZodObject<{
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
export declare const GetEpisodeParamsSchema: z.ZodObject<{
    projectId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    projectId: string;
}, {
    id: string;
    projectId: string;
}>;
export declare const GetEpisodeResponseSchema: z.ZodObject<{
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
export declare const DeleteEpisodeParamsSchema: z.ZodObject<{
    projectId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    projectId: string;
}, {
    id: string;
    projectId: string;
}>;
export declare const DeleteEpisodeResponseSchema: z.ZodObject<{
    id: z.ZodString;
    deleted: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    id: string;
    deleted: true;
}, {
    id: string;
    deleted: true;
}>;
export type CreateEpisodeParams = z.infer<typeof CreateEpisodeParamsSchema>;
export type CreateEpisodeRequest = z.infer<typeof CreateEpisodeRequestSchema>;
export type CreateEpisodeResponse = z.infer<typeof CreateEpisodeResponseSchema>;
export type GetEpisodesParams = z.infer<typeof GetEpisodesParamsSchema>;
export type GetEpisodesResponse = z.infer<typeof GetEpisodesResponseSchema>;
export type UpdateEpisodeParams = z.infer<typeof UpdateEpisodeParamsSchema>;
export type UpdateEpisodeRequest = z.infer<typeof UpdateEpisodeRequestSchema>;
export type UpdateEpisodeResponse = z.infer<typeof UpdateEpisodeResponseSchema>;
export type GetEpisodeParams = z.infer<typeof GetEpisodeParamsSchema>;
export type GetEpisodeResponse = z.infer<typeof GetEpisodeResponseSchema>;
export type DeleteEpisodeParams = z.infer<typeof DeleteEpisodeParamsSchema>;
export type DeleteEpisodeResponse = z.infer<typeof DeleteEpisodeResponseSchema>;
