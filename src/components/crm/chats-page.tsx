"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { MessageCircle, Bot, User, Phone, ExternalLink, RefreshCw } from "lucide-react";
import { cn } from "@/lib/cn";

const supabase = createSupabaseBrowser();

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  ts?: string;
}

interface ChatSession {
  id: string;
  session_id: string;
  patient_name?: string;
  patient_phone?: string;
  messages: ChatMessage[];
  source: "website" | "whatsapp" | "facebook";
  status: "active" | "closed" | "converted";
  lead_id?: string;
  created_at: string;
  updated_at: string;
}

const SOURCE_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  website: { label: "Website", color: "text-blue-700", bg: "bg-blue-50" },
  whatsapp: { label: "WhatsApp", color: "text-green-700", bg: "bg-green-50" },
  facebook: { label: "Facebook", color: "text-indigo-700", bg: "bg-indigo-50" },
};

export default function ChatsPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selected, setSelected] = useState<ChatSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [tableReady, setTableReady] = useState(true);
  const [filter, setFilter] = useState<"all" | "converted" | "active">("all");

  const fetchSessions = useCallback(async () => {
    const { data, error } = await supabase
      .from("chat_sessions")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(100);

    if (error) {
      if (error.message?.includes("relation") || error.code === "42P01") {
        setTableReady(false);
      }
      setLoading(false);
      return;
    }

    setSessions((data as ChatSession[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSessions();

    const channel = supabase
      .channel("chat-sessions-crm")
      .on("postgres_changes", { event: "*", schema: "public", table: "chat_sessions" }, fetchSessions)
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [fetchSessions]);

  const filtered = sessions.filter((s) => {
    if (filter === "converted") return s.status === "converted" || s.lead_id;
    if (filter === "active") return s.status === "active";
    return true;
  });

  const totalSessions = sessions.length;
  const convertedCount = sessions.filter((s) => s.status === "converted" || s.lead_id).length;
  const withPhoneCount = sessions.filter((s) => s.patient_phone).length;

  if (!tableReady) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="text-3xl">💬</div>
        <h3 className="font-bold text-navy text-lg">Chat Sessions Not Set Up Yet</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Run <strong>supabase-migration-002.sql</strong> to enable AI chatbot session tracking in the CRM.
        </p>
        <p className="text-gray-400 text-xs">Supabase Dashboard → SQL Editor → New query</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Sessions", value: totalSessions, color: "text-navy", bg: "bg-gray-50" },
          { label: "With Phone", value: withPhoneCount, color: "text-blue-700", bg: "bg-blue-50" },
          { label: "Converted", value: convertedCount, color: "text-green-700", bg: "bg-green-50" },
        ].map((stat) => (
          <div key={stat.label} className={cn("rounded-2xl p-4 border border-gray-200", stat.bg)}>
            <p className={cn("text-2xl font-bold font-display", stat.color)}>{stat.value}</p>
            <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter + Refresh */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-2">
          {([
            { key: "all", label: "All" },
            { key: "converted", label: "Converted" },
            { key: "active", label: "Active" },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-semibold border transition-colors",
                filter === key ? "bg-navy text-white border-navy" : "bg-white text-gray-600 border-gray-200 hover:border-navy"
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <button onClick={fetchSessions} className="p-2 text-gray-400 hover:text-navy rounded-xl hover:bg-gray-50 border border-gray-200">
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Two-panel layout */}
      <div className="grid lg:grid-cols-2 gap-4">

        {/* Session list */}
        <div className="space-y-2">
          {loading ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center text-gray-400 text-sm">
              Loading sessions...
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <Bot size={28} className="text-gray-200 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No chat sessions yet.</p>
              <p className="text-gray-400 text-xs mt-1">Sessions appear here when patients use the AI chatbot on the website.</p>
            </div>
          ) : (
            filtered.map((session) => {
              const lastMsg = session.messages[session.messages.length - 1];
              const msgCount = session.messages.length;
              const src = SOURCE_LABELS[session.source] ?? SOURCE_LABELS.website;

              return (
                <button
                  key={session.id}
                  onClick={() => setSelected(session)}
                  className={cn(
                    "w-full text-left bg-white rounded-2xl border p-4 transition-colors hover:border-primary/40",
                    selected?.id === session.id ? "border-primary/50 bg-primary/5" : "border-gray-200"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {session.patient_name ? (
                        <User size={15} className="text-gray-500" />
                      ) : (
                        <Bot size={15} className="text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-navy truncate">
                          {session.patient_name ?? "Anonymous Visitor"}
                        </p>
                        <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-full", src.color, src.bg)}>
                          {src.label}
                        </span>
                        {(session.status === "converted" || session.lead_id) && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-50 text-green-700">
                            Converted
                          </span>
                        )}
                      </div>
                      {session.patient_phone && (
                        <p className="text-xs text-primary font-medium mt-0.5">{session.patient_phone}</p>
                      )}
                      {lastMsg && (
                        <p className="text-xs text-gray-500 mt-0.5 truncate">
                          {lastMsg.role === "user" ? "You: " : "Bot: "}{lastMsg.content}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] text-gray-400">{msgCount} messages</span>
                        <span className="text-[10px] text-gray-400">
                          {new Date(session.updated_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Chat thread view */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {!selected ? (
            <div className="p-12 text-center">
              <MessageCircle size={28} className="text-gray-200 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Select a session to read the conversation</p>
            </div>
          ) : (
            <div className="flex flex-col h-full max-h-[600px]">
              {/* Thread header */}
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-navy text-sm">{selected.patient_name ?? "Anonymous"}</p>
                  {selected.patient_phone && (
                    <a href={`tel:${selected.patient_phone}`} className="flex items-center gap-1 text-xs text-primary">
                      <Phone size={10} /> {selected.patient_phone}
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {selected.lead_id && (
                    <a href="/crm/leads" className="text-xs text-primary flex items-center gap-1 border border-primary/30 px-2 py-1 rounded-lg">
                      <ExternalLink size={10} /> View Lead
                    </a>
                  )}
                  <span className="text-xs text-gray-400">
                    {new Date(selected.created_at).toLocaleDateString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {selected.messages.map((msg, i) => (
                  <div key={i} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                    <div className={cn(
                      "max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line",
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-gray-100 text-navy rounded-bl-none"
                    )}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
