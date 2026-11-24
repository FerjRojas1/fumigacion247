import { nosotros } from "@/content";
import { Dato, Etiqueta, Titulo } from "./ui/Textos";

export function Nosotros() {
  return (
    <section
      id="nosotros"
      aria-labelledby="nosotros-titulo"
      className="relative isolate overflow-hidden border-b border-grafito bg-carbon"
    >
      <div
        aria-hidden="true"
        className="puntos absolute inset-y-0 left-0 -z-10 w-full md:w-3/5 [--dots-mask:radial-gradient(ellipse_at_20%_50%,#000_0%,transparent_65%)]"
      />
      <div className="contenedor grid gap-12 py-20 md:grid-cols-[1fr_1.25fr] md:items-center md:py-28">
        <div>
          <p className="titulo text-[clamp(8rem,20vw,16rem)] leading-[0.9] text-rojo">{nosotros.numero}</p>
          <p className="etiqueta mt-4 text-hueso">{nosotros.numeroLabel}</p>
        </div>

        <div>
          <Etiqueta>{nosotros.etiqueta}</Etiqueta>
          <Titulo id="nosotros-titulo" lineas={nosotros.titulo} className="mt-5" />
          <p className="mt-7 max-w-xl text-[17px] leading-[1.75] text-hueso-suave">{nosotros.texto}</p>
          <p className="mt-4 max-w-xl text-[17px] leading-[1.75] text-hueso-suave">
            <Dato valor={nosotros.historia} />
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-grafito pt-8 sm:grid-cols-3">
            {nosotros.datos.map((d) => (
              <div key={d.label} className="flex flex-col-reverse gap-1">
                <dt className="etiqueta text-ceniza">{d.label}</dt>
                <dd className="titulo text-[34px] text-hueso">{d.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
