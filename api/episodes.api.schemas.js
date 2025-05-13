import { z } from "zod";
import { episodeRequestSchema, episodeSchema, episodeListSchema, } from "../model/episode.schema.js";
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
//# sourceMappingURL=episodes.api.schemas.js.map