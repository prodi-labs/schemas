import { z } from "zod";

export const GenerateAndSaveAudioRequestSchema = z.object({
  voiceId: z.string().min(1, "Voice ID is required"),
  text: z.string().min(1, "Text is required"),
});

export const GenerateAndSaveAudioResponseSchema = z.object({
  audioUrl: z.string().min(1, "Audio URL is required"),
});

export type GenerateAndSaveAudioRequest = z.infer<
  typeof GenerateAndSaveAudioRequestSchema
>;
export type GenerateAndSaveAudioResponse = z.infer<
  typeof GenerateAndSaveAudioResponseSchema
>;
