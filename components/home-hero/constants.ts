export const HERO_ASSETS = {
  background: "/Background.png",
  cutout: "/Nico-cutout.png",
  signature: "/Signature.png",
} as const

export const HERO_COPY = {
  welcome: "¡BIENVENIDO!",
  left: "A LA",
  right: "VIDA\u00A0DE",
} as const

export const HERO_CLASSNAMES = {
  section:
    "relative h-screen min-h-[720px] w-full overflow-hidden bg-black md:min-h-[820px] lg:min-h-[740px] xl:min-h-[774px]",
  background: "absolute inset-0 z-0",
  cutout: "absolute inset-0 z-20",
  image: "object-cover object-[53%_50%] md:object-[55%_50%]",
  overlay: "absolute inset-0 bg-black/30",
  container: "relative mx-auto h-full w-full max-w-[1440px]",
  headline:
    "absolute left-1/2 top-[3%] z-10 w-max -translate-x-1/2 text-center font-sans text-[clamp(2.3rem,11vw,4.8rem)] font-black uppercase leading-none tracking-[-0.05em] text-white drop-shadow-2xl md:top-[3.5%] md:text-[clamp(4.75rem,10vw,6.8rem)] lg:left-[51.5%] lg:top-[2.5%] lg:text-[clamp(6.4rem,8.2vw,8.3rem)] lg:tracking-[-0.06em] xl:left-[52.5%] xl:-top-[2%] xl:text-[10.75rem]",
  sideRow: "absolute inset-x-0 top-[10%] z-30 md:top-[31%] lg:top-[29.5%] xl:top-[25%]",
  sideText:
    "absolute whitespace-nowrap font-bold uppercase text-white drop-shadow-lg text-[clamp(1.2rem,5.5vw,1.95rem)] md:text-[clamp(2.15rem,4.75vw,3rem)] lg:text-[clamp(3rem,3.8vw,3.8rem)]",
  ala: "right-1/2 top-0 mr-[1.5rem] tracking-[0.16em] md:-top-[1rem] md:top-[0.2rem] md:mr-[clamp(12.5rem,20vw,15.5rem)] lg:top-[0.4rem] lg:mr-[clamp(18rem,24vw,20rem)] lg:tracking-[0.14em] xl:top-0 xl:mr-[23rem] xl:text-[4.75rem]",
  vidaDe:
    "left-1/2 top-[0.1rem] ml-[1.5rem] tracking-[0.12em] md:-top-[0.8rem] md:top-[0.35rem] md:ml-[clamp(12.5rem,20vw,15.5rem)] lg:top-[0.55rem] lg:ml-[clamp(18rem,24vw,20.5rem)] lg:tracking-[0.12em] xl:top-0 xl:ml-[20rem] xl:text-[4.75rem]",
  signature:
    "pointer-events-none absolute left-1/2 top-[62%] z-50 h-[18rem] w-[60rem] -translate-x-1/2 xs:h-[21rem] xs:w-[72rem] md:top-[53%] md:h-[clamp(16rem,24vw,20rem)] md:w-[clamp(56rem,160vw,72rem)] lg:top-[51%] lg:h-[clamp(24rem,32vw,30rem)] lg:w-[clamp(104rem,146vw,132rem)] xl:top-[48%] xl:h-[39rem] xl:w-[162rem]",
  signatureImage: "object-contain drop-shadow-2xl",
  transparentIconBox:
    "flex h-[7rem] w-[7rem] items-center justify-center rounded-2xl bg-transparent transition-all duration-300 group-hover:scale-110 md:h-[clamp(6.7rem,16vw,8.2rem)] md:w-[clamp(6.7rem,16vw,8.2rem)] lg:h-[clamp(7.4rem,10vw,9.2rem)] lg:w-[clamp(7.4rem,10vw,9.2rem)] xl:h-[10rem] xl:w-[10rem]",
  floatingIconGlyph:
    "h-[3.6rem] w-[3.6rem] md:h-[clamp(2.7rem,6.8vw,3.6rem)] md:w-[clamp(2.7rem,6.8vw,3.6rem)] lg:h-[clamp(3.1rem,5vw,3.9rem)] lg:w-[clamp(3.1rem,5vw,3.9rem)] xl:h-[5rem] xl:w-[5rem]",
  floatingLinkWrapper: "absolute z-[60]",
  floatingLinkAnchor: "group relative flex items-center justify-center",
  floatingLabel:
    "absolute -bottom-8 whitespace-nowrap rounded-full bg-black/70 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
  writingIcon:
    "right-1/2 top-[42%] mr-[3.75rem] xs:mr-[4.5rem] md:left-[12.5%] md:top-[40%] md:right-auto md:mr-0 lg:left-[19.5%] lg:top-[44.5%] xl:left-[18.25%] xl:top-[43.5%]",
  resumeIcon:
    "right-1/2 top-[55%] mr-[4rem] xs:mr-[5rem] md:left-[13.5%] md:top-[61.5%] md:right-auto md:mr-0 lg:left-[20.5%] lg:top-[63.5%] xl:left-[20.25%] xl:top-[62.25%]",
  youtubeIcon:
    "left-1/2 top-[42%] ml-[3.75rem] xs:ml-[4.5rem] md:right-[12%] md:top-[40.5%] md:left-auto md:ml-0 lg:right-[19.75%] lg:top-[45%] xl:right-[18%] xl:top-[43.5%]",
  instagramIcon:
    "left-1/2 top-[55%] ml-[4rem] xs:ml-[5rem] md:right-[13%] md:top-[61.75%] md:left-auto md:ml-0 lg:right-[20.5%] lg:top-[64%] xl:right-[20%] xl:top-[62.75%]",
} as const

