import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MobileBottomBar from "@/components/layout/mobile-bottom-bar";
import ChatbotWidget from "@/components/layout/chatbot-widget";
import DesktopFloatingCTA from "@/components/layout/desktop-floating-cta";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[124px] lg:pt-[136px]">{children}</main>
      <Footer />
      <MobileBottomBar />
      <ChatbotWidget />
      <DesktopFloatingCTA />
    </>
  );
}
