import type { CSSProperties } from "react";

type Props = {
  /** PNG/WebP de puntos blancos sobre transparente: se usa como máscara. */
  src: string;
  /** Color con el que se pinta la trama (cualquier color CSS o token). */
  color?: string;
  /** Ancho (número = px, o cualquier medida CSS). */
  size?: number | string;
  /** Proporción ancho/alto de la imagen. Las plagas son 1 (1000×1000); el logo 1000/1300. */
  ratio?: number;
  className?: string;
  style?: CSSProperties;
};

/** Imagen de trama de semitono pintada con un color de la paleta. Siempre decorativa. */
export function Trama({ src, color = "var(--color-hueso)", size = "100%", ratio = 1, className, style }: Props) {
  const mask = `url(${src})`;
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "block",
        width: typeof size === "number" ? `${size}px` : size,
        aspectRatio: String(ratio),
        backgroundColor: color,
        WebkitMaskImage: mask,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: mask,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        ...style,
      }}
    />
  );
}
