/* Moving ticker band with the company's flagship services */

const TICKER_SERVICES = [
  "Gestión de Proyectos",
  "Gobernanza Pública",
  "Ciencia, Tecnología e Innovación",
  "Consultoría Privada",
  "Formación a la Vanguardia",
  "Ordenamiento Territorial",
  "Estudios Ambientales",
  "Transformación Digital",
  "Ciberseguridad",
  "Soluciones con IA",
  "Interventoría y Obra Civil",
  "Servicios Públicos Domiciliarios",
]

function TickerTrack() {
  return (
    <div className="marquee__track" style={{ ["--marquee-duration" as string]: "56s" }}>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
          {TICKER_SERVICES.map((service) => (
            <span key={service} className="flex items-center">
              <span className="whitespace-nowrap px-6 font-display text-base font-bold uppercase tracking-[0.08em] text-[#e7f1ff] md:text-lg">
                {service}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-glow shadow-[0_0_10px_rgba(0,200,255,0.8)]" aria-hidden />
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ServicesTicker() {
  return (
    <section
      aria-label="Servicios principales"
      className="relative overflow-hidden border-y border-white/10 py-6"
      style={{
        background:
          "radial-gradient(900px 300px at 20% 0%, rgba(0,147,201,0.25), transparent 60%), radial-gradient(900px 300px at 85% 100%, rgba(26,58,143,0.45), transparent 60%), linear-gradient(90deg, #08132a 0%, #0b2350 55%, #08152f 100%)",
      }}
    >
      {/* subtle top/bottom glow lines */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.5), transparent)" }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.35), transparent)" }}
        aria-hidden
      />
      <div className="marquee">
        <TickerTrack />
      </div>
    </section>
  )
}
