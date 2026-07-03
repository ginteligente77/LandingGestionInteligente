import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { ALIADOS, CLIENTES } from "@/lib/cgi-data"

function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="glass cursor-default rounded-full px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-cyan hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function Aliados() {
  return (
    <section id="aliados" className="relative bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Aliados y Clientes</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Confianza que construye resultados
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal animation="left">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Aliados</h3>
            <BadgeList items={ALIADOS} />
          </Reveal>
          <Reveal animation="right">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Clientes</h3>
            <BadgeList items={CLIENTES} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
