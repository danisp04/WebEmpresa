import { useRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'

interface RevealProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Anima los hijos directos de forma escalonada en lugar del bloque entero */
  stagger?: number
  y?: number
  delay?: number
}

/** Aparición al hacer scroll (GSAP + ScrollTrigger). */
export function Reveal({ children, as: Tag = 'div', className, stagger, y = 40, delay = 0, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return
      const targets = stagger ? ref.current.children : ref.current
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 1.2,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
