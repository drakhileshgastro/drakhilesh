import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import WhyChooseUs from "@/components/sections/why-choose";
import Testimonials from "@/components/sections/testimonials";
import Conditions from "@/components/sections/conditions";
import BlogPreview from "@/components/sections/blog-preview";
import Location from "@/components/sections/location";

export const metadata: Metadata = {
  title: "Best Gastroenterologist in Ranchi | Liver & Stomach Specialist",
  description:
    "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi. Expert treatment for fatty liver, jaundice, endoscopy, IBS, liver disease. Book appointment today. Serving Jharkhand, Bihar & Chhattisgarh.",
  alternates: {
    canonical: "https://drakhileshgastro.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Conditions />
      <BlogPreview />
      <Location />
    </>
  );
}
