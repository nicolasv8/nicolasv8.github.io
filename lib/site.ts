import imageManifest from "./image-manifest.json"

export const site = {
  name: "La Vida de Nico",
  description:
    "Un espacio para lo que escribo, lo que creo y lo que voy construyendo. Bienvenido a La Vida de Nico.",
  navigation: [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
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
    category: "IA · Conversaciones",
    title: "Tecnología que conversa.",
    description:
      "Asistentes de inteligencia artificial y automatización para WhatsApp. Convertir una conversación en una herramienta útil es uno de los problemas que me gusta explorar.",
    tags: ["Inteligencia artificial", "WhatsApp", "Automatización"],
  },
  {
    number: "02",
    category: "Herramientas · Vida cotidiana",
    title: "Más claridad, menos vueltas.",
    description:
      "Un proyecto de asistente para organizar las finanzas personales. Una forma de explorar cómo la tecnología puede ayudar a entender mejor lo cotidiano.",
    tags: ["Finanzas personales", "Asistentes", "Producto"],
  },
  {
    number: "03",
    category: "Internet · Espacio propio",
    title: "La Vida de Nico.",
    description:
      "Este rincón de internet reúne videos, escritos y proyectos. Un espacio propio que puede crecer y cambiar conmigo.",
    tags: ["Next.js", "Diseño web", "Escritura"],
    href: "/about",
    linkLabel: "Conoce la historia",
  },
] as const
