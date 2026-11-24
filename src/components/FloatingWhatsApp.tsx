import { mensajes } from "@/content";
import { externo, waLink } from "@/lib/links";
import { IconWhatsApp } from "./ui/Icons";

/** Botón flotante de WhatsApp, solo en pantallas de menos de 720px. */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(mensajes.general)}
      {...externo}
      aria-label="Escribinos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 hidden size-14 place-items-center rounded-full bg-rojo text-negro shadow-[0_8px_30px_rgba(0,0,0,0.6)] max-[720px]:grid"
    >
      <IconWhatsApp width={28} height={28} />
    </a>
  );
}
