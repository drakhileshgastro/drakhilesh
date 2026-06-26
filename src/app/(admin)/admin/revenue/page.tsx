import type { Metadata } from "next";
import RevenueTracker from "@/components/admin/revenue-tracker";

export const metadata: Metadata = {
  title: "Revenue Tracker | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminRevenuePage() {
  return <RevenueTracker />;
}
