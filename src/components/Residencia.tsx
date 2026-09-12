import Image from "next/image";

export function Residencia() {
  return (
    <section
      id="residencia"
      className="mx-auto max-w-[1200px] scroll-mt-[90px] px-[clamp(18px,4vw,40px)] py-[clamp(52px,8vw,104px)]"
    >
      <div className="grid grid-cols-1 items-center gap-x-[clamp(32px,5vw,72px)] gap-y-10 sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className="flex min-w-0 items-start gap-4">
          <figure className="relative min-w-0 flex-1">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm">
              <Image
                src="/fotos/sala-convivencia.webp"
                alt="Sala de convivência com sofá amplo, onde os moradores assistem televisão e recebem visitas"
                fill
                sizes="(min-width: 1024px) 280px, 45vw"
                className="object-cover saturate-[.94]"
              />
            </div>
          </figure>
          <figure className="relative mt-11 min-w-0 flex-1">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm">
              <Image
                src="/fotos/quarto-detalhe.webp"
                alt="Criado-mudo de madeira ao lado da cama, com abajur e objetos pessoais do morador"
                fill
                sizes="(min-width: 1024px) 280px, 45vw"
                className="object-cover saturate-[.94]"
              />
            </div>
          </figure>
        </div>
        <div className="min-w-0">
          <p className="mb-5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
            A Residência
          </p>
          <h2 className="mb-[22px] font-display text-[clamp(30px,4vw,46px)] leading-[1.12] font-normal text-ink">
            Um lugar para chamar de lar
          </h2>
          <p className="mb-[18px] max-w-[56ch] text-[19px] leading-[1.7] text-body">
            Quem chega aqui não passa a ser &ldquo;um paciente&rdquo;.
            Continua sendo a mesma pessoa, com o seu horário preferido de
            café, a novela que não perde, o cantinho da casa onde gosta de
            ficar.
          </p>
          <p className="mb-[18px] max-w-[56ch] text-[19px] leading-[1.7] text-body">
            Nossa rotina é organizada, mas nunca rígida. Os moradores mantêm
            sua autonomia no que conseguem fazer sozinhos e recebem apoio no
            que precisam — sempre com privacidade e respeito. Objetos
            pessoais, fotos de família e lembranças são bem-vindos: o quarto
            é da pessoa, não do lar.
          </p>
          <p className="mb-[30px] max-w-[56ch] text-[19px] leading-[1.7] text-body">
            E a família continua perto. Visitas, conversas e notícias do dia
            fazem parte do cuidado.
          </p>
          <blockquote className="max-w-[44ch] border-l-2 border-sage py-1.5 pl-[22px] font-display text-[22px] leading-[1.45] text-petrol italic">
            Dignidade não é um serviço à parte. É o jeito de fazer todo o
            resto.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
