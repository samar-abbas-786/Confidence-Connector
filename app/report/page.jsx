"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { useState } from "react";
import Navbar from "@/components/Navbar/page";

const COLORS = ["#10B981", "#F59E0B", "#EF4444"];
const CHART_COLORS = ["#3B82F6", "#8B5CF6", "#06D6A0"];

const dummyHealthData = {
  spo2: 96,
  ecg: "Normal",
  heartRate: 85,
  bodyTemp: 36.7,
  gsr: 480,
  bloodPressure: { systolic: 120, diastolic: 80 },
  timestamp: new Date().toISOString(),
};

const dummyUserDetails = {
  name: "Samar Abbas",
  email: "samar.abbas@healthcorp.com",
  age: 28,
  gender: "Male",
  phone: "+91-9876543210",
  address: "Roorkee, Uttarakhand",
  patientId: "HC-2024-001",
  bloodType: "A+",
  emergencyContact: "+91-9876543211",
};

// Sample trend data for charts
const weeklyTrends = [
  { day: "Mon", heartRate: 82, spo2: 97, temp: 36.5 },
  { day: "Tue", heartRate: 78, spo2: 96, temp: 36.8 },
  { day: "Wed", heartRate: 85, spo2: 95, temp: 36.7 },
  { day: "Thu", heartRate: 80, spo2: 98, temp: 36.6 },
  { day: "Fri", heartRate: 83, spo2: 96, temp: 36.9 },
  { day: "Sat", heartRate: 79, spo2: 97, temp: 36.5 },
  { day: "Sun", heartRate: 85, spo2: 96, temp: 36.7 },
];

const getHealthStatus = () => {
  const { spo2, heartRate, bodyTemp } = dummyHealthData;
  let excellent = 0,
    good = 0,
    attention = 0;

  if (spo2 >= 98) excellent++;
  else if (spo2 >= 95) good++;
  else attention++;

  if (heartRate >= 70 && heartRate <= 85) excellent++;
  else if (heartRate >= 60 && heartRate <= 100) good++;
  else attention++;

  if (bodyTemp >= 36.1 && bodyTemp <= 37.0) excellent++;
  else if (bodyTemp >= 36 && bodyTemp <= 37.5) good++;
  else attention++;

  return [
    { name: "Excellent", value: excellent, color: "#10B981" },
    { name: "Good", value: good, color: "#3B82F6" },
    { name: "Needs Attention", value: attention, color: "#EF4444" },
  ].filter((item) => item.value > 0);
};

