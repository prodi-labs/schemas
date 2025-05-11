import { z } from "zod";

export const projectRequestSchema = z.object({
  name: z
    .string()
    .min(1, "Project name is required")
    .describe("Name of the project"),
  host1: z
    .string()
    .min(1, "Host 1 is required")
    .describe("Host 1 of the project"),
  host2: z
    .string()
    .min(1, "Host 2 is required")
    .describe("Host 2 of the project"),
  agentId: z
    .string()
    .min(1, "Agent ID is required")
    .describe("ID of the associated agent"),
});

export const projectSchema = projectRequestSchema.extend({
  id: z.string().describe("Unique identifier of the project"),
});

export const projectsRequestListSchema = z
  .array(projectRequestSchema)
  .describe("List of projects");
export const projectsListSchema = z
  .array(projectSchema)
  .describe("List of projects");

export type ProjectRequest = z.infer<typeof projectRequestSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectsList = z.infer<typeof projectsListSchema>;
export type ProjectsRequestList = z.infer<typeof projectsRequestListSchema>;
