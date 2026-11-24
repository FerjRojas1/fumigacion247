// ─────────────────────────────────────────────────────────────
// Todo el contenido editable de la landing vive en este archivo.
// Lo que empieza con "[PENDIENTE" se muestra en la página con un
// marcador visible hasta que se reemplace por el dato real.
// ─────────────────────────────────────────────────────────────

export const PENDIENTE = "[PENDIENTE";
export const esPendiente = (valor: string) => valor.startsWith(PENDIENTE);

/** Contacto. El número se usa para WhatsApp Y para llamadas.
 *  Nunca se muestra como texto en la página: solo vive en los links
 *  (wa.me / tel:) y en los datos estructurados para Google. */
export const contacto = {
  numero: "5491176278759", // formato internacional sin "+": 54 9 11 7627-8759
  instagram: "[PENDIENTE: usuario]", // ej: "fumigacion247" (sin @)
  habilitacion: "[PENDIENTE: Habilitación N°]",
  zona: "CABA y alrededores",
};

/** URL pública del sitio (para Open Graph y JSON-LD). Definila en Vercel con NEXT_PUBLIC_SITE_URL. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const seo = {
  title: "Fumigación 24/7 — Control de plagas en CABA y alrededores",
  description:
    "Fumigaciones, desinsectaciones, desratizaciones y limpieza de tanques en CABA y alrededores. Guardia las 24 horas, los 7 días. Escribinos por WhatsApp o llamanos.",
};

export const mensajes = {
  general: "Hola, tengo una plaga y quiero consultar",
  servicio: (servicio: string) => `Hola, quiero consultar por ${servicio.toLowerCase()}`,
  plaga: (plaga: string) => `Hola, tengo ${plaga.toLowerCase()}`,
  presupuesto: (para: string) => `Hola, quiero pedir un presupuesto para ${para}`,
};

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Plagas", href: "#plagas" },
  { label: "Quiénes somos", href: "#nosotros" },
];

export const hero = {
  etiqueta: " Control de plagas · CABA y alrededores",
  titulo: ["FUMIGACIÓN", "24/7"],
  bajada:
    "Las plagas aparecen a cualquier hora. Nosotros también. Cucarachas, ratas, chinches, avispas y más.",
  ctaWhatsapp: "Escribinos por WhatsApp",
  ctaLlamar: "Llamar ahora",
  guardia: "Guardia activa · Día y noche",
};

export type PlagaId = "cucaracha" | "rata" | "chinche" | "pulga" | "avispa" | "abeja" | "murcielago";
export const tramaPlaga = (id: PlagaId) => `/trama/plagas/trama-${id}.webp`;

/** Plagas animadas del hero. `a`: ángulo desde donde llegan; `near`: distancia de frenado. */
export const heroPlagas: {
  plaga: PlagaId;
  a: number;
  near: string;
  size: number;
  delay: number;
}[] = [
  { plaga: "cucaracha", a: 200, near: "clamp(150px, 20vw, 250px)", size: 110, delay: 0 },
  { plaga: "chinche", a: 130, near: "clamp(170px, 30vw, 380px)", size: 92, delay: 0.35 },
  { plaga: "avispa", a: 250, near: "clamp(170px, 34vw, 460px)", size: 118, delay: 0.7 },
  { plaga: "cucaracha", a: 60, near: "clamp(170px, 30vw, 400px)", size: 104, delay: 0.2 },
  { plaga: "abeja", a: 300, near: "clamp(170px, 31vw, 420px)", size: 104, delay: 0.9 },
  { plaga: "murcielago", a: 90, near: "clamp(180px, 36vw, 500px)", size: 150, delay: 0.5 },
  { plaga: "chinche", a: 20, near: "clamp(150px, 20vw, 260px)", size: 84, delay: 1.1 },
  { plaga: "cucaracha", a: 335, near: "clamp(160px, 26vw, 330px)", size: 96, delay: 0.45 },
];

export const servicios = {
  etiqueta: "Servicios",
  publico: "Para hogares, empresas y consorcios",
  items: [
    { nombre: "Fumigaciones", descripcion: "Tratamiento integral para casas, comercios y edificios." },
    {
      nombre: "Fumigaciones ecológicas",
      descripcion: "Productos de bajo impacto para ambientes con chicos, mascotas o alimentos.",
    },
    { nombre: "Desinsectaciones", descripcion: "Cucarachas, hormigas, pulgas, chinches y otros insectos." },
    { nombre: "Desratizaciones", descripcion: "Ratas y ratones: cebos, tramperas y cierre de accesos." },
    { nombre: "Control de plagas", descripcion: "Planes preventivos con visitas periódicas y certificado." },
    {
      nombre: "Limpieza de tanques de agua",
      descripcion: "Limpieza y desinfección para casas, comercios y consorcios.",
    },
  ],
};

export const fraseMarca = {
  lineas: ["LA PLAGA", "NO ESPERA.", "NOSOTROS", "TAMPOCO."],
  rojasDesde: 2, // índice desde el que las líneas van en rojo
};

