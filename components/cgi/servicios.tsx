"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Plus } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel, ICONS } from "./ui"
import { SERVICES } from "@/lib/cgi-data"

export function Servicios() {
  const [open, setOpen] = useState(0)
  // Last opened service drives the image panel, so closing an item keeps its photo
  const [active, setActive] = useState(0)

  const toggle = (i: number) => {
    setOpen(open === i ? -1 : i)
    if (open !== i) setActive(i)
  }

  return (
    <section id="servicios" className="mesh-surface relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <span className="blob" style={{ width: 380, height: 380, top: "-6%", right: "-6%", background: "rgba(26,58,143,0.10)" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Otros servicios</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Otros servicios <span className="text-gradient">inteligentes</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-body">
            Un portafolio integral para acompañar cada etapa de tu proyecto. Explora cada línea de servicio.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          {/* Accordion */}
          <Reveal animation="stagger" className="flex flex-col gap-4">
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
                    onClick={() => toggle(i)}
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
                      {/* Mobile-only photo — desktop shows the side panel instead */}
                      <div className="photo-frame relative mx-5 mb-4 aspect-[16/9] overflow-hidden rounded-xl md:mx-6 lg:hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 90vw, 0px"
                          className="object-cover"
                        />
                      </div>
                      <ul className="space-y-2.5 px-5 pb-6 md:px-6 lg:pl-[6rem]">
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

          {/* Sticky crossfading image panel (desktop) */}
          <Reveal className="hidden lg:block lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[0_30px_60px_-30px_rgba(8,19,42,0.45)]">
              {SERVICES.map((service, i) => {
                const isActive = active === i
                return (
                  <div
                    key={service.title}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive ? "z-10 opacity-100 scale-100" : "z-0 opacity-0 scale-[1.06]"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 0px"
                      className="object-cover"
                    />
                    {/* Legibility gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,19,42,0.82) 0%, rgba(8,19,42,0.25) 42%, transparent 68%)",
                      }}
                    />
                    {/* Caption */}
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                      <div>
                        <span className="inline-flex items-center rounded-full border border-cyan-glow/50 bg-navy/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-glow backdrop-blur">
                          {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                        </span>
                        <p className="mt-2.5 font-display text-lg font-bold leading-snug text-white">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Cyan accent frame */}
              <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-cyan/25" />
            </div>

            {/* Progress dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {SERVICES.map((service, i) => (
                <button
                  key={service.title}
                  type="button"
                  aria-label={`Ver ${service.title}`}
                  onClick={() => {
                    setActive(i)
                    setOpen(i)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-cyan" : "w-3 bg-border hover:bg-cyan/50"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
