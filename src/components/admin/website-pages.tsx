"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Eye, CheckCircle, Globe, FileText, Phone, Search, Filter, AlertTriangle, XCircle, HelpCircle } from "lucide-react";

// ── Status Legend ─────────────────────────────────────────────────────────────
// "live"     → route exists + slug in data → renders correctly
// "no-data"  → route exists but slug not in data file → will 404 at runtime
// "no-route" → no page.tsx built for this path → hard 404

type PageStatus = "live" | "no-data" | "no-route";

// ── Core pages (all confirmed live) ──────────────────────────────────────────
const CORE_PAGES = [
  { title: "Homepage",           url: "/",           desc: "Hero, symptoms grid, about teaser, reviews, appointment card", seo: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav DM", status: "live" as PageStatus, priority: "High",   hasDesc: true, hasSchema: true,  hasCanonical: true },
  { title: "About Doctor",       url: "/about",      desc: "Bio, education, DM Gastro journey, clinic photos, timeline",  seo: "About Dr. Akhilesh Yadav – DM Gastroenterology Ranchi",     status: "live" as PageStatus, priority: "High",   hasDesc: true, hasSchema: true,  hasCanonical: true },
  { title: "Book Appointment",   url: "/book",       desc: "Booking form + clinic info. Google Ads landing page.",        seo: "Book Appointment – Dr. Akhilesh Yadav Gastroenterologist",  status: "live" as PageStatus, priority: "High",   hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Conditions Hub",     url: "/conditions", desc: "Grid of all 15 gastro conditions with search + filter",      seo: "Gastroenterology Conditions Ranchi | Dr. Akhilesh Yadav",    status: "live" as PageStatus, priority: "High",   hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Blog Listing",       url: "/blog",       desc: "All health articles, filterable by category",                seo: "Health Blog in Hindi – Gastro Tips | Dr. Akhilesh Yadav",   status: "live" as PageStatus, priority: "Medium", hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Contact",            url: "/contact",    desc: "Contact form, map, directions from 8 districts",             seo: "Contact Dr. Akhilesh Yadav – Gastroenterologist Ranchi",     status: "live" as PageStatus, priority: "Low",    hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Symptoms Hub",       url: "/symptoms",   desc: "10 symptom cards (live) — 20 total planned",                seo: "Stomach Symptoms Guide Hindi | Dr. Akhilesh Ranchi",         status: "live" as PageStatus, priority: "High",   hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "FAQs",               url: "/faqs",       desc: "Frequently asked questions about gastro care",               seo: "Gastro FAQs Hindi | Dr. Akhilesh Yadav Ranchi",              status: "live" as PageStatus, priority: "Medium", hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Patient Stories",    url: "/patient-stories", desc: "Video testimonials from patients across Jharkhand",    seo: "Patient Testimonials | Dr. Akhilesh Gastro Ranchi",          status: "live" as PageStatus, priority: "Medium", hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Videos",             url: "/videos",     desc: "Educational health videos in Hindi",                         seo: "Health Videos Hindi | Dr. Akhilesh Yadav Gastro",           status: "live" as PageStatus, priority: "Low",    hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Privacy Policy",     url: "/privacy",    desc: "Privacy policy",                                             seo: "Privacy Policy | Dr. Akhilesh Yadav",                       status: "live" as PageStatus, priority: "Low",    hasDesc: false, hasSchema: false, hasCanonical: false },
  { title: "Terms of Use",       url: "/terms",      desc: "Terms and conditions",                                       seo: "Terms of Use | Dr. Akhilesh Yadav",                         status: "live" as PageStatus, priority: "Low",    hasDesc: false, hasSchema: false, hasCanonical: false },
];

type PageEntry = {
  slug:    string;
  title:   string;
  keyword: string;
  type?:   string;
  status:  PageStatus;
  note?:   string;
};

// ── Conditions: 15 slugs — all match services-data.ts → all live ──────────
const CONDITIONS_PAGES: PageEntry[] = [
  { slug: "fatty-liver",        title: "Fatty Liver Treatment",          keyword: "fatty liver treatment Ranchi",           status: "live" },
  { slug: "jaundice",           title: "Jaundice (Piliya) Treatment",    keyword: "jaundice doctor Ranchi",                 status: "live" },
  { slug: "liver-cirrhosis",    title: "Liver Cirrhosis",                keyword: "liver cirrhosis doctor Ranchi",          status: "live" },
  { slug: "hepatitis",          title: "Hepatitis B & C",                keyword: "hepatitis B C treatment Jharkhand",      status: "live" },
  { slug: "ibs",                title: "IBS / Irritable Bowel",          keyword: "IBS treatment Ranchi",                   status: "live" },
  { slug: "acid-reflux",        title: "Acid Reflux / GERD",             keyword: "acidity specialist Ranchi",              status: "live" },
  { slug: "gallstone",          title: "Gallstone (Pittashay ki Pathri)", keyword: "pittashay ki pathri doctor Ranchi",     status: "live" },
  { slug: "pancreatitis",       title: "Pancreatitis",                   keyword: "pancreatitis treatment Ranchi",          status: "live" },
  { slug: "liver-cancer",       title: "Liver Cancer",                   keyword: "liver cancer specialist Jharkhand",      status: "live" },
  { slug: "ulcerative-colitis", title: "Ulcerative Colitis",             keyword: "colitis treatment Ranchi",               status: "live" },
  { slug: "abdominal-pain",     title: "Abdominal Pain",                 keyword: "pet dard specialist Ranchi",             status: "live" },
  { slug: "liver-transplant",   title: "Liver Transplant Consultation",  keyword: "liver transplant consultation Ranchi",   status: "live" },
  { slug: "peptic-ulcer",       title: "Peptic Ulcer",                   keyword: "peptic ulcer treatment Ranchi",          status: "live" },
  { slug: "gi-bleeding",        title: "GI Bleeding",                    keyword: "GI bleeding specialist Ranchi",          status: "live" },
  { slug: "h-pylori-dyspepsia", title: "H. Pylori & Dyspepsia",          keyword: "H pylori treatment Ranchi",              status: "live" },
];

// ── Procedures: route exists — only endoscopy/colonoscopy/ercp in data ──────
const PROCEDURES_PAGES: PageEntry[] = [
  { slug: "endoscopy",          title: "Endoscopy",            keyword: "endoscopy doctor Ranchi",          status: "live" },
  { slug: "colonoscopy",        title: "Colonoscopy",           keyword: "colonoscopy Ranchi",               status: "live" },
  { slug: "ercp",               title: "ERCP",                  keyword: "ERCP specialist Jharkhand",        status: "live" },
  { slug: "fibroscan",          title: "FibroScan",             keyword: "fibroscan liver test Ranchi",      status: "no-data", note: "Slug not in procedures-data-v2.ts — add data to make live" },
  { slug: "liver-biopsy",       title: "Liver Biopsy",          keyword: "liver biopsy Ranchi",              status: "no-data", note: "Slug not in procedures-data-v2.ts — add data to make live" },
];

// ── Symptoms: 10 slugs match symptoms-data.ts, 10 planned ────────────────────
// REAL slugs from getAllSymptomSlugs():
// stomach-pain, gas-bloating, acidity, constipation, diarrhoea, vomiting,
// blood-in-stool, difficulty-swallowing, weight-loss, jaundice
const SYMPTOMS_PAGES: PageEntry[] = [
  { slug: "stomach-pain",          title: "Stomach Pain",           keyword: "pet dard kyon hota hai",           status: "live" },
  { slug: "gas-bloating",          title: "Gas & Bloating",          keyword: "gas acidity specialist Ranchi",    status: "live" },
  { slug: "acidity",               title: "Acidity / Heartburn",    keyword: "acidity specialist Ranchi",         status: "live" },
  { slug: "constipation",          title: "Constipation (Kabj)",    keyword: "kabj ka ilaj Ranchi",               status: "live" },
  { slug: "diarrhoea",             title: "Diarrhoea (Dast)",       keyword: "dast ki bimari treatment Ranchi",   status: "live" },
  { slug: "vomiting",              title: "Vomiting / Nausea",      keyword: "ulti band karne ka ilaj Ranchi",    status: "live" },
  { slug: "blood-in-stool",        title: "Blood in Stool",         keyword: "blood in stool doctor Ranchi",      status: "live" },
  { slug: "difficulty-swallowing", title: "Difficulty Swallowing",  keyword: "difficulty swallowing gastro Ranchi", status: "live" },
  { slug: "weight-loss",           title: "Unexplained Weight Loss", keyword: "unexplained weight loss doctor Ranchi", status: "live" },
  { slug: "jaundice",              title: "Yellow Eyes / Jaundice", keyword: "piliya ke lakshan Hindi",            status: "live" },
  // ── Planned (need to be added to symptoms-data.ts) ──────────────────────
  { slug: "loss-of-appetite",      title: "Loss of Appetite",       keyword: "appetite loss gastro doctor Ranchi", status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "indigestion",           title: "Indigestion",            keyword: "indigestion specialist Ranchi",       status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "black-stool",           title: "Black / Tarry Stool",    keyword: "black stool cause Ranchi",           status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "blood-vomiting",        title: "Blood in Vomit",         keyword: "blood vomiting doctor Ranchi",       status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "abdominal-swelling",    title: "Abdominal Swelling",     keyword: "pet phoolna ascites Ranchi",         status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "liver-swelling",        title: "Liver Swelling",         keyword: "liver swelling symptoms Hindi",      status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "fatigue",               title: "Extreme Fatigue",        keyword: "fatigue liver disease doctor Ranchi", status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "skin-itching",          title: "Skin Itching (Liver)",   keyword: "skin itching liver problem Ranchi",  status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "excessive-burping",     title: "Excessive Burping",      keyword: "excessive burping gastric Ranchi",   status: "no-data", note: "Add to symptoms-data.ts" },
  { slug: "burning-chest",         title: "Burning Chest / GERD",   keyword: "chest burning acid reflux Ranchi",   status: "no-data", note: "Add to symptoms-data.ts" },
];

// ── Diet pages: NO page.tsx exists → all no-route ────────────────────────────
const DIET_PAGES: PageEntry[] = [
  { slug: "fatty-liver",           title: "Fatty Liver Diet Chart",   keyword: "fatty liver diet Hindi",             status: "no-route", note: "Build /diet/page.tsx + /diet/[slug]/page.tsx" },
  { slug: "jaundice",              title: "Piliya me Kya Khaye",      keyword: "jaundice diet chart Hindi",           status: "no-route", note: "Build /diet route" },
  { slug: "ibs",                   title: "IBS Diet Plan Hindi",      keyword: "IBS diet plan Hindi",                 status: "no-route", note: "Build /diet route" },
  { slug: "gerd",                  title: "Acidity me Kya Na Khaye",  keyword: "acidity me kya khaye Hindi",          status: "no-route", note: "Build /diet route" },
  { slug: "liver-cirrhosis",       title: "Liver Cirrhosis Diet",     keyword: "liver cirrhosis diet chart Hindi",    status: "no-route", note: "Build /diet route" },
  { slug: "post-endoscopy",        title: "Endoscopy ke Baad Diet",   keyword: "endoscopy ke baad kya khaye",         status: "no-route", note: "Build /diet route" },
  { slug: "pancreatitis",          title: "Pancreatitis Diet Chart",  keyword: "pancreatitis diet Hindi",             status: "no-route", note: "Build /diet route" },
  { slug: "ulcerative-colitis",    title: "UC Diet Plan Hindi",       keyword: "ulcerative colitis diet Hindi",       status: "no-route", note: "Build /diet route" },
  { slug: "gallstone",             title: "Pittashay me Kya Khaye",   keyword: "gallstone diet chart Hindi",          status: "no-route", note: "Build /diet route" },
  { slug: "liver-detox",           title: "Liver Detox Hindi Tips",   keyword: "liver detox tips Hindi",              status: "no-route", note: "Build /diet route" },
];

// ── Locations: route /locations/[slug] exists, but ranchi & latehar not in data ─
const LOCATIONS_PAGES: PageEntry[] = [
  { slug: "ranchi",       title: "Gastroenterologist Ranchi",    keyword: "gastroenterologist Ranchi",       status: "no-data", note: "Add ranchi to locations-data.ts" },
  { slug: "jamshedpur",   title: "Gastro Doctor Jamshedpur",     keyword: "gastroenterologist Jamshedpur",   status: "live" },
  { slug: "bokaro",       title: "Gastro Doctor Bokaro",         keyword: "gastroenterologist Bokaro",       status: "live" },
  { slug: "dhanbad",      title: "Gastro Doctor Dhanbad",        keyword: "gastroenterologist Dhanbad",      status: "live" },
  { slug: "hazaribagh",   title: "Gastro Doctor Hazaribagh",     keyword: "gastroenterologist Hazaribagh",   status: "live" },
  { slug: "giridih",      title: "Gastro Doctor Giridih",        keyword: "gastroenterologist Giridih",      status: "live" },
  { slug: "deoghar",      title: "Gastro Doctor Deoghar",        keyword: "gastroenterologist Deoghar",      status: "live" },
  { slug: "palamu",       title: "Gastro Doctor Palamu",         keyword: "gastroenterologist Palamu",       status: "live" },
  { slug: "ramgarh",      title: "Gastro Doctor Ramgarh",        keyword: "gastroenterologist Ramgarh",      status: "live" },
  { slug: "latehar",      title: "Gastro Doctor Latehar",        keyword: "gastroenterologist Latehar",      status: "no-data", note: "Add latehar to locations-data.ts" },
  { slug: "chaibasa",     title: "Gastro Doctor Chaibasa",       keyword: "gastroenterologist Chaibasa",     status: "live" },
  { slug: "lohardaga",    title: "Gastro Doctor Lohardaga",      keyword: "gastroenterologist Lohardaga",    status: "live" },
  { slug: "simdega",      title: "Gastro Doctor Simdega",        keyword: "gastroenterologist Simdega",      status: "live" },
];

// ── Patient Guide: NO page.tsx exists → all no-route ─────────────────────────
const PATIENT_GUIDE_PAGES: PageEntry[] = [
  { slug: "before-endoscopy",        title: "Endoscopy se Pehle Guide",    keyword: "endoscopy preparation Hindi",              status: "no-route", note: "Build /patient-guide route" },
  { slug: "before-colonoscopy",      title: "Colonoscopy Preparation",     keyword: "colonoscopy preparation Hindi",             status: "no-route", note: "Build /patient-guide route" },
  { slug: "liver-biopsy-guide",      title: "Liver Biopsy Guide Hindi",    keyword: "liver biopsy kya hota hai",                 status: "no-route", note: "Build /patient-guide route" },
  { slug: "first-visit-checklist",   title: "Pehli Visit Checklist",       keyword: "gastro doctor first visit checklist",       status: "no-route", note: "Build /patient-guide route" },
  { slug: "questions-to-ask-doctor", title: "Doctor se Ye Questions Puchhe",keyword: "questions to ask gastroenterologist",      status: "no-route", note: "Build /patient-guide route" },
];

// ── Status UI helpers ─────────────────────────────────────────────────────────
function StatusBadge({ status, note }: { status: PageStatus; note?: string }) {
  const cfg = {
    live:     { bg: "#f0fdf4", color: "#22c55e", icon: <CheckCircle size={11} />, label: "Live" },
    "no-data":  { bg: "#fef3c7", color: "#d97706", icon: <AlertTriangle size={11} />, label: "No Data" },
    "no-route": { bg: "#fef2f2", color: "#ef4444", icon: <XCircle size={11} />,     label: "Not Built" },
  }[status];

  return (
    <span title={note}
      style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 99, background: cfg.bg, color: cfg.color, cursor: note ? "help" : "default" }}>
      {cfg.icon} {cfg.label}
    </span>
  );
}

