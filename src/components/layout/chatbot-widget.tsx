"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const DISCLAIMER =
  "यह chatbot सामान्य जानकारी देता है। यह professional medical advice नहीं है। किसी भी स्वास्थ्य समस्या के लिए Dr. Akhilesh Yadav से मिलें।";

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: `Namaskar! 🙏 Main Dr. Akhilesh ka appointment assistant hoon.\n\nMain aapke liye Dr. Akhilesh Yadav ke saath appointment fix karne mein help kar sakta hoon.\n\nApna naam aur mobile number share karein — hamaari team 2 ghante mein call karegi. 📞`,
};

function generateSessionId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export default function ChatbotWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [sessionId] = useState(() => generateSessionId());
  const bottomRef = useRef<HTMLDivElement>(null);

  // Delay button appearance by 25s — avoid cluttering the page on first load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 25000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  if (!visible) return null;

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg], session_id: sessionId }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Abhi chatbot unavailable hai. WhatsApp karein: wa.me/${DOCTOR.whatsappNumber}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        id="chatbot-trigger"
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        className="fixed bottom-20 left-4 lg:bottom-6 lg:left-6 z-40 w-12 h-12 lg:w-14 lg:h-14 bg-forest text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center touch-manipulation cursor-pointer"
      >
        {open ? (
          <ChevronDown size={22} className="text-white" />
        ) : (
          <Bot size={22} className="text-white" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-36 left-4 lg:bottom-24 lg:left-6 z-40 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-3xl shadow-2xl border border-border flex flex-col overflow-hidden" style={{ maxHeight: 'calc(100vh - 160px)' }}>
          {/* Header */}
          <div className="bg-forest px-4 py-3.5 flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Dr. Akhilesh&apos;s Assistant</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                <span className="text-gray-muted text-xs">Online</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-muted hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Disclaimer */}
          {showDisclaimer && (
            <div className="px-3 py-2 bg-gold-light border-b border-gray-light flex items-start gap-2">
              <p className="text-xs text-slate leading-relaxed flex-1 font-hindi">{DISCLAIMER}</p>
              <button
                onClick={() => setShowDisclaimer(false)}
                className="text-slate hover:text-navy flex-shrink-0 mt-0.5"
              >
                <X size={12} />
              </button>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-72">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line font-sans",
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-bg-sand/35 text-forest border border-border/40 rounded-bl-none"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-bg-sand/35 border border-border/40 px-3.5 py-2.5 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:300ms]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border/50 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Apna naam ya mobile number likhein..."
              className="flex-1 text-xs px-3.5 py-2.5 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors min-h-[44px] text-forest placeholder:text-muted bg-white font-sans"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-11 h-11 bg-primary hover:bg-primary-dark rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-opacity flex-shrink-0 touch-manipulation cursor-pointer"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
