import { z } from "zod";
import { sectionSchema } from "../model/episode.schema.js";
export const SaveEpisodeRequestSchema = z.object({
    podcastId: z.string().describe("Unique identifier of the podcast"),
    sections: z.array(sectionSchema).describe("List of chapters in the episode"),
    files: z.array(z.string()).describe("Array of file paths for the podcast")
});
