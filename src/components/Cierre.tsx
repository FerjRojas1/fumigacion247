import { cierre, mensajes } from "@/content";
import { BotonLlamar, BotonWhatsApp } from "./ui/Accion";

export function Cierre() {
  return (
    <section
      id="contacto"
      aria-labelledby="cierre-titulo"
      className="relative isolate overflow-hidden border-b border-grafito"
    >
      <div
        aria-hidden="true"
        className="puntos puntos-rojos absolute inset-0 -z-10 [--dots-mask:linear-gradient(to_top,#000_0%,transparent_75%)]"
      />
      <div className="contenedor flex flex-col items-center py-24 text-center md:py-36">
        <h2 id="cierre-titulo" className="titulo text-[clamp(3rem,9vw,7.5rem)]">
          <span className="block text-hueso">{cierre.titulo[0]}</span>
          <span className="block text-rojo">{cierre.titulo[1]}</span>
        </h2>
        <p className="mt-7 max-w-md text-[17px] leading-[1.7] text-hueso-suave md:text-lg">{cierre.texto}</p>
        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <BotonWhatsApp mensaje={mensajes.general} ariaLabel="Escribinos por WhatsApp" className="min-h-14 px-8 text-[17px]">
            {cierre.ctaWhatsapp}
          </BotonWhatsApp>
          <BotonLlamar variante="hueso" ariaLabel="Llamanos por teléfono" className="min-h-14 px-8 text-[17px]">
            {cierre.ctaLlamar}
          </BotonLlamar>
        </div>
      </div>
    </section>
  );
}
