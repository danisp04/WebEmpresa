import type { IconName } from '@/config/site'

const paths: Record<IconName | 'arrow' | 'arrowDown' | 'mail' | 'phone' | 'pin' | 'clock', string> = {
  automation: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  web: 'M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11ZM3 9h18M7 6.5h.01M10 6.5h.01',
  reviews: 'm12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z',
  social: 'M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1',
  brand: 'M4 20 14.5 9.5M17 3l4 4-9.5 9.5L7 18l1.5-4.5L17 3Z',
  analytics: 'M4 20V10m6 10V4m6 16v-7m6 7H2',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  arrowDown: 'M12 5v14m-6-6 6 6 6-6',
  mail: 'M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm0 .5 9 6 9-6',
  phone: 'M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z',
  pin: 'M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock: 'M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
}

export type AnyIconName = keyof typeof paths

export function Icon({ name, className = 'size-5' }: { name: AnyIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  )
}
