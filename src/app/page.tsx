import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Cuidadora } from "@/components/Cuidadora";
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
import { duvidas } from "@/lib/content";
import { PHONE_TEL } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lar de Idosos Vovó Nice",
    description:
      "Casa de acolhimento para pessoas idosas em Juiz de Fora, com cuidado individualizado, rotina tranquila e a companhia de quem cuida de perto.",
    url: SITE_URL,
    telephone: PHONE_TEL,
    image: `${SITE_URL}/fotos/fachada.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Antônio de Paula Mendes, 727",
      addressLocality: "Juiz de Fora",
      addressRegion: "MG",
      postalCode: "36047-080",
      addressCountry: "BR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: duvidas.map((d) => ({
      "@type": "Question",
      name: d.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: d.resposta,
      },
    })),
  },
];

export default function Home() {
  return (
    <div className="overflow-x-clip bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Cuidadora />
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
