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
  rotation: number
  delay: number
  external?: boolean
}

function FloatingIcon({
  href,
  icon,
  label,
  className,
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
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 md:h-16 md:w-16 xl:h-20 xl:w-20">
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

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-black xl:min-h-[774px]">
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
      <div className="relative flex h-full flex-col items-center justify-between px-6 py-8 md:px-12 md:py-12 lg:block">
        {/* Main Headline */}
        <motion.h1
          className="relative z-10 -mt-8 text-center font-sans text-5xl font-black uppercase tracking-tight text-white drop-shadow-2xl md:-mt-6 md:text-7xl lg:absolute lg:left-1/2 lg:top-[0.5%] lg:mt-0 lg:w-max lg:-translate-x-1/2 lg:text-[8rem] lg:leading-none lg:tracking-[-0.06em] xl:left-[49.1%] xl:-top-[2%] xl:text-[10.75rem]"
          {...fadeIn}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
        >
          {"¡BIENVENIDO!"}
        </motion.h1>

        {/* Middle Text Row */}
        <div className="relative z-30 -mt-24 flex w-full max-w-4xl items-center justify-between px-4 md:-mt-32 md:px-6 lg:absolute lg:inset-x-0 lg:top-[35%] lg:mt-0 lg:max-w-none lg:px-0 xl:top-[33.5%]">
          <motion.span
            className="ml-4 text-4xl font-bold uppercase tracking-widest text-white drop-shadow-lg md:ml-8 md:text-5xl lg:absolute lg:left-[20.5%] lg:top-0 lg:text-[3.75rem] lg:tracking-[0.14em] xl:left-[22.5%] xl:text-[4.75rem]"
            {...slideUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.7 }}
          >
            A LA
          </motion.span>
          <motion.span
            className="text-4xl font-bold uppercase tracking-widest text-white drop-shadow-lg md:text-5xl lg:absolute lg:right-[14.5%] lg:top-0 lg:text-[3.75rem] lg:tracking-[0.12em] xl:right-[16.25%] xl:text-[4.75rem]"
            {...slideUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.8 }}
          >
            VIDA DE
          </motion.span>
        </div>

        {/* Signature */}
        <motion.div
          className="relative z-50 -mt-24 h-[36rem] w-[60rem] md:-mt-40 md:h-[54rem] md:w-[96rem] lg:absolute lg:left-1/2 lg:top-[50%] lg:mt-0 lg:h-[31.5rem] lg:w-[132rem] lg:-translate-x-1/2 xl:top-[48%] xl:h-[39rem] xl:w-[162rem]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 1 }}
        >
          <Image
            src={SIGNATURE_URL}
            alt="Nico signature"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 512px, (max-width: 1366px) 864px, 960px"
          />
        </motion.div>
      </div>

      {/* Floating Navigation Icons */}
      {/* Writing Icon - Upper Left */}
      <FloatingIcon
        href="/writing"
        icon={<PenLine className="h-7 w-7 text-white md:h-8 md:w-8 xl:h-10 xl:w-10" />}
        label="Writing"
        className="left-[8%] top-[42%] md:left-[12%] md:top-[38%] lg:left-[15.5%] lg:top-[45%] xl:left-[18.25%] xl:top-[43.5%]"
        rotation={8}
        delay={1.2}
      />

      {/* Resume Icon - Lower Left */}
      <FloatingIcon
        href="/resume"
        icon={<Briefcase className="h-7 w-7 text-white md:h-8 md:w-8 xl:h-10 xl:w-10" />}
        label="Resume"
        className="left-[6%] top-[62%] md:left-[10%] md:top-[58%] lg:left-[17.25%] lg:top-[64.5%] xl:left-[20.25%] xl:top-[62.25%]"
        rotation={-6}
        delay={1.3}
      />

      {/* YouTube Icon - Upper Right */}
      <FloatingIcon
        href="https://www.youtube.com/@LaVidadeNicoVP"
        icon={<Youtube className="h-7 w-7 text-white md:h-8 md:w-8 xl:h-10 xl:w-10" />}
        label="YouTube"
        className="right-[8%] top-[42%] md:right-[12%] md:top-[38%] lg:right-[16%] lg:top-[45.5%] xl:right-[18%] xl:top-[43.5%]"
        rotation={6}
        delay={1.4}
        external
      />

      {/* Instagram Icon - Lower Right */}
      <FloatingIcon
        href="https://www.instagram.com/lavidadenicovp/"
        icon={<Instagram className="h-7 w-7 text-white md:h-8 md:w-8 xl:h-10 xl:w-10" />}
        label="Instagram"
        className="right-[6%] top-[62%] md:right-[10%] md:top-[58%] lg:right-[17.75%] lg:top-[65%] xl:right-[20%] xl:top-[62.75%]"
        rotation={-8}
        delay={1.5}
        external
      />
    </section>
  )
}
