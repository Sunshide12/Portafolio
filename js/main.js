(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var currentLang = localStorage.getItem(STORAGE_KEY) || "es";

  var i18n = {
    es: {
      navHome: "HOME",
      navAbout: "TECNOLOGÍAS",
      navProjects: "PROJECTS",
      navContact: "CONTACT",
      headerName: "STEBAN MARTÍNEZ",
      heroTitle: "STEBAN MARTÍNEZ — SOFTWARE DEVELOPER",
      heroTagline:
        "Desarrollador Full-Stack especializado en arquitecturas limpias y escalables. Domino Arquitectura Hexagonal, Vertical Slicing y Clean Code. Construyo sistemas robustos con React, Node.js y bases de datos relacionales.",
      heroMeta: "España - Denia · Abierto a remoto",
      heroCta: "VER PROYECTOS",
      aboutSectionTitle: "TECNOLOGÍAS",
      aboutSectionSubtitle: "Qué construyo, en qué contexto y cómo trabajo.",
      aboutHeadingProfile: "Perfil",
      aboutText1:
        "Construyo <strong>aplicaciones web y sistemas escalables</strong> usando principios de <strong>Clean Code</strong> y <strong>Arquitectura Hexagonal (Ports & Adapters)</strong>. Especialista en separación de responsabilidades: el dominio y la lógica de negocio completamente desacoplados de la UI y la infraestructura. Implemento <strong>Vertical Slicing</strong> para organización modular y testeable.",
      aboutText2:
        'Tecnologías: <strong>React, Vite, Tailwind CSS</strong> (Frontend) · <strong>Node.js + Express</strong> (Backend) · <strong>PostgreSQL, MySQL, SQLite, Supabase</strong> (Data). Proyectos académicos y personales con CRUD, gestión de inventarios, sistemas de autenticación y dashboards en tiempo real. Certificación <strong>Meta Full-Stack Developer</strong> (Frontend, Backend, APIs, Git) · <a href="https://www.coursera.org/account/accomplishments/specialization/2QBFTEOE59XX" target="_blank" rel="noopener noreferrer" class="about__credential">Ver credencial</a>.',
      aboutText3:
        '<a href="https://www.linkedin.com/in/steban-martinez-074697267/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="https://github.com/Sunshide12" target="_blank" rel="noopener noreferrer">GitHub</a> · <a href="mailto:stebanbusiness@gmail.com">stebanbusiness@gmail.com</a>. Abierto a oportunidades laborales, prácticas o roles de Software Developer — <a href="#contact">contacto</a>.',
      aboutCta: "CONTACTAR",
      aboutHeadingSkills: "Habilidades técnicas",
      skillsCategoryFrontend: "Frontend & Mobile",
      skillsCategoryBackend: "Backend & Frameworks",
      skillsCategoryDb: "Bases de datos",
      skillsCategoryTools: "Herramientas",
      projectsSectionTitle: "PROJECTS",
      projectsSectionSubtitle:
        "Proyectos personales y académicos. Cada uno resuelve un problema concreto y demuestra habilidades técnicas aplicadas.",
      project1Alt: "Sistema de Gestión de Excusas",
      project1Title: "Sistema de Gestión de Excusas",
      project1Desc1:
        "<strong>Problema:</strong> instituciones educativas necesitan registrar, validar y tramitar solicitudes de excusa con historial, roles y estados claros para evitar pérdida de información.",
      project1Desc2:
        "<strong>Qué construí:</strong> plataforma web integral con backend en <strong>PHP puro</strong> (sin frameworks) y MySQL. Modelado relacional normalizado, gestión manual de roles y permisos, flujos de validación complejos. Proyecto de grado académico.",
      project1Desc3:
        "<strong>Demuestra:</strong> comprensión profunda de lógica de negocio, modelado relacional y implementación de reglas de negocio sin depencias de frameworks — fundación para sistemas de gestión empresarial.",
      project2Alt:
        "Inventario Profesional ST - Sistema de inventario profesional",
      project2Title: "Inventario Profesional ST",
      project2Desc1:
        "<strong>Problema:</strong> empresas y equipos necesitan un único lugar escalable para gestionar productos, stock y valor, con seguridad a nivel de datos por usuario.",
      project2Desc2:
        "<strong>Qué construí:</strong> SPA con React, Vite y Tailwind CSS, implementando <strong>Arquitectura Hexagonal</strong>. Separación total entre la lógica de negocio (Dominio), Casos de Uso e Infraestructura (Supabase). Autenticación robusta, RLS por usuario, dashboard en tiempo real y organización modular para escalabilidad.",
      project2Desc3:
        "<strong>Demuestra:</strong> dominio avanzado de arquitecturas limpias, aplicación de patrones SOLID, diseño testeable y escalable — referencia para proyectos empresariales complejos. En desarrollo activo.",
      project3Alt: "Inventory Web V1 - Sistema de inventario legacy",
      project3Title: "Inventory Web V1 (Legacy)",
      project3Desc1:
        "<strong>Problema:</strong> negocios necesitan gestión de inventarios simple y funcional, con seguridad de datos por usuario.",
      project3Desc2:
        "<strong>Qué construí:</strong> SPA puro con JavaScript Vanilla, Bootstrap 5 e integración con Supabase. Gestión de DOM manual, manejo de estado sin librerías reactivas, CRUD en tiempo real.",
      project3Desc3:
        "<strong>Demuestra:</strong> control profundo del DOM, comprensión de arquitectura SPA sin frameworks reactivos y consumo de APIs BaaS — versión legacy del proyecto Inventario Profesional ST.",
      projectRepo: "Ver repositorio",
      contactSectionTitle: "CONTACT",
      contactSectionSubtitle:
        "Si mi perfil encaja con tu equipo o proyecto (desarrollo full-stack, arquitectura limpia, rol de Software Developer), escríbeme y respondo en breve.",
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
        "Software Developer · Full-Stack & Architecture Enthusiast · España · Abierto a remoto.",
      footerSocialTitle: "SOCIAL",
      footerLinkedIn: "LinkedIn",
      footerGitHub: "GitHub",
      footerCopy:
        '© Copyright <span id="year"></span>. Hecho por Steban Martínez',
      chatText: "Chat with me 👋",
      chatAriaLabel: "Chatea conmigo",
      certificationsSectionTitle: "CERTIFICACIONES",
      certificationsSectionSubtitle:
        "Formación profesional validada y especialización en desarrollo Full-Stack.",
      metaCertTitle: "Meta Full-Stack Developer",
      metaCertDate: "Especialización Profesional • Completado: Agosto 2025",
      metaCertDesc:
        "Especialización completa en desarrollo <strong>Full-Stack</strong>: dominio de <strong>React</strong> y JavaScript para frontend, <strong>Django</strong> y Python para backend, diseño de bases de datos, APIs REST, control de versiones con Git y mejores prácticas de ingeniería de software.",
      certViewButton: "Ver Credencial en Coursera",
      certVerifyButton: "Verificar Certificado",
    },
    en: {
      navHome: "HOME",
      navAbout: "TECHNOLOGIES",
      navProjects: "PROJECTS",
      navContact: "CONTACT",
      headerName: "STEBAN MARTÍNEZ",
      heroTitle: "STEBAN MARTÍNEZ — SOFTWARE DEVELOPER",
      heroTagline:
        "Full-Stack Developer specialized in clean architectures and scalable systems. I master Hexagonal Architecture, Vertical Slicing and Clean Code. I build robust systems with React, Node.js and relational databases.",
      heroMeta: "Spain — Open to Remote Work",
      heroCta: "VIEW PROJECTS",
      aboutSectionTitle: "TECHNOLOGIES",
      aboutSectionSubtitle: "What I build, in what context and how I work.",
      aboutHeadingProfile: "Profile",
      aboutText1:
        "I build <strong>scalable web applications and systems</strong> using <strong>Clean Code</strong> and <strong>Hexagonal Architecture (Ports & Adapters)</strong> principles. Expert in separation of concerns: domain and business logic completely decoupled from UI and infrastructure. I implement <strong>Vertical Slicing</strong> for modular and testable organization.",
      aboutText2:
        'Technologies: <strong>React, Vite, Tailwind CSS</strong> (Frontend) · <strong>Node.js + Express</strong> (Backend) · <strong>PostgreSQL, MySQL, SQLite, Supabase</strong> (Data). Academic and personal projects with CRUD systems, inventory management, authentication systems and real-time dashboards. <strong>Meta Full-Stack Developer</strong> certification (Frontend, Backend, APIs, Git) · <a href="https://www.coursera.org/account/accomplishments/specialization/2QBFTEOE59XX" target="_blank" rel="noopener noreferrer" class="about__credential">View credential</a>.',
      aboutText3:
        '<a href="https://www.linkedin.com/in/steban-martinez-074697267/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="https://github.com/Sunshide12" target="_blank" rel="noopener noreferrer">GitHub</a> · <a href="mailto:stebanbusiness@gmail.com">stebanbusiness@gmail.com</a>. Open to job opportunities, internships or Software Developer roles — <a href="#contact">contact</a>.',
      aboutCta: "CONTACT",
      aboutHeadingSkills: "Technical skills",
      skillsCategoryFrontend: "Frontend & Mobile",
      skillsCategoryBackend: "Backend & Frameworks",
      skillsCategoryDb: "Databases",
      skillsCategoryTools: "Tools",
      projectsSectionTitle: "PROJECTS",
      projectsSectionSubtitle:
        "Personal and academic projects. Each one solves a concrete problem and demonstrates applied technical skills.",
      project1Alt: "Excuses Management System",
      project1Title: "Excuses Management System",
      project1Desc1:
        "<strong>Problem:</strong> educational institutions need to register, validate and process excuse requests with history, roles and clear states to avoid loss of information.",
      project1Desc2:
        "<strong>What I built:</strong> comprehensive web platform with <strong>pure PHP backend</strong> (no frameworks) and MySQL. Normalized relational modeling, manual role and permission management, complex validation flows. Academic degree project.",
      project1Desc3:
        "<strong>Demonstrates:</strong> deep understanding of business logic, relational modeling and implementation of business rules without framework dependencies — foundation for enterprise management systems.",
      project2Alt: "Inventario Profesional ST - Professional inventory system",
      project2Title: "Inventario Profesional ST",
      project2Desc1:
        "<strong>Problem:</strong> companies and teams need a scalable single place to manage products, stock and value, with per-user data security.",
      project2Desc2:
        "<strong>What I built:</strong> SPA with React, Vite and Tailwind CSS, implementing <strong>Hexagonal Architecture</strong>. Complete separation between business logic (Domain), Use Cases and Infrastructure (Supabase). Robust authentication, per-user RLS, real-time dashboard and modular organization for scalability.",
      project2Desc3:
        "<strong>Demonstrates:</strong> advanced mastery of clean architectures, SOLID patterns application, testable and scalable design — reference for complex enterprise projects. Active development.",
      project3Alt: "Inventory Web V1 - Legacy inventory system",
      project3Title: "Inventory Web V1 (Legacy)",
      project3Desc1:
        "<strong>Problem:</strong> businesses need simple and functional inventory management with per-user data security.",
      project3Desc2:
        "<strong>What I built:</strong> pure SPA with Vanilla JavaScript, Bootstrap 5 and Supabase integration. Manual DOM management, state handling without reactive libraries, real-time CRUD.",
      project3Desc3:
        "<strong>Demonstrates:</strong> deep DOM control, understanding of SPA architecture without reactive frameworks and BaaS API consumption — legacy version of Inventario Profesional ST.",
      projectRepo: "View repository",
      contactSectionTitle: "CONTACT",
      contactSectionSubtitle:
        "If my profile fits your team or project (full-stack development, clean architecture, Software Developer role), get in touch and I'll reply shortly.",
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
        "Software Developer · Full-Stack & Architecture Enthusiast · Spain · Open to remote.",
      footerSocialTitle: "SOCIAL",
      footerLinkedIn: "LinkedIn",
      footerGitHub: "GitHub",
      footerCopy:
        '© Copyright <span id="year"></span>. Made by Steban Martínez',
      chatText: "Chat with me 👋",
      chatAriaLabel: "Chat with me",
      certificationsSectionTitle: "CERTIFICATIONS",
      certificationsSectionSubtitle:
        "Professional training and specialization in Full-Stack development.",
      metaCertTitle: "Meta Full-Stack Developer",
      metaCertDate: "Professional Specialization • Completed: August 2025",
      metaCertDesc:
        "Complete Full-Stack development specialization: mastery of <strong>React</strong> and JavaScript for frontend, <strong>Django</strong> and Python for backend, database design, REST APIs, Git version control, and software engineering best practices.",
      certViewButton: "View Credential on Coursera",
      certVerifyButton: "Verify Certificate",
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
})();
