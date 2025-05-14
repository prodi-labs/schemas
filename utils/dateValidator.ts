import { z } from "zod";
import { DateTime } from "luxon";

/**
 * Creates a Zod string schema that validates ISO date strings
 * @param message Optional custom error message
 * @returns Zod string schema with ISO date validation
 */
export const isoDateString = (message = "Invalid ISO 8601 date") =>
  z.string().refine(
    (value) => {
      const dt = DateTime.fromISO(value, { zone: "utc" });
      return dt.isValid;
    },
    {
      message,
    }
  );

/**
 * Creates a Zod string schema that validates ISO date strings with a minimum length requirement
 * @param minLength Minimum length requirement
 * @param minMessage Custom message for minimum length validation
 * @param isoMessage Custom message for ISO validation
 * @returns Zod string schema with both validations
 */
export const requiredIsoDateString = (
  minLength = 1,
  minMessage = "Date is required",
  isoMessage = "Invalid ISO 8601 date"
) =>
  z
    .string()
    .min(minLength, minMessage)
    .refine(
      (value) => {
        const dt = DateTime.fromISO(value, { zone: "utc" });
        return dt.isValid;
      },
      {
        message: isoMessage,
      }
    );
