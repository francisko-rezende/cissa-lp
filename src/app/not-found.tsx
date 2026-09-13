import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { waContato } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-[clamp(18px,4vw,40px)] py-[clamp(40px,6vw,80px)] text-center">
      <div className="mx-auto max-w-[480px]">
        <p className="mb-3.5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
          Página não encontrada
        </p>
        <h1 className="mb-5 font-display text-[clamp(30px,4.4vw,42px)] leading-[1.15] font-normal text-ink">
          Essa página não existe
        </h1>
        <p className="mb-8 text-[18px] leading-[1.65] text-body">
          O endereço pode ter mudado. Volte para o início ou fale com a gente
          pelo WhatsApp.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link
            href="/"
            className="inline-flex min-h-[54px] items-center gap-2.5 rounded-md border-[1.5px] border-border-strong px-6 py-4 text-[17.5px] font-semibold text-ink no-underline transition-colors hover:border-ink hover:bg-sand"
          >
            Voltar para o início
          </Link>
          <TrackedLink
            event="whatsapp_click"
            location="not_found"
            href={waContato}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[54px] items-center gap-2.5 rounded-md bg-accent px-[26px] py-4 text-[17.5px] font-semibold text-white no-underline transition-colors hover:bg-accent-hover active:bg-accent-active"
          >
            <WhatsAppIcon className="h-[21px] w-[21px]" />
            Fale conosco pelo WhatsApp
          </TrackedLink>
        </div>
      </div>
    </main>
  );
}
