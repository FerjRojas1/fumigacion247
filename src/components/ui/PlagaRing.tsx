import { tramaPlaga, type PlagaId } from "@/content";
import { Trama } from "./Trama";

/** Ícono de plaga en formato logo: anillo rojo + plaga en trama hueso. */
export function PlagaRing({ plaga, escala, size = 180 }: { plaga: PlagaId; escala: number; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="grid shrink-0 place-items-center overflow-hidden rounded-full"
      style={{ width: size, height: size, border: `${size * 0.035}px solid var(--color-rojo)` }}
    >
      <Trama src={tramaPlaga(plaga)} size={`${escala * 100}%`} />
    </span>
  );
}
