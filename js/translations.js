/**
 * Portfolio Translations — Steban Martínez
 * Copy these objects into your js/main.js i18n system.
 * Keys match every data-i18n attribute in the new index.html.
 */

const translations = {
  es: {
    // ── Header & Nav ──
    headerName: "STEBAN MARTÍNEZ",
    navHome: "HOME",
    navStack: "STACK",
    navExperience: "EXPERIENCIA",
    navProjects: "PROYECTOS",
    navContact: "CONTACTO",

    // ── Hero ──
    heroTitle: "Full-Stack Developer",
    heroTagline: 'Construyo productos que funcionan: desde migrar ERPs empresariales con <strong>+1M de registros</strong> hasta diseñar pipelines de IA que generan catálogos de productos automáticamente. React, Laravel, Astro, Supabase, Cloudflare.',
    heroMeta: "Denia, España · Disponible remoto 🌍",
    heroCta: "VER PROYECTOS",

    // ── About / Tech Stack ──
    aboutSectionTitle: "STACK TECNOLÓGICO",
    aboutSectionSubtitle: "Fundamentos sólidos de programación. Me adapto al stack que necesites — lo importante es resolver el problema.",
    aboutCatFrontend: "Frontend",
    aboutCatBackend: "Backend",
    aboutCatData: "Datos & Infraestructura",
    aboutCatAI: "IA & Modelos",

    // ── Experience ──
    expSectionTitle: "EXPERIENCIA PROFESIONAL",
    expSectionSubtitle: "Donde alguien confió en mi código para su negocio.",
    expBadge: "Experiencia Profesional",
    expTitle: "Logos Smart",
    expRole: "Full-Stack Developer",
    expPeriod: "Feb – Mar 2026",
    expMetric1Value: "+1M",
    expMetric1Label: "registros procesados",
    expMetric2Value: "<1s",
    expMetric2Label: "tiempo de renderizado",
    expMetric3Value: "End-to-End",
    expMetric3Label: "ownership completo",
    expDesc1: 'Lideré la migración completa de su sistema legacy a una arquitectura moderna. Fui responsable de todo: backend, frontend, diseño de interfaces y la lógica de negocio completa.',
    expDesc2: 'En el día a día, eso significó construir módulos de gestión de pedidos que manejaban listados masivos de datos históricos, diseñar e implementar CRUDs completos para la operativa comercial, crear interfaces con actualización en tiempo real, e integrar mapas interactivos con trazado de rutas para el equipo de campo.',
    expDesc3: 'El resultado: datasets de <strong>+1M de registros</strong> que antes bloqueaban la interfaz ahora se renderizan en <strong>menos de 1 segundo</strong>, con una arquitectura modular donde cada dominio de negocio funciona de forma independiente.',

    // ── Projects ──
    projectsSectionTitle: "PROYECTOS DESTACADOS",
    projectsSectionSubtitle: "Productos que diseñé y construí de forma independiente, desde la arquitectura hasta el despliegue.",

    // MiTienda
    proj1Title: "MiTienda — SaaS E-commerce con IA Generativa",
    proj1Badge: "Proyecto Personal · En Desarrollo",
    proj1Metric1Value: "<5 min",
    proj1Metric1Label: "onboarding completo",
    proj1Metric2Value: "3",
    proj1Metric2Label: "modelos IA (fallback)",
    proj1Metric3Value: "Serverless",
    proj1Metric3Label: "arquitectura edge",
    proj1Desc1: '<strong class="star-label">Situación:</strong> Los pequeños comerciantes no tienen recursos técnicos para crear una tienda online ni conocimientos de fotografía de producto profesional.',
    proj1Desc2: '<strong class="star-label">Acción:</strong> Construí un pipeline serverless de IA que procesa imágenes y genera automáticamente nombre, marca, precio y descripción usando modelos de visión (Gemini → Qwen → Llama como fallback). Arquitectura Astro 6 SSR + Islands Architecture. Upload proxy server-to-server via Edge Functions. Tracking en tiempo real con Supabase Realtime. Editor de imágenes no destructivo con metadata JSONB.',
    proj1Desc3: '<strong class="star-label">Resultado:</strong> De la primera visita al <strong>catálogo generado por IA, en menos de 5 minutos</strong>. Pipeline con disponibilidad garantizada gracias al fallback multi-modelo.',
    proj1Repo: "Ver Repositorio",

    // Gestor Académico
    proj2Title: "Gestor Académico Institucional",
    proj2Badge: "Proyecto de Grado · COTECNOVA",
    proj2Metric1Value: "7→0",
    proj2Metric1Label: "días de espera eliminados",
    proj2Metric2Value: "3",
    proj2Metric2Label: "niveles de aprobación",
    proj2Metric3Value: "RBAC",
    proj2Metric3Label: "control de acceso",
    proj2Desc1: '<strong class="star-label">Situación:</strong> La institución educativa COTECNOVA gestionaba las excusas académicas con documentos físicos — un proceso que tardaba entre 1 y 7 días con pérdida frecuente de información.',
    proj2Desc2: '<strong class="star-label">Acción:</strong> Desarrollé un sistema web con PHP nativo y MySQL normalizado. Implementé un flujo de aprobación multinivel (estudiante → director → profesor) con RBAC y notificaciones por email integradas al esquema de la base de datos.',
    proj2Desc3: '<strong class="star-label">Resultado:</strong> Proceso que antes tardaba <strong>hasta 7 días</strong> reducido a un flujo digital con trazabilidad completa y notificaciones automáticas en cada etapa.',
    proj2Repo: "Ver Código Backend",

    // ── Certifications ──
    certificationsSectionTitle: "CERTIFICACIONES",
    certificationsSectionSubtitle: "Formación profesional validada y especialización en Full-Stack Development.",
    metaCertTitle: "Meta Full-Stack Developer",
    metaCertDate: "Especialización Profesional · Completado: Agosto 2025",
    metaCertDesc: 'Especialización completa en desarrollo <strong>Full-Stack</strong>: dominio de <strong>React</strong> y JavaScript para frontend, <strong>Django</strong> y Python para backend, diseño de bases de datos, APIs REST, control de versiones con Git y mejores prácticas de ingeniería de software.',
    certViewButton: "Ver Credencial en Coursera",
    certVerifyButton: "Verificar Certificado",

    // ── Contact ──
    contactSectionTitle: "CONTACTO",
    contactSectionSubtitle: "¿Tienes un proyecto interesante o buscas un developer que se implique? Hablemos.",
    contactLabelName: "Nombre",
    contactPlaceholderName: "Tu nombre",
    contactLabelEmail: "Email",
    contactPlaceholderEmail: "tucorreo@ejemplo.com",
    contactLabelMessage: "Mensaje",
    contactPlaceholderMessage: "Hola Steban, me gustaría discutir una oportunidad técnica...",
    contactSubmit: "ENVIAR MENSAJE",

    // ── Footer ──
    footerTagline: "Full-Stack Developer · Sistemas que funcionan, código que escala.",
    footerSocialTitle: "SOCIAL",
    footerLinkedIn: "LinkedIn",
    footerGitHub: "GitHub",
    footerCopy: '© Copyright <span id="year"></span>. Made by Steban Martínez',

    // ── Chat Widget ──
    chatText: "Hablemos 👋",
    chatAriaLabel: "Chatea conmigo",
  },

  en: {
    // ── Header & Nav ──
    headerName: "STEBAN MARTÍNEZ",
    navHome: "HOME",
    navStack: "STACK",
    navExperience: "EXPERIENCE",
    navProjects: "PROJECTS",
    navContact: "CONTACT",

    // ── Hero ──
    heroTitle: "Full-Stack Developer",
    heroTagline: 'I build products that work: from migrating enterprise ERPs handling <strong>1M+ records</strong> to designing AI pipelines that auto-generate product catalogs. React, Laravel, Astro, Supabase, Cloudflare.',
    heroMeta: "Denia, Spain · Available for remote work 🌍",
    heroCta: "VIEW PROJECTS",

    // ── About / Tech Stack ──
    aboutSectionTitle: "TECH STACK",
    aboutSectionSubtitle: "Strong programming fundamentals. I adapt to whatever stack you need — what matters is solving the problem.",
    aboutCatFrontend: "Frontend",
    aboutCatBackend: "Backend",
    aboutCatData: "Data & Infrastructure",
    aboutCatAI: "AI & Models",

    // ── Experience ──
    expSectionTitle: "PROFESSIONAL EXPERIENCE",
    expSectionSubtitle: "Where someone trusted my code for their business.",
    expBadge: "Professional Experience",
    expTitle: "Logos Smart",
    expRole: "Full-Stack Developer",
    expPeriod: "Feb – Mar 2026",
    expMetric1Value: "1M+",
    expMetric1Label: "records processed",
    expMetric2Value: "<1s",
    expMetric2Label: "render time",
    expMetric3Value: "End-to-End",
    expMetric3Label: "full ownership",
    expDesc1: 'I led the complete migration of their legacy system to a modern architecture. I owned everything: backend, frontend, interface design, and the full business logic.',
    expDesc2: 'Day to day, that meant building order management modules handling massive historical datasets, designing and implementing full CRUDs for commercial operations, creating real-time updating interfaces, and integrating interactive maps with route tracing for the field team.',
    expDesc3: 'The result: datasets of <strong>1M+ records</strong> that used to freeze the interface now render in <strong>under 1 second</strong>, with a modular architecture where each business domain operates independently.',

    // ── Projects ──
    projectsSectionTitle: "FEATURED PROJECTS",
    projectsSectionSubtitle: "Products I designed and built independently, from architecture to deployment.",

    // MiTienda
    proj1Title: "MiTienda — AI-Powered E-commerce SaaS",
    proj1Badge: "Side Project · In Development",
    proj1Metric1Value: "<5 min",
    proj1Metric1Label: "full onboarding",
    proj1Metric2Value: "3",
    proj1Metric2Label: "AI models (fallback)",
    proj1Metric3Value: "Serverless",
    proj1Metric3Label: "edge architecture",
    proj1Desc1: '<strong class="star-label">Situation:</strong> Small merchants lack the technical resources to create an online store or professional product photography skills.',
    proj1Desc2: '<strong class="star-label">Action:</strong> Built a serverless AI pipeline that processes product images and auto-generates name, brand, price, and description using vision models (Gemini → Qwen → Llama as sequential fallback). Astro 6 SSR + Islands Architecture. Server-to-server upload proxy via Edge Functions. Real-time tracking with Supabase Realtime. Non-destructive image editor with JSONB metadata.',
    proj1Desc3: '<strong class="star-label">Result:</strong> From first visit to <strong>AI-generated catalog in under 5 minutes</strong>. Pipeline with guaranteed availability thanks to multi-model fallback.',
    proj1Repo: "View Repository",

    // Academic Manager
    proj2Title: "Institutional Academic Manager",
    proj2Badge: "Graduation Project · COTECNOVA",
    proj2Metric1Value: "7→0",
    proj2Metric1Label: "wait days eliminated",
    proj2Metric2Value: "3",
    proj2Metric2Label: "approval levels",
    proj2Metric3Value: "RBAC",
    proj2Metric3Label: "access control",
    proj2Desc1: '<strong class="star-label">Situation:</strong> COTECNOVA educational institution managed academic excuses with physical documents — a process that took 1 to 7 days with frequent information loss.',
    proj2Desc2: '<strong class="star-label">Action:</strong> Developed a web system with native PHP and normalized MySQL. Implemented a multi-level approval flow (student → director → professor) with RBAC and email notifications integrated into the database schema.',
    proj2Desc3: '<strong class="star-label">Result:</strong> A process that used to take <strong>up to 7 days</strong> reduced to a digital flow with full traceability and automatic notifications at every stage.',
    proj2Repo: "View Backend Code",

    // ── Certifications ──
    certificationsSectionTitle: "CERTIFICATIONS",
    certificationsSectionSubtitle: "Validated professional training and Full-Stack Development specialization.",
    metaCertTitle: "Meta Full-Stack Developer",
    metaCertDate: "Professional Specialization · Completed: August 2025",
    metaCertDesc: 'Complete <strong>Full-Stack</strong> specialization: mastery of <strong>React</strong> and JavaScript for frontend, <strong>Django</strong> and Python for backend, database design, REST APIs, version control with Git, and software engineering best practices.',
    certViewButton: "View Credential on Coursera",
    certVerifyButton: "Verify Certificate",

    // ── Contact ──
    contactSectionTitle: "CONTACT",
    contactSectionSubtitle: "Have an interesting project or looking for a committed developer? Let's talk.",
    contactLabelName: "Name",
    contactPlaceholderName: "Your name",
    contactLabelEmail: "Email",
    contactPlaceholderEmail: "you@example.com",
    contactLabelMessage: "Message",
    contactPlaceholderMessage: "Hi Steban, I'd like to discuss a technical opportunity...",
    contactSubmit: "SEND MESSAGE",

    // ── Footer ──
    footerTagline: "Full-Stack Developer · Systems that work, code that scales.",
    footerSocialTitle: "SOCIAL",
    footerLinkedIn: "LinkedIn",
    footerGitHub: "GitHub",
    footerCopy: '© Copyright <span id="year"></span>. Made by Steban Martínez',

    // ── Chat Widget ──
    chatText: "Let's talk 👋",
    chatAriaLabel: "Chat with me",
  },
};
