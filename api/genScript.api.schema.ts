import { z } from "zod";
import { DialogueSchema, SectionSchema } from "../model/section.schema.js";

export const GenScriptParamsSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
  episodeId: z.string().min(1, "Episode ID is required"),
  sectionId: z.string().min(1, "Section ID is required"),
});

export const GenScriptRequestSchema = z.object({
  sections: z.array(SectionSchema),
  userInstructions: z.string(),
});

export const GenScriptResponseSchema = z.array(DialogueSchema);

export type GenScriptParams = z.infer<typeof GenScriptParamsSchema>;
export type GenScriptRequest = z.infer<typeof GenScriptRequestSchema>;
export type GenScriptResponse = z.infer<typeof GenScriptResponseSchema>;
