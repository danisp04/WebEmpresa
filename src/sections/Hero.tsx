import { lazy, Suspense, useRef } from 'react'
import ShinyText from '@/components/reactbits/ShinyText'
import SplitText from '@/components/reactbits/SplitText'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { site } from '@/config/site'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'

// El fondo WebGL se carga aparte para no retrasar el primer render
const Silk = lazy(() => import('@/components/reactbits/Silk'))

export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { hero } = site

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return

      gsap
        .timeline({ delay: 0.5 })
        .from('[data-hero-fade]', { y: 24, autoAlpha: 0, duration: 1.1, stagger: 0.12 })
        .from('[data-hero-rule]', { scaleX: 0, duration: 1.4, ease: 'power3.inOut' }, 0)

      // Parallax de salida al hacer scroll
      gsap.to('[data-hero-content]', {
        yPercent: -18,
        autoAlpha: 0.15,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero-bg]', {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope: root, dependencies: [ready] },
  )

  return (
    <section ref={root} id="inicio" className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <div data-hero-bg className="absolute inset-0 -z-10">
        <Suspense fallback={null}>
          <Silk
            color="#262d3b"
            sheenColor="#dcc28f"
            sheen={0.35}
            glow={0.15}
            speed={3}
            scale={1.1}
            noiseIntensity={1.2}
            rotation={0.3}
            clickRipple={false}
            mouseInteraction={isDesktop}
            dpr={isDesktop ? 1.5 : 1}
            paused={prefersReducedMotion()}
          />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_30%,var(--color-ink-900)_95%)]" />
      </div>

      <div
        data-hero-content
        className="container-page flex flex-1 flex-col justify-end gap-10 pt-32 pb-14 md:gap-14 md:pb-20"
      >
        <div data-hero-fade className="inline-flex w-fit items-center gap-3 rounded-full border border-ivory-100/15 bg-ink-900/40 px-4 py-2 backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brass-400" />
          <ShinyText
            text={`${hero.eyebrow} · ${site.city}`}
            color="#a9a6a0"
            shineColor="#f3efe6"
            speed={3.5}
            className="eyebrow"
          />
        </div>

        <div className="min-h-[2.9em] text-[clamp(2.9rem,8.4vw,8rem)]">
          {ready && (
            <SplitText
              tag="h1"
              text={hero.title}
              splitType="words"
              delay={70}
              duration={1.3}
              mask
              trigger="load"
              textAlign="left"
              className="text-display max-w-[14ch] text-ivory-50"
            />
          )}
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p data-hero-fade className="max-w-md text-base leading-relaxed text-ivory-100/70 md:text-lg">
            {hero.subtitle}
          </p>
          <div data-hero-fade className="flex flex-wrap items-center gap-3">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span data-hero-rule className="h-px flex-1 origin-left bg-ivory-100/15" />
          <span data-hero-fade className="eyebrow flex items-center gap-2 text-stone-400">
            <Icon name="arrowDown" className="size-3.5 animate-bounce" />
            Desliza
          </span>
        </div>
      </div>
    </section>
  )
}
