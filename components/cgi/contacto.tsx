import Image from "next/image"
import { User, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"
import { BRAND } from "@/lib/cgi-data"

export function Contacto() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-base px-5 py-24 md:px-8 md:py-32">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,200,255,0.10) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="flex flex-col items-center text-center">
          <SectionLabel>Contacto</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight md:text-4xl">
            Hagamos realidad tu próximo proyecto
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Photo — advisory moment */}
          <Reveal animation="left" className="order-last lg:order-first">
            <figure className="photo-frame h-full min-h-[320px]">
              <Image
                src="/oficina-seguros.jpeg"
                alt="Equipo de Gestión Inteligente asesorando a un cliente"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-[center_30%]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 p-5 text-sm font-medium leading-snug text-white">
                Asesoría y acompañamiento cercano en cada proyecto.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal animation="right" className="glass h-full p-8 text-left md:p-10">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <User className="h-5 w-5 shrink-0 text-cyan" />
              <span className="text-ink">
                <span className="font-semibold">{BRAND.ceo}</span> · CEO
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-cyan" />
              <a href={`tel:+57${BRAND.phoneIntl.slice(2)}`} className="text-body transition-colors hover:text-cyan">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-cyan" />
              <a
                href={`mailto:${BRAND.email}`}
                className="break-all text-body transition-colors hover:text-cyan"
              >
                {BRAND.email}
              </a>
            </li>
          </ul>

          <hr className="hr-accent my-7" />

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Enviar mensaje
            </a>
            <a
              href={`https://wa.me/${BRAND.phoneIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-base px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-cyan"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <hr className="hr-accent my-7" />

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
            <p className="text-sm leading-relaxed text-body">{BRAND.address}</p>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
