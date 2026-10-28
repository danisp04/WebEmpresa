import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Logo } from '@/components/ui/Logo'
import { site } from '@/config/site'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { useLenis, useScrollTo } from '@/lib/smooth-scroll'

export function Header() {
  const bar = useRef<HTMLElement>(null)
  const menu = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lenis = useLenis()
  const scrollTo = useScrollTo()

  // Oculta la barra al bajar y la muestra al subir
  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        setScrolled(self.scroll() > 40)
        const hide = self.direction === 1 && self.scroll() > 400
        gsap.to(bar.current, { yPercent: hide ? -100 : 0, duration: 0.5, ease: 'power3.out', overwrite: true })
      },
    })
    return () => st.kill()
  })

  // Menú móvil a pantalla completa
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(menu.current, { display: 'flex' })
        .fromTo(menu.current, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power4.inOut' })
        .from('[data-menu-item]', { yPercent: 110, duration: 0.7, stagger: 0.06, ease: 'power3.out' }, '-=0.35')
        .from('[data-menu-foot]', { autoAlpha: 0, y: 12, duration: 0.5 }, '-=0.4')
    },
    { scope: menu },
  )

  useEffect(() => {
    if (open) {
      tl.current?.timeScale(1).play()
      lenis?.stop()
    } else {
      tl.current?.timeScale(1.6).reverse()
      lenis?.start()
    }
  }, [open, lenis])

  useEffect(() => {
    const close = () => window.innerWidth >= 1024 && setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('resize', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const go = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    lenis?.start() // el menú detiene Lenis mientras está abierto
    scrollTo(href)
  }

  return (
    <>
      <header
        ref={bar}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open
            ? 'border-b border-ivory-100/10 bg-ink-900/70 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <a href="#inicio" onClick={(e) => go(e, '#inicio')} aria-label={`${site.name}, ir al inicio`}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="group relative text-sm text-ivory-100/80 transition-colors hover:text-ivory-50"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-brass-400 transition-transform duration-500 ease-premium group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            onClick={(e) => go(e, '#contacto')}
            className="hidden h-11 items-center rounded-full border border-brass-400/60 px-6 text-sm text-brass-300 transition-colors duration-300 hover:bg-brass-400 hover:text-ink-950 lg:inline-flex"
          >
            Agendar reunión
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="relative z-10 grid size-11 place-items-center rounded-full border border-ivory-100/20 lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-full bg-ivory-50 transition-all duration-500 ease-premium ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-px w-full bg-ivory-50 transition-all duration-500 ease-premium ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        ref={menu}
        id="mobile-menu"
        className="fixed inset-0 z-40 hidden flex-col justify-between bg-ink-950 px-6 pt-28 pb-10 lg:hidden"
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Móvil">
          {site.nav.map((item, i) => (
            <div key={item.href} className="overflow-hidden border-b border-ivory-100/10 py-3">
              <a
                data-menu-item
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={(e) => go(e, item.href)}
                className="text-display flex items-baseline gap-4 text-5xl text-ivory-50 sm:text-6xl"
              >
                <span className="eyebrow text-brass-400">0{i + 1}</span>
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        <div data-menu-foot className="flex flex-col gap-2 text-sm text-stone-400">
          <a href={`mailto:${site.contact.email}`} tabIndex={open ? 0 : -1} className="text-ivory-100">
            {site.contact.email}
          </a>
          <span>{site.contact.phone}</span>
        </div>
      </div>
    </>
  )
}
