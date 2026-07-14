export const BRAND = {
  name: "Corporación Gestión Inteligente",
  tagline: "Hacemos que tu institución haga realidad el proyecto que piensas",
  email: "corporaciongestioninteligente@gmail.com",
  phone: "301 457 2353",
  phoneIntl: "573014572353",
  address: "Cra 19 #35–02 · UIS Sede Bucarica · Oficina 304 · Bucaramanga, Colombia",
  ceo: "Javier Orlando Acevedo Beltrán",
}

export const NAV_LINKS = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Otros servicios", href: "#servicios" },
  { label: "ADN", href: "#adn" },
  { label: "Aliados", href: "#aliados" },
]

export const HERO_FEATURES = [
  { icon: "Lightbulb", title: "Innovación", description: "Desarrollamos ideas que generan impacto." },
  { icon: "Settings", title: "Tecnología", description: "Soluciones avanzadas para desafíos reales." },
  { icon: "BarChart3", title: "Eficiencia", description: "Optimizamos procesos para mejores resultados." },
  { icon: "Leaf", title: "Sostenibilidad", description: "Construimos un futuro responsable y sostenible." },
]

export const STATS = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 5, suffix: "+", label: "Sectores atendidos" },
  { value: 9, suffix: "", label: "Departamentos" },
  { value: 5, suffix: "", label: "Aliados estratégicos" },
]

export type TeamMember = {
  name: string
  role: string
  img: string
  phone?: string
  email?: string
}

export const TEAM: TeamMember[] = [
  {
    name: "MBA. Javier Acevedo",
    role: "CEO & Fundador",
    img: "/JavierAcevedo.jpeg",
    phone: "573014572353",
    email: "corporaciongestioninteligente@gmail.com",
  },
  { name: "Prof. Andrea Camila Aro", role: "Profesional", img: "/AndreaCamilaAro.jpeg" },
  { name: "Esp. Jorge González", role: "Especialista", img: "/JorgeGonzalez.jpeg" },
  { name: "MBA. Omar Casadiego", role: "Consultor Estratégico", img: "/OmarCasadiego.jpeg" },
  { name: "Esp. Marcos Monsalve", role: "Especialista", img: "/MarcosMonsalve.jpeg" },
  { name: "PhD. Ismael Ibáñez", role: "Investigador PhD", img: "/IsmaelIbanez.jpeg" },
]

export type TrayectoriaItem = {
  number: string
  icon: string
  client: string
  title: string
  description: string
  image: string
  tags: string[]
  logos: string[]
}

export const TRAYECTORIA: TrayectoriaItem[] = [
  {
    number: "01",
    icon: "GraduationCap",
    client: "Universidad Industrial de Santander — UIS",
    title: "Zonas Francas Populares Especiales",
    description:
      "Consultoría especializada para identificar zonas francas populares especiales en regiones de Colombia, con énfasis en el mapeo actual, el potencial regional y propuestas concretas para promover emprendimientos sociales, competitividad empresarial nacional e internacional y potenciales spin-offs en el marco de la misión de estas zonas francas.",
    image: "/campo-amazonas.jpeg",
    tags: ["Mapeo regional", "Emprendimientos sociales", "Spin-offs"],
    logos: ["uis"],
  },
  {
    number: "02",
    icon: "Landmark",
    client: "Alcaldía de Bucaramanga",
    title: "Estratificación Socioeconómica",
    description:
      "Servicios profesionales para la revisión, administración y alimentación de bases de datos en asuntos del área de estratificación socioeconómica de la Secretaría de Planeación, en el marco del proyecto de inversión “Fortalecimiento del servicio de estratificación socioeconómica en el área rural y urbana del municipio de Bucaramanga”.",
    image: "/campo-sena.jpeg",
    tags: ["Bases de datos", "Secretaría de Planeación", "AVR"],
    logos: ["alcaldia"],
  },
  {
    number: "03",
    icon: "ShieldCheck",
    client: "AtekGroup · Catme · Coomuldesa · Comultrasan",
    title: "Transformación Digital y Ciberseguridad",
    description:
      "Asesoría especializada para la gestión de bases de datos y auditoría en ISO 27001 para sistemas de gestión de seguridad de la información, con apoyo en ciberseguridad y gestión de la información utilizando inteligencia artificial, fortaleciendo los procesos empresariales de nuestros clientes.",
    image: "/oficina-seguros.jpeg",
    tags: ["ISO 27001", "Auditoría TI", "Ciberseguridad"],
    logos: ["catme", "coomuldesa"],
  },
  {
    number: "04",
    icon: "Droplets",
    client: "Ecosistemas ESP y aliados",
    title: "Servicios Públicos Domiciliarios",
    description:
      "Fortalecimiento de procesos tarifarios, gestión de información SUI – SSPD, gestión ambiental, calidad del agua y optimización operativa para entidades públicas y prestadores de acueducto, alcantarillado y aseo.",
    image: "/oficina-asesoria.jpeg",
    tags: ["SUI – SSPD", "Tarifas", "Calidad del agua"],
    logos: ["ecosistemas"],
  },
  {
    number: "05",
    icon: "HardHat",
    client: "Construcciones HOBEFEL S.A.S.",
    title: "Infraestructura y Obra Civil",
    description:
      "Obras civiles, consultoría e interventoría para entidades públicas: infraestructura vial, acueducto, alcantarillado, edificaciones, escenarios deportivos, sistemas eléctricos y obras de mitigación del riesgo, contribuyendo al desarrollo territorial.",
    image: "/campo-putumayo.jpeg",
    tags: ["Interventoría", "Vías y redes", "Mitigación del riesgo"],
    logos: ["hobefel", "surticonstrucol"],
  },
  {
    number: "06",
    icon: "Bot",
    client: "UIS · Alcaldía de Bucaramanga · Sector salud",
    title: "Soluciones de Software con IA",
    description:
      "Diseño de soluciones de software basadas en inteligencia artificial para la optimización de procesos en instituciones educativas, el sector público y el sector salud, aplicadas en la UIS y la Alcaldía de Bucaramanga.",
    image: "/campo-vichada.jpeg",
    tags: ["Inteligencia artificial", "Optimización", "Sector público"],
    logos: ["uis", "alcaldia"],
  },
]

