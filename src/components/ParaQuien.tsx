import { mensajes, paraQuien } from "@/content";
import { BotonWhatsApp } from "./ui/Accion";
import { iconosParaQuien } from "./ui/Icons";
import { Etiqueta, Titulo } from "./ui/Textos";

export function ParaQuien() {
  return (
    <section aria-labelledby="paraquien-titulo" className="border-b border-grafito">
      <div className="contenedor py-20 md:py-28">
        <Etiqueta>{paraQuien.etiqueta}</Etiqueta>
        <Titulo id="paraquien-titulo" lineas={paraQuien.titulo} className="mt-5" />

        <ul className="mt-14 grid gap-4 lg:grid-cols-3">
          {paraQuien.items.map((item) => {
            const Icono = iconosParaQuien[item.icono];
            return (
              <li key={item.titulo} className="flex flex-col rounded-sm border border-grafito bg-carbon p-8">
                <Icono width={44} height={44} className="text-rojo" />
                <h3 className="titulo mt-8 text-[44px] text-hueso">{item.titulo}</h3>
                <p className="etiqueta mt-1 text-rojo">{item.subtitulo}</p>
                <p className="mt-5 text-[16px] leading-[1.7] text-hueso-suave">{item.texto}</p>
                <BotonWhatsApp
                  mensaje={mensajes.presupuesto(item.presupuestoPara)}
                  variante="borde"
                  ariaLabel={`Pedir presupuesto para ${item.titulo.toLowerCase()} por WhatsApp`}
                  className="mt-8 self-start"
                >
                  {paraQuien.cta}
                </BotonWhatsApp>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
