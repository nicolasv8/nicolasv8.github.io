import imageManifest from "./image-manifest.json"

export const site = {
  name: "La Vida de Nico",
  description:
    "Soy Nicolás Velasco Pérez, Nico: de Medellín, con historias de China y del mundo. Aquí están mis videos, viajes y proyectos.",
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
    href: "https://www.recobratutiempo.com/",
    linkLabel: "Conoce Recobra",
    sourceHref:
      "https://contxto.com/es/colombia/recobra-la-startup-que-busca-recuperar-el-tiempo-perdido-en-la-era-de-la-distraccion-digital/",
    sourceLabel: "La historia en Contxto",
    external: true,
  },
  {
    number: "02",
    category: "Comunidad · Desarrollo global",
    title: "South-North Scholars.",
    description:
      "Una red de jóvenes interesados en desarrollo global. Cofundé su capítulo en Duke Kunshan para acercar estas conversaciones a la universidad.",
    tags: ["Comunidad", "Desarrollo", "Perspectiva global"],
    href: "https://www.southnorthscholars.org/about",
    linkLabel: "Conoce el proyecto",
    sourceHref: "https://www.millenniumfellows.org/fellow/2023/dku/nicol%C3%A1s-velasco-p%C3%A9rez",
    sourceLabel: "Mi perfil en Millennium Fellowship",
    external: true,
  },
  {
    number: "03",
    category: "IA · Herramientas útiles",
    title: "Asistentes y automatización.",
    description:
      "Experimento con asistentes de IA para organizar tareas y hacer más útiles las conversaciones de WhatsApp.",
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
