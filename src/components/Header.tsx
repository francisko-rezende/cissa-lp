import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { waContato } from "@/lib/whatsapp";

const navLinks = [
  { href: "#residencia", label: "A Residência" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#cuidados", label: "Cuidados" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-ivory/94 px-[clamp(18px,4vw,40px)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-[clamp(16px,3vw,40px)] gap-y-3 py-3.5">
        <Link
          href="#topo"
          className="flex flex-none items-center gap-3 no-underline"
        >
          <Image
            src="/logo/logo-simbolo.svg"
            alt=""
            width={30}
            height={36}
            className="h-auto w-[30px]"
          />
          <span className="flex flex-col leading-[1.05]">
            <span className="text-[9.5px] font-semibold tracking-[2.4px] text-body-soft">
              LAR DE IDOSOS
            </span>
            <span className="font-display text-[23px] tracking-[0.2px] text-ink">
              Vovó Nice
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="ml-auto flex flex-wrap gap-x-[clamp(14px,2vw,28px)] gap-y-1 text-[16.5px]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-transparent px-0.5 py-2 text-ink no-underline transition-colors hover:border-sage"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <TrackedLink
          event="whatsapp_click"
          location="header"
          href={waContato}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2.5 rounded-md bg-accent px-5 py-3 text-[16px] font-semibold text-white no-underline shadow-[var(--shadow-button)] transition-colors hover:bg-accent-hover active:bg-accent-active"
        >
          <WhatsAppIcon />
          Fale conosco
        </TrackedLink>
      </div>
    </header>
  );
}
