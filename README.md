# Prodi Schemas

A collection of Zod schemas for validating data structures used in the Prodi application.

## Schema Categories

- [Model Schemas](docs/model-schemas.md) - Core data models for voices and episodes
- [API Schemas](docs/api-schemas.md) - Request/response schemas for API endpoints
- [Service Schemas](docs/service-schemas.md) - Schemas for internal services

## Quick Reference

### Model Schemas
- **Voice Schema** - Validates voice properties like language, name, service, etc.
- **Episode Schema** - Defines podcast episodes with dialogues, sections, and metadata
  - `dialogueSchema` - Validates dialogue properties (text, delay, voice, etc.)
  - `sectionSchema` - Validates episode sections containing dialogues
  - `episodeMetadataSchema` - Validates episode metadata (title, timestamps, audio files)
  - `episodeSchema` - Complete episode structure with metadata and sections

### API Schemas
- **Create Episode** - Validates requests to create new episodes
- **Save Episode** - Validates requests to save episode data
- **Delete Episode** - Validates requests to delete episodes

### Service Schemas
- **Episode LLM** - Defines structures for LLM-generated episode content

See the dedicated documentation pages for detailed schema information.

## Usage

### Installation

To use these schemas in your project, install the package directly from GitHub:

```bash
npm install git+https://github.com/prodi-labs/schemas.git
```

### Validation

All schemas are built with [Zod](https://github.com/colinhacks/zod) for runtime type validation.

To use these schemas in your code:

```typescript
import { EpisodeRequestSchema } from 'schemas/api/createEpisode.schema';

// Validate data
const result = EpisodeRequestSchema.safeParse(data);
if (result.success) {
  // Data is valid
  const validData = result.data;
} else {
  // Handle validation errors
  console.error(result.error);
}
```

### Example: Working with Episode Schema

```typescript
import { episodeSchema, type EpisodeSchema } from 'schemas/model/episode.schema';

// Validate a complete episode
const episodeData = {
  metadata: {
    title: "My Podcast Episode",
    createdAt: "2023-04-15T12:00:00Z",
    intro: "https://example.com/audio/intro.mp3",
    outro: "https://example.com/audio/outro.mp3",
    transition: "https://example.com/audio/transition.mp3",
    labels: ["tech", "AI"]
  },
  sections: [
    {
      order: 1,
      title: "Introduction",
      dialogues: [
        {
          text: "Welcome to our podcast!",
          delay: 0.5,
          voice: "Liam",
          voiceId: "voice-123",
          audioUrl: "https://example.com/audio/dialogue1.mp3"
        }
      ]
    }
  ]
};

// Validate episode data
const result = episodeSchema.safeParse(episodeData);
if (result.success) {
  const validEpisode: EpisodeSchema = result.data;
  // Process the valid episode
}
``` 