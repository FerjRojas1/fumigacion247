import { Cierre } from "@/components/Cierre";
import { ComoTrabajamos } from "@/components/ComoTrabajamos";
import { FAQ } from "@/components/FAQ";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { FraseMarca } from "@/components/FraseMarca";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Nosotros } from "@/components/Nosotros";
import { ParaQuien } from "@/components/ParaQuien";
import { Plagas } from "@/components/Plagas";
import { Servicios } from "@/components/Servicios";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <FraseMarca />
        <Plagas />
        <ParaQuien />
        <Nosotros />
        <ComoTrabajamos />
        <FAQ />
        <Cierre />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
