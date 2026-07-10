"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { PARTNERS, FIELD_GALLERY } from "@/lib/cgi-data"
import { ColombiaMap, normalizeDept } from "./colombia-map"

const TERRITORY_PHOTOS = FIELD_GALLERY.slice(0, 4)

export function Partners() {
  const [active, setActive] = useState<string | null>(null)

  const partnerDepts = useMemo(() => new Set(PARTNERS.map((p) => normalizeDept(p.dept))), [])
  const activePartner = useMemo(
    () => (active ? PARTNERS.find((p) => normalizeDept(p.dept) === active) : null),
    [active],
  )

  return (
    <section id="partners" className="mesh-light relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <span className="blob" style={{ width: 400, height: 400, top: "10%", left: "-8%", background: "rgba(90,163,16,0.10)" }} aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex max-w-2xl flex-col">
          <SectionLabel>Territorio</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Partners en el territorio
          </h2>
          <p className="mt-4 text-pretty text-body leading-relaxed">
            Contamos con aliados estratégicos en todo el territorio colombiano, con perfiles multidisciplinarios que
            permiten ejecutar proyectos de impacto regional. Pasa el cursor sobre un departamento para ubicarlo en el
            mapa.
          </p>
        </Reveal>

        {/* Field photo strip — real work in the territory */}
        <Reveal animation="stagger" className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TERRITORY_PHOTOS.map((photo) => (
            <figure key={photo.src} className="photo-frame group aspect-[4/3]">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 p-3 text-[11px] font-medium leading-snug text-white">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          {/* Map */}
          <Reveal className="lg:sticky lg:top-24">
            <div className="glass relative overflow-hidden rounded-2xl p-4 md:p-6">
              <ColombiaMap partnerDepts={partnerDepts} active={active} onActiveChange={setActive} />
              <div className="mt-2 min-h-[3.5rem] rounded-lg border border-border bg-base px-4 py-3">
                {activePartner ? (
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-green">
                      {activePartner.dept}
                    </span>
                    <span className="mt-0.5 text-sm font-bold text-ink">{activePartner.name}</span>
                    <span className="text-xs text-gray">{activePartner.profile}</span>
                  </div>
                ) : (
                  <span className="flex h-full items-center font-mono text-xs uppercase tracking-widest text-gray">
                    Selecciona un departamento
                  </span>
                )}
              </div>
            </div>
          </Reveal>

          {/* Cards */}
          <Reveal animation="stagger" className="grid gap-4 sm:grid-cols-2">
            {PARTNERS.map((p) => {
              const key = normalizeDept(p.dept)
              const isActive = active === key
              return (
                <article
                  key={p.dept + p.name}
                  onMouseEnter={() => setActive(key)}
                  onMouseLeave={() => setActive(null)}
                  className={`glass card-accent group flex flex-col p-5 transition-all duration-300 hover:-translate-y-1 ${
                    isActive ? "border-green ring-1 ring-green/50" : "hover:border-cyan"
                  }`}
                >
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide transition-colors ${
                      isActive ? "border-green bg-green/10 text-green" : "border-border bg-cyan/10 text-cyan"
                    }`}
                  >
                    <MapPin className="h-3 w-3" />
                    {p.dept}
                  </span>
                  <p className="mt-3 text-sm font-bold text-ink">{p.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray">{p.profile}</p>
                </article>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
