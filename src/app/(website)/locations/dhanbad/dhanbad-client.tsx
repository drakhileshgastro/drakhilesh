"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { 
  MapPin, Phone, Clock, MessageCircle, Navigation, Send, 
  CheckCircle2, Star, ShieldCheck, HeartHandshake, HelpCircle, 
  ArrowRight, ShieldAlert, Award, AlertCircle 
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/cn";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  message: z.string().min(5, "Please enter your symptom or query"),
});

type FormData = z.infer<typeof schema>;

const DHANBAD_FAQS = [
  {
    q: "How far is Orchid Medical Centre from Dhanbad?",
    a: "Orchid Medical Centre (Ranchi) is approximately 160 km from Dhanbad. It takes about 2.5 hours by car via NH-2 / NH-33, or about 3 hours via direct trains like Ranchi Shatabdi Express.",
  },
  {
    q: "Can I get Endoscopy/Colonoscopy tests done and return to Dhanbad on the same day?",
    a: "Yes! Diagnostic procedures are performed under light conscious sedation and take only 10–15 minutes. Patients can rest for an hour, collect their reports, and travel back to Dhanbad on the same day.",
  },
  {
    q: "Is an online consultation option available first?",
    a: "Yes. You can book an initial online consultation via WhatsApp to discuss your symptoms and test requirements with Dr. Akhilesh before travelling to Ranchi.",
  },
  {
    q: "Where is the clinic located in Ranchi?",
    a: "OPD consultation is at Orchid Medical Centre, HB Road, Plaza Chowk, Ranchi. The clinic has dedicated patient parking and wheelchair-friendly entrance facilities.",
  },
];

