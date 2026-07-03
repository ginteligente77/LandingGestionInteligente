import { Reveal } from "./reveal"
import { SectionLabel, ICONS } from "./ui"
import { TRAYECTORIA } from "@/lib/cgi-data"

export function Trayectoria() {
  return (
    <section id="trayectoria" className="relative bg-base px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Trayectoria</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Trayectoria de transformación
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-body leading-relaxed">
            Proyectos e iniciativas que han generado impacto real en instituciones públicas y privadas del país.
          </p>
        </Reveal>

        <Reveal animation="stagger" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRAYECTORIA.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <article
                key={item.number}
                className="glass card-accent group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan"
              >
                <span
                  className="pointer-events-none absolute -right-2 top-2 font-display text-[120px] font-bold leading-none text-ink/[0.06]"
                  aria-hidden
                >
                  {item.number}
                </span>
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-cyan/10 text-cyan">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
                </div>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
