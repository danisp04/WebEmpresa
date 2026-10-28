import SplitText from '@/components/reactbits/SplitText'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** 'light' para secciones de fondo claro */
  tone?: 'dark' | 'light'
}

export function SectionHeading({ index, eyebrow, title, description, align = 'left', tone = 'dark' }: SectionHeadingProps) {
  const centered = align === 'center'
  const titleColor = tone === 'light' ? 'text-ink-900' : 'text-ivory-50'
  return (
    <div className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : ''}`}>
      <Reveal className="flex items-center gap-4 text-brass-400">
        <span className="eyebrow">{index}</span>
        <span className="h-px w-10 bg-brass-400/50" />
        <span className="eyebrow text-stone-400">{eyebrow}</span>
      </Reveal>
      <SplitText
        tag="h2"
        text={title}
        splitType="words"
        delay={60}
        duration={1.1}
        mask
        textAlign={centered ? 'center' : 'left'}
        rootMargin="-60px"
        className={`text-display max-w-4xl text-[clamp(2.5rem,6vw,5rem)] ${titleColor}`}
      />
      {description && (
        <Reveal as="p" delay={0.2} className="max-w-xl text-base leading-relaxed text-stone-400 md:text-lg">
          {description}
        </Reveal>
      )}
    </div>
  )
}
