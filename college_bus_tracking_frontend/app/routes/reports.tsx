import type { MetaFunction } from "@remix-run/node";
import { Card } from "~/components/UI/Card";

export const meta: MetaFunction = () => ([
  { title: "Reports | College Bus Tracking" },
  { name: "description", content: "Delays, usage and occupancy charts." },
]);

export default function ReportsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card title="Daily Delays (Chart)">
        <div className="grid h-56 place-items-center rounded border border-dashed border-slate-300 text-slate-500">
          Chart.js placeholder
        </div>
      </Card>
      <Card title="Occupancy Trends (Chart)">
        <div className="grid h-56 place-items-center rounded border border-dashed border-slate-300 text-slate-500">
          Chart.js placeholder
        </div>
      </Card>
      <Card title="Route Usage (Chart)" className="lg:col-span-2">
        <div className="grid h-64 place-items-center rounded border border-dashed border-slate-300 text-slate-500">
          Chart.js placeholder
        </div>
      </Card>
    </div>
  );
}
