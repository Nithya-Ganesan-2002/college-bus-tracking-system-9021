import type { MetaFunction } from "@remix-run/node";
import { Card, SimpleTable } from "~/components/UI/Card";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => ([
  { title: "Admin • Buses | College Bus Tracking" },
]);

export default function AdminBuses() {
  const headers = ["Bus #", "Route", "Capacity", "Driver", "Status"];
  const rows = [
    ["KA-01-1234", "R1", "40", "Alex K", "Active"],
    ["KA-01-5678", "R2", "35", "Priya S", "Active"],
    ["KA-02-2244", "R3", "40", "—", "Maintenance"],
  ].map((r, i) => r.map((c, j) => <span key={`${i}-${j}`}>{c}</span>));

  return (
    <div className="space-y-6">
      <Card title="Add / Update Bus">
        <Form method="post" className="grid gap-3 sm:grid-cols-2">
          <input name="busNo" placeholder="Bus Number" className="rounded-md border border-slate-300 px-3 py-2" />
          <input name="route" placeholder="Route (e.g., R1)" className="rounded-md border border-slate-300 px-3 py-2" />
          <input name="capacity" type="number" placeholder="Capacity" className="rounded-md border border-slate-300 px-3 py-2" />
          <input name="driver" placeholder="Driver" className="rounded-md border border-slate-300 px-3 py-2" />
          <button className="sm:col-span-2 rounded-md bg-[#2563EB] px-3 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]">
            Save
          </button>
        </Form>
      </Card>
      <Card title="Buses">
        <SimpleTable headers={headers} rows={rows} />
      </Card>
    </div>
  );
}