function StatusDot({ status }: { status: PageStatus }) {
  const color = { live: "#22c55e", "no-data": "#f59e0b", "no-route": "#ef4444" }[status];
  return <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 5 }} />;
}

function SeoScore({ seo, hasDesc, hasSchema, hasCanonical }: { seo: string; hasDesc: boolean; hasSchema: boolean; hasCanonical: boolean }) {
  const tLen    = seo.length;
  const titleOk = tLen >= 50 && tLen <= 65;
  const score   = [titleOk, hasDesc, hasCanonical, hasSchema].filter(Boolean).length;
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", marginTop: 5 }}>
      {[
        { label: `T:${tLen}`, ok: titleOk },
        { label: "D",         ok: hasDesc },
        { label: "C",         ok: hasCanonical },
        { label: "S",         ok: hasSchema },
      ].map(c => (
        <span key={c.label} style={{ fontSize: 9, fontWeight: 700, padding: "2px 5px", borderRadius: 4, background: c.ok ? "#dcfce7" : "#fee2e2", color: c.ok ? "#15803d" : "#b91c1c", fontFamily: "monospace" }}>
          {c.ok ? "✓" : "✗"} {c.label}
        </span>
      ))}
      <span style={{ fontSize: 10, fontWeight: 800, color: score === 4 ? "#22c55e" : score >= 2 ? "#f59e0b" : "#ef4444" }}>{score}/4</span>
    </div>
  );
}