const MetricCard = ({
  title,
  value,
  unit = "",
  icon,
  status = "normal",
  trend,
  subtitle,
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case "excellent":
        return "bg-emerald-50 border-emerald-200 text-emerald-900";
      case "good":
        return "bg-blue-50 border-blue-200 text-blue-900";
      case "warning":
        return "bg-amber-50 border-amber-200 text-amber-900";
      case "critical":
        return "bg-red-50 border-red-200 text-red-900";
      default:
        return "bg-gray-50 border-gray-200 text-gray-900";
    }
  };

  const getTrendIcon = () => {
    if (trend === "up") return "↗️";
    if (trend === "down") return "↘️";
    return "➡️";
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${getStatusStyles()} transition-all duration-300 hover:shadow-lg group`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {title}
              </h3>
              {trend && <span className="text-sm">{getTrendIcon()}</span>}
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-bold">{value}</span>
              {unit && (
                <span className="text-lg font-medium text-gray-500">
                  {unit}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
          <div className="text-2xl opacity-70 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
              status === "excellent"
                ? "bg-emerald-100 text-emerald-800"
                : status === "good"
                ? "bg-blue-100 text-blue-800"
                : status === "warning"
                ? "bg-amber-100 text-amber-800"
                : status === "critical"
                ? "bg-red-100 text-red-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {status === "excellent"
              ? "Excellent"
              : status === "good"
              ? "Good"
              : status === "warning"
              ? "Monitor"
              : status === "critical"
              ? "Critical"
              : "Normal"}
          </span>

          {trend && (
            <span className="text-xs text-gray-500">vs. yesterday</span>
          )}
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${
          status === "excellent"
            ? "bg-emerald-400"
            : status === "good"
            ? "bg-blue-400"
            : status === "warning"
            ? "bg-amber-400"
            : status === "critical"
            ? "bg-red-400"
            : "bg-gray-400"
        }`}
      ></div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active = false, onClick, badge }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-left ${
        active
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
      }`}
    >
      <div className="flex items-center space-x-3">
        <span
          className={`text-lg transition-transform duration-200 ${
            active ? "" : "group-hover:scale-110"
          }`}
        >
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            active ? "bg-white/20 text-white" : "bg-blue-100 text-blue-600"
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const healthStatus = getHealthStatus();

  const getVitalStatus = (vital, value) => {
    switch (vital) {
      case "spo2":
        if (value >= 98) return "excellent";
        if (value >= 95) return "good";
        if (value >= 90) return "warning";
        return "critical";
      case "heartRate":
        if (value >= 70 && value <= 85) return "excellent";
        if (value >= 60 && value <= 100) return "good";
        return "warning";
      case "bodyTemp":
        if (value >= 36.1 && value <= 37.0) return "excellent";
        if (value >= 36 && value <= 37.5) return "good";
        return "warning";
      default:
        return "normal";
    }
  };

  const sidebarItems = [
    { id: "dashboard", icon: "📊", label: "Overview", badge: "" },
    { id: "profile", icon: "👤", label: "Profile" },
    { id: "health", icon: "❤️", label: "Vitals", badge: "Live" },
    { id: "analytics", icon: "📈", label: "Analytics" },
    { id: "reports", icon: "📋", label: "Reports" },
    { id: "settings", icon: "⚙️", label: "Settings" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                    {dummyUserDetails.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">
                      {dummyUserDetails.name}
                    </h2>
                    <p className="text-blue-100 text-lg mb-2">
                      {dummyUserDetails.email}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-blue-100">
                      <span>Patient ID: {dummyUserDetails.patientId}</span>
                      <span>•</span>
                      <span>Blood Type: {dummyUserDetails.bloodType}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Age
                        </label>
                        <p className="text-xl font-semibold text-gray-900">
                          {dummyUserDetails.age} years
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Gender
                        </label>
                        <p className="text-xl font-semibold text-gray-900">
                          {dummyUserDetails.gender}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Blood Type
                        </label>
                        <p className="text-xl font-semibold text-gray-900">
                          {dummyUserDetails.bloodType}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Contact Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Phone
                        </label>
                        <p className="text-xl font-semibold text-gray-900">
                          {dummyUserDetails.phone}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Emergency Contact
                        </label>
                        <p className="text-xl font-semibold text-gray-900">
                          {dummyUserDetails.emergencyContact}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Address
                        </label>
                        <p className="text-xl font-semibold text-gray-900">
                          {dummyUserDetails.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Medical Summary
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-sm font-medium text-green-800">
                            Current Status
                          </span>
                        </div>
                        <p className="text-green-700">All vitals normal</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-sm font-medium text-blue-800">
                            Last Check-up
                          </span>
                        </div>
                        <p className="text-blue-700">Today, 2:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "health":
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Vital Signs
                </h2>
                <p className="text-gray-600">
                  Real-time monitoring of health parameters
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live monitoring active</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MetricCard
                title="Blood Oxygen"
                value={dummyHealthData.spo2}
                unit="%"
                icon="🫁"
                status={getVitalStatus("spo2", dummyHealthData.spo2)}
                trend="up"
                subtitle="SpO₂ Saturation"
              />
              <MetricCard
                title="Heart Rate"
                value={dummyHealthData.heartRate}
                unit="bpm"
                icon="❤️"
                status={getVitalStatus("heartRate", dummyHealthData.heartRate)}
                trend="stable"
                subtitle="Resting HR"
              />
              <MetricCard
                title="Body Temperature"
                value={dummyHealthData.bodyTemp}
                unit="°C"
                icon="🌡️"
                status={getVitalStatus("bodyTemp", dummyHealthData.bodyTemp)}
                trend="stable"
                subtitle="Core temp"
              />
              <MetricCard
                title="Blood Pressure"
                value={`${dummyHealthData.bloodPressure.systolic}/${dummyHealthData.bloodPressure.diastolic}`}
                unit="mmHg"
                icon="🫀"
                status="good"
                trend="stable"
                subtitle="Systolic/Diastolic"
              />
              <MetricCard
                title="ECG Status"
                value={dummyHealthData.ecg}
                icon="📈"
                status="excellent"
                subtitle="Rhythm analysis"
              />
              <MetricCard
                title="GSR Reading"
                value={dummyHealthData.gsr}
                unit="kΩ"
                icon="⚡"
                status="normal"
                subtitle="Skin conductance"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Health Status Distribution
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Current parameter status breakdown
                  </p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={healthStatus}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        innerRadius={45}
                        paddingAngle={3}
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {healthStatus.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            stroke="#fff"
                            strokeWidth={2}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Weekly Trends
                  </h3>
                  <p className="text-gray-600 text-sm">
                    7-day vital signs progression
                  </p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="heartRate"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="spo2"
                        stroke="#10B981"
                        strokeWidth={2}
                        dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Health Analytics
              </h2>
              <p className="text-gray-600">
                Detailed insights and trends analysis
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Heart Rate Variability
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Bar
                        dataKey="heartRate"
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Temperature Patterns
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis
                        domain={[36, 37.5]}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#F59E0B"
                        strokeWidth={3}
                        dot={{ fill: "#F59E0B", r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-900">
                    Average Heart Rate
                  </h3>
                  <span className="text-2xl">📈</span>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-2">82 bpm</p>
                <p className="text-sm text-blue-700">7-day average</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-emerald-900">
                    SpO₂ Average
                  </h3>
                  <span className="text-2xl">🫁</span>
                </div>
                <p className="text-3xl font-bold text-emerald-600 mb-2">
                  96.4%
                </p>
                <p className="text-sm text-emerald-700">Excellent range</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-amber-900">
                    Temp Stability
                  </h3>
                  <span className="text-2xl">🌡️</span>
                </div>
                <p className="text-3xl font-bold text-amber-600 mb-2">±0.2°C</p>
                <p className="text-sm text-amber-700">Very stable</p>
              </div>
            </div>
          </div>
        );

      case "reports":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Medical Reports
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Comprehensive health reports and detailed analysis will be
                available here soon.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Generate Report
              </button>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Settings
              </h2>
              <p className="text-gray-600">
                Customize your dashboard experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-900">
                        Critical Alerts
                      </p>
                      <p className="text-sm text-gray-600">
                        Get notified of critical health changes
                      </p>
                    </div>
                    <button className="w-12 h-6 bg-blue-600 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-900">Daily Reports</p>
                      <p className="text-sm text-gray-600">
                        Receive daily health summaries
                      </p>
                    </div>
                    <button className="w-12 h-6 bg-gray-200 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Data Sync
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-green-900">
                          Device Connected
                        </p>
                        <p className="text-sm text-green-700">
                          Last sync: 2 minutes ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors">
                    + Add New Device
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    Good afternoon, {dummyUserDetails.name.split(" ")[1]}
                  </h1>
                  <p className="text-blue-100 text-lg mb-4">
                    Your health metrics are looking great today
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-blue-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>All systems normal</span>
                    </div>
                    <span>•</span>
                    <span>
                      Last updated:{" "}
                      {new Date(dummyHealthData.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">🏥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="SpO₂ Level"
                value={dummyHealthData.spo2}
                unit="%"
                icon="🫁"
                status={getVitalStatus("spo2", dummyHealthData.spo2)}
                trend="up"
                subtitle="Blood oxygen"
              />
              <MetricCard
                title="Heart Rate"
                value={dummyHealthData.heartRate}
                unit="bpm"
                icon="❤️"
                status={getVitalStatus("heartRate", dummyHealthData.heartRate)}
                trend="stable"
                subtitle="Resting rate"
              />
              <MetricCard
                title="Temperature"
                value={dummyHealthData.bodyTemp}
                unit="°C"
                icon="🌡️"
                status={getVitalStatus("bodyTemp", dummyHealthData.bodyTemp)}
                trend="stable"
                subtitle="Core temp"
              />
              <MetricCard
                title="Blood Pressure"
                value={`${dummyHealthData.bloodPressure.systolic}/${dummyHealthData.bloodPressure.diastolic}`}
                unit="mmHg"
                icon="🫀"
                status="good"
                trend="down"
                subtitle="Systolic/Diastolic"
              />
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Weekly Heart Rate Trend
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your heart rate pattern over the last 7 days
                  </p>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis
                        domain={[70, 90]}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="heartRate"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        dot={{ fill: "#3B82F6", strokeWidth: 2, r: 5 }}
                        activeDot={{
                          r: 7,
                          stroke: "#3B82F6",
                          strokeWidth: 2,
                          fill: "#3B82F6",
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Health Status Overview
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Distribution of your current vital signs status
                  </p>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={healthStatus}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        innerRadius={40}
                        paddingAngle={5}
                        label={({ name, value, percent }) =>
                          `${name}: ${value}`
                        }
                      >
                        {healthStatus.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            stroke="#fff"
                            strokeWidth={2}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Recent Activity
                </h3>
                <p className="text-gray-600 text-sm">
                  Latest health monitoring updates and alerts
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">
                        All vitals updated successfully
                      </p>
                      <span className="text-xs text-gray-500">2 min ago</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Heart rate: 85 bpm, SpO₂: 96%, Temperature: 36.7°C
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">
                        Weekly health report generated
                      </p>
                      <span className="text-xs text-gray-500">1 hour ago</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Your health trends show consistent improvement this week
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">
                        Device sync completed
                      </p>
                      <span className="text-xs text-gray-500">3 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Successfully synced data from all monitoring devices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            {/* User Profile Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 mb-8 border border-blue-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                  {dummyUserDetails.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">
                    {dummyUserDetails.name}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {dummyUserDetails.patientId}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 font-medium">Healthy</span>
                </div>
                <span className="text-gray-500">Last check: 2m ago</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  badge={item.badge}
                  active={activeSection === item.id}
                  onClick={() => setActiveSection(item.id)}
                />
              ))}
            </nav>
          </div>

          {/* Bottom Section */}
          {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Emergency Contact</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call 911</span>
              </button>
            </div>
          </div> */}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 pb-24">{renderContent()}</div>
      </div>
    </div>
  );
}
