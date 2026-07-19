import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MobileBottomBar from "@/components/layout/mobile-bottom-bar";
import ChatbotWidget from "@/components/layout/chatbot-widget";
import DesktopFloatingCTA from "@/components/layout/desktop-floating-cta";
import VisitTracker from "@/components/layout/visit-tracker";
import ExitIntentPopup from "@/components/layout/exit-intent-popup";
import ScrollCTA from "@/components/layout/scroll-cta";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VisitTracker />
      <Navbar />
      <main className="flex-1 pt-[124px] lg:pt-[136px]">{children}</main>
      <Footer />
      <MobileBottomBar />
      <ChatbotWidget />
      <DesktopFloatingCTA />
      <ScrollCTA />
      <ExitIntentPopup />
    </>
  );
}
