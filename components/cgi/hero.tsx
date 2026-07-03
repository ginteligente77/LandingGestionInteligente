"use client"

import Image from "next/image"
import { ArrowRight, Lightbulb, Settings, BarChart3, Leaf } from "lucide-react"
import { HERO_FEATURES } from "@/lib/cgi-data"

const ICONS = { Lightbulb, Settings, BarChart3, Leaf } as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-5 pb-10 pt-28 md:px-8 lg:pt-32"
    >
      {/* Grid background */}
      <div className="grid-bg animate-grid-breathe pointer-events-none absolute inset-0" aria-hidden />
      {/* Radial vignette — fades edges into the light base */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 75% 45%, transparent 0%, transparent 45%, var(--base) 88%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="flex flex-col text-center lg:text-left">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-green">
            Innovamos hoy,
            <br className="hidden sm:block" /> transformamos el mañana.
          </p>

          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-ink">Soluciones inteligentes para </span>
            <span className="text-green">un mundo en evolución.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-body md:text-lg lg:mx-0">
            Impulsamos la innovación y la tecnología para optimizar procesos, crear valor y construir un futuro
            sostenible.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#servicios"
              className="group inline-flex items-center justify-center gap-3 rounded-lg border-2 border-green px-7 py-3.5 text-sm font-semibold text-green transition-colors hover:bg-green hover:text-navy"
            >
              Conoce nuestras soluciones
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right: globe */}
        <div className="relative flex items-center justify-center">
          {/* Dark halo so the screen-blended hologram stays vivid on the light page */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[112%] w-[112%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 47%, #0a1c40 0%, #0b2350 38%, rgba(11,35,80,0.55) 58%, transparent 72%)",
            }}
            aria-hidden
          />
          <div
            className="animate-globe-float relative w-full max-w-[560px]"
            style={{
              maskImage: "radial-gradient(ellipse 72% 72% at 50% 48%, black 55%, transparent 82%)",
              WebkitMaskImage: "radial-gradient(ellipse 72% 72% at 50% 48%, black 55%, transparent 82%)",
            }}
          >
            <Image
              src="/hero-globe.png"
              alt="Globo terráqueo digital rodeado por una órbita luminosa que representa soluciones tecnológicas globales"
              width={1024}
              height={1024}
              priority
              className="h-auto w-full select-none"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="relative z-10 mx-auto mt-8 w-full max-w-7xl">
        <hr className="mb-6 border-0 border-t border-border" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
          {HERO_FEATURES.map((f) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS]
            return (
              <div key={f.title} className="flex items-start gap-3 lg:px-6 lg:first:pl-0">
                <Icon className="mt-0.5 h-7 w-7 flex-shrink-0 text-green" strokeWidth={1.5} aria-hidden />
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-gray">{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
