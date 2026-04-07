"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HERO_ASSETS, HERO_CLASSNAMES, HERO_COPY, HERO_MOTION } from "./constants"

type HeroHeadingProps = {
  shouldReduceMotion: boolean
}

export function HeroHeading({ shouldReduceMotion }: HeroHeadingProps) {
  return (
    <>
      <motion.h1
        className={HERO_CLASSNAMES.headline}
        {...HERO_MOTION.fadeIn}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : 0.5,
        }}
      >
        {HERO_COPY.welcome}
      </motion.h1>

      <div className={HERO_CLASSNAMES.sideRow}>
        <motion.span
          className={`${HERO_CLASSNAMES.sideText} ${HERO_CLASSNAMES.ala}`}
          {...HERO_MOTION.slideUp}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.7,
          }}
        >
          {HERO_COPY.left}
        </motion.span>
        <motion.span
          className={`${HERO_CLASSNAMES.sideText} ${HERO_CLASSNAMES.vidaDe}`}
          {...HERO_MOTION.slideUp}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.8,
          }}
        >
          {HERO_COPY.right}
        </motion.span>
      </div>

      <motion.div
        className={HERO_CLASSNAMES.signature}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : 1,
        }}
      >
        <Image
          src={HERO_ASSETS.signature}
          alt="Nico signature"
          fill
          className={HERO_CLASSNAMES.signatureImage}
          sizes="(max-width: 767px) 95vw, (max-width: 1023px) 84vw, (max-width: 1279px) 78vw, 72vw"
        />
      </motion.div>
    </>
  )
}
