"use client";

import { useState, useEffect } from "react";
import { X, Phone, CheckCircle2 } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit-intent-shown")) return;

    let triggered = false;
    const readyAt = Date.now() + 30000; // Only trigger after 30s on page

    function onMouseLeave(e: MouseEvent) {
      if (triggered || Date.now() < readyAt) return;
      if (e.clientY <= 5) {
        triggered = true;
        setShow(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    }

    // Mobile: show after 60s of inactivity instead of mouseleave
    const mobileTimer = setTimeout(() => {
      if (triggered) return;
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        triggered = true;
        setShow(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    }, 60000);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || phone.length < 10) return;
    setSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name: name,
          patient_phone: phone,
          patient_city: "—",
          condition: "General Inquiry",
          source: "Exit Intent Popup",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // Don't punish user for network error
    } finally {
      setSubmitting(false);
    }
  }

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) setShow(false); }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 relative">
        <button
          onClick={() => setShow(false)}
          aria-label="Close"
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-muted hover:text-forest transition-colors"
        >
          <X size={14} />
        </button>

        {submitted ? (
          <div className="text-center py-4 space-y-3">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={26} className="text-primary" />
            </div>
            <h3 className="text-forest font-display font-bold text-lg">We'll call you soon!</h3>
            <p className="text-muted text-sm font-hindi">हमारी टीम 2 घंटे में आपसे संपर्क करेगी।</p>
            <a
              href={`https://wa.me/${DOCTOR.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-primary font-sans font-semibold"
            >
              WhatsApp us instead →
            </a>
          </div>
        ) : (
          <>
            <div className="text-center mb-5">
              <div className="text-3xl mb-2">🙏</div>
              <h3 className="text-forest font-display font-bold text-xl leading-tight">
                Before you leave...
              </h3>
              <p className="text-muted text-sm font-hindi mt-2 leading-relaxed">
                Free callback within 2 hours by Dr. Akhilesh की team।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name / आपका नाम"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 h-11 border border-border/80 rounded-xl text-forest text-sm focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-muted/60"
              />
              <div className="relative">
                <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
                <input
                  type="tel"
                  placeholder="Mobile Number / मोबाइल"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  required
                  minLength={10}
                  className="w-full pl-10 pr-4 h-11 border border-border/80 rounded-xl text-forest text-sm focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-muted/60"
                />
              </div>
              <button
                type="submit"
                disabled={submitting || phone.length < 10 || !name.trim()}
                className="w-full h-11 bg-primary text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Get Free Callback"}
              </button>
            </form>

            <p className="text-center text-[10px] text-muted font-sans mt-3">
              No spam. Your number is only used for this callback.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
