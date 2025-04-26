export class ResponseParser {
    static validateSchema(data, schema) {
        const parsed = schema.safeParse(data);
        if (!parsed.success) {
            const formattedError = parsed.error.format();
            throw new Error(`Response validation failed: ${JSON.stringify(formattedError)}`);
        }
        return parsed.data;
    }
    static parseStringResponse(outputText, schema) {
        try {
            const raw = JSON.parse(outputText);
            return this.validateSchema(raw, schema);
        }
        catch (error) {
            if (error instanceof SyntaxError) {
                throw new Error(`Invalid JSON response from input: ${error.message}`);
            }
            throw error;
        }
    }
    static parseObjectResponse(data, schema) {
        try {
            return this.validateSchema(data, schema);
        }
        catch (error) {
            throw error;
        }
    }
}
