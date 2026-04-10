export const NAV_LINKS = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

export const HERO = {
  headline: "Digitaliza la gestión de tu club de fútbol",
  subheadline:
    "Herramientas personalizadas para clubes que quieren competir como profesionales. Sin Excel. Sin WhatsApp. Sin caos.",
  socialProof: "+20 clubes en lista de espera · Implementación en 7 días · Sin permanencia",
  ctaPrimary: "Reservar demo gratuita",
  ctaSecondary: "Ver cómo funciona →",
};

export const PROBLEM = {
  title: "La gestión de tu club merece algo mejor",
  cards: [
    {
      icon: "📊",
      title: "Excel para todo",
      description:
        "Plantillas rotas, horas perdidas actualizando datos a mano y sin visibilidad en tiempo real.",
    },
    {
      icon: "💬",
      title: "WhatsApp como CRM",
      description:
        "Contratos, fichajes y renovaciones gestionados en grupos de chat sin orden ni trazabilidad.",
    },
    {
      icon: "🗓️",
      title: "Decisiones a ciegas",
      description:
        "Sin datos en tiempo real es imposible tomar decisiones estratégicas con confianza.",
    },
  ],
  stat: "El 87% de los clubes semiprofesionales gestionan su plantilla con herramientas no diseñadas para ello.",
};

export const SOLUTION = {
  title: "Un dashboard diseñado para tu club, no para cualquier club",
  features: [
    {
      icon: "🎯",
      title: "Personalización total",
      description:
        "Software a medida de tu club. No una plantilla genérica. Cada módulo se configura según tus procesos, categorías y estructura interna.",
      badge: "100% personalizado",
    },
    {
      icon: "⚡",
      title: "Automatización de procesos",
      description:
        "Alertas automáticas, scraping de datos de BeSoccer, importación de estadísticas y reportes generados solos.",
      badge: "Cero trabajo manual",
    },
    {
      icon: "🔗",
      title: "Todos los módulos en uno",
      description:
        "Plantilla, finanzas, rivales, ojeadores, patrocinadores y redes sociales. Todo conectado, todo visible desde un solo panel.",
      badge: "Todo integrado",
    },
  ],
};

export const BENEFITS = {
  title: "Lo que cambia cuando usas Match Control",
  items: [
    {
      icon: "⏱️",
      title: "Ahorro de tiempo",
      description: "90% menos trabajo manual en tareas administrativas y de gestión de plantilla.",
    },
    {
      icon: "📋",
      title: "Organización total",
      description:
        "Todo centralizado en un único sistema. Sin archivos perdidos, sin información duplicada.",
    },
    {
      icon: "🏆",
      title: "Profesionalización",
      description: "Nivel Primera División en tecnología, con precio adaptado a la RFEF.",
    },
    {
      icon: "📊",
      title: "Decisiones basadas en datos",
      description: "Métricas reales, no intuición. Visualiza el rendimiento y actúa con criterio.",
    },
  ],
};

export const HOW_IT_WORKS = {
  title: "En marcha en 7 días",
  steps: [
    {
      number: "01",
      title: "Análisis del club",
      description:
        "Reunión de 45 minutos para entender tu estructura, necesidades y objetivos.",
    },
    {
      number: "02",
      title: "Desarrollo personalizado",
      description:
        "Configuramos cada módulo con tus datos reales, tu logo y tus flujos de trabajo.",
    },
    {
      number: "03",
      title: "Implementación y formación",
      description:
        "Entrega en 7 días, sesión de formación incluida y soporte continuado.",
    },
  ],
};

export const TESTIMONIALS = {
  title: "Lo que dicen los clubes",
  items: [
    {
      quote:
        "Antes tardaba 3 horas en actualizar el estado de la plantilla. Ahora lo tengo en tiempo real. Match Control ha cambiado la forma en que gestionamos el club.",
      name: "Javier M.",
      role: "Director Deportivo",
      club: "Club 1ª RFEF",
      initials: "JM",
    },
    {
      quote:
        "Por primera vez tenemos visibilidad total sobre las finanzas de la cantera. Es como tener un CFO digital dedicado al fútbol base.",
      name: "Sara L.",
      role: "Secretaria Técnica",
      club: "Club 2ª RFEF",
      initials: "SL",
    },
    {
      quote:
        "El simulador de fichajes nos ahorró meses de trabajo. Podemos analizar opciones en minutos y presentarlas a la junta con datos concretos.",
      name: "Carlos R.",
      role: "Entrenador Principal",
      club: "2ª Federación",
      initials: "CR",
    },
  ],
};

export const PRICING = {
  title: "Planes claros, sin letra pequeña",
  plans: [
    {
      name: "Básico",
      implementation: "2.000€",
      monthly: "149€/mes",
      features: [
        "Inicio",
        "Calendario",
        "Plantilla",
        "Cuerpo Médico",
        "Configuración",
      ],
      highlighted: false,
      badge: "Starter",
      cta: "Empezar ahora",
    },
    {
      name: "Club",
      implementation: "2.700€",
      monthly: "199€/mes",
      features: [
        "Todo el plan Básico",
        "Pack Deportivo",
        "Pack Económico",
        "Formación y soporte",
        "Actualizaciones incluidas",
      ],
      highlighted: true,
      badge: "Más popular",
      cta: "Empezar ahora",
    },
    {
      name: "Club Pro",
      implementation: "3.000€",
      monthly: "249€/mes",
      features: [
        "Todo el plan Club",
        "Pack Marketing",
        "Análisis de rivales avanzado",
        "Ojeadores",
        "Simulador de fichajes",
        "Soporte prioritario 24/7",
      ],
      highlighted: false,
      badge: "Pro",
      cta: "Empezar ahora",
    },
  ],
};

export const PRICING_ADDONS = [
  {
    name: "Pack Deportivo",
    price: "+500€",
    features: [
      "Análisis de Rivales",
      "Ojeadores",
      "Simulador de Fichajes",
    ],
  },
  {
    name: "Pack Económico",
    price: "+450€",
    features: [
      "Finanzas",
      "Ingresos y Gastos",
      "Patrocinadores",
    ],
  },
  {
    name: "Pack Marketing",
    price: "+350€",
    features: [
      "Gestión de Redes Sociales",
      "Planificación de contenido",
      "Análisis de engagement",
    ],
  },
];

export const PRICING_SAVINGS = {
  message: "Contrata Básico + 3 packs por separado: 3.300€. Club Pro incluye todo por 3.000€. ¡Ahorra 300€!",
};

export const FINAL_CTA = {
  title: "¿Listo para dar el salto?",
  subtitle: "45 minutos. Sin compromiso. Sin instalación previa.",
  cta: "Reservar sesión gratuita",
  subtext: "Implementación en 7 días · Sin permanencia · Soporte incluido",
};

export const FOOTER = {
  tagline: "El dashboard que tu club merece.",
  links: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
  email: "contacto@matchcontrol.es",
  year: 2026,
};
