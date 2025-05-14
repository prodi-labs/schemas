import { z } from "zod";

export class ResponseParser {
  private static validateSchema<T>(data: unknown, schema: z.ZodSchema<T>): T {
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const formattedError = parsed.error.format();
      throw new Error(
        `Response validation failed: ${JSON.stringify(formattedError)}`
      );
    }

    return parsed.data;
  }

  static parseStringResponse<T>(outputText: string, schema: z.ZodSchema<T>): T {
    try {
      const raw = JSON.parse(outputText);
      return this.validateSchema(raw, schema);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error(`Invalid JSON response from input: ${error.message}`);
      }
      throw error;
    }
  }

  static parseObjectResponse<T>(data: unknown, schema: z.ZodSchema<T>): T {
    try {
      return this.validateSchema(data, schema);
    } catch (error) {
      throw error;
    }
  }
}
