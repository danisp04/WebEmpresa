import { useEffect, useState } from 'react'
import { site } from '@/config/site'
import { ScrollTrigger } from '@/lib/gsap'
import { SmoothScroll } from '@/lib/smooth-scroll'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { Manifesto } from '@/sections/Manifesto'
import { Marquee } from '@/sections/Marquee'
import { Preloader } from '@/sections/Preloader'
import { Process } from '@/sections/Process'
import { Services } from '@/sections/Services'
import { Stats } from '@/sections/Stats'
import { Values } from '@/sections/Values'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    document.title = site.seo.title
    // Recalcula posiciones cuando cargan fuentes e imágenes
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
  }, [])

  return (
    <SmoothScroll>
      <div className="grain">
        <Preloader onComplete={() => setReady(true)} />
        <Header />
        <main>
          <Hero ready={ready} />
          <Marquee />
          <Manifesto />
          <Services />
          <Process />
          <Stats />
          <Values />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
