"use client";

import { useEffect, useState } from "react";
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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("vitals");
  const [user, setUser] = useState(null);
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        if (!storedUser || !token) return;

        setUser(storedUser);

        const res = await fetch(`/api/health/${storedUser.id}`);
        const json = await res.json();
        if (json.success) {
          setHealthData(json.data);
        }
      } catch (err) {
        console.error("Failed to load data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !healthData) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading dashboard...
      </div>
    );
  }

  const MetricCard = ({ title, value, unit, status }) => {
    const statusColors = {
      excellent: "bg-emerald-100 text-emerald-800",
      good: "bg-blue-100 text-blue-800",
      normal: "bg-gray-100 text-gray-800",
      warning: "bg-amber-100 text-amber-800",
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="flex items-end mt-2">
          <span className="text-2xl font-bold">{value}</span>
          {unit && <span className="text-lg text-gray-500 ml-1">{unit}</span>}
        </div>
        <div
          className={`mt-2 px-2 py-1 rounded-full text-xs w-fit ${statusColors[status]}`}
        >
          {status}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Info</h3>
                <div className="space-y-4">
                  <p><span className="font-medium">Name:</span> {user.username}</p>
                  <p><span className="font-medium">Email:</span> {user.email || "N/A"}</p>
                  <p><span className="font-medium">Status:</span> Active</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Health Stats</h3>
                <div className="space-y-4">
                  <p><span className="font-medium">ECG:</span> {healthData.ecg ?? "N/A"}</p>
                  <p><span className="font-medium">SpO₂:</span> {healthData.spo2 ?? "N/A"}%</p>
                  <p><span className="font-medium">Body Temp:</span> {healthData.bodyTemp ?? "N/A"} °C</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Health Analytics</h2>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
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
                      strokeWidth={2}
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
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h1 className="text-2xl font-bold">
                Welcome back, {user.username.split(" ")[0]}!
              </h1>
              <p className="mt-2">
                Your health metrics are looking good today.
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                title="SpO₂ Level"
                value={healthData.spo2 ?? "N/A"}
                unit="%"
                status="excellent"
              />
              <MetricCard
                title="Heart Rate"
                value={healthData.heartRate ?? "N/A"}
                unit="bpm"
                status="good"
              />
              <MetricCard
                title="Body Temp"
                value={healthData.bodyTemp ?? "N/A"}
                unit="°C"
                status="normal"
              />
              <MetricCard
                title="ECG"
                value={healthData.ecg ?? "N/A"}
                status="normal"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
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

              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
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
                        strokeWidth={2}
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

  const tabs = [
    { id: "vitals", label: "Vitals" },
    { id: "profile", label: "Profile" },
    { id: "analytics", label: "Analytics" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-8 p-2 bg-blue-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              {user.username
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-medium">{user.username}</p>
              <p className="text-sm text-gray-600">Patient ID: {user.id.slice(0, 8)}</p>
            </div>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">{renderContent()}</div>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <Chatbot />
      </div>
    </div>
  );
}
