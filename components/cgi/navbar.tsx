"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { NAV_LINKS } from "@/lib/cgi-data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "h-16" : "h-28"}`}
        style={{
          background: scrolled
            ? "linear-gradient(180deg, rgba(9,24,55,0.72) 0%, rgba(8,19,42,0.62) 100%)"
            : "linear-gradient(180deg, rgba(10,28,64,0.32) 0%, rgba(8,21,47,0.12) 100%)",
          borderBottom: scrolled ? "1px solid rgba(120,180,255,0.18)" : "1px solid rgba(120,180,255,0.08)",
          WebkitBackdropFilter: scrolled ? "blur(18px) saturate(160%)" : "blur(6px) saturate(120%)",
          backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "blur(6px) saturate(120%)",
          boxShadow: scrolled ? "0 12px 40px -18px rgba(4,10,26,0.65)" : "none",
        }}
      >
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8">
          <a
            href="#hero"
            aria-label="Corporación Gestión Inteligente - Inicio"
            className="flex items-center"
          >
            <span
              className={`rounded-2xl bg-white/92 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/40 backdrop-blur transition-all duration-500 ${
                scrolled ? "px-2.5 py-1" : "px-3 py-1.5"
              }`}
            >
              <Image
                src="/logo-cgi.png"
                alt="Corporación Gestión Inteligente"
                width={320}
                height={116}
                className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-11" : "h-[72px]"}`}
                priority
              />
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-[#cdddf5] drop-shadow-[0_1px_2px_rgba(4,10,26,0.55)] transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-cyan-glow to-green-glow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-cyan-glow/60 px-4 py-2 text-sm font-semibold text-cyan-glow transition-colors hover:bg-cyan-glow hover:text-navy"
            >
              Contacto
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-2 border-l border-border bg-surface p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="font-display text-base font-bold text-ink">
              Gestión<span className="text-cyan">•</span>Inteligente
            </span>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-body transition-colors hover:bg-black/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-cyan px-4 py-3 text-sm font-semibold text-white"
          >
            Contacto <ArrowRight className="h-4 w-4" />
          </a>
        </aside>
      </div>
    </>
  )
}
