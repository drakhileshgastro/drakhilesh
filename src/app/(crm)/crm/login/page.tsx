import type { Metadata } from "next";
import CrmLoginClient from "./login-client";

export const metadata: Metadata = {
  title: "CRM Login | Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function CrmLoginPage() {
  return <CrmLoginClient />;
}
