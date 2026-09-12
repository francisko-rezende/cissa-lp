import { beneficios } from "@/lib/content";

export function Benefits() {
  return (
    <section
      aria-label="O que oferecemos"
      className="border-y border-border-soft bg-sand px-[clamp(18px,4vw,40px)] py-[clamp(44px,6vw,80px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-3 font-display text-[clamp(28px,3.4vw,40px)] leading-[1.15] font-normal text-ink">
          O cuidado do dia a dia
        </h2>
        <p className="mb-[clamp(30px,4vw,48px)] max-w-[58ch] text-[18.5px] text-body-soft">
          Coisas simples, feitas com atenção e constância — é isso que faz a
          diferença na vida de quem mora aqui.
        </p>
        <div className="flex flex-wrap gap-px border border-border bg-border">
          {beneficios.map(({ id, titulo, texto, Icon }) => (
            <div
              key={id}
              className="min-w-[260px] flex-1 basis-[260px] bg-ivory p-[clamp(24px,3vw,32px)]"
            >
              <Icon className="mb-4 text-petrol" />
              <h3 className="mb-[9px] font-display text-[22px] leading-[1.25] font-medium text-ink">
                {titulo}
              </h3>
              <p className="text-[16.8px] leading-[1.6] text-body-soft">
                {texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
