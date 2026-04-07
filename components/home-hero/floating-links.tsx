"use client"

import { FLOATING_LINKS } from "./constants"
import { FloatingLink } from "./floating-link"

type FloatingLinksProps = {
  shouldReduceMotion: boolean
}

export function FloatingLinks({ shouldReduceMotion }: FloatingLinksProps) {
  return (
    <>
      {FLOATING_LINKS.map((link) => (
        <FloatingLink key={link.label} link={link} shouldReduceMotion={shouldReduceMotion} />
      ))}
    </>
  )
}
