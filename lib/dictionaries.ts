// Translation dictionaries for the whole site. English is the source; Spanish
// is neutral (tú) for broad Latin American reach. Pages and chrome read from
// here via getDict(locale), so the two languages never drift apart.
import type { Locale } from "./i18n";

export type Dict = typeof en;

const en = {
  faqHeading: "Frequently asked questions",
  nav: {
    home: "Home",
    solutions: "Solutions",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    creatorLogin: "Creator Login",
    bookCall: "Book a Call",
  },
  footer: {
    tagline:
      "We help creators turn their audience into scalable, monetizable communities using systems and AI automation.",
    location:
      "Based in Miami, Florida, with presence in the New York metropolitan area. Working with clients across the United States and Latin America.",
    navigation: "Navigation",
    company: "Company",
    about: "About",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
  },
  home: {
    metaTitle:
      "Community Growth & Monetization Systems for Creators | TheSpotMind",
    metaDescription:
      "TheSpotMind builds community growth, retention, and monetization systems for creators — powered by AI automation. Turn your audience into recurring revenue.",
    badge: "Community Growth • Monetization • AI",
    h1a: "Turn your audience into a ",
    h1accent: "scalable revenue",
    h1b: " community.",
    heroSub:
      "We help creators grow, engage, and monetize their communities with clear systems, better retention, and AI-powered automation.",
    bookCall: "Book a Call",
    exploreSolutions: "Explore Solutions",
    heroStats: [
      { title: "Community Systems", body: "Retention loops and engagement structure." },
      { title: "Monetization Design", body: "Convert audience attention into revenue." },
      { title: "AI Automation", body: "Scale workflows without extra manual work." },
    ],
    whoEyebrow: "Who it's for",
    whoTitle: "Built for creators who want more than just engagement.",
    whoSub:
      "We work with creators, coaches, educators, and digital brands who want to turn audience attention into community, retention, and revenue.",
    whoCards: [
      { title: "Creators", body: "Build a stronger ecosystem around your audience and create better pathways to monetization." },
      { title: "Coaches", body: "Turn attention into trust, community, and recurring offers without adding more manual work." },
      { title: "Digital Brands", body: "Design systems that increase engagement, improve retention, and support long-term growth." },
    ],
    howEyebrow: "How it works",
    howTitle: "A simple process built for scale.",
    howSub:
      "We focus on clarity, implementation, and systems that make growth easier to sustain over time.",
    howSteps: [
      { n: "01", title: "Audit", body: "We assess your audience, offer flow, community structure, and current growth bottlenecks." },
      { n: "02", title: "Build", body: "We create the right systems for community growth, monetization, and automation based on your stage." },
      { n: "03", title: "Optimize", body: "We refine the system over time so engagement, conversion, and efficiency keep improving." },
    ],
    ctaTitle: "Ready to turn your audience into a growth system?",
    ctaSub:
      "Let's look at your current setup and identify the fastest path to stronger engagement, better conversion, and smarter automation.",
    viewSolutions: "View Solutions",
  },
  about: {
    metaTitle: "About — TheSpotMind",
    metaDescription:
      "TheSpotMind helps creators turn their audience into an engaged, monetizable community with clear systems and AI-powered automation.",
    eyebrow: "About us",
    h1a: "We turn audiences into ",
    h1accent: "communities",
    lead:
      "TheSpotMind is a growth studio for creators. We build the systems that turn attention into community, community into retention, and retention into revenue — and we automate the parts that shouldn't depend on you being online.",
    missionEyebrow: "Our mission",
    missionTitle: "Make growth something you can build, not something you chase.",
    missionBody1:
      "Most creators are told to post more, engage more, and hope the algorithm rewards it. That doesn't scale, and it burns people out.",
    missionBody2:
      "We believe an audience becomes durable when there's a system underneath it — clear pathways from follower to member to customer, retention loops that keep people around, and automation that carries the load. That's the work we do.",
    principlesEyebrow: "How we work",
    principlesTitle: "Principles behind everything we build.",
    principles: [
      { title: "Systems over hustle", body: "Growth should come from structure you can rely on, not from doing more every week. We design the machine, so the results aren't hostage to your energy." },
      { title: "Clarity first", body: "Before we automate anything, we make the path obvious — how people find you, join you, and buy from you. Automation only amplifies a system that already makes sense." },
      { title: "Built to compound", body: "We optimize for what keeps improving — retention, trust, and recurring revenue — rather than one-off spikes that fade the moment attention moves on." },
    ],
    whoEyebrow: "Who we are",
    whoTitle: "Part strategist, part builder, part automation team.",
    whoBody1:
      "We sit at the intersection of community strategy, monetization design, and AI automation — the three things a modern creator business needs to be treated as one system rather than three disconnected efforts.",
    whoBody2:
      "We work with creators, coaches, educators, and digital brands who want more than engagement metrics. If you're ready to build something that lasts, that's exactly what we're here for.",
    whereEyebrow: "Where we work",
    whereTitle: "Miami and New York, working across the Americas.",
    whereBody1:
      "TheSpotMind operates from Miami, Florida, with presence in the New York metropolitan area. We work with creators and community operators across the United States and throughout Latin America, in English and Spanish.",
    whereBody2:
      "Engagements run remotely, so location is not a constraint on who we can work with. For clients in the Miami and New York areas, in-person working sessions are available.",
    ctaTitle: "Let's build your growth system.",
    ctaBody: "Tell us about your audience and goals — we'll map the next move.",
    bookCall: "Book a Call",
    faq: [
      { question: "Where is TheSpotMind based?", answer: "TheSpotMind operates from Miami, Florida, with presence in the New York metropolitan area. We work with clients across the United States and Latin America. Engagements run remotely, so location is not a constraint on who we can work with." },
      { question: "Do you work with clients outside the United States?", answer: "Yes. We work throughout Latin America as well as the US. Work is delivered remotely, and we operate in English and Spanish. Invoicing is in US dollars." },
      { question: "Do you work in Spanish?", answer: "Yes. Engagements can run entirely in Spanish or English, including documentation and deliverables." },
    ],
  },
  solutions: {
    metaTitle:
      "Creator Community Growth, Monetization & AI Automation Services",
    metaDescription:
      "Community growth loops, monetization funnels, and AI automation for creators, coaches, and digital brands. See how TheSpotMind turns audiences into revenue.",
    eyebrow: "Solutions",
    h1: "Growth systems for creators",
    lead:
      "We design systems that turn your audience into an engaged, monetizable community powered by strategy and automation.",
    cards: [
      { title: "Community Growth", body: "Build engagement loops and retention systems that turn passive followers into active participants.", items: ["Engagement loops", "Community structure", "Retention systems"] },
      { title: "Monetization Systems", body: "Convert audience attention into predictable revenue with structured offers and funnels.", items: ["Funnels", "Paid communities", "Offer ecosystems"] },
      { title: "AI Automation", body: "Scale your systems with automation so growth doesn't depend on manual work.", items: ["DM automation", "Onboarding flows", "Backend workflows"] },
    ],
    ctaTitle: "Ready to turn your audience into a system?",
    ctaBody: "Let's build a scalable growth engine around your audience.",
    bookCall: "Book a Call",
    faq: [
      { question: "What does TheSpotMind actually do?", answer: "We build three connected systems for creators and digital brands: community growth (engagement loops and retention structure), monetization (offers and funnels that turn attention into recurring revenue), and AI automation (onboarding flows, DM automation, and backend workflows). They're designed to work as one system, not three separate efforts." },
      { question: "How long does it take to see results?", answer: "It depends on your starting point, your offer, and your audience, so we don't promise a specific timeline or outcome. Our systems are built to compound — we optimize for retention, trust, and recurring revenue, which strengthen the longer they run, rather than one-off spikes that fade when attention moves on." },
      { question: "How is this different from a social media manager or a traditional agency?", answer: "A social media manager usually focuses on posting and staying active. We focus on the system underneath it — clear pathways from follower to member to customer, retention loops, and automation that carries the load — so your results aren't hostage to how much you post or how online you are." },
      { question: "Do I need a big audience to work with you?", answer: "No. There's no minimum audience size. What matters is that you're building something you want to turn into a durable, monetizable community — the systems we build work whether you're just getting started or already established." },
    ],
  },
  contact: {
    metaTitle: "Book a Growth Strategy Call | TheSpotMind",
    metaDescription:
      "Book a free growth strategy call with TheSpotMind. Tell us about your audience and goals, and we'll map the fastest path to community, retention, and revenue.",
    eyebrow: "Contact",
    h1: "Let's build your growth system",
    lead:
      "Tell us about your audience, community, and goals. We'll help you map the next move.",
    location:
      "Based in Miami, Florida, with presence in the New York metropolitan area. Working with clients across the United States and Latin America.",
    name: "Your name",
    email: "Your email",
    message: "Tell us about your project...",
    send: "Send Request",
    sending: "Sending...",
    responseTime: "We typically respond within 24 hours.",
    success: "Message sent. We'll get back to you soon.",
    error: "Something went wrong. Please try again.",
    faq: [
      { question: "Is the strategy call free?", answer: "Yes. The first growth strategy call is free. You tell us about your audience, community, and goals, and we help you map the next move — no obligation." },
      { question: "What happens after I get in touch?", answer: "Send the form with a bit about your audience and goals, and we'll get back to you within 24 hours. The first conversation is about understanding where you are and mapping the fastest next move." },
    ],
  },
  blog: {
    metaTitle: "Blog — TheSpotMind",
    metaDescription:
      "Ideas on community, retention, monetization, and automation for creators building something that lasts.",
    eyebrow: "Blog",
    h1a: "Notes on building ",
    h1accent: "durable",
    h1b: " communities.",
    lead:
      "Practical thinking on community, retention, monetization, and the automation that ties them together.",
    empty: "No posts yet. Check back soon.",
    readMore: "Read more →",
    backToBlog: "← Back to blog",
    postCtaTitle: "Ready to build your system?",
    postCtaBody: "Let's turn your audience into a community that compounds.",
    bookCall: "Book a Call",
  },
};

