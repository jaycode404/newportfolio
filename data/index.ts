export const navItems = [
  { name: "Info", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Reviews", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Priorizamos los intereses del cliente para adaptarlos a las tecnologías que usamos",
    description: "",
    className:
      "lg:col-span-4 md:col-span-6 md:row-span-4 lg:row-span-3 lg:min-h-[50vh]", // Ocupa más ancho y ajusta la altura
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Descuida, trabajamos a distancia!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:row-span-2", // Ajuste en altura en pantallas grandes
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Usamos las tecnologías más actualizdas",
    description: "Siempre mejorando",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:row-span-1", // Similar al anterior para balancear
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Con pasión por los negocios y el desarrollo Tech",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1 lg:row-span-2", // Consistencia en tamaño
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actualmente ayudando a los negocios a crecer a través de la Web",
    description: "Nuestro enfoque?",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:row-span-2", // Se mantiene el span para no romper la fila
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Listo para comenzar tu proyecto?",
    description: "",
    className: "lg:col-span-6 md:col-span-3 md:row-span-1 lg:row-span-2", // Acomoda en pantallas grandes para llenar el ancho
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Aplicación De citas para Salon",
    des: "Aumenta tus ventas con pagina web y app incluida para reservación de citas.",
    img: "/p1.webp",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com",
  },
  {
    id: 2,
    title: "Web App para Administrar",
    des: "App Web para administración de propiedades, empleados o cualquier campo que necesites",
    img: "/p2.webp",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com",
  },
  {
    id: 3,
    title: "Landing para restaurant",
    des: "Interfaz moderna, completa y con ChatBot para ahorrar tiempo y aumentar ventas",
    img: "/p3.webp",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/",
  },
  {
    id: 4,
    title: "Landing De Veterinaria",
    des: "Sitio para veterinaria con chat de WhatsApp con diseño personalizada.",
    img: "/p4.webp",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Programador FullStack",
    desc: "Dominio en las tecnologías web, en el FrontEnd y Backend. Además de una visión innovadora en cada proyecto.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Enfoque y crecimiento en Negocios",
    desc: "Crecer a través de la tecnología web para aumentar las ventas es nuestro interés.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Ideas y Diseño",
    desc: "Orientación de los proyectos con ideas nuevas, de punta. Todo pensado para la mejora de los clientes",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Equipo en el Movimiento",
    desc: "Somos un equipo estructurado para llevar a la realidad la mejor solución para ti.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jaycode404",
  },

  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jacob-flores-code/",
  },
];
