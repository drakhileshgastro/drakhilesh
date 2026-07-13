"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import Link from "next/link";

const faqs = [
  {
    q: "डॉ. अखिलेश यादव किन बीमारियों का इलाज करते हैं?",
    a: "डॉ. अखिलेश यादव DM Gastroenterology विशेषज्ञ हैं। वे फैटी लिवर, पीलिया, लीवर सिरोसिस, हेपेटाइटिस B/C, IBS, GERD, पेप्टिक अल्सर, पित्त की पथरी, अग्नाशय की सूजन, आंत की बीमारियां, GI ब्लीडिंग और सभी पाचन तंत्र की बीमारियों का उपचार करते हैं।",
    eng: "Dr. Akhilesh Yadav treats all gastroenterology and liver conditions including fatty liver, jaundice, liver cirrhosis, hepatitis, IBS, GERD, gallstone, pancreatitis, and GI bleeding.",
  },
  {
    q: "क्या डॉ. अखिलेश हिंदी में बात करते हैं?",
    a: "हाँ, बिल्कुल। डॉ. अखिलेश यादव हिंदी में बात करते हैं और मरीज की बीमारी को आसान भाषा में समझाते हैं। Ranchi, Jharkhand और Bihar के मरीजों के लिए यह बहुत सुविधाजनक है।",
    eng: "Yes, Dr. Akhilesh Yadav consults in Hindi and explains everything in simple language.",
  },
  {
    q: "क्या एंडोस्कोपी में दर्द होता है?",
    a: "नहीं। आधुनिक एंडोस्कोपी लगभग दर्दरहित होती है। हल्की बेहोशी (sedation) दी जाती है जिससे मरीज को कुछ भी महसूस नहीं होता। पूरी प्रक्रिया 15–20 मिनट में हो जाती है।",
    eng: "No. Modern endoscopy is nearly painless with light sedation. The procedure takes 15–20 minutes and you won't feel anything.",
  },
  {
    q: "फैटी लिवर क्या बिना दवाई के ठीक हो सकता है?",
    a: "हाँ, शुरुआती फैटी लिवर (Grade 1-2) खान-पान और जीवनशैली में बदलाव से ठीक हो सकता है। Dr. Akhilesh आपको सही डाइट प्लान और व्यायाम की सलाह देते हैं। Grade 3 और आगे की स्थिति में दवाई जरूरी होती है।",
    eng: "Early-stage fatty liver (Grade 1-2) can often reverse with diet and lifestyle changes. Dr. Akhilesh provides a personalized diet and exercise plan.",
  },
  {
    q: "Orchid Medical Centre में appointment कैसे लें?",
    a: "आप तीन तरीकों से अपॉइंटमेंट ले सकते हैं: (1) इस वेबसाइट पर फॉर्म भरें — 30 मिनट में कॉल आएगी। (2) सीधे +91 7491925047 पर कॉल करें। (3) WhatsApp पर message भेजें। Orchid Medical Centre, HB Road, Ranchi में Mon–Sat 10am–8pm उपलब्ध हैं।",
    eng: "Book via: (1) website form, (2) call +91 7491925047, or (3) WhatsApp. Available Mon–Sat at Orchid Medical Centre, HB Road, Ranchi.",
  },
  {
    q: "क्या Ranchi के बाहर के मरीज भी आ सकते हैं?",
    a: "जी हाँ। Bokaro, Dhanbad, Hazaribagh, Giridih, Jamshedpur, Bihar, Odisha, West Bengal और Chhattisgarh से कई मरीज नियमित रूप से आते हैं। Railway station और airport से Orchid Medical Centre आसानी से पहुंचा जा सकता है।",
    eng: "Yes, patients from across Jharkhand, Bihar, and neighboring states regularly visit. The clinic is easily accessible.",
  },
  {
    q: "पेट दर्द को कब गंभीरता से लेना चाहिए?",
    a: "इन लक्षणों में तुरंत डॉक्टर से मिलें: (1) लगातार 2 हफ्ते से पेट दर्द, (2) खून की उल्टी या मल में खून, (3) बिना कारण वजन कम होना, (4) खाना निगलने में कठिनाई, (5) पीलिया, (6) पेट में गांठ। ये गंभीर बीमारी के संकेत हो सकते हैं।",
    eng: "See a doctor immediately if you have: persistent stomach pain (2+ weeks), blood in vomit/stool, unexplained weight loss, difficulty swallowing, jaundice, or abdominal lump.",
  },
  {
    q: "क्या ऑनलाइन परामर्श मिलता है?",
    a: "हाँ, कुछ मामलों में WhatsApp/Video call के ज़रिए परामर्श उपलब्ध है। हालांकि, सटीक निदान के लिए व्यक्तिगत परामर्श और जांच जरूरी होती है। पहले WhatsApp पर संपर्क करें।",
    eng: "Yes, WhatsApp/video consultations are available in some cases. However, in-person examination gives the most accurate diagnosis.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-sand py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider border border-primary-light">
            FAQ
          </span>
          <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-3">
            अक्सर पूछे जाने वाले सवाल
          </h2>
          <p className="text-muted text-base">
            Frequently Asked Questions — answered by Dr. Akhilesh Yadav
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={cn(
                "bg-white border rounded-2xl overflow-hidden transition-all duration-200",
                open === i ? "border-primary shadow-sm" : "border-border hover:border-primary-light"
              )}
            >
              <button
                className="w-full flex items-start gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-hindi text-forest font-semibold text-[15px] leading-snug flex-1">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-muted flex-shrink-0 mt-0.5 transition-transform duration-200",
                    open === i ? "rotate-180 text-primary" : ""
                  )}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="font-hindi text-forest/80 text-sm leading-relaxed mb-2">{faq.a}</p>
                  <p className="text-muted text-xs">{faq.eng}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More questions CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted text-sm mb-4">
            और कोई सवाल है? डॉ. अखिलेश से सीधे पूछें।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/faqs"
              className="px-5 py-2.5 border border-border text-forest text-sm font-medium rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              All FAQs →
            </Link>
            <Link
              href="/book"
              className="px-6 py-2.5 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
