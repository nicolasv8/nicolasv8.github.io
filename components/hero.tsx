"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { PenLine, Briefcase, Youtube, Instagram } from "lucide-react"

const BACKGROUND_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-full-Sks8rYk9gG6hVt26okvwUoNmfLrDxh.png"
const CUTOUT_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nico-cutout-9u6KbqAanTRhADb9Hdlus0LpWAA3iJ.png"
const SIGNATURE_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nico-signature-uVGFAF5G6zWQZIx38POii2kIvWppyp.png"

interface FloatingIconProps {
  href: string
  icon: React.ReactNode
  label: string
  className: string
  boxClassName: string
  rotation: number
  delay: number
  external?: boolean
}

function FloatingIcon({
  href,
  icon,
  label,
  className,
  boxClassName,
  rotation,
  delay,
  external = false,
}: FloatingIconProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: shouldReduceMotion ? 0 : delay, duration: 0.5 }}
      className={`absolute z-40 ${className}`}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -8, 0],
                rotate: [rotation - 2, rotation + 2, rotation - 2],
              }
        }
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ rotate: rotation }}
      >
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group relative flex items-center justify-center"
          aria-label={label}
        >
          <div className={boxClassName}>
            {icon}
          </div>
          <span className="absolute -bottom-8 whitespace-nowrap rounded-full bg-black/70 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {label}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  const slideUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  }

  const floatingIconBoxClass =
    "flex h-[clamp(2.9rem,11vw,3.4rem)] w-[clamp(2.9rem,11vw,3.4rem)] items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 md:h-[clamp(3.35rem,8vw,4.1rem)] md:w-[clamp(3.35rem,8vw,4.1rem)] lg:h-[clamp(3.7rem,5vw,4.6rem)] lg:w-[clamp(3.7rem,5vw,4.6rem)] xl:h-[5rem] xl:w-[5rem]"
  const floatingIconGlyphClass =
    "h-[clamp(1.15rem,4.2vw,1.45rem)] w-[clamp(1.15rem,4.2vw,1.45rem)] md:h-[clamp(1.35rem,3.4vw,1.8rem)] md:w-[clamp(1.35rem,3.4vw,1.8rem)] lg:h-[clamp(1.55rem,2.5vw,1.95rem)] lg:w-[clamp(1.55rem,2.5vw,1.95rem)] xl:h-10 xl:w-10"
  const headlineClass =
    "absolute left-1/2 top-[3.75%] z-10 w-max -translate-x-1/2 text-center font-sans text-[clamp(2.65rem,12vw,4.8rem)] font-black uppercase leading-none tracking-[-0.05em] text-white drop-shadow-2xl md:top-[3.5%] md:text-[clamp(4.75rem,10vw,6.8rem)] lg:left-[51.5%] lg:top-[2.5%] lg:text-[clamp(6.4rem,8.2vw,8.3rem)] lg:tracking-[-0.06em] xl:left-[52.5%] xl:-top-[2%] xl:text-[10.75rem]"
  const sideRowClass = "absolute inset-x-0 top-[33.5%] z-30 md:top-[31%] lg:top-[29.5%] xl:top-[25%]"
  const sideTextClass =
    "absolute font-bold uppercase text-white drop-shadow-lg text-[clamp(1.35rem,6vw,1.95rem)] md:text-[clamp(2.15rem,4.75vw,3rem)] lg:text-[clamp(3rem,3.8vw,3.8rem)]"
  const alaClass =
    "left-[9.5%] top-0 tracking-[0.16em] md:left-[13.5%] md:top-[0.2rem] lg:left-[30%] lg:top-[0.4rem] lg:tracking-[0.14em] xl:left-[27.5%] xl:top-0 xl:text-[4.75rem]"
  const vidaDeClass =
    "right-[7.5%] top-[0.1rem] tracking-[0.12em] md:right-[12.5%] md:top-[0.35rem] lg:right-[20.5%] lg:top-[0.55rem] lg:tracking-[0.12em] xl:right-[18.25%] xl:top-0 xl:text-[4.75rem]"
  const signatureClass =
    "absolute left-1/2 top-[55.5%] z-50 h-[clamp(8rem,18vw,10rem)] w-[clamp(28rem,130vw,36rem)] -translate-x-1/2 md:top-[53%] md:h-[clamp(12rem,19vw,16rem)] md:w-[clamp(48rem,150vw,72rem)] lg:top-[51%] lg:h-[clamp(24rem,32vw,30rem)] lg:w-[clamp(104rem,146vw,132rem)] xl:top-[48%] xl:h-[39rem] xl:w-[162rem]"
  const writingIconClass =
    "left-[15%] top-[41.5%] md:left-[12.5%] md:top-[40%] lg:left-[19.5%] lg:top-[44.5%] xl:left-[18.25%] xl:top-[43.5%]"
  const bagIconClass =
    "left-[15.5%] top-[60%] md:left-[13.5%] md:top-[61.5%] lg:left-[20.5%] lg:top-[63.5%] xl:left-[20.25%] xl:top-[62.25%]"
  const youtubeIconClass =
    "right-[14.5%] top-[42%] md:right-[12%] md:top-[40.5%] lg:right-[19.75%] lg:top-[45%] xl:right-[18%] xl:top-[43.5%]"
  const instagramIconClass =
    "right-[15%] top-[60.5%] md:right-[13%] md:top-[61.75%] lg:right-[20.5%] lg:top-[64%] xl:right-[20%] xl:top-[62.75%]"

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black md:min-h-[820px] lg:min-h-[740px] xl:min-h-[774px]">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1 }}
      >
        <Image
          src={BACKGROUND_URL}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Nico Cutout Overlay */}
      <motion.div
        className="absolute inset-0 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.3,
        }}
      >
        <Image
          src={CUTOUT_URL}
          alt="Nico"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative h-full w-full">
        {/* Main Headline */}
        <motion.h1
          className={headlineClass}
          {...fadeIn}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
        >
          {"¡BIENVENIDO!"}
        </motion.h1>

        {/* Middle Text Row */}
        <div className={sideRowClass}>
          <motion.span
            className={`${sideTextClass} ${alaClass}`}
            {...slideUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.7 }}
          >
            A LA
          </motion.span>
          <motion.span
            className={`${sideTextClass} ${vidaDeClass}`}
            {...slideUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.8 }}
          >
            VIDA DE
          </motion.span>
        </div>

        {/* Signature */}
        <motion.div
          className={signatureClass}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 1 }}
        >
          <Image
            src={SIGNATURE_URL}
            alt="Nico signature"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 767px) 95vw, (max-width: 1023px) 84vw, (max-width: 1279px) 78vw, 72vw"
          />
        </motion.div>
      </div>

      {/* Floating Navigation Icons */}
      {/* Writing Icon - Upper Left */}
      <FloatingIcon
        href="/writing"
        icon={<PenLine className={`${floatingIconGlyphClass} text-white`} />}
        label="Writing"
        className={writingIconClass}
        boxClassName={floatingIconBoxClass}
        rotation={8}
        delay={1.2}
      />

      {/* Resume Icon - Lower Left */}
      <FloatingIcon
        href="/resume"
        icon={<Briefcase className={`${floatingIconGlyphClass} text-white`} />}
        label="Resume"
        className={bagIconClass}
        boxClassName={floatingIconBoxClass}
        rotation={-6}
        delay={1.3}
      />

      {/* YouTube Icon - Upper Right */}
      <FloatingIcon
        href="https://www.youtube.com/@LaVidadeNicoVP"
        icon={<Youtube className={`${floatingIconGlyphClass} text-white`} />}
        label="YouTube"
        className={youtubeIconClass}
        boxClassName={floatingIconBoxClass}
        rotation={6}
        delay={1.4}
        external
      />

      {/* Instagram Icon - Lower Right */}
      <FloatingIcon
        href="https://www.instagram.com/lavidadenicovp/"
        icon={<Instagram className={`${floatingIconGlyphClass} text-white`} />}
        label="Instagram"
        className={instagramIconClass}
        boxClassName={floatingIconBoxClass}
        rotation={-8}
        delay={1.5}
        external
      />
    </section>
  )
}
