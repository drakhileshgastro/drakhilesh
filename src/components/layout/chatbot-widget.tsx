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
  content: `Namaskar! 🙏 Main Dr. Akhilesh ka virtual assistant hoon.\n\nMain aapko liver, pet aur digestive conditions ke baare mein guide kar sakta hoon, ya appointment book karne mein help kar sakta hoon.\n\nAap kya jaanna chahte hain?`,
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

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
        body: JSON.stringify({ messages: [...messages, userMsg] }),
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
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        className="fixed bottom-4 right-4 z-40 w-14 h-14 bg-navy rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center touch-manipulation"
      >
        {open ? (
          <ChevronDown size={22} className="text-white" />
        ) : (
          <Bot size={22} className="text-teal" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-4 z-40 w-[calc(100vw-1.5rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-light flex flex-col overflow-hidden" style={{ maxHeight: 'calc(100vh - 120px)' }}>
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
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
                    "max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-teal text-white rounded-br-sm"
                      : "bg-offwhite text-navy rounded-bl-sm"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-offwhite px-3 py-2 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-muted rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-muted rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-muted rounded-full animate-bounce [animation-delay:300ms]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-light p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Hindi ya English mein likhein..."
              className="flex-1 text-sm px-3 py-2.5 border border-gray-light rounded-xl focus:outline-none focus:border-teal transition-colors min-h-[44px]"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-11 h-11 bg-teal rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-opacity flex-shrink-0 touch-manipulation"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
