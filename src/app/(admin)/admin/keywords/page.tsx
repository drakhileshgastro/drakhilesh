import type { Metadata } from "next";
import KeywordMapping from "@/components/admin/keyword-mapping";

export const metadata: Metadata = {
  title: "Keyword Mapping | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminKeywordsPage() {
  return <KeywordMapping />;
}
