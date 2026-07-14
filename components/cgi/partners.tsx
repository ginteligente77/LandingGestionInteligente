"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { MapPin, X, UserRound } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { PARTNERS, FIELD_GALLERY } from "@/lib/cgi-data"
import { ColombiaMap, normalizeDept } from "./colombia-map"

const TERRITORY_PHOTOS = FIELD_GALLERY.slice(0, 4)

type Partner = (typeof PARTNERS)[number]

export function Partners() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<Partner | null>(null)

  const partnerDepts = useMemo(() => new Set(PARTNERS.map((p) => normalizeDept(p.dept))), [])
  const byDept = useMemo(() => {
    const m = new Map<string, Partner>()
    PARTNERS.forEach((p) => m.set(normalizeDept(p.dept), p))
    return m
  }, [])

  const openDept = (dept: string) => {
    const p = byDept.get(dept)
    if (p) setSelected(p)
  }

  // Lock scroll + close on Escape while the popup is open
  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [selected])

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
            permiten ejecutar proyectos de impacto regional. Haz clic en un departamento del mapa o en una tarjeta para
            ver el perfil.
          </p>
        </Reveal>

        {/* Field photo strip */}
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

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          {/* Map panel */}
          <Reveal className="lg:sticky lg:top-24">
            <div className="relative">
              <ColombiaMap partnerDepts={partnerDepts} active={hovered} onHover={setHovered} onSelect={openDept} />
              <div className="mt-3 flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-2.5">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gray">
                  <span className="h-2 w-2 rounded-full bg-cyan" /> Presencia
                  <span className="ml-3 h-2 w-2 rounded-full bg-green" /> Seleccionado
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray">{PARTNERS.length} partners</span>
              </div>
            </div>
          </Reveal>

          {/* Cards */}
          <Reveal animation="stagger" className="grid gap-4 sm:grid-cols-2">
            {PARTNERS.map((p) => {
              const key = normalizeDept(p.dept)
              const isActive = hovered === key
              return (
                <button
                  key={p.dept + p.name}
                  type="button"
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(p)}
                  className={`glass card-accent group flex flex-col p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
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
                </button>
              )
            })}
          </Reveal>
        </div>
      </div>

      {/* Partner popup */}
      {selected && <PartnerModal partner={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

function Overlay({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm animate-in fade-in" onClick={onClose} aria-hidden />
      {children}
    </div>
  )
}

function PartnerModal({ partner, onClose }: { partner: Partner; onClose: () => void }) {
  return (
    <Overlay onClose={onClose}>
      <div className="glass card-accent relative z-10 w-full max-w-md overflow-hidden p-7">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-navy hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-green bg-green/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-green">
          <MapPin className="h-3 w-3" /> {partner.dept}
        </span>

        <div className="mt-5 flex items-center gap-4">
          <span
            className="grid h-16 w-16 shrink-0 place-items-center rounded-full text-white"
            style={{ background: "linear-gradient(135deg, var(--blue), var(--cyan))" }}
          >
            <UserRound className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold text-ink">{partner.name}</h3>
            <p className="mt-0.5 text-sm text-cyan">{partner.profile}</p>
          </div>
        </div>

        <hr className="hr-accent my-6" />
        <p className="text-sm leading-relaxed text-body">
          Partner estratégico de Corporación Gestión Inteligente en {partner.dept}, apoyando la ejecución de proyectos
          con conocimiento local y enfoque territorial.
        </p>
      </div>
    </Overlay>
  )
}
