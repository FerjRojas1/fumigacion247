import { mensajes, servicios } from "@/content";
import { externo, waLink } from "@/lib/links";

export function Servicios() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="border-b border-grafito">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-20 pb-10 md:pt-28">
        <h2 id="servicios-titulo" className="etiqueta text-rojo">
          {servicios.etiqueta}
        </h2>
        <p className="etiqueta text-ceniza">{servicios.publico}</p>
      </div>

      <ul>
        {servicios.items.map((s, i) => {
          const derecha = i % 2 === 1;
          return (
            <li key={s.nombre} className="border-t border-grafito">
              <a
                href={waLink(mensajes.servicio(s.nombre))}
                {...externo}
                aria-label={`${s.nombre}: consultar por WhatsApp`}
                className={`group contenedor block py-8 md:py-11 ${derecha ? "text-right" : "text-left"}`}
              >
                <h3 className="titulo text-[clamp(2.6rem,8.5vw,8.5rem)] text-hueso transition-colors [overflow-wrap:anywhere] group-hover:text-rojo">
                  {s.nombre}
                </h3>
                <p
                  className={`mt-3 max-w-xl text-[16px] leading-[1.65] text-hueso-suave md:text-lg ${derecha ? "ml-auto" : ""}`}
                >
                  {s.descripcion}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
