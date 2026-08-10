import type { Metadata } from "next";
import TrafficStats from "@/components/admin/traffic-stats";

export const metadata: Metadata = {
  title: "Traffic Stats | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminTrafficPage() {
  return <TrafficStats />;
}
