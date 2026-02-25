// src/app/data/portfolio.data.ts
export const personalInfo = {
  name: 'MIGUEL ROMÁN VICTORIO',
  title: 'Ingeniero de Sistemas y Computación | Magíster | Especialista en Desarrollo de Software',
  email: 'miguel.rv375@gmail.com',
  phone: '+51 960184087',
  location: 'Lima, Perú',
  summary: 'Especialista en Java y Angular, enfocado en crear software institucional seguro, escalable y de alto rendimiento.',
  cvUrl: 'cv.pdf',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/miguel-rom%C3%A1n-victorio-87721313a/' },
    { name: 'GitHub', url: 'https://github.com/MickyRomanVictorio' }
  ]
};

export const highlightedProject = {
  name: 'CARPETA FISCAL ELECTRÓNICA',
  company: 'UNIDAD EJECUTORA 011',
  role: 'Desarrollador FullStack',
  stack: ['Java 21 (Spring Boot)', 'Angular / PrimeNG', 'Oracle (PL/SQL)', 'IndexedDB (Dexie.js)', 'GitLab CI/CD'],
  features: [
    'Implementación de persistencia local (Client-Side Storage) avanzada.',
    'Procesamiento asíncrono de streams y manipulación de datos binarios.',
    'Arquitectura de microservicios orientada a la reducción de latencia.',
    'Alta concurrencia con optimización de memoria en el navegador.'
  ]
};

export const skills = [
  'Java (8-21)', 'Spring Boot / Security / Data JPA / Cloud / WebFlux',
  'Angular', 'Vue.js', 'React', 'Next.js', 'Node.js',
  'PHP (Zend, Laravel, CodeIgniter)', 'C++',
  'Kafka', 'RabbitMQ',
  'Oracle', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Sybase', 'MySQL',
  'Arquitectura Outbox, MQAL, CDC, Pub/Sub', 'Docker / GitLab CI/CD'
];

export const experience = [
  { role: 'Analista Programador', company: 'UNIDAD DE COORDINACIÓN DE PROYECTOS DEL PODER JUDICIAL', date: 'Dic. 2024 - Jun. 2025', description: 'Desarrollo de microservicios utilizando Java 21, Spring Boot y JPA. Implementación de librerías abstractas reutilizables (Outbox, MQAL, CDC y mecanismos de resiliencia como Circuit Breaker, Retry, Bulkhead, Timeout, Fallback).' },
  { role: 'Analista Programador', company: 'MINISTERIO PÚBLICO FISCALÍA DE LA NACIÓN', date: 'Nov. 2020 - Nov. 2024', description: 'Implementación de sistema de consulta con reconocimiento biométrico y arquitectura de seguridad. Modernización de interfaces de la Junta de fiscales supremos. Desarrollo de la plataforma de Ciberdelincuencia.' },
  { role: 'Servicio de Diseño y Desarrollo Web', company: 'GOBIERNO REGIONAL DE HUÁNUCO', date: 'Nov. 2020', description: 'Diseño y desarrollo de página web para la Dirección Regional de Trabajo y Promoción del Empleo.' },
  { role: 'Programador de Sistemas', company: 'DISLAC S.R.L.', date: 'Jul. 2017 - Nov. 2020', description: 'Desarrollo y mantenimiento de software, análisis de requerimientos y soporte técnico. Tecnologías usadas: Visual FoxPro, PostgreSQL, Crystal Reports.' },
  { role: 'Soporte Técnico de TIC', company: 'CONSORCIO LIDERCLOUD S.R.L.', date: 'Oct. 2016 - Dic. 2016', description: 'Labores de cómputo, copias de seguridad, limpieza y diagnóstico de computadoras y periféricos.' },
  { role: 'Brigada de Soporte de Campo', company: 'MUNICIPALIDAD DISTRITAL DE SIMÓN BOLIVAR', date: 'Feb. 2016 - Jun. 2016', description: 'Soporte técnico en sitio, configuración de equipos, y capacitación a encuestadores.' },
  { role: 'Soporte Técnico (Prácticas)', company: 'GOBIERNO REGIONAL DE PASCO', date: 'Mar. 2015 - Jun. 2015', description: 'Asistencia técnica, resolución de problemas de hardware/software.' }
];

