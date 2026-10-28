import ScrollReveal from '@/components/reactbits/ScrollReveal'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/config/site'

export function Manifesto() {
  return (
    <section className="container-page py-28 md:py-44">
      <div className="grid gap-10 lg:grid-cols-[1fr_3fr]">
        <Reveal className="flex items-start gap-4 text-brass-400">
          <span className="eyebrow">Nuestra filosofía</span>
        </Reveal>
        <ScrollReveal
          mode="scrub"
          splitBy="words"
          effect="fade"
          baseOpacity={0.12}
          enableBlur
          blurStrength={6}
          containerClassName="!my-0"
          textClassName="text-display !font-normal !text-[clamp(1.9rem,4.2vw,3.75rem)] !leading-[1.12] text-ivory-50"
        >
          {site.manifesto}
        </ScrollReveal>
      </div>
    </section>
  )
}
