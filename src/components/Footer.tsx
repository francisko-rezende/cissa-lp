import Image from "next/image";
import { TrackedLink } from "@/components/TrackedLink";
import { PHONE_DISPLAY, PHONE_TEL, waContato } from "@/lib/whatsapp";

const footerNav = [
  { href: "#residencia", label: "A Residência" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#cuidados", label: "Cuidados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Localização" },
];

export function Footer() {
  return (
    <footer className="bg-ink px-[clamp(18px,4vw,40px)] pt-[clamp(44px,6vw,72px)] pb-7 text-ivory/78">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-[clamp(28px,4vw,48px)] border-b border-ivory/16 pb-9 sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
          <div className="min-w-0">
            <Image
              src="/logo/logo-principal-fundo-escuro.svg"
              alt="Residencial Sênior Vovó Nice"
              width={220}
              height={64}
              className="mb-[18px] h-auto w-[220px] max-w-full"
            />
            <p className="max-w-[34ch] text-[16.5px] leading-[1.65]">
              Uma casa de acolhimento para pessoas idosas em Juiz de Fora, com
              cuidado individualizado e rotina tranquila.
            </p>
          </div>
          <div className="min-w-0">
            <h3 className="mb-4 text-[12.5px] font-semibold tracking-[1.6px] text-ivory uppercase">
              Contato
            </h3>
            <p className="text-[16.5px] leading-[1.8]">
              Rua Antônio de Paula Mendes, 727
              <br />
              Bandeirantes · Juiz de Fora, MG
              <br />
              CEP 36047-080
            </p>
            <p className="mt-3 text-[16.5px]">
              <TrackedLink
                event="phone_click"
                location="footer"
                href={`tel:${PHONE_TEL}`}
                className="border-b border-ivory/40 text-ivory no-underline"
              >
                {PHONE_DISPLAY}
              </TrackedLink>
              <br />
              <TrackedLink
                event="whatsapp_click"
                location="footer"
                href={waContato}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#A9C3B4]/50 text-[#A9C3B4] no-underline"
              >
                WhatsApp
              </TrackedLink>
            </p>
          </div>
          {/* <div className="min-w-0"> */}
          {/*   <h3 className="mb-4 text-[12.5px] font-semibold tracking-[1.6px] text-ivory uppercase"> */}
          {/*     Atendimento */}
          {/*   </h3> */}
          {/*   <p className="text-[16.5px] leading-[1.8]"> */}
          {/*     [Horário de atendimento] */}
          {/*     <br /> */}
          {/*     [Horário de visitas] */}
          {/*     <br /> */}
          {/*     Emergências: [informação] */}
          {/*   </p> */}
          {/* </div> */}
          <div className="min-w-0">
            <h3 className="mb-4 text-[12.5px] font-semibold tracking-[1.6px] text-ivory uppercase">
              Navegação
            </h3>
            <nav
              aria-label="Rodapé"
              className="flex flex-col gap-2.5 text-[16.5px]"
            >
              {footerNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-ivory/82 no-underline transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3.5 pt-6 text-[14.5px] text-ivory/60">
          <span>© 2026 Residencial Sênior Vovó Nice · Hercília Freitas</span>
        </div>
      </div>
    </footer>
  );
}
