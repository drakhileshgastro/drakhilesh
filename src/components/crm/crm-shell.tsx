"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  LayoutDashboard, Users, Calendar, LogOut,
  Bell, Menu, CheckSquare, MessageCircle, BarChart2,
  ShieldCheck, Phone, X, ChevronRight, Stethoscope,
} from "lucide-react";

const NAV = [
  { href: "/crm",              label: "Dashboard",   icon: LayoutDashboard, exact: true },
  { href: "/crm/leads",        label: "Leads",       icon: Users },
  { href: "/crm/appointments", label: "Appointments",icon: Calendar },
  { href: "/crm/tasks",        label: "Tasks",       icon: CheckSquare },
  { href: "/crm/chats",        label: "AI Chats",    icon: MessageCircle },
  { href: "/crm/analytics",    label: "Analytics",   icon: BarChart2 },
];

const NAV_GROUPS = [
  { title: "Telecaller", items: NAV.slice(0, 4) },
  { title: "Insights",   items: NAV.slice(4) },
];

const BOTTOM_NAV = [
  { href: "/crm",              label: "Home",  icon: LayoutDashboard, exact: true },
  { href: "/crm/leads",        label: "Leads", icon: Users },
  { href: "/crm/appointments", label: "Appts", icon: Calendar },
  { href: "/crm/tasks",        label: "Tasks", icon: CheckSquare },
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
  notifStatus,
  onClose,
  onLogout,
  onRequestNotif,
}: {
  pathname: string;
  userEmail: string;
  notifStatus: "idle" | "granted" | "denied";
  onClose: () => void;
  onLogout: () => void;
  onRequestNotif: () => void;
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
            <p className="font-bold text-sm leading-tight" style={{ color: "#fff" }}>Dr. Akhilesh CRM</p>
            <p style={{ fontSize: 10, color: "#4ade80", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2 }}>
              Telecaller Portal
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
            {userEmail ? userEmail[0].toUpperCase() : "T"}
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <p className="text-xs font-semibold truncate" style={{ color: "#fff" }}>
              {userEmail || "Telecaller"}
            </p>
            <p style={{ color: "#27AE60", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", marginTop: 1 }}>
              TELECALLER
            </p>
          </div>
          {/* Notification bell */}
          <button
            onClick={onRequestNotif}
            title={notifStatus === "granted" ? "Notifications on" : "Enable notifications"}
            style={{ background: "none", border: 0, cursor: "pointer", padding: 4, color: notifStatus === "granted" ? "#4ade80" : "#64748b", position: "relative" }}
          >
            <Bell size={14} />
            {notifStatus === "idle" && <span style={{ position: "absolute", top: 2, right: 2, width: 6, height: 6, borderRadius: "50%", background: "#fb923c" }} />}
          </button>
        </div>

        <Link href="/admin" className="flex items-center gap-2.5 rounded-xl transition-colors"
          style={{ padding: "9px 12px", color: "#64748b", fontSize: 13, fontWeight: 600, textDecoration: "none", marginBottom: 2 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(148,163,184,0.09)"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
        >
          <ShieldCheck size={14} /> Admin Panel
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

export default function CrmShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [notifStatus, setNotifStatus] = useState<"idle" | "granted" | "denied">("idle");

  useEffect(() => {
    if (pathname === "/crm/login") return;
    const supabase = createSupabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { router.push("/crm/login"); return; }
      setUserEmail(data.user.email ?? "");
      if (typeof Notification !== "undefined" && Notification.permission === "granted") {
        subscribeToPush(data.user.email ?? "").catch(() => {});
        setNotifStatus("granted");
      } else if (typeof Notification !== "undefined" && Notification.permission === "denied") {
        setNotifStatus("denied");
      }
    });
  }, [router, pathname]);

  async function subscribeToPush(email: string) {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;
    const reg = await navigator.serviceWorker.ready;
    const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    if (!vapidKey) return;
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: vapidKey,
    });
    await fetch("/api/push/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscription: sub.toJSON(), user_email: email }),
    });
  }

  async function requestNotifications() {
    if (!("Notification" in window)) return;
    const perm = await Notification.requestPermission();
    setNotifStatus(perm === "granted" ? "granted" : "denied");
    if (perm === "granted") subscribeToPush(userEmail).catch(() => {});
  }

  async function logout() {
    const supabase = createSupabaseBrowser();
    await supabase.auth.signOut();
    window.location.href = "/crm/login";
  }

  if (pathname === "/crm/login") return <>{children}</>;

  const currentLabel = NAV.find((n) => isActive(pathname, n.href, n.exact))?.label ?? "CRM";

  return (
    <div className="min-h-screen flex" style={{ background: "#F1F5F9" }}>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col flex-shrink-0" style={{ width: 220, background: "#0f172a", borderRight: "1px solid rgba(148,163,184,0.12)", position: "sticky", top: 0, height: "100vh" }}>
        <SidebarContent
          pathname={pathname}
          userEmail={userEmail}
          notifStatus={notifStatus}
          onClose={() => {}}
          onLogout={logout}
          onRequestNotif={requestNotifications}
        />
      </aside>

      {/* Mobile drawer */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 h-full shadow-2xl" style={{ width: 240 }}>
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-3.5 right-3 w-8 h-8 flex items-center justify-center rounded-xl z-10"
              style={{ background: "rgba(255,255,255,0.1)", color: "#94a3b8" }}
            >
              <X size={15} />
            </button>
            <SidebarContent
              pathname={pathname}
              userEmail={userEmail}
              notifStatus={notifStatus}
              onClose={() => setSidebarOpen(false)}
              onLogout={logout}
              onRequestNotif={requestNotifications}
            />
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
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 transition-colors flex-shrink-0"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <span className="text-slate-400 text-xs hidden sm:block">CRM</span>
            <ChevronRight size={12} className="text-slate-300 hidden sm:block" />
            <p className="text-slate-900 font-bold text-sm sm:text-base">{currentLabel}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:+919031669888`}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold rounded-lg border transition-colors"
              style={{
                padding: "6px 12px",
                color: "#27AE60",
                background: "rgba(39,174,96,0.08)",
                border: "1px solid rgba(39,174,96,0.25)",
              }}
            >
              <Phone size={12} /> Quick Call
            </a>
            <div className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ background: "#27AE60" }}>
              {userEmail ? userEmail[0].toUpperCase() : "T"}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto pb-20 lg:pb-0" style={{ padding: "24px 20px 96px", maxWidth: "100%" }}>
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
