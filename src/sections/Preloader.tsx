import { useRef } from 'react'
import { site } from '@/config/site'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'

/** Cortina de entrada: contador + monograma y apertura hacia arriba. */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const counter = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        onComplete()
        return
      }
      document.documentElement.style.overflow = 'hidden'
      const progress = { value: 0 }

      gsap
        .timeline({
          onComplete: () => {
            document.documentElement.style.overflow = ''
            onComplete()
          },
        })
        .from('[data-pl-mark]', { yPercent: 110, duration: 0.9, ease: 'power4.out' })
        .from('[data-pl-line]', { scaleX: 0, duration: 1.4, ease: 'power3.inOut' }, 0.1)
        .to(
          progress,
          {
            value: 100,
            duration: 1.4,
            ease: 'power3.inOut',
            onUpdate: () => {
              if (counter.current) counter.current.textContent = String(Math.round(progress.value)).padStart(3, '0')
            },
          },
          0.1,
        )
        .to('[data-pl-inner]', { yPercent: -40, autoAlpha: 0, duration: 0.6, ease: 'power3.in' }, '+=0.1')
        .to(root.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '-=0.25')
        .set(root.current, { display: 'none' })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="fixed inset-0 z-[100] grid place-items-center bg-ink-950" aria-hidden="true">
      <div data-pl-inner className="flex w-[min(80vw,22rem)] flex-col items-center gap-8">
        <div className="overflow-hidden">
          <span data-pl-mark className="text-display block text-6xl text-brass-300 md:text-7xl">
            {site.monogram}
          </span>
        </div>
        <div className="flex w-full items-center gap-4">
          <span data-pl-line className="h-px flex-1 origin-left bg-ivory-100/30" />
          <span ref={counter} className="eyebrow w-10 text-right tabular-nums text-stone-400">
            000
          </span>
        </div>
      </div>
    </div>
  )
}
