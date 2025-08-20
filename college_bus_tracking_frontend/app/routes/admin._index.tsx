import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ([
  { title: "Admin | College Bus Tracking" },
]);

export default function AdminIndex() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[
        { to: "/admin/buses", label: "Manage Buses" },
        { to: "/admin/drivers", label: "Drivers" },
        { to: "/admin/schedules", label: "Schedules" },
        { to: "/admin/analytics", label: "Analytics" },
      ].map((x) => (
        <Link key={x.to} to={x.to} className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-sm">
          <h3 className="font-semibold text-slate-800">{x.label}</h3>
          <p className="mt-1 text-sm text-slate-600">Open {x.label.toLowerCase()} module</p>
        </Link>
      ))}
    </div>
  );
}
