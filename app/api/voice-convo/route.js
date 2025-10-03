import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const POST = async (request) => {
  try {
    const { transcript, duration, patientInfo } = await request.json();
    const conversationText = Array.isArray(transcript)
      ? transcript.map((entry) => entry.text).join("\n")
      : transcript;

    if (!transcript || transcript.length === 0) {
      return NextResponse.json(
        { message: "Please provide a conversation transcript" },
        { status: 400 }
      );
    }

    // Format conversation for AI analysis - MOVED BEFORE PROMPT
    // const conversationText = transcript
    //   .map((entry) => `${entry.speaker}: ${entry.text}`)
    //   .join("\n");

    const prompt = `Analyze this medical consultation transcript and extract key information.

Return ONLY a JSON object with the following structure:

{
  "symptoms": ["list all mentioned symptoms"],
  "possibleConditions": ["potential diagnoses based on symptoms"],
  "recommendedActions": ["suggested treatments or next steps"],
  "urgency": "low/medium/high",
  "keyFindings": ["important observations from conversation"],
  "followUpNeeded": "yes/no",
"summary": "Concise summary of the entire conversation."
}

RULES:
1. Extract information ONLY from the transcript below
2. Don't identify speakers (doctor/patient)
3. List all symptoms mentioned, even minor ones
4. For possible conditions, include both likely and potential alternatives
5. Recommended actions should be practical and specific
6. Assess urgency based on symptom severity
7. Keep findings concise and clinically relevant
8. Return ONLY valid JSON (no explanations or notes)

TRANSCRIPT:
${conversationText}

OUTPUT ONLY THE JSON OBJECT:`;

    // Get the model and generate content - FIXED API USAGE
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const diagnosisText = result.response.text();

    // Clean up the response
    let cleanDiagnosisText = diagnosisText
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();

    try {
      const diagnosis = JSON.parse(cleanDiagnosisText);

      const finalDiagnosis = {
        ...diagnosis,
        metadata: {
          generatedAt: new Date().toISOString(),
          consultationDuration: duration,
          transcriptLength: transcript.length,
          aiModel: "gemini-2.5-flash",
          version: "1.0",
        },
      };

      return NextResponse.json({ success: true, diagnosis: finalDiagnosis });
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to parse AI response",
          rawResponse: cleanDiagnosisText,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("AI Diagnosis Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate diagnosis report",
        details: error.message,
      },
      { status: 500 }
    );
  }
};
