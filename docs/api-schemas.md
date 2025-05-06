# API Schemas

[Back to Main README](../README.md)

## Create Episode

- **File:** `api/createEpisode.schema.ts`
- **Purpose:** Validates requests to create new episodes

### Schema Definition

```typescript
export const EpisodeRequestSchema = z.object({
  script: z.string().min(1, "Script is required"),
  podcastTitle: z.string().min(1, "Podcast title is required"),
  labels: z
    .array(z.string())
    .default([])
    .describe("Optional labels for the episode"),
  sounds: z.object({
    intro: z.string().min(1, "Intro sound is required"),
    outro: z.string().min(1, "Outro sound is required"),
    transition: z.string().min(1, "Transition sound is required"),
  }),
  hosts: z.object({
    host1: z.string().min(1, "Host 1 is required"),
    host2: z.string().min(1, "Host 2 is required"),
  }),
});
```

## Save Episode

- **File:** `api/saveEpisode.schema.ts`
- **Purpose:** Validates requests to save episode data

### Schema Definition

```typescript
export const SaveEpisodeRequestSchema = z.object({
  podcastId: z.string().describe("Unique identifier of the podcast"),
  sections: z.array(sectionSchema).describe("List of chapters in the episode"),
  files: z.array(z.string()).describe("Array of file paths for the podcast"),
});
```

## Delete Episode

- **File:** `api/deleteEpisode.shema.ts`
- **Purpose:** Validates requests to delete episodes

### Schema Definition

```typescript
export const DeleteEpisodeRequestSchema = z.object({
  episodeId: z.string().min(1, "Episode ID is required"),
});
```

## Projects API

- **File:** `api/project.api.schema.ts`
- **Purpose:** Consolidates all project-related API schemas

### Schema Definitions

#### Create Project

```typescript
export const CreateProjectRequestSchema = projectRequestSchema;
export const CreateProjectResponseSchema = projectSchema;
```

#### Get Projects List

```typescript
export const GetProjectsResponseSchema = projectsListSchema;
```

#### Get Project By ID

```typescript
export const GetProjectParamsSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
});
export const GetProjectResponseSchema = projectSchema;
```

#### Update Project

```typescript
export const UpdateProjectParamsSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
});
export const UpdateProjectRequestSchema = projectRequestSchema;
export const UpdateProjectResponseSchema = projectSchema;
```

#### Delete Project

```typescript
export const DeleteProjectParamsSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
});

export const DeleteProjectResponseSchema = z.object({
  id: z.string().describe("ID of the deleted project"),
  deleted: z
    .literal(true)
    .describe("Confirmation that the project was deleted"),
});
```
