"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { type FloatingLinkDefinition, HERO_CLASSNAMES } from "./constants"

type FloatingLinkProps = {
  link: FloatingLinkDefinition
  shouldReduceMotion: boolean
}

function FloatingLinkIcon({ icon }: { icon: FloatingLinkDefinition["icon"] }) {
  if (icon.kind === "emoji") {
    return <span className={icon.className}>{icon.character}</span>
  }

  return <img src={icon.src} alt={icon.alt} className={icon.className} />
}

export function FloatingLink({ link, shouldReduceMotion }: FloatingLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: shouldReduceMotion ? 0 : link.delay, duration: 0.5 }}
      className={`${HERO_CLASSNAMES.floatingLinkWrapper} ${link.className}`}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -8, 0],
                rotate: [link.rotation - 2, link.rotation + 2, link.rotation - 2],
              }
        }
        transition={{
          duration: link.duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ rotate: link.rotation }}
      >
        <Link
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={HERO_CLASSNAMES.floatingLinkAnchor}
          aria-label={link.label}
        >
          <div className={link.boxClassName}>
            <FloatingLinkIcon icon={link.icon} />
          </div>
          <span className={HERO_CLASSNAMES.floatingLabel}>{link.label}</span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
