import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const title = "Lar de Idosos Vovó Nice | Juiz de Fora, MG";
const description =
  "Casa de acolhimento para pessoas idosas em Juiz de Fora, com cuidado individualizado, rotina tranquila e a companhia de quem cuida de perto.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Lar de Idosos Vovó Nice",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${sourceSans.variable}`}
    >
      <body className="bg-ivory text-ink font-body text-[18px] leading-[1.6] antialiased [text-wrap:pretty]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
