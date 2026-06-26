import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Ramesh Kumar",
    city: "Hazaribagh",
    rating: 5,
    text: "Dr. Akhilesh ne meri fatty liver bilkul theek kar di. Bahut achhe doctor hain — Hindi mein sab explain karte hain. Orchid Medical Centre ka staff bhi bahut helpful hai.",
    condition: "Fatty Liver",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Sunita Devi",
    city: "Palamu",
    rating: 5,
    text: "Mere husband ko pilia (jaundice) tha. Doctor ne jaldi diagnosis ki aur treatment shuru ki. Ek mahine mein bilkul theek ho gaye. Bahut shukriya Dr. Akhilesh ji.",
    condition: "Jaundice",
    timeAgo: "1 month ago",
  },
  {
    name: "Amit Sharma",
    city: "Ranchi",
    rating: 5,
    text: "Endoscopy ke liye bahut dara hua tha. Dr. Akhilesh ne sab explain kiya aur bilkul dard nahi hua. Professional aur caring doctor. Highly recommended.",
    condition: "Endoscopy",
    timeAgo: "3 weeks ago",
  },
  {
    name: "Priya Singh",
    city: "Dhanbad",
    rating: 5,
    text: "IBS ki bimari se 2 saal pareshaan thi. Kai doctor dikhaya tha, koi farak nahi pada. Dr. Akhilesh se milne ke baad 3 mahine mein bahut better feel kar rahi hoon.",
    condition: "IBS Treatment",
    timeAgo: "5 weeks ago",
  },
  {
    name: "Mohammad Rashid",
    city: "Giridih",
    rating: 5,
    text: "Liver cirrhosis ka ilaj karwa raha hoon. Dr. sahab bahut detail mein explain karte hain — kya khana hai, kya nahi, dawai kaise leni hai. Bahut caring hain.",
    condition: "Liver Cirrhosis",
    timeAgo: "2 months ago",
  },
  {
    name: "Kavita Sharma",
    city: "Bokaro",
    rating: 5,
    text: "Mujhe bahut samay se pet mein dard aur gas ki problem thi. Kai jagah dikhaya par koi farak nahi pada. Dr. Akhilesh ne IBS diagnose kiya aur sahi diet aur dawa se 2 mahine mein bahut better feel kar rahi hoon. Hindi mein explain karte hain — bahut achha lagta hai.",
    condition: "IBS Treatment",
    timeAgo: "6 weeks ago",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Patient Reviews</p>
          <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-3">
            What Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-navy font-bold">4.9</span>
            <span className="text-slate text-sm">on Google (200+ reviews)</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-rows-2">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-5 border border-gray-light shadow-sm"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote size={20} className="text-teal-light absolute -top-1 -left-1" />
                <p className="text-slate text-sm leading-relaxed pl-5 font-hindi">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-teal-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal font-bold text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm leading-tight">{review.name}</p>
                    <p className="text-gray-muted text-xs">{review.city} · {review.timeAgo}</p>
                  </div>
                </div>
                <span className="text-xs bg-teal-light text-teal font-medium px-2 py-0.5 rounded-full">
                  {review.condition}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://g.page/orchid-medical-centre-ranchi/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate text-sm hover:text-navy transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            See all Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
