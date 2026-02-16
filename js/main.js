(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var currentLang = localStorage.getItem(STORAGE_KEY) || "es";

  var i18n = {
    es: {
      navHome: "HOME",
      navAbout: "ABOUT",
      navProjects: "PROJECTS",
      navContact: "CONTACT",
      headerName: "STEBAN MARTÍNEZ",
      heroTitle: "STEBAN MARTÍNEZ — WEB DEVELOPER",
      heroTagline:
        "Construyo SPAs, integro APIs y desarrollo sistemas con autenticación y bases de datos. Frontend y backend con enfoque en código mantenible y entrega funcional.",
      heroMeta: "España - Denia · Abierto a remoto",
      heroCta: "VER PROYECTOS",
      aboutSectionTitle: "ABOUT ME",
      aboutSectionSubtitle: "Qué construyo, en qué contexto y cómo trabajo.",
      aboutHeadingProfile: "Perfil",
      aboutText1:
        "Construyo <strong>aplicaciones web</strong>: SPAs con JavaScript, interfaces responsivas (HTML, CSS, Bootstrap), integración con APIs REST y backends con PHP o Supabase. Uso bases de datos relacionales (MySQL, PostgreSQL, SQLite) y he implementado autenticación, RLS y dashboards con datos en tiempo real.",
      aboutText2:
        'Mis proyectos son académicos y personales: sistemas CRUD, módulos de gestión y frontends que consumen APIs. Certificación <strong>Meta Full-Stack Developer</strong> (Frontend, Backend, APIs, Git) · <a href="https://www.coursera.org/account/accomplishments/specialization/2QBFTEOE59XX" target="_blank" rel="noopener noreferrer" class="about__credential">Ver credencial</a>. Enfoque en código legible, entrega funcional y aprendizaje continuo.',
      aboutText3:
        '<a href="https://www.linkedin.com/in/steban-martinez-074697267/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="https://github.com/Sunshide12" target="_blank" rel="noopener noreferrer">GitHub</a>. Busco mi primera oportunidad laboral, prácticas o rol junior — <a href="#contact">contacto</a>.',
      aboutCta: "CONTACTAR",
      aboutHeadingSkills: "Habilidades técnicas",
      skillsCategoryFrontend: "Frontend",
      skillsCategoryBackend: "Backend & APIs",
      skillsCategoryDb: "Bases de datos",
      skillsCategoryTools: "Herramientas",
      projectsSectionTitle: "PROJECTS",
      projectsSectionSubtitle:
        "Proyectos personales y académicos. Cada uno resuelve un problema concreto y demuestra habilidades técnicas aplicadas.",
      project1Alt: "Módulo de Excusas Web",
      project1Title: "Módulo de Excusas Web",
      project1Desc1:
        "<strong>Problema:</strong> las instituciones necesitan registrar y tramitar solicitudes de excusa con historial, roles y estados claros para evitar pérdida de información y disputas.",
      project1Desc2:
        "<strong>Qué construí:</strong> sistema web con backend en PHP y MySQL: modelos de datos relacionados, flujos de validación, seguimiento de estados y roles. Proyecto de grado (Técnico y Tecnólogo en COTECNOVA).",
      project1Desc3:
        "<strong>Demuestra:</strong> capacidad de modelar dominio y datos relacionales, implementar reglas de negocio en backend y exponerlas en formularios y flujos usables — base para sistemas internos más grandes.",
      project2Alt: "Inventory Web - Sistema de inventario",
      project2Title: "Inventory Web",
      project2Desc1:
        "<strong>Problema:</strong> negocios y equipos necesitan un único lugar para ver productos, stock y valor, con datos aislados por usuario para evitar fugas entre cuentas.",
      project2Desc2:
        "<strong>Qué construí:</strong> SPA con CRUD de productos y categorías, autenticación con Supabase (email), políticas RLS por usuario y dashboard con valor de inventario y alertas de stock bajo.",
      project2Desc3:
        "<strong>Demuestra:</strong> integración con BaaS, aplicación de políticas de seguridad a nivel de fila (RLS) y estructura de frontend modular — relevante para productos SaaS y multi-tenant.",
      project3Alt: "Frontend API - Consumo de API",
      project3Title: "Frontend API",
      project3Desc1:
        "<strong>Problema:</strong> los datos del backend solo aportan valor si alguien puede consultarlos y actuar sobre ellos desde una interfaz clara, sin depender de herramientas técnicas.",
      project3Desc2:
        "<strong>Qué construí:</strong> aplicación web que consume una API REST: listado, filtrado y gestión de datos desde el navegador.",
      project3Desc3:
        "<strong>Demuestra:</strong> capacidad de consumir APIs REST, manejar estado y datos en el cliente y traducirlos en una UI funcional — habilidad central en equipos donde frontend y backend están separados.",
      projectRepo: "Ver repositorio",
      contactSectionTitle: "CONTACT",
      contactSectionSubtitle:
        "Si mi perfil encaja con tu equipo o proyecto (rol junior, prácticas, colaboración), escríbeme y respondo en breve.",
      contactLabelName: "Name",
      contactLabelEmail: "Email",
      contactLabelMessage: "Message",
      contactPlaceholderName: "Enter Your Name",
      contactPlaceholderEmail: "Enter Your Email",
      contactPlaceholderMessage: "Enter Your Message",
      contactSubmit: "SUBMIT",
      contactSuccess: "Mensaje enviado.",
      contactError: "Error al enviar. Inténtalo de nuevo.",
      footerTagline:
        "Web Developer · Frontend & Backend · España · Abierto a remoto.",
      footerSocialTitle: "SOCIAL",
      footerLinkedIn: "LinkedIn",
      footerGitHub: "GitHub",
      footerCopy:
        '© Copyright <span id="year"></span>. Hecho por Steban Martínez',
      chatText: "Chat with me 👋",
      chatAriaLabel: "Chatea conmigo",
    },
    en: {
      navHome: "HOME",
      navAbout: "ABOUT",
      navProjects: "PROJECTS",
      navContact: "CONTACT",
      headerName: "STEBAN MARTÍNEZ",
      heroTitle: "STEBAN MARTÍNEZ — WEB DEVELOPER",
      heroTagline:
        "I build SPAs, integrate APIs and develop systems with authentication and databases. Frontend and backend with a focus on maintainable code and functional delivery.",
      heroMeta: "Spain - Denia · Open to remote",
      heroCta: "VIEW PROJECTS",
      aboutSectionTitle: "ABOUT ME",
      aboutSectionSubtitle: "What I build, in what context and how I work.",
      aboutHeadingProfile: "Profile",
      aboutText1:
        "I build <strong>web applications</strong>: SPAs with JavaScript, responsive interfaces (HTML, CSS, Bootstrap), REST API integration and backends with PHP or Supabase. I use relational databases (MySQL, PostgreSQL, SQLite) and have implemented authentication, RLS and real-time data dashboards.",
      aboutText2:
        'My projects are academic and personal: CRUD systems, management modules and frontends that consume APIs. <strong>Meta Full-Stack Developer</strong> certification (Frontend, Backend, APIs, Git) · <a href="https://www.coursera.org/account/accomplishments/specialization/2QBFTEOE59XX" target="_blank" rel="noopener noreferrer" class="about__credential">View credential</a>. Focus on readable code, functional delivery and continuous learning.',
      aboutText3:
        '<a href="https://www.linkedin.com/in/steban-martinez-074697267/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="https://github.com/Sunshide12" target="_blank" rel="noopener noreferrer">GitHub</a>. Looking for my first job opportunity, internships or junior role — <a href="#contact">contact</a>.',
      aboutCta: "CONTACT",
      aboutHeadingSkills: "Technical skills",
      skillsCategoryFrontend: "Frontend",
      skillsCategoryBackend: "Backend & APIs",
      skillsCategoryDb: "Databases",
      skillsCategoryTools: "Tools",
      projectsSectionTitle: "PROJECTS",
      projectsSectionSubtitle:
        "Personal and academic projects. Each one solves a concrete problem and demonstrates applied technical skills.",
      project1Alt: "Excuses Web Module",
      project1Title: "Excuses Web Module",
      project1Desc1:
        "<strong>Problem:</strong> institutions need to register and process excuse requests with history, roles and clear states to avoid loss of information and disputes.",
      project1Desc2:
        "<strong>What I built:</strong> web system with PHP and MySQL backend: related data models, validation flows, state and role tracking. Degree project (Technical and Technologist at COTECNOVA).",
      project1Desc3:
        "<strong>Demonstrates:</strong> ability to model domain and relational data, implement business rules in the backend and expose them in usable forms and flows — foundation for larger internal systems.",
      project2Alt: "Inventory Web - Inventory system",
      project2Title: "Inventory Web",
      project2Desc1:
        "<strong>Problem:</strong> businesses and teams need a single place to view products, stock and value, with data isolated per user to avoid leaks between accounts.",
      project2Desc2:
        "<strong>What I built:</strong> SPA with product and category CRUD, Supabase (email) authentication, per-user RLS policies and dashboard with inventory value and low-stock alerts.",
      project2Desc3:
        "<strong>Demonstrates:</strong> BaaS integration, row-level security (RLS) policies and modular frontend structure — relevant for SaaS and multi-tenant products.",
      project3Alt: "Frontend API - API consumption",
      project3Title: "Frontend API",
      project3Desc1:
        "<strong>Problem:</strong> backend data only adds value if someone can query and act on it through a clear interface, without relying on technical tools.",
      project3Desc2:
        "<strong>What I built:</strong> web application that consumes a REST API: listing, filtering and data management from the browser.",
      project3Desc3:
        "<strong>Demonstrates:</strong> ability to consume REST APIs, handle state and data on the client and translate them into a functional UI — a core skill in teams where frontend and backend are separate.",
      projectRepo: "View repository",
      contactSectionTitle: "CONTACT",
      contactSectionSubtitle:
        "If my profile fits your team or project (junior role, internships, collaboration), get in touch and I'll reply shortly.",
      contactLabelName: "Name",
      contactLabelEmail: "Email",
      contactLabelMessage: "Message",
      contactPlaceholderName: "Enter Your Name",
      contactPlaceholderEmail: "Enter Your Email",
      contactPlaceholderMessage: "Enter Your Message",
      contactSubmit: "SUBMIT",
      contactSuccess: "Message sent.",
      contactError: "Failed to send. Please try again.",
      footerTagline:
        "Web Developer · Frontend & Backend · Spain · Open to remote.",
      footerSocialTitle: "SOCIAL",
      footerLinkedIn: "LinkedIn",
      footerGitHub: "GitHub",
      footerCopy:
        '© Copyright <span id="year"></span>. Made by Steban Martínez',
      chatText: "Chat with me 👋",
      chatAriaLabel: "Chat with me",
    },
  };

  function applyLang(lang) {
    var strings = i18n[lang];
    if (!strings) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var text = strings[key];
      if (text == null) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var text = strings[key];
      if (text != null) el.placeholder = text;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      var text = strings[key];
      if (text != null) el.alt = text;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      var text = strings[key];
      if (text != null) el.setAttribute("aria-label", text);
    });

    document.documentElement.lang = lang;

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function updateLangButton() {
    var btn = document.getElementById("langToggle");
    if (!btn) return;
    if (currentLang === "es") {
      btn.textContent = "EN";
      btn.setAttribute("aria-label", "Ver en inglés");
    } else {
      btn.textContent = "ES";
      btn.setAttribute("aria-label", "Ver en español");
    }
  }

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "es" ? "en" : "es";
      localStorage.setItem(STORAGE_KEY, currentLang);
      applyLang(currentLang);
      updateLangButton();
    });
  }

  applyLang(currentLang);
  updateLangButton();

  // Menú móvil
  var menuBtn = document.querySelector(".header__menu");
  var headerNav = document.querySelector(".header__nav");
  if (menuBtn && headerNav) {
    menuBtn.addEventListener("click", function () {
      headerNav.classList.toggle("header__nav--open");
      menuBtn.classList.toggle("header__menu--open");
    });
  }

  // Formulario de contacto (envío por AJAX a Formspree, sin redirección)
  var form = document.querySelector(".contact-form");
  var feedbackEl = document.getElementById("contactFeedback");
  if (form && feedbackEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      feedbackEl.hidden = true;
      feedbackEl.classList.remove("contact-form__feedback--error");
      feedbackEl.textContent = "";
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            feedbackEl.textContent = i18n[currentLang].contactSuccess;
            feedbackEl.hidden = false;
            form.reset();
          } else {
            feedbackEl.textContent = i18n[currentLang].contactError;
            feedbackEl.classList.add("contact-form__feedback--error");
            feedbackEl.hidden = false;
          }
        })
        .catch(function () {
          feedbackEl.textContent = i18n[currentLang].contactError;
          feedbackEl.classList.add("contact-form__feedback--error");
          feedbackEl.hidden = false;
        });
    });
  }
})();
