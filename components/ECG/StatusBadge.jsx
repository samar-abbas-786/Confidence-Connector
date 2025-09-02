// components/ECG/StatusBadge.jsx
export default function StatusBadge({ mode, latencyMs }) {
  const map = {
    streaming: {
      text: "📡 Receiving",
      cls: "bg-green-600/20 text-green-300 ring-1 ring-green-600/30",
    },
    connected: {
      text: "⚡ Connected",
      cls: "bg-yellow-600/20 text-yellow-300 ring-1 ring-yellow-600/30",
    },
    disconnected: {
      text: "❌ Disconnected",
      cls: "bg-red-600/20 text-red-300 ring-1 ring-red-600/30",
    },
    error: {
      text: "⚠️ Error",
      cls: "bg-red-600/20 text-red-300 ring-1 ring-red-600/30",
    },
    default: {
      text: "—",
      cls: "bg-gray-600/20 text-gray-300 ring-1 ring-gray-600/30",
    },
  };
  const s = map[mode] || map.default;

  return (
    <div className={`px-3 py-1.5 rounded-xl text-sm ${s.cls}`}>
      {s.text}
      {latencyMs != null ? ` • ${latencyMs} ms` : ""}
    </div>
  );
}
