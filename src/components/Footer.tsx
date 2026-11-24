import { cacheLife } from "next/cache";
import { contacto, esPendiente, footer, mensajes } from "@/content";
import { externo } from "@/lib/links";
import { BotonLlamar, BotonWhatsApp } from "./ui/Accion";
import { IconInstagram } from "./ui/Icons";
import { LogoMark } from "./ui/LogoMark";
import { Dato } from "./ui/Textos";

async function anioActual() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const botonBorde =
  "inline-flex min-h-12 items-center gap-2.5 rounded-full border border-grafito px-5 text-[15px] font-semibold text-hueso transition-colors hover:border-ceniza";

export async function Footer() {
  const anio = await anioActual();
  const igPendiente = esPendiente(contacto.instagram);

  return (
    <footer className="pb-24 md:pb-0">
      <div className="contenedor flex flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <LogoMark size={64} />
          <div>
            <p className="titulo text-[28px]">
              {footer.marca} <span className="text-rojo">{footer.marcaRoja}</span>
            </p>
            <p className="etiqueta mt-1 text-ceniza">{footer.bajada}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {igPendiente ? (
            <span className={botonBorde}>
              <IconInstagram />
              Instagram <Dato valor={contacto.instagram} />
            </span>
          ) : (
            <a
              href={`https://instagram.com/${contacto.instagram}`}
              {...externo}
              aria-label="Seguinos en Instagram"
              className={botonBorde}
            >
              <IconInstagram />
              Instagram
            </a>
          )}
          <BotonWhatsApp mensaje={mensajes.general} variante="borde" ariaLabel="Escribinos por WhatsApp" className="px-5">
            WhatsApp
          </BotonWhatsApp>
          <BotonLlamar variante="borde" ariaLabel="Llamanos por teléfono" className="px-5">
            Llamar
          </BotonLlamar>
        </div>
      </div>

      <div className="border-t border-grafito">
        <div className="contenedor flex flex-col gap-3 py-6 text-[13px] text-ceniza sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {anio} {footer.legal}
          </p>
          <Dato valor={contacto.habilitacion} />
        </div>
      </div>
    </footer>
  );
}
