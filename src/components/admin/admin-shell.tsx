"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  LayoutDashboard, Users, IndianRupee, FileText,
  BarChart2, Settings, LogOut, Stethoscope,
  UserCog, Globe, Phone, X, Menu, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/admin",           label: "Dashboard",   icon: LayoutDashboard, exact: true },
  { href: "/admin/leads",     label: "All Leads",   icon: Users },
  { href: "/admin/revenue",   label: "Revenue",     icon: IndianRupee },
  { href: "/admin/blog",      label: "Blog CMS",    icon: FileText },
  { href: "/admin/users",     label: "User Mgmt",   icon: UserCog },
  { href: "/admin/pages",     label: "Website",     icon: Globe },
  { href: "/admin/analytics", label: "Analytics",   icon: BarChart2 },
  { href: "/admin/settings",  label: "Settings",    icon: Settings },
];

const BOTTOM_NAV = [
  { href: "/admin",           label: "Home",     icon: LayoutDashboard, exact: true },
  { href: "/admin/leads",     label: "Leads",    icon: Users },
  { href: "/admin/revenue",   label: "Revenue",  icon: IndianRupee },
  { href: "/admin/blog",      label: "Blog",     icon: FileText },
  { href: "/admin/settings",  label: "Settings", icon: Settings },
];

function isActive(pathname: string, href: string, exact?: boolean) {
  return exact ? pathname === href : pathname.startsWith(href);
}

function NavItem({
  item,
  pathname,
  onClick,
}: {
  item: (typeof NAV)[0];
  pathname: string;
  onClick?: () => void;
}) {
  const active = isActive(pathname, item.href, item.exact);
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all select-none",
        active
          ? "bg-emerald-50 text-emerald-700"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
      )}
    >
      <item.icon
        size={17}
        className={cn(
          "flex-shrink-0 transition-colors",
          active ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
        )}
      />
      <span className="flex-1">{item.label}</span>
      {active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />}
    </Link>
  );
}

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
      {/* Brand header */}
      <div className="px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
            <Stethoscope size={17} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm leading-tight">Dr. Akhilesh</p>
            <p className="text-[10px] text-emerald-600 font-semibold tracking-widest uppercase">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2 mt-1">Main</p>
        {NAV.slice(0, 4).map((item) => (
          <NavItem key={item.href} item={item} pathname={pathname} onClick={onClose} />
        ))}
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2 mt-4">Manage</p>
        {NAV.slice(4).map((item) => (
          <NavItem key={item.href} item={item} pathname={pathname} onClick={onClose} />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-100 px-3 py-3 space-y-0.5">
        {/* User pill */}
        <div className="flex items-center gap-2.5 px-3 py-2.5 mb-1 bg-slate-50 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {userEmail ? userEmail[0].toUpperCase() : "A"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-slate-700 text-xs font-semibold truncate">{userEmail || "Admin"}</p>
            <p className="text-slate-400 text-[10px]">Doctor · Admin</p>
          </div>
        </div>

        <Link href="/" target="_blank" className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-colors">
          <Globe size={13} /> View Website
        </Link>
        <Link href="/crm" className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-colors">
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

  const currentPage = NAV.find((n) => isActive(pathname, n.href, n.exact));
  const currentLabel = currentPage?.label ?? "Admin";

  return (
    <div className="min-h-screen flex" style={{ background: "#F1F5F9" }}>

      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 border-r border-slate-200" style={{ background: "#FFFFFF" }}>
        <SidebarContent pathname={pathname} userEmail={userEmail} onClose={() => {}} onLogout={logout} />
      </aside>

      {/* ── Mobile drawer overlay ── */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />
          <div className="relative z-10 w-64 h-full shadow-2xl">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-3.5 right-3 w-8 h-8 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors z-10"
            >
              <X size={15} />
            </button>
            <SidebarContent pathname={pathname} userEmail={userEmail} onClose={() => setDrawerOpen(false)} onLogout={logout} />
          </div>
        </div>
      )}

      {/* ── Main content column ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top header */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 transition-colors flex-shrink-0"
          >
            <Menu size={20} />
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <span className="text-slate-400 text-xs hidden sm:block">Admin</span>
            <ChevronRight size={12} className="text-slate-300 hidden sm:block" />
            <p className="text-slate-900 font-bold text-sm sm:text-base">{currentLabel}</p>
          </div>

          {/* CRM Link */}
          <Link href="/crm"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors">
            <Phone size={12} /> CRM View
          </Link>

          {/* Mobile avatar */}
          <div className="lg:hidden w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {userEmail ? userEmail[0].toUpperCase() : "A"}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto px-4 py-5 sm:px-5 sm:py-6 pb-28 lg:pb-6">
          {children}
        </main>
      </div>

      {/* ── Mobile bottom navigation ── */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200"
        style={{ boxShadow: "0 -2px 12px rgba(0,0,0,0.06)" }}
      >
        <div className="flex" style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}>
          {BOTTOM_NAV.map((item) => {
            const active = isActive(pathname, item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center pt-2 pb-3 gap-1 select-none"
                style={{ minHeight: 58 }}
              >
                <div className={cn(
                  "w-10 h-7 flex items-center justify-center rounded-xl transition-all",
                  active ? "bg-emerald-50" : ""
                )}>
                  <item.icon
                    size={19}
                    strokeWidth={active ? 2.5 : 1.8}
                    className={active ? "text-emerald-600" : "text-slate-400"}
                  />
                </div>
                <span className={cn(
                  "text-[10px] font-semibold leading-none",
                  active ? "text-emerald-600" : "text-slate-400"
                )}>
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
