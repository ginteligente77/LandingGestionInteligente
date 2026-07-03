import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel, ICONS } from "./ui"
import { SERVICES } from "@/lib/cgi-data"

export function Servicios() {
  return (
    <section id="servicios" className="relative bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Servicios</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Otros servicios inteligentes
          </h2>
        </Reveal>

        <Reveal animation="stagger" className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <article
                key={service.title}
                className="glass card-accent group p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-cyan/10 text-cyan">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
