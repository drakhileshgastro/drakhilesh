"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  LayoutDashboard, Users, IndianRupee, FileText,
  BarChart2, Settings, LogOut, Stethoscope,
  UserCog, Globe, Phone, X, Menu, ChevronRight,
  Target, TrendingUp, Brain, ClipboardCheck, Activity,
} from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/admin",             label: "Dashboard",     icon: LayoutDashboard, exact: true },
  { href: "/admin/leads",       label: "All Leads",     icon: Users },
  { href: "/admin/revenue",     label: "Revenue",       icon: IndianRupee },
  { href: "/admin/blog",        label: "Blog Mgmt",     icon: FileText },
  // SEO & Content Intelligence
  { href: "/admin/pages",       label: "Website Pages", icon: Globe },
  { href: "/admin/keywords",    label: "Keywords",      icon: Target },
  { href: "/admin/traffic",     label: "Traffic (GSC)", icon: TrendingUp },
  { href: "/admin/visitors",    label: "Visitors (GA4)",icon: Activity },
  { href: "/admin/blog-leads",  label: "Blog → Leads",  icon: Brain },
  { href: "/admin/sop-audit",   label: "SOP Audit",     icon: ClipboardCheck },
  // Settings
  { href: "/admin/users",       label: "User Mgmt",     icon: UserCog },
  { href: "/admin/analytics",   label: "Analytics",     icon: BarChart2 },
  { href: "/admin/settings",    label: "Settings",      icon: Settings },
];

