import type { Metadata } from "next";
import BlogLeadIntel from "@/components/admin/blog-lead-intel";

export const metadata: Metadata = {
  title: "Blog → Lead Intelligence | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminBlogLeadsPage() {
  return <BlogLeadIntel />;
}