export const plagas = {
  etiqueta: "Plagas que controlamos",
  titulo: ["UNA PLAGA,", "UN ESPECIALISTA."],
  texto: "Cada plaga tiene su método. Elegí la tuya y escribinos: te respondemos a cualquier hora.",
  cta: "Consultar",
  items: [
    { id: "cucaracha", nombre: "Cucarachas", escala: 0.7, linea: "Gel y cebos en grietas, cocina y baños." },
    { id: "rata", nombre: "Ratas", escala: 0.76, linea: "Cebos, tramperas y cierre de accesos." },
    { id: "chinche", nombre: "Chinches", escala: 0.7, linea: "Colchones, camas, muebles y ambientes." },
    { id: "pulga", nombre: "Pulgas", escala: 0.74, linea: "Pisos, alfombras y zonas de mascotas." },
    { id: "avispa", nombre: "Avispas", escala: 0.74, linea: "Retiro del avispero sin que te expongas." },
    { id: "abeja", nombre: "Abejas", escala: 0.74, linea: "Manejo seguro del enjambre." },
    { id: "murcielago", nombre: "Murciélagos", escala: 0.82, linea: "Retiro de la colonia y cierre de accesos." },
  ] satisfies { id: PlagaId; nombre: string; escala: number; linea: string }[],
  otra: {
    titulo: "¿OTRA PLAGA?",
    texto: "Contanos qué ves y mandanos una foto. Te decimos qué hacer.",
    cta: "Escribinos",
  },
};

export const paraQuien = {
  etiqueta: "Para quién trabajamos",
  titulo: ["CASAS, EMPRESAS", "Y CONSORCIOS."],
  cta: "Pedir presupuesto",
  items: [
    {
      icono: "casa",
      titulo: "Particulares",
      subtitulo: "Hogares",
      texto: "Casas y departamentos. Vamos cuando lo necesitás, también de noche y los fines de semana.",
      presupuestoPara: "mi casa",
    },
    {
      icono: "local",
      titulo: "Empresas",
      subtitulo: "Comercios y oficinas",
      texto:
        "Gastronomía, locales, oficinas y depósitos. Trabajamos sin frenar tu negocio y te dejamos el certificado.",
      presupuestoPara: "mi empresa",
    },
    {
      icono: "edificio",
      titulo: "Consorcios",
      subtitulo: "Edificios y administraciones",
      texto: "Planes periódicos para espacios comunes y limpieza de tanques de agua.",
      presupuestoPara: "un consorcio",
    },
  ] as const,
};

export const nosotros = {
  etiqueta: "Quiénes somos",
  numero: "+30",
  numeroLabel: "Años de experiencia",
  titulo: ["MÁS DE 30 AÑOS", "SACANDO PLAGAS."],
  texto:
    "Tenemos más de 30 años de experiencia en fumigación y control de plagas. Trabajamos en toda la Capital Federal y alrededores, las 24 horas, los 7 días.",
  historia: "[PENDIENTE: historia completa de la empresa]",
  datos: [
    { valor: "CABA + GBA", label: "Zona de cobertura" },
    { valor: "24 / 7", label: "Guardia permanente" },
    { valor: "7 plagas", label: "Con método propio" },
  ],
};

export const comoTrabajamos = {
  etiqueta: "Cómo trabajamos",
  pasos: [
    { titulo: "Diagnóstico", texto: "Identificamos la plaga y por dónde entra." },
    { titulo: "Tratamiento", texto: "Aplicamos el método justo para esa plaga y ese lugar." },
    { titulo: "Seguimiento", texto: "Volvemos a controlar que no quede nada." },
    { titulo: "Certificado", texto: "Te dejamos el certificado del servicio." },
  ],
};

export const faq = {
  etiqueta: "Preguntas frecuentes",
  titulo: ["LO QUE NOS", "PREGUNTAN SIEMPRE."],
  aviso: "[PENDIENTE: validar las respuestas con el cliente]",
  items: [
    {
      pregunta: "¿Atienden de noche y los fines de semana?",
      respuesta: "Sí. Atendemos las 24 horas, los 7 días, también feriados.",
    },
    {
      pregunta: "¿Tengo que salir de casa durante el servicio?",
      respuesta: "Depende del tratamiento. En muchos casos no hace falta; te lo decimos antes de empezar.",
    },
    {
      pregunta: "¿Es seguro para chicos y mascotas?",
      respuesta:
        "Elegimos el producto según el lugar. Para ambientes sensibles tenemos fumigación ecológica, y te explicamos los cuidados antes y después.",
    },
    {
      pregunta: "¿Cuánto tarda en hacer efecto?",
      respuesta: "Depende de la plaga y del tratamiento. Te damos los tiempos en el diagnóstico.",
    },
    {
      pregunta: "¿Entregan certificado?",
      respuesta: "Sí. Al terminar te dejamos el certificado del servicio.",
    },
    {
      pregunta: "¿Cómo pido un presupuesto?",
      respuesta: "Escribinos por WhatsApp con la plaga, el lugar y, si podés, una foto.",
    },
  ],
};

export const cierre = {
  titulo: ["¿TENÉS UNA PLAGA", "AHORA?"],
  texto: "Escribinos y vamos. Día y noche, en CABA y alrededores.",
  ctaWhatsapp: "WhatsApp",
  ctaLlamar: "Llamar",
};

export const footer = {
  marca: "FUMIGACIÓN",
  marcaRoja: "24/7",
  bajada: "Control de plagas · Día y noche",
  legal: "Fumigación 24/7 · CABA y alrededores",
};
