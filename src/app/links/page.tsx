import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRightIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { PHONE_DISPLAY, PHONE_TEL, waContato } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Vovó Nice | Contato",
  description:
    "Cartão digital do Lar de Idosos Vovó Nice: fale pelo WhatsApp, conheça o site e veja como chegar até a casa, em Juiz de Fora, MG.",
};

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Rua+Ant%C3%B4nio+de+Paula+Mendes%2C+727%2C+Bandeirantes%2C+Juiz+de+Fora+-+MG%2C+36047-080";
const MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+de+Paula+Mendes%2C+727%2C+Juiz+de+Fora+-+MG";

const links = [
  {
    label: "Conheça a Vovó Nice",
    hint: "Fotos, estrutura e mais detalhes da casa",
    href: "/",
    external: false,
    event: "website_click" as const,
  },
  {
    label: "Como chegar",
    hint: "Rota até o Bairro Bandeirantes",
    href: MAPS_DIRECTIONS,
    external: true,
    event: "directions_click" as const,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-dvh bg-sand px-[clamp(14px,4vw,24px)] py-[clamp(28px,7vw,56px)]">
      <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-md border border-border bg-ivory sm:shadow-[var(--shadow-card)]">
        <div className="px-[clamp(22px,6vw,38px)] pt-[clamp(34px,8vw,46px)] pb-[clamp(30px,6vw,40px)]">
          {/* Identity */}
          <div className="mb-7 flex flex-col items-center text-center">
            <Image
              src="/logo/logo-simbolo.svg"
              alt=""
              width={40}
              height={48}
              className="mb-4 h-auto w-9"
            />
            <p className="mb-2 inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[2px] text-muted uppercase">
              <span className="block h-px w-[18px] bg-sage" aria-hidden="true" />
              Lar de Idosos
              <span className="block h-px w-[18px] bg-sage" aria-hidden="true" />
            </p>
            <h1 className="mb-2 font-display text-[clamp(32px,9vw,40px)] leading-[1.05] font-normal text-ink">
              Vovó Nice
            </h1>
            <p className="text-[15.5px] text-body-soft">
              Residência para pessoas idosas
              <br />
              Juiz de Fora, MG
            </p>
          </div>

          {/* Welcome message */}
          <div className="mb-8 border-t border-border-soft pt-7 text-center">
            <p className="mb-2.5 font-display text-[21px] leading-[1.4] text-petrol italic">
              Cuidado, conforto e acolhimento para quem sempre cuidou de
              você.
            </p>
            <p className="mx-auto max-w-[36ch] text-[15.5px] leading-[1.6] text-body-soft">
              Uma casa de verdade em Juiz de Fora, com atenção próxima e
              rotina tranquila para cada morador.
            </p>
          </div>

          {/* Primary CTA */}
          <TrackedLink
            event="whatsapp_click"
            location="links_primary"
            href={waContato}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[60px] w-full items-center justify-center gap-2.5 rounded-md bg-accent px-6 text-center text-[17.5px] font-semibold text-white no-underline shadow-[var(--shadow-button)] transition-colors hover:bg-accent-hover active:bg-accent-active"
          >
            <WhatsAppIcon className="h-[22px] w-[22px]" />
            Fale conosco pelo WhatsApp
          </TrackedLink>
          <p className="mt-3 mb-8 text-center text-[14px] text-muted">
            Tire suas dúvidas, sem compromisso.
          </p>

          {/* Secondary links */}
          <div className="mb-9 divide-y divide-border-soft overflow-hidden rounded-md border border-border">
            {links.map((l) => (
              <TrackedLink
                key={l.href}
                event={l.event}
                location="links_page"
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex min-h-[68px] items-center gap-3.5 px-5 py-4 no-underline transition-colors hover:bg-sand"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-[16.5px] font-semibold text-ink">
                    {l.label}
                  </span>
                  <span className="block text-[14px] text-muted">
                    {l.hint}
                  </span>
                </span>
                <ArrowUpRightIcon className="h-[18px] w-[18px] flex-none text-muted-soft" />
              </TrackedLink>
            ))}
          </div>

          {/* Sobre */}
          <div className="mb-8 flex gap-4 border-t border-border-soft pt-7">
            <div className="relative aspect-square w-[76px] flex-none overflow-hidden rounded-md">
              <Image
                src="/fotos/hercilia.jpeg"
                alt="Hercília, responsável pelo cuidado dos moradores"
                fill
                sizes="76px"
                className="object-cover saturate-[.94]"
              />
            </div>
            <div className="min-w-0">
              <h2 className="mb-1.5 font-display text-[19px] font-medium text-ink">
                Sobre a Vovó Nice
              </h2>
              <p className="text-[15px] leading-[1.6] text-body-soft">
                Uma casa preparada para receber pessoas idosas com
                segurança, conforto e acolhimento, com atenção ao dia a dia
                e ao bem-estar de cada morador.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6 border-t border-border-soft pt-7">
            <div className="mb-2.5 flex items-center gap-2 text-[13px] font-semibold tracking-[1.4px] text-muted uppercase">
              <PinIcon className="h-4 w-4 text-petrol" />
              Juiz de Fora — MG
            </div>
            <p className="mb-2 text-[15.5px] leading-[1.6] text-ink">
              Rua Antônio de Paula Mendes, 727
              <br />
              Bairro Bandeirantes · CEP 36047-080
            </p>
            <TrackedLink
              event="directions_click"
              location="links_location"
              href={MAPS_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.5px] font-semibold text-accent no-underline"
            >
              Abrir no mapa
            </TrackedLink>
          </div>

          {/* Atendimento */}
          <div className="border-t border-border-soft pt-6">
            <h2 className="mb-2 text-[13px] font-semibold tracking-[1.4px] text-muted uppercase">
              Atendimento
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-body-soft">
              Visitas: combine pelo WhatsApp
              <br />
              <span className="text-muted italic">
                [Horário de atendimento]
              </span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-sand/70 px-[clamp(22px,6vw,38px)] py-6 text-center">
          <p className="mb-1 text-[15px] font-semibold text-ink">
            Vovó Nice
          </p>
          <p className="mb-3 text-[14px] text-muted">
            Cuidado, conforto e acolhimento.
          </p>
          <p className="mb-3 text-[15px] text-body-soft">
            <TrackedLink
              event="phone_click"
              location="links_footer"
              href={`tel:${PHONE_TEL}`}
              className="text-ink no-underline"
            >
              {PHONE_DISPLAY}
            </TrackedLink>
          </p>
          <TrackedLink
            event="website_click"
            location="links_footer"
            href="/"
            className="border-b border-sage text-[13.5px] font-semibold text-ink no-underline"
          >
            Voltar para o site
          </TrackedLink>
        </div>
      </div>
    </main>
  );
}
