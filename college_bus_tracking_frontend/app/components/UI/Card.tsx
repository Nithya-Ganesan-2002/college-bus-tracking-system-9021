import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  title?: string;
  actions?: React.ReactNode;
  className?: string;
}>;

export function Card({ title, actions, className, children }: CardProps) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white ${className ?? ""}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          {title ? <h3 className="text-sm font-semibold text-slate-800">{title}</h3> : <div />}
          {actions}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}

type StatProps = {
  label: string;
  value: string | number;
  color?: "primary" | "secondary" | "accent";
};
export function Stat({ label, value, color = "primary" }: StatProps) {
  const colorMap: Record<string, string> = {
    primary: "text-[#2563EB]",
    secondary: "text-[#1E293B]",
    accent: "text-[#F59E42]",
  };
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}

type TableProps = {
  headers: string[];
  rows: React.ReactNode[][];
};
export function SimpleTable({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-2">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
