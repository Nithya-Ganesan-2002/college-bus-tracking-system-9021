import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";

export type Role = "student" | "admin";

type AuthState = {
  role: Role | null;
  setRole: (r: Role | null) => void;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [role, setRole] = useState<Role | null>(null);
  const value = useMemo(() => ({ role, setRole }), [role]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// PUBLIC_INTERFACE
export function useAuth() {
  /** Access the current role and setter to switch roles for demo/auth. */
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
