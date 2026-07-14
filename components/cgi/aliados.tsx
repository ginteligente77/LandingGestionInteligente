import Image from "next/image"
import { Building2, Users } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { ALIADOS, CLIENTES, type Organization } from "@/lib/cgi-data"

function LogoTile({ org }: { org: Organization }) {
  if (!org.logo) {
    return (
      <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-cyan/30 bg-cyan/[0.05] px-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60">
        <span className="font-display text-sm font-bold leading-tight text-ink">{org.name}</span>
      </div>
    )
  }
  return (
    <div className="group flex h-24 items-center justify-center rounded-2xl border border-border bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-md">
      <Image
        src={org.logo}
        alt={org.name}
        title={org.name}
        width={180}
        height={80}
        className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  )
}

function LogoWall({
  label,
  icon: Icon,
  items,
  accent,
}: {
  label: string
  icon: typeof Building2
  items: Organization[]
  accent: "cyan" | "green"
}) {
  return (
    <div>
      <h3
        className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ${
          accent === "cyan" ? "text-cyan" : "text-green"
        }`}
      >
        <Icon className="h-4 w-4" /> {label}
      </h3>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((org) => (
          <LogoTile key={org.name} org={org} />
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

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-stretch lg:gap-12">
          {/* Full office photo */}
          <Reveal animation="left" className="flex">
            <figure
              className="photo-frame flex w-full items-center justify-center"
              style={{ background: "linear-gradient(160deg, #0b2350, #0a1c40)" }}
            >
              <Image
                src="/oficina-seguros.jpeg"
                alt="Equipo de Gestión Inteligente asesorando a un cliente"
                width={900}
                height={1600}
                className="h-full max-h-[520px] w-full object-contain"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 text-[11px] font-medium leading-snug text-white">
                Asesoría y acompañamiento cercano en cada proyecto.
              </figcaption>
            </figure>
          </Reveal>

          {/* Logo walls */}
          <Reveal animation="right" className="flex flex-col justify-center gap-9">
            <LogoWall label="Aliados" icon={Building2} items={ALIADOS} accent="cyan" />
            <div className="hr-accent" />
            <LogoWall label="Clientes" icon={Users} items={CLIENTES} accent="green" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
