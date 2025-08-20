import type { MetaFunction } from "@remix-run/node";
import { Card, SimpleTable } from "~/components/UI/Card";

export const meta: MetaFunction = () => ([
  { title: "Admin • Drivers | College Bus Tracking" },
]);

export default function AdminDrivers() {
  const headers = ["Name", "License", "Phone", "Assigned Bus"];
  const rows = [
    ["Alex K", "DL-9988", "98765 00001", "KA-01-1234"],
    ["Priya S", "DL-7654", "98765 00002", "KA-01-5678"],
  ].map((r, i) => r.map((c, j) => <span key={`${i}-${j}`}>{c}</span>));
  return (
    <div className="space-y-6">
      <Card title="Drivers">
        <SimpleTable headers={headers} rows={rows} />
      </Card>
    </div>
  );
}
