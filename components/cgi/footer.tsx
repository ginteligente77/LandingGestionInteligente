import Image from "next/image"
import { BRAND } from "@/lib/cgi-data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-base px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <a href="#hero" className="flex items-center gap-2.5">
          <Image
            src="/logo-cgi.png"
            alt="Corporación Gestión Inteligente"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="font-display text-sm font-bold text-ink">
            Gestión<span className="text-cyan">•</span>Inteligente
          </span>
        </a>

        <p className="font-mono text-xs text-gray">© 2026 {BRAND.name}</p>

        <a
          href={`mailto:${BRAND.email}`}
          className="font-mono text-xs text-body transition-colors hover:text-cyan"
        >
          {BRAND.email}
        </a>
      </div>
    </footer>
  )
}
