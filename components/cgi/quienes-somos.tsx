import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { TEAM } from "@/lib/cgi-data"

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="mesh-surface relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <span className="blob" style={{ width: 360, height: 360, top: "8%", right: "-6%", background: "rgba(0,147,201,0.12)" }} aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[47fr_53fr] lg:gap-16">
        {/* Left column */}
        <Reveal animation="left" className="flex flex-col">
          <SectionLabel>Quiénes somos</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Un equipo experto con <span className="text-gradient">propósito claro</span>
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

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "Multidisciplinar", v: "6 líderes" },
              { k: "Cobertura", v: "9 dptos." },
              { k: "Enfoque", v: "IA + gestión" },
            ].map((s) => (
              <div key={s.k} className="glass card-accent p-4">
                <p className="font-display text-lg font-bold text-ink">{s.v}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-gray">{s.k}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right column — team grid with photos */}
        <Reveal animation="stagger" className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="glass card-accent group flex flex-col items-center overflow-hidden p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan"
            >
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-full opacity-70 blur-[6px] transition-opacity group-hover:opacity-100"
                  style={{ background: "conic-gradient(from 180deg, var(--cyan), var(--green), var(--blue), var(--cyan))" }}
                  aria-hidden
                />
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-[13px] font-bold leading-tight text-ink">{member.name}</p>
              <p className="mt-0.5 text-[11px] font-medium text-cyan">{member.role}</p>

              {(member.phone || member.email) && (
                <div className="mt-3 flex items-center gap-2">
                  {member.phone && (
                    <a
                      href={`https://wa.me/${member.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp de ${member.name}`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-cyan transition-colors hover:bg-cyan hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Correo de ${member.name}`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-cyan transition-colors hover:bg-cyan hover:text-white"
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
