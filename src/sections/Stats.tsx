import CountUp from '@/components/reactbits/CountUp'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/config/site'

export function Stats() {
  return (
    <section className="border-y border-ivory-100/10 bg-ink-950">
      <div className="container-page">
        {/* gap-px + fondo = líneas divisorias que se adaptan a 2 o 4 columnas */}
        <Reveal stagger={0.1} className="grid grid-cols-2 gap-px bg-ivory-100/10 lg:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3 bg-ink-950 px-2 py-12 sm:px-6 md:py-20 lg:px-10">
              <span className="text-display text-[clamp(3.25rem,7vw,6rem)] text-ivory-50">
                <CountUp to={stat.value} duration={2.2} />
                <span className="text-brass-400">{stat.suffix}</span>
              </span>
              <span className="eyebrow max-w-[16ch] leading-relaxed text-stone-400">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
