import { z } from "zod";

const bangladeshiPhoneRegex = /^(\+88|0088)?(01)[3456789]\d{8}$/;

export const personalInfoSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  birthdate: z
    .date()
    .nullable()
    .refine(
      (date) => {
        if (!date) return false;
        return true;
      },
      { message: "Birthdate is required" }
    ),
  country: z.string().nonempty({ message: "Select a country" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .refine(
      (value) => {
        return (
          value.trim().length === 0 || bangladeshiPhoneRegex.test(value.trim())
        );
      },
      {
        message: "Invalid phone number",
      }
    )
    .refine((value) => value.trim().length > 0, {
      message: "Phone is required",
    }),
});

export const healthSchema = z.object({
  healthDeclaration: z.enum(["Yes", "No"], {
    message: "Health Declaration is required",
  }),
  emergencyContact: z
    .string()
    .refine(
      (value) => {
        return (
          value.trim().length === 0 || bangladeshiPhoneRegex.test(value.trim())
        );
      },
      {
        message: "Invalid phone number",
      }
    )
    .refine((value) => value.trim().length > 0, {
      message: "Phone is required",
    }),
  healthCondition: z
    .string()
    .max(256, "Health Condition should not exceed 256 characters"),
});

export const travelPreferenceSchema = z
  .object({
    departureDate: z.date({
      required_error: "Departure date is required",
      invalid_type_error: "Departure date must be a valid date",
    }),
    returnDate: z.date({
      required_error: "Return date is required",
      invalid_type_error: "Return date must be a valid date",
    }),

    accommodation: z.string().nonempty({ message: "Name is required" }),
    specialRequest: z.string().nonempty({ message: "Name is required" }),
  })
  .superRefine(({ departureDate, returnDate }, ctx) => {
    if (returnDate <= departureDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Return date must be after departure date",
        path: ["returnDate"],
      });
    }
  });
