// Static variants are needed because the site is exported without an image server.
export const homeImages = {
  portrait: {
    src: "/images/home/nico-800.webp",
    srcSet:
      "/images/home/nico-400.webp 400w, /images/home/nico-800.webp 800w, /images/home/nico-1200.webp 1200w, /images/nico.webp 1600w",
    sizes: "(max-width: 720px) 65vw, (max-width: 950px) 35vw, 440px",
  },
  london: {
    src: "/images/home/londres-640.webp",
    srcSet:
      "/images/home/londres-320.webp 320w, /images/home/londres-640.webp 640w, /images/home/londres-960.webp 960w, /images/travel/londres.webp 1600w",
  },
} as const
