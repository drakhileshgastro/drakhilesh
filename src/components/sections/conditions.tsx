"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const CONDITIONS_LIST = [
  {
    name: "Fatty Liver (NAFLD/NASH)",
    nameHindi: "फैटी लिवर",
    desc: "फैटी लिवर एक ऐसी स्थिति है जिसमें लिवर में अतिरिक्त वसा जमा हो जाती है। सही खानपान और जीवनशैली से इसे ठीक किया जा सकता है।",
    slug: "fatty-liver",
  },
  {
    name: "Jaundice (Pilia)",
    nameHindi: "पीलिया (पित्त)",
    desc: "पीलिया में त्वचा और आंखें पीली हो जाती हैं। यह लिवर, पित्त नली या रक्त की समस्या से हो सकता है। जल्दी उपचार ज़रूरी है।",
    slug: "jaundice",
  },
  {
    name: "Liver Cirrhosis",
    nameHindi: "लिवर सिरोसिस",
    desc: "लिवर में लंबे समय तक नुकसान के कारण scarring होती है। इसे समय पर पहचान कर आगे बढ़ने से रोका जा सकता है।",
    slug: "liver-cirrhosis",
  },
  {
    name: "Hepatitis B & C",
    nameHindi: "हेपेटाइटिस बी और सी",
    desc: "हेपेटाइटिस B और C वायरल इन्फेक्शन हैं जो लिवर को नुकसान पहुंचाते हैं। आज के इलाज से ये पूरी तरह ठीक हो सकते हैं।",
    slug: "hepatitis",
  },
  {
    name: "IBS (Irritable Bowel Syndrome)",
    nameHindi: "इरिटेबल बाउल सिंड्रोम",
    desc: "पेट में बार-बार दर्द, गैस, कब्ज या दस्त की समस्या। यह आंतों की एक common बीमारी है जो diet और stress से जुड़ी है।",
    slug: "ibs",
  },
  {
    name: "Acid Reflux / GERD",
    nameHindi: "एसिडिटी / एसिड रिफ्लक्स",
    desc: "खाने के बाद सीने में जलन, खट्टा डकार आना — यह GERD के लक्षण हैं। सही दवाई और खानपान से इसे control किया जा सकता है।",
    slug: "acid-reflux",
  },
  {
    name: "Gallstone (Pittashay Ki Pathri)",
    nameHindi: "पित्ताशय की पथरी",
    desc: "पित्ताशय में पथरी होने पर पेट के ऊपरी दाहिने हिस्से में दर्द होता है। Dr. Akhilesh medical और surgical दोनों options बताते हैं।",
    slug: "gallstone",
  },
  {
    name: "Endoscopy",
    nameHindi: "एंडोस्कोपी",
    desc: "एंडोस्कोपी में एक पतली tube से अंदर देखा जाता है। यह दर्दरहित होती है और पेट के अल्सर, खून बहना जैसी समस्याओं को पहचानती है।",
    slug: "endoscopy",
  },
  {
    name: "Colonoscopy",
    nameHindi: "कोलोनोस्कोपी",
    desc: "बड़ी आंत की जांच के लिए colonoscopy की जाती है। Colitis, bleeding या polyps का पता लगाने में मदद करती है।",
    slug: "colonoscopy",
  },
  {
    name: "Pancreatitis",
    nameHindi: "अग्नाशयशोथ",
    desc: "Pancreas में सूजन होने पर पेट में तेज़ दर्द होता है। Acute और chronic pancreatitis दोनों का इलाज किया जाता है।",
    slug: "pancreatitis",
  },
  {
    name: "Ulcerative Colitis",
    nameHindi: "अल्सरेटिव कोलाइटिस",
    desc: "बड़ी आंत में सूजन और घाव की यह बीमारी खून के साथ दस्त करती है। सही दवाई से इसे control में रखा जा सकता है।",
    slug: "ulcerative-colitis",
  },
  {
    name: "Abdominal Pain",
    nameHindi: "पेट दर्द / Pet Dard",
    desc: "बार-बार या लंबे समय से पेट दर्द को नज़रअंदाज़ न करें। यह कई गंभीर बीमारियों का संकेत हो सकता है।",
    slug: "abdominal-pain",
  },
];

export default function Conditions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Conditions Treated</p>
          <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-3">
            हम कौन सी बीमारियां ठीक करते हैं?
          </h2>
          <p className="text-slate text-sm font-hindi">
            नीचे क्लिक करें और अपनी बीमारी के बारे में जानें
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {CONDITIONS_LIST.map((condition, i) => (
            <div
              key={condition.slug}
              className="border border-gray-light rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-offwhite transition-colors"
              >
                <div>
                  <span className="text-navy font-semibold text-sm">{condition.name}</span>
                  <span className="ml-2 text-gray-muted text-xs font-hindi">({condition.nameHindi})</span>
                </div>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-teal flex-shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4">
                  <p className="text-slate text-sm leading-relaxed font-hindi mb-3">
                    {condition.desc}
                  </p>
                  <Link
                    href={`/services/${condition.slug}`}
                    className="inline-flex items-center gap-1 text-teal text-xs font-semibold hover:underline"
                  >
                    Read more & Book Appointment →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
