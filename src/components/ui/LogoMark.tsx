import { Trama } from "./Trama";

/** Logo: anillo rojo con la cucaracha en trama hueso. Decorativo (el texto accesible va en el link). */
export function LogoMark({ size = 52, className = "" }: { size?: number; className?: string }) {
  const src = size <= 64 ? "/trama/logo-insecto-trama-gruesa.webp" : "/trama/logo-insecto-trama.webp";
  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-negro ${className}`}
      style={{ width: size, height: size, border: `${Math.max(2, size * 0.035)}px solid var(--color-rojo)` }}
    >
      <Trama src={src} ratio={1000 / 1300} size="60%" />
    </span>
  );
}
