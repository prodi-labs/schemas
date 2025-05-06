# Model Schemas

[Back to Main README](../README.md)

## Voice Schema

- **File:** `model/voice.schema.ts`
- **Purpose:** Defines the structure for voice data
- **Main Schemas:**
  - `storageVoiceSchema` - Basic voice properties like language, name, service, etc.
  - `voiceSchema` - Extends storageVoiceSchema by adding a voiceId field

### Schema Properties

```typescript
export const storageVoiceSchema = z.object({
  language: z.string(),
  name: z.string(),
  service: z.string(),
  serviceVoiceId: z.string(),
  volume: z.number(),
});

export const voiceSchema = storageVoiceSchema.extend({
  voiceId: z.string(),
});
```

## Episode Schema

- **File:** `model/episode.schema.ts`
- **Purpose:** Defines the structure for podcast episodes and their components

### Main Schemas

#### Dialogue Schema

```typescript
export const dialogueSchema = z.object({
  text: z.string().describe("The spoken text content of the dialogue"),
  delay: z.number().describe("Delay in seconds before the next dialogue"),
  voice: z.string().describe("Name of the voice used for this dialogue"),
  voiceId: z.string().describe("Unique identifier of the voice used"),
  audioUrl: z.string().describe("URL to the generated audio file"),
  color: z.string().describe("Color of the dialogue").optional(),
});
```

#### Section Schema

```typescript
export const sectionSchema = z.object({
  title: z.string().describe("Title of the section").optional(),
  order: z.number().describe("Order of the section within the episode"),
  dialogues: z
    .array(dialogueSchema)
    .describe("List of dialogues in this section"),
  backgroundSong: z
    .string()
    .nullable()
    .describe("URL to the background song for this section, if any")
    .optional(),
});
```

#### Episode Metadata Schema

```typescript
export const episodeMetadataSchema = z.object({
  title: z.string().describe("Title of the podcast episode"),
  createdAt: z
    .string()
    .describe("ISO timestamp of when the episode was created"),
  intro: z.string().describe("URL to the intro audio file"),
  outro: z.string().describe("URL to the outro audio file"),
  transition: z.string().describe("URL to the transition audio file"),
  labels: z.array(z.string()).describe("Array of labels/tags for the episode"),
});
```

## Project Schema

- **File:** `model/project.schema.ts`
- **Purpose:** Defines the structure for project data

### Main Schemas

#### Project Request Schema

```typescript
export const projectRequestSchema = z.object({
  name: z
    .string()
    .min(1, "Project name is required")
    .describe("Name of the project"),
  hostsId: z
    .array(z.string())
    .min(2, "At least 2 host voice IDs are required")
    .describe("Array of voice IDs for the project hosts"),
  agentId: z
    .string()
    .min(1, "Agent ID is required")
    .describe("ID of the associated agent"),
});
```

#### Project Schema

```typescript
export const projectSchema = projectRequestSchema.extend({
  id: z.string().describe("Unique identifier of the project"),
});
```

#### Projects List Schema

```typescript
export const projectsListSchema = z
  .array(projectSchema)
  .describe("List of projects");
```
