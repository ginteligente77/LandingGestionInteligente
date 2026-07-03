"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Animation = "fadeup" | "left" | "right" | "stagger"

const CLASS_MAP: Record<Animation, string> = {
  fadeup: "anim-fadeup",
  left: "anim-left",
  right: "anim-right",
  stagger: "anim-stagger",
}

/**
 * Scroll reveal wrapper built on the Intersection Observer API.
 * Adds a `visible` class when the element enters the viewport.
 */
export function Reveal({
  children,
  as: Tag = "div",
  animation = "fadeup",
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode
  as?: ElementType
  animation?: Animation
  className?: string
  delay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = window.setTimeout(() => setVisible(true), delay)
          if (once) observer.unobserve(node)
          return () => window.clearTimeout(timer)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [delay, once])

  return (
    <Tag ref={ref} className={cn(CLASS_MAP[animation], visible && "visible", className)}>
      {children}
    </Tag>
  )
}
