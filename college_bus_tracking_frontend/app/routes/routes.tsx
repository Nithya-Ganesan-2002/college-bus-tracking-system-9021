import type { MetaFunction } from "@remix-run/node";
import { Card, SimpleTable } from "~/components/UI/Card";

export const meta: MetaFunction = () => ([
  { title: "Routes & Schedules | College Bus Tracking" },
]);

export default function RoutesPage() {
  const headers = ["Route", "From", "To", "First", "Last", "Frequency", "Seats"];
  const rows = [
    ["R1", "Main Gate", "City Hostel", "07:00", "21:00", "20 min", "12/40"],
    ["R2", "North Campus", "Station", "06:30", "20:30", "30 min", "4/35"],
    ["R3", "South Campus", "Main Gate", "07:15", "19:45", "25 min", "21/40"],
  ].map((r, i) => r.map((c, j) => <span key={`${i}-${j}`}>{c}</span>));

  return (
    <div className="space-y-6">
      <Card title="Schedules">
        <SimpleTable headers={headers} rows={rows} />
      </Card>
    </div>
  );
}
