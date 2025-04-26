import { z } from "zod";

export const DeleteEpisodeRequestSchema = z.object({
  episodeId: z.string().min(1, "Episode ID is required"),
});

