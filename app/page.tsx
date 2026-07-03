import { ScrollProgress } from "@/components/cgi/scroll-progress"
import { Navbar } from "@/components/cgi/navbar"
import { Hero } from "@/components/cgi/hero"
import { QuienesSomos } from "@/components/cgi/quienes-somos"
import { Trayectoria } from "@/components/cgi/trayectoria"
import { Servicios } from "@/components/cgi/servicios"
import { Adn } from "@/components/cgi/adn"
import { Valores } from "@/components/cgi/valores"
import { Partners } from "@/components/cgi/partners"
import { Aliados } from "@/components/cgi/aliados"
import { Contacto } from "@/components/cgi/contacto"
import { Footer } from "@/components/cgi/footer"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Trayectoria />
        <Servicios />
        <Adn />
        <Valores />
        <Partners />
        <Aliados />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
