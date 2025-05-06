// project.api.schema.ts
import { z } from "zod";
import {
  projectRequestSchema,
  projectSchema,
  projectsListSchema,
} from "../model/project.schema.js";

// Create Project
export const CreateProjectRequestSchema = projectRequestSchema;
export const CreateProjectResponseSchema = projectSchema;

// Get Projects List
export const GetProjectsResponseSchema = projectsListSchema;

// Get Project By ID
export const GetProjectParamsSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
});
export const GetProjectResponseSchema = projectSchema;

// Update Project
export const UpdateProjectParamsSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
});
export const UpdateProjectRequestSchema = projectRequestSchema;
export const UpdateProjectResponseSchema = projectSchema;

// Delete Project
export const DeleteProjectParamsSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
});
export const DeleteProjectResponseSchema = z.object({
  id: z.string().describe("ID of the deleted project"),
  deleted: z
    .literal(true)
    .describe("Confirmation that the project was deleted"),
});

// Type exports
export type CreateProjectRequest = z.infer<typeof CreateProjectRequestSchema>;
export type CreateProjectResponse = z.infer<typeof CreateProjectResponseSchema>;

export type GetProjectsResponse = z.infer<typeof GetProjectsResponseSchema>;

export type GetProjectParams = z.infer<typeof GetProjectParamsSchema>;
export type GetProjectResponse = z.infer<typeof GetProjectResponseSchema>;

export type UpdateProjectParams = z.infer<typeof UpdateProjectParamsSchema>;
export type UpdateProjectRequest = z.infer<typeof UpdateProjectRequestSchema>;
export type UpdateProjectResponse = z.infer<typeof UpdateProjectResponseSchema>;

export type DeleteProjectParams = z.infer<typeof DeleteProjectParamsSchema>;
export type DeleteProjectResponse = z.infer<typeof DeleteProjectResponseSchema>;
