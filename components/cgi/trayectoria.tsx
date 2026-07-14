"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel, ICONS } from "./ui"
import { TRAYECTORIA, LOGOS } from "@/lib/cgi-data"

const AUTOPLAY_MS = 6500

export function Trayectoria() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = TRAYECTORIA.length
  const timer = useRef<number | null>(null)

  const go = useCallback((next: number) => setIndex((next + total) % total), [total])

  useEffect(() => {
    if (paused) return
    timer.current = window.setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [index, paused, go])

  const active = TRAYECTORIA[index]
  const Icon = ICONS[active.icon]

  return (
    <section id="trayectoria" className="section-dark relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="grid-bg-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <span className="blob" style={{ width: 480, height: 480, top: "-10%", left: "-8%", background: "rgba(0,200,255,0.22)" }} aria-hidden />
      <span className="blob" style={{ width: 420, height: 420, bottom: "-12%", right: "-6%", background: "rgba(134,224,30,0.14)" }} aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Trayectoria</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-bold leading-tight md:text-5xl">
            <span className="text-gradient-bright">Trayectoria de transformación</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed on-dark-body">
            Proyectos e iniciativas que han generado impacto real en instituciones públicas y privadas del país.
          </p>
        </Reveal>

        {/* Carousel */}
        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass-dark card-accent overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-[460px]">
                {TRAYECTORIA.map((item, i) => (
                  <Image
                    key={item.number}
                    src={item.image}
                    alt={`${item.title} — ${item.client}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-all duration-700 ease-out ${
                      i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                    priority={i === 0}
                  />
                ))}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(120deg, rgba(8,21,47,0.55) 0%, transparent 45%, rgba(8,21,47,0.25) 100%)" }}
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute left-5 top-4 font-display text-[92px] font-bold leading-none text-white/15 md:text-[120px]"
                  aria-hidden
                >
                  {active.number}
                </span>
                <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-cyan-glow backdrop-blur">
                  {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                  {active.client}
                </span>
              </div>

              {/* Copy */}
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-glow">
                  Proyecto {active.number} / {String(total).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white md:text-[2rem]">
                  {active.title}
                </h3>
                <p className="mt-4 leading-relaxed on-dark-body">{active.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan-glow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {active.logos.length > 0 && (
                  <div className="mt-6 flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest on-dark-muted">Cliente</span>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {active.logos.map((key) => {
                        const logo = LOGOS[key as keyof typeof LOGOS]
                        if (!logo) return null
                        return (
                          <span key={key} className="flex h-10 items-center rounded-lg bg-white px-3 shadow-sm">
                            <Image
                              src={logo.src}
                              alt={logo.name}
                              width={120}
                              height={40}
                              className="max-h-6 w-auto object-contain"
                            />
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Proyecto anterior"
                      onClick={() => go(index - 1)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-cyan hover:bg-cyan hover:text-navy"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Proyecto siguiente"
                      onClick={() => go(index + 1)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-cyan hover:bg-cyan hover:text-navy"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-1 items-center gap-1.5">
                    {TRAYECTORIA.map((item, i) => (
                      <button
                        key={item.number}
                        type="button"
                        aria-label={`Ir al proyecto ${item.number}`}
                        aria-current={i === index}
                        onClick={() => setIndex(i)}
                        className="group h-2 flex-1 overflow-hidden rounded-full bg-white/15"
                      >
                        <span
                          className={`block h-full rounded-full bg-gradient-to-r from-cyan to-green transition-all duration-300 ${
                            i === index ? "w-full" : "w-0 group-hover:w-1/2"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Number tabs */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {TRAYECTORIA.map((item, i) => {
              const TabIcon = ICONS[item.icon]
              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all ${
                    i === index
                      ? "border-cyan/60 bg-cyan/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${i === index ? "bg-cyan text-navy" : "bg-white/5 text-cyan-glow"}`}>
                    {TabIcon ? <TabIcon className="h-4 w-4" /> : null}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] text-cyan-glow">{item.number}</span>
                    <span className="block truncate text-xs font-semibold text-white">{item.title}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