const es = {
  faqHeading: "Preguntas frecuentes",
  nav: {
    home: "Inicio",
    solutions: "Soluciones",
    about: "Nosotros",
    blog: "Blog",
    contact: "Contacto",
    creatorLogin: "Ingreso creadores",
    bookCall: "Agenda una llamada",
  },
  footer: {
    tagline:
      "Ayudamos a creadores a convertir su audiencia en comunidades escalables y monetizables con sistemas y automatización de IA.",
    location:
      "Con base en Miami, Florida, y presencia en el área metropolitana de Nueva York. Trabajamos con clientes en Estados Unidos y toda Latinoamérica.",
    navigation: "Navegación",
    company: "Compañía",
    about: "Nosotros",
    privacy: "Privacidad",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
  },
  home: {
    metaTitle:
      "Sistemas de crecimiento y monetización de comunidades para creadores | TheSpotMind",
    metaDescription:
      "TheSpotMind construye sistemas de crecimiento, retención y monetización de comunidades para creadores, potenciados con automatización de IA. Convierte tu audiencia en ingresos recurrentes.",
    badge: "Crecimiento de comunidad • Monetización • IA",
    h1a: "Convierte tu audiencia en una comunidad de ",
    h1accent: "ingresos escalables",
    h1b: ".",
    heroSub:
      "Ayudamos a creadores a crecer, involucrar y monetizar sus comunidades con sistemas claros, mejor retención y automatización potenciada con IA.",
    bookCall: "Agenda una llamada",
    exploreSolutions: "Ver soluciones",
    heroStats: [
      { title: "Sistemas de comunidad", body: "Bucles de retención y estructura de interacción." },
      { title: "Diseño de monetización", body: "Convierte la atención de tu audiencia en ingresos." },
      { title: "Automatización con IA", body: "Escala flujos sin trabajo manual extra." },
    ],
    whoEyebrow: "Para quién es",
    whoTitle: "Para creadores que quieren más que interacción.",
    whoSub:
      "Trabajamos con creadores, coaches, educadores y marcas digitales que quieren convertir la atención de su audiencia en comunidad, retención e ingresos.",
    whoCards: [
      { title: "Creadores", body: "Construye un ecosistema más fuerte alrededor de tu audiencia y mejores caminos hacia la monetización." },
      { title: "Coaches", body: "Convierte la atención en confianza, comunidad y ofertas recurrentes sin sumar trabajo manual." },
      { title: "Marcas digitales", body: "Diseña sistemas que aumentan la interacción, mejoran la retención y sostienen el crecimiento a largo plazo." },
    ],
    howEyebrow: "Cómo funciona",
    howTitle: "Un proceso simple pensado para escalar.",
    howSub:
      "Nos enfocamos en la claridad, la implementación y los sistemas que hacen que el crecimiento sea más fácil de sostener con el tiempo.",
    howSteps: [
      { n: "01", title: "Diagnóstico", body: "Evaluamos tu audiencia, tu flujo de ofertas, la estructura de tu comunidad y los cuellos de botella actuales." },
      { n: "02", title: "Construcción", body: "Creamos los sistemas adecuados de crecimiento, monetización y automatización según tu etapa." },
      { n: "03", title: "Optimización", body: "Refinamos el sistema con el tiempo para que la interacción, la conversión y la eficiencia sigan mejorando." },
    ],
    ctaTitle: "¿Listo para convertir tu audiencia en un sistema de crecimiento?",
    ctaSub:
      "Miramos tu setup actual e identificamos el camino más rápido hacia más interacción, mejor conversión y automatización más inteligente.",
    viewSolutions: "Ver soluciones",
  },
  about: {
    metaTitle: "Nosotros — TheSpotMind",
    metaDescription:
      "TheSpotMind ayuda a creadores a convertir su audiencia en una comunidad involucrada y monetizable con sistemas claros y automatización potenciada con IA.",
    eyebrow: "Nosotros",
    h1a: "Convertimos audiencias en ",
    h1accent: "comunidades",
    lead:
      "TheSpotMind es un estudio de crecimiento para creadores. Construimos los sistemas que convierten la atención en comunidad, la comunidad en retención y la retención en ingresos — y automatizamos las partes que no deberían depender de que estés conectado.",
    missionEyebrow: "Nuestra misión",
    missionTitle: "Que el crecimiento sea algo que construyes, no algo que persigues.",
    missionBody1:
      "A la mayoría de los creadores les dicen que publiquen más, interactúen más y esperen que el algoritmo los premie. Eso no escala y agota a la gente.",
    missionBody2:
      "Creemos que una audiencia se vuelve durable cuando hay un sistema debajo — caminos claros de seguidor a miembro a cliente, bucles de retención que mantienen a la gente cerca y automatización que carga con el peso. Ese es el trabajo que hacemos.",
    principlesEyebrow: "Cómo trabajamos",
    principlesTitle: "Los principios detrás de todo lo que construimos.",
    principles: [
      { title: "Sistemas, no desgaste", body: "El crecimiento debe venir de una estructura confiable, no de hacer más cada semana. Diseñamos la máquina, para que los resultados no dependan de tu energía." },
      { title: "Claridad primero", body: "Antes de automatizar nada, hacemos obvio el camino — cómo te encuentran, cómo se unen y cómo te compran. La automatización solo amplifica un sistema que ya tiene sentido." },
      { title: "Hecho para componer", body: "Optimizamos lo que sigue mejorando — retención, confianza e ingresos recurrentes — en vez de picos puntuales que se desvanecen cuando la atención se mueve." },
    ],
    whoEyebrow: "Quiénes somos",
    whoTitle: "Parte estrategas, parte constructores, parte equipo de automatización.",
    whoBody1:
      "Estamos en la intersección de la estrategia de comunidad, el diseño de monetización y la automatización con IA — las tres cosas que un negocio de creador moderno necesita tratar como un solo sistema y no como tres esfuerzos desconectados.",
    whoBody2:
      "Trabajamos con creadores, coaches, educadores y marcas digitales que quieren más que métricas de interacción. Si estás listo para construir algo que dure, para eso estamos.",
    whereEyebrow: "Dónde trabajamos",
    whereTitle: "Miami y Nueva York, trabajando en toda América.",
    whereBody1:
      "TheSpotMind opera desde Miami, Florida, con presencia en el área metropolitana de Nueva York. Trabajamos con creadores y operadores de comunidad en Estados Unidos y toda Latinoamérica, en español e inglés.",
    whereBody2:
      "Los trabajos se realizan en remoto, así que la ubicación no limita con quién podemos trabajar. Para clientes en las áreas de Miami y Nueva York, hay sesiones de trabajo presenciales disponibles.",
    ctaTitle: "Construyamos tu sistema de crecimiento.",
    ctaBody: "Cuéntanos sobre tu audiencia y tus objetivos — trazamos el próximo paso.",
    bookCall: "Agenda una llamada",
    faq: [
      { question: "¿Dónde está basado TheSpotMind?", answer: "TheSpotMind opera desde Miami, Florida, con presencia en el área metropolitana de Nueva York. Trabajamos con clientes en Estados Unidos y toda Latinoamérica. Los trabajos se realizan en remoto, así que la ubicación no limita con quién podemos trabajar." },
      { question: "¿Trabajan con clientes fuera de Estados Unidos?", answer: "Sí. Trabajamos en toda Latinoamérica además de EE. UU. El trabajo se entrega en remoto y operamos en español e inglés. La facturación es en dólares estadounidenses." },
      { question: "¿Trabajan en español?", answer: "Sí. Los proyectos pueden realizarse íntegramente en español o en inglés, incluyendo la documentación y los entregables." },
    ],
  },
  solutions: {
    metaTitle:
      "Crecimiento de comunidad, monetización y automatización con IA para creadores",
    metaDescription:
      "Bucles de crecimiento de comunidad, embudos de monetización y automatización con IA para creadores, coaches y marcas digitales. Así TheSpotMind convierte audiencias en ingresos.",
    eyebrow: "Soluciones",
    h1: "Sistemas de crecimiento para creadores",
    lead:
      "Diseñamos sistemas que convierten tu audiencia en una comunidad involucrada y monetizable, potenciada por estrategia y automatización.",
    cards: [
      { title: "Crecimiento de comunidad", body: "Construye bucles de interacción y sistemas de retención que convierten seguidores pasivos en participantes activos.", items: ["Bucles de interacción", "Estructura de comunidad", "Sistemas de retención"] },
      { title: "Sistemas de monetización", body: "Convierte la atención de tu audiencia en ingresos predecibles con ofertas y embudos estructurados.", items: ["Embudos", "Comunidades de pago", "Ecosistemas de oferta"] },
      { title: "Automatización con IA", body: "Escala tus sistemas con automatización para que el crecimiento no dependa del trabajo manual.", items: ["Automatización de mensajes", "Flujos de onboarding", "Flujos internos"] },
    ],
    ctaTitle: "¿Listo para convertir tu audiencia en un sistema?",
    ctaBody: "Construyamos un motor de crecimiento escalable alrededor de tu audiencia.",
    bookCall: "Agenda una llamada",
    faq: [
      { question: "¿Qué hace exactamente TheSpotMind?", answer: "Construimos tres sistemas conectados para creadores y marcas digitales: crecimiento de comunidad (bucles de interacción y estructura de retención), monetización (ofertas y embudos que convierten la atención en ingresos recurrentes) y automatización con IA (flujos de onboarding, automatización de mensajes y flujos internos). Están diseñados para funcionar como un solo sistema, no como tres esfuerzos separados." },
      { question: "¿Cuánto tardan en verse resultados?", answer: "Depende de tu punto de partida, tu oferta y tu audiencia, así que no prometemos un plazo ni un resultado específico. Nuestros sistemas están hechos para componer — optimizamos retención, confianza e ingresos recurrentes, que se fortalecen mientras más tiempo funcionan, en vez de picos puntuales que se desvanecen cuando la atención se mueve." },
      { question: "¿En qué se diferencian de un community manager o una agencia tradicional?", answer: "Un community manager suele enfocarse en publicar y mantenerse activo. Nosotros nos enfocamos en el sistema de fondo — caminos claros de seguidor a miembro a cliente, bucles de retención y automatización que carga con el peso — para que tus resultados no dependan de cuánto publicas ni de cuánto tiempo estás conectado." },
      { question: "¿Necesito una audiencia grande para trabajar con ustedes?", answer: "No. No hay un tamaño mínimo de audiencia. Lo que importa es que estés construyendo algo que quieras convertir en una comunidad durable y monetizable — los sistemas que construimos funcionan tanto si recién empiezas como si ya estás establecido." },
    ],
  },
  contact: {
    metaTitle: "Agenda una llamada de estrategia | TheSpotMind",
    metaDescription:
      "Agenda una llamada de estrategia de crecimiento gratis con TheSpotMind. Cuéntanos sobre tu audiencia y tus objetivos, y trazamos el camino más rápido hacia comunidad, retención e ingresos.",
    eyebrow: "Contacto",
    h1: "Construyamos tu sistema de crecimiento",
    lead:
      "Cuéntanos sobre tu audiencia, tu comunidad y tus objetivos. Te ayudamos a trazar el próximo paso.",
    location:
      "Con base en Miami, Florida, y presencia en el área metropolitana de Nueva York. Trabajamos con clientes en Estados Unidos y toda Latinoamérica.",
    name: "Tu nombre",
    email: "Tu email",
    message: "Cuéntanos sobre tu proyecto...",
    send: "Enviar solicitud",
    sending: "Enviando...",
    responseTime: "Solemos responder dentro de las 24 horas.",
    success: "Mensaje enviado. Te respondemos pronto.",
    error: "Algo salió mal. Intenta de nuevo.",
    faq: [
      { question: "¿La llamada de estrategia es gratis?", answer: "Sí. La primera llamada de estrategia de crecimiento es gratis. Nos cuentas sobre tu audiencia, tu comunidad y tus objetivos, y te ayudamos a trazar el próximo paso — sin compromiso." },
      { question: "¿Qué pasa después de escribirles?", answer: "Envía el formulario con un poco sobre tu audiencia y tus objetivos, y te respondemos dentro de las 24 horas. La primera conversación es para entender dónde estás y trazar el próximo paso más rápido." },
    ],
  },
  blog: {
    metaTitle: "Blog — TheSpotMind",
    metaDescription:
      "Ideas sobre comunidad, retención, monetización y automatización para creadores que construyen algo que dura.",
    eyebrow: "Blog",
    h1a: "Notas sobre construir comunidades ",
    h1accent: "durables",
    h1b: ".",
    lead:
      "Pensamiento práctico sobre comunidad, retención, monetización y la automatización que las une.",
    empty: "Todavía no hay posts. Vuelve pronto.",
    readMore: "Leer más →",
    backToBlog: "← Volver al blog",
    postCtaTitle: "¿Listo para construir tu sistema?",
    postCtaBody: "Convirtamos tu audiencia en una comunidad que crece sola.",
    bookCall: "Agenda una llamada",
  },
};

const dictionaries: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
