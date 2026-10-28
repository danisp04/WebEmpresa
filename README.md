# Web corporativa

Web de presentación para la empresa de servicios digitales (automatizaciones, diseño web, reseñas…).

## Stack

- **React + TypeScript + Vite**
- **Tailwind CSS v4**: estilos y diseño responsive
- **GSAP** (+ ScrollTrigger, SplitText, `@gsap/react`): animaciones
- **Lenis**: scroll suave, sincronizado con el ticker de GSAP
- **React Bits**: componentes animados en `src/components/reactbits/`

## Puesta en marcha

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Cómo completar el contenido

**Todo el texto está en [`src/config/site.ts`](src/config/site.ts)**: nombre, servicios, método, cifras, valores y datos de contacto. Busca `TODO` para ver lo que es provisional.

Además:
- `index.html`: título y meta descripción para SEO.
- `public/favicon.svg`: monograma provisional.
- `src/sections/Contact.tsx`: el formulario abre el correo del usuario (`mailto`). Para recibir los envíos directamente, conectar un servicio como Formspree o Resend (ver `TODO`).
- Colores y tipografías: bloque `@theme` en `src/index.css`.

## Estructura

```
src/
├── config/site.ts           # contenido editable
├── lib/gsap.ts              # registro de plugins GSAP
├── lib/smooth-scroll.tsx    # Lenis + GSAP
├── components/reactbits/    # SplitText, ScrollReveal, CountUp, SpotlightCard, Magnet, ShinyText, Silk
├── components/ui/           # Button, Logo, Icon, Reveal, SectionHeading
└── sections/                # Preloader, Header, Hero, Marquee, Manifesto, Services, Process, Stats, Values, Contact, Footer
```

### Añadir más componentes de React Bits

```bash
npx shadcn@latest add https://reactbits.dev/r/<Componente>-TS-TW
```

Se instalan en `src/components/`. Muévelos a `src/components/reactbits/` para mantener el orden.

## Responsive y accesibilidad

- Diseño mobile-first, probado a 390 px y 1440 px.
- La sección «Método» usa scroll horizontal fijado en escritorio y una línea de tiempo vertical en móvil/tablet.
- Con `prefers-reduced-motion` se desactivan Lenis y las animaciones principales.
