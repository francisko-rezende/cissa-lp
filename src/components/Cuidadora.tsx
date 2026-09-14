import Image from "next/image";

export function Cuidadora() {
  return (
    <section
      id="cuidadora"
      className="scroll-mt-[90px] px-[clamp(18px,4vw,40px)] py-[clamp(52px,8vw,104px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-x-[clamp(32px,5vw,72px)] gap-y-10 sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className="min-w-0 sm:order-1">
          <p className="mb-5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
            Quem cuida
          </p>
          <h2 className="mb-[22px] font-display text-[clamp(30px,4vw,46px)] leading-[1.12] font-normal text-ink">
            Hercília está à frente do cuidado
          </h2>
          <p className="mb-[18px] max-w-[56ch] text-[19px] leading-[1.7] text-body">
            Hercília é quem responde pela casa e acompanha o dia a dia dos
            moradores de perto. São muitos anos de experiência como cuidadora de
            idosos, cuidando da higiene, da alimentação, da medicação e, também,
            da conversa e da atenção que fazem cada um se sentir em casa.
          </p>
          <p className="mb-[30px] max-w-[56ch] text-[19px] leading-[1.7] text-body">
            Além da experiência prática, ela está cursando o técnico de
            enfermagem, somando o que já aprendeu no dia a dia a uma formação
            técnica cada vez mais completa.
          </p>
          <p className="max-w-[44ch] font-display text-[22px] leading-[1.45] text-petrol italic">
            Para Hercília, cuidar bem é tratar com o mesmo carinho que ela
            dedicaria à própria família.
          </p>
        </div>
        <figure className="relative m-0 min-w-0 sm:order-2">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm">
            <Image
              src="/fotos/hercilia.jpeg"
              alt="Hercília, responsável pelo cuidado dos moradores do Residencial Sênior Vovó Nice"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover saturate-[.94]"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
