"use client"

import { useState } from "react"
import { ArrowRight, Plus } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel, ICONS } from "./ui"
import { SERVICES } from "@/lib/cgi-data"

export function Servicios() {
  const [open, setOpen] = useState(0)

  return (
    <section id="servicios" className="mesh-surface relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <span className="blob" style={{ width: 380, height: 380, top: "-6%", right: "-6%", background: "rgba(26,58,143,0.10)" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Otros servicios</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Otros servicios <span className="text-gradient">inteligentes</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-body">
            Un portafolio integral para acompañar cada etapa de tu proyecto. Explora cada línea de servicio.
          </p>
        </Reveal>

        <Reveal animation="stagger" className="mt-12 flex flex-col gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]
            const isOpen = open === i
            return (
              <article
                key={service.title}
                className={`glass card-accent overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-cyan shadow-lg" : "hover:border-cyan/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-colors ${
                      isOpen ? "border-cyan bg-cyan text-white" : "border-border bg-cyan/10 text-cyan"
                    }`}
                  >
                    {Icon ? <Icon className="h-6 w-6" /> : null}
                  </span>
                  <h3 className="flex-1 font-display text-lg font-bold text-ink md:text-xl">{service.title}</h3>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-cyan transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2.5 px-5 pb-6 pl-[5.25rem] md:px-6 md:pl-[6rem]">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
