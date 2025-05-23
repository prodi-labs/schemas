import { z } from "zod";

export const fewShotExamplesSchema = z.object({
  inputArticle: z.string().describe("Input article for the example"),
  outputScript: z.string().describe("Output script for the example"),
});

export const fewShotExamplesContainerSchema = z.object({
  instruction: z.string().describe("Instruction for the few shot examples"),
  examples: z
    .array(fewShotExamplesSchema)
    .describe("Array of few shot examples"),
});

export const agentContextSchema = z.object({
  fewShotExamples: fewShotExamplesContainerSchema.describe(
    "Few shot examples for the agent context"
  ),
});

export const agentRecordSchema = z.object({
  name: z
    .string()
    .min(1, "Agent name is required")
    .describe("Name of the agent"),
  systemInstructions: z
    .string()
    .min(1, "System instructions are required")
    .describe("System instructions for the agent"),
  context: agentContextSchema.optional().describe("Optional agent context"),
});

export const agentSchema = agentRecordSchema.extend({
  id: z.string().describe("Unique identifier of the agent"),
});

export const agentsListSchema = z.array(agentSchema).describe("List of agents");

// Type exports
export type FewShotExamples = z.infer<typeof fewShotExamplesSchema>;
export type FewShotExamplesContainer = z.infer<
  typeof fewShotExamplesContainerSchema
>;
export type AgentContext = z.infer<typeof agentContextSchema>;
export type AgentRecord = z.infer<typeof agentRecordSchema>;
export type Agent = z.infer<typeof agentSchema>;
export type AgentsList = z.infer<typeof agentsListSchema>;
