# Fumigación 24/7 — Landing

Página única hecha con Next.js (App Router) + TypeScript + Tailwind CSS. Se exporta como sitio estático y no tiene backend.

## Cómo correrla

Hace falta Node.js 20 o superior.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint     # revisión de código
```

## Dónde editar los textos

**Todo el contenido está en [`src/content.ts`](src/content.ts):** textos, servicios, plagas, preguntas frecuentes y datos de contacto. Los componentes no tienen texto escrito a mano.

- **Número de WhatsApp y de llamadas:** `contacto.numero`, en formato internacional sin `+` (por ejemplo `5491176278759`). El mismo número se usa para los dos. **No se muestra como texto en la página**: los botones muestran solo el ícono y la acción ("WhatsApp", "Llamar"). El número solo aparece en los links (`wa.me` / `tel:`) y en los datos para Google (JSON-LD).
- **Mensajes de WhatsApp pre-escritos:** `mensajes`.
- **Datos pendientes:** todo lo que empieza con `[PENDIENTE` se ve en la página con un recuadro rojo punteado hasta que lo reemplaces:
  - `contacto.instagram`: usuario sin `@`. Cuando lo cargues, el botón de Instagram del pie pasa a ser un link.
  - `contacto.habilitacion`: número de habilitación.
  - `nosotros.historia`: la historia completa de la empresa.
  - `faq.aviso`: borralo, o dejalo vacío, cuando el cliente valide las respuestas.

## Imágenes y logos

Las tramas de plagas y del logo se generan desde las carpetas de marca (`../landing-assets` y `../Logo-Colores/version-dark`) con:

```bash
npm run assets
```

Este comando convierte las tramas a WebP en `public/trama/` y copia los favicons, el `apple-icon` y la imagen para redes (`opengraph-image.png`) a `src/app/`. Correlo de nuevo solo si cambian los archivos originales.

Las tramas se usan como **máscara CSS** (componente `Trama`), así se pueden pintar de cualquier color de la paleta.

## Animación del hero

Está hecha solo con CSS, en `src/app/globals.css` (`.hero-plaga`, `.hero-onda`). La posición, el tamaño y el retardo de cada plaga están en `heroPlagas`, dentro de `content.ts`. Si el sistema tiene activado "reducir movimiento", las plagas quedan quietas y la onda roja no aparece.

## Tipografías

Se cargan con `next/font` y quedan alojadas en el mismo sitio, sin pedidos a Google:

- **Big Shoulders** (títulos). Google hoy publica "Big Shoulders Display" con este nombre y con eje de tamaño óptico: en tamaños grandes usa el corte Display automáticamente.
- **IBM Plex Mono** (etiquetas).
- **Inter** (textos).

## Deploy en Vercel

1. Subí esta carpeta (`landing/`) a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), elegí **Add New → Project** e importá el repositorio. Si el repositorio incluye otras carpetas, poné `landing` en **Root Directory**.
3. En **Environment Variables** agregá `NEXT_PUBLIC_SITE_URL` con el dominio final (por ejemplo `https://fumigacion247.com.ar`). Se usa para la vista previa en redes y para los datos de Google.
4. Tocá **Deploy**. Cada push a la rama principal publica una nueva versión.
