import { WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { waContato } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <TrackedLink
      event="whatsapp_click"
      location="floating"
      href={waContato}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Lar Vovó Nice pelo WhatsApp"
      className="fixed right-[clamp(14px,3vw,26px)] bottom-[clamp(14px,3vw,26px)] z-[60] inline-flex min-h-[54px] items-center gap-2.5 rounded-full bg-accent px-[18px] py-3.5 text-[16px] font-semibold text-white no-underline shadow-[var(--shadow-float)] transition-colors hover:bg-accent-hover"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span>Fale conosco</span>
    </TrackedLink>
  );
}
