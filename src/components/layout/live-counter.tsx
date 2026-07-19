"use client";

import { useEffect, useState } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => setCount(d.leadsThisWeek ?? null))
      .catch(() => {});
  }, []);

  if (count === null || count < 3) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-border/50 rounded-full shadow-xs text-[11px] font-sans font-semibold text-forest">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
      <span>{count} patients consulted this week</span>
    </div>
  );
}
