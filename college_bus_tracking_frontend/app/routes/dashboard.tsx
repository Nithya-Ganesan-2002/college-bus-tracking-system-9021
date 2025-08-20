import type { MetaFunction } from "@remix-run/node";
import { Card, Stat } from "~/components/UI/Card";
import LiveMap from "~/components/Map/LiveMap";

export const meta: MetaFunction = () => ([
  { title: "Dashboard | College Bus Tracking" },
  { name: "description", content: "Overview of buses, occupancy and next departures." },
]);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Active Buses" value={12} color="primary" />
        <Stat label="Avg. Occupancy" value="63%" color="accent" />
        <Stat label="On-time Rate" value="92%" color="secondary" />
        <Stat label="Pending Passes" value={7} color="primary" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Live Bus Position">
          <LiveMap />
        </Card>
        <Card title="Next Departures" className="lg:col-span-2">
          <ul className="space-y-3">
            {[
              { route: "R1 - Main Gate", time: "09:10", seats: 12 },
              { route: "R2 - North Campus", time: "09:25", seats: 4 },
              { route: "R3 - City Hostel", time: "09:40", seats: 21 },
            ].map((x) => (
              <li key={x.route} className="flex items-center justify-between rounded border border-slate-200 p-3">
                <div>
                  <p className="font-medium text-slate-800">{x.route}</p>
                  <p className="text-xs text-slate-500">Seats available: {x.seats}</p>
                </div>
                <span className="rounded bg-slate-100 px-2 py-1 text-sm text-slate-700">{x.time}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
