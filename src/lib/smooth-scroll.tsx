import Lenis from 'lenis'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { gsap, prefersReducedMotion, ScrollTrigger } from './gsap'

const LenisContext = createContext<Lenis | null>(null)

/**
 * Scroll suave con Lenis sincronizado con el ticker de GSAP,
 * para que ScrollTrigger y Lenis compartan el mismo frame.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    instance.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    setLenis(instance)

    return () => {
      gsap.ticker.remove(tick)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export const useLenis = () => useContext(LenisContext)

/** Desplaza a un ancla (#id) usando Lenis si está activo. */
export function useScrollTo() {
  const lenis = useLenis()
  return (target: string, offset = 0) => {
    if (lenis) {
      lenis.scrollTo(target, { offset, duration: 1.4 })
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
