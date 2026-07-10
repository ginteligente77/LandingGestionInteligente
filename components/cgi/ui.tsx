import {
  GraduationCap,
  Landmark,
  Lightbulb,
  Droplets,
  HardHat,
  Bot,
  FlaskConical,
  Scale,
  BookOpen,
  Sprout,
  Handshake,
  RefreshCw,
  ShieldCheck,
  Waves,
  Recycle,
  Leaf,
  ShieldAlert,
  Map,
  Compass,
  type LucideIcon,
} from "lucide-react"

export const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  Landmark,
  Lightbulb,
  Droplets,
  HardHat,
  Bot,
  FlaskConical,
  Scale,
  BookOpen,
  Sprout,
  Handshake,
  RefreshCw,
  ShieldCheck,
  Waves,
  Recycle,
  Leaf,
  ShieldAlert,
  Map,
  Compass,
}

/* Icon lookup for the territorial instruments (POMCA, PGIRS…) */
export const TERRITORIAL_ICONS: Record<string, LucideIcon> = {
  POMCA: Waves,
  PGIRS: Recycle,
  PMA: Leaf,
  PGR: ShieldAlert,
  POT: Map,
  PDD: Compass,
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
      <span className="h-px w-6 bg-cyan" />
      {children}
    </span>
  )
}
