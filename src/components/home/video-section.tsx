"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Video } from "lucide-react";
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
  return (
    <section className="bg-bg-sand py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Patient Education
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-4 leading-tight">
            डॉक्टर से सीखें — हिंदी में
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            Dr. Akhilesh Yadav explains complex digestive and liver conditions in simple, understandable Hindi.
          </p>
        </div>

        {/* Featured Video — Custom Thumbnail Style */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl overflow-hidden aspect-video group cursor-pointer shadow-sm border border-border">
            {/* Background layout: Doctor's face dominates the right, high contrast text on the left */}
            <div className="absolute inset-0 bg-white flex items-center justify-between">
              {/* Left Text */}
              <div className="w-[55%] p-6 md:p-10 text-left z-10">
                <div className="text-[10px] text-primary uppercase font-bold tracking-wider mb-2 font-sans">Featured Video</div>
                <h3 className="font-hindi text-forest text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
                  {featuredVideos[0].title}
                </h3>
                <p className="text-muted text-xs sm:text-sm font-sans mt-2">{featuredVideos[0].titleEn}</p>
                
                {/* Watch Indicator */}
                <div className="mt-6 flex items-center gap-2 text-primary text-xs font-bold font-sans uppercase tracking-wider">
                  <Play size={12} className="fill-primary" /> Watch Now · {featuredVideos[0].duration} Mins
                </div>
              </div>
              
              {/* Right Doctor Image */}
              <div className="w-[45%] h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10" />
                <img
                  src="/dr-akhilesh-improved.png"
                  alt="Dr. Akhilesh Yadav Video Guide"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105">
                <Play size={20} className="ml-1 fill-white" />
              </div>
            </div>
            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-lg font-sans z-20">
              {featuredVideos[0].duration}
            </div>
          </div>
        </div>

        {/* More Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredVideos.map((video, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-sm transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-bg-sand flex items-center justify-center border-b border-border">
                <Video className="text-primary/30 group-hover:scale-105 transition-transform duration-200" size={32} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 duration-200">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                    <Play size={16} className="text-primary ml-0.5 fill-primary" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded font-sans">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-hindi text-forest font-bold text-base leading-snug">{video.title}</h3>
                <p className="text-muted text-xs font-sans mt-1.5">{video.titleEn}</p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="text-center flex flex-wrap items-center justify-center gap-3">
          <a
            href={DOCTOR.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
          >
            Subscribe on YouTube
          </a>
          <Link
            href="/videos"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
          >
            Watch All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}
