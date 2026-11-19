"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Menu, X, Phone, MessageCircle, ChevronDown, MapPin, Clock,
  Flame, Wind, Droplet, TrendingDown, AlertTriangle, Activity, AlertCircle, Frown, RefreshCw, Eye,
  Shield, Heart, Sparkles, Search, Radio, Disc, Scissors, Compass, PlusCircle, HelpCircle,
  BookOpen, Utensils, Navigation, Video, HeartHandshake
} from "lucide-react";
import { cn } from "@/lib/cn";
import {
  DOCTOR,
  NAV_LINKS,
  SYMPTOMS_LIST,
  CONDITIONS_LIST,
  PROCEDURES_LIST,
  HEALTH_LIBRARY_LINKS,
  PATIENT_RESOURCE_LINKS,
} from "@/lib/constants";

const SYMPTOM_ICONS: Record<string, any> = {
  "stomach-pain": Activity,
  "gas-bloating": Wind,
  "acidity": Flame,
  "constipation": RefreshCw,
  "diarrhoea": Droplet,
  "vomiting": Frown,
  "blood-in-stool": AlertTriangle,
  "difficulty-swallowing": AlertCircle,
  "weight-loss": TrendingDown,
  "jaundice": Eye,
};

const SYMPTOM_TARGET_MAP: Record<string, string> = {
  "stomach-pain": "/conditions/abdominal-pain",
  "gas-bloating": "/conditions/ibs",
  "acidity": "/conditions/acid-reflux",
  "constipation": "/conditions/ibs",
  "diarrhoea": "/conditions/ibs",
  "vomiting": "/conditions/peptic-ulcer",
  "blood-in-stool": "/conditions/gi-bleeding",
  "difficulty-swallowing": "/procedures/endoscopy",
  "weight-loss": "/conditions/weight-loss",
  "jaundice": "/conditions/jaundice",
};

const CONDITION_ICONS: Record<string, any> = {
  "fatty-liver": Shield,
  "jaundice": Eye,
  "liver-cirrhosis": Heart,
  "hepatitis": Shield,
  "ibs": Wind,
  "acid-reflux": Flame,
  "peptic-ulcer": Flame,
  "gallstone": Sparkles,
  "gi-bleeding": AlertTriangle,
  "pancreatitis": Activity,
  "ulcerative-colitis": Sparkles,
  "abdominal-pain": Activity,
  "weight-loss": TrendingDown,
};

const PROCEDURE_ICONS: Record<string, any> = {
  "endoscopy": Eye,
  "colonoscopy": Search,
  "ercp": Activity,
  "eus": Radio,
  "enteroscopy": Disc,
  "gi-bleeding-treatment": PlusCircle,
};

type Dropdown = "conditions" | "procedures" | "guide" | null;

