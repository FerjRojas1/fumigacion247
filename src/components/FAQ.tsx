import { faq } from "@/content";
import { Dato, Etiqueta, Titulo } from "./ui/Textos";

export function FAQ() {
  return (
    <section aria-labelledby="faq-titulo" className="border-b border-grafito">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
        <div>
          <Etiqueta>{faq.etiqueta}</Etiqueta>
          <Titulo id="faq-titulo" lineas={faq.titulo} className="mt-5" />
          <p className="mt-6">
            <Dato valor={faq.aviso} />
          </p>
        </div>

        <div className="border-t border-grafito">
          {faq.items.map((item) => (
            <details key={item.pregunta} className="group border-b border-grafito">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[18px] font-medium text-hueso">
                {item.pregunta}
                <span
                  aria-hidden="true"
                  className="faq-mas font-display text-4xl leading-none font-black text-rojo transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-[16px] leading-[1.75] text-hueso-suave">{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
