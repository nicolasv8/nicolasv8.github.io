"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HERO_ASSETS, HERO_CLASSNAMES } from "./constants"

type HeroBackdropProps = {
  shouldReduceMotion: boolean
}

export function HeroBackdrop({ shouldReduceMotion }: HeroBackdropProps) {
  return (
    <>
      <motion.div
        className={HERO_CLASSNAMES.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1 }}
      >
        <Image
          src={HERO_ASSETS.background}
          alt=""
          fill
          priority
          className={HERO_CLASSNAMES.image}
          sizes="100vw"
        />
        <div className={HERO_CLASSNAMES.overlay} />
      </motion.div>

      <motion.div
        className={HERO_CLASSNAMES.cutout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.3,
        }}
      >
        <Image
          src={HERO_ASSETS.cutout}
          alt="Nico"
          fill
          priority
          className={HERO_CLASSNAMES.image}
          sizes="100vw"
        />
      </motion.div>
    </>
  )
}
