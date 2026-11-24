import type { ReactNode } from "react";
import { esPendiente } from "@/content";

/** Etiqueta mono en mayúsculas. */
export function Etiqueta({ children, rojo = true, className = "" }: { children: ReactNode; rojo?: boolean; className?: string }) {
  return <p className={`etiqueta ${rojo ? "text-rojo" : "text-ceniza"} ${className}`}>{children}</p>;
}

/** Título de sección en renglones (cada elemento del array es un renglón). */
export function Titulo({
  id,
  lineas,
  className = "",
  as: Tag = "h2",
}: {
  id?: string;
  lineas: readonly string[];
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag id={id} className={`titulo text-[clamp(2.4rem,6vw,4.75rem)] text-hueso ${className}`}>
      {lineas.map((l, i) => (
        <span key={i} className="block">
          {l}
        </span>
      ))}
    </Tag>
  );
}

/** Muestra un dato; si sigue [PENDIENTE], lo marca visiblemente para que no pase desapercibido. */
export function Dato({ valor, className = "" }: { valor: string; className?: string }) {
  if (!esPendiente(valor)) return <span className={className}>{valor}</span>;
  return (
    <span
      className={`inline-block rounded border border-dashed border-rojo/70 px-2 py-0.5 font-mono text-[12px] tracking-wide text-rojo ${className}`}
    >
      {valor}
    </span>
  );
}
