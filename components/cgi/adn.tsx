import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { OBJETIVOS } from "@/lib/cgi-data"

export function Adn() {
  return (
    <section id="adn" className="relative bg-base px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>ADN Organizacional</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Lo que somos y hacia dónde vamos
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Misión y Visión */}
          <Reveal animation="left" className="glass card-accent p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Misión</h3>
            <p className="mt-3 leading-relaxed text-body">
              Brindar soluciones integrales de consultoría estratégica, técnica y jurídica a entidades públicas y
              privadas, apoyando la toma de decisiones eficientes, el fortalecimiento institucional y la correcta
              gestión e implementación de proyectos mediante un enfoque profesional, ético e innovador.
            </p>
            <hr className="hr-accent my-7" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Visión</h3>
            <p className="mt-3 leading-relaxed text-body">
              En 10 años, ser una empresa referente a nivel nacional en consultoría y acompañamiento estratégico,
              reconocida por su compromiso, confiabilidad y capacidad para generar valor sostenible en la gestión
              pública y privada, contribuyendo al desarrollo territorial y organizacional del país.
            </p>
          </Reveal>

          {/* Objetivos */}
          <Reveal animation="right" className="grid gap-4 sm:grid-cols-2">
            {OBJETIVOS.map((obj) => (
              <div
                key={obj.title}
                className="glass card-accent flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan" />
                  <h4 className="text-base font-bold text-ink">{obj.title}</h4>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-body">{obj.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
