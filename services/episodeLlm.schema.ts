// episodeLlm.schema.ts
import { z } from "zod";

export const dialogueLineSchema = z.object({
  speaker: z.enum(["colleague1", "colleague2"]),
  text: z.string(),
});

export const episodeScriptSchema = z.object({
  script: z.array(dialogueLineSchema),
});

export const llmDialogueResponseSchema = z.object({
  speakerId: z.number().describe(
    `The host ID that this dialogue belongs to.
Use numeric values like 1 or 2.
If a line clearly identifies the speaker (e.g., "Host 1:", "Host 2:", "Interviewer:", "Guest:"), assign a consistent ID.
If unclear, default to 1. Maintain speaker consistency throughout the episode.`
  ),
  text: z
    .string()
    .describe("The exact words associated with the host part of the dialogue"),
});

export const llmSectionResponseSchema = z.object({
  title: z
    .string()
    .describe(
      "A brief, descriptive title that summarizes the main topic or theme of this section"
    ),
  dialogues: z
    .array(llmDialogueResponseSchema)
    .describe(
      "An ordered sequence of speaker dialogues that form a coherent conversation"
    ),
});

export const llmEpisodeResponseSchema = z.object({
  title: z.string().describe("The main title of the podcast episode"),
  sections: z
    .array(llmSectionResponseSchema)
    .describe(
      "Logical segments of the episode, each containing related conversations around a specific topic"
    ),
});

export type LlmDialogueResponse = z.infer<typeof llmDialogueResponseSchema>;
export type LlmSectionResponse = z.infer<typeof llmSectionResponseSchema>;
export type LlmEpisodeResponse = z.infer<typeof llmEpisodeResponseSchema>;
