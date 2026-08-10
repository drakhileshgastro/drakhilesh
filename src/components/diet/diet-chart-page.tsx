"use client";

import { useState } from "react";
import Link from "next/link";
import { DietData } from "@/data/diet-data";
import { CheckCircle, XCircle, Download, Phone, ArrowRight, Leaf, Lock, ChevronLeft } from "lucide-react";

interface Props {
  diet: DietData;
}

function LeadCaptureForm({ diet }: { diet: DietData }) {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone]   = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [downloadType, setDownloadType] = useState<"pdf"|"whatsapp">("whatsapp");
  const [err, setErr]     = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/diet-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), slug: diet.slug, condition: diet.condition }),
      });
      const json = await res.json();
      if (!json.success) { setErr(json.error ?? "Something went wrong. Please try again."); return; }
      setDownloadUrl(json.downloadUrl);
      setDownloadType(json.type);
      setDone(true);
    } catch {
      setErr("Network error. Please check your connection and try again.");
    } finally { setLoading(false); }
  }

  if (done) {
    return (
      <div style={{
        background: "#f0fdf4", border: "2px solid #27AE60", borderRadius: 16,
        padding: "28px 24px", textAlign: "center",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%", background: "#27AE60",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px",
        }}>
          <CheckCircle size={28} style={{ color: "#fff" }} />
        </div>
        <h3 style={{ fontWeight: 800, fontSize: 18, color: "#1A2E1A", margin: "0 0 8px" }}>
          {downloadType === "pdf" ? "Your Chart is Ready!" : "WhatsApp pe milega!"}
        </h3>
        <p style={{ color: "#374151", fontSize: 14, margin: "0 0 20px", lineHeight: 1.6 }}>
          {downloadType === "pdf"
            ? "Click below to download your free diet chart PDF."
            : `${diet.titleHi} aapke WhatsApp par 2 minute mein bheja jaayega. Agar nahi aata toh call karein.`}
        </p>
        <a
          href={downloadUrl}
          target={downloadType === "whatsapp" ? "_blank" : "_self"}
          rel="noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: downloadType === "pdf" ? "#27AE60" : "#25D366",
            color: "#fff", padding: "14px 28px", borderRadius: 50,
            fontWeight: 700, fontSize: 15, textDecoration: "none",
          }}
        >
          {downloadType === "pdf" ? <><Download size={18} /> Download PDF</> : <><Phone size={18} /> Open WhatsApp</>}
        </a>
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #bbf7d0" }}>
          <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
            Personal diet consultation ke liye Dr. Akhilesh Yadav se milein →{" "}
            <a href="/book" style={{ color: "#27AE60", fontWeight: 700 }}>Book Appointment</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: "#fff", border: "2px solid #D97706", borderRadius: 16,
      padding: "24px", boxShadow: "0 4px 20px rgba(217,119,6,0.12)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <Lock size={14} style={{ color: "#D97706" }} />
        <span style={{ fontSize: 11, fontWeight: 800, color: "#D97706", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Free Download
        </span>
      </div>
      <h3 style={{ fontWeight: 800, fontSize: 17, color: "#1A2E1A", margin: "0 0 6px" }}>
        {diet.titleHi} — Free PDF Download
      </h3>
      <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 20px", lineHeight: 1.5 }}>
        Apna naam aur number dein, PDF turant aapke paas pahunch jaayega.
        Koi subscription ya payment nahi.
      </p>
      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Aapka Naam (Your Name) *"
          required
          style={{
            padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0",
            fontSize: 14, fontFamily: "inherit", outline: "none",
            transition: "border-color 0.15s",
          }}
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "#27AE60"; }}
          onBlur={e  => { (e.target as HTMLInputElement).style.borderColor = "#e2e8f0"; }}
        />
        <input
          value={phone}
          onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
          placeholder="Mobile Number (WhatsApp) *"
          required
          type="tel"
          inputMode="numeric"
          pattern="[0-9]{10}"
          style={{
            padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0",
            fontSize: 14, fontFamily: "inherit", outline: "none",
            transition: "border-color 0.15s",
          }}
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "#27AE60"; }}
          onBlur={e  => { (e.target as HTMLInputElement).style.borderColor = "#e2e8f0"; }}
        />
        {err && (
          <p style={{ color: "#ef4444", fontSize: 12, margin: 0, display: "flex", alignItems: "center", gap: 4 }}>
            <XCircle size={13} /> {err}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "13px 20px", background: "#D97706", color: "#fff", border: 0,
            borderRadius: 50, fontWeight: 800, fontSize: 15, cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.7 : 1, display: "flex", alignItems: "center",
            justifyContent: "center", gap: 8, transition: "opacity 0.15s",
          }}
        >
          {loading ? "Processing…" : <><Download size={17} /> Free Chart Download Karein</>}
        </button>
        <p style={{ fontSize: 10, color: "#94a3b8", textAlign: "center", margin: 0, lineHeight: 1.4 }}>
          Aapka number sirf iss chart ke liye use hoga. Koi spam nahi.
          Dr. Akhilesh Yadav clinic ki taraf se follow-up call ho sakti hai.
        </p>
      </form>
    </div>
  );
}

