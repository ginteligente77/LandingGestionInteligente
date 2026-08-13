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

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/corp.gestion.inteligente?igsh=MWttenE0dWFucWx3ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Corporación Gestión Inteligente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.15 1.77.55.55 1.11.9 1.77 1.15.64.25 1.37.42 2.43.47C8.94 22 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55 2.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.31-.88-.35-1.86C3.8 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35C9.01 3.8 9.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61592400247894"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Corporación Gestión Inteligente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.5-1.46h1.6V4.35C16.3 4.24 15.36 4.13 14.25 4.13c-2.32 0-3.9 1.42-3.9 4.02V10.5H8v3h2.35V21h3.15Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/corporacion-gesti%C3%B3n-inteligente/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Corporación Gestión Inteligente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.25 8.75h3.63V21H3.25V8.75Zm6.28 0h3.48v1.68h.05c.49-.92 1.68-1.9 3.46-1.9 3.7 0 4.38 2.44 4.38 5.6V21h-3.63v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3V21H9.53V8.75Z" />
              </svg>
            </a>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
