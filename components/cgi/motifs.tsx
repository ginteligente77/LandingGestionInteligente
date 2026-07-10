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
 * Anatomical (organ) heart, not the symbolic heart — a cardiac silhouette
 * with great vessels at the base and clockwork gears inside, echoing the
 * "Lo que nos dirige" mechanical heart from the portfolio.
 */
const HEART_BODY =
  "M128 238 C 92 216 58 190 50 152 C 44 124 51 101 74 99 C 60 90 58 72 73 63 C 88 54 107 63 110 82 C 118 69 135 63 151 70 C 179 82 202 110 197 150 C 192 195 165 218 128 238 Z"

export function MechanicalHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 250" fill="none" className={className} role="img" aria-label="Corazón anatómico de engranajes">
      <defs>
        <linearGradient id="heartStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00c8ff" />
          <stop offset="0.55" stopColor="#0093c9" />
          <stop offset="1" stopColor="#86e01e" />
        </linearGradient>
        <linearGradient id="heartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(0,200,255,0.16)" />
          <stop offset="1" stopColor="rgba(90,163,16,0.10)" />
        </linearGradient>
        <clipPath id="heartClip">
          <path d={HEART_BODY} />
        </clipPath>
      </defs>

      {/* great vessels at the base (aorta, pulmonary trunk, vena cava) */}
      <g strokeLinecap="round" fill="none">
        <path d="M112 82 C 108 48 98 34 84 33" stroke="#86e01e" strokeWidth={11} opacity={0.9} />
        <path d="M122 74 C 121 42 134 28 152 32" stroke="#00c8ff" strokeWidth={13} />
        <path d="M150 72 C 168 58 182 56 192 66" stroke="#1a3a8f" strokeWidth={10} opacity={0.85} />
        <path d="M138 74 C 142 50 150 42 162 42" stroke="#37c6cf" strokeWidth={8} opacity={0.8} />
      </g>

      {/* body fill + gears */}
      <g clipPath="url(#heartClip)">
        <path d={HEART_BODY} fill="url(#heartFill)" />
        <Gear cx={102} cy={128} r={32} teeth={11} color="rgba(0,200,255,0.9)" className="animate-spin-slow" />
        <Gear cx={156} cy={116} r={23} teeth={9} color="rgba(134,224,30,0.9)" className="animate-spin-slower" />
        <Gear cx={150} cy={168} r={26} teeth={10} color="rgba(120,190,255,0.75)" className="animate-spin-slow" />
        <Gear cx={86} cy={176} r={15} teeth={8} color="rgba(134,224,30,0.75)" className="animate-spin-slower" />
        {/* subtle chamber divider */}
        <path d="M120 96 C 116 140 126 180 128 232" stroke="rgba(255,255,255,0.18)" strokeWidth={2} fill="none" />
      </g>

      {/* organ outline */}
      <path d={HEART_BODY} fill="none" stroke="url(#heartStroke)" strokeWidth={3.5} strokeLinejoin="round" />
    </svg>
  )
}
