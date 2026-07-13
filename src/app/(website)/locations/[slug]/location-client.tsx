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
import { LocationData } from "@/data/locations-data";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  message: z.string().min(5, "Please enter your symptom or query"),
});

type FormData = z.infer<typeof schema>;

interface LocationClientProps {
  location: LocationData;
}

export default function LocationClient({ location }: LocationClientProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, main ${location.name} se bol raha hoon. Mujhe Dr. Akhilesh Yadav se consult karna hai.`
  )}`;

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name: data.name,
          patient_phone: data.phone,
          patient_city: location.name,
          condition: data.message.substring(0, 100),
          source: `${location.name} Landing Page`,
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
      <section className="bg-bg-sand/30 pt-12 pb-16 lg:py-20 border-b border-border/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary/20 text-primary font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-sans">
                {location.name} Special Care Corridor
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-forest leading-tight font-hindi">
                {location.h1}
              </h1>
              <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl">
                Consult Ranchi's leading Gastroenterologist, <strong>Dr. Akhilesh Yadav (DM Gastroenterology)</strong>, at Orchid Medical Centre. Trusted, superspecialist care for stomach pain, liver cirrhosis, jaundice, acidity, and advanced diagnostic endoscopy.
              </p>
              
              <div className="flex flex-wrap gap-4 py-4 border-t border-b border-border/40 max-w-lg font-sans">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Star className="text-accent fill-accent" size={16} />
                    <span className="text-forest font-bold text-sm">4.9 Rating</span>
                  </div>
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">Google Reviews</span>
                </div>
                <div className="space-y-1 border-l border-border/40 pl-4">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="text-primary" size={16} />
                    <span className="text-forest font-bold text-sm">10+ Years</span>
                  </div>
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">DM Experience</span>
                </div>
                <div className="space-y-1 border-l border-border/40 pl-4">
                  <div className="flex items-center gap-1">
                    <Navigation className="text-primary" size={16} />
                    <span className="text-forest font-bold text-sm">{location.travelDuration}</span>
                  </div>
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">Transit Time</span>
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
                
                {/* Outstation Reassurance Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-border/50 rounded-2xl px-4 py-2.5 shadow-md flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Navigation className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted font-sans font-bold uppercase tracking-wider">Outstation Assistance</div>
                    <div className="text-forest font-sans font-bold text-xs">Direct Connect &amp; Transit Priority</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Stats Banner */}
      <section className="bg-bg-sand/15 border-b border-border/30 py-8">
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
              <span className="text-2xl sm:text-3xl font-display font-bold text-forest block">{location.travelDistance}</span>
              <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Travel Distance</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-display font-bold text-forest block">Painless</span>
              <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Sedated Endoscopy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Lead Form */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Why travel block */}
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-forest leading-tight font-hindi">
                  {location.name} से रांची क्यों आएं? — Complete Patient Reassurance
                </h2>
                <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                  Gastroenterology is a highly specialized branch of medicine. By traveling to Orchid Medical Centre, you connect directly with a DM Gastroenterology super-specialist. This guarantees diagnostic precision, preventing misdiagnosis and unnecessary operational procedures.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-bg-sand/15 border border-border/60 rounded-2xl p-5 space-y-2">
                    <h4 className="text-forest font-sans font-bold text-sm">Same-Day Diagnostic Tests</h4>
                    <p className="text-muted text-xs leading-relaxed font-sans">
                      All procedures (Endoscopy, Colonoscopy, Liver elastography) are done under light sedation and reports are released on the same day.
                    </p>
                  </div>
                  <div className="bg-bg-sand/15 border border-border/60 rounded-2xl p-5 space-y-2">
                    <h4 className="text-forest font-sans font-bold text-sm">Teleconsult Option First</h4>
                    <p className="text-muted text-xs leading-relaxed font-sans">
                      Book an initial online call to discuss symptoms and reports before traveling, ensuring you only travel when physical procedures are needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Unique Location Content Grid */}
              <div className="space-y-4 pt-6 border-t border-border/40">
                <h3 className="text-forest font-sans font-bold text-lg">Specialist Treatments Provided</h3>
                <div className="grid grid-cols-2 gap-3 text-xs text-forest font-sans font-semibold">
                  {location.whyChoose.map((w, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-xl">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Planners travel guide */}
              <div className="bg-bg-sand/20 border border-border/60 rounded-3xl p-6 lg:p-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <Navigation className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <div className="space-y-4 w-full">
                    <div>
                      <h3 className="text-forest font-sans font-bold text-base">Route Planner: Travel Guide from {location.name}</h3>
                      <p className="text-muted text-xs mt-1 font-sans">Optimized routes connecting {location.name} to HB Road, Plaza Chowk, Ranchi.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <span className="text-[10px] text-primary uppercase font-bold tracking-wider block">🛣️ By Road Route</span>
                        <p className="text-muted text-xs leading-relaxed font-sans">{location.roadInstructions}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-primary uppercase font-bold tracking-wider block">🚂 By Train Route</span>
                        <p className="text-muted text-xs leading-relaxed font-sans">{location.trainInstructions}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                      >
                        Open Route Map / Contact Page <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical Guides & Services Directory Grid */}
              <div className="space-y-6 pt-10 border-t border-border/40 font-sans">
                <div>
                  <h3 className="text-forest font-sans font-bold text-lg font-hindi">चिकित्सा सेवाएं और स्वास्थ्य मार्गदर्शिका</h3>
                  <p className="text-muted text-xs sm:text-sm mt-1">
                    Explore clinical explanations and treatment protocols for common gastrointestinal conditions and diagnostic tests:
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/conditions/fatty-liver"
                    className="p-5 bg-white border border-border/80 rounded-2xl hover:border-primary transition-all shadow-3xs group flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-lg">🫀</span>
                    </div>
                    <div>
                      <h4 className="text-forest font-bold text-sm leading-snug group-hover:text-primary transition-colors">Fatty Liver Treatment</h4>
                      <p className="text-muted text-xs leading-relaxed mt-1 font-hindi">फैटी लिवर का उपचार, डाइट चार्ट और दवाएं</p>
                    </div>
                  </Link>

                  <Link
                    href="/conditions/liver-cirrhosis"
                    className="p-5 bg-white border border-border/80 rounded-2xl hover:border-primary transition-all shadow-3xs group flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-lg">🏥</span>
                    </div>
                    <div>
                      <h4 className="text-forest font-bold text-sm leading-snug group-hover:text-primary transition-colors">Liver Cirrhosis Care</h4>
                      <p className="text-muted text-xs leading-relaxed mt-1 font-hindi">लिवर सिरोसिस का प्रबंधन और जटिलताओं से बचाव</p>
                    </div>
                  </Link>

                  <Link
                    href="/procedures/endoscopy"
                    className="p-5 bg-white border border-border/80 rounded-2xl hover:border-primary transition-all shadow-3xs group flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-lg">🩺</span>
                    </div>
                    <div>
                      <h4 className="text-forest font-bold text-sm leading-snug group-hover:text-primary transition-colors">Endoscopy Procedure</h4>
                      <p className="text-muted text-xs leading-relaxed mt-1 font-hindi">दर्दरहित एंडोस्कोपी जांच, तैयारी और प्रक्रिया</p>
                    </div>
                  </Link>

                  <Link
                    href="/procedures/colonoscopy"
                    className="p-5 bg-white border border-border/80 rounded-2xl hover:border-primary transition-all shadow-3xs group flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-lg">🔬</span>
                    </div>
                    <div>
                      <h4 className="text-forest font-bold text-sm leading-snug group-hover:text-primary transition-colors">Colonoscopy Procedure</h4>
                      <p className="text-muted text-xs leading-relaxed mt-1 font-hindi">कोलोनोस्कोपी बड़ी आंत की जांच और कैंसर स्क्रीनिंग</p>
                    </div>
                  </Link>

                  <Link
                    href="/symptoms"
                    className="p-5 bg-white border border-border/80 rounded-2xl hover:border-primary transition-all shadow-3xs group flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-lg">⚠️</span>
                    </div>
                    <div>
                      <h4 className="text-forest font-bold text-sm leading-snug group-hover:text-primary transition-colors">Symptoms Directory</h4>
                      <p className="text-muted text-xs leading-relaxed mt-1 font-hindi">पेट दर्द, गैस, कब्ज, ब्लीडिंग आदि लक्षणों की जानकारी</p>
                    </div>
                  </Link>

                  <Link
                    href="/blog"
                    className="p-5 bg-white border border-border/80 rounded-2xl hover:border-primary transition-all shadow-3xs group flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-lg">📚</span>
                    </div>
                    <div>
                      <h4 className="text-forest font-bold text-sm leading-snug group-hover:text-primary transition-colors">Health Blog (Hindi)</h4>
                      <p className="text-muted text-xs leading-relaxed mt-1 font-hindi">लिवर और पाचन स्वास्थ्य पर उपयोगी लेख</p>
                    </div>
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Lead Generation Form (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-border/80 rounded-3xl p-6 lg:p-8 shadow-2xs space-y-5">
                <div>
                  <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">
                    Priority Outstation Consult
                  </span>
                  <h3 className="text-forest font-sans font-bold text-lg">परामर्श के लिए अनुरोध करें</h3>
                  <p className="text-muted text-xs font-sans mt-0.5">Please provide your details below and get a call back in 30 minutes.</p>
                </div>

                {submitted ? (
                  <div className="bg-bg-sand/30 border border-primary/30 rounded-2xl p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-forest font-sans font-bold text-sm">Request Submitted</h4>
                      <p className="text-muted text-xs mt-1">Our outstation care team will contact you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
                    <div className="space-y-1">
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Full Name / पूरा नाम *"
                        className={cn(
                          "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/60 font-sans",
                          errors.name ? "border-red-400" : "border-border/80"
                        )}
                      />
                      {errors.name && <p className="text-red-500 text-xs font-sans mt-0.5">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-1">
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="Mobile Number / मोबाइल *"
                        maxLength={10}
                        className={cn(
                          "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/60 font-sans",
                          errors.phone ? "border-red-400" : "border-border/80"
                        )}
                      />
                      {errors.phone && <p className="text-red-500 text-xs font-sans mt-0.5">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-1">
                      <textarea
                        {...register("message")}
                        placeholder="Describe Symptoms / लक्षण लिखें *"
                        rows={3}
                        className={cn(
                          "w-full p-4 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/60 font-sans resize-none",
                          errors.message ? "border-red-400" : "border-border/80"
                        )}
                      />
                      {errors.message && <p className="text-red-500 text-xs font-sans mt-0.5">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 bg-primary text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Send size={12} />
                      {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                    </button>

                  </form>
                )}

                <div className="pt-2 border-t border-border/40 text-[10px] text-muted font-sans font-medium uppercase tracking-wider flex justify-between">
                  <span>No Spam Guarantee</span>
                  <span>🔒 Secure Form</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Dynamic FAQs */}
      <section className="bg-bg-sand/15 py-16 lg:py-20 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">FAQ</span>
            <h2 className="text-2xl font-display font-bold text-forest mt-2 font-hindi">सामान्य प्रश्न उत्तर</h2>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-border/50 rounded-2xl p-6 shadow-3xs">
                <h4 className="text-forest font-sans font-bold text-sm sm:text-base font-hindi flex items-start gap-2.5">
                  <HelpCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-muted text-xs sm:text-sm mt-3 leading-relaxed pl-6 border-l border-primary/25 font-hindi font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
            
            {/* Standard outstation FAQ */}
            <div className="bg-white border border-border/50 rounded-2xl p-6 shadow-3xs">
              <h4 className="text-forest font-sans font-bold text-sm sm:text-base font-hindi flex items-start gap-2.5">
                <HelpCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>क्या एंडोस्कोपी के बाद भर्ती होना पड़ता है?</span>
              </h4>
              <p className="text-muted text-xs sm:text-sm mt-3 leading-relaxed pl-6 border-l border-primary/25 font-hindi font-medium">
                नहीं। एंडोस्कोपी/कोलोनोस्कोपी ओपीडी आधार पर की जाती है। यह प्रक्रिया केवल 10 मिनट की होती है, और 2 घंटे के आराम के बाद मरीज उसी दिन वापस अपने शहर लौट सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
