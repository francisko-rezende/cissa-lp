import { duvidas } from "@/lib/content";
import { MinusIcon, PlusIcon } from "@/components/icons";

export function Faq() {
  return (
    <section
      id="cuidados"
      className="scroll-mt-[90px] border-y border-border-soft bg-sand px-[clamp(18px,4vw,40px)] py-[clamp(52px,8vw,96px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-3.5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
          Cuidados
        </p>
        <h2 className="mb-3.5 font-display text-[clamp(30px,4vw,46px)] leading-[1.12] font-normal text-ink">
          As dúvidas que toda família tem
        </h2>
        <p className="mb-[clamp(28px,4vw,42px)] max-w-[58ch] text-[18.5px] text-body-soft">
          Respostas diretas, sem letras miúdas. Se ficar qualquer dúvida, fale
          com a gente pelo WhatsApp.
        </p>
        <div className="border-t border-border">
          {duvidas.map((d) => (
            <details key={d.pergunta} className="group border-b border-border">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4.5 px-1 py-[22px] font-display text-[clamp(19px,2.2vw,23px)] leading-[1.3] text-ink transition-colors [&::-webkit-details-marker]:hidden hover:text-petrol">
                {d.pergunta}
                <span
                  aria-hidden="true"
                  className="grid h-[30px] w-[30px] flex-none place-items-center rounded-full border-[1.5px] border-border-strong text-petrol"
                >
                  <PlusIcon className="group-open:hidden" />
                  <MinusIcon className="hidden group-open:block" />
                </span>
              </summary>
              <div className="max-w-[64ch] px-16 pb-[26px] pl-1 text-[18px] leading-[1.7] text-body">
                {d.resposta}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
