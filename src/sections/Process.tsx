import { useRef } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/config/site'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'

/**
 * Método de trabajo.
 * Escritorio: sección fijada con desplazamiento horizontal.
 * Móvil/tablet: pasos verticales con línea de progreso.
 */
export function Process() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const el = track.current!
        const distance = () => el.scrollWidth - window.innerWidth

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-process-pin]',
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
        gsap.to('[data-process-bar]', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: '[data-process-pin]', start: 'top top', end: () => `+=${distance()}`, scrub: true },
        })
        gsap.utils.toArray<HTMLElement>('[data-step]').forEach((step) => {
          // Las tarjetas ya visibles al fijar la sección aparecen con la sección;
          // el resto, a medida que entran por la derecha.
          const visible = step.getBoundingClientRect().left < window.innerWidth * 0.8
          gsap.from(step.querySelectorAll('[data-step-anim]'), {
            y: 40,
            autoAlpha: 0,
            stagger: 0.08,
            scrollTrigger: visible
              ? { trigger: '[data-process-pin]', start: 'top 40%' }
              : { trigger: step, containerAnimation: tween, start: 'left 80%' },
          })
        })
      })

      mm.add('(max-width: 1023px)', () => {
        gsap.to('[data-process-line]', {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '[data-process-list]', start: 'top 70%', end: 'bottom 70%', scrub: true },
        })
        gsap.utils.toArray<HTMLElement>('[data-step]').forEach((step) => {
          gsap.from(step.querySelectorAll('[data-step-anim]'), {
            y: 30,
            autoAlpha: 0,
            stagger: 0.08,
            scrollTrigger: { trigger: step, start: 'top 85%' },
          })
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="metodo" className="bg-ivory-100 text-ink-900">
      <div data-process-pin className="overflow-hidden lg:flex lg:h-svh lg:flex-col lg:justify-center">
        <div className="container-page pt-24 md:pt-32 lg:pt-0">
          <SectionHeading
            index="02"
            eyebrow="Método"
            title="Un proceso claro, de la primera visita a los resultados"
            tone="light"
          />
        </div>

        <div className="relative lg:mt-16">
          <div
            ref={track}
            data-process-list
            className="container-page relative flex flex-col gap-0 py-16 lg:w-max lg:max-w-none lg:flex-row lg:gap-6 lg:py-0 lg:pr-[10vw]"
          >
            <span
              data-process-line
              className="absolute top-16 bottom-16 left-[calc(clamp(1.25rem,4vw,3rem)+0.35rem)] w-px origin-top scale-y-0 bg-ink-900/70 lg:hidden"
            />
            <span className="absolute top-16 bottom-16 left-[calc(clamp(1.25rem,4vw,3rem)+0.35rem)] w-px bg-ink-900/10 lg:hidden" />

            {site.process.map((step, i) => (
              <article
                key={step.title}
                data-step
                className="relative flex gap-8 pb-14 pl-10 last:pb-0 lg:w-[34rem] lg:flex-col lg:gap-12 lg:rounded-3xl lg:border lg:border-ink-900/10 lg:bg-ivory-50 lg:p-12"
              >
                <span className="absolute top-2 left-0 size-3 rounded-full border border-ink-900 bg-ivory-100 lg:hidden" />
                <div className="flex flex-col gap-6 lg:gap-14">
                  <span data-step-anim className="text-display text-7xl text-brass-500 lg:text-[9rem]">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 data-step-anim className="text-display text-4xl lg:text-5xl">
                      {step.title}
                    </h3>
                    <p data-step-anim className="max-w-md leading-relaxed text-ink-900/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container-page hidden lg:mt-16 lg:block">
          <div className="h-px w-full bg-ink-900/10">
            <div data-process-bar className="h-px w-full origin-left scale-x-0 bg-ink-900" />
          </div>
        </div>
      </div>
      <div className="h-24 md:h-32 lg:hidden" />
    </section>
  )
}
