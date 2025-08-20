import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import { AuthProvider, useAuth } from "./context/AuthContext";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Shell() {
  const { role } = useAuth();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  // close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header role={role} onToggleSidebar={() => setOpen((v) => !v)} />
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 lg:px-6">
        <Sidebar open={open} role={role} onClose={() => setOpen(false)} />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
      <footer className="mt-auto border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-500 lg:px-6">
          © {new Date().getFullYear()} College Bus Tracking
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
