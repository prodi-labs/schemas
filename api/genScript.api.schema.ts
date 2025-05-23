import { z } from "zod";
import {
  DialogueSchema,
  SectionRecordSchema,
} from "../model/section.schema.js";

export const GenScriptRequestSchema = z.object({
  sections: z.array(SectionRecordSchema),
  userInstructions: z.string(),
});

export const GenScriptResponseSchema = z.array(DialogueSchema);

export type GenScriptRequest = z.infer<typeof GenScriptRequestSchema>;
export type GenScriptResponse = z.infer<typeof GenScriptResponseSchema>;
