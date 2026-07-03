"use client"

import { useMemo } from "react"
import useSWR from "swr"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { geoCentroid, geoMercator } from "d3-geo"

const GEO_URL = "/colombia-departments.json"
const W = 560
const H = 640
const PROJECTION_CONFIG = { center: [-73, 4] as [number, number], scale: 1650 }
const ZOOM = 2.8

export const normalizeDept = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim()

type FeatureCollection = { type: string; features: GeoFeature[] }
type GeoFeature = { properties: { NOMBRE_DPT: string }; [key: string]: unknown }

const fetcher = (url: string): Promise<FeatureCollection> => fetch(url).then((r) => r.json())

export function ColombiaMap({
  partnerDepts,
  active,
  onActiveChange,
}: {
  partnerDepts: Set<string>
  active: string | null
  onActiveChange: (dept: string | null) => void
}) {
  const { data } = useSWR<FeatureCollection>(GEO_URL, fetcher)

  const projection = useMemo(
    () => geoMercator().center(PROJECTION_CONFIG.center).scale(PROJECTION_CONFIG.scale).translate([W / 2, H / 2]),
    [],
  )

  const transform = useMemo(() => {
    if (!active || !data) return "translate(0px, 0px) scale(1)"
    const feature = data.features.find((f) => normalizeDept(f.properties.NOMBRE_DPT) === active)
    if (!feature) return "translate(0px, 0px) scale(1)"
    const point = projection(geoCentroid(feature as never))
    if (!point) return "translate(0px, 0px) scale(1)"
    const [px, py] = point
    return `translate(${W / 2 - px * ZOOM}px, ${H / 2 - py * ZOOM}px) scale(${ZOOM})`
  }, [active, data, projection])

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={PROJECTION_CONFIG}
        width={W}
        height={H}
        style={{ width: "100%", height: "auto" }}
        aria-label="Mapa de Colombia con los departamentos donde operan nuestros partners"
        role="img"
      >
        <g
          style={{
            transform,
            transformOrigin: "0px 0px",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Geographies geography={data ?? { type: "FeatureCollection", features: [] }}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = normalizeDept(geo.properties.NOMBRE_DPT)
                const isPartner = partnerDepts.has(name)
                const isActive = active === name
                const fill = isActive
                  ? "var(--green)"
                  : isPartner
                    ? "rgba(0, 147, 201, 0.22)"
                    : "rgba(203, 213, 225, 0.55)"
                const stroke = isActive ? "var(--green-glow)" : isPartner ? "var(--cyan)" : "rgba(148, 163, 184, 0.8)"
                const geoStyle = {
                  fill,
                  stroke,
                  strokeWidth: isActive ? 0.9 : 0.5,
                  outline: "none",
                  filter: isActive ? "drop-shadow(0 0 6px rgba(134, 224, 30, 0.7))" : "none",
                  transition: "fill 0.35s ease, stroke 0.35s ease",
                  cursor: isPartner ? "pointer" : "default",
                }
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => isPartner && onActiveChange(name)}
                    onMouseLeave={() => onActiveChange(null)}
                    style={{ default: geoStyle, hover: geoStyle, pressed: geoStyle }}
                  />
                )
              })
            }
          </Geographies>
        </g>
      </ComposableMap>

      {!data && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gray">Cargando mapa…</span>
        </div>
      )}
    </div>
  )
}
