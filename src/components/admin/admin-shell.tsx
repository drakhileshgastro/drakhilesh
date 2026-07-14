"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  LayoutDashboard, Users, IndianRupee, FileText,
  BarChart2, Settings, LogOut, Menu, Stethoscope,
  UserCog, Globe, Phone, X, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "All Leads", icon: Users },
  { href: "/admin/revenue", label: "Revenue", icon: IndianRupee },
  { href: "/admin/blog", label: "Blog CMS", icon: FileText },
  { href: "/admin/users", label: "Users", icon: UserCog },
  { href: "/admin/pages", label: "Website Pages", icon: Globe },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

const BOTTOM_NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/revenue", label: "Revenue", icon: IndianRupee },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
];

function isActive(pathname: string, href: string, exact?: boolean) {
  return exact ? pathname === href : pathname.startsWith(href);
}

function Sidebar({
  pathname,
  userEmail,
  onClose,
  onLogout,
}: {
  pathname: string;
  userEmail: string;
  onClose: () => void;
  onLogout: () => void;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-white/8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Stethoscope size={15} className="text-blue-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Dr. Akhilesh</p>
            <p className="text-slate-500 text-[10px] tracking-wide uppercase">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map((item) => {
          const active = isActive(pathname, item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all",
                active
                  ? "bg-blue-500/15 text-blue-400 font-medium"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              )}
            >
              <item.icon size={15} />
              <span className="flex-1">{item.label}</span>
              {active && <ChevronRight size={12} className="opacity-40" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-2 py-4 border-t border-white/8 space-y-0.5">
        <div className="px-3 py-2.5 mb-1">
          <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold mb-2">
            {userEmail ? userEmail[0].toUpperCase() : "A"}
          </div>
          <p className="text-slate-300 text-xs font-medium truncate">{userEmail || "Admin"}</p>
          <p className="text-slate-600 text-[10px]">Doctor · Admin</p>
        </div>

        <Link href="/" className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-xl transition-colors">
          <Globe size={13} /> View Website
        </Link>
        <Link href="/crm" className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 hover:text-blue-400 hover:bg-white/5 rounded-xl transition-colors">
          <Phone size={13} /> CRM / Telecaller
        </Link>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-500 hover:text-red-400 hover:bg-red-500/5 transition-colors rounded-xl"
        >
          <LogOut size={13} /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (pathname === "/admin/login") return;
    const supabase = createSupabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/admin/login");
        return;
      }
      setUserEmail(data.user.email ?? "");
    });
  }, [router, pathname]);

  async function logout() {
    const supabase = createSupabaseBrowser();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const currentPage = NAV.find((n) => isActive(pathname, n.href, n.exact))?.label ?? "Admin";

  return (
    <div className="min-h-screen flex" style={{ background: "#0B1120" }}>
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex flex-col w-52 flex-shrink-0 border-r border-white/8">
        <Sidebar
          pathname={pathname}
          userEmail={userEmail}
          onClose={() => setSidebarOpen(false)}
          onLogout={logout}
        />
      </aside>

      {/* Sidebar — mobile overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 w-52 flex-shrink-0 border-r border-white/8" style={{ background: "#0B1120" }}>
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg bg-white/8 text-slate-400 hover:text-white"
            >
              <X size={14} />
            </button>
            <Sidebar
              pathname={pathname}
              userEmail={userEmail}
              onClose={() => setSidebarOpen(false)}
              onLogout={logout}
            />
          </div>
        </div>
      )}

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50 rounded-l-2xl lg:rounded-l-3xl overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-slate-500 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Menu size={18} />
            </button>
            <p className="text-slate-800 font-semibold text-sm">{currentPage}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/crm"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-lg transition-colors"
            >
              <Phone size={12} /> CRM View
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 pb-24 lg:pb-6">
          {children}
        </main>
      </div>

      {/* Mobile bottom bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 flex shadow-lg">
        {BOTTOM_NAV.map((item) => {
          const active = isActive(pathname, item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors",
                active ? "text-blue-500" : "text-slate-400"
              )}
            >
              <item.icon size={19} strokeWidth={active ? 2.5 : 1.8} />
              <span className="text-[10px] font-semibold leading-none">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
