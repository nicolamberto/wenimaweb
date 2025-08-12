import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";

export const links = [
    {
        name: 'inicio',
        href: '#inicio',
        icon:'/images/text-icons/servicio2.webp'
    },
    {
        name: 'nosotros',
        href: '#nosotros',
        icon:'/images/text-icons/servicio4.webp'
    },
    {
        name: 'servicios',
        href: '#servicios',
        icon:'/images/text-icons/servicio3.webp'
    },
    {
        name: 'proyectos',
        href: '#proyectos',
        icon:'/images/text-icons/servicio5.webp'
    },
    {
        name: 'contacto',
        href: '#contacto',
        icon:'/images/text-icons/servicio3.webp'
    },
]

export const participantes = [
    {
        name: 'Nicolás Lamberto',
        role: 'Web Developer',
        image: '/images/participants/nico.webp'
    },
    {
        name: 'Martina Daniele',
        role: 'Ui/UX Designer',
        image: '/images/participants/marti.webp'
    },
    {
        name: 'Pablo Martin Sans',
        role: 'Marketing Strategist',
        image: '/images/participants/pablo.webp'
    },
]

export const services = [
    {
        title: 'Diseño Web',
        iconText: '/images/text-icons/servicio4.webp',
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
        iconText: '/images/text-icons/servicio2.webp',
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
        title: 'Identidad Visual',
        iconText: '/images/text-icons/servicio3.webp',
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
        iconText: '/images/text-icons/servicio4.webp',
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
        iconText: '/images/text-icons/servicio5.webp',
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
        name: 'ALOÑA',
        techs: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'React Lenis'],
        description: 'Rediseño web para una marca industrial con historia.',
        image: '/images/projects/alonaproject.png',
        longdescription:
            'ALOÑA es una fábrica argentina con más de 40 años en el rubro textil. En este proyecto, rediseñamos por completo su sitio web institucional para transmitir modernidad, innovación y trayectoria. A partir de una paleta sólida y un enfoque visual atractivo, creamos una experiencia clara y dinámica que posiciona a la marca como líder en su sector. Incluimos animaciones suaves y una estructura adaptable a futuras expansiones.',
    },

    {
        name: 'Supply',
        techs: ['React.js', 'Tailwind CSS', 'Strapi', 'PostgreSQL', 'Framer Motion'],
        description: 'Presencia digital para una fábrica industrial.',
        image: '/images/projects/supplyproject.png',
        longdescription:
            'Rediseñamos y desarrollamos la web institucional de Supply, una fábrica de productos plásticos industriales con más de 30 años de trayectoria. Creamos una estética moderna, limpia y funcional, alineada con su perfil corporativo, para presentar sus líneas de productos de manera ordenada y profesional. El sitio refleja su solidez como empresa y está optimizado para consultas rápidas desde cualquier dispositivo.',
    },

    {
        name: 'Bel Yoga',
        techs: ['React.js', 'Tailwind CSS', 'Framer Motion'],
        description: 'Identidad y presencia digital para un estudio de yoga.',
        image: '/images/projects/yogabelproject.png',
        longdescription:
            'Diseñamos y desarrollamos la página web de Bel Yoga Espacio, un estudio enfocado en el bienestar integral a través del yoga. Creamos una identidad visual serena y femenina, alineada con su esencia, y desarrollamos una web autogestionable que comunica con claridad su propuesta de valor, horarios y servicios. El resultado: una presencia digital cálida, ordenada y profesional.',
    },

];





export const contact = [
    {
        icon: <FaPhoneAlt />,
        text: '+549 351 325 7548',
    },
    {
        icon: <FaLocationDot />,
        text: 'Barcelona, España',
    },
    {
        icon: <TbMailFilled />,
        text: 'wenima.estudio@gmail.com',
    },
    {
        icon: <AiFillInstagram />,
        text: 'wenima.estudio',
    },
]