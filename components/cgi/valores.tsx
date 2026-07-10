import { Reveal } from "./reveal"
import { SectionLabel, ICONS } from "./ui"
import { MechanicalHeart } from "./motifs"
import { VALORES } from "@/lib/cgi-data"

export function Valores() {
  const left = VALORES.slice(0, 2)
  const right = VALORES.slice(2, 4)

  return (
    <section id="valores" className="mesh-surface relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <span className="blob" style={{ width: 400, height: 400, top: "20%", left: "50%", marginLeft: -200, background: "rgba(0,147,201,0.10)" }} aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Valores</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Lo que nos <span className="text-gradient">dirige</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* Left cards */}
          <div className="flex flex-col gap-5">
            {left.map((valor) => (
              <ValorCard key={valor.title} valor={valor} align="right" />
            ))}
          </div>

          {/* Heart */}
          <Reveal className="order-first mx-auto w-full max-w-[300px] lg:order-none">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full opacity-60 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(0,200,255,0.35), transparent 70%)" }}
                aria-hidden
              />
              <MechanicalHeart className="relative w-full animate-heartbeat" />
            </div>
          </Reveal>

          {/* Right cards */}
          <div className="flex flex-col gap-5">
            {right.map((valor) => (
              <ValorCard key={valor.title} valor={valor} align="left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValorCard({
  valor,
  align,
}: {
  valor: (typeof VALORES)[number]
  align: "left" | "right"
}) {
  const Icon = ICONS[valor.icon]
  return (
    <article
      className={`glass card-accent group flex gap-4 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan ${
        align === "right" ? "lg:text-right" : ""
      }`}
    >
      <div className={`flex flex-col ${align === "right" ? "lg:order-2 lg:items-end" : ""}`}>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-cyan/10 text-cyan">
          {Icon ? <Icon className="h-5 w-5" /> : null}
        </div>
      </div>
      <div>
        <h3 className="text-base font-bold text-ink">{valor.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{valor.description}</p>
      </div>
    </article>
  )
}
