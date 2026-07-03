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
        className="fixed inset-x-0 top-0 z-50 h-24 transition-[background,backdrop-filter] duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-cyan)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px -12px rgba(8,19,42,0.25)" : "none",
        }}
      >
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8">
          <a
            href="#hero"
            aria-label="Corporación Gestión Inteligente - Inicio"
            className={`flex items-center transition-opacity ${scrolled ? "opacity-100" : "opacity-90"}`}
          >
            <Image
              src="/logo-cgi.png"
              alt="Corporación Gestión Inteligente"
              width={220}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-body transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-cyan px-4 py-2 text-sm font-semibold text-cyan transition-colors hover:bg-cyan hover:text-white"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden"
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
