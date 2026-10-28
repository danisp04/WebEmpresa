import { useState, type FormEvent } from 'react'
import Magnet from '@/components/reactbits/Magnet'
import { Icon, type AnyIconName } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/config/site'

const field =
  'peer w-full border-b border-ivory-100/20 bg-transparent pt-6 pb-3 text-base text-ivory-50 outline-none transition-colors placeholder:text-transparent focus:border-brass-400'
const label =
  'pointer-events-none absolute top-6 left-0 text-base text-stone-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brass-400 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs'

export function Contact() {
  const { contact } = site
  const [sent, setSent] = useState(false)

  // TODO: conectar con un servicio de formularios (Formspree, Resend, etc.).
  // Mientras tanto, abre el cliente de correo con el mensaje ya redactado.
  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget as HTMLFormElement)
    const body = [
      `Nombre: ${data.get('name')}`,
      `Empresa: ${data.get('company')}`,
      `Contacto: ${data.get('email')}`,
      `Servicio: ${data.get('service')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Solicitud de reunión')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const info: { icon: AnyIconName; label: string; value: string; href?: string }[] = [
    { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'phone', label: 'Teléfono', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: 'pin', label: 'Ubicación', value: contact.address },
    { icon: 'clock', label: 'Horario', value: contact.schedule },
  ]

  return (
    <section id="contacto" className="container-page py-24 md:py-36">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div className="flex flex-col gap-14">
          <SectionHeading index="04" eyebrow="Contacto" title={contact.title} description={contact.subtitle} />
          <Reveal as="ul" stagger={0.08} className="grid gap-6 sm:grid-cols-2">
            {info.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ivory-100/15 text-brass-300">
                  <Icon name={item.icon} className="size-4" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="eyebrow text-stone-500">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-ivory-100 transition-colors hover:text-brass-300">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-ivory-100">{item.value}</span>
                  )}
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="form"
          onSubmit={onSubmit}
          stagger={0.06}
          className="flex flex-col gap-8 rounded-3xl border border-ivory-100/10 bg-ink-800/50 p-6 sm:p-10 md:p-12"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="relative">
              <input id="name" name="name" required placeholder="Nombre" autoComplete="name" className={field} />
              <label htmlFor="name" className={label}>Nombre</label>
            </div>
            <div className="relative">
              <input id="company" name="company" placeholder="Empresa" autoComplete="organization" className={field} />
              <label htmlFor="company" className={label}>Empresa</label>
            </div>
          </div>
          <div className="relative">
            <input id="email" name="email" required placeholder="Email o teléfono" className={field} />
            <label htmlFor="email" className={label}>Email o teléfono</label>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs text-stone-400">¿Qué te interesa?</span>
            <div className="flex flex-wrap gap-2">
              {site.services.map((s, i) => (
                <label key={s.title} className="cursor-pointer">
                  <input type="radio" name="service" value={s.title} defaultChecked={i === 0} className="peer sr-only" />
                  <span className="inline-flex rounded-full border border-ivory-100/15 px-4 py-2 text-sm text-ivory-100/80 transition-colors peer-checked:border-brass-400 peer-checked:bg-brass-400 peer-checked:text-ink-950 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brass-400 hover:border-ivory-100/40">
                    {s.title}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="relative">
            <textarea id="message" name="message" rows={4} placeholder="Mensaje" className={`${field} resize-none`} />
            <label htmlFor="message" className={label}>Cuéntanos brevemente tu proyecto</label>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-xs leading-relaxed text-stone-500">
              Al enviar aceptas nuestra política de privacidad. Responderemos en menos de 48 h.
            </p>
            <Magnet padding={50} magnetStrength={4} maxOffset={12}>
              <button
                type="submit"
                className="group inline-flex h-13 items-center gap-3 rounded-full bg-brass-400 px-8 text-sm font-medium text-ink-950 transition-colors hover:bg-brass-300"
              >
                {sent ? 'Abriendo tu correo…' : 'Enviar solicitud'}
                <Icon name="arrow" className="size-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
              </button>
            </Magnet>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
