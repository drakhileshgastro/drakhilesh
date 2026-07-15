"use client";

import { useState } from "react";
import { Phone, MessageCircle, Clock, CheckCircle, MapPin, Star, Calendar, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import BookingForm from "@/components/service/booking-form";
import { DOCTOR } from "@/lib/constants";

const STEPS = [
  { step: "1", title: "Fill Details", desc: "Select your condition and enter your contact details.", icon: "📝" },
  { step: "2", title: "Expert Callback", desc: "Our clinic representative calls you within 2 hours.", icon: "📞" },
  { step: "3", title: "Appt. Confirmation", desc: "Receive direct slot details on WhatsApp instantly.", icon: "💬" },
  { step: "4", title: "Consultation Visit", desc: "Visit Orchid Medical Centre for your OPD session.", icon: "🏥" },
];

const TRUST_POINTS = [
  "Direct appointment — no pre-registration required",
  "Free callback & guidance — zero online booking charges",
  "Dedicated support desk in English, Hindi & Nagpuri",
  "Prioritized slots for outstation patients (Jharkhand/Bihar)",
  "Consultation fee payable directly at the clinic counter",
];

const FAQS = [
  {
    q: "How soon will I get a callback after booking?",
    a: "Our team typically calls you back within 1–2 hours during clinic hours (Mon-Sat: 10:00 AM – 8:00 PM). If you submit a request at night, we will call you first thing the next morning.",
  },
  {
    q: "Do I need to pay any consultation fee online?",
    a: "No. Dr. Akhilesh Yadav's website never requests online payments. All consultation fees and diagnostic charges (Endoscopy/Colonoscopy) are payable directly at the Orchid Medical Centre billing counter.",
  },
  {
    q: "What documents should I bring for the consultation?",
    a: "Please bring any previous prescriptions, list of active medicines, and relevant diagnostic reports (blood tests, ultrasound, Endoscopy/Colonoscopy, or CT scans) if available.",
  },
  {
    q: "Can I book appointments for Endoscopy or Colonoscopy directly?",
    a: "Yes. You can select 'Endoscopy/Colonoscopy' as the condition in the booking form. Our coordinator will call to provide fasting and preparation guidelines for the procedure.",
  },
  {
    q: "What is the procedure for outstation patients?",
    a: "Patients traveling from outside Ranchi (e.g. Dhanbad, Giridih, Hazaribagh) can mention their travel plans during the callback. We will prioritize scheduling your consultation and diagnostics on the same day to minimize your stay.",
  },
];

export default function BookClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <>
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary-dark via-[#113A2C] to-[#0A241B] pt-14 pb-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Clinical Information & Badges */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-full">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">OPD Bookings Active</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
                Request an Appointment <br className="hidden sm:block" />
                <span className="text-accent">with Dr. Akhilesh Yadav</span>
              </h1>
              
              <p className="text-white/80 text-base max-w-2xl leading-relaxed">
                Consult Ranchi's trusted Gastroenterologist & Hepatologist. Get expert treatment for liver diseases, fatty liver, acidity, IBS, and advanced endoscopic procedures at Orchid Medical Centre.
              </p>

              {/* Reviews & Trust Badge */}
              <div className="flex flex-wrap items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl max-w-lg">
                <div className="flex items-center gap-1.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9/5</span>
                </div>
                <div className="h-4 w-px bg-white/20 hidden sm:block" />
                <p className="text-white/60 text-xs sm:text-sm font-hindi">
                  रांची और झारखंड के 4,000+ मरीजों द्वारा विश्वसनीय परामर्श
                </p>
              </div>

              {/* Trust checklist */}
              <div className="space-y-3 pt-2">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Quick Callback Guarantee */}
              <div className="flex items-center gap-3 bg-accent/10 border border-accent/20 px-5 py-4 rounded-2xl max-w-lg">
                <ShieldCheck size={28} className="text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-accent font-bold text-sm">2-Hour Callback Guarantee</h4>
                  <p className="text-white/70 text-xs mt-0.5 font-hindi">कार्य समय के दौरान आपको 2 घंटे के भीतर पुष्टि के लिए कॉल किया जाएगा।</p>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative z-10">
                <div className="mb-6">
                  <h3 className="text-white font-display font-bold text-lg leading-tight">Quick Request Form</h3>
                  <p className="text-white/60 text-xs mt-1 font-hindi">कृपया विवरण भरें, कोई ओटीपी/रजिस्ट्रेशन की आवश्यकता नहीं है।</p>
                </div>
                
                {/* Embedded Booking Form Component */}
                <div className="bg-white p-5 rounded-2xl shadow-inner text-forest">
                  <BookingForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full">Booking Flow</span>
            <h2 className="text-primary-dark font-display font-bold text-2xl sm:text-3xl mt-4">Simple 4-Step Booking Process</h2>
            <p className="text-muted text-sm mt-2 font-hindi">अपॉइंटमेंट बुकिंग और परामर्श प्रक्रिया अत्यंत आसान है:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, idx) => (
              <div key={s.step} className="bg-bg-sand/30 border border-border/60 hover:border-primary-light p-6 rounded-2xl relative transition-all group hover:-translate-y-1">
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] right-[-50%] h-[1.5px] bg-border/80 z-0" />
                )}
                <div className="relative z-10 w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <span className="text-accent text-xs font-extrabold uppercase tracking-wider block mb-1">Step {s.step}</span>
                <h3 className="text-primary-dark font-display font-bold text-sm mb-1.5">{s.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Timings & Contacts Dashboard */}
      <section className="section-pad bg-bg-sand/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full">OPD Calendar</span>
            <h2 className="text-primary-dark font-display font-bold text-2xl sm:text-3xl mt-4">Clinic Hours & Timings</h2>
            <p className="text-muted text-sm mt-2">Consultation slots and direct support contacts.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Card 1 - Timings */}
            <div className="bg-white rounded-3xl border border-border p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="text-primary-dark font-display font-bold text-base mb-2">OPD Session Timings</h3>
                <p className="text-muted text-xs mb-4">Dr. Akhilesh Yadav is available daily (Monday to Saturday):</p>
                <div className="space-y-3 font-sans text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-border/60">
                    <span className="font-semibold text-primary-dark">Morning OPD</span>
                    <span className="text-primary font-bold">10:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/60">
                    <span className="font-semibold text-primary-dark">Evening OPD</span>
                    <span className="text-primary font-bold">5:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-primary-dark">Sunday Status</span>
                    <span className="text-red-500 font-bold">Closed</span>
                  </div>
                </div>
              </div>
              <p className="text-emerald-600 text-xs font-hindi font-semibold mt-4">
                * नोट: प्रक्रियाएं (Endoscopy) केवल सुबह के स्लॉट में होती हैं।
              </p>
            </div>

            {/* Card 2 - Location Info */}
            <div className="bg-white rounded-3xl border border-border p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="text-primary-dark font-display font-bold text-base mb-2">OPD Clinic Location</h3>
                <p className="text-muted text-xs mb-4">Located in Ranchi's premier multi-specialty care hospital:</p>
                <p className="text-primary-dark font-bold text-sm">{DOCTOR.hospital}</p>
                <p className="text-muted text-xs leading-relaxed mt-1.5">
                  HB Road, Opposite Plaza Cinema, Plaza Chowk,<br />Ranchi, Jharkhand — 834001
                </p>
              </div>
              <div className="pt-4 border-t border-border/60 mt-4">
                <a
                  href={DOCTOR.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Get Google Maps Directions
                </a>
              </div>
            </div>

            {/* Card 3 - Direct Contact Help */}
            <div className="bg-white rounded-3xl border border-border p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="text-primary-dark font-display font-bold text-base mb-2">Direct Contact Help</h3>
                <p className="text-muted text-xs mb-4">Need urgent support or have query? Reach our team directly:</p>
                <div className="space-y-3 font-sans">
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="flex items-center justify-between p-3 border border-border rounded-xl hover:border-primary transition-colors text-primary-dark font-bold text-sm"
                  >
                    <span>Direct Call Helpline:</span>
                    <span className="text-primary">{DOCTOR.phone}</span>
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-border rounded-xl hover:border-green-600 transition-colors text-primary-dark font-bold text-sm"
                  >
                    <span>WhatsApp Inquiry:</span>
                    <span className="text-whatsapp">Chat Now</span>
                  </a>
                </div>
              </div>
              <p className="text-white/0 text-[2px] mt-4">Spacer</p> 
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-xs h-[320px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.37890250645!2d85.3340058!3d23.3745266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e107dfa0b63b%3A0xc39f9ea11e97669d!2sOrchid+Medical+Centre!5e0!3m2!1sen!2sin!4v1719231221345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orchid Medical Centre Map Location"
            />
          </div>
        </div>
      </section>

      {/* Booking FAQ Section */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full">FAQ Help</span>
            <h2 className="text-primary-dark font-display font-bold text-2xl sm:text-3xl mt-4 font-hindi">अपॉइंटमेंट सम्बंधित सवाल (FAQs)</h2>
            <p className="text-muted text-sm mt-2">Answers to common booking and clinic consultation questions.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-border/80 rounded-2xl overflow-hidden bg-bg-sand/10 transition-colors duration-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-bg-sand/30 transition-colors"
                  >
                    <span className="text-primary-dark font-display font-bold text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-primary flex-shrink-0 ml-4">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-muted text-xs sm:text-sm leading-relaxed border-t border-border/40 bg-white font-hindi">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
