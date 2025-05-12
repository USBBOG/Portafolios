const projects = [
  {
    nombre: "What's New Games",
    descripcion:
      "Plataforma que conecta freelancers con trabajos sencillos y ayuda a clientes a resolver problemas específicos de manera eficiente.",
    portafolio: "https://jeancarloguzmanc.github.io/WhatsNewGames-Repository/",
    logo: "../../assets/tds/history/2024-II/3.png",
  },
  {
    nombre: "RoverCrop",
    descripcion:
      "Simulador que mejora la producción agrícola analizando el comportamiento de robots en diferentes terrenos.",
    portafolio: "https://deivtor.github.io/RoverCrop-Page/",
    logo: "../../assets/tds/history/2024-II/4.png",
  },
  {
    nombre: "LDS-C",
    descripcion:
      "Solución para mejorar la comunicación entre personas sordas y entidades públicas mediante lenguaje de señas.",
    portafolio: "https://anyi404.github.io/ProyectoLDSfinal/",
    logo: "../../assets/tds/history/2024-II/5.png",
  },
  {
    nombre: "DNQ Motor",
    descripcion:
      "Plataforma de e-commerce especializada en repuestos para motos, ofreciendo productos de calidad y servicio excepcional.",
    portafolio: "https://jfquinch.github.io/DNQ-Motor-Portafolio/#footer",
    logo: "../../assets/tds/history/2024-II/6.png",
  },
  {
    nombre: "VSTR",
    descripcion:
      "Herramienta para creación, edición y transmisión de videos, facilitando la producción de contenido audiovisual.",
    portafolio: "https://project-vstr-herramienta-web.vercel.app/",
    logo: "../../assets/tds/history/2024-II/7.png",
  },
  {
    nombre: "ADOC",
    descripcion:
      "Gestor documental con diseño en Figma, frontend en ReactJS, backend en Laravel y base de datos MariaDB.",
    portafolio: "https://michaelbogota.github.io/adoc-page/",
    logo: "../../assets/tds/history/2024-II/8.png",
  },
  {
    nombre: "Programmasy",
    descripcion:
      "Plataforma que reúne recursos digitales para formación en programación, bases de datos y arquitecturas de software.",
    portafolio:
      "https://github.com/RubenAlexis663/PROGFINAL/wiki/Documentaci%C3%B3n",
    logo: "../../assets/tds/history/2024-II/9.png",
  },
  {
    nombre: "PIN UP",
    descripcion:
      "Solución para virtualizar una academia de baile, facilitando la gestión de usuarios, clases y profesores.",
    portafolio: "https://pinup-7bs6.onrender.com/",
    logo: "../../assets/tds/history/2024-II/10.png",
  },
  {
    nombre: "Vive Explorando",
    descripcion: "Proyecto sin descripción disponible actualmente.",
    portafolio: "https://github.com/Brayandev8/Vive_Explorando.github.io",
    logo: "../../assets/tds/history/2024-II/11.png",
  },
  {
    nombre: "Guia de suplementos deportivos",
    descripcion:
      "App móvil que guía en la compra de suplementos deportivos mediante búsqueda y filtrado de información.",
    portafolio: "https://sanmonor.github.io/Proyecto_Suplementos_Deportivos/",
    logo: "../../assets/tds/history/2024-II/2.png",
  },
  {
    nombre: "Funny Mind",
    descripcion:
      "Plataforma web con juegos interactivos para rehabilitación cognitiva en niños con traumas cerebrales.",
    portafolio: "https://andresfelipe21.github.io/share-point/",
    logo: "../../assets/tds/history/2024-II/12.png",
  },
  {
    nombre: "Passt",
    descripcion:
      "Herramienta móvil para gestión segura de contraseñas y datos sensibles en múltiples plataformas.",
    portafolio: "https://fe1t0r.github.io/Passt.github.io/",
    logo: "../../assets/tds/history/2024-II/13.png",
  },
  {
    nombre: "AutisTec",
    descripcion: "Proyecto sin descripción disponible.",
    portafolio: "#",
    logo: "../../assets/tds/history/2024-II/14.png",
  },
];

// El resto de tu código (container.innerHTML += ...) puede permanecer igual

let container = document.getElementById("container-projects-list");

projects.forEach((project) => {
  container.innerHTML += `
<div class="col d-flex justify-content-center align-items-center">
                <a href="${project.portafolio}" style="text-decoration: none;" target="_blank-button">
                    <div class="card text-black border border-0 mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${project.logo}" class="img-fluid rounded-start" alt="${project.nombre}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body border border-0 shadow bg bg-white bg-opacity-10 rounded-end">
                                    <h5 class="card-title">${project.nombre}</h5>
                                    <p class="card-text">${project.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
`;
});

console.log(projects);
