"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  LayoutDashboard, Users, IndianRupee, FileText,
  BarChart2, Settings, LogOut, Menu, Stethoscope, UserCog, Globe, Phone
} from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "All Leads", icon: Users },
  { href: "/admin/revenue", label: "Revenue", icon: IndianRupee },
  { href: "/admin/blog", label: "Blog CMS", icon: FileText },
  { href: "/admin/users", label: "User Management", icon: UserCog },
  { href: "/admin/pages", label: "Website Pages", icon: Globe },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

// 4 key screens for the doctor on mobile
const BOTTOM_NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/revenue", label: "Revenue", icon: IndianRupee },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
];

function isActive(pathname: string, href: string, exact?: boolean) {
  return exact ? pathname === href : pathname.startsWith(href);
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

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="px-4 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Stethoscope size={18} className="text-teal" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Admin Panel</p>
            <p className="text-gray-muted text-[10px]">Dr. Akhilesh Gastro</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {NAV.map((item) => {
          const active = isActive(pathname, item.href, item.exact);
          return (
            <Link key={item.href} href={item.href} onClick={() => setSidebarOpen(false)}
              className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                active ? "bg-teal/10 text-teal" : "text-gray-muted hover:bg-white/5 hover:text-white"
              )}>
              <item.icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/10 space-y-0.5">
        <div className="px-3 py-2">
          <p className="text-white text-xs font-semibold truncate">{userEmail}</p>
          <p className="text-gray-muted text-[10px]">Doctor · Admin</p>
        </div>
        <Link href="/" className="flex items-center gap-2 px-3 py-2 text-xs text-gray-muted hover:text-white hover:bg-white/5 rounded-xl transition-colors">
          ← View Website
        </Link>
        <Link href="/crm" className="flex items-center gap-2 px-3 py-2 text-xs text-gray-muted hover:text-teal hover:bg-white/5 rounded-xl transition-colors">
          <Phone size={13} /> Telecaller CRM →
        </Link>
        <button onClick={logout}
          className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-muted hover:text-red-400 hover:bg-white/5 transition-colors rounded-xl">
          <LogOut size={13} /> Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-navy flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-56 bg-navy/80 border-r border-white/10 flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10 w-56 bg-navy h-full shadow-xl">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-navy/50 border-b border-white/10 px-4 py-3 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-gray-muted rounded-lg hover:bg-white/5">
              <Menu size={20} />
            </button>
            <p className="text-white font-bold text-sm">
              {NAV.find((n) => isActive(pathname, n.href, n.exact))?.label ?? "Admin"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/crm" className="hidden sm:flex px-3 py-1.5 border border-white/10 text-gray-muted text-xs rounded-lg hover:text-white hover:border-white/30 transition-colors items-center gap-1.5">
              <Phone size={12} /> CRM View
            </Link>
          </div>
        </header>

        {/* Page content — bottom padding on mobile for bottom nav */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 pb-20 lg:pb-6">
          {children}
        </main>
      </div>

      {/* Mobile bottom navigation for doctor */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy border-t border-white/10 flex">
        {BOTTOM_NAV.map((item) => {
          const active = isActive(pathname, item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-center transition-colors",
                active ? "text-teal" : "text-gray-muted"
              )}
            >
              <item.icon size={20} strokeWidth={active ? 2.5 : 1.8} />
              <span className={cn("text-[10px] font-semibold leading-none", active ? "text-teal" : "text-gray-muted")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
