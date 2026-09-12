import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { PHONE_DISPLAY, PHONE_TEL, waContato } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="px-[clamp(18px,4vw,40px)] py-[clamp(60px,9vw,120px)] text-center">
      <div className="mx-auto max-w-[720px]">
        <Image
          src="/logo/logo-simbolo.svg"
          alt=""
          width={40}
          height={48}
          className="mx-auto mb-[26px] h-auto w-[38px] opacity-[.85]"
        />
        <h2 className="mb-5 font-display text-[clamp(30px,4.4vw,50px)] leading-[1.1] font-normal text-ink">
          Conheça nossa casa e converse com a nossa equipe
        </h2>
        <p className="mb-8 text-[19px] leading-[1.65] text-body">
          Sabemos que escolher um lar para o seu pai, sua mãe ou sua avó não
          é uma decisão simples. Estamos aqui para responder tudo com
          paciência, no seu tempo.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <TrackedLink
            event="whatsapp_click"
            location="final_cta"
            href={waContato}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center gap-2.5 rounded-md bg-accent px-7 py-[17px] text-[18px] font-semibold text-white no-underline transition-colors hover:bg-accent-hover active:bg-accent-active"
          >
            <WhatsAppIcon className="h-[21px] w-[21px]" />
            Fale conosco pelo WhatsApp
          </TrackedLink>
          <TrackedLink
            event="phone_click"
            location="final_cta"
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-14 items-center gap-2.5 rounded-md border-[1.5px] border-border-strong px-[26px] py-[17px] text-[18px] font-semibold text-ink no-underline transition-colors hover:border-ink hover:bg-sand"
          >
            Ligar: {PHONE_DISPLAY}
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
