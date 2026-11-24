import type { Metadata, Viewport } from "next";
import { Big_Shoulders, IBM_Plex_Mono, Inter } from "next/font/google";
import { seo, siteUrl } from "@/content";
import "./globals.css";

// "Big Shoulders Display" hoy se publica como "Big Shoulders" con eje de tamaño óptico:
// en títulos grandes usa automáticamente el corte Display.
const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-big-shoulders",
  display: "swap",
  adjustFontFallback: false,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Fumigación 24/7",
    title: seo.title,
    description: seo.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

export const viewport: Viewport = {
  themeColor: "#070707",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${bigShoulders.variable} ${plexMono.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
