import { nav } from "@/content";
import { MobileMenu } from "./MobileMenu";
import { BotonLlamar } from "./ui/Accion";
import { LogoMark } from "./ui/LogoMark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-grafito bg-[rgba(7,7,7,0.86)] backdrop-blur-[8px]">
      <div className="contenedor flex h-[var(--nav-h)] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Fumigación 24/7, inicio" className="rounded-full">
          <LogoMark size={52} />
        </a>

        <div className="flex items-center gap-3 md:gap-8">
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="py-3 text-[15px] font-medium text-hueso-suave transition-colors hover:text-hueso">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <BotonLlamar variante="rojo" ariaLabel="Llamanos por teléfono" className="px-5">
            Llamanos
          </BotonLlamar>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
