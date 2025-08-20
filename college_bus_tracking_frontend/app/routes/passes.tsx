import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Card } from "~/components/UI/Card";

export const meta: MetaFunction = () => ([
  { title: "Bus Pass | College Bus Tracking" },
]);

export default function PassesPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card title="Request Bus Pass">
        <Form method="post" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#2563EB]" />
          </div>
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-slate-700">Student ID</label>
            <input id="studentId" name="studentId" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#2563EB]" />
          </div>
          <div>
            <label htmlFor="route" className="block text-sm font-medium text-slate-700">Preferred Route</label>
            <select id="route" name="route" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
              <option>R1 - Main Gate</option>
              <option>R2 - North Campus</option>
              <option>R3 - South Campus</option>
            </select>
          </div>
          <button className="rounded-md bg-[#2563EB] px-3 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]">
            Submit Request
          </button>
        </Form>
      </Card>
      <Card title="Your Pass Status">
        <p className="text-sm text-slate-600">No active pass yet. Submit a request to generate your pass.</p>
      </Card>
    </div>
  );
}
