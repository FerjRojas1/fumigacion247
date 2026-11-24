import type { CSSProperties } from "react";
import { hero, heroPlagas, mensajes, tramaPlaga } from "@/content";
import { BotonLlamar, BotonWhatsApp } from "./ui/Accion";
import { Trama } from "./ui/Trama";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative isolate flex min-h-[calc(100svh-var(--nav-h))] items-center overflow-hidden border-b border-grafito md:min-h-[56rem]"
    >
      {/* Fondo de puntos y animación: decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="puntos absolute inset-0" />
        <div className="absolute inset-x-0 top-[46%] h-0">
          <span className="hero-onda" />
          <span className="hero-onda" style={{ "--delay": "0.4s" } as CSSProperties} />
          {heroPlagas.map((p, i) => (
            <span
              key={i}
              className="hero-plaga"
              style={
                {
                  "--a": `${p.a}deg`,
                  "--near": p.near,
                  "--size": `${p.size}px`,
                  "--delay": `${p.delay}s`,
                } as CSSProperties
              }
            >
              <Trama src={tramaPlaga(p.plaga)} color="var(--color-rojo)" />
            </span>
          ))}
        </div>
      </div>

      <div className="contenedor flex flex-col items-center py-20 text-center">
        <p className="etiqueta text-ceniza">{hero.etiqueta}</p>

        <h1
          id="hero-titulo"
          className="titulo mt-6 text-[clamp(4.4rem,15vw,13rem)] [text-shadow:0_4px_40px_rgba(7,7,7,0.9),0_0_12px_rgba(7,7,7,0.8)]"
        >
          <span className="block text-hueso">{hero.titulo[0]}</span>
          <span className="block text-rojo">{hero.titulo[1]}</span>
        </h1>

        <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.7] text-hueso-suave [text-shadow:0_2px_16px_rgba(7,7,7,0.95)] md:text-lg">
          {hero.bajada}
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <BotonWhatsApp mensaje={mensajes.general}>{hero.ctaWhatsapp}</BotonWhatsApp>
          <BotonLlamar variante="borde" className="bg-negro/60">
            {hero.ctaLlamar}
          </BotonLlamar>
        </div>

        <p className="etiqueta mt-9 flex items-center gap-2.5 text-ceniza">
          <span aria-hidden="true" className="titila size-2 rounded-full bg-rojo" />
          {hero.guardia}
        </p>
      </div>
    </section>
  );
}
