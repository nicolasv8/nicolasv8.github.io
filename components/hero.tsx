"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"



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
      className={`absolute z-[60] ${className}`}
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
  const transparentBoxClass =
    "flex h-[7rem] w-[7rem] items-center justify-center rounded-2xl bg-transparent transition-all duration-300 group-hover:scale-110 md:h-[clamp(6.7rem,16vw,8.2rem)] md:w-[clamp(6.7rem,16vw,8.2rem)] lg:h-[clamp(7.4rem,10vw,9.2rem)] lg:w-[clamp(7.4rem,10vw,9.2rem)] xl:h-[10rem] xl:w-[10rem]"
  const floatingIconGlyphClass =
    "h-[3.6rem] w-[3.6rem] md:h-[clamp(2.7rem,6.8vw,3.6rem)] md:w-[clamp(2.7rem,6.8vw,3.6rem)] lg:h-[clamp(3.1rem,5vw,3.9rem)] lg:w-[clamp(3.1rem,5vw,3.9rem)] xl:h-[5rem] xl:w-[5rem]"
  const headlineClass =
    "absolute left-1/2 top-[3%] z-10 w-max -translate-x-1/2 text-center font-sans text-[clamp(2.3rem,11vw,4.8rem)] font-black uppercase leading-none tracking-[-0.05em] text-white drop-shadow-2xl md:top-[3.5%] md:text-[clamp(4.75rem,10vw,6.8rem)] lg:left-[51.5%] lg:top-[2.5%] lg:text-[clamp(6.4rem,8.2vw,8.3rem)] lg:tracking-[-0.06em] xl:left-[52.5%] xl:-top-[2%] xl:text-[10.75rem]"
  const sideRowClass = "absolute inset-x-0 top-[10%] z-30 md:top-[31%] lg:top-[29.5%] xl:top-[25%]"
  const sideTextClass =
    "absolute font-bold uppercase whitespace-nowrap text-white drop-shadow-lg text-[clamp(1.2rem,5.5vw,1.95rem)] md:text-[clamp(2.15rem,4.75vw,3rem)] lg:text-[clamp(3rem,3.8vw,3.8rem)]"
  const alaClass =
    "right-1/2 top-0 mr-[1.5rem] tracking-[0.16em] md:-top-[1rem] md:mr-[clamp(12.5rem,20vw,15.5rem)] md:top-[0.2rem] lg:mr-[clamp(18rem,24vw,20rem)] lg:top-[0.4rem] lg:tracking-[0.14em] xl:mr-[23rem] xl:top-0 xl:text-[4.75rem]"
  const vidaDeClass =
    "left-1/2 top-[0.1rem] ml-[1.5rem] tracking-[0.12em] md:-top-[0.8rem] md:ml-[clamp(12.5rem,20vw,15.5rem)] md:top-[0.35rem] lg:ml-[clamp(18rem,24vw,20.5rem)] lg:top-[0.55rem] lg:tracking-[0.12em] xl:ml-[20rem] xl:top-0 xl:text-[4.75rem]"
  const signatureClass =
    "pointer-events-none absolute left-1/2 top-[62%] z-50 h-[18rem] w-[60rem] xs:h-[21rem] xs:w-[72rem] -translate-x-1/2 md:top-[53%] md:h-[clamp(16rem,24vw,20rem)] md:w-[clamp(56rem,160vw,72rem)] lg:top-[51%] lg:h-[clamp(24rem,32vw,30rem)] lg:w-[clamp(104rem,146vw,132rem)] xl:top-[48%] xl:h-[39rem] xl:w-[162rem]"
  const writingIconClass =
    "right-1/2 top-[42%] mr-[3.75rem] xs:mr-[4.5rem] md:right-auto md:mr-0 md:left-[12.5%] md:top-[40%] lg:left-[19.5%] lg:top-[44.5%] xl:left-[18.25%] xl:top-[43.5%]"
  const bagIconClass =
    "right-1/2 top-[55%] mr-[4rem] xs:mr-[5rem] md:right-auto md:mr-0 md:left-[13.5%] md:top-[61.5%] lg:left-[20.5%] lg:top-[63.5%] xl:left-[20.25%] xl:top-[62.25%]"
  const youtubeIconClass =
    "left-1/2 top-[42%] ml-[3.75rem] xs:ml-[4.5rem] md:left-auto md:ml-0 md:right-[12%] md:top-[40.5%] lg:right-[19.75%] lg:top-[45%] xl:right-[18%] xl:top-[43.5%]"
  const instagramIconClass =
    "left-1/2 top-[55%] ml-[4rem] xs:ml-[5rem] md:left-auto md:ml-0 md:right-[13%] md:top-[61.75%] lg:right-[20.5%] lg:top-[64%] xl:right-[20%] xl:top-[62.75%]"

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black md:min-h-[820px] lg:min-h-[740px] xl:min-h-[774px]">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1 }}
      >
        <div className="absolute inset-0 scale-[0.85] md:scale-100">
          <Image
            src="/Background.png"
            alt=""
            fill
            priority
            className="object-cover object-[53%_50%] md:object-[55%_50%]"
            sizes="100vw"
          />
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
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
        <div className="absolute inset-0 scale-[0.85] md:scale-100">
          <Image
            src="/Nico-cutout.png"
            alt="Nico"
            fill
            priority
            className="object-cover object-[53%_50%] md:object-[55%_50%]"
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
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
            VIDA&nbsp;DE
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
            src="/Signature.png"
            alt="Nico signature"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 767px) 95vw, (max-width: 1023px) 84vw, (max-width: 1279px) 78vw, 72vw"
          />
        </motion.div>

      {/* Floating Navigation Icons */}
      {/* Writing Icon - Upper Left */}
      <FloatingIcon
        href="/writing"
        icon={<span className="text-[4.4rem] leading-none md:text-[5rem] lg:text-[6rem] xl:text-[7rem]">📝</span>}
        label="Writing"
        className={writingIconClass}
        boxClassName={transparentBoxClass}
        rotation={8}
        delay={1.2}
      />

      {/* Resume Icon - Lower Left */}
      <FloatingIcon
        href="/resume"
        icon={<span className="text-[5rem] leading-none md:text-[6.25rem] lg:text-[7.5rem] xl:text-[8.75rem]">💼</span>}
        label="Resume"
        className={bagIconClass}
        boxClassName={transparentBoxClass}
        rotation={-6}
        delay={1.3}
      />

      {/* YouTube Icon - Upper Right */}
      <FloatingIcon
        href="https://www.youtube.com/@LaVidadeNicoVP"
        icon={<img src="/YT Icon.svg" alt="YouTube" className={`${floatingIconGlyphClass} scale-[1.5] md:scale-[1.8]`} />}
        label="YouTube"
        className={youtubeIconClass}
        boxClassName={transparentBoxClass}
        rotation={6}
        delay={1.4}
        external
      />

      {/* Instagram Icon - Lower Right */}
      <FloatingIcon
        href="https://www.instagram.com/lavidadenicovp/"
        icon={<img src="/Instagram Icon.svg" alt="Instagram" className={`${floatingIconGlyphClass} scale-[1.05] md:scale-[1.25]`} />}
        label="Instagram"
        className={instagramIconClass}
        boxClassName={transparentBoxClass}
        rotation={-8}
        delay={1.5}
        external
      />
      </div>
    </section>
  )
}
