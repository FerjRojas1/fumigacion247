// Prepara los assets de la landing a partir de las carpetas de marca.
// Uso: npm run assets   (correr desde la carpeta landing/)
import sharp from "sharp";
import { mkdir, copyFile, stat, rm } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "..");
const src = {
  trama: path.join(root, "landing-assets"),
  iconos: path.join(root, "Logo-Colores", "version-dark", "icono"),
  logos: path.join(root, "Logo-Colores", "version-dark", "logo-con-texto"),
};
const out = path.resolve(import.meta.dirname, "..");
const publicTrama = path.join(out, "public", "trama");
const appDir = path.join(out, "src", "app");

const plagas = ["cucaracha", "rata", "chinche", "pulga", "avispa", "abeja", "murcielago"];

/** Convierte a WebP sin perder la transparencia (solo importa el canal alfa: se usa como máscara). */
async function toWebp(input, output, width) {
  let img = sharp(input);
  if (width) img = img.resize({ width, withoutEnlargement: true });
  await img.webp({ quality: 90, alphaQuality: 100, effort: 6 }).toFile(output);
  const [a, b] = await Promise.all([stat(input), stat(output)]);
  console.log(`${path.basename(output)}  ${(a.size / 1024).toFixed(0)}KB → ${(b.size / 1024).toFixed(0)}KB`);
}

await mkdir(path.join(publicTrama, "plagas"), { recursive: true });

await toWebp(path.join(src.trama, "logo-insecto-trama.png"), path.join(publicTrama, "logo-insecto-trama.webp"), 1000);
await toWebp(path.join(src.trama, "logo-insecto-trama-gruesa.png"), path.join(publicTrama, "logo-insecto-trama-gruesa.webp"), 400);
for (const p of plagas) {
  await toWebp(path.join(src.trama, "plagas", `trama-${p}.png`), path.join(publicTrama, "plagas", `trama-${p}.webp`), 600);
}

// Favicons y apple-touch-icon (convención de archivos de metadata de Next.js)
await rm(path.join(appDir, "favicon.ico"), { force: true });
await copyFile(path.join(src.iconos, "fumigacion247-icono-16px.png"), path.join(appDir, "icon1.png"));
await copyFile(path.join(src.iconos, "fumigacion247-icono-32px.png"), path.join(appDir, "icon2.png"));
await copyFile(path.join(src.iconos, "fumigacion247-icono-64px.png"), path.join(appDir, "icon3.png"));
await copyFile(path.join(src.iconos, "fumigacion247-icono-180px.png"), path.join(appDir, "apple-icon.png"));

// Imagen Open Graph 1200×630: logo horizontal sobre negro
const logo = await sharp(path.join(src.logos, "fumigacion247-logo-horizontal-para-fondo-oscuro.png"))
  .resize({ width: 1040 })
  .toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#070707" } })
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile(path.join(appDir, "opengraph-image.png"));
console.log("Íconos y opengraph-image.png listos en src/app/");
