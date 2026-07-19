"use client";

import Link from "next/link";
import { ExternalLink, Eye, CheckCircle, Globe, FileText, Phone } from "lucide-react";

const PAGES = [
  { title: "Home Page", url: "/", desc: "Hero, services, about, reviews, conditions", seo: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav DM", status: "live", priority: "High", hasDesc: true, hasSchema: true, hasCanonical: true },
  { title: "About Doctor", url: "/about", desc: "Bio, education, specializations, clinic photos", seo: "About Dr. Akhilesh Yadav – DM Gastroenterology Ranchi", status: "live", priority: "Medium", hasDesc: true, hasSchema: true, hasCanonical: true },
  { title: "Book Appointment", url: "/book", desc: "Full booking form + clinic info. Used in Google Ads.", seo: "Book Appointment – Dr. Akhilesh Yadav Gastroenterologist Ranchi", status: "live", priority: "High", hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Services Overview", url: "/conditions", desc: "Grid of all 15 service cards", seo: "Gastroenterology Services Ranchi | Dr. Akhilesh Yadav", status: "live", priority: "High", hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Blog", url: "/blog", desc: "All health articles listing", seo: "Health Blog – Gastro Tips in Hindi | Dr. Akhilesh Yadav", status: "live", priority: "Medium", hasDesc: true, hasSchema: false, hasCanonical: true },
  { title: "Contact", url: "/contact", desc: "Contact form, map, directions from 8 districts", seo: "Contact Dr. Akhilesh Yadav – Gastroenterologist Ranchi", status: "live", priority: "Low", hasDesc: true, hasSchema: false, hasCanonical: true },
];

function SeoScore({ seo, hasDesc, hasSchema, hasCanonical }: { seo: string; hasDesc: boolean; hasSchema: boolean; hasCanonical: boolean }) {
  const tLen = seo.length;
  const titleOk = tLen >= 50 && tLen <= 65;
  const checks = [
    { label: `T:${tLen}`, ok: titleOk, tip: titleOk ? "Title length OK" : `Title ${tLen} chars — aim 50–65` },
    { label: "D", ok: hasDesc, tip: hasDesc ? "Meta description present" : "No meta description" },
    { label: "C", ok: hasCanonical, tip: hasCanonical ? "Canonical tag set" : "Missing canonical" },
    { label: "S", ok: hasSchema, tip: hasSchema ? "Schema markup present" : "No schema markup" },
  ];
  const score = checks.filter((c) => c.ok).length;
  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      {checks.map((c) => (
        <span
          key={c.label}
          title={c.tip}
          className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-mono cursor-default ${
            c.ok ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
          }`}
        >
          {c.ok ? "✓" : "✗"} {c.label}
        </span>
      ))}
      <span className={`text-[9px] font-bold ml-1 ${score === 4 ? "text-green-600" : score >= 2 ? "text-amber-600" : "text-red-600"}`}>
        {score}/4
      </span>
    </div>
  );
}

const SERVICE_PAGES = [
  { slug: "fatty-liver", title: "Fatty Liver Treatment", keyword: "fatty liver treatment Ranchi", type: "conditions" },
  { slug: "jaundice", title: "Jaundice (Pilia)", keyword: "pilia doctor Ranchi", type: "conditions" },
  { slug: "liver-cirrhosis", title: "Liver Cirrhosis", keyword: "liver cirrhosis doctor Ranchi", type: "conditions" },
  { slug: "hepatitis", title: "Hepatitis B & C", keyword: "hepatitis B C treatment Jharkhand", type: "conditions" },
  { slug: "ibs", title: "IBS Treatment", keyword: "IBS treatment Ranchi", type: "conditions" },
  { slug: "acid-reflux", title: "Acid Reflux / GERD", keyword: "acidity specialist Ranchi", type: "conditions" },
  { slug: "gallstone", title: "Gallstone", keyword: "pittashay ki pathri doctor Ranchi", type: "conditions" },
  { slug: "pancreatitis", title: "Pancreatitis", keyword: "pancreatitis treatment Ranchi", type: "conditions" },
  { slug: "liver-cancer", title: "Liver Cancer", keyword: "liver cancer specialist Jharkhand", type: "conditions" },
  { slug: "ulcerative-colitis", title: "Ulcerative Colitis", keyword: "colitis treatment Ranchi", type: "conditions" },
  { slug: "abdominal-pain", title: "Abdominal Pain", keyword: "pet dard specialist Ranchi", type: "conditions" },
  { slug: "liver-transplant", title: "Liver Transplant", keyword: "liver transplant consultation Ranchi", type: "conditions" },
  { slug: "peptic-ulcer", title: "Peptic Ulcer", keyword: "peptic ulcer treatment Ranchi", type: "conditions" },
  { slug: "gi-bleeding", title: "GI Bleeding", keyword: "GI bleeding specialist Ranchi", type: "conditions" },
  { slug: "h-pylori-dyspepsia", title: "H. Pylori & Dyspepsia", keyword: "H pylori treatment Ranchi", type: "conditions" },
  { slug: "weight-loss", title: "Unexplained Weight Loss", keyword: "unexplained weight loss doctor Ranchi", type: "conditions" },
  // Procedures (live at /procedures/, not /conditions/)
  { slug: "endoscopy", title: "Endoscopy", keyword: "endoscopy doctor Ranchi", type: "procedures" },
  { slug: "colonoscopy", title: "Colonoscopy", keyword: "colonoscopy Ranchi", type: "procedures" },
  { slug: "ercp", title: "ERCP", keyword: "ERCP specialist Jharkhand", type: "procedures" },
];

export default function WebsitePages() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 font-bold text-lg">Website Pages</h2>
        <p className="text-gray-500 text-xs mt-0.5">All live pages — view and manage your website content</p>
      </div>

      {/* Main pages */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-2">
          <Globe size={16} className="text-gray-500" />
          <h3 className="text-gray-900 font-bold text-sm">Main Pages ({PAGES.length})</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {PAGES.map((page) => (
            <div key={page.url} className="flex items-start gap-4 px-5 py-4">
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${page.status === "live" ? "bg-green-500" : "bg-amber-400"}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-gray-900 font-bold text-sm">{page.title}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${page.priority === "High" ? "bg-red-100 text-red-700" : page.priority === "Medium" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-500"}`}>
                    {page.priority}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mb-1">{page.desc}</p>
                <p className="text-gray-700 text-[11px] font-mono">{page.url}</p>
                <p className="text-gray-500 text-[11px] mt-0.5 truncate max-w-sm">SEO: {page.seo}</p>
                <SeoScore seo={page.seo} hasDesc={page.hasDesc} hasSchema={page.hasSchema} hasCanonical={page.hasCanonical} />
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Link href={page.url} target="_blank"
                  className="flex items-center gap-1 px-2.5 py-1.5 border border-gray-200 text-gray-500 text-xs rounded-lg hover:border-gray-400 hover:text-gray-700 transition-colors">
                  <Eye size={12} /> View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service/Ads pages */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-gray-500" />
            <h3 className="text-gray-900 font-bold text-sm">Service Pages (Google Ads Landing) — {SERVICE_PAGES.length} pages</h3>
          </div>
          <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">All Live</span>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICE_PAGES.map((page) => (
            <Link key={page.slug} href={`/${page.type}/${page.slug}`} target="_blank"
              className="group flex items-start gap-2 p-3 border border-gray-200 rounded-xl hover:border-gray-400 transition-colors">
              <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-gray-900 font-semibold text-xs">{page.title}</p>
                <p className="text-gray-400 text-[10px] truncate">{page.keyword}</p>
                {page.type === "procedures" && (
                  <span className="text-[9px] text-blue-500 font-bold">→ /procedures/</span>
                )}
              </div>
              <ExternalLink size={11} className="text-gray-300 group-hover:text-gray-500 ml-auto flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Admin/CRM pages */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Phone size={15} className="text-gray-500" />
          <h3 className="text-gray-900 font-bold text-sm">Internal Pages (Not Indexed by Google)</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { url: "/admin/login", label: "Admin Login" },
            { url: "/admin", label: "Admin Dashboard" },
            { url: "/crm/login", label: "CRM Login" },
            { url: "/crm", label: "CRM Dashboard" },
            { url: "/crm/leads", label: "Leads Table" },
            { url: "/setup", label: "First-Time Setup" },
          ].map((p) => (
            <Link key={p.url} href={p.url} target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 bg-white rounded-xl text-xs text-gray-500 hover:border-gray-700 hover:text-gray-900 transition-colors">
              <ExternalLink size={10} /> {p.label}
            </Link>
          ))}
        </div>
        <p className="text-gray-400 text-[11px] mt-3">These pages are blocked in robots.txt and have noindex meta tags.</p>
      </div>
    </div>
  );
}
