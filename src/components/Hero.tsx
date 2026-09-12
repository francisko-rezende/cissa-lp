import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { PHONE_DISPLAY, PHONE_TEL, waContato } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="topo"
      className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] py-[clamp(36px,6vw,84px)] pb-[clamp(40px,6vw,80px)]"
    >
      <div className="grid grid-cols-1 items-center gap-x-[clamp(28px,5vw,64px)] gap-y-10 sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div className="min-w-0">
          <p className="mb-[22px] inline-flex items-center gap-2.5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
            <span className="block h-px w-[26px] bg-sage" />
            Juiz de Fora · Minas Gerais
          </p>
          <h1 className="mb-6 font-display text-[clamp(38px,5.6vw,64px)] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
            Cuidado, conforto e acolhimento
            <br />
            <em className="text-petrol">para quem sempre cuidou de você.</em>
          </h1>
          <p className="mb-8 max-w-[54ch] text-[clamp(18px,2vw,20.5px)] leading-[1.65] text-body">
            O Lar de Idosos Vovó Nice é uma casa de verdade, preparada para
            receber pessoas idosas com atenção individualizada, rotina
            tranquila e a companhia de quem cuida de perto. Recebemos
            moradores independentes e também quem precisa de cuidado
            assistido no dia a dia.
          </p>
          <div className="mb-[30px] flex flex-wrap gap-3.5">
            <TrackedLink
              event="whatsapp_click"
              location="hero"
              href={waContato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center gap-2.5 rounded-md bg-accent px-[26px] py-4 text-[17.5px] font-semibold text-white no-underline transition-colors hover:bg-accent-hover active:bg-accent-active"
            >
              <WhatsAppIcon className="h-[21px] w-[21px]" />
              Fale conosco pelo WhatsApp
            </TrackedLink>
            <a
              href="#estrutura"
              className="inline-flex min-h-[54px] items-center gap-2 rounded-md border-[1.5px] border-border-strong px-6 py-4 text-[17.5px] font-semibold text-ink no-underline transition-colors hover:border-ink hover:bg-sand"
            >
              Conhecer a estrutura
            </a>
          </div>
          <p className="text-[16px] text-muted">
            Atendimento por telefone e WhatsApp:{" "}
            <TrackedLink
              event="phone_click"
              location="hero"
              href={`tel:${PHONE_TEL}`}
              className="border-b border-sage font-semibold text-ink no-underline"
            >
              {PHONE_DISPLAY}
            </TrackedLink>
          </p>
        </div>
        <div className="relative min-w-0">
          <div className="absolute -top-3.5 -left-3.5 right-[26px] bottom-[26px] rounded-sm bg-beige" />
          <figure className="relative m-0">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm">
              <Image
                src="/fotos/fachada.webp"
                alt="Fachada da casa do Lar de Idosos Vovó Nice, com varanda de tijolinho e plantas na entrada"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover saturate-[.94]"
              />
            </div>
            <figcaption className="mt-3.5 text-[15px] text-muted italic">
              Nossa casa, na Rua Antônio de Paula Mendes, no Bairro
              Bandeirantes.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
