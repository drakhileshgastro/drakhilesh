import type { Metadata } from "next";
import { Nunito, Hind } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const GA_ID = "G-ZYE92TKM0W";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["devanagari", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Akhilesh Yadav — Best Gastroenterologist in Ranchi | Liver & Stomach Specialist",
    template: "%s | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
  },
  description:
    "Dr. Akhilesh Yadav is a leading Gastroenterologist & Hepatologist at Orchid Medical Centre, Ranchi. Expert treatment for liver disease, fatty liver, jaundice, endoscopy & all digestive conditions. Serving patients from Jharkhand, Bihar & Chhattisgarh.",
  keywords: [
    "gastroenterologist Ranchi",
    "liver doctor Jharkhand",
    "fatty liver treatment Ranchi",
    "endoscopy Ranchi",
    "jaundice specialist Ranchi",
    "Dr Akhilesh Yadav",
    "Orchid Medical Centre Ranchi",
    "pet specialist Ranchi",
    "liver specialist Jharkhand",
  ],
  authors: [{ name: "Dr. Akhilesh Yadav" }],
  creator: "Scalify Labs",
  metadataBase: new URL("https://drakhileshgastro.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drakhileshgastro.com",
    siteName: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    title: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
    description:
      "Expert Gastroenterology & Hepatology care at Orchid Medical Centre, Ranchi. Book appointment online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi-IN" className={`${nunito.variable} ${hind.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
      {/* Google Analytics 4 — loads after page is interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </html>
  );
}