export const SERVICES = [
  {
    icon: "Landmark",
    title: "Gestión de Proyectos y Gobernanza Pública",
    items: [
      "Diagnósticos participativos e investigaciones socioeconómicas",
      "Consultoría SGR (Sistema General de Regalías) y empréstitos",
    ],
  },
  {
    icon: "FlaskConical",
    title: "Ciencia, Tecnología e Innovación (CTeI)",
    items: [
      "Gestión de recursos e implementación de proyectos CTeI",
      "Actividades de ideación y creatividad organizacional",
    ],
  },
  {
    icon: "Scale",
    title: "Consultoría Privada",
    items: [
      "Sistemas de gestión: calidad, ciberseguridad e innovación",
      "Servicios jurídicos para la eficiencia organizacional",
      "Asesoría en emprendimiento e ideas de negocio y factibilidad",
    ],
  },
  {
    icon: "BookOpen",
    title: "Formación a la Vanguardia",
    items: [
      "Diplomados en Gestión de Proyectos e Innovación Empresarial",
      "Administración pública y temas jurídicos",
      "Desarrollo humano para el trabajo",
    ],
  },
]

export const OBJETIVOS = [
  {
    title: "Innovación y Creatividad",
    description: "Implementar soluciones creativas basadas en CTeI con procesos adaptados a cada necesidad.",
  },
  {
    title: "Gestión Estratégica",
    description:
      "Gestionar, asesorar y ejecutar proyectos con metodologías que garanticen el impacto económico y social.",
  },
  {
    title: "Desarrollo Económico",
    description: "Asesorar a instituciones mejorando su rentabilidad y contribuyendo al desarrollo social y ambiental.",
  },
  {
    title: "Formación a la Vanguardia",
    description:
      "Desarrollar procesos formativos y empresariales que fomenten la innovación y el crecimiento empresarial.",
  },
]

export const VALORES = [
  {
    icon: "Sprout",
    title: "Sensibilidad y Desarrollo",
    description:
      "Trabajamos por organizaciones más sostenibles, contribuyendo al equilibrio social, productivo y ambiental.",
  },
  {
    icon: "Handshake",
    title: "Trabajo Colaborativo",
    description:
      "Trabajamos con empatía en busca de redes de contacto y relaciones de calidad nacionales e internacionales.",
  },
  {
    icon: "Lightbulb",
    title: "Innovación y Educación",
    description:
      "Creemos en la educación y la investigación como herramienta de transformación, desarrollando procesos formativos para empresas, sector público y comunidad.",
  },
  {
    icon: "RefreshCw",
    title: "Mentalidad de Cambio y Transformación",
    description:
      "Creemos en adaptarnos al cambio y prepararnos para los nuevos desafíos, desarrollando ciencia e innovación.",
  },
]

