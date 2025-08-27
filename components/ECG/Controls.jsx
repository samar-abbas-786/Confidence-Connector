// components/ECG/Controls.jsx
import { useState } from "react";

export default function Controls({ wsUrl, onSave, onReconnect, onExport, sampleRate }) {
  const [url, setUrl] = useState(wsUrl);

  return (
    <div className="bg-[#0f1720] border border-white/10 rounded-2xl p-4 md:p-5 shadow-xl">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex-1">
          <label className="block text-sm text-gray-400 mb-1">WebSocket URL</label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="ws://<ESP32-IP>:81"
            className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-rose-500/40 text-white"
          />
          <div className="text-xs text-gray-500 mt-1">
            Sampling: {sampleRate} Hz • Example: <code>ws://192.168.250.121:81</code>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => { onSave(url); }}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 transition"
          >
            Save URL
          </button>
          <button
            onClick={onReconnect}
            className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 transition"
          >
            Reconnect
          </button>
          <button
            onClick={onExport}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition"
          >
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
