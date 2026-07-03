import { Reveal } from "./reveal"
import { SectionLabel, ICONS } from "./ui"
import { VALORES } from "@/lib/cgi-data"

export function Valores() {
  return (
    <section id="valores" className="relative bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Valores</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Lo que nos dirige
          </h2>
        </Reveal>

        <Reveal animation="stagger" className="mt-14 grid gap-5 md:grid-cols-2">
          {VALORES.map((valor) => {
            const Icon = ICONS[valor.icon]
            return (
              <article
                key={valor.title}
                className="glass card-accent group flex gap-5 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-cyan/10 text-cyan">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{valor.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{valor.description}</p>
                </div>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
