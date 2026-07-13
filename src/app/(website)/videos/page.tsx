import type { Metadata } from "next";
import Link from "next/link";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Education Videos | Dr. Akhilesh Yadav, Ranchi",
  description:
    "Watch educational videos on liver disease, fatty liver, endoscopy, gastroenterology, and digestive health by Dr. Akhilesh Yadav, DM Gastroenterologist, Ranchi.",
  alternates: { canonical: "https://drakhileshgastro.com/videos" },
};

const VIDEO_TOPICS = [
  { title: "Fatty Liver क्या है और कैसे ठीक होती है?", hindiDesc: "NAFLD/NASH, symptoms, diet, treatment — सब हिंदी में", icon: "🫀" },
  { title: "Endoscopy से पहले क्या करें?", hindiDesc: "OGD Scopy की complete preparation guide", icon: "🔭" },
  { title: "पीलिया (Jaundice) — कारण और इलाज", hindiDesc: "Liver-related jaundice — कब डॉक्टर के पास जाएं", icon: "🌕" },
  { title: "Acidity / GERD का सही इलाज", hindiDesc: "Tablets से परे — lifestyle और diet changes", icon: "🔥" },
  { title: "Liver Cirrhosis — क्या करें, क्या न करें?", hindiDesc: "Advanced liver disease management in Hindi", icon: "🏥" },
  { title: "Colonoscopy — तैयारी और procedure", hindiDesc: "पूरी बड़ी आंत की जाँच — step by step", icon: "🔬" },
];

export default function VideosPage() {
  return (
    <div className="bg-bg min-h-screen">
      {/* Header */}
      <section className="bg-primary-light border-b border-border py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3 font-sans">
            Patient Education
          </p>
          <h1 className="text-forest text-3xl sm:text-4xl font-display font-bold mb-4">
            स्वास्थ्य शिक्षा Videos
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Dr. Akhilesh Yadav explain complex digestive and liver conditions in simple Hindi — so you understand your health better.
          </p>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-red-600 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-forest font-display font-bold text-lg mb-1">YouTube Channel पर Subscribe करें</h2>
            <p className="text-muted text-sm mb-4">New videos every week — liver disease, gut health, endoscopy tips, patient stories. सब हिंदी में।</p>
            <a
              href={DOCTOR.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white font-bold text-sm rounded-xl hover:bg-red-700 transition-colors min-h-[48px]"
            >
              YouTube पर देखें →
            </a>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-forest font-display font-bold text-xl mb-6">
          Video Topics — जल्द आ रहे हैं
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VIDEO_TOPICS.map((topic, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{topic.icon}</span>
              <div>
                <h3 className="text-forest font-display font-semibold text-sm mb-1">
                  {topic.title}
                </h3>
                <p className="text-muted text-xs font-hindi">{topic.hindiDesc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-white font-display font-bold text-xl mb-2">
            अभी Appointment लें
          </h3>
          <p className="text-white/80 text-sm mb-6">
            Video देखने के बाद भी सवाल हो? Dr. Akhilesh Yadav से directly बात करें।
          </p>
          <Link
            href="/book"
            className="inline-flex items-center px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors min-h-[48px]"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
