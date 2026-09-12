import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Residencia } from "@/components/Residencia";
import { VisitCta } from "@/components/VisitCta";
import { Gallery } from "@/components/Gallery";
import { Faq } from "@/components/Faq";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] overflow-x-clip bg-ivory">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Residencia />
        <VisitCta />
        <Gallery />
        <Faq />
        <Testimonials />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
