import { Link, NavLink } from "@remix-run/react";

type HeaderProps = {
  role?: "student" | "admin" | null;
  onToggleSidebar?: () => void;
};

export default function Header({ role, onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="stroke-current" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-[#2563EB]" />
            <span className="font-semibold text-slate-800">College Bus</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          <NavLink to="/" className="text-sm text-slate-600 hover:text-slate-900">Home</NavLink>
          <NavLink to="/dashboard" className="text-sm text-slate-600 hover:text-slate-900">Dashboard</NavLink>
          <NavLink to="/routes" className="text-sm text-slate-600 hover:text-slate-900">Routes</NavLink>
          <NavLink to="/live" className="text-sm text-slate-600 hover:text-slate-900">Live</NavLink>
          <NavLink to="/reports" className="text-sm text-slate-600 hover:text-slate-900">Reports</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 sm:inline">
            {role ? role.toUpperCase() : "GUEST"}
          </span>
          <Link
            to="/auth"
            className="rounded-md bg-[#2563EB] px-3 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
          >
            {role ? "Switch / Logout" : "Login"}
          </Link>
        </div>
      </div>
    </header>
  );
}
