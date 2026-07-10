import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { DnaHelix } from "./motifs"
import { OBJETIVOS } from "@/lib/cgi-data"

export function Adn() {
  return (
    <section id="adn" className="section-dark relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="grid-bg-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <span className="blob" style={{ width: 460, height: 460, top: "-12%", right: "-8%", background: "rgba(0,200,255,0.20)" }} aria-hidden />
      <span className="blob" style={{ width: 380, height: 380, bottom: "-10%", left: "-6%", background: "rgba(134,224,30,0.14)" }} aria-hidden />

      {/* DNA motif — dual helix, prominent in the outer gutters */}
      <div className="pointer-events-none absolute -left-10 top-0 hidden h-full items-center opacity-70 lg:flex xl:-left-4" aria-hidden>
        <DnaHelix uid="left" turns={2.6} segments={26} className="h-[90%] w-auto animate-float-y" />
      </div>
      <div className="pointer-events-none absolute -right-10 top-0 hidden h-full items-center opacity-70 lg:flex xl:-right-4" aria-hidden>
        <DnaHelix uid="right" turns={2.6} segments={26} className="h-[90%] w-auto animate-float-y" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>ADN Organizacional</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-5xl">
            <span className="text-gradient-bright">Lo que somos y hacia dónde vamos</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Misión y Visión */}
          <Reveal animation="left" className="glass-dark card-accent p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-glow">Misión</h3>
            <p className="mt-3 leading-relaxed on-dark-body">
              Brindar soluciones integrales de consultoría estratégica, técnica y jurídica a entidades públicas y
              privadas, apoyando la toma de decisiones eficientes, el fortalecimiento institucional y la correcta
              gestión e implementación de proyectos mediante un enfoque profesional, ético e innovador.
            </p>
            <hr className="hr-accent my-7" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-glow">Visión</h3>
            <p className="mt-3 leading-relaxed on-dark-body">
              En 10 años, ser una empresa referente a nivel nacional en consultoría y acompañamiento estratégico,
              reconocida por su compromiso, confiabilidad y capacidad para generar valor sostenible en la gestión
              pública y privada, contribuyendo al desarrollo territorial y organizacional del país.
            </p>
          </Reveal>

          {/* Objetivos */}
          <Reveal animation="right" className="grid gap-4 sm:grid-cols-2">
            {OBJETIVOS.map((obj, i) => (
              <div
                key={obj.title}
                className="glass-dark card-accent flex flex-col p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-display text-sm font-bold text-cyan-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 text-base font-bold text-white">{obj.title}</h4>
                <p className="mt-2 text-sm leading-relaxed on-dark-body">{obj.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
