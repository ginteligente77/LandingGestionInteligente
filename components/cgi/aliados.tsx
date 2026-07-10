import Image from "next/image"
import { Building2, Users } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { ALIADOS, CLIENTES } from "@/lib/cgi-data"

function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-col gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="glass card-accent cursor-default rounded-xl px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function Aliados() {
  return (
    <section id="aliados" className="mesh-light relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <span className="blob" style={{ width: 420, height: 420, bottom: "-10%", right: "-8%", background: "rgba(0,147,201,0.12)" }} aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Aliados y Clientes</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Confianza que <span className="text-gradient">construye resultados</span>
          </h2>
        </Reveal>

        {/* Feature image band */}
        <Reveal className="mt-12">
          <div className="photo-frame relative aspect-[16/7] w-full md:aspect-[16/5]">
            <Image
              src="/oficina-seguros.jpeg"
              alt="Asesoría y acompañamiento a nuestros aliados y clientes"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 z-10 flex items-end p-6 md:p-8">
              <p className="max-w-md text-pretty text-sm font-medium leading-relaxed text-white md:text-base">
                Acompañamos a entidades públicas, cooperativas y empresas privadas con soluciones a la medida de cada
                proyecto.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal animation="left">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              <Building2 className="h-4 w-4" /> Aliados
            </h3>
            <BadgeList items={ALIADOS} />
          </Reveal>
          <Reveal animation="right">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-green">
              <Users className="h-4 w-4" /> Clientes
            </h3>
            <BadgeList items={CLIENTES} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
