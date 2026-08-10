import type { Metadata } from "next";
import Link from "next/link";
import { DIET_DATA } from "@/data/diet-data";
import { DOCTOR } from "@/lib/constants";
import { ArrowRight, Download, Leaf, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Diet Charts (Hindi) — Free Download | Dr. Akhilesh Yadav Ranchi",
  description:
    "Free diet charts in Hindi for fatty liver, jaundice, acidity, IBS, pancreatitis, and more. Download PDF diet guides by Dr. Akhilesh Yadav, DM Gastroenterologist, Ranchi.",
  alternates: { canonical: "https://drakhileshgastro.com/diet" },
  openGraph: {
    title: "Free Diet Charts Hindi | Dr. Akhilesh Yadav Gastro Ranchi",
    description: "Download free Hindi diet charts for liver disease, acidity, IBS and more from Dr. Akhilesh Yadav.",
    url: "https://drakhileshgastro.com/diet",
    type: "website",
  },
};

export default function DietHubPage() {
  return (
    <main style={{ background: "#FAFDF7", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1A2E1A 0%, #27AE60 100%)",
        padding: "60px 20px 48px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.15)", padding: "6px 14px",
            borderRadius: 99, fontSize: 12, color: "#bbf7d0", fontWeight: 700,
            marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            <Leaf size={13} /> Free Diet Charts — Hindi
          </div>
          <h1 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, margin: "0 0 16px" }}>
            Diet Charts by Dr. Akhilesh Yadav
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: "0 0 24px" }}>
            Khane se hi zyada bimaariyaan theek hoti hain. Neeche se apni bimari ka
            free diet chart download karein — PDF format mein, Hindi mein.
          </p>
          <p style={{ fontSize: 14, color: "#bbf7d0", fontStyle: "italic" }}>
            All diet charts reviewed by Dr. Akhilesh Yadav, DM Gastroenterology, Orchid Medical Centre, Ranchi
          </p>
        </div>
      </section>

      {/* Diet cards grid */}
      <section style={{ padding: "48px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontWeight: 800, fontSize: 22, color: "#1A2E1A", textAlign: "center", margin: "0 0 8px" }}>
          Choose Your Diet Chart
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", fontSize: 14, margin: "0 0 36px" }}>
          Apni bimari chun kar free diet chart download karein
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {DIET_DATA.map(diet => (
            <Link
              key={diet.slug}
              href={`/diet/${diet.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "#fff",
                borderRadius: 18,
                border: "1px solid #e2e8f0",
                padding: "24px",
                cursor: "pointer",
                transition: "box-shadow 0.15s ease, transform 0.15s ease",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 30px rgba(39,174,96,0.15)";
                  el.style.transform = "translateY(-2px)";
                  el.style.borderColor = "#27AE60";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "";
                  el.style.transform = "";
                  el.style.borderColor = "#e2e8f0";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                  <div>
                    <span style={{
                      fontSize: 10, fontWeight: 800, textTransform: "uppercase",
                      letterSpacing: "0.08em", color: "#27AE60", marginBottom: 6, display: "block",
                    }}>
                      Free Diet Chart
                    </span>
                    <h3 style={{ fontWeight: 800, fontSize: 16, color: "#0f172a", margin: 0, lineHeight: 1.3 }}>
                      {diet.titleEn}
                    </h3>
                  </div>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: "#f0fdf4",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Download size={16} style={{ color: "#27AE60" }} />
                  </div>
                </div>

                <p style={{ fontSize: 13, color: "#4b5563", margin: 0, lineHeight: 1.6 }}>
                  {diet.heroLineHi}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["Kya Khayein", "Kya Na Khayein", "Tips"].map(tag => (
                    <span key={tag} style={{
                      fontSize: 10, background: "#f0fdf4", color: "#27AE60",
                      padding: "3px 8px", borderRadius: 99, fontWeight: 700,
                    }}>{tag}</span>
                  ))}
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: 6, color: "#27AE60",
                  fontWeight: 700, fontSize: 13, marginTop: 4,
                }}>
                  Download Free Chart <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <section style={{ background: "#1A2E1A", padding: "48px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: "#fff", margin: "0 0 12px" }}>
            Diet se zyada kuch chahiye?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, margin: "0 0 24px" }}>
            Personal diet advice + treatment ke liye Dr. Akhilesh Yadav se milein.
          </p>
          <a
            href={`tel:${DOCTOR.phone}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#27AE60", color: "#fff", padding: "14px 28px",
              borderRadius: 50, fontWeight: 700, fontSize: 15, textDecoration: "none",
            }}
          >
            <Phone size={18} /> {DOCTOR.phone} — Book Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
