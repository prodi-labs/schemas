import { z } from "zod";

export const projectRequestSchema = z.object({
  name: z
    .string()
    .min(1, "Project name is required")
    .describe("Name of the project"),
  voiceIds: z
    .array(z.string())
    .min(1, "At least 1 host voice ID is required")
    .describe("Array of voice IDs for the project hosts"),
  agentId: z
    .string()
    .min(1, "Agent ID is required")
    .describe("ID of the associated agent"),
});

export const projectSchema = projectRequestSchema.extend({
  id: z.string().describe("Unique identifier of the project"),
});

export const projectsListSchema = z
  .array(projectSchema)
  .describe("List of projects");

export type ProjectRequest = z.infer<typeof projectRequestSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectsList = z.infer<typeof projectsListSchema>;