const BOTTOM_NAV = [
  { href: "/admin",          label: "Home",     icon: LayoutDashboard, exact: true },
  { href: "/admin/leads",    label: "Leads",    icon: Users },
  { href: "/admin/blog",     label: "Blog",     icon: FileText },
  { href: "/admin/traffic",  label: "Traffic",  icon: TrendingUp },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

const NAV_GROUPS = [
  { title: "Clinical",     items: NAV.slice(0, 4) },
  { title: "SEO & Content",items: NAV.slice(4, 10) },
  { title: "Manage",       items: NAV.slice(10) },
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
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold select-none mb-0.5"
      style={{
        background: active
          ? "rgba(39,174,96,0.15)"
          : hovered
          ? "rgba(148,163,184,0.09)"
          : "transparent",
        boxShadow: active ? "inset 3px 0 0 #27AE60" : "none",
        transition: "background 120ms ease, box-shadow 120ms ease",
        textDecoration: "none",
      }}
    >
      <item.icon
        size={16}
        strokeWidth={active ? 2.4 : 2}
        style={{
          flexShrink: 0,
          color: active ? "#4ade80" : hovered ? "#94a3b8" : "#64748b",
          transition: "color 120ms ease",
        }}
      />
      <span
        style={{
          flex: 1,
          color: active ? "#fff" : hovered ? "#e2e8f0" : "#94a3b8",
          transition: "color 120ms ease",
        }}
      >
        {item.label}
      </span>
      {active && (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#27AE60", flexShrink: 0 }} />
      )}
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
    <div className="flex flex-col h-full" style={{ background: "#0f172a" }}>

      {/* Brand */}
      <div className="px-5 py-5" style={{ borderBottom: "1px solid rgba(148,163,184,0.13)" }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(39,174,96,0.2)", border: "1px solid rgba(39,174,96,0.3)" }}>
            <Stethoscope size={17} style={{ color: "#4ade80" }} />
          </div>
          <div>
            <p className="font-bold text-sm leading-tight" style={{ color: "#fff" }}>Dr. Akhilesh</p>
            <p style={{ fontSize: 10, color: "#4ade80", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2 }}>
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto" style={{ padding: "14px 10px 10px" }}>
        {NAV_GROUPS.map((group) => (
          <section key={group.title} style={{ marginBottom: 18 }}>
            <p style={{
              fontSize: 10, fontWeight: 800, color: "#334155",
              textTransform: "uppercase", letterSpacing: "0.1em",
              padding: "0 12px 8px",
            }}>
              {group.title}
            </p>
            {group.items.map((item) => (
              <NavItem key={item.href} item={item} pathname={pathname} onClick={onClose} />
            ))}
          </section>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(148,163,184,0.13)", padding: "10px" }}>
        {/* User pill */}
        <div className="flex items-center gap-2.5 mb-2" style={{
          padding: "10px 12px", borderRadius: 14,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(148,163,184,0.12)",
        }}>
          <div className="flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ width: 34, height: 34, borderRadius: 11, background: "#27AE60", color: "#fff" }}>
            {userEmail ? userEmail[0].toUpperCase() : "A"}
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <p className="text-xs font-semibold truncate" style={{ color: "#fff" }}>
              {userEmail || "Admin"}
            </p>
            <p style={{ color: "#27AE60", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", marginTop: 1 }}>
              DOCTOR · ADMIN
            </p>
          </div>
        </div>

        <Link href="/" target="_blank" className="flex items-center gap-2.5 rounded-xl transition-colors"
          style={{ padding: "9px 12px", color: "#64748b", fontSize: 13, fontWeight: 600, textDecoration: "none", marginBottom: 2 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(148,163,184,0.09)"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
        >
          <Globe size={14} /> View Website
        </Link>
        <Link href="/crm" className="flex items-center gap-2.5 rounded-xl transition-colors"
          style={{ padding: "9px 12px", color: "#64748b", fontSize: 13, fontWeight: 600, textDecoration: "none", marginBottom: 2 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(148,163,184,0.09)"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
        >
          <Phone size={14} /> Telecaller CRM
        </Link>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2.5 rounded-xl transition-colors"
          style={{ padding: "9px 12px", color: "#f87171", fontSize: 13, fontWeight: 600, border: 0, background: "none", cursor: "pointer" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.1)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; }}
        >
          <LogOut size={14} /> Sign Out
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

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col flex-shrink-0" style={{ width: 220, background: "#0f172a", borderRight: "1px solid rgba(148,163,184,0.12)", position: "sticky", top: 0, height: "100vh" }}>
        <SidebarContent pathname={pathname} userEmail={userEmail} onClose={() => {}} onLogout={logout} />
      </aside>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />
          <div className="relative z-10 h-full shadow-2xl" style={{ width: 240 }}>
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-3.5 right-3 w-8 h-8 flex items-center justify-center rounded-xl z-10"
              style={{ background: "rgba(255,255,255,0.1)", color: "#94a3b8" }}
            >
              <X size={15} />
            </button>
            <SidebarContent pathname={pathname} userEmail={userEmail} onClose={() => setDrawerOpen(false)} onLogout={logout} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top header */}
        <header
          className="sticky top-0 z-30 flex items-center gap-3"
          style={{
            background: "#fff",
            borderBottom: "1px solid #e2e8f0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            padding: "0 20px",
            height: 56,
          }}
        >
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 transition-colors flex-shrink-0"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <span className="text-slate-400 text-xs hidden sm:block">Admin</span>
            <ChevronRight size={12} className="text-slate-300 hidden sm:block" />
            <p className="text-slate-900 font-bold text-sm sm:text-base">{currentLabel}</p>
          </div>

<div className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: "#27AE60" }}>
            {userEmail ? userEmail[0].toUpperCase() : "A"}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto" style={{ padding: "24px 20px 96px", maxWidth: "100%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40"
        style={{ background: "#fff", borderTop: "1px solid #e2e8f0", boxShadow: "0 -2px 12px rgba(0,0,0,0.06)" }}
      >
        <div className="flex" style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}>
          {BOTTOM_NAV.map((item) => {
            const active = isActive(pathname, item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center gap-1 select-none"
                style={{ minHeight: 58, paddingTop: 8, paddingBottom: 12 }}
              >
                <div className="flex items-center justify-center rounded-xl"
                  style={{ width: 40, height: 28, background: active ? "rgba(39,174,96,0.1)" : "transparent" }}>
                  <item.icon
                    size={19}
                    strokeWidth={active ? 2.5 : 1.8}
                    style={{ color: active ? "#27AE60" : "#94a3b8" }}
                  />
                </div>
                <span className="text-[10px] font-semibold leading-none"
                  style={{ color: active ? "#27AE60" : "#94a3b8" }}>
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
