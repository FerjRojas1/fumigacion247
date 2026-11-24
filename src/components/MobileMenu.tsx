"use client";

import { useEffect, useId, useState } from "react";
import { nav } from "@/content";
import { IconCerrar, IconMenu } from "./ui/Icons";

/** Menú hamburguesa para pantallas chicas. */
export function MobileMenu() {
  const [abierto, setAbierto] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={abierto}
        aria-controls={panelId}
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setAbierto((v) => !v)}
        className="grid size-12 place-items-center rounded-full border border-grafito text-hueso"
      >
        {abierto ? <IconCerrar /> : <IconMenu />}
      </button>

      <nav
        id={panelId}
        aria-label="Principal"
        hidden={!abierto}
        className="absolute inset-x-0 top-full border-b border-grafito bg-negro/95 backdrop-blur-md"
      >
        <ul className="contenedor flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setAbierto(false)}
                className="titulo flex min-h-14 items-center border-b border-grafito text-3xl text-hueso last:border-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
