// components/ECG/ECGRealtimeChart.jsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ECGChart({
  data,
  domainMV = [0, 3300],
  showMVAxis = true,
}) {
  return (
    <div className="w-full h-[360px] md:h-[420px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 8, bottom: 8, left: 0 }}
        >
          {/* Grid */}
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />

          {/* X-axis (time) */}
          <XAxis dataKey="t" hide />

          {/* Y-axis: switchable between mV & normalized ECG */}
          {showMVAxis ? (
            <YAxis
              domain={domainMV}
              width={48}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              tickLine={{ stroke: "#374151" }}
              axisLine={{ stroke: "#374151" }}
              label={{
                value: "mV",
                angle: -90,
                position: "insideLeft",
                fill: "#9ca3af",
              }}
            />
          ) : (
            <YAxis
              domain={[-1.65, 1.65]}
              width={48}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              tickLine={{ stroke: "#374151" }}
              axisLine={{ stroke: "#374151" }}
              label={{
                value: "ECG (V)",
                angle: -90,
                position: "insideLeft",
                fill: "#9ca3af",
              }}
            />
          )}

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#0b0f14",
              border: "1px solid #1f2937",
              color: "#f9fafb",
            }}
            labelFormatter={(t) =>
              typeof t === "number" ? new Date(t).toLocaleTimeString() : t
            }
            formatter={(value, name) => [`${value}`, name]}
          />

          {/* ECG waveform */}
          <Line
            type="monotone"
            dataKey="mV"
            stroke="#ef4444"
            strokeWidth={2.25}
            dot={false}
            isAnimationActive={false}
            className="ecg-glow"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
