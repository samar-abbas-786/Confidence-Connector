import { connectDB } from "@/lib/mongodb";
import { HealthParameters } from "@/models/HealthParameters";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const { user, spo2, ecg, heartRate, bodyTemp, gsr } = body;

    const health = new HealthParameters({
      user,
      spo2,
      ecg,
      heartRate,
      bodyTemp,
      gsr,
    });

    await health.save();

    return NextResponse.json({ message: "Health data saved successfully", health }, { status: 201 });
  } catch (err) {
    console.error("POST /api/health error:", err);
    return NextResponse.json({ error: "Failed to save health data" }, { status: 500 });
  }
}

export async function GET(req) {
  await connectDB();
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const healthRecords = await HealthParameters.find({ user: userId }).sort({ timestamp: -1 });

    return NextResponse.json({ healthRecords }, { status: 200 });
  } catch (err) {
    console.error("GET /api/health error:", err);
    return NextResponse.json({ error: "Failed to fetch health data" }, { status: 500 });
  }
}
