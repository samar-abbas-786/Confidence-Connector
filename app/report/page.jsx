"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Navbar from "@/components/Navbar/page";
import Chatbot from "@/components/Chatbot/page";
import { Menu, X, Activity } from "lucide-react";
import { exportCSV } from "@/utils/csv";

// ========= ECG: dynamic components (SSR-safe) =========
const ECGChart = dynamic(() => import("@/components/ECG/ECGRealtimeChart"), {
  ssr: false,
  loading: () => <div className="h-[420px] bg-gray-100 animate-pulse rounded-xl" />,
});
const HeartRateGauge = dynamic(() => import("@/components/ECG/HeartRateGauge"), { ssr: false });
const StatusBadge = dynamic(() => import("@/components/ECG/StatusBadge"), { ssr: false });
const Controls = dynamic(() => import("@/components/ECG/Controls"), { ssr: false });

// ========= ECG config =========
const BUFFER_SECONDS = 12;
const SAMPLE_HZ = 100;
const MAX_POINTS = BUFFER_SECONDS * SAMPLE_HZ;

export default function Report() {
  const [activeTab, setActiveTab] = useState("vitals");
  const [user, setUser] = useState(null);
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ========= ECG state (ADDED) =========
  const [wsUrl, setWsUrl] = useState("ws://192.168.250.121:81");
  const [ecgStatus, setEcgStatus] = useState("disconnected");
  const [realTimeBpm, setRealTimeBpm] = useState(null);
  const [realtimeMV, setRealtimeMV] = useState(null);
  const [latencyMs, setLatencyMs] = useState(null);
  const [dropped, setDropped] = useState(0);
  const [ecgPoints, setEcgPoints] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // refs for ECG
  const wsRef = useRef(null);
  const timerRef = useRef(null);
  const backoffRef = useRef(500);
  const lastMsgTsRef = useRef(0);

  const weeklyTrends = [
    { day: "Mon", heartRate: 82, spo2: 97 },
    { day: "Tue", heartRate: 78, spo2: 96 },
    { day: "Wed", heartRate: 85, spo2: 95 },
    { day: "Thu", heartRate: 80, spo2: 98 },
    { day: "Fri", heartRate: 83, spo2: 96 },
    { day: "Sat", heartRate: 79, spo2: 97 },
    { day: "Sun", heartRate: 85, spo2: 96 },
  ];

  const healthStatusData = [
    { name: "Excellent", value: 2, color: "#10B981" },
    { name: "Good", value: 1, color: "#3B82F6" },
  ];

  // ========= ECG derived status (ADDED) =========
  const hrStatus = useMemo(() => {
    if (realTimeBpm == null) return "unknown";
    if (realTimeBpm < 40 || realTimeBpm > 160) return "alert";
    if (realTimeBpm < 50 || realTimeBpm > 120) return "warning";
    return "ok";
  }, [realTimeBpm]);

  // ========= keep your original health fetch =========
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        if (!storedUser || !token) return;

        setUser(storedUser);

        const res = await fetch(`/api/health/${storedUser.id}`);
        const json = await res.json();

        if (json.success && json.data) {
          setHealthData(json.data);
        } else {
          setHealthData(null);
        }
      } catch (err) {
        console.error("Failed to load health data:", err);
        setHealthData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ========= ECG init (client only) =========
  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem("ecgWsUrl");
      if (saved) setWsUrl(saved);
    } catch {}
  }, []);

  // ========= ECG WebSocket connect (ADDED) =========
  const connectECG = () => {
    if (!isClient) return;

    try {
      if (wsRef.current) {
        wsRef.current.onopen = null;
        wsRef.current.onclose = null;
        wsRef.current.onerror = null;
        wsRef.current.onmessage = null;
        wsRef.current.close();
      }

      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setEcgStatus("connected");
        backoffRef.current = 500;
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          if (ws.readyState === 1) {
            ws.send(JSON.stringify({ type: "ping", t: Date.now() }));
          }
        }, 10000);
      };

      ws.onmessage = (event) => {
        const recvTs = performance.now();
        try {
          const msg = JSON.parse(event.data);
          // Expecting: { ecg, mV, timestamp, heartRate, rawADC }
          if (typeof msg.mV === "number") setRealtimeMV(msg.mV);
          if (typeof msg.heartRate === "number") setRealTimeBpm(Math.round(msg.heartRate));

          const t = Date.now();
          setEcgPoints((prev) => {
            const next = [...prev, { t, mV: msg.mV, ecg: msg.ecg, ts: msg.timestamp }];
            if (next.length > MAX_POINTS) next.splice(0, next.length - MAX_POINTS);
            return next;
          });

          if (lastMsgTsRef.current) {
            setLatencyMs(Math.round(recvTs - lastMsgTsRef.current));
          }
          lastMsgTsRef.current = recvTs;
          setEcgStatus("streaming");
        } catch {
          // ignore malformed
        }
      };

      ws.onerror = () => {
        setEcgStatus("error");
      };

      ws.onclose = () => {
        setEcgStatus("disconnected");
        clearInterval(timerRef.current);
        const delay = Math.min(backoffRef.current, 8000);
        setTimeout(connectECG, delay);
        backoffRef.current *= 2;
      };
    } catch {
      setEcgStatus("error");
    }
  };

  // start/cleanup ECG
  useEffect(() => {
    if (!isClient) return;
    connectECG();
    return () => {
      clearInterval(timerRef.current);
      if (wsRef.current) wsRef.current.close();
    };
  }, [wsUrl, isClient]);

  // drop detection
  useEffect(() => {
    if (!isClient) return;
    const id = setInterval(() => {
      if (!lastMsgTsRef.current) return;
      const since = performance.now() - lastMsgTsRef.current;
      if (since > 500 && ecgStatus === "streaming") {
        setDropped((n) => n + 1);
        setEcgStatus("connected");
      }
    }, 500);
    return () => clearInterval(id);
  }, [ecgStatus, isClient]);

  // ECG helpers
  const downloadECGCSV = () => exportCSV(ecgPoints, "ecg_stream.csv");
  const handleSaveWs = (url) => {
    setWsUrl(url);
    try { localStorage.setItem("ecgWsUrl", url); } catch {}
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading report...
      </div>
    );
  }

  const MetricCard = ({ title, value, unit, status }) => {
    const statusColors = {
      excellent: "bg-emerald-100 text-emerald-800",
      good: "bg-blue-100 text-blue-800",
      normal: "bg-gray-100 text-gray-800",
      warning: "bg-amber-100 text-amber-800",
      unknown: "bg-gray-200 text-gray-500",
    };

    return (
      <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
        <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
        <div className="flex items-end mt-3">
          <span className="text-3xl font-bold">
            {value !== undefined && value !== null ? value : "N/A"}
          </span>
          {unit && value !== undefined && value !== null && (
            <span className="text-lg text-gray-500 ml-1">{unit}</span>
          )}
        </div>
        <div
          className={`mt-3 px-3 py-1 rounded-full text-xs font-medium w-fit ${statusColors[status || "unknown"]}`}
        >
          {status || "unknown"}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      // ======== NEW: Live ECG tab ========
      case "ecg":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Activity className="w-8 h-8 text-red-500" />
                <div>
                  <h2 className="text-2xl font-bold">Real-time ECG Monitor</h2>
                  <p className="text-gray-600">Live cardiac monitoring from ESP32</p>
                </div>
              </div>
              <StatusBadge mode={ecgStatus} latencyMs={latencyMs} />
            </div>

            <Controls
              wsUrl={wsUrl}
              onSave={handleSaveWs}
              onReconnect={connectECG}
              onExport={downloadECGCSV}
              sampleRate={SAMPLE_HZ}
            />

            {/* Main */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 bg-[#0f1720] border border-white/10 rounded-2xl p-4 md:p-5 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">ECG Waveform</h3>
                  <div className="text-sm text-gray-400">
                    Window: {BUFFER_SECONDS}s • {SAMPLE_HZ} Hz
                  </div>
                </div>
                <ECGChart data={ecgPoints} domainMV={[0, 3300]} showMVAxis />
              </div>

              {/* Side panel */}
              <div className="space-y-4">
                <div className="bg-[#0f1720] border border-white/10 rounded-2xl p-5 shadow-xl">
                  <h4 className="font-semibold text-white mb-2">Live Vitals</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/30 rounded-xl p-4">
                      <div className="text-xs text-gray-400">Heart Rate</div>
                      <div className="text-2xl font-bold text-white mt-1">
                        {realTimeBpm != null ? `${realTimeBpm} BPM` : "--"}
                      </div>
                    </div>
                    <div className="bg-black/30 rounded-xl p-4">
                      <div className="text-xs text-gray-400">ECG (mV)</div>
                      <div className="text-2xl font-bold text-white mt-1">
                        {realtimeMV != null ? realtimeMV.toFixed(1) : "--"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <HeartRateGauge bpm={realTimeBpm} status={hrStatus} />
                  </div>
                </div>

                <div className="bg-[#0f1720] border border-white/10 rounded-2xl p-5 shadow-xl">
                  <h4 className="font-semibold text-white mb-2">Connection Info</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>State: <span className="text-gray-100">{ecgStatus}</span></li>
                    <li>Latency: <span className="text-gray-100">{latencyMs ?? "--"} ms</span></li>
                    <li>Dropped bursts: <span className="text-gray-100">{dropped}</span></li>
                    <li>Points buffered: <span className="text-gray-100">{ecgPoints.length}</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 px-1">
              Expected payload: {"{ ecg:Number, mV:Number, timestamp:Number, heartRate:Number, rawADC:Number }"}
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">User Profile</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Info</h3>
                <div className="space-y-4">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {user?.username ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {user?.email ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span> Active
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Health Stats</h3>
                <div className="space-y-4">
                  <p>
                    <span className="font-medium">ECG:</span>{" "}
                    {healthData?.ecg ?? "N/A"}
                  </p>
                  <p>
                    <span className="font-medium">SpO₂:</span>{" "}
                    {healthData?.spo2 ?? "N/A"}%
                  </p>
                  <p>
                    <span className="font-medium">Body Temp:</span>{" "}
                    {healthData?.bodyTemp ?? "N/A"} °C
                  </p>
                  <p>
                    <span className="font-medium">GSR:</span>{" "}
                    {healthData?.gsr ?? "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Health Analytics</h2>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Weekly Heart Rate</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyTrends}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="heartRate"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-md">
              <h1 className="text-2xl font-bold">
                Welcome back, {user?.username?.split(" ")[0] ?? "User"}!
              </h1>
              {/* <p className="mt-2 text-white/80">
                Your health metrics are looking good today.
              </p> */}
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <MetricCard
                title="SpO₂ Level"
                value={healthData?.spo2}
                unit="%"
                status="excellent"
              />
              <MetricCard
                title="Heart Rate"
                value={healthData?.heartRate}
                unit="bpm"
                status="good"
              />
              <MetricCard
                title="Body Temp"
                value={healthData?.bodyTemp}
                unit="°C"
                status="normal"
              />
              <MetricCard title="ECG" value={healthData?.ecg} status="normal" />
              <MetricCard title="GSR" value={healthData?.gsr} status="normal" />
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Health Status</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={healthStatusData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {healthStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Weekly Trends</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyTrends}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Line
                        type="monotone"
                        dataKey="spo2"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  // ======== Tabs: added "Live ECG" only ========
  const tabs = [
    { id: "vitals", label: "Vitals" },
    { id: "ecg", label: "Live ECG" }, // NEW
    { id: "profile", label: "Profile" },
    { id: "analytics", label: "Analytics" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed md:static z-40 top-0 left-0 h-full bg-white shadow-md border-r border-gray-200 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 w-64`}
        >
          <div className="p-4 relative">
            {/* Close button for mobile */}
            <button
              className="absolute top-4 right-4 md:hidden text-gray-600 hover:text-red-500"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3 mb-8 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                {user?.username
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold">{user?.username ?? "User"}</p>
                <p className="text-xs text-gray-600">
                  ID: {user?.id?.slice(0, 8) ?? "N/A"}
                </p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="absolute md:hidden top-24 left-4 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="flex-1 p-6 md:ml-0 ml-0">{renderContent()}</div>
      </div>

      <Chatbot />
    </div>
  );
}
