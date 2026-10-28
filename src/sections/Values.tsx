import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/config/site'

export function Values() {
  return (
    <section id="valores" className="container-page py-24 md:py-36">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="03"
            eyebrow="Por qué nosotros"
            title="Un socio cercano, con criterio y compromiso"
            description={`Trabajamos codo con codo con los negocios de ${site.city}. Sin intermediarios, sin plantillas genéricas y sin sorpresas.`}
          />
        </div>

        <div className="flex flex-col">
          {site.values.map((value, i) => (
            <Reveal
              key={value.title}
              className="group grid gap-6 border-t border-ivory-100/10 py-10 last:border-b sm:grid-cols-[5rem_1fr] md:py-14"
            >
              <span className="eyebrow pt-3 text-brass-400">0{i + 1}</span>
              <div className="flex flex-col gap-4">
                <h3 className="text-display text-4xl text-ivory-50 transition-transform duration-700 ease-premium group-hover:translate-x-2 md:text-5xl">
                  {value.title}
                </h3>
                <p className="max-w-md leading-relaxed text-stone-400">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