export default function DietChartPage({ diet }: Props) {
  return (
    <main style={{ background: "#FAFDF7", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ padding: "14px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <Link href="/diet" style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          color: "#64748b", fontSize: 12, textDecoration: "none", fontWeight: 600,
        }}>
          <ChevronLeft size={14} /> All Diet Charts
        </Link>
      </div>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1A2E1A 0%, #27AE60 100%)",
        padding: "40px 20px 40px",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.15)", padding: "5px 12px",
            borderRadius: 99, fontSize: 11, color: "#bbf7d0", fontWeight: 700,
            marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.06em",
          }}>
            <Leaf size={12} /> {diet.condition} Diet Guide
          </div>
          <h1 style={{ fontSize: "clamp(22px,4.5vw,34px)", fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>
            {diet.titleEn}
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: "0 0 6px" }}>
            {diet.heroLineHi}
          </p>
          <p style={{ fontSize: 12, color: "#bbf7d0", fontStyle: "italic" }}>
            Dr. Akhilesh Yadav, DM Gastroenterology · Orchid Medical Centre, Ranchi
          </p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "36px 20px 60px",
        display: "grid", gridTemplateColumns: "1fr min(360px, 100%)", gap: 32,
        alignItems: "start",
      }}>
        {/* Left: Diet content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Intro */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "20px 24px" }}>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.8, margin: 0 }}>
              <strong>Hindi:</strong> {diet.introHi}
            </p>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, margin: "10px 0 0", fontStyle: "italic" }}>
              {diet.intro}
            </p>
          </div>

          {/* Eat section */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{
              padding: "14px 20px", background: "#f0fdf4", borderBottom: "1px solid #bbf7d0",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <CheckCircle size={16} style={{ color: "#27AE60" }} />
              <h2 style={{ fontWeight: 800, fontSize: 15, color: "#1A2E1A", margin: 0 }}>
                {diet.eat.headingHi} — {diet.eat.heading}
              </h2>
            </div>
            <ul style={{ padding: "16px 20px 16px 20px", margin: 0, listStyle: "none" }}>
              {diet.eat.items.map((item, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  padding: "8px 0",
                  borderBottom: i < diet.eat.items.length - 1 ? "1px solid #f0fdf4" : "none",
                }}>
                  <CheckCircle size={14} style={{ color: "#27AE60", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: 13, color: "#1e3a1e", fontWeight: 600 }}>{item}</span>
                    {diet.eat.itemsHi[i] && (
                      <span style={{ fontSize: 12, color: "#64748b", display: "block", marginTop: 1 }}>
                        {diet.eat.itemsHi[i]}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Avoid section */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{
              padding: "14px 20px", background: "#fef2f2", borderBottom: "1px solid #fca5a5",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <XCircle size={16} style={{ color: "#ef4444" }} />
              <h2 style={{ fontWeight: 800, fontSize: 15, color: "#7f1d1d", margin: 0 }}>
                {diet.avoid.headingHi} — {diet.avoid.heading}
              </h2>
            </div>
            <ul style={{ padding: "16px 20px", margin: 0, listStyle: "none" }}>
              {diet.avoid.items.map((item, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  padding: "8px 0",
                  borderBottom: i < diet.avoid.items.length - 1 ? "1px solid #fff1f2" : "none",
                }}>
                  <XCircle size={14} style={{ color: "#ef4444", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: 13, color: "#1e293b", fontWeight: 600 }}>{item}</span>
                    {diet.avoid.itemsHi[i] && (
                      <span style={{ fontSize: 12, color: "#64748b", display: "block", marginTop: 1 }}>
                        {diet.avoid.itemsHi[i]}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tips section */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "20px 24px" }}>
            <h2 style={{ fontWeight: 800, fontSize: 15, color: "#1A2E1A", margin: "0 0 16px" }}>
              💡 Dr. Akhilesh ke Important Tips
            </h2>
            <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              {diet.tips.map((tip, i) => (
                <li key={i} style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>
                  {tip}
                  {diet.tipsHi[i] && (
                    <span style={{ fontSize: 12, color: "#64748b", display: "block", marginTop: 2, fontStyle: "italic" }}>
                      {diet.tipsHi[i]}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Disclaimer */}
          <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 12, padding: "14px 18px" }}>
            <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>
              <strong>Medical Disclaimer:</strong> Yeh diet chart sirf general guidance ke liye hai.
              Apni specific bimari aur health condition ke according personal diet plan ke liye
              Dr. Akhilesh Yadav se zaroor milein. Kisi bhi dawai ko khud se band ya change mat karein.
            </p>
          </div>

          {/* Related condition link */}
          {diet.relatedConditionSlug && (
            <Link
              href={`/conditions/${diet.relatedConditionSlug}`}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "14px 18px", background: "#fff", border: "1px solid #e2e8f0",
                borderRadius: 12, textDecoration: "none",
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 11, color: "#94a3b8", margin: 0, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Learn more
                </p>
                <p style={{ fontSize: 13, color: "#0f172a", margin: "2px 0 0", fontWeight: 700 }}>
                  {diet.condition} — Treatment & Information →
                </p>
              </div>
              <ArrowRight size={16} style={{ color: "#27AE60", flexShrink: 0 }} />
            </Link>
          )}
        </div>

        {/* Right: Lead capture + sticky CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 80 }}>
          <LeadCaptureForm diet={diet} />

          {/* Quick CTA */}
          <div style={{ background: "#1A2E1A", borderRadius: 16, padding: "20px 20px", textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: "0 0 12px", lineHeight: 1.5 }}>
              Diet ke saath treatment bhi chahiye? Dr. Akhilesh se milein.
            </p>
            <a
              href="tel:+917491925047"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                background: "#27AE60", color: "#fff", padding: "12px 20px",
                borderRadius: 50, fontWeight: 700, fontSize: 14, textDecoration: "none",
              }}
            >
              <Phone size={16} /> Call Now
            </a>
            <p style={{ fontSize: 11, color: "#4ade80", margin: "8px 0 0" }}>
              Mon–Sat · 10 AM – 2 PM · 5 PM – 8 PM
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
