import { site } from '@/config/site'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="grid size-9 place-items-center rounded-full border border-brass-400/50 font-serif text-base tracking-wide text-brass-300">
        {site.monogram}
      </span>
      <span className="text-sm font-medium tracking-[0.18em] uppercase">{site.name}</span>
    </span>
  )
}
