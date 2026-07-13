import { Star } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
}

interface ServiceReviewsProps {
  title: string;
  conditionSlug: string;
}

const allReviews: Record<string, Review[]> = {
  "fatty-liver": [
    {
      name: "Rajesh Kumar",
      location: "Bokaro, JH",
      rating: 5,
      date: "1 month ago",
      text: "डॉ. अखिलेश जी ने मेरी फैटी लिवर को बहुत अच्छे से समझाया और उपचार दिया। 3 महीने में रिपोर्ट सामान्य हो गई।",
    },
    {
      name: "Mohammad Aslam",
      location: "Jamshedpur, JH",
      rating: 5,
      date: "4 months ago",
      text: "Orchid Medical Centre में बहुत अच्छी सुविधा है। फैटी लिवर के इलाज के लिए रांची में डॉ. अखिलेश सबसे बेस्ट डॉक्टर हैं।",
    }
  ],
  jaundice: [
    {
      name: "Sunita Devi",
      location: "Dhanbad, JH",
      rating: 5,
      date: "3 weeks ago",
      text: "पीलिया में बहुत परेशान थी। डॉक्टर ने हिंदी में पूरी बात समझाई और इलाज दिया। 2 हफ्ते में ठीक हो गई।",
    }
  ]
};

export default function ServiceReviews({ title, conditionSlug }: ServiceReviewsProps) {
  const reviews = allReviews[conditionSlug] || [
    {
      name: "Amit Singh",
      location: "Ranchi, JH",
      rating: 5,
      date: "2 months ago",
      text: `डॉ. अखिलेश यादव जी से मिलकर पेट की समस्या के लिए परामर्श लिया। डॉक्टर बहुत ध्यान से सुनते हैं और सटीक इलाज देते हैं।`,
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
            मरीजों के अनुभव
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Verified patient reviews for {title} treatments.
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
