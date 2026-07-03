import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Corporación Gestión Inteligente | Consultoría Estratégica",
  description:
    "Soluciones integrales de gestión estratégica, técnica y jurídica para organizaciones públicas y privadas en Colombia. Hacemos que tu institución haga realidad el proyecto que piensas.",
  keywords: [
    "consultoría estratégica",
    "gestión inteligente",
    "sector público",
    "Bucaramanga",
    "Colombia",
    "consultoría jurídica",
    "gestión de proyectos",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Corporación Gestión Inteligente",
    description:
      "Soluciones integrales de gestión estratégica, técnica y jurídica para organizaciones públicas y privadas.",
    siteName: "Corporación Gestión Inteligente",
    locale: "es_CO",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#e6eef9",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
