import type { MetaFunction } from "@remix-run/node";
import LiveMap from "~/components/Map/LiveMap";
import { Card } from "~/components/UI/Card";

export const meta: MetaFunction = () => ([
  { title: "Live Tracking | College Bus Tracking" },
]);

export default function LivePage() {
  return (
    <div className="space-y-6">
      <Card title="Live Bus Location (Simulated)">
        <LiveMap />
      </Card>
      <Card title="Legend">
        <ul className="list-inside list-disc text-sm text-slate-600">
          <li>Orange dot indicates the current simulated position of a selected bus.</li>
          <li>Polyline shows the recent path.</li>
        </ul>
      </Card>
    </div>
  );
}
