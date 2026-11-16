import imageManifest from "./image-manifest.json"

export const site = {
  name: "La Vida de Nico",
  description:
    "Soy Nico: de Medellín, con historias de China y del mundo. Aquí están mis videos, mis viajes y mis proyectos.",
  navigation: [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/mapa", label: "Mi mapa" },
    { href: "/videos", label: "Videos" },
    { href: "/writing", label: "Escritos" },
    { href: "/resume", label: "Lo que hago" },
  ],
  socials: [
    {
      href: "https://www.youtube.com/@LaVidadeNicoVP",
      label: "YouTube",
      note: "La vida, en video.",
      icon: "/YT Icon.svg",
    },
    {
      href: "https://www.instagram.com/lavidadenicovp/",
      label: "Instagram",
      note: "Nos vemos por allá.",
      icon: "/Instagram Icon.svg",
    },
    {
      href: "https://www.linkedin.com/in/nicolasvelascoperez/",
      label: "LinkedIn",
      note: "Ideas, proyectos y personas.",
      icon: "/LinkedIn Icon.svg",
    },
  ],
  assets: {
    background: "/images/background.webp",
    foreground: imageManifest.foreground[imageManifest.foreground.length - 1].src,
    foregroundSrcSet: imageManifest.foreground
      .map((image) => `${image.src} ${image.width}w`)
      .join(", "),
    portrait: "/images/nico.webp",
    signature: "/images/signature.webp",
  },
} as const

// Content lives here rather than inside layout and animation components.
// Keep descriptions public-facing; client details and private project data stay out.
export const projects = [
  {
    number: "01",
    category: "Emprendimiento · Atención",
    title: "Recobra tu tiempo.",
    description:
      "Con Damián Duque creé Recobra: una tarjeta física que ayuda a bloquear aplicaciones y recuperar tiempo lejos del celular.",
    tags: ["Emprendimiento", "Bienestar digital", "Producto"],
    href: "https://contxto.com/en/colombia/recobra-the-startup-that-seeks-to-recover-lost-time-in-the-age-of-digital-distraction/",
    linkLabel: "Lee la historia en Contxto",
    external: true,
  },
  {
    number: "02",
    category: "Comunidad · Desarrollo global",
    title: "South-North Scholars.",
    description:
      "Una red estudiantil que cofundé entre Duke y Duke Kunshan para conectar a jóvenes interesados en desarrollo global.",
    tags: ["Comunidad", "Desarrollo", "Perspectiva global"],
    href: "https://www.millenniumfellows.org/fellow/2023/dku/nicol%C3%A1s-velasco-p%C3%A9rez",
    linkLabel: "Conoce el proyecto",
    external: true,
  },
  {
    number: "03",
    category: "IA · Herramientas útiles",
    title: "Del «¿y si…?» al prototipo.",
    description:
      "Construyo y pruebo asistentes de IA y automatizaciones para resolver tareas concretas. Me gusta aprender mientras hago.",
    tags: ["Inteligencia artificial", "Automatización", "Aprender haciendo"],
  },
  {
    number: "04",
    category: "Historias · Video",
    title: "Una vida para contar.",
    description:
      "De las montañas de China a One Young World en Montreal: en La Vida de Nico comparto los lugares, las personas y los aprendizajes que voy encontrando por el camino.",
    tags: ["Video", "Viajes", "Curiosidad"],
    href: "https://www.youtube.com/@LaVidadeNicoVP",
    linkLabel: "Pasar por el canal",
    external: true,
  },
] as const
