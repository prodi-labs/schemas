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
  dialogues: z.array(dialogueSchema).describe("List of dialogues in this section"),
  backgroundSong: z.string().nullable().describe("URL to the background song for this section, if any").optional()
});

export const episodeMetadataSchema = z.object({
  title: z.string().describe("Title of the podcast episode"),
  createdAt: z.string().describe("ISO timestamp of when the episode was created"),
  intro: z.string().describe("URL to the intro audio file"),
  outro: z.string().describe("URL to the outro audio file"),
  transition: z.string().describe("URL to the transition audio file"),
  labels: z.array(z.string()).describe("Array of labels/tags for the episode")
});



export type Dialogue = z.infer<typeof dialogueSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type EpisodeMetadata = z.infer<typeof episodeMetadataSchema>;