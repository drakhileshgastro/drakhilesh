import type { Metadata } from "next";
import BlogManager from "@/components/admin/blog-manager";

export const metadata: Metadata = {
  title: "Blog CMS | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminBlogPage() {
  return <BlogManager />;
}
