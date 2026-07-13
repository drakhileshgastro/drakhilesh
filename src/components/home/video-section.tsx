"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const featuredVideos = [
  {
    title: "फैटी लिवर क्या है और कैसे ठीक होता है?",
    titleEn: "What is Fatty Liver and How is it Treated?",
    duration: "4:32",
    thumbnail: null,
    youtubeId: "PLACEHOLDER",
  },
  {
    title: "एंडोस्कोपी से डरें नहीं — पूरी जानकारी",
    titleEn: "Don't Fear Endoscopy — Complete Guide",
    duration: "5:15",
    thumbnail: null,
    youtubeId: "PLACEHOLDER",
  },
  {
    title: "पेट दर्द कब होता है खतरनाक?",
    titleEn: "When is Stomach Pain Dangerous?",
    duration: "3:47",
    thumbnail: null,
    youtubeId: "PLACEHOLDER",
  },
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-bg-sand py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider border border-primary-light">
            Health Education
          </span>
          <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-3">
            डॉक्टर से सीखें — हिंदी में
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Dr. Akhilesh Yadav explains complex digestive conditions in simple Hindi.
            Watch, learn, and book your consultation.
          </p>
        </div>

        {/* Featured Video */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative bg-forest rounded-3xl overflow-hidden aspect-video group cursor-pointer">
            {/* Thumbnail placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary-dark/20">
              <div className="text-center">
                <div className="text-6xl mb-3">🎥</div>
                <p className="text-white font-hindi text-lg font-bold px-4">
                  {featuredVideos[0].title}
                </p>
                <p className="text-white/60 text-sm mt-1">{featuredVideos[0].titleEn}</p>
              </div>
            </div>
            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={28} className="text-primary ml-1" fill="currentColor" />
              </div>
            </button>
            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-lg">
              {featuredVideos[0].duration}
            </div>
          </div>
        </div>

        {/* More Videos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {featuredVideos.map((video, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="relative aspect-video bg-forest/10 flex items-center justify-center">
                <div className="text-4xl">🎥</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                    <Play size={16} className="text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-hindi text-forest font-bold text-sm leading-snug">{video.title}</h3>
                <p className="text-muted text-xs mt-1">{video.titleEn}</p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="text-center">
          <a
            href={DOCTOR.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold text-sm rounded-xl hover:bg-red-700 transition-colors"
          >
            <span>▶</span> YouTube पर Subscribe करें
          </a>
          <span className="mx-3 text-muted">·</span>
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-forest font-semibold text-sm rounded-xl hover:border-primary hover:text-primary transition-colors"
          >
            All Videos →
          </Link>
        </div>
      </div>
    </section>
  );
}