const GUIDE_LINKS = [
  { label: "Patient Guide & Prep", desc: "Daycare tests & first visit preparation", href: "/patient-guide", icon: BookOpen },
  { label: "Diet & Nutrition Charts", desc: "Indian food guidelines for liver & gut", href: "/diet", icon: Utensils },
  { label: "Outstation Travel Routes", desc: "Driving routes & train times to Ranchi", href: "/contact#routes", icon: Navigation },
  { label: "Patient FAQs", desc: "Common questions about endoscopy & OPD", href: "/faqs", icon: HelpCircle },
  { label: "Patient Success Stories", desc: "Real patient reviews & recovery", href: "/patient-stories", icon: HeartHandshake },
  { label: "Educational Videos", desc: "Dr. Akhilesh explains GI procedures", href: "/videos", icon: Video },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<Dropdown>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setTopBarVisible(y < 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  const openDropdown = (key: Dropdown) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const menuLinks = [
    { label: "Conditions & Symptoms", href: "/conditions", dropdown: "conditions" as const },
    { label: "Procedures", href: "/procedures", dropdown: "procedures" as const },
    { label: "Patient Guide", href: "/patient-guide", dropdown: "guide" as const },
    { label: "About Doctor", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Main Nav */}
      <div
        className={cn(
          "bg-white transition-all duration-300 border-b",
          scrolled ? "shadow-sm border-border" : "border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[80px] lg:h-[92px]">
            {/* Logo (+20% size) */}
            <Link href="/" className="flex items-center gap-3.5 flex-shrink-0 min-h-[52px]" onClick={() => setMobileOpen(false)}>
              <div className="w-[52px] h-[52px] bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white font-sans font-bold text-3xl leading-none">✚</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-forest font-display font-bold text-lg tracking-tight">{DOCTOR.name}</span>
                <span className="text-muted text-[11px] tracking-wider uppercase font-semibold font-sans mt-0.5">
                  DM Gastroenterology
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {menuLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => { if(dropdownTimeout.current) clearTimeout(dropdownTimeout.current); setActiveDropdown(link.dropdown as Dropdown); }}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors min-h-[44px] cursor-pointer font-display",
                        activeDropdown === link.dropdown
                          ? "text-primary bg-bg-sand"
                          : "text-forest hover:text-primary hover:bg-bg-sand/50"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.dropdown ? "rotate-180 text-primary" : ""
                        )}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl shadow-xl border border-border overflow-hidden transition-all duration-200",
                        link.dropdown === "conditions" ? "w-[560px]" : "w-[340px]",
                        activeDropdown === link.dropdown
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                      onMouseEnter={() => { if(dropdownTimeout.current) clearTimeout(dropdownTimeout.current); }}
                      onMouseLeave={closeDropdown}
                    >
                      <DropdownContent type={link.dropdown} />
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2.5 text-sm font-semibold text-forest hover:text-primary hover:bg-bg-sand/50 rounded-lg transition-colors min-h-[44px] flex items-center font-display"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop Primary Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 border border-primary/30 text-primary hover:bg-primary-50 rounded-xl font-semibold text-sm transition-colors font-display"
              >
                <Phone size={14} /> Call Now
              </a>
              <Link
                href="/book"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-sm transition-colors shadow-sm font-display"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center text-forest rounded-xl hover:bg-bg-sand transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-40 overflow-y-auto border-t border-border">
          <div className="px-4 pt-4 pb-28">
            {/* Quick CTAs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <a
                href={`tel:${DOCTOR.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 py-3.5 bg-bg-sand border border-border text-primary font-bold text-sm rounded-xl min-h-[50px]"
                onClick={() => setMobileOpen(false)}
              >
                <Phone size={16} /> Call Now
              </a>
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold text-sm rounded-xl min-h-[50px]"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-1">
              {menuLinks.map((link) => (
                <div key={link.href} className="border-b border-border-light last:border-0 pb-2">
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 text-base font-bold text-forest font-display"
                    onClick={() => {
                      if (!link.dropdown) setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <MobileDropdownContent type={link.dropdown} onClose={() => setMobileOpen(false)} />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

/* ── Dropdown Content ── */
function DropdownContent({ type }: { type: string }) {
  switch (type) {
    case "conditions":
      return (
        <div className="p-5">
          <div className="grid grid-cols-2 gap-5">
            {/* Column 1: Symptoms */}
            <div className="space-y-2 border-r border-border/60 pr-5">
              <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 px-1 font-sans">
                Common Symptoms (लक्षण)
              </p>
              <div className="space-y-0.5">
                {SYMPTOMS_LIST.slice(0, 6).map((s) => {
                  const IconComponent = SYMPTOM_ICONS[s.slug] || Activity;
                  const href = SYMPTOM_TARGET_MAP[s.slug] || "/conditions";
                  return (
                    <Link
                      key={s.slug}
                      href={href}
                      className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold text-forest hover:text-primary hover:bg-bg-sand rounded-xl transition-all font-sans"
                    >
                      <IconComponent size={14} className="text-primary/75 flex-shrink-0" />
                      <span>{s.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Conditions */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 px-1 font-sans">
                Conditions Treated (बीमारियां)
              </p>
              <div className="space-y-0.5">
                {CONDITIONS_LIST.slice(0, 6).map((c) => {
                  const IconComponent = CONDITION_ICONS[c.slug] || Shield;
                  return (
                    <Link
                      key={c.slug}
                      href={`/conditions/${c.slug}`}
                      className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold text-forest hover:text-primary hover:bg-bg-sand rounded-xl transition-all font-sans"
                    >
                      <IconComponent size={14} className="text-primary/75 flex-shrink-0" />
                      <span>{c.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href="/conditions"
            className="mt-4 flex items-center justify-center py-2 text-primary text-[10px] font-bold uppercase tracking-wider border border-border rounded-xl hover:bg-bg-sand transition-colors font-sans"
          >
            All Conditions & Symptoms →
          </Link>
        </div>
      );

    case "procedures":
      return (
        <div className="p-4 w-[340px]">
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-3 px-1 font-sans">Advanced Procedures</p>
          <div className="grid grid-cols-1 gap-0.5">
            {PROCEDURES_LIST.slice(0, 6).map((p) => {
              const IconComponent = PROCEDURE_ICONS[p.slug] || Search;
              return (
                <Link
                  key={p.slug}
                  href={`/procedures/${p.slug}`}
                  className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold text-forest hover:text-primary hover:bg-bg-sand rounded-xl transition-all font-sans"
                >
                  <IconComponent size={14} className="text-primary/75 flex-shrink-0" />
                  <span>{p.title}</span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/procedures"
            className="mt-3 flex items-center justify-center py-2 text-primary text-[10px] font-bold uppercase tracking-wider border border-border rounded-xl hover:bg-bg-sand transition-colors font-sans"
          >
            All Procedures →
          </Link>
        </div>
      );

    case "guide":
      return (
        <div className="p-4 w-[340px]">
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-3 px-1 font-sans">Patient Care & Resources</p>
          <div className="grid grid-cols-1 gap-0.5">
            {GUIDE_LINKS.map((g) => {
              const IconComponent = g.icon || BookOpen;
              return (
                <Link
                  key={g.href}
                  href={g.href}
                  className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold text-forest hover:text-primary hover:bg-bg-sand rounded-xl transition-all font-sans"
                >
                  <IconComponent size={14} className="text-primary/75 flex-shrink-0" />
                  <span>{g.label}</span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/patient-guide"
            className="mt-3 flex items-center justify-center py-2 text-primary text-[10px] font-bold uppercase tracking-wider border border-border rounded-xl hover:bg-bg-sand transition-colors font-sans"
          >
            Explore Patient Guide →
          </Link>
        </div>
      );

    default:
      return null;
  }
}

/* ── Mobile Dropdown Content ── */
function MobileDropdownContent({ type, onClose }: { type: string; onClose: () => void }) {
  if (type === "conditions") {
    return (
      <div className="bg-bg-sand/35 rounded-xl mx-2 my-2 p-3 border border-border/50 space-y-3">
        <div>
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5 px-1 font-sans">Common Symptoms</p>
          <div className="space-y-0.5">
            {SYMPTOMS_LIST.slice(0, 5).map((s) => {
              const IconComponent = SYMPTOM_ICONS[s.slug] || Activity;
              return (
                <Link
                  key={s.slug}
                  href={SYMPTOM_TARGET_MAP[s.slug] || "/conditions"}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs text-forest hover:text-primary rounded-lg transition-colors font-sans font-medium"
                  onClick={onClose}
                >
                  <IconComponent size={13} className="text-primary flex-shrink-0" />
                  <span>{s.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-border/40 pt-2">
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5 px-1 font-sans">Key Conditions</p>
          <div className="space-y-0.5">
            {CONDITIONS_LIST.slice(0, 5).map((c) => {
              const IconComponent = CONDITION_ICONS[c.slug] || Shield;
              return (
                <Link
                  key={c.slug}
                  href={`/conditions/${c.slug}`}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs text-forest hover:text-primary rounded-lg transition-colors font-sans font-medium"
                  onClick={onClose}
                >
                  <IconComponent size={13} className="text-primary flex-shrink-0" />
                  <span>{c.title}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          href="/conditions"
          className="block text-center py-2 text-[11px] font-bold text-primary bg-white rounded-lg border border-border/60 hover:bg-bg-sand transition-colors font-sans"
          onClick={onClose}
        >
          View All Conditions & Symptoms →
        </Link>
      </div>
    );
  }

  const items =
    type === "procedures"
      ? PROCEDURES_LIST.map((p) => ({ label: p.title, href: `/procedures/${p.slug}`, slug: p.slug, type: "procedure" as const }))
      : type === "guide"
      ? GUIDE_LINKS.map((g) => ({ label: g.label, href: g.href, slug: g.href, type: "guide" as const, icon: g.icon }))
      : [];

  return (
    <div className="bg-bg-sand/35 rounded-xl mx-2 my-2 overflow-hidden border border-border/50">
      {items.map((item, i) => {
        let IconComponent = HelpCircle;
        if (item.type === "procedure") IconComponent = PROCEDURE_ICONS[item.slug] || Search;
        else if (item.type === "guide" && item.icon) IconComponent = item.icon;

        return (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-2.5 px-4 py-3 text-xs text-forest hover:text-primary border-b border-border/30 last:border-0 transition-colors font-sans font-medium"
            onClick={onClose}
          >
            <IconComponent size={13} className="text-primary flex-shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
