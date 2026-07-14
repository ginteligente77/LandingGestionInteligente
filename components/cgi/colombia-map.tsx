"use client"

import { useEffect, useMemo, useState } from "react"
import useSWR from "swr"
import { ComposableMap, Geographies, Geography, Graticule, Marker } from "react-simple-maps"
import { geoCentroid } from "d3-geo"

const GEO_URL = "/colombia-departments.json"
const W = 560
const H = 640
const PROJECTION_CONFIG = { center: [-73, 4] as [number, number], scale: 1650 }

export const normalizeDept = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .trim()

type FeatureCollection = { type: string; features: GeoFeature[] }
type GeoFeature = { properties: { NOMBRE_DPT: string }; [key: string]: unknown }

const fetcher = (url: string): Promise<FeatureCollection> => fetch(url).then((r) => r.json())

export function ColombiaMap({
  partnerDepts,
  active,
  onHover,
  onSelect,
  large = false,
}: {
  partnerDepts: Set<string>
  active: string | null
  onHover: (dept: string | null) => void
  onSelect: (dept: string) => void
  large?: boolean
}) {
  const { data } = useSWR<FeatureCollection>(GEO_URL, fetcher)
  // react-simple-maps renders differently on the server; mount-gate to avoid a hydration mismatch
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const nodes = useMemo(() => {
    if (!data) return [] as { dept: string; coords: [number, number] }[]
    return data.features
      .filter((f) => partnerDepts.has(normalizeDept(f.properties.NOMBRE_DPT)))
      .map((f) => ({
        dept: normalizeDept(f.properties.NOMBRE_DPT),
        coords: geoCentroid(f as never) as [number, number],
      }))
  }, [data, partnerDepts])

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: `${W} / ${H}`, background: "linear-gradient(160deg, #0a1c40 0%, #0b2350 55%, #08152f 100%)" }}
    >
      {/* radar/coordinate decor */}
      <div className="grid-bg-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 55% at 62% 42%, rgba(0,147,201,0.22), transparent 70%)" }}
        aria-hidden
      />
      <span className="pointer-events-none absolute left-4 top-3 font-mono text-[10px] tracking-widest text-cyan-glow/70">4°N · 73°W</span>
      <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] tracking-widest text-cyan-glow/60">COLOMBIA · LATAM</span>

      {mounted && data && (
      <ComposableMap
        projection="geoMercator"
        projectionConfig={PROJECTION_CONFIG}
        width={W}
        height={H}
        style={{ width: "100%", height: "auto" }}
        aria-label="Mapa de Colombia con los departamentos donde operan nuestros partners"
        role="img"
      >
        <Graticule stroke="rgba(120,190,255,0.10)" step={[5, 5]} />
        <Geographies geography={data ?? { type: "FeatureCollection", features: [] }}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = normalizeDept(geo.properties.NOMBRE_DPT)
              const isPartner = partnerDepts.has(name)
              const isActive = active === name
              const fill = isActive
                ? "var(--green)"
                : isPartner
                  ? "rgba(0, 147, 201, 0.30)"
                  : "rgba(150, 180, 220, 0.06)"
              const stroke = isActive
                ? "var(--green-glow)"
                : isPartner
                  ? "rgba(0, 200, 255, 0.75)"
                  : "rgba(120, 150, 190, 0.28)"
              const geoStyle = {
                fill,
                stroke,
                strokeWidth: isActive ? 1 : 0.5,
                outline: "none",
                filter: isActive ? "drop-shadow(0 0 7px rgba(134, 224, 30, 0.75))" : "none",
                transition: "fill 0.3s ease, stroke 0.3s ease",
                cursor: isPartner ? "pointer" : "default",
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => isPartner && onHover(name)}
                  onMouseLeave={() => onHover(null)}
                  onClick={() => isPartner && onSelect(name)}
                  style={{ default: geoStyle, hover: geoStyle, pressed: geoStyle }}
                />
              )
            })
          }
        </Geographies>

        {/* Glowing partner nodes */}
        {nodes.map((n) => {
          const isActive = active === n.dept
          const color = isActive ? "var(--green-glow)" : "var(--cyan-glow)"
          return (
            <Marker key={n.dept} coordinates={n.coords}>
              <g
                className="cursor-pointer"
                onMouseEnter={() => onHover(n.dept)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onSelect(n.dept)}
              >
                <circle r={isActive ? 9 : 7} fill={color} opacity={0.18} className="animate-pulse-dot" />
                <circle r={isActive ? 4.5 : 3.5} fill={color} />
                <circle r={isActive ? 4.5 : 3.5} fill="none" stroke={color} strokeWidth={0.8} opacity={0.9} />
              </g>
            </Marker>
          )
        })}
      </ComposableMap>
      )}

      {(!mounted || !data) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow/70">Cargando mapa…</span>
        </div>
      )}
    </div>
  )
}
