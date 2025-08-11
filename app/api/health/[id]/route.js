import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { HealthParameters } from "@/models/HealthParameters";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  await connectDB();

  const userId = params.id;
  console.log("Received ID:", userId);

  try {
    const healthData = await HealthParameters.findOne({
      user: new mongoose.Types.ObjectId(userId),
    }).sort({ timestamp: -1 });

    return NextResponse.json({ success: true, data: healthData });
  } catch (error) {
    console.error("GET /api/health/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
