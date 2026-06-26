"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  LayoutDashboard, Users, Calendar, LogOut,
  Bell, Menu, X, Phone
} from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/crm", label: "Dashboard", icon: LayoutDashboard },
  { href: "/crm/leads", label: "Leads", icon: Users },
  { href: "/crm/appointments", label: "Appointments", icon: Calendar },
];

export default function CrmShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const supabase = createSupabaseBrowser();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { router.push("/crm/login"); return; }
      setUserEmail(data.user.email ?? "");
    });
  }, [router]);

  async function logout() {
    const supabase = createSupabaseBrowser();
    await supabase.auth.signOut();
    router.push("/crm/login");
    router.refresh();
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-gray-light">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-teal font-bold text-base">✚</span>
          </div>
          <div>
            <p className="text-navy font-bold text-xs leading-tight">Dr. Akhilesh CRM</p>
            <p className="text-gray-muted text-[10px]">Telecaller Portal</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                active
                  ? "bg-navy text-white"
                  : "text-slate hover:bg-offwhite hover:text-navy"
              )}
            >
              <item.icon size={16} className={active ? "text-teal" : ""} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User + logout */}
      <div className="px-3 py-4 border-t border-gray-light">
        <div className="px-3 py-2 mb-2">
          <p className="text-navy text-xs font-semibold truncate">{userEmail}</p>
          <p className="text-gray-muted text-[10px]">Telecaller</p>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-slate hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut size={15} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-offwhite flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-56 bg-white border-r border-gray-light flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-navy/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 w-56 bg-white h-full shadow-xl">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-light px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-navy rounded-lg hover:bg-offwhite"
            >
              <Menu size={20} />
            </button>
            <div>
              <p className="text-navy font-bold text-sm">
                {NAV.find((n) => n.href === pathname)?.label ?? "CRM"}
              </p>
              <p className="text-gray-muted text-xs hidden sm:block">
                {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+917491925047" className="flex items-center gap-1.5 px-3 py-2 bg-teal text-white text-xs font-semibold rounded-lg">
              <Phone size={13} /> Call Patient
            </a>
            <button className="w-9 h-9 flex items-center justify-center text-slate hover:text-navy rounded-lg hover:bg-offwhite relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal rounded-full" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
