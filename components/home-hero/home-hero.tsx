"use client"

import { useReducedMotion } from "framer-motion"
import { HERO_CLASSNAMES } from "./constants"
import { FloatingLinks } from "./floating-links"
import { HeroBackdrop } from "./hero-backdrop"
import { HeroHeading } from "./hero-heading"

export function Hero() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section className={HERO_CLASSNAMES.section}>
      <HeroBackdrop shouldReduceMotion={shouldReduceMotion} />

      <div className={HERO_CLASSNAMES.container}>
        <HeroHeading shouldReduceMotion={shouldReduceMotion} />
        <FloatingLinks shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  )
}
