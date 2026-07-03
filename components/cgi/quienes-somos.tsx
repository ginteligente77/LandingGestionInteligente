import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { TEAM } from "@/lib/cgi-data"

function initials(name: string) {
  const clean = name.replace(/^(MBA\.|Prof\.|Esp\.|PhD\.|Dr\.|Ing\.)\s*/i, "")
  return clean
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="relative bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
        {/* Left column */}
        <Reveal animation="left" className="flex flex-col">
          <SectionLabel>Quiénes somos</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Un equipo experto con propósito claro
          </h2>
          <div className="mt-6 space-y-4 text-body leading-relaxed">
            <p>
              Somos un grupo de profesionales expertos y apasionados por la implementación de soluciones integrales de
              gestión estratégica para organizaciones públicas y privadas.
            </p>
            <p>
              Podemos ser tu aliado en procesos de planeación, gestión, implementación y ejecución de proyectos,
              apoyando el fortalecimiento institucional, administrativo y jurídico utilizando herramientas novedosas
              como la inteligencia artificial.
            </p>
            <p>
              Nuestra gestión genera alternativas con innovación y creatividad para llevar al siguiente nivel el impacto
              de las organizaciones: mayor competitividad, mejor productividad y mayor rentabilidad.
            </p>
          </div>
        </Reveal>

        {/* Right column — team grid */}
        <Reveal animation="stagger" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="glass card-accent group flex flex-col items-center p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-bold text-white"
                style={{ background: "linear-gradient(135deg, var(--blue), var(--cyan))" }}
              >
                {initials(member.name)}
              </div>
              <p className="mt-3 text-[13px] font-bold leading-tight text-ink">{member.name}</p>
              <p className="mt-0.5 text-[11px] text-cyan">{member.role}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
