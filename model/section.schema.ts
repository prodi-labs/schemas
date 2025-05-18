import { z } from "zod";

export const SectionLabel = z.enum([
  "Local",
  "Celebration",
  "Business insight",
  "HR",
  "International",
  "New client",
  "Success story",
  "Partners",
  "Business unit",
  "Volunteerings",
  "events",
  "Community",
]);

export const DialogueSchema = z.object({
  text: z.string(),
  voiceId: z.string(),
  audioUrl: z.string().url().nullable(),
  delay: z.number().positive().nullable(),
});

export const SectionRecordSchema = z.object({
  title: z.string(),
  order: z.number().int().positive(),
  sourceText: z.string(),
  labels: z.array(SectionLabel),
  script: z.array(DialogueSchema),
});

export const SectionSchema = SectionRecordSchema.extend({
  id: z.string(),
});

export const SectionListSchema = z.array(SectionSchema);

export type SectionLabelType = z.infer<typeof SectionLabel>;
export type Dialogue = z.infer<typeof DialogueSchema>;
export type SectionRecord = z.infer<typeof SectionRecordSchema>;
export type Section = z.infer<typeof SectionSchema>;
export type SectionList = z.infer<typeof SectionListSchema>;
