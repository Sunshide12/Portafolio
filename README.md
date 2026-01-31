# Portafolio — Landing profesional

Landing de una sola página con diseño formal y sobrio, pensada para presentarte a empresas.

## Estructura (orden de arriba a abajo)

1. **Nombre** con enlaces a GitHub y LinkedIn  
2. **Descripción personal**  
3. **Tecnologías** (iconos desde [devicons](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/))  
4. **Carrusel de proyectos** (nombre, enlace al repo, captura y tecnologías por proyecto)  
5. **Experiencia y aprendizaje** (qué has aprendido con cada proyecto)  
6. **Estudios** (títulos, cursos, certificaciones)

## Cómo personalizar

- **Nombre y redes:** En `index.html` cambia el texto "Tu Nombre" y los `href` de los enlaces de GitHub y LinkedIn.
- **Descripción:** Edita el párrafo dentro de `.description__text`.
- **Tecnologías:** Añade o quita `<a class="tech-item">` en `.tech-grid`. Iconos:  
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{nombre}/{nombre}-original.svg`  
  (ej. `nodejs/nodejs-original.svg`, `react/react-original.svg`).
- **Proyectos:** Copia un `<li class="carousel__slide">` completo y ajusta título, enlace al repo, ruta de la imagen y lista de iconos en `.project-card__techs`. Añade un `<button class="carousel__dot">` por cada nuevo slide.
- **Experiencia:** Añade bloques `.experience__item` con título y descripción.
- **Estudios:** Añade `<li class="studies__item">` con título, institución y año.

## Capturas de proyectos

Crea la carpeta `assets` en la raíz y guarda ahí las imágenes (por ejemplo `mi-bolsillito.png`). En cada proyecto, el `src` de la imagen debe apuntar a ese archivo (ej. `assets/mi-bolsillito.png`).

## Cómo ver la página

Abre `index.html` en el navegador o sirve la carpeta con Laragon/Apache. No requiere build ni dependencias.
