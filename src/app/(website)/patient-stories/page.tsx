import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, MessageCircle, Calendar, Phone, ArrowRight, ShieldCheck, ThumbsUp } from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";

export const metadata: Metadata = {
  title: "Dr Akhilesh Yadav Reviews Ranchi | Patient Success Stories",
  description: "Read verified Dr Akhilesh Yadav reviews in Ranchi. See recovery stories and testimonials for fatty liver, jaundice, endoscopy, and IBS treatment.",
  alternates: { canonical: "https://drakhileshgastro.com/patient-stories" },
};

const PATIENT_STORIES = [
  {
    name: "Rajesh Kumar",
    location: "Bokaro, JH",
    condition: "Fatty Liver Disease",
    treatment: "Dietary Counselling & Liver Management",
    rating: 5,
    date: "1 month ago",
    hindiQuote: "डॉ. अखिलेश जी ने मेरी फैटी लिवर को बहुत अच्छे से समझाया और उपचार दिया। 3 महीने में रिपोर्ट सामान्य हो गई।",
    englishQuote: "Dr. Akhilesh explained my fatty liver condition in very simple terms and guided my diet. Within 3 months, my reports returned to absolute normal.",
    reassurance: "Verified Recovery · Fatty Liver Reversal",
  },
  {
    name: "Sunita Devi",
    location: "Dhanbad, JH",
    condition: "Jaundice Care",
    treatment: "Clinical Hepatic Treatment",
    rating: 5,
    date: "3 weeks ago",
    hindiQuote: "पीलिया में बहुत परेशान थी। डॉक्टर ने हिंदी में पूरी बात समझाई और इलाज दिया। 2 हफ्ते में ठीक हो गई।",
    englishQuote: "I was extremely anxious about my jaundice. Dr. Akhilesh explained everything in Hindi, gave clear instructions, and I recovered fully in 2 weeks.",
    reassurance: "Verified Recovery · Rapid Jaundice Relief",
  },
  {
    name: "Amit Singh",
    location: "Ranchi, JH",
    condition: "Upper GI Endoscopy",
    treatment: "Diagnostic Endoscopy under Sedation",
    rating: 5,
    date: "2 months ago",
    hindiQuote: "एंडोस्कोपी से बहुत डर लग रहा था लेकिन डॉ. अखिलेश ने बिल्कुल दर्दरहित और आसान तरीके से की। बहुत शुक्रिया।",
    englishQuote: "I was terrified of the endoscopy tube, but the doctor performed it under light sedation. It was completely painless and done in 10 minutes.",
    reassurance: "Verified Procedure · Pain-Free Endoscopy",
  },
  {
    name: "Priya Sharma",
    location: "Hazaribagh, JH",
    condition: "IBS (Irritable Bowel Syndrome)",
    treatment: "Integrated Gut Therapy",
    rating: 5,
    date: "1 week ago",
    hindiQuote: "3 साल से पेट की समस्या थी, कई डॉक्टर दिखाए पर आराम नहीं मिला। डॉ. अखिलेश से मिलकर पहली बार असल इलाज मिला।",
    englishQuote: "I struggled with chronic stomach issues for 3 years. After consulting Dr. Akhilesh, I finally received an accurate diagnosis and treatment that worked.",
    reassurance: "Verified Care · Chronic Gut Relief",
  },
  {
    name: "Mohammad Aslam",
    location: "Jamshedpur, JH",
    condition: "Liver Cirrhosis Care",
    treatment: "Ascites & Portal Hypertension Management",
    rating: 5,
    date: "4 months ago",
    hindiQuote: "Orchid Medical Centre में बहुत अच्छी सुविधा है। डॉक्टर बहुत ध्यान से सुनते हैं और हिंदी में बताते हैं।",
    englishQuote: "Excellent facilities at Orchid Medical Centre. The doctor listens to patient concerns patiently and explains the plan thoroughly in Hindi.",
    reassurance: "Verified Care · Liver Disease Management",
  },
  {
    name: "Lakshmi Prasad",
    location: "Giridih, JH",
    condition: "Gallstone Obstruction",
    treatment: "Biliary Stenting & ERCP Referral",
    rating: 5,
    date: "2 weeks ago",
    hindiQuote: "पित्त की पथरी का इलाज बिना ऑपरेशन के हुआ। डॉ. अखिलेश बहुत अनुभवी हैं और मरीज की पूरी देखभाल करते हैं।",
    englishQuote: "My bile duct stones were safely treated without requiring open surgery. Dr. Akhilesh is highly experienced and cares deeply for his patients.",
    reassurance: "Verified Procedure · Non-Surgical Stone Clearance",
  },
];

