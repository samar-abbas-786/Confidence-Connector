// utils/csv.js
export function exportCSV(points, filename = "ecg.csv") {
  if (!points?.length) return;

  // columns: ISO time, epoch ms, mV, ecg(normalized), device timestamp(s)
  const header = "isoTime,epochMs,mV,ecg,timestampSeconds\n";
  const rows = points.map(p =>
    `${new Date(p.t).toISOString()},${p.t},${Number(p.mV ?? "").toFixed(2)},${Number(p.ecg ?? "").toFixed(4)},${p.ts ?? ""}`
  );
  const csv = header + rows.join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