export default function DhanbadClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, main Dhanbad se bol raha hoon. Mujhe Dr. Akhilesh Yadav se consultation appointment book karna hai."
  )}`;

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name: data.name,
          patient_phone: data.phone,
          patient_city: "Dhanbad",
          condition: data.message.substring(0, 100),
          source: "Dhanbad Landing Page",
        }),
      });
      const result = await res.json();
      if (result.success) setSubmitted(true);
      else toast.error("Something went wrong. Please call us directly.");
    } catch {
      toast.error("Network error. Please call us or WhatsApp.");
    }
  }

  return (
    <article className="min-h-screen pb-16 sm:pb-0 bg-white">
      
      {/* Hero Banner */}
      <section className="bg-bg-sand/35 pt-12 pb-16 lg:py-20 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary/20 text-primary font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-sans">
                Dhanbad Special Care Route
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-forest leading-tight font-hindi">
                धनबाद के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज
              </h1>
              <p className="font-sans text-muted text-base leading-relaxed max-w-xl">
                Consult Ranchi's leading Gastroenterologist, <strong>Dr. Akhilesh Yadav (DM Gastroenterology)</strong>, at Orchid Medical Centre. Trusted, superspecialist care for stomach pain, liver cirrhosis, jaundice, acidity, and advanced diagnostic endoscopy.
              </p>
              
              <div className="flex flex-wrap gap-3 font-sans text-xs text-muted">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-primary" />
                  <span>DM Gastroenterology Degree</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-primary" />
                  <span>2.5 Hrs Route via NH-2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-accent fill-accent" />
                  <span>4.9 Google Rated Care</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${DOCTOR.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                >
                  <Phone size={13} /> Call {DOCTOR.phone}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl min-h-[48px]"
                >
                  <MessageCircle size={13} /> WhatsApp Direct
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full">
              <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-sm mx-auto border border-border/20">
                <img
                  src="/dr-akhilesh-improved.png"
                  alt="Dr. Akhilesh Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Stats Banner */}
      <section className="bg-bg-sand/20 border-b border-border/30 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans">
            <div>
              <span className="text-2xl sm:text-3xl font-display font-bold text-forest block">10+ Years</span>
              <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Clinical Experience</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-display font-bold text-forest block">4,000+</span>
              <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Patients Served</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-display font-bold text-forest block">2.5 Hours</span>
              <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Dhanbad Travel Time</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-display font-bold text-forest block">Painless</span>
              <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Sedated Endoscopies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Lead Form */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Why travel from Dhanbad block */}
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-forest leading-tight font-hindi">
                  धनबाद से रांची क्यों आएं? — Complete Patient Reassurance
                </h2>
                <p className="text-muted text-sm leading-relaxed font-sans">
                  Dhanbad and Ranchi are directly connected by excellent highways (NH-2 and NH-33) and multiple daily express trains. Since gastroenterology is a highly specialized field, consulting a qualified super-specialist (DM Gastroenterology) ensures you receive accurate diagnosis, preventing unnecessary surgery.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-bg-sand/15 border border-border/60 rounded-2xl p-5 space-y-2">
                    <h4 className="text-forest font-sans font-bold text-sm">Same-Day Test Reports</h4>
                    <p className="text-muted text-xs leading-relaxed font-sans">
                      Book diagnostic procedures like Endoscopy, Colonoscopy, or Liver Elastography and get comprehensive reports on the same day.
                    </p>
                  </div>
                  <div className="bg-bg-sand/15 border border-border/60 rounded-2xl p-5 space-y-2">
                    <h4 className="text-forest font-sans font-bold text-sm">Online Teleconsult First</h4>
                    <p className="text-muted text-xs leading-relaxed font-sans">
                      Start your treatment path from the comfort of Dhanbad. Discuss symptoms online and visit Ranchi only when physical procedures are necessary.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conditions Treated */}
              <div className="space-y-4 pt-6 border-t border-border/40">
                <h3 className="text-forest font-sans font-bold text-lg">Specialist Treatments Provided</h3>
                <div className="grid grid-cols-2 gap-3.5 text-xs text-forest font-sans font-semibold">
                  <div className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Fatty Liver Disease</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Liver Cirrhosis Care</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Jaundice & Hepatitis</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Chronic Stomach Pain</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Painless GI Endoscopy</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Diagnostic Colonoscopy</span>
                  </div>
                </div>
              </div>

              {/* Travel Instructions */}
              <div className="bg-bg-sand/20 border border-border/60 rounded-3xl p-6 space-y-4">
                <div className="flex gap-3.5 items-start">
                  <MapPin className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="text-forest font-sans font-bold text-base">Travel Guide: Dhanbad to Ranchi</h3>
                    <p className="text-muted text-xs leading-relaxed font-sans mt-1">
                      - <strong>By Road</strong>: Drive via NH-2 towards Bokaro, then NH-23 to Ranchi (approx 160 km, 2.5 hours driving time).<br />
                      - <strong>By Train</strong>: Ranchi Shatabdi Express departs Dhanbad Junction at 17:50 and reaches Ranchi in 3 hours.<br />
                      - <strong>OPD Landmark</strong>: HB Road, Plaza Chowk, Ranchi — opposite Plaza Cinema.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Lead Generation Form (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-border/80 rounded-3xl p-6 lg:p-8 shadow-xs space-y-5">
                <div>
                  <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">
                    Dhanbad Patient Desk
                  </span>
                  <h3 className="text-forest font-sans font-bold text-lg">Request Priority OPD Booking</h3>
                  <p className="font-hindi text-muted text-xs mt-1">धनबाद के मरीजों के लिए ओपीडी अपॉइंटमेंट की विशेष सुविधा।</p>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-forest font-sans font-bold uppercase tracking-wider block">
                        Full Name / पूरा नाम *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Ramesh Kumar"
                        className={cn(
                          "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors",
                          errors.name ? "border-red-400 bg-red-50/10" : "border-border"
                        )}
                      />
                      {errors.name && <p className="text-red-500 text-xs font-sans mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-forest font-sans font-bold uppercase tracking-wider block">
                        Mobile Number / मोबाइल नंबर *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        maxLength={10}
                        placeholder="98765 43210"
                        className={cn(
                          "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors",
                          errors.phone ? "border-red-400 bg-red-50/10" : "border-border"
                        )}
                      />
                      {errors.phone && <p className="text-red-500 text-xs font-sans mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-forest font-sans font-bold uppercase tracking-wider block">
                        Describe Symptoms / लक्षण लिखें *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="E.g., stomach pain, acidity, fatty liver consultation..."
                        className={cn(
                          "w-full p-4 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors resize-none",
                          errors.message ? "border-red-400 bg-red-50/10" : "border-border"
                        )}
                      />
                      {errors.message && <p className="text-red-500 text-xs font-sans mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 bg-primary text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send size={13} />
                      {isSubmitting ? "Please wait..." : "Request Priority Slot"}
                    </button>

                  </form>
                ) : (
                  <div className="bg-bg-sand/20 border border-primary/50 rounded-2xl p-6 text-center space-y-3">
                    <CheckCircle2 size={36} className="text-primary mx-auto" />
                    <h3 className="text-forest font-bold text-base font-hindi">संदेश प्राप्त हुआ!</h3>
                    <p className="text-muted text-xs font-sans">Our desk will contact you shortly to coordinate your Dhanbad priority consultation.</p>
                  </div>
                )}

                {/* Call/WhatsApp Shortcuts */}
                <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-border/40 mt-4">
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 bg-white border border-primary text-primary font-display font-semibold text-xs rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    <Phone size={13} /> Call {DOCTOR.phone}
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 bg-white border border-border text-primary font-display font-semibold text-xs rounded-xl hover:bg-primary-50 transition-colors bg-bg-sand/35"
                  >
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Dhanbad FAQs */}
      <section className="bg-bg-sand/30 py-16 border-t border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
              FAQ Help Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest leading-tight font-hindi">
              मरीजों के आम सवाल — Dhanbad Patients FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {DHANBAD_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-border/80 rounded-2xl p-5 space-y-2">
                <h4 className="text-forest font-sans font-bold text-sm leading-snug flex gap-2 items-start">
                  <HelpCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-muted text-xs leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating conversion bar */}
      <StickyCTA title="Consult Dr. Akhilesh Yadav" />

    </article>
  );
}
