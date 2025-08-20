import { NavLink } from "@remix-run/react";

type SidebarProps = {
  open?: boolean;
  role?: "student" | "admin" | null;
  onClose?: () => void;
};

const navLinkClass =
  "block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900";

export default function Sidebar({ open, role, onClose }: SidebarProps) {
  const isAdmin = role === "admin";
  return (
    <>
      {/* Overlay */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Close navigation"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClose?.();
          }
          if (e.key === "Escape") {
            onClose?.();
          }
        }}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden ${open ? "block" : "hidden"}`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 bg-white p-4 transition-transform duration-200 lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-4 hidden lg:block">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Navigation
          </p>
        </div>
        <div className="space-y-1">
          <NavLink to="/dashboard" className={navLinkClass}>Overview</NavLink>
          <NavLink to="/routes" className={navLinkClass}>Bus Routes</NavLink>
          <NavLink to="/live" className={navLinkClass}>Live Tracking</NavLink>
          <NavLink to="/passes" className={navLinkClass}>Bus Pass</NavLink>
          {isAdmin && (
            <>
              <div className="mt-4 border-t pt-3">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Admin
                </p>
              </div>
              <NavLink to="/admin/buses" className={navLinkClass}>Manage Buses</NavLink>
              <NavLink to="/admin/drivers" className={navLinkClass}>Drivers</NavLink>
              <NavLink to="/admin/schedules" className={navLinkClass}>Schedules</NavLink>
              <NavLink to="/admin/analytics" className={navLinkClass}>Analytics</NavLink>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
