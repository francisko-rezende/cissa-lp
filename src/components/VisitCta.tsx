import { WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { waVisita } from "@/lib/whatsapp";

export function VisitCta() {
  return (
    <section className="bg-ink px-[clamp(18px,4vw,40px)] py-[clamp(40px,5vw,64px)] text-ivory">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-7">
        <div className="min-w-0 flex-1 basis-[340px]">
          <h2 className="mb-2.5 font-display text-[clamp(26px,3.2vw,36px)] leading-[1.2] font-normal text-ivory">
            A melhor forma de conhecer é vir até aqui
          </h2>
          <p className="max-w-[52ch] text-[18px] text-ivory/82">
            Combine um horário com a gente pelo WhatsApp e venha ver a casa
            com calma, sem compromisso.
          </p>
        </div>
        <TrackedLink
          event="whatsapp_click"
          location="visit_cta"
          href={waVisita}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[54px] flex-none items-center gap-2.5 rounded-md bg-ivory px-[26px] py-4 text-[17.5px] font-bold text-accent no-underline transition-colors hover:bg-white hover:text-accent-active"
        >
          <WhatsAppIcon className="h-[21px] w-[21px]" />
          Agendar uma visita
        </TrackedLink>
      </div>
    </section>
  );
}
