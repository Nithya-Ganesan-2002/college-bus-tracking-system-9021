import type { MetaFunction } from "@remix-run/node";
import { Card } from "~/components/UI/Card";

export const meta: MetaFunction = () => ([
  { title: "Admin • Analytics | College Bus Tracking" },
]);

export default function AdminAnalytics() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card title="Occupancy Heatmap">
        <div className="grid h-56 place-items-center rounded border border-dashed border-slate-300 text-slate-500">
          Chart.js placeholder
        </div>
      </Card>
      <Card title="Delays by Route">
        <div className="grid h-56 place-items-center rounded border border-dashed border-slate-300 text-slate-500">
          Chart.js placeholder
        </div>
      </Card>
      <Card title="Usage by Hour" className="lg:col-span-2">
        <div className="grid h-64 place-items-center rounded border border-dashed border-slate-300 text-slate-500">
          Chart.js placeholder
        </div>
      </Card>
    </div>
  );
}
