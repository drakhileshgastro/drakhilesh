import type { Metadata } from "next";
import WebsitePages from "@/components/admin/website-pages";

export const metadata: Metadata = {
  title: "Website Pages | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminPagesPage() {
  return <WebsitePages />;
}
