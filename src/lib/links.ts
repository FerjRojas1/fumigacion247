import { contacto } from "@/content";

/** Link de WhatsApp con mensaje pre-escrito. */
export const waLink = (mensaje: string) =>
  `https://wa.me/${contacto.numero}?text=${encodeURIComponent(mensaje)}`;

/** Link de llamada (mismo número que WhatsApp). */
export const telLink = () => `tel:+${contacto.numero}`;

/** Atributos para abrir WhatsApp en pestaña nueva. */
export const externo = { target: "_blank", rel: "noopener" } as const;
