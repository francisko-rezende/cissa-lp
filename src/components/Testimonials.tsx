import { depoimentos } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-[90px] px-[clamp(18px,4vw,40px)] py-[clamp(52px,8vw,96px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-[clamp(28px,4vw,40px)] font-display text-[clamp(28px,3.4vw,40px)] leading-[1.15] font-normal text-ink">
          O que dizem as famílias
        </h2>
        <div
          className={`grid grid-cols-1 gap-[clamp(16px,2vw,24px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))] ${
            depoimentos.length === 1 ? "max-w-[760px]" : ""
          }`}
        >
          {depoimentos.map((t) => (
            <figure
              key={t.autor}
              className="m-0 flex flex-col gap-5 rounded border border-border-soft bg-sand p-[clamp(24px,3.4vw,36px)]"
            >
              <blockquote className="font-display text-[20px] leading-[1.5] text-body italic">
                &ldquo;{t.texto}&rdquo;
              </blockquote>
              <figcaption className="mt-auto text-[15.5px] text-muted">
                <span className="font-semibold text-ink">{t.autor}</span>
                {" · "}
                {t.relacao}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
