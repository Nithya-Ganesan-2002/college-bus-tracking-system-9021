import type { MetaFunction } from "@remix-run/node";
import { Card, SimpleTable } from "~/components/UI/Card";

export const meta: MetaFunction = () => ([
  { title: "Admin • Schedules | College Bus Tracking" },
]);

export default function AdminSchedules() {
  const headers = ["Route", "First", "Last", "Frequency"];
  const rows = [
    ["R1", "07:00", "21:00", "20 min"],
    ["R2", "06:30", "20:30", "30 min"],
    ["R3", "07:15", "19:45", "25 min"],
  ].map((r, i) => r.map((c, j) => <span key={`${i}-${j}`}>{c}</span>));
  return (
    <div className="space-y-6">
      <Card title="Schedules">
        <SimpleTable headers={headers} rows={rows} />
      </Card>
    </div>
  );
}
