import { useRef } from 'react'
import { Logo } from '@/components/ui/Logo'
import { site } from '@/config/site'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { useScrollTo } from '@/lib/smooth-scroll'

const YEAR = new Date().getFullYear()

export function Footer() {
  const root = useRef<HTMLElement>(null)
  const scrollTo = useScrollTo()

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-footer-word]', {
        yPercent: 100,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
      })
    },
    { scope: root },
  )

  return (
    <footer ref={root} className="border-t border-ivory-100/10 bg-ink-950 pt-20 pb-8 md:pt-28">
      <div className="container-page flex flex-col gap-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-stone-400">{site.tagline}.</p>
          </div>
          <nav className="flex flex-col gap-3 text-sm" aria-label="Pie de página">
            <span className="eyebrow mb-2 text-stone-500">Navegación</span>
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.href)
                }}
                className="w-fit text-ivory-100/80 transition-colors hover:text-brass-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 text-sm">
            <span className="eyebrow mb-2 text-stone-500">Síguenos</span>
            {site.social.map((item) => (
              <a key={item.label} href={item.href} className="w-fit text-ivory-100/80 transition-colors hover:text-brass-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="overflow-hidden" aria-hidden="true">
          <span
            data-footer-word
            className="text-display block text-center text-[clamp(3rem,15vw,15rem)] leading-[0.85] whitespace-nowrap text-ivory-100/[0.08]"
          >
            {site.name}
          </span>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory-100/10 pt-8 text-xs text-stone-500 md:flex-row md:items-center md:justify-between">
          <span>
            © {YEAR} {site.name}. Todos los derechos reservados.
          </span>
          <div className="flex flex-wrap gap-6">
            {site.legal.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-ivory-100">
                {item.label}
              </a>
            ))}
          </div>
          <button type="button" onClick={() => scrollTo('#inicio')} className="w-fit transition-colors hover:text-ivory-100">
            Volver arriba ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
