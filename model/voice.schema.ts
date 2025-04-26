import { z } from 'zod';

export const storageVoiceSchema = z.object({
    language: z.string(),
    name: z.string(),
    service: z.string(),
    serviceVoiceId: z.string(),
    volume: z.number()
});

export type StorageVoice = z.infer<typeof storageVoiceSchema>;

