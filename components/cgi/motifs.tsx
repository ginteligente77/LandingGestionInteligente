/**
 * Decorative brand motifs, hand-built as inline SVG so they inherit the
 * page colours and animate cheaply. They echo the portfolio: a DNA helix
 * for "ADN Organizacional" and a mechanical/gear heart for "Lo que nos dirige".
 */

/* Ambient colour blobs used to add depth to flat sections */
export function AmbientBlobs({
  variant = "light",
}: {
  variant?: "light" | "dark"
}) {
  const cyan = variant === "dark" ? "rgba(0,200,255,0.28)" : "rgba(0,147,201,0.18)"
  const green = variant === "dark" ? "rgba(134,224,30,0.20)" : "rgba(90,163,16,0.14)"
  const blue = variant === "dark" ? "rgba(26,58,143,0.5)" : "rgba(26,58,143,0.12)"
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span className="blob animate-float-blob" style={{ width: 380, height: 380, top: "-6%", left: "-4%", background: cyan }} />
      <span className="blob" style={{ width: 300, height: 300, bottom: "-8%", right: "6%", background: green }} />
      <span className="blob" style={{ width: 460, height: 460, top: "30%", right: "-12%", background: blue }} />
    </div>
  )
}

/* ─── DNA DOUBLE HELIX ─── */
export function DnaHelix({
  className = "",
  turns = 2.5,
  segments = 26,
  uid = "a",
}: {
  className?: string
  turns?: number
  segments?: number
  uid?: string
}) {
  const rungs = Array.from({ length: segments + 1 })
  const amp = 52
  const midX = 90
  const step = 30
  const height = 20 + segments * step + 20
  const phase = (i: number) => (i / segments) * Math.PI * 2 * turns
  const sineX = (i: number) => midX + amp * Math.sin(phase(i))
  const sineX2 = (i: number) => midX - amp * Math.sin(phase(i))

  const strandA = rungs.map((_, i) => `${i === 0 ? "M" : "L"} ${sineX(i).toFixed(1)} ${20 + i * step}`).join(" ")
  const strandB = rungs.map((_, i) => `${i === 0 ? "M" : "L"} ${sineX2(i).toFixed(1)} ${20 + i * step}`).join(" ")

  return (
    <svg viewBox={`0 0 180 ${height}`} fill="none" className={className} role="img" aria-label="Doble hélice de ADN">
      <defs>
        <linearGradient id={`dnaA-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00c8ff" />
          <stop offset="0.5" stopColor="#3aa0ff" />
          <stop offset="1" stopColor="#1a3a8f" />
        </linearGradient>
        <linearGradient id={`dnaB-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#86e01e" />
          <stop offset="0.55" stopColor="#37c6cf" />
          <stop offset="1" stopColor="#0093c9" />
        </linearGradient>
        <filter id={`dnaGlow-${uid}`} x="-60%" y="-10%" width="220%" height="120%">
          <feGaussianBlur stdDeviation="3.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#dnaGlow-${uid})`}>
        {/* rungs (base pairs) */}
        {rungs.map((_, i) => {
          const y = 20 + i * step
          const x1 = sineX(i)
          const x2 = sineX2(i)
          const t = Math.abs(Math.sin(phase(i)))
          return (
            <line
              key={i}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke="rgba(150,205,255,0.6)"
              strokeWidth={2.4}
              strokeLinecap="round"
              opacity={0.25 + t * 0.6}
            />
          )
        })}
        <path d={strandA} stroke={`url(#dnaA-${uid})`} strokeWidth={5.5} strokeLinecap="round" />
        <path d={strandB} stroke={`url(#dnaB-${uid})`} strokeWidth={5.5} strokeLinecap="round" />
        {/* nucleotide nodes */}
        {rungs.map((_, i) => {
          const y = 20 + i * step
          return (
            <g key={`n${i}`}>
              <circle cx={sineX(i)} cy={y} r={5} fill="#4fd6ff" />
              <circle cx={sineX2(i)} cy={y} r={5} fill="#9bee39" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}

/* ─── MECHANICAL / GEAR HEART ─── */
function Gear({
  cx,
  cy,
  r,
  teeth,
  color,
  className = "",
}: {
  cx: number
  cy: number
  r: number
  teeth: number
  color: string
  className?: string
}) {
  const tooth = r * 0.28
  const paths = Array.from({ length: teeth }).map((_, i) => {
    const a = (i / teeth) * Math.PI * 2
    const x1 = cx + Math.cos(a) * r
    const y1 = cy + Math.sin(a) * r
    const x2 = cx + Math.cos(a) * (r + tooth)
    const y2 = cy + Math.sin(a) * (r + tooth)
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={r * 0.16} strokeLinecap="round" />
  })
  return (
    <g className={className} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={r * 0.16} />
      <circle cx={cx} cy={cy} r={r * 0.4} fill="none" stroke={color} strokeWidth={r * 0.16} />
      {paths}
    </g>
  )
}

/**
 * Anatomical (organ) heart, not the symbolic heart — an asymmetric cardiac
 * silhouette with great vessels at the base and clockwork gears inside,
 * echoing the "Lo que nos dirige" mechanical heart from the portfolio.
 * The vessels carry an animated flow to suggest circulation.
 */
const HEART_BODY =
  "M126 240 C 104 222 74 198 58 168 C 44 142 44 112 66 100 C 56 86 58 66 76 61 C 92 57 106 66 112 82 C 118 67 130 58 148 60 C 172 62 190 76 197 100 C 206 128 200 162 178 190 C 162 210 144 226 126 240 Z"

const VESSELS = [
  { d: "M112 82 C 106 46 96 30 80 30", color: "#86e01e", w: 12 },
  { d: "M124 70 C 124 34 140 22 160 28", color: "#00c8ff", w: 15 },
  { d: "M150 66 C 168 50 184 48 196 60", color: "#1a6fd4", w: 11 },
  { d: "M138 66 C 143 44 152 36 164 38", color: "#37c6cf", w: 8 },
]

export function MechanicalHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="none" className={className} role="img" aria-label="Corazón anatómico de engranajes">
      <defs>
        <linearGradient id="heartStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00c8ff" />
          <stop offset="0.55" stopColor="#0093c9" />
          <stop offset="1" stopColor="#86e01e" />
        </linearGradient>
        <linearGradient id="heartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(0,200,255,0.18)" />
          <stop offset="1" stopColor="rgba(90,163,16,0.10)" />
        </linearGradient>
        <clipPath id="heartClip">
          <path d={HEART_BODY} />
        </clipPath>
        <filter id="heartGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* great vessels: solid base + animated flow highlight */}
      <g strokeLinecap="round" fill="none">
        {VESSELS.map((v, i) => (
          <path key={i} d={v.d} stroke={v.color} strokeWidth={v.w} opacity={0.85} />
        ))}
        {VESSELS.map((v, i) => (
          <path
            key={`flow-${i}`}
            d={v.d}
            stroke="#ffffff"
            strokeWidth={v.w * 0.4}
            opacity={0.85}
            className="animate-dash"
            style={{ strokeDasharray: "3 26" }}
          />
        ))}
      </g>

      {/* body fill + gears */}
      <g clipPath="url(#heartClip)">
        <path d={HEART_BODY} fill="url(#heartFill)" />
        <Gear cx={104} cy={132} r={33} teeth={11} color="rgba(0,200,255,0.9)" className="animate-spin-slow" />
        <Gear cx={158} cy={118} r={23} teeth={9} color="rgba(134,224,30,0.9)" className="animate-spin-slower" />
        <Gear cx={152} cy={172} r={27} teeth={10} color="rgba(120,190,255,0.78)" className="animate-spin-slow" />
        <Gear cx={86} cy={182} r={15} teeth={8} color="rgba(134,224,30,0.75)" className="animate-spin-slower" />
        {/* chamber dividers for organ realism */}
        <path d="M120 96 C 114 142 126 186 128 236" stroke="rgba(255,255,255,0.16)" strokeWidth={2} fill="none" />
        <path d="M150 108 C 168 140 168 178 150 208" stroke="rgba(255,255,255,0.10)" strokeWidth={2} fill="none" />
      </g>

      {/* inner glow that beats */}
      <ellipse cx={128} cy={150} rx={64} ry={62} fill="rgba(0,200,255,0.16)" filter="url(#heartGlow)" className="animate-heartbeat" />

      {/* organ outline */}
      <path d={HEART_BODY} fill="none" stroke="url(#heartStroke)" strokeWidth={3.5} strokeLinejoin="round" />
    </svg>
  )
}

/* ─── EKG / HEART-MONITOR PULSE LINE ─── */
export function EkgLine({ className = "" }: { className?: string }) {
  const d =
    "M0 26 H70 L78 26 L84 12 L90 40 L96 8 L102 30 L108 26 H160 L168 26 L174 16 L180 34 L186 26 H260"
  return (
    <svg viewBox="0 0 260 52" fill="none" className={className} role="img" aria-label="Línea de pulso cardíaco">
      <path d={d} stroke="rgba(0,147,201,0.22)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={d}
        stroke="url(#ekgFlow)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-ekg"
      />
      <defs>
        <linearGradient id="ekgFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#00c8ff" />
          <stop offset="1" stopColor="#86e01e" />
        </linearGradient>
      </defs>
    </svg>
  )
}
