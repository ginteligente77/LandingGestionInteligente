"use client"

import Image from "next/image"
import { ArrowRight, Lightbulb, Settings, BarChart3, Leaf, ShieldCheck, LineChart, Cpu } from "lucide-react"
import { HERO_FEATURES } from "@/lib/cgi-data"

const ICONS = { Lightbulb, Settings, BarChart3, Leaf } as const

/* Floating callout labels that orbit the brain — matches the reference hero */
const CALLOUTS = [
  {
    icon: LineChart,
    text: "Análisis de datos para decisiones estratégicas",
    box: "left-[1%] top-[5%]",
    node: { x: 40, y: 30 },
    anchor: { x: 24, y: 20 },
    delay: 900,
  },
  {
    icon: Lightbulb,
    text: "Innovación que genera impacto",
    box: "right-[1%] top-[7%] text-right",
    node: { x: 64, y: 26 },
    anchor: { x: 78, y: 22 },
    delay: 1050,
  },
  {
    icon: Cpu,
    text: "Procesos inteligentes y automatización",
    box: "left-[0%] top-[46%]",
    node: { x: 37, y: 50 },
    anchor: { x: 22, y: 56 },
    delay: 1200,
  },
  {
    icon: ShieldCheck,
    text: "Tecnología con propósito y seguridad",
    box: "right-[0%] top-[48%] text-right",
    node: { x: 66, y: 48 },
    anchor: { x: 80, y: 58 },
    delay: 1350,
  },
]

/* Tiny ambient particles floating around the hologram */
const PARTICLES = [
  { left: "12%", top: "22%", size: 4, delay: "0s" },
  { left: "88%", top: "30%", size: 3, delay: "0.8s" },
  { left: "8%", top: "68%", size: 3, delay: "1.4s" },
  { left: "92%", top: "72%", size: 4, delay: "2s" },
  { left: "50%", top: "4%", size: 3, delay: "2.6s" },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="section-dark relative flex min-h-screen w-full flex-col overflow-hidden px-5 pb-10 pt-28 md:px-8 lg:pt-32"
    >
      {/* Grid background */}
      <div className="grid-bg-dark animate-grid-breathe pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      {/* Modern blue nebula — gives the hologram a field to blend into */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(56% 66% at 76% 44%, rgba(0,147,201,0.26) 0%, rgba(26,58,143,0.30) 32%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-6">
        {/* Left: copy */}
        <div className="flex flex-col text-center lg:text-left">
          <p
            className="animate-rise font-mono text-sm font-semibold uppercase tracking-[0.18em] text-cyan-glow"
            style={{ animationDelay: "100ms" }}
          >
            Innovamos hoy,
            <br className="hidden sm:block" /> transformamos el mañana.
          </p>

          <h1
            className="animate-rise mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: "250ms" }}
          >
            <span className="on-dark-title">Soluciones inteligentes para </span>
            <span className="text-gradient-hero">un mundo en evolución.</span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed on-dark-body md:text-lg lg:mx-0"
            style={{ animationDelay: "420ms" }}
          >
            Impulsamos la innovación y la tecnología para optimizar procesos, crear valor y construir un futuro
            sostenible.
          </p>

          <div className="animate-rise mt-8 flex justify-center lg:justify-start" style={{ animationDelay: "560ms" }}>
            <a
              href="#servicios"
              className="group inline-flex items-center justify-center gap-3 rounded-lg border border-cyan-glow/60 bg-cyan/10 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(0,200,255,0.45)] transition-all hover:bg-cyan-glow hover:text-navy hover:shadow-[0_0_38px_-4px_rgba(0,200,255,0.7)]"
            >
              Conoce nuestras soluciones
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right: brain hologram + orbiting callouts */}
        <div className="relative flex items-center justify-center">
          <div className="animate-hologram-in relative aspect-[5/4] w-full max-w-[640px]" style={{ animationDelay: "300ms" }}>
            {/* Ambient orbit glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 46%, rgba(0,200,255,0.16) 0%, rgba(26,58,143,0.14) 44%, transparent 68%)",
              }}
              aria-hidden
            />

            {/* Ambient particles */}
            {PARTICLES.map((p, i) => (
              <span
                key={i}
                className="animate-pulse-dot pointer-events-none absolute rounded-full bg-cyan-glow/90"
                style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }}
                aria-hidden
              />
            ))}

            {/* Brain hologram — the image brings its own glowing platform */}
            <div
              className="animate-globe-float absolute inset-0 z-10 flex items-center justify-center"
              style={{
                maskImage: "radial-gradient(ellipse 62% 60% at 50% 50%, black 55%, transparent 88%)",
                WebkitMaskImage: "radial-gradient(ellipse 62% 60% at 50% 50%, black 55%, transparent 88%)",
              }}
            >
              <Image
                src="/hero-brain.png"
                alt="Cerebro digital holográfico sobre una plataforma luminosa que representa la inteligencia y la tecnología aplicada"
                width={1413}
                height={1132}
                priority
                className="animate-brain-glow h-auto w-full select-none"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            {/* Connector lines from each callout to a node on the brain */}
            <svg
              className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(0,200,255,0.06)" />
                  <stop offset="100%" stopColor="rgba(0,200,255,0.5)" />
                </linearGradient>
              </defs>
              {CALLOUTS.map((c) => (
                <g key={c.text}>
                  <line
                    x1={c.anchor.x}
                    y1={c.anchor.y}
                    x2={c.node.x}
                    y2={c.node.y}
                    stroke="url(#hero-line)"
                    strokeWidth="0.3"
                    strokeLinecap="round"
                  />
                  <circle cx={c.node.x} cy={c.node.y} r="0.8" fill="#00c8ff" className="animate-pulse-dot" />
                </g>
              ))}
            </svg>

            {/* Floating callouts */}
            {CALLOUTS.map((c) => {
              const Icon = c.icon
              const right = c.box.includes("text-right")
              return (
                <div
                  key={c.text}
                  className={`animate-rise absolute z-30 hidden w-[168px] lg:block ${c.box}`}
                  style={{ animationDelay: `${c.delay}ms` }}
                >
                  <div className="animate-float-y" style={{ animationDelay: `${c.delay % 700}ms` }}>
                    <div
                      className={`glass-dark flex flex-col gap-2 rounded-2xl px-4 py-3 ${right ? "items-end" : "items-start"}`}
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-glow/50 bg-cyan/15 text-[#dff4ff] shadow-[0_0_16px_-4px_rgba(0,200,255,0.6)]">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                      </span>
                      <p className="text-[12.5px] font-medium leading-snug text-[#e4eefc]">{c.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="animate-rise relative z-10 mx-auto mt-8 w-full max-w-7xl" style={{ animationDelay: "700ms" }}>
        <div className="glass-dark grid grid-cols-1 gap-6 rounded-2xl px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {HERO_FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS]
            return (
              <div
                key={f.title}
                className="animate-rise flex items-start gap-4 lg:px-6 lg:first:pl-0"
                style={{ animationDelay: `${820 + i * 120}ms` }}
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border border-cyan-glow/40 bg-cyan/10 text-[#dff4ff] shadow-[0_0_18px_-6px_rgba(0,200,255,0.55)]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide on-dark-title">{f.title}</h3>
                  <p className="mt-1 text-sm leading-snug on-dark-muted">{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
