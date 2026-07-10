import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel, TERRITORIAL_ICONS } from "./ui"
import { TERRITORIAL } from "@/lib/cgi-data"

export function Territorial() {
  return (
    <section id="territorial" className="mesh-light relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <span className="blob" style={{ width: 420, height: 420, top: "-8%", left: "-6%", background: "rgba(90,163,16,0.14)" }} aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Servicio destacado</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Ordenamiento territorial y <span className="text-green">estudios ambientales</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-body">{TERRITORIAL.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
          {/* Image */}
          <Reveal animation="left" className="photo-frame animate-float-y">
            <Image
              src="/campo-vichada.jpeg"
              alt="Trabajo en territorio con enfoque ambiental y comunitario"
              width={1100}
              height={825}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 z-10 rounded-lg border border-white/25 bg-navy/55 px-3 py-2 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-glow">Enfoque territorial</p>
              <p className="text-sm font-semibold text-white">Sostenible, participativo y con datos</p>
            </div>
          </Reveal>

          {/* Instruments — modern list */}
          <Reveal animation="right" className="flex flex-col">
            <ul className="flex flex-col divide-y divide-border/70">
              {TERRITORIAL.instruments.map((ins, i) => {
                const Icon = TERRITORIAL_ICONS[ins.code]
                return (
                  <li key={ins.code} className="group relative flex items-center gap-4 py-3.5">
                    <span
                      className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-green to-cyan transition-all duration-300 group-hover:h-3/4"
                      aria-hidden
                    />
                    <span className="font-mono text-xs tabular-nums text-gray/70">{String(i + 1).padStart(2, "0")}</span>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                      {Icon ? <Icon className="h-5 w-5" /> : null}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-display text-base font-bold text-ink">{ins.code}</span>
                      <span className="ml-2 text-sm text-gray">· {ins.label}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-green opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </li>
                )
              })}
            </ul>

            <div className="mt-7 rounded-2xl border border-green/20 bg-green/[0.06] p-5">
              <ul className="space-y-3">
                {TERRITORIAL.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green/15 text-green">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-body">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