type Section = { title: string; pages: PageEntry[]; basePath: string; color: string };

const SECTIONS: Section[] = [
  { title: "Conditions",    pages: CONDITIONS_PAGES,    basePath: "/conditions",    color: "#3b82f6" },
  { title: "Procedures",    pages: PROCEDURES_PAGES,    basePath: "/procedures",    color: "#8b5cf6" },
  { title: "Symptoms",      pages: SYMPTOMS_PAGES,      basePath: "/symptoms",      color: "#f97316" },
  { title: "Diet Pages",    pages: DIET_PAGES,          basePath: "/diet",          color: "#22c55e" },
  { title: "Locations",     pages: LOCATIONS_PAGES,     basePath: "/locations",     color: "#f59e0b" },
  { title: "Patient Guide", pages: PATIENT_GUIDE_PAGES, basePath: "/patient-guide", color: "#ec4899" },
];

function sectionLiveCount(pages: PageEntry[]) {
  return pages.filter(p => p.status === "live").length;
}

const TOTAL_LIVE = CORE_PAGES.filter(p => p.status === "live").length
  + SECTIONS.reduce((s, sec) => s + sectionLiveCount(sec.pages), 0);

const TOTAL_PAGES = CORE_PAGES.length
  + SECTIONS.reduce((s, sec) => s + sec.pages.length, 0);

