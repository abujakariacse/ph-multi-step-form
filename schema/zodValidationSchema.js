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

// export const travelPreferenceSchema = z.object({
//   departureDate: z.date().refine(
//     (date) => {
//       const today = new Date();
//       today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison
//       return date.getTime() >= today.getTime(); // Allow today's date or later
//     },
//     { message: "Departure date must be today or later" }
//   ),
//   returnDate: z.date().refine(
//     (date, data) => {
//       if (!data || !data.departureDate) return true; // Allow validation to pass if departure date is not set
//       return date.getTime() > data.departureDate.getTime(); // Ensure return date is after departure date
//     },
//     { message: "Return date must be after departure date" }
//   ),
//   accommodation: z.string().nonempty("Accommodation preference is required"),
//   specialRequest: z.string().nonempty("Special request is required"),
// });
