import { depoimentos } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="mx-auto max-w-[1200px] scroll-mt-[90px] px-[clamp(18px,4vw,40px)] py-[clamp(52px,8vw,96px)]"
    >
      <h2 className="mb-3 font-display text-[clamp(28px,3.4vw,40px)] leading-[1.15] font-normal text-ink">
        O que dizem as famílias
      </h2>
      <p className="mb-[clamp(28px,4vw,40px)] max-w-[58ch] text-[17.5px] text-muted">
        Espaço reservado para depoimentos reais de familiares. Podemos coletar
        por WhatsApp e publicar com autorização.
      </p>
      <div className="grid grid-cols-1 gap-[clamp(16px,2vw,24px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {depoimentos.map((t) => (
          <figure
            key={t.n}
            className="m-0 flex flex-col gap-4.5 rounded border border-dashed border-border-dashed bg-ivory p-[clamp(22px,3vw,30px)]"
          >
            <span className="text-[12px] font-semibold tracking-[1.4px] text-muted-soft uppercase">
              Depoimento {t.n} · a preencher
            </span>
            <blockquote className="font-display text-[20px] leading-[1.5] text-body italic">
              &ldquo;{t.placeholder}&rdquo;
            </blockquote>
            <figcaption className="mt-auto text-[15.5px] text-muted">
              Pablo de Castro · Neto da Dona Beatriz
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
