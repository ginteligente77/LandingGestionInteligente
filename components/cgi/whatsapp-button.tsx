"use client"

import { BRAND } from "@/lib/cgi-data"

export function WhatsappButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3">
      <div className="hidden max-w-[220px] rounded-2xl rounded-br-sm bg-white p-3 text-sm leading-snug text-[#111b21] shadow-lg animate-rise sm:block">
        Cuéntanos tu necesidad y nuestro equipo te asesorará
      </div>

      <a
        href={`https://wa.me/${BRAND.phoneIntl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" fill="white" className="h-8 w-8" aria-hidden>
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.703 4.607 1.912 6.47L4 29l7.72-1.87A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.94 0-3.75-.55-5.29-1.5l-.38-.23-4.58 1.11 1.13-4.46-.25-.4A9.72 9.72 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.938 24.75 16.004 24.75Zm5.94-7.98c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56l-.62-.01c-.21 0-.57.08-.87.4-.3.32-1.14 1.12-1.14 2.72 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.58 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z" />
        </svg>
      </a>
    </div>
  )
}