export const HERO_MOTION = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
} as const

type FloatingEmojiIcon = {
  kind: "emoji"
  character: string
  className: string
}

type FloatingImageIcon = {
  kind: "image"
  src: string
  alt: string
  className: string
}

type FloatingLinkIcon = FloatingEmojiIcon | FloatingImageIcon

export type FloatingLinkDefinition = {
  href: string
  label: string
  className: string
  boxClassName: string
  rotation: number
  delay: number
  duration: number
  icon: FloatingLinkIcon
  external?: boolean
}

export const FLOATING_LINKS = [
  {
    href: "/writing",
    label: "Writing",
    className: HERO_CLASSNAMES.writingIcon,
    boxClassName: HERO_CLASSNAMES.transparentIconBox,
    rotation: 8,
    delay: 1.2,
    duration: 5.587823,
    icon: {
      kind: "emoji",
      character: "📝",
      className: "text-[4.4rem] leading-none md:text-[5rem] lg:text-[6rem] xl:text-[7rem]",
    },
  },
  {
    href: "/resume",
    label: "Resume",
    className: HERO_CLASSNAMES.resumeIcon,
    boxClassName: HERO_CLASSNAMES.transparentIconBox,
    rotation: -6,
    delay: 1.3,
    duration: 5.050998,
    icon: {
      kind: "emoji",
      character: "💼",
      className: "text-[5rem] leading-none md:text-[6.25rem] lg:text-[7.5rem] xl:text-[8.75rem]",
    },
  },
  {
    href: "https://www.youtube.com/@LaVidadeNicoVP",
    label: "YouTube",
    className: HERO_CLASSNAMES.youtubeIcon,
    boxClassName: HERO_CLASSNAMES.transparentIconBox,
    rotation: 6,
    delay: 1.4,
    duration: 4.70367,
    external: true,
    icon: {
      kind: "image",
      src: "/YT Icon.svg",
      alt: "YouTube",
      className: `${HERO_CLASSNAMES.floatingIconGlyph} scale-[1.5] md:scale-[1.8]`,
    },
  },
  {
    href: "https://www.instagram.com/lavidadenicovp/",
    label: "Instagram",
    className: HERO_CLASSNAMES.instagramIcon,
    boxClassName: HERO_CLASSNAMES.transparentIconBox,
    rotation: -8,
    delay: 1.5,
    duration: 5.926112,
    external: true,
    icon: {
      kind: "image",
      src: "/Instagram Icon.svg",
      alt: "Instagram",
      className: `${HERO_CLASSNAMES.floatingIconGlyph} scale-[1.05] md:scale-[1.25]`,
    },
  },
] satisfies readonly FloatingLinkDefinition[]