export const education = [
  { title: 'Maestro en Ingeniería de Sistemas e Informática', institution: 'Universidad de Huánuco', date: '2020 - 2021', description: 'Mención en Gerencia de Sistemas y Tecnologías de Información.' },
  { title: 'Ingeniero de Sistemas y Computación', institution: 'Universidad Nacional Daniel Alcides Carrión', date: '2019', description: 'Título Profesional.' },
  { title: 'Bachiller en Ingeniería de Sistemas y Computación', institution: 'Universidad Nacional Daniel Alcides Carrión', date: '2011 - 2016', description: 'Grado Académico.' }
];

export const certifications = [
  { title: 'Microfrontends con Angular 20', institution: 'Galaxy Training (24 Hrs.)', date: 'Oct. 2025' },
  { title: 'Programa de Especialización Java 21 Web Developer', institution: 'Galaxy Training (102 Hrs.)', date: 'Dic. 2024' },
  { title: 'Restful Web Services', institution: 'Galaxy Training (30 Hrs.)', date: 'Nov. 2024' },
  { title: 'Java 21 Core Fundamentals', institution: 'Galaxy Training (30 Hrs.)', date: 'Oct. 2024' },
  { title: 'Aplicaciones Web con Angular 18', institution: 'Galaxy Training (30 Hrs.)', date: 'Sep. 2024' },
  { title: 'Diplomado: Aplicaciones Modernas con Spring Boot y Oracle 19c (Avanzado)', institution: 'CETI (150 Hrs.)', date: 'Ago. 2024' },
  { title: 'Fundamentos para la Gestión de Proyectos PMP', institution: 'PROYECTOS Y CAPACITACIÓN EN TECNOLOGÍA (90 Hrs.)', date: 'Ago. 2024' },
  { title: 'Diseño Web con HTML5 + CSS', institution: 'Fundación Telefónica Movistar (30 Hrs.)', date: 'Sep. 2024' },
  { title: 'Gestión de Proyectos: Metodología Ágil SCRUM', institution: 'PROYECTOS Y CAPACITACIÓN EN TECNOLOGÍA (90 Hrs.)', date: 'Mar. 2024' },
  { title: 'Gobierno y Transformación Digital', institution: 'PROYECTOS Y CAPACITACIÓN EN TECNOLOGÍA (90 Hrs.)', date: 'Mar. 2024' },
  { title: 'Instalación, Administración de BD Oracle y Weblogic', institution: 'Valmer Systems (40 Hrs.)', date: 'Feb. 2024' },
  { title: 'Taller Framework Laravel V9', institution: 'Ministerio Público (12 Hrs.)', date: 'Jul. 2022' },
  { title: 'Taller Framework Angular V13', institution: 'Ministerio Público (14 Hrs.)', date: 'Jun. 2022' },
  { title: 'III Congreso Macroregional en Ing. de Sistemas', institution: 'UNDAC (40 Hrs.)', date: 'Dic. 2021' },
  { title: 'Gestión de Proyectos: Metodologías Ágiles y Lean', institution: 'Fundación Telefónica (40 Hrs.)', date: 'Dic. 2020' },
  { title: 'Programación con JavaScript', institution: 'Fundación Telefónica (40 Hrs.)', date: 'Dic. 2020' },
  { title: 'Taller SQL', institution: 'UNHEVAL (20 Hrs.)', date: 'Sep. 2020' },
  { title: 'Redes LAN/WAN/WLAN y Simulador Cisco', institution: 'UNHEVAL (20 Hrs.)', date: 'Sep. 2020' },
  { title: 'Programación Web: Java, PHP, Python y ASP.NET', institution: 'GBG Enterprise SAC (220 Hrs.)', date: '2019' },
  { title: 'Ensamblaje, Reparación y Mantenimiento de TIC', institution: "D'Roma Consultores (30 Hrs.)", date: '2019' },
  { title: 'Gestión Pública, Programa Sociales y Estadística', institution: 'Municipalidad Simón Bolivar (20 Hrs.)', date: '2016' },
  { title: 'I Congreso Regional de Ing. de Sistemas', institution: 'UNDAC (80 Hrs.)', date: '2013' }
];

export const languages = [
  { name: 'Inglés', level: 'Básico I, II, III', institution: 'Universidad de Huánuco' }
];
