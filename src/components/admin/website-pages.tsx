"use client";

import Link from "next/link";
import { ExternalLink, Eye, CheckCircle, Globe, FileText, Phone } from "lucide-react";

const PAGES = [
  { title: "Home Page", url: "/", desc: "Hero, services, about, reviews, conditions", seo: "Best Gastroenterologist in Ranchi", status: "live", priority: "High" },
  { title: "About Doctor", url: "/about", desc: "Bio, education, specializations, clinic photos", seo: "About Dr. Akhilesh Yadav DM Gastroenterology", status: "live", priority: "Medium" },
  { title: "Book Appointment", url: "/book", desc: "Full booking form + clinic info. Used in Google Ads.", seo: "Book Appointment Dr Akhilesh Yadav Ranchi", status: "live", priority: "High" },
  { title: "Services Overview", url: "/services", desc: "Grid of all 15 service cards", seo: "Gastroenterology Services Ranchi", status: "live", priority: "High" },
  { title: "Blog", url: "/blog", desc: "All health articles listing", seo: "Health Blog Dr Akhilesh Yadav", status: "live", priority: "Medium" },
  { title: "Contact", url: "/contact", desc: "Contact form, map, directions from 8 districts", seo: "Contact Gastroenterologist Ranchi", status: "live", priority: "Low" },
];

const SERVICE_PAGES = [
  { slug: "fatty-liver", title: "Fatty Liver Treatment", keyword: "fatty liver treatment Ranchi" },
  { slug: "jaundice", title: "Jaundice (Pilia)", keyword: "pilia doctor Ranchi" },
  { slug: "liver-cirrhosis", title: "Liver Cirrhosis", keyword: "liver cirrhosis doctor Ranchi" },
  { slug: "hepatitis", title: "Hepatitis B & C", keyword: "hepatitis B C treatment Jharkhand" },
  { slug: "ibs", title: "IBS Treatment", keyword: "IBS treatment Ranchi" },
  { slug: "acid-reflux", title: "Acid Reflux / GERD", keyword: "acidity specialist Ranchi" },
  { slug: "gallstone", title: "Gallstone", keyword: "pittashay ki pathri doctor Ranchi" },
  { slug: "endoscopy", title: "Endoscopy", keyword: "endoscopy doctor Ranchi" },
  { slug: "colonoscopy", title: "Colonoscopy", keyword: "colonoscopy Ranchi" },
  { slug: "ercp", title: "ERCP", keyword: "ERCP specialist Jharkhand" },
  { slug: "pancreatitis", title: "Pancreatitis", keyword: "pancreatitis treatment Ranchi" },
  { slug: "liver-cancer", title: "Liver Cancer", keyword: "liver cancer specialist Jharkhand" },
  { slug: "ulcerative-colitis", title: "Ulcerative Colitis", keyword: "colitis treatment Ranchi" },
  { slug: "abdominal-pain", title: "Abdominal Pain", keyword: "pet dard specialist Ranchi" },
  { slug: "liver-transplant", title: "Liver Transplant", keyword: "liver transplant consultation Ranchi" },
];

export default function WebsitePages() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-navy font-bold text-lg">Website Pages</h2>
        <p className="text-slate text-xs mt-0.5">All live pages — view and manage your website content</p>
      </div>

      {/* Main pages */}
      <div className="bg-white rounded-2xl border border-gray-light overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-light flex items-center gap-2">
          <Globe size={16} className="text-teal" />
          <h3 className="text-navy font-bold text-sm">Main Pages ({PAGES.length})</h3>
        </div>
        <div className="divide-y divide-gray-light">
          {PAGES.map((page) => (
            <div key={page.url} className="flex items-start gap-4 px-5 py-4">
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${page.status === "live" ? "bg-green-500" : "bg-amber-400"}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-navy font-bold text-sm">{page.title}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${page.priority === "High" ? "bg-red-100 text-red-700" : page.priority === "Medium" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-slate"}`}>
                    {page.priority}
                  </span>
                </div>
                <p className="text-gray-muted text-xs mb-1">{page.desc}</p>
                <p className="text-teal text-[11px] font-mono">{page.url}</p>
                <p className="text-slate text-[11px] mt-0.5">SEO: {page.seo}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Link href={page.url} target="_blank"
                  className="flex items-center gap-1 px-2.5 py-1.5 border border-gray-light text-slate text-xs rounded-lg hover:border-teal hover:text-teal transition-colors">
                  <Eye size={12} /> View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service/Ads pages */}
      <div className="bg-white rounded-2xl border border-gray-light overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-light flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-teal" />
            <h3 className="text-navy font-bold text-sm">Service Pages (Google Ads Landing) — {SERVICE_PAGES.length} pages</h3>
          </div>
          <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">All Live</span>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICE_PAGES.map((page) => (
            <Link key={page.slug} href={`/services/${page.slug}`} target="_blank"
              className="group flex items-start gap-2 p-3 border border-gray-light rounded-xl hover:border-teal transition-colors">
              <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-navy font-semibold text-xs">{page.title}</p>
                <p className="text-gray-muted text-[10px] truncate">{page.keyword}</p>
              </div>
              <ExternalLink size={11} className="text-gray-light group-hover:text-teal ml-auto flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Admin/CRM pages */}
      <div className="bg-offwhite rounded-2xl border border-gray-light p-5">
        <div className="flex items-center gap-2 mb-3">
          <Phone size={15} className="text-slate" />
          <h3 className="text-navy font-bold text-sm">Internal Pages (Not Indexed by Google)</h3>
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
              className="flex items-center gap-1.5 px-3 py-2 border border-gray-light bg-white rounded-xl text-xs text-slate hover:border-navy hover:text-navy transition-colors">
              <ExternalLink size={10} /> {p.label}
            </Link>
          ))}
        </div>
        <p className="text-gray-muted text-[11px] mt-3">These pages are blocked in robots.txt and have noindex meta tags.</p>
      </div>
    </div>
  );
}
