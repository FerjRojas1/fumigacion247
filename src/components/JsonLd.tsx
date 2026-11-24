import { contacto, faq, seo, siteUrl } from "@/content";

const negocio = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fumigación 24/7",
  description: seo.description,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image.png`,
  // El número no se muestra en la página, pero sí se informa a los buscadores.
  telephone: `+${contacto.numero}`,
  areaServed: [
    { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  knowsAbout: ["Fumigación", "Desinsectación", "Desratización", "Control de plagas", "Limpieza de tanques de agua"],
};

const preguntas = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((f) => ({
    "@type": "Question",
    name: f.pregunta,
    acceptedAnswer: { "@type": "Answer", text: f.respuesta },
  })),
};

const json = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(negocio) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(preguntas) }} />
    </>
  );
}