export default function PatientStoriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Patient Success Stories — Dr. Akhilesh Yadav",
    "description": "Verified recovery stories, reviews, and testimonials from patients treated by Dr. Akhilesh Yadav.",
    "url": "https://drakhileshgastro.com/patient-stories",
    "about": {
      "@type": "Physician",
      "name": DOCTOR.name,
      "medicalSpecialty": "Gastroenterology"
    }
  };

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe Dr. Akhilesh Yadav se consultation appoint karna hai."
  )}`;

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      <article className="min-h-screen pb-16 sm:pb-0">
        
        {/* Section 1: Hero */}
        <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
              Patient Testimonials
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-forest leading-tight font-hindi">
              मरीजों की सफलता की कहानियां — Success Stories
            </h1>
            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Read verified recovery experiences from patients treated for stomach, liver, and biliary disorders at Orchid Medical Centre, Ranchi.
            </p>
          </div>
        </section>

        {/* Section 2: Stories Grid */}
        <section className="bg-bg-sand/30 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PATIENT_STORIES.map((story, idx) => (
                <div key={idx} className="bg-white border border-border/80 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-primary-light transition-all">
                  <div>
                    {/* Stars and date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-accent fill-accent" />
                        ))}
                      </div>
                      <span className="text-[10px] text-muted font-sans font-medium">{story.date}</span>
                    </div>

                    {/* Condition details */}
                    <div className="mb-4 bg-bg-sand/35 border border-border/40 rounded-xl p-3">
                      <span className="text-[9px] text-primary uppercase font-bold tracking-wider block font-sans">Condition</span>
                      <span className="text-xs font-bold text-forest block font-sans mt-0.5">{story.condition}</span>
                      <span className="text-[9px] text-muted block font-sans mt-1">Treatment: {story.treatment}</span>
                    </div>

                    {/* Testimonials */}
                    <div className="space-y-3 mb-6 relative">
                      <Quote className="absolute -top-2 -left-2 text-primary/10 w-8 h-8 pointer-events-none" />
                      <p className="font-hindi text-forest font-bold text-base leading-relaxed pl-4">
                        “{story.hindiQuote}”
                      </p>
                      <p className="font-sans text-muted text-xs italic leading-relaxed pl-4">
                        “{story.englishQuote}”
                      </p>
                    </div>
                  </div>

                  {/* Patient Info Footer */}
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <div>
                      <h4 className="text-forest font-sans font-bold text-sm leading-snug">{story.name}</h4>
                      <p className="text-muted text-[10px] font-sans font-semibold uppercase">{story.location}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200/50 px-2 py-0.5 rounded-lg text-[9px] font-sans font-bold uppercase tracking-wider">
                      <ShieldCheck size={11} /> Verified
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Review Submission CTA */}
        <section className="bg-white py-16 lg:py-20 border-t border-b border-border/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <ThumbsUp className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest leading-tight font-hindi">
              क्या आप भी डॉक्टर साहब के परामर्श से संतुष्ट हैं?
            </h2>
            <p className="font-sans text-muted text-sm leading-relaxed max-w-lg mx-auto">
              If you have consulted Dr. Akhilesh Yadav and recovered, share your experience on Google Reviews to help other patients make informed healthcare decisions.
            </p>
            <div className="pt-2">
              <a
                href={DOCTOR.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-bold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                Write a Google Review <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: High-Conversion Appointment CTA */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-12 shadow-sm grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="md:col-span-5 w-full">
                <div className="aspect-[4/5] bg-primary-light rounded-2xl overflow-hidden relative shadow-xs max-w-xs mx-auto">
                  <img
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-border px-3 py-1 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
                  Book a Consultation
                </div>
                
                <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                  स्वस्थ पाचन और लिवर के लिए आज ही परामर्श लें
                </h2>
                
                <p className="font-sans text-muted text-base leading-relaxed">
                  Join thousands of patients who recovered successfully under Dr. Akhilesh's clinical care. Book a consultation at Orchid Medical Centre, Ranchi.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                  >
                    <Calendar size={15} /> Book Appointment
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>

                <p className="text-xs text-muted font-sans font-medium uppercase tracking-wider mt-2 block">
                  ORCHID MEDICAL CENTRE, RANCHI · OPD DAILY (SUN CLOSED)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Floating conversion bar */}
        <StickyCTA title="Consult Dr. Akhilesh Yadav" />

      </article>
    </>
  );
}
