import { mensajes, plagas } from "@/content";
import { externo, waLink } from "@/lib/links";
import { PlagaRing } from "./ui/PlagaRing";
import { Etiqueta, Titulo } from "./ui/Textos";

const tarjeta =
  "group flex flex-col rounded-sm border p-7 transition-colors min-h-[25rem]";

export function Plagas() {
  return (
    <section id="plagas" aria-labelledby="plagas-titulo" className="border-b border-grafito">
      <div className="contenedor py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <Etiqueta>{plagas.etiqueta}</Etiqueta>
            <Titulo id="plagas-titulo" lineas={plagas.titulo} className="mt-5" />
          </div>
          <p className="max-w-md text-[17px] leading-[1.7] text-hueso-suave md:justify-self-end">{plagas.texto}</p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plagas.items.map((p) => (
            <li key={p.id} className="flex">
              <a
                href={waLink(mensajes.plaga(p.nombre))}
                {...externo}
                aria-label={`${p.nombre}: consultar por WhatsApp`}
                className={`${tarjeta} w-full border-grafito bg-carbon hover:border-rojo`}
              >
                <PlagaRing plaga={p.id} escala={p.escala} />
                <h3 className="titulo mt-7 text-[40px] text-hueso">{p.nombre}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-hueso-suave">{p.linea}</p>
                <span className="etiqueta mt-auto pt-6 text-rojo">
                  {plagas.cta} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </li>
          ))}
          <li className="flex">
            <a
              href={waLink(mensajes.general)}
              {...externo}
              aria-label="Otra plaga: escribinos por WhatsApp"
              className={`${tarjeta} w-full border-rojo bg-rojo text-negro hover:bg-[#ff4b3f]`}
            >
              <h3 className="titulo text-[clamp(3rem,5vw,4rem)]">{plagas.otra.titulo}</h3>
              <p className="mt-4 text-[17px] leading-[1.6] font-medium">{plagas.otra.texto}</p>
              <span className="etiqueta mt-auto pt-6">
                {plagas.otra.cta} <span aria-hidden="true">→</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
