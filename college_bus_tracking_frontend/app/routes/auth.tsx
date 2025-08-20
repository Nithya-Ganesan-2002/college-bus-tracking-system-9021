import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => ([
  { title: "Auth | College Bus Tracking" },
]);

export default function AuthPage() {
  return (
    <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-slate-900">Authentication</h2>
      <p className="mt-2 text-sm text-slate-600">
        This starter uses a simulated role switcher on the Home page. Integrate your actual auth provider later.
      </p>
      <Link to="/" className="mt-4 inline-block rounded-md bg-[#2563EB] px-3 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]">
        Go to Home to switch role
      </Link>
    </div>
  );
}
