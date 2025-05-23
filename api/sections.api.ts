import { z } from "zod";
import {
  SectionRecordSchema,
  SectionSchema,
  SectionListSchema,
} from "../model/section.schema.js";

// Common Parameters
export const SectionBaseParamsSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),
  episodeId: z.string().min(1, "Episode ID is required"),
});

export const SectionParamsSchema = SectionBaseParamsSchema.extend({
  id: z.string().min(1, "Section ID is required"),
});

// Get Sections List
export const GetSectionsParamsSchema = SectionBaseParamsSchema;
export const GetSectionsResponseSchema = SectionListSchema;

// Get Section By ID
export const GetSectionParamsSchema = SectionParamsSchema;
export const GetSectionResponseSchema = SectionSchema;

// Create Section
export const CreateSectionParamsSchema = SectionBaseParamsSchema;
export const CreateSectionRequestSchema = SectionRecordSchema;
export const CreateSectionResponseSchema = SectionSchema;

// Update Section
export const UpdateSectionParamsSchema = SectionParamsSchema;
export const UpdateSectionRequestSchema = SectionSchema;

// Bulk Update Sections
export const BulkUpdateSectionsParamsSchema = SectionBaseParamsSchema;
export const BulkUpdateSectionsRequestSchema = z.object({
  sections: z.array(UpdateSectionRequestSchema),
});

// Delete Section
export const DeleteSectionParamsSchema = SectionParamsSchema;

// Type exports
export type SectionBaseParams = z.infer<typeof SectionBaseParamsSchema>;
export type SectionParams = z.infer<typeof SectionParamsSchema>;

export type GetSectionsParams = z.infer<typeof GetSectionsParamsSchema>;
export type GetSectionsResponse = z.infer<typeof GetSectionsResponseSchema>;

export type GetSectionParams = z.infer<typeof GetSectionParamsSchema>;
export type GetSectionResponse = z.infer<typeof GetSectionResponseSchema>;

export type CreateSectionParams = z.infer<typeof CreateSectionParamsSchema>;
export type CreateSectionRequest = z.infer<typeof CreateSectionRequestSchema>;
export type CreateSectionResponse = z.infer<typeof CreateSectionResponseSchema>;

export type UpdateSectionParams = z.infer<typeof UpdateSectionParamsSchema>;
export type UpdateSectionRequest = z.infer<typeof UpdateSectionRequestSchema>;

export type BulkUpdateSectionsParams = z.infer<
  typeof BulkUpdateSectionsParamsSchema
>;
export type BulkUpdateSectionsRequest = z.infer<
  typeof BulkUpdateSectionsRequestSchema
>;

export type DeleteSectionParams = z.infer<typeof DeleteSectionParamsSchema>;
