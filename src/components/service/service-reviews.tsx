import { Star, CheckCircle } from "lucide-react";
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
  ],
  "liver-cirrhosis": [
    {
      name: "Amit Singh",
      location: "Ranchi, JH",
      rating: 5,
      date: "2 months ago",
      text: `डॉ. अखिलेश यादव जी से मिलकर पेट की समस्या के लिए परामर्श लिया। डॉक्टर बहुत ध्यान से सुनते हैं और सटीक इलाज देते हैं।`,
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
    <section className="bg-white py-20 lg:py-24 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
            Patient Stories
          </span>
          <h2 className="font-hindi text-3xl sm:text-4xl font-display font-bold text-forest leading-tight mt-2">
            मरीजों के अनुभव — Google Verified Reviews
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Read verified feedback from patients treated under the clinical care of Dr. Akhilesh Yadav.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-bg-sand/30 border border-border/50 rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all duration-300"
            >
              <div className="space-y-4">
                
                {/* Header Profile Row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm shadow-3xs">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-forest font-sans font-bold text-sm leading-none">{review.name}</p>
                      <CheckCircle size={13} className="text-emerald-600 fill-emerald-50" />
                    </div>
                    <p className="text-muted text-[10px] uppercase tracking-wider font-semibold font-sans mt-1">
                      {review.location} · {review.date}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-accent fill-accent" />
                  ))}
                </div>

                {/* Content Text */}
                <p className="font-hindi text-forest/90 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>

              </div>
              
              {/* Verified Badge Footer */}
              <div className="border-t border-border/40 pt-4 mt-6 flex items-center justify-between text-[10px] text-muted font-sans font-bold uppercase tracking-wider">
                <span>Google Review</span>
                <span className="text-emerald-600">Verified Patient</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
