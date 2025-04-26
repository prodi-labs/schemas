import { z } from 'zod';
export declare const storageVoiceSchema: z.ZodObject<{
    language: z.ZodString;
    name: z.ZodString;
    service: z.ZodString;
    serviceVoiceId: z.ZodString;
    volume: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    language: string;
    name: string;
    service: string;
    serviceVoiceId: string;
    volume: number;
}, {
    language: string;
    name: string;
    service: string;
    serviceVoiceId: string;
    volume: number;
}>;
export declare const voiceSchema: z.ZodObject<{
    language: z.ZodString;
    name: z.ZodString;
    service: z.ZodString;
    serviceVoiceId: z.ZodString;
    volume: z.ZodNumber;
} & {
    voiceId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    voiceId: string;
    language: string;
    name: string;
    service: string;
    serviceVoiceId: string;
    volume: number;
}, {
    voiceId: string;
    language: string;
    name: string;
    service: string;
    serviceVoiceId: string;
    volume: number;
}>;
export declare const getVoicesSchema: z.ZodObject<{
    voices: z.ZodArray<z.ZodObject<{
        language: z.ZodString;
        name: z.ZodString;
        service: z.ZodString;
        serviceVoiceId: z.ZodString;
        volume: z.ZodNumber;
    } & {
        voiceId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        voiceId: string;
        language: string;
        name: string;
        service: string;
        serviceVoiceId: string;
        volume: number;
    }, {
        voiceId: string;
        language: string;
        name: string;
        service: string;
        serviceVoiceId: string;
        volume: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    voices: {
        voiceId: string;
        language: string;
        name: string;
        service: string;
        serviceVoiceId: string;
        volume: number;
    }[];
}, {
    voices: {
        voiceId: string;
        language: string;
        name: string;
        service: string;
        serviceVoiceId: string;
        volume: number;
    }[];
}>;
export type GetVoicesResponse = z.infer<typeof getVoicesSchema>;
export type StorageVoice = z.infer<typeof storageVoiceSchema>;
export type VoiceSchema = z.infer<typeof voiceSchema>;
