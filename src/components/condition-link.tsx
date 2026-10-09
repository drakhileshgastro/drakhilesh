import Link from "next/link";
import type { ReactNode } from "react";
import { getServiceBySlug } from "@/data/services-data";

/** Keep clinical labels visible without linking to a nonexistent condition page. */
export default function ConditionLink({ slug, className, children }: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  const canonicalSlug = slug === "gerd" ? "acid-reflux" : slug;
  return getServiceBySlug(canonicalSlug) ? (
    <Link href={`/conditions/${canonicalSlug}`} className={className}>{children}</Link>
  ) : (
    <div className={className}>{children}</div>
  );
}
