import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useAuth } from "~/context/AuthContext";

export const meta: MetaFunction = () => {
  return [
    { title: "College Bus Tracking" },
    { name: "description", content: "Track college buses, schedules, routes, seats, and analytics." },
  ];
};

export default function Index() {
  const { role, setRole } = useAuth();
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 lg:px-6">
      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-bold text-slate-900">College Bus Tracking</h1>
        <p className="mt-2 text-slate-600">
          Modern, responsive dashboard for students and admins. Use the controls below to simulate roles.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setRole("student")}
            className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Switch to Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Switch to Admin
          </button>
          <button
            onClick={() => setRole(null)}
            className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Logout
          </button>
          <span className="ml-2 text-sm text-slate-600">
            Current role: <strong>{role ?? "Guest"}</strong>
          </span>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/dashboard" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-sm">
          <h3 className="font-semibold text-slate-800">Dashboard</h3>
          <p className="mt-1 text-sm text-slate-600">Your overview with stats, next buses, and notifications.</p>
        </Link>
        <Link to="/routes" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-sm">
          <h3 className="font-semibold text-slate-800">Routes & Schedules</h3>
          <p className="mt-1 text-sm text-slate-600">Browse routes, timings, and stops.</p>
        </Link>
        <Link to="/live" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-sm">
          <h3 className="font-semibold text-slate-800">Live Tracking</h3>
          <p className="mt-1 text-sm text-slate-600">Simulated bus location on map.</p>
        </Link>
        <Link to="/passes" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-sm">
          <h3 className="font-semibold text-slate-800">Bus Pass</h3>
          <p className="mt-1 text-sm text-slate-600">Request or view your bus pass.</p>
        </Link>
        <Link to="/reports" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-sm">
          <h3 className="font-semibold text-slate-800">Reports</h3>
          <p className="mt-1 text-sm text-slate-600">Occupancy and delay trends (charts).</p>
        </Link>
        <Link to="/admin" className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-sm">
          <h3 className="font-semibold text-slate-800">Admin</h3>
          <p className="mt-1 text-sm text-slate-600">Manage buses, drivers, schedules and analytics.</p>
        </Link>
      </section>
    </div>
  );
}
