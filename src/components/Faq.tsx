"use client";

import { useState } from "react";
import { duvidas } from "@/lib/content";
import { MinusIcon, PlusIcon } from "@/components/icons";

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section
      id="cuidados"
      className="scroll-mt-[90px] border-y border-border-soft bg-sand px-[clamp(18px,4vw,40px)] py-[clamp(52px,8vw,96px)]"
    >
      <div className="mx-auto max-w-[1060px]">
        <p className="mb-3.5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
          Cuidados
        </p>
        <h2 className="mb-3.5 font-display text-[clamp(30px,4vw,46px)] leading-[1.12] font-normal text-ink">
          As dúvidas que toda família tem
        </h2>
        <p className="mb-[clamp(28px,4vw,42px)] max-w-[58ch] text-[18.5px] text-body-soft">
          Respostas diretas, sem letras miúdas. Se ficar qualquer dúvida,
          fale com a gente pelo WhatsApp.
        </p>
        <div className="border-t border-border">
          {duvidas.map((d, i) => {
            const isOpen = aberta === i;
            return (
              <div key={d.pergunta} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setAberta((cur) => (cur === i ? null : i))}
                  aria-expanded={isOpen}
                  className="flex min-h-14 w-full items-center justify-between gap-4.5 border-0 bg-transparent px-1 py-[22px] text-left font-display text-[clamp(19px,2.2vw,23px)] leading-[1.3] text-ink transition-colors hover:text-petrol"
                >
                  {d.pergunta}
                  <span
                    aria-hidden="true"
                    className="grid h-[30px] w-[30px] flex-none place-items-center rounded-full border-[1.5px] border-border-strong text-petrol"
                  >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                {isOpen && (
                  <div className="max-w-[64ch] px-16 pb-[26px] pl-1 text-[18px] leading-[1.7] text-body">
                    {d.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-[26px] rounded border border-dashed border-border-dashed bg-ivory px-4 py-3.5 text-[15.5px] text-muted">
          <strong className="font-semibold text-body-soft">
            Nota para preenchimento:
          </strong>{" "}
          os trechos entre colchetes devem ser substituídos pelas informações
          reais da residência (equipe, horários, valores e documentação).
          Nada foi inventado.
        </p>
      </div>
    </section>
  );
}
