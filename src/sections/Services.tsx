import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/config/site'

export function Services() {
  return (
    <section id="servicios" className="container-page py-24 md:py-36">
      <div className="flex flex-col gap-16 md:gap-24">
        <SectionHeading
          index="01"
          eyebrow="Servicios"
          title="Todo lo que tu negocio necesita para crecer en digital"
          description="Un único equipo para resolver tu presencia online de principio a fin, con soluciones adaptadas al tamaño y ritmo de tu empresa."
        />

        <Reveal stagger={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {site.services.map((service, i) => (
            <SpotlightCard
              key={service.title}
              spotlightColor="rgba(220, 194, 143, 0.16)"
              spotlightSize={420}
              borderGlow={0.6}
              className="group flex h-full flex-col gap-10 border border-ivory-100/[0.07] !bg-ink-800/60 !p-7 md:!p-9"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-full border border-brass-400/30 text-brass-300 transition-colors duration-500 group-hover:bg-brass-400 group-hover:text-ink-950">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <span className="eyebrow text-stone-500">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-display text-[2rem] text-ivory-50 md:text-4xl">{service.title}</h3>
                <p className="leading-relaxed text-stone-400">{service.description}</p>
              </div>
              <ul className="flex flex-col border-t border-ivory-100/10 pt-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 py-1.5 text-sm text-ivory-100/80">
                    <span className="h-px w-3 bg-brass-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
