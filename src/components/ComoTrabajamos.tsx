import { comoTrabajamos } from "@/content";

export function ComoTrabajamos() {
  return (
    <section aria-labelledby="como-titulo" className="border-b border-grafito">
      <div className="contenedor py-20 md:py-28">
        <h2 id="como-titulo" className="etiqueta text-rojo">
          {comoTrabajamos.etiqueta}
        </h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {comoTrabajamos.pasos.map((p, i) => (
            <li key={p.titulo} className={`border-t-2 pt-6 ${i === 0 ? "border-rojo" : "border-grafito"}`}>
              <h3 className="titulo text-[36px] text-hueso">{p.titulo}</h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-hueso-suave">{p.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
