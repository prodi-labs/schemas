import { z } from 'zod';
export const storageVoiceSchema = z.object({
    language: z.string(),
    name: z.string(),
    service: z.string(),
    serviceVoiceId: z.string(),
    volume: z.number()
});
export const voiceSchema = storageVoiceSchema.extend({
    voiceId: z.string()
});
export const getVoicesSchema = z.object({
    voices: z.array(voiceSchema)
});