function SectionStatusBadge({ pages }: { pages: { status: PageStatus }[] }) {
  const live   = pages.filter(p => p.status === "live").length;
  const noData = pages.filter(p => p.status === "no-data").length;
  const noRoute= pages.filter(p => p.status === "no-route").length;
  const total  = pages.length;

  if (noRoute === total) return <span style={{ fontSize: 10, background: "#fef2f2", color: "#ef4444", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>0 / {total} Live — Route Not Built</span>;
  if (live === total)    return <span style={{ fontSize: 10, background: "#f0fdf4", color: "#22c55e", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>All Live ({total})</span>;
  return (
    <span style={{ fontSize: 10, background: "#fef3c7", color: "#d97706", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>
      {live}/{total} Live {noData > 0 ? `· ${noData} need data` : ""}{noRoute > 0 ? ` · ${noRoute} not built` : ""}
    </span>
  );
}

export default function WebsitePages() {
  const [search, setSearch]   = useState("");
  const [section, setSection] = useState("all");
  const [statusFilter, setStatusFilter] = useState<"all"|PageStatus>("all");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Website Pages</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>
            {TOTAL_LIVE} live of {TOTAL_PAGES} total planned pages
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ position: "relative" }}>
            <Search size={13} style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search pages…"
              style={{ paddingLeft: 28, paddingRight: 10, paddingTop: 7, paddingBottom: 7, border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff", width: 180 }} />
          </div>
          <select value={section} onChange={e => setSection(e.target.value)}
            style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
            <option value="all">All Sections</option>
            <option value="core">Core Pages</option>
            {SECTIONS.map(s => <option key={s.basePath} value={s.basePath}>{s.title}</option>)}
          </select>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as "all"|PageStatus)}
            style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
            <option value="all">All Status</option>
            <option value="live">✅ Live only</option>
            <option value="no-data">⚠️ No Data</option>
            <option value="no-route">❌ Not Built</option>
          </select>
        </div>
      </div>

      {/* Status legend + counts */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {[
          { label: "Core",          pages: CORE_PAGES.length,         live: CORE_PAGES.filter(p=>p.status==="live").length, color: "#27AE60" },
          { label: "Conditions",    pages: CONDITIONS_PAGES.length,   live: sectionLiveCount(CONDITIONS_PAGES),   color: "#3b82f6" },
          { label: "Procedures",    pages: PROCEDURES_PAGES.length,   live: sectionLiveCount(PROCEDURES_PAGES),   color: "#8b5cf6" },
          { label: "Symptoms",      pages: SYMPTOMS_PAGES.length,     live: sectionLiveCount(SYMPTOMS_PAGES),     color: "#f97316" },
          { label: "Diet",          pages: DIET_PAGES.length,         live: sectionLiveCount(DIET_PAGES),         color: "#22c55e" },
          { label: "Locations",     pages: LOCATIONS_PAGES.length,    live: sectionLiveCount(LOCATIONS_PAGES),    color: "#f59e0b" },
          { label: "Patient Guide", pages: PATIENT_GUIDE_PAGES.length,live: sectionLiveCount(PATIENT_GUIDE_PAGES),color: "#ec4899" },
        ].map(s => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, minWidth: 110 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#0f172a", margin: 0 }}>
                <span style={{ color: "#22c55e" }}>{s.live}</span>
                <span style={{ color: "#94a3b8", fontWeight: 500 }}>/{s.pages}</span>
              </p>
              <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>{s.label}</p>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div style={{ background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0", padding: "10px 14px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            { color: "#22c55e", label: "Live — route + data exist" },
            { color: "#f59e0b", label: "No Data — route exists, add to data file" },
            { color: "#ef4444", label: "Not Built — no page.tsx" },
          ].map(l => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.color, flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: "#64748b" }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Core pages */}
      {(section === "all" || section === "core") && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid #e2e8f0", display: "flex", gap: 8, alignItems: "center" }}>
            <Globe size={15} style={{ color: "#27AE60" }} />
            <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>Core Pages</h3>
            <SectionStatusBadge pages={CORE_PAGES} />
          </div>
          {CORE_PAGES
            .filter(p => {
              const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.url.includes(search);
              const matchStatus = statusFilter === "all" || p.status === statusFilter;
              return matchSearch && matchStatus;
            })
            .map((page, i, arr) => (
              <div key={page.url} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 18px", borderBottom: i < arr.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <StatusDot status={page.status} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2, flexWrap: "wrap" }}>
                    <p style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>{page.title}</p>
                    <StatusBadge status={page.status} />
                    <span style={{ fontSize: 9, padding: "2px 6px", borderRadius: 99, fontWeight: 700, background: page.priority === "High" ? "#fef2f2" : page.priority === "Medium" ? "#fffbeb" : "#f8fafc", color: page.priority === "High" ? "#dc2626" : page.priority === "Medium" ? "#d97706" : "#94a3b8" }}>{page.priority}</span>
                  </div>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: "2px 0" }}>{page.desc}</p>
                  <code style={{ fontSize: 10, color: "#374151", background: "#f8fafc", padding: "1px 6px", borderRadius: 4 }}>{page.url}</code>
                  <p style={{ fontSize: 10, color: "#64748b", margin: "4px 0 0", fontStyle: "italic" }}>{page.seo}</p>
                  <SeoScore seo={page.seo} hasDesc={page.hasDesc} hasSchema={page.hasSchema} hasCanonical={page.hasCanonical} />
                </div>
                <Link href={page.url} target="_blank"
                  style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#64748b", fontSize: 11, textDecoration: "none", flexShrink: 0 }}>
                  <Eye size={12} /> View
                </Link>
              </div>
          ))}
        </div>
      )}

      {/* Dynamic sections */}
      {SECTIONS.filter(s => section === "all" || section === s.basePath).map(sec => {
        const filtered = sec.pages.filter(p => {
          const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.keyword.toLowerCase().includes(search.toLowerCase());
          const matchStatus = statusFilter === "all" || p.status === statusFilter;
          return matchSearch && matchStatus;
        });
        if (filtered.length === 0) return null;

        return (
          <div key={sec.basePath} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: sec.color }} />
                <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>{sec.title} ({sec.pages.length})</h3>
              </div>
              <SectionStatusBadge pages={sec.pages} />
            </div>
            <div style={{ padding: 14, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 8 }}>
              {filtered.map(page => {
                const isLive = page.status === "live";
                const borderColor = isLive ? sec.color : page.status === "no-data" ? "#fbbf24" : "#fca5a5";
                return (
                  <div key={page.slug}
                    style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 12px", border: `1px solid ${isLive ? "#e2e8f0" : borderColor}`, borderRadius: 12, background: isLive ? "#fff" : page.status === "no-route" ? "#fef2f2" : "#fffbeb", position: "relative" }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: isLive ? "#22c55e" : page.status === "no-data" ? "#f59e0b" : "#ef4444", flexShrink: 0, marginTop: 3 }} />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                        <p style={{ fontWeight: 700, fontSize: 11, color: "#0f172a", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{page.title}</p>
                        <StatusBadge status={page.status} note={page.note} />
                      </div>
                      <p style={{ fontSize: 10, color: "#94a3b8", margin: "0 0 2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.keyword}</p>
                      <code style={{ fontSize: 9, color: isLive ? "#27AE60" : "#94a3b8" }}>{sec.basePath}/{page.slug}</code>
                      {page.note && <p style={{ fontSize: 9, color: page.status === "no-route" ? "#ef4444" : "#d97706", margin: "3px 0 0" }}>{page.note}</p>}
                    </div>
                    {isLive && (
                      <a href={`${sec.basePath}/${page.slug}`} target="_blank" rel="noreferrer"
                        style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                        <ExternalLink size={10} style={{ color: "#cbd5e1" }} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Internal / noindex pages */}
      {(section === "all") && (
        <div style={{ background: "#f8fafc", borderRadius: 16, border: "1px solid #e2e8f0", padding: "16px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Phone size={14} style={{ color: "#64748b" }} />
            <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>Internal Pages (noindex)</h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { url: "/admin/login",   label: "Admin Login" },
              { url: "/admin",         label: "Admin Dashboard" },
              { url: "/crm/login",     label: "CRM Login" },
              { url: "/crm",           label: "CRM Dashboard" },
              { url: "/crm/leads",     label: "Leads Table" },
              { url: "/setup",         label: "First-Time Setup" },
            ].map(p => (
              <Link key={p.url} href={p.url} target="_blank"
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 12px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 11, color: "#64748b", textDecoration: "none" }}>
                <ExternalLink size={10} /> {p.label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 10 }}>Blocked in robots.txt · noindex meta tag set</p>
        </div>
      )}

      {/* What to build next */}
      {(section === "all" || statusFilter === "all" || statusFilter === "no-route") && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #fca5a5", padding: "16px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <HelpCircle size={14} style={{ color: "#ef4444" }} />
            <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>Build Priority: Fix 404s</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { task: "Build /diet/page.tsx + /diet/[slug]/page.tsx + diet-data.ts", priority: "High", pages: 10, reason: "Lead magnet — gated diet chart downloads" },
              { task: "Build /patient-guide/[slug]/page.tsx", priority: "Medium", pages: 5, reason: "Patient education + pre-procedure guides" },
              { task: "Add 10 more slugs to symptoms-data.ts", priority: "Medium", pages: 10, reason: "Route exists, just needs data objects" },
              { task: "Add ranchi & latehar to locations-data.ts", priority: "High", pages: 2, reason: "Ranchi is primary market — needs location page urgently" },
              { task: "Add fibroscan & liver-biopsy to procedures-data-v2.ts", priority: "Medium", pages: 2, reason: "High-value procedure pages" },
            ].map(t => (
              <div key={t.task} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 99, background: t.priority === "High" ? "#fef2f2" : "#fef3c7", color: t.priority === "High" ? "#dc2626" : "#d97706", flexShrink: 0, marginTop: 1 }}>{t.priority}</span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#0f172a", margin: 0 }}>{t.task}</p>
                  <p style={{ fontSize: 11, color: "#64748b", margin: "2px 0 0" }}>{t.pages} pages · {t.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
