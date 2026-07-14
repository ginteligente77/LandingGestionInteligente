import Image from "next/image"
import { Building2, Users } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { cn } from "@/lib/utils"
import { ALIADOS, CLIENTES, type Organization } from "@/lib/cgi-data"

function LogoCard({ org }: { org: Organization }) {
  return (
    <div className="marquee__item group relative flex flex-col items-center">
      <div className="flex h-24 w-56 items-center justify-center rounded-2xl border border-border bg-white px-7 shadow-sm transition-all duration-300 group-hover:scale-[1.14] group-hover:border-cyan/50 group-hover:shadow-xl">
        {org.logo ? (
          <Image
            src={org.logo}
            alt={org.name}
            width={190}
            height={80}
            className="max-h-14 w-auto object-contain"
          />
        ) : (
          <span className="text-center font-display text-sm font-bold leading-tight text-ink">{org.name}</span>
        )}
      </div>
      {/* name — only visible on hover, below the logo */}
      <span className="pointer-events-none mt-3 block h-5 max-w-56 truncate rounded-md px-2 text-center text-xs font-semibold text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {org.name}
      </span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: Organization[]; reverse?: boolean }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee py-3">
      <div className={cn("marquee__track", reverse && "marquee__track--reverse")}>
        {loop.map((org, i) => (
          <LogoCard key={`${org.name}-${i}`} org={org} />
        ))}
      </div>
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
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-body">
            Acompañamos a entidades públicas, cooperativas y empresas privadas con soluciones a la medida de cada
            proyecto.
          </p>
        </Reveal>
      </div>

      {/* Full-bleed moving marquees */}
      <div className="relative z-10 mt-14 space-y-8">
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center gap-2 px-5 font-mono text-xs uppercase tracking-[0.2em] text-cyan md:px-8">
            <Building2 className="h-4 w-4" /> Aliados
          </div>
          <MarqueeRow items={ALIADOS} />
        </div>
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center gap-2 px-5 font-mono text-xs uppercase tracking-[0.2em] text-green md:px-8">
            <Users className="h-4 w-4" /> Clientes
          </div>
          <MarqueeRow items={CLIENTES} reverse />
        </div>
      </div>
    </section>
  )
}
