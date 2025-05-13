import { z } from "zod";
import {
  episodeRequestSchema,
  episodeSchema,
  episodeListSchema,
} from "../model/episode.schema.js";

// POST /api/projects/:projectId/episodes - Create a new episode
export const CreateEpisodeParamsSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
});
export const CreateEpisodeRequestSchema = episodeRequestSchema;
export const CreateEpisodeResponseSchema = episodeSchema;

// GET /api/projects/:projectId/episodes - Retrieve all episodes for a project
export const GetEpisodesParamsSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
});
export const GetEpisodesResponseSchema = episodeListSchema;

// PUT /api/projects/:projectId/episodes/:id - Update an episode
export const UpdateEpisodeParamsSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
  id: z.string().min(1, "Episode ID is required"),
});
export const UpdateEpisodeRequestSchema = episodeRequestSchema;
export const UpdateEpisodeResponseSchema = episodeSchema;

// GET /api/projects/:projectId/episodes/:id - Retrieve a specific episode
export const GetEpisodeParamsSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
  id: z.string().min(1, "Episode ID is required"),
});
export const GetEpisodeResponseSchema = episodeSchema;

// DELETE /api/projects/:projectId/episodes/:id - Delete an episode
export const DeleteEpisodeParamsSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
  id: z.string().min(1, "Episode ID is required"),
});
export const DeleteEpisodeResponseSchema = z.object({
  id: z.string().describe("ID of the deleted episode"),
  deleted: z
    .literal(true)
    .describe("Confirmation that the episode was deleted"),
});

// Type exports
export type CreateEpisodeParams = z.infer<typeof CreateEpisodeParamsSchema>;
export type CreateEpisodeRequest = z.infer<typeof CreateEpisodeRequestSchema>;
export type CreateEpisodeResponse = z.infer<typeof CreateEpisodeResponseSchema>;

export type GetEpisodesParams = z.infer<typeof GetEpisodesParamsSchema>;
export type GetEpisodesResponse = z.infer<typeof GetEpisodesResponseSchema>;

export type UpdateEpisodeParams = z.infer<typeof UpdateEpisodeParamsSchema>;
export type UpdateEpisodeRequest = z.infer<typeof UpdateEpisodeRequestSchema>;
export type UpdateEpisodeResponse = z.infer<typeof UpdateEpisodeResponseSchema>;

export type GetEpisodeParams = z.infer<typeof GetEpisodeParamsSchema>;
export type GetEpisodeResponse = z.infer<typeof GetEpisodeResponseSchema>;

export type DeleteEpisodeParams = z.infer<typeof DeleteEpisodeParamsSchema>;
export type DeleteEpisodeResponse = z.infer<typeof DeleteEpisodeResponseSchema>;
