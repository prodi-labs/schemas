import { z } from "zod";

export const agentRequestSchema = z.object({
  name: z
    .string()
    .min(1, "Agent name is required")
    .describe("Name of the agent"),
  systemInstructions: z
    .string()
    .min(1, "System instructions are required")
    .describe("System instructions for the agent"),
});

export const agentSchema = agentRequestSchema.extend({
  id: z.string().describe("Unique identifier of the agent"),
});

export const agentsListSchema = z.array(agentSchema).describe("List of agents");

export type AgentRequest = z.infer<typeof agentRequestSchema>;
export type Agent = z.infer<typeof agentSchema>;
export type AgentsList = z.infer<typeof agentsListSchema>;
