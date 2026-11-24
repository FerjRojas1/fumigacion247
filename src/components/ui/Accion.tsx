import type { ReactNode } from "react";
import { externo, telLink, waLink } from "@/lib/links";
import { IconTelefono, IconWhatsApp } from "./Icons";

type Variante = "rojo" | "borde" | "hueso" | "negro";

const estilos: Record<Variante, string> = {
  rojo: "bg-rojo text-negro hover:bg-[#ff4b3f]",
  borde: "border border-grafito text-hueso hover:border-ceniza hover:bg-white/5",
  hueso: "bg-hueso text-negro hover:bg-white",
  negro: "bg-negro text-hueso hover:bg-carbon",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 font-sans text-[15px] font-semibold transition-colors";

type Props = { children: ReactNode; variante?: Variante; className?: string };

/** Botón que abre WhatsApp con un mensaje. Muestra ícono + acción; el número nunca se ve. */
export function BotonWhatsApp({
  mensaje,
  children,
  variante = "rojo",
  className = "",
  ariaLabel,
}: Props & { mensaje: string; ariaLabel?: string }) {
  return (
    <a
      href={waLink(mensaje)}
      {...externo}
      aria-label={ariaLabel}
      className={`${base} ${estilos[variante]} ${className}`}
    >
      <IconWhatsApp />
      {children}
    </a>
  );
}

/** Botón de llamada. Muestra ícono + acción; el número nunca se ve. */
export function BotonLlamar({ children, variante = "borde", className = "", ariaLabel }: Props & { ariaLabel?: string }) {
  return (
    <a href={telLink()} aria-label={ariaLabel} className={`${base} ${estilos[variante]} ${className}`}>
      <IconTelefono />
      {children}
    </a>
  );
}
