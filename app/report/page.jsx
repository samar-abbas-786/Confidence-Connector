"use client";

import { useState } from "react";
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

const dummyHealthData = {
  spo2: 96,
  heartRate: 85,
  bodyTemp: 36.7,
  bloodPressure: "120/80",
  ecg: "Normal",
  lastUpdated: "Just now",
};

const dummyUserDetails = {
  name: "Samar Abbas",
  patientId: "HC-2024-001",
  status: "Healthy",
};

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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

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
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {dummyUserDetails.name}
                  </p>
                  <p>
                    <span className="font-medium">Patient ID:</span>{" "}
                    {dummyUserDetails.patientId}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    {dummyUserDetails.status}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Health Stats</h3>
                <div className="space-y-4">
                  <p>
                    <span className="font-medium">Last Update:</span>{" "}
                    {dummyHealthData.lastUpdated}
                  </p>
                  <p>
                    <span className="font-medium">ECG:</span>{" "}
                    {dummyHealthData.ecg}
                  </p>
                  <p>
                    <span className="font-medium">Blood Pressure:</span>{" "}
                    {dummyHealthData.bloodPressure}
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
                Welcome back, {dummyUserDetails.name.split(" ")[0]}!
              </h1>
              <p className="mt-2">
                Your health metrics are looking good today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                title="SpO₂ Level"
                value={dummyHealthData.spo2}
                unit="%"
                status="excellent"
              />
              <MetricCard
                title="Heart Rate"
                value={dummyHealthData.heartRate}
                unit="bpm"
                status="good"
              />
              <MetricCard
                title="Body Temp"
                value={dummyHealthData.bodyTemp}
                unit="°C"
                status="normal"
              />
              <MetricCard
                title="Blood Pressure"
                value={dummyHealthData.bloodPressure}
                status="good"
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
              {dummyUserDetails.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-medium">{dummyUserDetails.name}</p>
              <p className="text-sm text-gray-600">
                {dummyUserDetails.patientId}
              </p>
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
    </div>
  );
}
