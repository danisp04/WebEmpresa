import type { MouseEvent, ReactNode } from 'react'
import Magnet from '@/components/reactbits/Magnet'
import { useScrollTo } from '@/lib/smooth-scroll'
import { Icon } from './Icon'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
}

const styles = {
  primary: 'bg-brass-400 text-ink-950 hover:bg-brass-300',
  ghost: 'border border-ivory-100/20 text-ivory-100 hover:border-ivory-100/50 hover:bg-ivory-100/5',
}

/** Botón con efecto magnético (React Bits) y scroll suave para anclas. */
export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const scrollTo = useScrollTo()

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollTo(href)
    }
  }

  return (
    <Magnet padding={60} magnetStrength={4} maxOffset={14} wrapperClassName={className}>
      <a
        href={href}
        onClick={onClick}
        className={`group inline-flex h-13 items-center gap-3 rounded-full px-7 text-sm font-medium tracking-wide transition-colors duration-300 ${styles[variant]}`}
      >
        {children}
        <span className="relative inline-flex size-4 overflow-hidden">
          <Icon
            name="arrow"
            className="size-4 transition-transform duration-500 ease-premium group-hover:translate-x-full"
          />
          <Icon
            name="arrow"
            className="absolute size-4 -translate-x-full transition-transform duration-500 ease-premium group-hover:translate-x-0"
          />
        </span>
      </a>
    </Magnet>
  )
}
