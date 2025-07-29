export const links = [
    {
        name: 'inicio',
        href: '#inicio',
    },
    {
        name: 'nosotros',
        href: '#nosotros',
    },
    {
        name: 'servicios',
        href: '#servicios',
    },
    {
        name: 'proyectos',
        href: '#proyectos',
    },
]

export const services = [
    {
        title: 'Diseño Web',
        iconText : '/images/text-icons/servicio1.webp',
        features: [
            'Diseño 100% personalizado según la identidad de tu marca',
            'Estructura visual clara y estratégica',
            'Diseño UX/UI orientado a la experiencia del usuario',
            'Adaptación responsive (mobile, tablet y desktop)',
            'Integración de recursos visuales como íconos, ilustraciones y mockups',
            'Prototipado visual previo a la etapa de desarrollo',
        ],
    },
    {
        title: 'Desarrollo Web',
        iconText : '/images/text-icons/servicio2.webp',
        features: [
            'Maquetación web en plataformas como Go High Level, WordPress u otras',
            'Desarrollo en HTML/CSS/JS según requerimiento',
            'Implementación de animaciones, formularios, botones y efectos',
            'Configuración de navegación y estructura interna del sitio',
            'Optimización de velocidad de carga',
            'Enlace con dominios y configuración de hosting (si es necesario)',
        ],
    },
    {
        title: 'Branding / Identidad Visual',
        iconText : '/images/text-icons/servicio3.webp',
        features: [
            'Definición de logo (o rediseño del actual)',
            'Paleta cromática y tipografía',
            'Manual de marca básico',
            'Aplicaciones gráficas para web y redes',
            'Moodboard y estilo visual alineado con los valores de la marca',
            'Adaptaciones para distintos formatos y plataformas',
        ],
    },
    {
        title: 'Mantenimiento Web',
        iconText : '/images/text-icons/servicio4.webp',
        features: [
            'Correcciones de errores o bugs',
            'Actualizaciones de plugins y sistema (en WordPress)',
            'Backups periódicos',
            'Ajustes en contenido o diseño según necesidad',
            'Monitoreo de rendimiento',
            'Soporte técnico y asistencia personalizada',
        ],
    },
    {
        title: 'Optimización & SEO básico',
        iconText : '/images/text-icons/servicio5.webp',
        features: [
            'Optimización de imágenes y archivos para mejor rendimiento',
            'Configuración de metatags, títulos y descripciones',
            'Estructura de URLs amigables (SEO friendly)',
            'Indexación del sitio en Google Search Console',
            'Integración de Google Analytics',
            'Velocidad de carga optimizada',
            'Buenas prácticas de accesibilidad y estructura semántica',
        ],
    },
];

export const projects = [

    {
        name: 'Alona',
        techs: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'React Lenis'],
        description: 'Proyecto web para empresa lider en maquinaria industrial.',
        image: '/images/projects/alonaproject.png',
        longdescription:
            'Sitio desarrollado con Next.js como framework principal, completamente responsivo y optimizado para SEO. Incluye animaciones fluidas en componentes y transiciones creadas con Framer Motion y GSAP, scroll suave con React Lenis, y formulario de consultas funcional con alertas personalizadas. Implementación de lazy loading y metadatos optimizados para mejorar el rendimiento y posicionamiento web.',
    },

    {
        name: 'Supply Argentina',
        techs: ['React.js', 'Tailwind CSS', 'Strapi', 'PostgreSQL', 'Framer Motion'],
        description: 'Sitio web para empresa líder en productos plásticos industriales.',
        image: '/images/projects/supplyproject.png',
        longdescription:
            'Desarrollado en React.js con estilizado en Tailwind CSS e integración de un CMS personalizado mediante Strapi con base de datos PostgreSQL. El sistema permite al cliente gestionar productos sin conocimientos técnicos, gracias a una interfaz intuitiva. Incluye lógica de carrito tipo e-commerce, formulario para consultas personalizadas, sistema de alertas, animaciones suaves con Framer Motion y optimización SEO completa.',
    },

    {
        name: 'Belyoga Espacio',
        techs: ['React.js', 'Tailwind CSS', 'Framer Motion'],
        description: 'Landing page para espacio de yoga.',
        image: '/images/projects/yogabelproject.png',
        longdescription:
            'Landing responsiva desarrollada en React.js y estilizada con Tailwind CSS, cuidando cada detalle visual para alinearse con la identidad de marca del cliente. Incluye animaciones sutiles con Framer Motion, navegación fluida y estructura optimizada para SEO.',
    },

];
