"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { 
  MapPin, Phone, Clock, MessageCircle, Navigation, Send, 
  CheckCircle2, AlertTriangle, Star, ShieldCheck, HeartHandshake 
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/cn";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  message: z.string().min(5, "Please enter your message"),
});

type FormData = z.infer<typeof schema>;

const DIRECTIONS = [
  { from: "Hazaribagh", time: "~1.5 hrs", via: "NH-33", dist: "~95 km" },
  { from: "Dhanbad", time: "~2.5 hrs", via: "NH-2", dist: "~160 km" },
  { from: "Giridih", time: "~2 hrs", via: "NH-2", dist: "~130 km" },
  { from: "Palamu", time: "~3 hrs", via: "NH-75", dist: "~185 km" },
  { from: "Bokaro", time: "~2 hrs", via: "NH-23", dist: "~130 km" },
  { from: "Jamshedpur", time: "~3 hrs", via: "NH-33", dist: "~175 km" },
  { from: "Deoghar", time: "~2.5 hrs", via: "NH-114A", dist: "~160 km" },
  { from: "Chaibasa", time: "~3 hrs", via: "NH-75", dist: "~180 km" },
  { from: "Ramgarh", time: "~50 mins", via: "NH-33", dist: "~45 km" },
  { from: "Khunti", time: "~45 mins", via: "NH-20", dist: "~35 km" },
  { from: "Lohardaga", time: "~1.5 hrs", via: "Lohardaga Rd", dist: "~75 km" },
  { from: "Simdega", time: "~3 hrs", via: "NH-143", dist: "~145 km" },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe Dr. Akhilesh Yadav se OPD appointments ke baare me puchna hai."
  )}`;

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name: data.name,
          patient_phone: data.phone,
          patient_city: "Enquiry",
          condition: data.message.substring(0, 100),
          source: "Contact Page Form",
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
      
      {/* Hero Header */}
      <section className="bg-bg-sand/30 py-16 lg:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
            Contact Clinic
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-forest leading-tight font-hindi">
            संपर्क और ओपीडी बुकिंग — Contact Us
          </h1>
          <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Book appointments, check clinic timings, find driving routes, or contact Orchid Medical Centre, Ranchi.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Clinic Resources (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Timing & Timings card */}
              <div className="bg-bg-sand/20 border border-border/60 rounded-3xl p-6 shadow-3xs space-y-5">
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="text-primary" size={18} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans block">OPD Schedule</span>
                    <h3 className="text-forest font-sans font-bold text-base mt-1">Clinic Timings</h3>
                    <div className="mt-3 space-y-2 text-xs font-sans">
                      <div className="flex justify-between py-1 border-b border-border/40">
                        <span className="text-muted">Monday – Saturday</span>
                        <span className="text-forest font-bold">10:00 AM – 2:00 PM &amp; 5:00 PM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted">Sunday</span>
                        <span className="text-accent font-bold">Emergency Only (By Appointment)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact Card */}
              <div className="bg-red-50/20 border border-red-200/50 rounded-3xl p-6 shadow-3xs space-y-3">
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-red-100/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-red-600" size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-red-600 uppercase font-bold tracking-wider font-sans block">Critical Care</span>
                    <h3 className="text-forest font-sans font-bold text-base mt-1">Emergency Info</h3>
                    <p className="text-muted text-xs leading-relaxed font-sans mt-1">
                      For urgent cases like gastrointestinal bleeding, acute abdominal pain, or severe vomiting, dial the Orchid Medical Centre emergency helpline directly.
                    </p>
                    <a
                      href={`tel:${DOCTOR.phone}`}
                      className="text-red-700 font-display font-bold text-sm block mt-3"
                    >
                      Call Helpline: {DOCTOR.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Reviews & Patient Stories Redirect */}
              <div className="bg-bg-sand/20 border border-border/60 rounded-3xl p-6 shadow-3xs grid grid-cols-2 gap-4">
                
                {/* Google Reviews */}
                <a
                  href={DOCTOR.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-border/60 hover:border-primary-light transition-all rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <h4 className="text-forest font-sans font-bold text-xs">Google Reviews</h4>
                  </div>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider mt-3 block">
                    Write Review →
                  </span>
                </a>

                {/* Patient Stories Link */}
                <Link
                  href="/patient-stories"
                  className="bg-white border border-border/60 hover:border-primary-light transition-all rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div className="w-6 h-6 rounded-lg bg-primary-50 flex items-center justify-center mb-1.5">
                    <HeartHandshake className="text-primary" size={13} />
                  </div>
                  <h4 className="text-forest font-sans font-bold text-xs">Patient Stories</h4>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider mt-3 block">
                    Read stories →
                  </span>
                </Link>

              </div>

              {/* Real Google Map Embed */}
              <div className="space-y-3">
                <span className="text-[10px] text-forest uppercase font-bold tracking-wider font-sans block">Directions &amp; Location</span>
                <div className="aspect-[16/10] border border-border bg-white rounded-3xl overflow-hidden shadow-xs relative">
                  <iframe
                    title="Orchid Medical Centre Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.3384218844837!2d85.33405787602334!3d23.376008602758197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e13dc7381be7%3A0xc3cf02130ff2c918!2sOrchid%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1700000000000"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Contact Inquiry Form (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-white border border-border/80 rounded-3xl p-6 lg:p-8 shadow-xs space-y-5">
                <div>
                  <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">
                    Direct OPD Enquiry
                  </span>
                  <h3 className="text-forest font-sans font-bold text-lg">Send Dr. Akhilesh a Message</h3>
                  <p className="font-hindi text-muted text-xs mt-1">हम 2 घंटे के अंदर आपके सवालों का उत्तर देंगे।</p>
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
                        Your Query / अपनी समस्या लिखें *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Detail your symptom, condition or general question..."
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
                      {isSubmitting ? "Please wait..." : "Send Query"}
                    </button>

                  </form>
                ) : (
                  <div className="bg-bg-sand/20 border border-primary/50 rounded-2xl p-6 text-center space-y-3">
                    <CheckCircle2 size={36} className="text-primary mx-auto" />
                    <h3 className="text-forest font-bold text-base font-hindi">संदेश प्राप्त हुआ!</h3>
                    <p className="text-muted text-xs font-sans">Our team will call you within 2 hours to coordinate.</p>
                  </div>
                )}

                {/* Call/WhatsApp Directs */}
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
                    <MessageCircle size={13} /> WhatsApp Chat
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Driving Routes section */}
      <section className="bg-bg-sand/30 py-16 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-10">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
              Route Planners
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest leading-tight font-hindi">
              अन्य जिलों से क्लीनिक कैसे पहुंचे — Route Guide
            </h2>
            <p className="font-sans text-muted text-xs mt-2">
              Approximate driving times and primary highways leading to Orchid Medical Centre, Ranchi.
            </p>
          </div>

          {/* Routes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {DIRECTIONS.map((d) => {
              const slug = d.from.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={d.from}
                  href={`/locations/${slug}`}
                  className="block bg-white border border-border/80 hover:border-primary rounded-2xl p-4 text-center space-y-1 transition-all hover:-translate-y-0.5 hover:shadow-xs group cursor-pointer"
                >
                  <h4 className="text-forest group-hover:text-primary font-sans font-bold text-sm leading-snug transition-colors">
                    {d.from}
                  </h4>
                  <p className="text-primary font-display text-xs font-bold">{d.time}</p>
                  <p className="text-muted text-[10px] font-sans">{d.via} · {d.dist}</p>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href={DOCTOR.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs"
            >
              <Navigation size={14} /> Open Route on Google Maps
            </a>
          </div>

        </div>
      </section>

      {/* Floating conversion bar */}
      <StickyCTA title="Consult Dr. Akhilesh Yadav" />

    </article>
  );
}
