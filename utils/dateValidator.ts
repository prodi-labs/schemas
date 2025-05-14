import { z } from "zod";
import { DateTime } from "luxon";

/**
 * Creates a Zod string schema that validates ISO date strings
 * Requires full ISO 8601 format with time component (e.g. 2023-12-15T00:00:00Z)
 * Basic date formats like "2023-12-15" will fail validation
 * Requires explicit timezone information (either 'Z' for UTC or an offset like '+00:00')
 * @param message Optional custom error message
 * @returns Zod string schema with ISO date validation
 */
export const isoDateString = (message = "Invalid ISO 8601 date") =>
  z.string().refine(
    (value) => {
      // Ensure string contains required ISO components (T for time separator)
      if (!value.includes("T")) {
        return false;
      }

      // Check for explicit timezone (either Z or +/-HH:MM format)
      const hasTimezone = value.endsWith("Z") || /[+-]\d\d:\d\d$/.test(value);
      if (!hasTimezone) {
        return false;
      }

      const dt = DateTime.fromISO(value, { zone: "utc" });
      return dt.isValid;
    },
    {
      message,
    }
  );
