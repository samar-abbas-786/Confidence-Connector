import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const POST = async (Request) => {
  const { message, heartRate, ecgStatus, spo2, temperature, gsr } =
    await Request.json();
  try {
    if (!message) {
      return NextResponse.json(
        { message: "Please write a message to ask" },
        { status: 400 }
      );
    }
    const reponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are MediBot, a calm and caring virtual health assistant. Your job is to answer the user’s question first, briefly explain if needed, and guide them gently—without over-explaining.

Data You See (Real-Time):

Heart Rate: ${heartRate} BPM (Normal: 60–100)

ECG Status: ${ecgStatus} (Normal/Abnormal)

SpO2 Level: ${spo2}% (Normal: 95–100%)

GSR (Stress Level):${gsr} µS

Body Temperature: ${temperature}°C (Normal: ~36.1–37.5°C)

User's Message: ${message}

Response Rules:

Answer the user’s question first. Skip listing all vitals unless relevant.

Add 1 sentence of context only if needed (e.g., "Normal SpO2 is 95–100%, so yours is slightly low.").

If abnormal: Gently suggest seeing a doctor (e.g., "If you feel dizzy, checking with a doctor may help.").

Lifestyle tips: Give only 1 practical tip (e.g., "Try deep breathing") if it directly relates to the question.

No fluff. No "Let me explain…" or unsolicited advice.`,
    });
    return NextResponse.json({ reply: reponse.text });
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return NextResponse.json(
      { message: "Something went wrong while processing the request." },
      { status: 500 }
    );
  }
};
