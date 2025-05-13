import { z } from "zod";

export const dialogueSchema = z.object({
  text: z.string().describe("The spoken text content of the dialogue"),
  delay: z.number().describe("Delay in seconds before the next dialogue"),
  voice: z.string().describe("Name of the voice used for this dialogue"),
  voiceId: z.string().describe("Unique identifier of the voice used"),
  audioUrl: z.string().describe("URL to the generated audio file"),
  color: z.string().describe("Color of the dialogue").optional(),
});

export const sectionSchema = z.object({
  title: z.string().describe("Title of the section").optional(),
  order: z.number().describe("Order of the section within the episode"),
  dialogues: z
    .array(dialogueSchema)
    .describe("List of dialogues in this section"),
  backgroundSong: z
    .string()
    .nullable()
    .describe("URL to the background song for this section, if any")
    .optional(),
});

export const episodeMetadataSchema = z.object({
  title: z.string().describe("Title of the podcast episode"),
  createdAt: z
    .string()
    .describe("ISO timestamp of when the episode was created"),
  intro: z.string().describe("URL to the intro audio file"),
  outro: z.string().describe("URL to the outro audio file"),
  transition: z.string().describe("URL to the transition audio file"),
  labels: z.array(z.string()).describe("Array of labels/tags for the episode"),
});

export const episodeLLMResponseSchema = z.object({
  metadata: episodeMetadataSchema.describe(
    "Metadata information about the episode"
  ),
  sections: z
    .array(sectionSchema)
    .describe("List of sections that make up the episode"),
});

// New schema types based on the API documentation

export const statusSchema = z.object({
  state: z.string().describe("The status name"),
  timestamp: z
    .string()
    .describe("ISO date string of when the episode entered this state"),
});

export const episodeRequestSchema = z.object({
  name: z
    .string()
    .min(1, "Episode name is required")
    .describe("Name or title of the episode"),
  status: z
    .array(statusSchema)
    .default([])
    .describe("Array of status transitions with timestamps"),
  publicationDate: z
    .string()
    .optional()
    .describe("ISO date string for scheduled publication"),
});

export const episodeRecordSchema = episodeRequestSchema.extend({
  updatedAt: z
    .string()
    .describe("ISO date string of when the episode was last updated"),
});

export const episodeSchema = episodeRecordSchema.extend({
  id: z.string().describe("Unique identifier of the episode"),
});

export const episodeRequestListSchema = z
  .array(episodeRequestSchema)
  .describe("List of episode requests");

export const episodeListSchema = z
  .array(episodeSchema)
  .describe("List of episodes");

export type Dialogue = z.infer<typeof dialogueSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type EpisodeMetadata = z.infer<typeof episodeMetadataSchema>;
export type EpisodeLLMResponse = z.infer<typeof episodeLLMResponseSchema>;

// New types based on the API documentation
export type Status = z.infer<typeof statusSchema>;
export type EpisodeRequest = z.infer<typeof episodeRequestSchema>;
export type EpisodeRecord = z.infer<typeof episodeRecordSchema>;
export type Episode = z.infer<typeof episodeSchema>;
export type EpisodeRequestList = z.infer<typeof episodeRequestListSchema>;
export type EpisodeList = z.infer<typeof episodeListSchema>;
