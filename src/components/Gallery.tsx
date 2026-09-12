"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { fotos } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const glide = useCallback((el: HTMLElement, to: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = el.scrollLeft;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      from === to
    ) {
      el.scrollLeft = to;
      return;
    }
    const t0 = performance.now();
    const dur = 420;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      el.scrollLeft = from + (to - from) * e;
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        el.scrollLeft = to;
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const scrollByDir = useCallback(
    (dir: number) => {
      const el = trackRef.current;
      if (!el) return;
      const figs = Array.from(el.querySelectorAll<HTMLElement>("figure"));
      if (!figs.length) return;
      let cur = 0;
      figs.forEach((f, i) => {
        if (
          Math.abs(f.offsetLeft - el.scrollLeft) <
          Math.abs(figs[cur].offsetLeft - el.scrollLeft)
        ) {
          cur = i;
        }
      });
      const target = figs[Math.max(0, Math.min(figs.length - 1, cur + dir))];
      glide(el, target.offsetLeft);
    },
    [glide]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByDir(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByDir(-1);
      }
    },
    [scrollByDir]
  );

  return (
    <section
      id="estrutura"
      className="scroll-mt-[90px] py-[clamp(52px,8vw,96px)]"
    >
      <div className="mx-auto mb-[clamp(26px,3vw,40px)] flex max-w-[1200px] flex-wrap items-end justify-between gap-6 px-[clamp(18px,4vw,40px)]">
        <div className="min-w-0 flex-1 basis-[340px]">
          <p className="mb-3.5 text-[14.5px] font-semibold tracking-[1.6px] text-petrol uppercase">
            Estrutura
          </p>
          <h2 className="mb-3.5 font-display text-[clamp(30px,4vw,46px)] leading-[1.12] font-normal text-ink">
            A casa por dentro
          </h2>
          <p className="max-w-[56ch] text-[18.5px] text-body-soft">
            Fotos feitas na própria residência, sem montagem. É assim que a
            casa é no dia a dia.
          </p>
        </div>
        <div className="flex flex-none gap-2.5">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label="Ver fotos anteriores"
            className="grid h-[52px] w-[52px] place-items-center rounded-full border-[1.5px] border-border-strong bg-ivory text-ink transition-colors hover:border-ink hover:bg-sand"
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label="Ver mais fotos"
            className="grid h-[52px] w-[52px] place-items-center rounded-full border-[1.5px] border-border-strong bg-ivory text-ink transition-colors hover:border-ink hover:bg-sand"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="group"
        aria-label="Galeria de fotos da residência — use as setas do teclado para navegar"
        className="gallery-track flex gap-[clamp(14px,2vw,24px)] overflow-x-auto px-[clamp(18px,4vw,40px)] pt-1 pb-[22px] [scroll-snap-type:x_proximity]"
      >
        {fotos.map((f) => (
          <figure
            key={f.src}
            className="m-0 w-[clamp(240px,34vw,360px)] flex-none [scroll-snap-align:start]"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm bg-beige">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                loading="lazy"
                sizes="360px"
                className="object-cover saturate-[.94]"
              />
            </div>
            <figcaption className="mt-3.5">
              <span className="mb-[3px] block font-display text-[19px] text-ink">
                {f.titulo}
              </span>
              <span className="block text-[15.5px] leading-[1.5] text-muted">
                {f.legenda}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,40px)] text-[15.5px] text-muted-soft">
        Arraste para o lado, use as setas ou o teclado para ver todos os
        ambientes.
      </p>
    </section>
  );
}
