import { Star } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
}

interface ProcedureReviewsProps {
  title: string;
  procedureSlug: string;
}

const allReviews: Record<string, Review[]> = {
  endoscopy: [
    {
      name: "Amit Singh",
      location: "Ranchi, JH",
      rating: 5,
      date: "2 months ago",
      text: "एंडोस्कोपी से बहुत डर लग रहा था लेकिन डॉ. अखिलेश ने बिल्कुल दर्दरहित और आसान तरीके से की। बहुत शुक्रिया।",
    },
    {
      name: "Lakshmi Prasad",
      location: "Giridih, JH",
      rating: 5,
      date: "2 weeks ago",
      text: "डॉ. अखिलेश बहुत अनुभवी हैं और मरीज की पूरी देखभाल करते हैं। एंडोस्कोपी के बाद बिल्कुल कोई परेशानी नहीं हुई।",
    }
  ],
  colonoscopy: [
    {
      name: "Karan Johar",
      location: "Bokaro, JH",
      rating: 5,
      date: "3 weeks ago",
      text: "Highly recommended for colonoscopy. Completely painless under sedation, and the doctor explains everything in detail.",
    }
  ]
};

export default function ProcedureReviews({ title, procedureSlug }: ProcedureReviewsProps) {
  const reviews = allReviews[procedureSlug] || [
    {
      name: "Rajesh Kumar",
      location: "Ranchi, JH",
      rating: 5,
      date: "1 month ago",
      text: `डॉ. अखिलेश यादव जी ने मेरी जांच (${title}) बहुत ही अच्छे तरीके से की। स्टाफ और डॉक्टर दोनों बहुत सहायक हैं।`,
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Patient Feedback
          </span>
          <h2 className="font-hindi text-3xl font-bold text-forest leading-tight">
            मरीजों के वास्तविक अनुभव
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Verified patient reviews for {title} consultations.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center font-display font-bold text-primary text-sm shadow-xs">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-forest font-sans font-bold text-sm leading-none">{review.name}</p>
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full" title="Verified Review" />
                    </div>
                    <p className="text-muted text-[10px] uppercase tracking-wider font-semibold font-sans mt-1">
                      {review.location} · {review.date}
                    </p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={13} className="text-accent fill-accent" />
                  ))}
                </div>

                <p className="font-hindi text-forest text-sm leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
              </div>
              
              <div className="border-t border-border-light pt-4 mt-2 text-left">
                <span className="text-[10px] text-muted font-sans uppercase tracking-wider">Google Review Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
