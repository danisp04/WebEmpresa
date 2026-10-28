import { useRef } from 'react'
import { site } from '@/config/site'
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '@/lib/gsap'

/** Cinta infinita de sectores; acelera con la velocidad del scroll. */
export function Marquee() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const loop = gsap.to('[data-marquee-track]', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })

      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 400, 4)
          gsap.to(loop, { timeScale: boost * (self.direction === -1 ? -1 : 1), duration: 0.2, overwrite: true })
          gsap.to(loop, { timeScale: self.direction === -1 ? -1 : 1, duration: 1.2, delay: 0.2 })
        },
      })
      return () => st.kill()
    },
    { scope: root },
  )

  const items = [...site.sectors, ...site.sectors]

  return (
    <div ref={root} className="overflow-hidden border-y border-ivory-100/10 bg-ink-950 py-6 md:py-8" aria-label="Sectores">
      <div data-marquee-track className="flex w-max">
        {items.map((sector, i) => (
          <span
            key={i}
            aria-hidden={i >= site.sectors.length}
            className="text-display flex items-center gap-8 pr-8 text-3xl whitespace-nowrap text-ivory-100/80 md:gap-12 md:pr-12 md:text-5xl"
          >
            {sector}
            <span className="size-1.5 rotate-45 bg-brass-400" />
          </span>
        ))}
      </div>
    </div>
  )
}
