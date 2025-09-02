// components/ECG/Controls.jsx
import { useState } from "react";

export default function Controls({
  wsUrl,
  onSave,
  onReconnect,
  onExport,
  sampleRate,
}) {
  const [url, setUrl] = useState(wsUrl);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 shadow-md">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex-1">
          <label className="block text-sm text-gray-700 mb-1">
            WebSocket URL
          </label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="ws://<ESP32-IP>:81"
            className="w-full rounded-xl bg-gray-50 border border-gray-300 px-3 py-2 outline-none focus:ring-2 ring-blue-400 text-gray-800"
          />
          <div className="text-xs text-gray-500 mt-1">
            Sampling: {sampleRate} Hz • Example:{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              ws://192.168.250.121:81
            </code>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              onSave(url);
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save URL
          </button>
          <button
            onClick={onReconnect}
            className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            Reconnect
          </button>
          <button
            onClick={onExport}
            className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
          >
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
