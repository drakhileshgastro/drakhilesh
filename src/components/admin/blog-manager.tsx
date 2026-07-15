"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-data";
import { Eye, Edit3, Plus, Sparkles, Clock, Tag } from "lucide-react";

export default function BlogManager() {
  const [aiTopic, setAiTopic] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiDraft, setAiDraft] = useState("");

  async function generateDraft() {
    if (!aiTopic.trim()) return;
    setAiLoading(true);
    setAiDraft("");
    try {
      const res = await fetch("/api/blog-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: aiTopic }),
      });
      const data = await res.json();
      setAiDraft(data.draft ?? "");
    } catch {
      setAiDraft("AI unavailable. Please add your Anthropic API key to generate drafts.");
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 font-bold text-lg">Blog CMS</h2>
          <p className="text-gray-500 text-xs mt-0.5">{BLOG_POSTS.length} published posts</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
          <Plus size={14} /> New Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Published posts */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-gray-900 font-bold text-sm">Published Posts</h3>
          {BLOG_POSTS.map((post) => (
            <div key={post.slug} className="bg-white rounded-2xl border border-gray-200 p-4 flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {post.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-gray-900 font-bold text-sm leading-tight font-hindi line-clamp-2">{post.titleHi}</h4>
                  <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0">Published</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="flex items-center gap-1 text-gray-400 text-[11px]">
                    <Tag size={10} /> {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-[11px]">
                    <Clock size={10} /> {post.readTimeMins} min read
                  </span>
                  <span className="text-gray-400 text-[11px]">{post.publishedAt}</span>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Link href={`/blog/${post.slug}`} target="_blank"
                  className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 rounded-lg hover:border-gray-400 hover:text-gray-700 transition-colors">
                  <Eye size={14} />
                </Link>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 rounded-lg hover:border-gray-700 hover:text-gray-900 transition-colors">
                  <Edit3 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Assist */}
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-gray-300" />
              <h3 className="text-white font-bold text-sm">AI Blog Assistant</h3>
            </div>
            <p className="text-gray-400 text-xs mb-4 font-hindi">
              Topic डालें — Claude AI Hindi blog draft generate करेगा
            </p>
            <input
              value={aiTopic}
              onChange={(e) => setAiTopic(e.target.value)}
              placeholder="e.g. Liver Cirrhosis Diet Tips"
              className="w-full px-3 py-2.5 text-xs border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-white/30 text-white placeholder-gray-500 mb-3"
            />
            <button
              onClick={generateDraft}
              disabled={!aiTopic.trim() || aiLoading}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-gray-900 text-sm font-bold rounded-xl disabled:opacity-40 hover:bg-gray-100 transition-colors"
            >
              <Sparkles size={14} />
              {aiLoading ? "Generating..." : "Generate Draft"}
            </button>
          </div>

          {aiDraft && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-900 font-bold text-xs">AI Draft</p>
                <button onClick={() => navigator.clipboard.writeText(aiDraft)}
                  className="text-gray-600 text-[10px] font-semibold hover:underline">Copy</button>
              </div>
              <div className="max-h-60 overflow-y-auto text-gray-500 text-xs leading-relaxed whitespace-pre-line font-hindi">
                {aiDraft}
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4">
            <h3 className="text-gray-900 font-bold text-xs mb-3">Blog Stats</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-gray-400">Total posts</span><span className="text-gray-900 font-bold">{BLOG_POSTS.length}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Categories</span><span className="text-gray-900 font-bold">3</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Languages</span><span className="text-gray-900 font-bold">Hindi + English</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
