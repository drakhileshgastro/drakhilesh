"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Eye, CheckCircle, Globe, FileText, Phone, Search, Filter } from "lucide-react";

// ── All ~80 website URLs (Phase 1 + Phase 2 architecture) ───────────────────

const CORE_PAGES = [
  { title: "Homepage",               url: "/",                   desc: "Hero, symptoms grid, about teaser, reviews, appointment card", seo: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav DM", status: "live", priority: "High",   hasDesc: true, hasSchema: true,  hasCanonical: true },
  { title: "About Doctor",           url: "/about",              desc: "Bio, education, DM Gastro journey, clinic photos, timeline", seo: "About Dr. Akhilesh Yadav – DM Gastroenterology Ranchi",      status: "live", priority: "High",   hasDesc: true, hasSchema: true,  hasCanonical: true },
  { title: "Book Appointment",       url: "/book",               desc: "Booking form + clinic info. Google Ads landing page.",       seo: "Book Appointment – Dr. Akhilesh Yadav Gastroenterologist",   status: "live", priority: "High",   hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Conditions Hub",         url: "/conditions",         desc: "Grid of all 15 gastro conditions with search + filter",      seo: "Gastroenterology Conditions Ranchi | Dr. Akhilesh Yadav",     status: "live", priority: "High",   hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Blog Listing",           url: "/blog",               desc: "All health articles, filterable by category",               seo: "Health Blog in Hindi – Gastro Tips | Dr. Akhilesh Yadav",    status: "live", priority: "Medium", hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Contact",                url: "/contact",            desc: "Contact form, map, directions from 8 districts",            seo: "Contact Dr. Akhilesh Yadav – Gastroenterologist Ranchi",      status: "live", priority: "Low",    hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Symptoms Hub",           url: "/symptoms",           desc: "20 symptom cards with Hindi names + when to see doctor",    seo: "Stomach Symptoms Guide Hindi | Dr. Akhilesh Ranchi",          status: "live", priority: "High",   hasDesc: true, hasSchema: false, hasCanonical: true },
];

type PageEntry = { slug: string; title: string; keyword: string; type?: string; status?: string };

const CONDITIONS_PAGES: PageEntry[] = [
  { slug: "fatty-liver",         title: "Fatty Liver Treatment",         keyword: "fatty liver treatment Ranchi" },
  { slug: "jaundice",            title: "Jaundice (Piliya) Treatment",   keyword: "jaundice doctor Ranchi" },
  { slug: "liver-cirrhosis",     title: "Liver Cirrhosis",               keyword: "liver cirrhosis doctor Ranchi" },
  { slug: "hepatitis",           title: "Hepatitis B & C",               keyword: "hepatitis B C treatment Jharkhand" },
  { slug: "ibs",                 title: "IBS / Irritable Bowel",         keyword: "IBS treatment Ranchi" },
  { slug: "acid-reflux",         title: "Acid Reflux / GERD",            keyword: "acidity specialist Ranchi" },
  { slug: "gallstone",           title: "Gallstone (Pittashay ki Pathri)",keyword: "pittashay ki pathri doctor Ranchi" },
  { slug: "pancreatitis",        title: "Pancreatitis",                  keyword: "pancreatitis treatment Ranchi" },
  { slug: "liver-cancer",        title: "Liver Cancer",                  keyword: "liver cancer specialist Jharkhand" },
  { slug: "ulcerative-colitis",  title: "Ulcerative Colitis",            keyword: "colitis treatment Ranchi" },
  { slug: "abdominal-pain",      title: "Abdominal Pain",                keyword: "pet dard specialist Ranchi" },
  { slug: "liver-transplant",    title: "Liver Transplant Consultation", keyword: "liver transplant consultation Ranchi" },
  { slug: "peptic-ulcer",        title: "Peptic Ulcer",                  keyword: "peptic ulcer treatment Ranchi" },
  { slug: "gi-bleeding",         title: "GI Bleeding",                   keyword: "GI bleeding specialist Ranchi" },
  { slug: "h-pylori-dyspepsia",  title: "H. Pylori & Dyspepsia",         keyword: "H pylori treatment Ranchi" },
];

const PROCEDURES_PAGES: PageEntry[] = [
  { slug: "endoscopy",   title: "Endoscopy",        keyword: "endoscopy doctor Ranchi" },
  { slug: "colonoscopy", title: "Colonoscopy",       keyword: "colonoscopy Ranchi" },
  { slug: "ercp",        title: "ERCP",              keyword: "ERCP specialist Jharkhand" },
  { slug: "fibroscan",   title: "FibroScan",         keyword: "fibroscan liver test Ranchi" },
  { slug: "capsule-endoscopy", title: "Capsule Endoscopy", keyword: "capsule endoscopy Jharkhand" },
];

const SYMPTOMS_PAGES: PageEntry[] = [
  { slug: "pet-me-dard",          title: "Pait me Dard",          keyword: "pet dard kyon hota hai" },
  { slug: "piliya-ke-lakshan",     title: "Piliya ke Lakshan",      keyword: "piliya ke lakshan Hindi" },
  { slug: "liver-ki-bimari",       title: "Liver ki Bimari",        keyword: "liver ki bimari ke symptoms" },
  { slug: "kabj",                  title: "Kabj (Constipation)",    keyword: "kabj ka ilaj Ranchi" },
  { slug: "dast",                  title: "Dast (Diarrhoea)",       keyword: "dast ki bimari treatment Ranchi" },
  { slug: "ulti-maichli",          title: "Ulti aur Maichli",       keyword: "ulti band karne ka ilaj Ranchi" },
  { slug: "bhooke-na-lagna",       title: "Bhooke Na Lagna",        keyword: "appetite loss gastro doctor Ranchi" },
  { slug: "wajan-ghata",           title: "Achanak Wajan Ghata",    keyword: "unexplained weight loss doctor Ranchi" },
  { slug: "pet-phoolna",           title: "Pet Phoolna (Bloating)", keyword: "bloating gas treatment Ranchi" },
  { slug: "khana-hazam-na-hona",   title: "Khana Hazam Na Hona",    keyword: "indigestion specialist Ranchi" },
  { slug: "rectal-bleeding",       title: "Rectal Bleeding",        keyword: "blood in stool doctor Ranchi" },
  { slug: "gale-me-jalan",         title: "Gale me Jalan / GERD",   keyword: "acid reflux treatment Ranchi" },
  { slug: "sir-dard-pet-se",       title: "Sir Dard (Pet wali)",    keyword: "headache gastric connection doctor" },
  { slug: "aankhon-ka-peela",      title: "Aankhon ka Peela Hona",  keyword: "yellow eyes cause liver disease" },
  { slug: "thakaan",               title: "Zyada Thakaan (Liver)",  keyword: "fatigue liver disease doctor Ranchi" },
  { slug: "peshab-ka-rang",        title: "Peshab ka Rang",         keyword: "dark urine cause liver disease Ranchi" },
  { slug: "skin-khujli",           title: "Skin ki Khujli",         keyword: "skin itching liver problem Ranchi" },
  { slug: "gas-acidity",           title: "Gas aur Acidity",        keyword: "gas acidity specialist Ranchi" },
  { slug: "moo-ka-swad",           title: "Moo mein Khadwapan",     keyword: "bitter taste mouth liver doctor Ranchi" },
  { slug: "paon-ki-sujan",         title: "Paon ki Sujan",          keyword: "ankle swelling liver disease Ranchi" },
];

const DIET_PAGES: PageEntry[] = [
  { slug: "fatty-liver-diet",      title: "Fatty Liver Diet Chart",   keyword: "fatty liver diet Hindi" },
  { slug: "piliya-diet",           title: "Piliya me Kya Khaye",      keyword: "jaundice diet chart Hindi" },
  { slug: "ibs-diet",              title: "IBS Diet Plan Hindi",       keyword: "IBS diet plan Hindi" },
  { slug: "acidity-diet",          title: "Acidity me Kya Na Khaye",   keyword: "acidity me kya khaye Hindi" },
  { slug: "liver-cirrhosis-diet",  title: "Liver Cirrhosis Diet",      keyword: "liver cirrhosis diet chart Hindi" },
  { slug: "post-endoscopy-diet",   title: "Endoscopy ke Baad Diet",    keyword: "endoscopy ke baad kya khaye" },
  { slug: "pancreatitis-diet",     title: "Pancreatitis Diet Chart",   keyword: "pancreatitis diet Hindi" },
  { slug: "ulcerative-colitis-diet",title:"UC Diet Plan Hindi",        keyword: "ulcerative colitis diet Hindi" },
  { slug: "gallstone-diet",        title: "Pittashay me Kya Khaye",    keyword: "gallstone diet chart Hindi" },
  { slug: "liver-detox-tips",      title: "Liver Detox Hindi Tips",    keyword: "liver detox tips Hindi" },
];

const LOCATIONS_PAGES: PageEntry[] = [
  { slug: "ranchi",      title: "Gastroenterologist Ranchi",    keyword: "gastroenterologist Ranchi" },
  { slug: "jamshedpur",  title: "Gastro Doctor Jamshedpur",     keyword: "gastroenterologist Jamshedpur" },
  { slug: "bokaro",      title: "Gastro Doctor Bokaro",         keyword: "gastroenterologist Bokaro" },
  { slug: "dhanbad",     title: "Gastro Doctor Dhanbad",        keyword: "gastroenterologist Dhanbad" },
  { slug: "hazaribagh",  title: "Gastro Doctor Hazaribagh",     keyword: "gastroenterologist Hazaribagh" },
  { slug: "ramgarh",     title: "Gastro Doctor Ramgarh",        keyword: "gastroenterologist Ramgarh" },
  { slug: "giridih",     title: "Gastro Doctor Giridih",        keyword: "gastroenterologist Giridih" },
  { slug: "latehar",     title: "Gastro Doctor Latehar",        keyword: "gastroenterologist Latehar" },
];

const PATIENT_GUIDE_PAGES: PageEntry[] = [
  { slug: "before-endoscopy",       title: "Endoscopy se Pehle Guide",   keyword: "endoscopy preparation Hindi" },
  { slug: "before-colonoscopy",     title: "Colonoscopy Preparation",    keyword: "colonoscopy preparation Hindi" },
  { slug: "liver-biopsy-guide",     title: "Liver Biopsy Guide Hindi",   keyword: "liver biopsy kya hota hai" },
  { slug: "first-visit-checklist",  title: "Pehli Visit Checklist",      keyword: "gastro doctor first visit checklist" },
  { slug: "questions-to-ask-doctor",title: "Doctor se Ye Questions Puchhe",keyword: "questions to ask gastroenterologist" },
];

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
  { title: "Conditions (15)",    pages: CONDITIONS_PAGES,    basePath: "/conditions",   color: "#3b82f6" },
  { title: "Procedures (5)",     pages: PROCEDURES_PAGES,    basePath: "/procedures",   color: "#8b5cf6" },
  { title: "Symptoms (20)",      pages: SYMPTOMS_PAGES,      basePath: "/symptoms",     color: "#f97316" },
  { title: "Diet Pages (10)",    pages: DIET_PAGES,          basePath: "/diet",         color: "#22c55e" },
  { title: "Locations (8)",      pages: LOCATIONS_PAGES,     basePath: "/locations",    color: "#f59e0b" },
  { title: "Patient Guide (5)",  pages: PATIENT_GUIDE_PAGES, basePath: "/patient-guide",color: "#ec4899" },
];

