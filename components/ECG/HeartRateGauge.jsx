// components/ECG/HeartRateGauge.jsx
export default function HeartRateGauge({ bpm, status = "unknown" }) {
  const v = typeof bpm === "number" ? Math.max(30, Math.min(180, bpm)) : 0;
  const pct = typeof bpm === "number" ? (v - 30) / (180 - 30) : 0.0;

  const color =
    status === "ok" ? "#22c55e" :       // green
    status === "warning" ? "#f59e0b" : // yellow
    status === "alert" ? "#ef4444" :   // red
    "#6b7280";                         // gray

  return (
    <div className="relative w-full h-32 sm:h-40 flex items-center justify-center">
      <svg viewBox="0 0 100 50" className="w-full h-full">
        {/* Background arc */}
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke="#1f2937"
          strokeWidth="10"
        />

        {/* Foreground arc (dynamic BPM) */}
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={`${pct * 126}, 200`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.5s ease" }}
        />

        {/* BPM text */}
        <text
          x="50"
          y="38"
          textAnchor="middle"
          fill="#e5e7eb"
          fontSize="14"
          fontWeight="600"
        >
          {typeof bpm === "number" ? `${bpm} BPM` : "--"}
        </text>

        {/* Status text */}
        <text
          x="50"
          y="48"
          textAnchor="middle"
          fill={color}
          fontSize="10"
          fontWeight="500"
        >
          {status.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
