"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  FileText,
  Download,
  Clock,
  User,
  Stethoscope,
  Activity,
  Volume2,
  User2Icon,
  VolumeX,
} from "lucide-react";
import Navbar from "@/components/Navbar/page";

export default function VoiceConsultationSystem() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isDoctorMuted, setIsDoctorMuted] = useState(false);
  const [isPatientMuted, setIsPatientMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [transcript, setTranscript] = useState([]);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [showReport, setShowReport] = useState(false);
  const [summary, setSummary] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const intervalRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        let finalTranscript = "";
        let interim = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          const text = result[0].transcript;
          if (result.isFinal) {
            finalTranscript += text;
          } else {
            interim += text;
          }
        }

        if (finalTranscript) {
          const timestamp = new Date().toLocaleTimeString();
          setTranscript((prev) => [
            ...prev,
            {
              id: Date.now() + Math.random(),
              // speaker: "Doctor",
              text: finalTranscript.trim(),
              timestamp,
            },
          ]);
          setInterimTranscript("");
        } else {
          setInterimTranscript(interim.trim());
        }
      };

      recognition.onerror = (e) => {
        console.warn("Speech recognition error:", e);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      setIsCallActive(true);
      setIsRecording(true);
      setAiAnalysis(null);
      setShowReport(false);

      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch (e) {}
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start();

      intervalRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      const audioInterval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      mediaRecorder.audioInterval = audioInterval;
    } catch (error) {
      console.error("Error starting call:", error);
      alert("Error accessing microphone. Please check permissions.");
    }
  };

  const endCall = async () => {
    setIsCallActive(false);
    setIsRecording(false);

    if (mediaRecorderRef.current?.state !== "inactive") {
      mediaRecorderRef.current.stop();
      clearInterval(mediaRecorderRef.current.audioInterval);
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setAudioLevel(0);

    if (interimTranscript) {
      const timestamp = new Date().toLocaleTimeString();
      setTranscript((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          // speaker: "Doctor",
          text: interimTranscript,
          timestamp,
        },
      ]);
      setInterimTranscript("");
    }

    if (transcript.length > 0 || interimTranscript) {
      await generateAIAnalysis();
    }
  };

  const generateAIAnalysis = async () => {
    setIsAnalyzing(true);
    setAiAnalysis(null);
    setShowReport(false);

    try {
      const payload = {
        transcript: transcript,
        duration: formatTime(callDuration),
      };
      console.log("Transcript", transcript);

      const res = await fetch("/api/voice-convo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Data", data);

      if (!res.ok) {
        console.error("Backend returned error:", data);
        alert(data?.error || "Failed to generate AI analysis");
        return;
      }

      if (data.success && data.diagnosis) {
        setAiAnalysis(data.diagnosis);
        setShowReport(true);
      } else {
        throw new Error("Unexpected API response format");
      }
    } catch (error) {
      console.error("Error calling AI backend:", error);
      alert("Error generating AI analysis. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const downloadReport = () => {
    if (!aiAnalysis) return;

    const reportContent = `
MEDICAL CONSULTATION REPORT
==========================

Date: ${aiAnalysis.metadata?.generatedAt || new Date().toLocaleString()}
Duration: ${formatTime(callDuration)}

SYMPTOMS:
${aiAnalysis.symptoms?.map((s) => `• ${s}`).join("\n") || "None reported"}

POSSIBLE CONDITIONS:
${
  aiAnalysis.possibleConditions?.map((c) => `• ${c}`).join("\n") ||
  "No conditions identified"
}

RECOMMENDED ACTIONS:
${
  aiAnalysis.recommendedActions?.map((a) => `• ${a}`).join("\n") ||
  "No specific recommendations"
}

URGENCY: ${aiAnalysis.urgency?.toUpperCase() || "NOT SPECIFIED"}

KEY FINDINGS:
${aiAnalysis.keyFindings?.map((f) => `• ${f}`).join("\n") || "None"}

FOLLOW UP NEEDED: ${aiAnalysis.followUpNeeded?.toUpperCase() || "NO"}

SUMMARY:
${aiAnalysis.summary}


FULL TRANSCRIPT:
${transcript.map((t) => `[${t.timestamp}] : ${t.text}`).join("\n")}
`;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `consultation-report-${
      new Date().toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleDoctorMute = () => setIsDoctorMuted(!isDoctorMuted);
  const togglePatientMute = () => setIsPatientMuted(!isPatientMuted);

  if (showReport && aiAnalysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText size={32} />
                  <div>
                    <h1 className="text-2xl font-bold">Consultation Report</h1>
                    <p className="text-blue-100">
                      AI-Generated Medical Summary
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={downloadReport}
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowReport(false);
                      setAiAnalysis(null);
                      setTranscript([]);
                      setCallDuration(0);
                    }}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                  >
                    New Consultation
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <Clock size={16} />
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-800">
                    {formatTime(callDuration)}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 text-green-600 mb-2">
                    <Activity size={16} />
                    <span className="font-semibold">Urgency</span>
                  </div>
                  <p className="text-sm font-bold text-green-800">
                    {aiAnalysis.urgency?.toUpperCase() || "LOW"}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 text-purple-600 mb-2">
                    <FileText size={16} />
                    <span className="font-semibold">Transcript Lines</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-800">
                    {transcript.length}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-red-800 mb-3">
                    Symptoms
                  </h3>
                  <ul className="space-y-2">
                    {aiAnalysis.symptoms?.map((symptom, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-red-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-green-800 mb-3">
                    Possible Conditions
                  </h3>
                  <ul className="space-y-2">
                    {aiAnalysis.possibleConditions?.map((condition, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-green-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Recommended Actions
                </h3>
                <ul className="space-y-2">
                  {aiAnalysis.recommendedActions?.map((action, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-blue-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="summary max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 mt-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-indigo-600 border-b pb-2 mb-4">
                  Summary
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {aiAnalysis.summary}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl max-h-96 overflow-y-auto">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Full Transcript
                </h3>
                <div className="space-y-3">
                  {transcript.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs text-gray-500">
                            {item.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-10 bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        {isAnalyzing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="font-medium">Analyzing consultation...</p>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Voice Consultation System
            </h1>
            <p className="text-gray-600">
              Real-time doctor-patient communication with AI analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div
                className={`p-6 text-white ${
                  isCallActive
                    ? "bg-gradient-to-r from-green-500 to-emerald-600"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">
                        {isCallActive ? "Call in Progress" : "Ready to Connect"}
                      </h2>
                      <p className="text-sm opacity-90">
                        {isCallActive
                          ? `Duration: ${formatTime(callDuration)}`
                          : "Click to start consultation"}
                      </p>
                    </div>
                  </div>
                  {isCallActive && (
                    <div className="flex items-center space-x-1">
                      <div
                        className={`w-2 h-8 bg-white/60 rounded-full transition-all ${
                          audioLevel > 20 ? "h-8" : "h-2"
                        }`}
                      ></div>
                      <div
                        className={`w-2 h-6 bg-white/60 rounded-full transition-all ${
                          audioLevel > 40 ? "h-10" : "h-4"
                        }`}
                      ></div>
                      <div
                        className={`w-2 h-4 bg-white/60 rounded-full transition-all ${
                          audioLevel > 60 ? "h-12" : "h-6"
                        }`}
                      ></div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center space-x-4">
                  {!isCallActive ? (
                    <button
                      onClick={startCall}
                      className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <Phone size={20} />
                      <span>Start Consultation</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={toggleDoctorMute}
                        className={`p-4 rounded-full transition-colors ${
                          isDoctorMuted
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-white/20 hover:bg-white/30"
                        }`}
                        title="Toggle Doctor Mic"
                      >
                        {isDoctorMuted ? (
                          <MicOff size={20} />
                        ) : (
                          <Mic size={20} />
                        )}
                      </button>
                      <button
                        onClick={togglePatientMute}
                        className={`p-4 rounded-full transition-colors ${
                          isPatientMuted
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-white/20 hover:bg-white/30"
                        }`}
                        title="Toggle Patient Mic"
                      >
                        {isPatientMuted ? (
                          <VolumeX size={20} />
                        ) : (
                          <Volume2 size={20} />
                        )}
                      </button>
                      <button
                        onClick={endCall}
                        className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                        title="End Call"
                      >
                        <PhoneOff size={20} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    Transcript
                  </h3>
                  <div
                    className={`flex items-center space-x-2 ${
                      isRecording ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isRecording ? "bg-red-500 animate-pulse" : "bg-gray-400"
                      }`}
                    ></div>
                    <span className="text-sm font-medium">
                      {isRecording ? "Recording" : "Not Recording"}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 h-96 overflow-y-auto space-y-3">
                  {transcript.length === 0 && !interimTranscript ? (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <div className="text-center">
                        <Mic size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Start the call to see transcription</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {transcript.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs text-gray-500">
                                {item.timestamp}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm">{item.text}</p>
                          </div>
                        </div>
                      ))}

                      {interimTranscript && (
                        <div className="flex items-start space-x-3 opacity-80">
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                            <Mic size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-gray-800">
                                Speaking…
                              </span>
                              <span className="text-xs text-gray-500">now</span>
                            </div>
                            <p className="text-gray-600 text-sm italic">
                              {interimTranscript}
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">AI Analysis</h3>
                    <p className="text-sm opacity-90">Real-time insights</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {isAnalyzing ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-600 font-medium">
                      Analyzing consultation...
                    </p>
                  </div>
                ) : !isCallActive && transcript.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity size={32} className="text-gray-400" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Waiting for consultation
                    </p>
                  </div>
                ) : isCallActive ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Call Statistics
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-600">Duration:</span>
                          <span className="text-blue-800 font-medium">
                            {formatTime(callDuration)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-600">
                            Transcript lines:
                          </span>
                          <span className="text-blue-800 font-medium">
                            {transcript.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText size={32} className="text-green-600" />
                    </div>
                    <p className="text-gray-600 font-medium">Call completed!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
