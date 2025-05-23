import { z } from "zod";
import { DialogueSchema, SectionSchema } from "../model/section.schema.js";

export const GenScriptRequestSchema = z.object({
  sections: z.array(SectionSchema),
  userInstructions: z.string(),
});

export const GenScriptResponseSchema = z.array(DialogueSchema);

export type GenScriptRequest = z.infer<typeof GenScriptRequestSchema>;
export type GenScriptResponse = z.infer<typeof GenScriptResponseSchema>;
