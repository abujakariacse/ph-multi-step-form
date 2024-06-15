import { TravelRegistration } from "@/utils/travelModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  await mongoose.connect(process.env.MONGODB_URL);

  try {
    const data = await req.json();
    const travelRegistration = new TravelRegistration(data);
    await travelRegistration.save();
    return NextResponse.json({
      success: true,
      message: "Registration successful",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 400 }
    );
  }
}
