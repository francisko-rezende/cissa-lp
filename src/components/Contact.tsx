import { PinIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { PHONE_DISPLAY, PHONE_TEL, waVisita } from "@/lib/whatsapp";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Rua+Ant%C3%B4nio+de+Paula+Mendes%2C+727%2C+Bandeirantes%2C+Juiz+de+Fora+-+MG%2C+36047-080";
const MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+de+Paula+Mendes%2C+727%2C+Juiz+de+Fora+-+MG";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua%20Ant%C3%B4nio%20de%20Paula%20Mendes%2C%20727%2C%20Bandeirantes%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036047-080&hl=pt-BR&z=16&output=embed";

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-[90px] border-t border-border bg-[#EDE7DB] px-[clamp(18px,4vw,40px)] py-[clamp(52px,8vw,96px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-[clamp(28px,4vw,56px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className="min-w-0">
          <p className="mb-3.5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
            Localização
          </p>
          <h2 className="mb-5 font-display text-[clamp(30px,4vw,44px)] leading-[1.12] font-normal text-ink">
            No Bairro Bandeirantes, em Juiz de Fora
          </h2>
          <p className="mb-[26px] max-w-[50ch] text-[18.5px] leading-[1.7] text-body">
            Uma rua residencial e tranquila, de fácil acesso para a família
            visitar e perto de comércio e serviços do bairro. Estacionamento na
            rua, em frente à casa.
          </p>
          <dl className="mb-[30px] grid gap-4.5">
            <div>
              <dt className="mb-[5px] text-[13px] font-semibold tracking-[1.4px] text-muted uppercase">
                Endereço
              </dt>
              <dd className="m-0 text-[18.5px] leading-[1.5] text-ink">
                Rua Antônio de Paula Mendes, 727
                <br />
                Bairro Bandeirantes · Juiz de Fora, MG
                <br />
                CEP 36047-080
              </dd>
            </div>
            <div>
              <dt className="mb-[5px] text-[13px] font-semibold tracking-[1.4px] text-muted uppercase">
                Telefone e WhatsApp
              </dt>
              <dd className="m-0 text-[18.5px] text-ink">
                <TrackedLink
                  event="phone_click"
                  location="contact"
                  href={`tel:${PHONE_TEL}`}
                  className="border-b border-sage text-ink no-underline"
                >
                  {PHONE_DISPLAY}
                </TrackedLink>
              </dd>
            </div>
            <div>
              <dt className="mb-[5px] text-[13px] font-semibold tracking-[1.4px] text-muted uppercase">
                Visitas
              </dt>
              <dd className="m-0 text-[18.5px] text-body-soft">
                Combine antes pelo WhatsApp
              </dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-3">
            <TrackedLink
              event="directions_click"
              location="contact"
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-md bg-ink px-6 py-[15px] text-[17px] font-semibold text-ivory no-underline transition-colors hover:bg-petrol"
            >
              <PinIcon />
              Como chegar
            </TrackedLink>
            <TrackedLink
              event="whatsapp_click"
              location="contact"
              href={waVisita}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-md border-[1.5px] border-[#A9C3B4] px-[22px] py-[15px] text-[17px] font-semibold text-accent no-underline transition-colors hover:border-accent hover:bg-[#E3EDE7]"
            >
              Agendar uma visita
            </TrackedLink>
          </div>
        </div>
        <div className="min-w-0">
          <div className="overflow-hidden rounded-[3px] border border-[#D5CCB9] bg-ivory">
            <iframe
              title="Mapa da localização do Residencial Sênior Vovó Nice"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[clamp(280px,42vw,420px)] w-full border-0 [filter:saturate(.72)_contrast(.96)]"
            />
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-border-soft px-[18px] py-4">
              <span className="text-[15.5px] text-body-soft">
                Bairro Bandeirantes · Juiz de Fora, MG
              </span>
              <a
                href={MAPS_SEARCH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15.5px] font-semibold"
              >
                Abrir no mapa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
