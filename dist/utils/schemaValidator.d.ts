import { z } from 'zod';
export declare class ResponseParser {
    private static validateSchema;
    static parseStringResponse<T>(outputText: string, schema: z.ZodSchema<T>): T;
    static parseObjectResponse<T>(data: unknown, schema: z.ZodSchema<T>): T;
}
