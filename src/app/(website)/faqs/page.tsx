import type { Metadata } from "next";
import Link from "next/link";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gastroenterology FAQs | Dr. Akhilesh Yadav, Ranchi",
  description:
    "Frequently asked questions about liver disease, digestive disorders, endoscopy, colonoscopy, and gastroenterology treatments by Dr. Akhilesh Yadav, Ranchi.",
  alternates: { canonical: "https://drakhileshgastro.com/faqs" },
};

const FAQS = [
  {
    q: "Dr. Akhilesh Yadav से appointment कैसे लें?",
    a: `आप इस website के Book Appointment form से, WhatsApp पर ${DOCTOR.phone} पर message करके, या सीधे ${DOCTOR.phone} call करके appointment ले सकते हैं।`,
  },
  {
    q: "OPD के समय क्या हैं?",
    a: `${DOCTOR.timings}। Saturday को भी उपलब्ध हैं। Urgent cases के लिए पहले call करें।`,
  },
  {
    q: "Endoscopy (OGD Scopy) से पहले क्या करना चाहिए?",
    a: "Endoscopy से 6-8 घंटे पहले कुछ भी न खाएं-पिएं। सुबह खाली पेट आएं। अपनी सभी दवाइयों की list साथ लाएं।",
  },
  {
    q: "Colonoscopy की तैयारी कैसे करें?",
    a: "Colonoscopy से 1-2 दिन पहले liquid diet और bowel cleansing solution (Polyethylene Glycol) लेना होता है। Dr. Akhilesh की team complete preparation instructions देती है।",
  },
  {
    q: "फैटी लिवर का क्या इलाज है?",
    a: "फैटी लिवर का कोई specific tablet नहीं होता — इलाज है सही diet, वजन कम करना, और lifestyle change। Dr. Akhilesh हिंदी में diet chart देते हैं और progress track करते हैं।",
  },
  {
    q: "क्या ERCP दर्दनाक होती है?",
    a: "ERCP sedation के साथ की जाती है, इसलिए procedure के दौरान आप आरामदायक अवस्था में रहते हैं। बाद में हल्की बेचैनी हो सकती है जो 1-2 दिन में ठीक हो जाती है।",
  },
  {
    q: "Orchid Medical Centre कहाँ है?",
    a: "HB Road, Opposite Plaza Cinema, Plaza Chowk, Ranchi — 834001। Google Maps पर Orchid Medical Centre Ranchi search करें।",
  },
  {
    q: "Liver Cirrhosis पूरी तरह ठीक हो सकती है?",
    a: "Early stage cirrhosis में proper treatment से disease रुक सकती है। Advanced cirrhosis को reverse करना मुश्किल है लेकिन सही management से quality of life बेहतर होती है। जल्दी डॉक्टर से मिलें।",
  },
  {
    q: "IBS और IBD में क्या फ़र्क है?",
    a: "IBS (Irritable Bowel Syndrome) एक functional disorder है — कोई inflammation नहीं होती। IBD (Inflammatory Bowel Disease) जैसे Ulcerative Colitis और Crohn's में actual inflammation होती है। दोनों का इलाज अलग-अलग होता है।",
  },
  {
    q: "क्या बिना endoscopy के acidity/GERD का इलाज हो सकता है?",
    a: "हाँ, mild GERD का इलाज medications और diet से होता है। लेकिन अगर symptoms 4-6 हफ्तों में ठीक न हों, या alarm symptoms हों (खून आना, निगलने में तकलीफ, वजन कम होना), तो endoscopy ज़रूरी है।",
  },
];

export default function FAQsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  return (
    <div className="bg-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <section className="bg-primary-light border-b border-border py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3 font-sans">
            Patient Information
          </p>
          <h1 className="text-forest text-3xl sm:text-4xl font-display font-bold mb-4">
            अक्सर पूछे जाने वाले सवाल
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Gastroenterology, liver disease, endoscopy, and clinic-related questions — answered by Dr. Akhilesh Yadav's team.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="space-y-5">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-6 sm:p-8"
            >
              <h2 className="text-forest font-display font-semibold text-base sm:text-lg mb-3">
                {faq.q}
              </h2>
              <p className="text-muted text-[15px] leading-relaxed font-hindi">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-white font-display font-bold text-xl mb-2">
            और सवाल हैं?
          </h3>
          <p className="text-white/80 text-sm mb-6 font-hindi">
            Dr. Akhilesh Yadav से सीधे बात करें — free consultation नहीं है लेकिन हम आपकी ज़रूरत समझेंगे।
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors min-h-[48px] flex items-center"
            >
              Book Appointment
            </Link>
            <a
              href={`https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-colors min-h-[48px] flex items-center"
            >
              WhatsApp करें
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
