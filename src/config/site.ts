/**
 * CONTENIDO DE LA WEB
 * -------------------
 * Todo el texto de la web vive aquí. Cuando tengáis decidido el nombre,
 * los servicios y los datos de contacto, basta con editar este archivo.
 * Los valores marcados con "TODO" son provisionales.
 */

export type IconName = 'automation' | 'web' | 'reviews' | 'social' | 'brand' | 'analytics'

export interface Service {
  icon: IconName
  title: string
  description: string
  points: string[]
}

export const site = {
  // TODO: nombre definitivo de la empresa
  name: 'Nombre Empresa',
  // Iniciales para el logotipo (monograma)
  monogram: 'NE',
  // TODO: ciudad donde operáis
  city: 'Tu Ciudad',
  tagline: 'Soluciones digitales para empresas locales',

  seo: {
    title: 'Nombre Empresa · Soluciones digitales para empresas locales',
    description:
      'Automatizaciones, diseño web y gestión de reseñas para negocios de tu ciudad. Tecnología seria, resultados medibles.',
  },

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Método', href: '#metodo' },
    { label: 'Por qué nosotros', href: '#valores' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    eyebrow: 'Consultoría digital local',
    title: 'Impulsamos la transformación digital de tu negocio',
    subtitle:
      'Ayudamos a las empresas de nuestra ciudad a ganar visibilidad, ahorrar tiempo y captar más clientes con herramientas digitales a medida.',
    primaryCta: { label: 'Solicitar reunión', href: '#contacto' },
    secondaryCta: { label: 'Ver servicios', href: '#servicios' },
  },

  // Sectores que aparecen en la cinta animada
  sectors: [
    'Restauración',
    'Comercio local',
    'Clínicas',
    'Despachos profesionales',
    'Hostelería',
    'Talleres',
    'Inmobiliarias',
    'Centros deportivos',
  ],

  manifesto:
    'Creemos que cualquier negocio, sin importar su tamaño, merece una presencia digital a la altura de su trabajo. Por eso combinamos cercanía y tecnología para que dediques tu tiempo a lo que de verdad importa: tus clientes.',

  // TODO: servicios definitivos
  services: [
    {
      icon: 'automation',
      title: 'Automatizaciones',
      description: 'Eliminamos tareas repetitivas para que tu equipo se centre en lo importante.',
      points: ['Reservas y citas automáticas', 'Respuestas y recordatorios', 'Integración de herramientas'],
    },
    {
      icon: 'web',
      title: 'Diseño web',
      description: 'Webs rápidas, elegantes y preparadas para convertir visitas en clientes.',
      points: ['Diseño a medida', 'Optimizada para móvil', 'Posicionamiento SEO local'],
    },
    {
      icon: 'reviews',
      title: 'Gestión de reseñas',
      description: 'Mejoramos tu reputación online y te ayudamos a destacar en Google.',
      points: ['Captación de reseñas', 'Respuesta profesional', 'Perfil de Google optimizado'],
    },
    {
      icon: 'social',
      title: 'Redes sociales',
      description: 'Una imagen coherente y profesional en los canales donde están tus clientes.',
      points: ['Estrategia de contenidos', 'Calendario de publicaciones', 'Informes mensuales'],
    },
    {
      icon: 'brand',
      title: 'Identidad de marca',
      description: 'Logotipo, colores y tono de comunicación que transmiten confianza.',
      points: ['Logotipo y manual', 'Papelería y cartelería', 'Fotografía de producto'],
    },
    {
      icon: 'analytics',
      title: 'Analítica y resultados',
      description: 'Medimos lo que funciona para tomar decisiones con datos reales.',
      points: ['Panel de métricas', 'Seguimiento de objetivos', 'Revisiones periódicas'],
    },
  ] satisfies Service[],

  process: [
    {
      title: 'Visita y diagnóstico',
      description:
        'Nos reunimos contigo en tu negocio, escuchamos tus necesidades y analizamos tu situación digital actual.',
    },
    {
      title: 'Propuesta a medida',
      description:
        'Te presentamos un plan claro, con objetivos, plazos y presupuesto cerrado. Sin letra pequeña.',
    },
    {
      title: 'Implementación',
      description:
        'Ponemos en marcha cada solución con un interlocutor único que te mantiene informado en todo momento.',
    },
    {
      title: 'Seguimiento',
      description:
        'Medimos resultados, ajustamos lo necesario y seguimos a tu lado para que el crecimiento sea sostenido.',
    },
  ],

  // TODO: cifras reales cuando las tengáis
  stats: [
    { value: 100, suffix: '%', label: 'Atención personalizada' },
    { value: 48, suffix: 'h', label: 'Tiempo de respuesta máximo' },
    { value: 6, suffix: '', label: 'Áreas de servicio' },
    { value: 1, suffix: '', label: 'Interlocutor único' },
  ],

  values: [
    {
      title: 'Cercanía',
      description: 'Somos de aquí. Te visitamos en persona y hablamos tu mismo idioma, sin tecnicismos.',
    },
    {
      title: 'Transparencia',
      description: 'Presupuestos cerrados, plazos claros y comunicación constante durante todo el proyecto.',
    },
    {
      title: 'Resultados',
      description: 'Cada acción tiene un objetivo medible. Si no aporta valor a tu negocio, no lo hacemos.',
    },
  ],

  contact: {
    title: 'Hablemos de tu negocio',
    subtitle:
      'Cuéntanos qué necesitas y concertamos una reunión sin compromiso, en tu local o donde prefieras.',
    // TODO: datos de contacto reales
    email: 'hola@tuempresa.com',
    phone: '+34 600 000 000',
    address: 'Tu Ciudad, España',
    schedule: 'Lunes a viernes · 9:00 – 19:00',
  },

  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],

  legal: [
    { label: 'Aviso legal', href: '#' },
    { label: 'Privacidad', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}
