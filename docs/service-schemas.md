# Service Schemas

[Back to Main README](../README.md)

## Episode LLM
- **File:** `services/episodeLlm.schema.ts`
- **Purpose:** Defines structures for LLM-generated episode content

### Schema Definitions

#### LLM Dialogue Response Schema

```typescript
export const llmDialogueResponseSchema = z.object({
   speakerId: z.number().describe(
    `The host ID that this dialogue belongs to.
Use numeric values like 1 or 2.
If a line clearly identifies the speaker (e.g., "Host 1:", "Host 2:", "Interviewer:", "Guest:"), assign a consistent ID.
If unclear, default to 1. Maintain speaker consistency throughout the episode.`
  ),
  text: z.string()
    .describe("The exact words associated with the host part of the dialogue"),
});
```

#### LLM Section Response Schema

```typescript
export const llmSectionResponseSchema = z.object({
  title: z.string()
    .describe("A brief, descriptive title that summarizes the main topic or theme of this section"),
  dialogues: z.array(llmDialogueResponseSchema)
    .describe("An ordered sequence of speaker dialogues that form a coherent conversation"),
});
```

#### LLM Episode Response Schema

```typescript
export const llmEpisodeResponseSchema = z.object({
  title: z.string()
    .describe("The main title of the podcast episode"),
  sections: z.array(llmSectionResponseSchema)
    .describe("Logical segments of the episode, each containing related conversations around a specific topic"),
});
``` 