const TOTAL = CORE_PAGES.length + SECTIONS.reduce((s, sec) => s + sec.pages.length, 0);

export default function WebsitePages() {
  const [search, setSearch]   = useState("");
  const [section, setSection] = useState("all");

  const totalPages = TOTAL;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Website Pages</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>{totalPages} total pages — all indexed</p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Search size={13} style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search pages…"
              style={{ paddingLeft: 28, paddingRight: 10, paddingTop: 7, paddingBottom: 7, border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff", width: 200 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#94a3b8" }}>
            <Filter size={12} />
            <select value={section} onChange={e => setSection(e.target.value)}
              style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
              <option value="all">All Sections</option>
              <option value="core">Core Pages</option>
              {SECTIONS.map(s => <option key={s.basePath} value={s.basePath}>{s.title}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Page count breakdown */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 8 }}>
        {[
          { label: "Core",         count: CORE_PAGES.length,         color: "#27AE60" },
          { label: "Conditions",   count: CONDITIONS_PAGES.length,    color: "#3b82f6" },
          { label: "Procedures",   count: PROCEDURES_PAGES.length,    color: "#8b5cf6" },
          { label: "Symptoms",     count: SYMPTOMS_PAGES.length,      color: "#f97316" },
          { label: "Diet",         count: DIET_PAGES.length,          color: "#22c55e" },
          { label: "Locations",    count: LOCATIONS_PAGES.length,     color: "#f59e0b" },
          { label: "Patient Guide",count: PATIENT_GUIDE_PAGES.length, color: "#ec4899" },
        ].map(s => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", margin: 0 }}>{s.count}</p>
              <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Core pages */}
      {(section === "all" || section === "core") && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid #e2e8f0", display: "flex", gap: 8, alignItems: "center" }}>
            <Globe size={15} style={{ color: "#27AE60" }} />
            <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>Core Pages ({CORE_PAGES.length})</h3>
            <span style={{ fontSize: 10, background: "#f0fdf4", color: "#22c55e", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>All Live</span>
          </div>
          {CORE_PAGES.filter(p => !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.url.includes(search)).map((page, i) => (
            <div key={page.url} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 18px", borderBottom: i < CORE_PAGES.length - 1 ? "1px solid #f1f5f9" : "none" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: page.status === "live" ? "#22c55e" : "#f59e0b", flexShrink: 0, marginTop: 5 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                  <p style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>{page.title}</p>
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

      {/* Section grids */}
      {SECTIONS.filter(s => section === "all" || section === s.basePath).map(sec => {
        const filtered = sec.pages.filter(p => !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.keyword.toLowerCase().includes(search.toLowerCase()));
        if (filtered.length === 0) return null;
        return (
          <div key={sec.basePath} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: sec.color }} />
                <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: 0 }}>{sec.title}</h3>
              </div>
              <span style={{ fontSize: 10, background: "#f0fdf4", color: "#22c55e", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>All Live</span>
            </div>
            <div style={{ padding: 14, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
              {filtered.map(page => (
                <Link key={page.slug} href={`${sec.basePath}/${page.slug}`} target="_blank"
                  style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 12, textDecoration: "none", transition: "border-color 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = sec.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0"; }}>
                  <CheckCircle size={13} style={{ color: sec.color, marginTop: 1, flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontWeight: 700, fontSize: 12, color: "#0f172a", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.title}</p>
                    <p style={{ fontSize: 10, color: "#94a3b8", margin: "2px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.keyword}</p>
                    <code style={{ fontSize: 9, color: "#27AE60" }}>{sec.basePath}/{page.slug}</code>
                  </div>
                  <ExternalLink size={10} style={{ color: "#cbd5e1", flexShrink: 0, marginLeft: "auto" }} />
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      {/* Internal pages */}
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
    </div>
  );
}