export const PARTNERS = [
  { dept: "Meta", name: "Diana Mesa", profile: "Tecnóloga Salud Ocupacional" },
  { dept: "Arauca", name: "Eva Sandoval", profile: "Administradora" },
  { dept: "La Guajira", name: "Deiber Casseres", profile: "Tecnólogo Procesos Logísticos" },
  { dept: "Guainía", name: "María Martínez", profile: "Tecnóloga Producción Agropecuaria Ecológica" },
  { dept: "Casanare", name: "Blanca Hernández", profile: "Trabajadora Humanitaria" },
  { dept: "Vichada", name: "Carlos Gómez", profile: "Técnico Seguridad Informática" },
  { dept: "Huila", name: "Sharon Otálvaro", profile: "Abogada" },
  { dept: "Nariño", name: "Viviana Cuarán", profile: "Médica Veterinaria Zootecnista" },
  { dept: "Putumayo", name: "Juan Luna", profile: "Trabajador Social" },
  { dept: "Amazonas", name: "Álvaro Hernández", profile: "Administrador de Comercio Internacional" },
]

export type Organization = { name: string; logo?: string }

export const ALIADOS: Organization[] = [
  { name: "Ecosistemas Servicios Públicos S.A.", logo: "/ecosistemasesp.png" },
  { name: "Surticonstrucol S.A.S", logo: "/surticonstrucol.png" },
  { name: "Construcciones HOBEFEL S.A.S.", logo: "/hobefel.png" },
  { name: "FONDESCOL – Fondo Mixto Nacional para el Desarrollo Colombiano", logo: "/fondescol.png" },
  { name: "Asesores en Ambiente y Territorio" },
]

export const CLIENTES: Organization[] = [
  { name: "Universidad Industrial de Santander (UIS)", logo: "/universidadindustrialdesantander.svg" },
  { name: "Alcaldía de Bucaramanga", logo: "/alcaldiabucaramanga.png" },
  { name: "Coomuldesa", logo: "/coomuldesa.png" },
  { name: "Centro de Alta Tecnología Médica (CATME)", logo: "/catme.png" },
  { name: "Financiera Comultrasan" },
]

/* Logo lookup by short key, for reuse in the trayectoria carousel */
export const LOGOS = {
  uis: { name: "Universidad Industrial de Santander", src: "/universidadindustrialdesantander.svg" },
  alcaldia: { name: "Alcaldía de Bucaramanga", src: "/alcaldiabucaramanga.png" },
  ecosistemas: { name: "Ecosistemas ESP", src: "/ecosistemasesp.png" },
  hobefel: { name: "Construcciones HOBEFEL", src: "/hobefel.png" },
  surticonstrucol: { name: "Surticonstrucol", src: "/surticonstrucol.png" },
  fondescol: { name: "FONDESCOL", src: "/fondescol.png" },
  coomuldesa: { name: "Coomuldesa", src: "/coomuldesa.png" },
  catme: { name: "CATME", src: "/catme.png" },
} as const

/* Ordenamiento territorial y estudios ambientales — servicio destacado */
export const TERRITORIAL = {
  intro:
    "Desarrollamos estudios ambientales, planes de desarrollo, ordenamiento territorial y estrategias de prospectiva para entidades públicas y privadas, integrando el enfoque territorial y ambiental en cada proyecto.",
  instruments: [
    { code: "POMCA", label: "Ordenación y Manejo de Cuencas Hidrográficas" },
    { code: "PGIRS", label: "Gestión Integral de Residuos Sólidos" },
    { code: "PMA", label: "Planes de Manejo Ambiental" },
    { code: "PGR", label: "Planes de Gestión del Riesgo" },
    { code: "POT", label: "Ordenamiento Territorial" },
    { code: "PDD", label: "Planes de Desarrollo y Prospectiva" },
  ],
  highlights: [
    "Parcelaciones campestres autosostenibles con enfoque territorial y ambiental",
    "Planes estratégicos para organizaciones públicas y privadas",
    "Diagnósticos participativos e investigaciones socioeconómicas",
  ],
}

/* Fotografías reales de trabajo en territorio y oficina */
export const FIELD_GALLERY = [
  { src: "/campo-amazonas.jpeg", caption: "Amazonas · Acompañamiento a emprendimientos artesanales" },
  { src: "/campo-vichada.jpeg", caption: "Vichada · Marañones del Vichada, producto artesanal" },
  { src: "/campo-putumayo.jpeg", caption: "Putumayo · Fortalecimiento y promoción territorial" },
  { src: "/campo-sena.jpeg", caption: "Levantamiento y gestión de información en campo" },
  { src: "/oficina-asesoria.jpeg", caption: "Asesoría y consultoría especializada" },
  { src: "/oficina-seguros.jpeg", caption: "Gestión de datos y seguridad de la información" },
]
