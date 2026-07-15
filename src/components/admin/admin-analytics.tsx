"use client";

import { ExternalLink, BarChart2, Users, Globe, Smartphone } from "lucide-react";

const GA_ID = "G-ZYE92TKM0W";

export default function AdminAnalytics() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-gray-900 font-bold text-lg">Analytics</h2>
        <p className="text-gray-500 text-xs mt-0.5">Google Analytics 4 · {GA_ID}</p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "GA4 Dashboard", url: "https://analytics.google.com", icon: BarChart2, desc: "Sessions, users, events" },
          { label: "Search Console", url: "https://search.google.com/search-console", icon: Globe, desc: "Keywords & rankings" },
          { label: "Real-time Users", url: `https://analytics.google.com/analytics/web/#/realtime`, icon: Users, desc: "Live visitor count" },
          { label: "Mobile Report", url: "https://analytics.google.com", icon: Smartphone, desc: "Device breakdown" },
        ].map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
            className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-gray-400 transition-colors group">
            <link.icon size={20} className="text-gray-500 mb-3" />
            <p className="text-gray-900 font-bold text-sm">{link.label}</p>
            <p className="text-gray-400 text-xs mt-0.5">{link.desc}</p>
            <ExternalLink size={12} className="text-gray-400 mt-2 group-hover:text-gray-600 transition-colors" />
          </a>
        ))}
      </div>

      {/* Embedded GA note */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
        <BarChart2 size={32} className="text-gray-400 mx-auto mb-3" />
        <h3 className="text-gray-900 font-bold text-base mb-2">Full Analytics in Google Analytics</h3>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed mb-4">
          All website analytics are tracked via GA4 ({GA_ID}). Open Google Analytics to see sessions, page views, top cities, devices, and conversion events (form submissions, WhatsApp clicks, call clicks).
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white font-semibold text-sm rounded-xl hover:bg-gray-800 transition-colors">
            <ExternalLink size={14} /> Open Google Analytics
          </a>
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-gray-200 text-gray-500 font-semibold text-sm rounded-xl hover:border-gray-700 hover:text-gray-900 transition-colors">
            <ExternalLink size={14} /> Search Console
          </a>
        </div>
      </div>

      {/* Events tracked */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <h3 className="text-gray-900 font-bold text-sm mb-4">Events Being Tracked</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { event: "form_submit", desc: "Booking form submissions" },
            { event: "page_view", desc: "All page visits" },
            { event: "whatsapp_click", desc: "WhatsApp float clicks" },
            { event: "call_click", desc: "Call button clicks" },
            { event: "chatbot_open", desc: "Chatbot widget opened" },
            { event: "blog_read", desc: "Blog article views" },
          ].map((e) => (
            <div key={e.event} className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-900 font-mono text-xs font-bold">{e.event}</p>
              <p className="text-gray-400 text-[11px] mt-0.5">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
