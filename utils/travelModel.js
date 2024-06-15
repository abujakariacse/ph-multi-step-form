// models/TravelRegistration.js
import mongoose from "mongoose";

const TravelRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    birthdate: {
      type: Date,
      required: [true, "Birthdate is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    departureDate: {
      type: Date,
      required: [true, "Departure date is required"],
    },
    returnDate: {
      type: Date,
      required: [true, "Return date is required"],
    },
    accommodation: {
      type: String,
      required: [true, "Accommodation is required"],
    },
    specialRequest: {
      type: String,
    },
    healthDeclaration: {
      type: String,
      required: [true, "Health declaration is required"],
    },
    emergencyContact: {
      type: String,
      required: [true, "Emergency contact is required"],
    },
    healthCondition: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const TravelRegistration =
  mongoose.models.travelRegistration ||
  mongoose.model("travelRegistration", TravelRegistrationSchema);
