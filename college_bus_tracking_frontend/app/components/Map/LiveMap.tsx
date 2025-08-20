import { useEffect, useMemo, useState } from "react";

type LatLng = { lat: number; lng: number };
type LiveMapProps = {
  initialCenter?: LatLng;
};

export default function LiveMap({ initialCenter = { lat: 12.9716, lng: 77.5946 } }: LiveMapProps) {
  // Dummy simulation: move a point over time
  const [pos, setPos] = useState<LatLng>(initialCenter);
  const path = useMemo(
    () => [
      initialCenter,
      { lat: initialCenter.lat + 0.01, lng: initialCenter.lng + 0.01 },
      { lat: initialCenter.lat + 0.02, lng: initialCenter.lng - 0.01 },
      { lat: initialCenter.lat + 0.03, lng: initialCenter.lng + 0.02 },
    ],
    [initialCenter]
  );

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % path.length;
      setPos(path[i]);
    }, 1500);
    return () => clearInterval(t);
  }, [path]);

  // Visualize as simple box with moving dot
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="0" y="0" width="100" height="100" fill="#E5E7EB" />
        <polyline
          points={path.map(p => `${(p.lng - initialCenter.lng + 0.05) * 1000}, ${(p.lat - initialCenter.lat + 0.05) * 1000}`).join(" ")}
          fill="none"
          stroke="#2563EB"
          strokeWidth="1.5"
        />
      </svg>
      <div
        className="absolute h-3 w-3 -translate-x-1.5 -translate-y-1.5 rounded-full border-2 border-white bg-[#F59E42] shadow"
        style={{
          left: `${(pos.lng - initialCenter.lng + 0.05) * 1000}%`,
          top: `${(pos.lat - initialCenter.lat + 0.05) * 1000}%`,
        }}
        aria-label="Bus position"
      />
      <div className="absolute bottom-2 right-2 rounded bg-white/90 px-2 py-1 text-xs text-slate-700 shadow">
        Simulated position: {pos.lat.toFixed(4)}, {pos.lng.toFixed(4)}
      </div>
    </div>
  );
}
