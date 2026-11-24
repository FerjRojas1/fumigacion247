import { fraseMarca } from "@/content";
import { Trama } from "./ui/Trama";

/** "La plaga no espera. Nosotros tampoco." — misma composición escalada en todas las pantallas. */
export function FraseMarca() {
  return (
    <section aria-label="La plaga no espera. Nosotros tampoco." className="overflow-hidden border-b border-grafito">
      <div className="contenedor py-20 md:py-32">
        <div className="relative isolate">
          <div aria-hidden="true" className="absolute top-1/2 right-0 -z-10 w-[44%] -translate-y-1/2">
            <div className="puntos puntos-rojos absolute -inset-[35%]" />
            <Trama
              src="/trama/logo-insecto-trama.webp"
              ratio={1000 / 1300}
              color="var(--color-rojo)"
              className="relative rotate-[-12deg]"
            />
          </div>
          <p className="titulo text-[min(10.5vw,9rem)] [text-shadow:0_4px_30px_rgba(7,7,7,0.85)]">
            {fraseMarca.lineas.map((l, i) => (
              <span key={l} className={`block ${i >= fraseMarca.rojasDesde ? "text-rojo" : "text-hueso"}`}>
                {l}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
