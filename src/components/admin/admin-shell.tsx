"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  LayoutDashboard, Users, IndianRupee, FileText,
  BarChart2, Settings, LogOut, Stethoscope,
  UserCog, Globe, Phone, X, Menu,
} from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/admin",           label: "Dashboard",     icon: LayoutDashboard, exact: true },
  { href: "/admin/leads",     label: "Leads",         icon: Users },
  { href: "/admin/revenue",   label: "Revenue",       icon: IndianRupee },
  { href: "/admin/blog",      label: "Blog CMS",      icon: FileText },
  { href: "/admin/users",     label: "Users",         icon: UserCog },
  { href: "/admin/pages",     label: "Website",       icon: Globe },
  { href: "/admin/analytics", label: "Analytics",     icon: BarChart2 },
  { href: "/admin/settings",  label: "Settings",      icon: Settings },
];

// 4 primary items for mobile bottom bar
const BOTTOM_NAV = [
  { href: "/admin",         label: "Home",     icon: LayoutDashboard, exact: true },
  { href: "/admin/leads",   label: "Leads",    icon: Users },
  { href: "/admin/revenue", label: "Revenue",  icon: IndianRupee },
  { href: "/admin/settings",label: "Settings", icon: Settings },
];

function isActive(pathname: string, href: string, exact?: boolean) {
  return exact ? pathname === href : pathname.startsWith(href);
}

const BRAND = "#111827";
const BRAND_LIGHT = "#F3F4F6";

function SidebarContent({
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
    <div className="flex flex-col h-full bg-white">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: BRAND_LIGHT }}
          >
            <Stethoscope size={16} style={{ color: BRAND }} />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">Dr. Akhilesh</p>
            <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map((item) => {
          const active = isActive(pathname, item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all select-none",
                active
                  ? "font-semibold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              )}
              style={active ? { background: BRAND_LIGHT, color: BRAND } : {}}
            >
              <item.icon size={16} />
              <span className="flex-1">{item.label}</span>
              {active && (
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: BRAND }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User + actions */}
      <div className="border-t border-gray-100 px-3 py-4 space-y-0.5">
        <div className="px-3 py-2.5 flex items-center gap-2.5 mb-1">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: BRAND }}
          >
            {userEmail ? userEmail[0].toUpperCase() : "A"}
          </div>
          <div className="min-w-0">
            <p className="text-gray-800 text-xs font-semibold truncate">{userEmail || "Admin"}</p>
            <p className="text-gray-400 text-[10px]">Doctor · Admin</p>
          </div>
        </div>

        <Link href="/" className="flex items-center gap-2.5 px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-xl transition-colors">
          <Globe size={13} /> View Website
        </Link>
        <Link href="/crm" className="flex items-center gap-2.5 px-3 py-2 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-800 rounded-xl transition-colors">
          <Phone size={13} /> Telecaller CRM
        </Link>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-red-400 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
        >
          <LogOut size={13} /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userEmail, setUserEmail]   = useState("");

  useEffect(() => {
    if (pathname === "/admin/login") return;
    const supabase = createSupabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { router.push("/admin/login"); return; }
      setUserEmail(data.user.email ?? "");
    });
  }, [router, pathname]);

  async function logout() {
    const supabase = createSupabaseBrowser();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  if (pathname === "/admin/login") return <>{children}</>;

  const currentLabel = NAV.find((n) => isActive(pathname, n.href, n.exact))?.label ?? "Admin";

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 border-r border-gray-100 shadow-xs">
        <SidebarContent
          pathname={pathname}
          userEmail={userEmail}
          onClose={() => {}}
          onLogout={logout}
        />
      </aside>

      {/* ── Mobile drawer overlay ── */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative z-10 w-64 h-full shadow-2xl">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-3 w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-10"
            >
              <X size={15} />
            </button>
            <SidebarContent
              pathname={pathname}
              userEmail={userEmail}
              onClose={() => setDrawerOpen(false)}
              onLogout={logout}
            />
          </div>
        </div>
      )}

      {/* ── Main area ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top header */}
        <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 flex-shrink-0 sticky top-0 z-30">
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <Menu size={19} />
          </button>

          <div className="flex-1 min-w-0">
            <p className="text-gray-900 font-bold text-base leading-tight">{currentLabel}</p>
          </div>

          {/* Avatar (mobile only) */}
          <div
            className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: BRAND }}
          >
            {userEmail ? userEmail[0].toUpperCase() : "A"}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 sm:p-5 pb-28 lg:pb-6">
          {children}
        </main>
      </div>

      {/* ── Mobile bottom navigation (app-style) ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100" style={{ boxShadow: "0 -1px 12px rgba(0,0,0,0.06)" }}>
        <div className="flex safe-area-inset-bottom">
          {BOTTOM_NAV.map((item) => {
            const active = isActive(pathname, item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center pt-2.5 pb-3 gap-1 select-none transition-colors"
                style={{ minHeight: 60 }}
              >
                <div
                  className="w-10 h-7 flex items-center justify-center rounded-xl transition-all"
                  style={active ? { background: BRAND_LIGHT } : {}}
                >
                  <item.icon
                    size={20}
                    strokeWidth={active ? 2.5 : 1.8}
                    style={{ color: active ? BRAND : "#9CA3AF" }}
                  />
                </div>
                <span
                  className="text-[10px] font-semibold leading-none"
                  style={{ color: active ? BRAND : "#9CA3AF" }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

    </div>
  );
}
