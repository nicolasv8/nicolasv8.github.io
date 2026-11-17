"use client"

import { site } from "@/lib/site"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Arrow } from "./icons"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header
      className={`site-header shell ${pathname === "/" ? "is-home" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false)
          document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus()
        }
      }}
    >
      <div className="site-brand">
        <Link
          href="/"
          className="wordmark"
          aria-label="La Vida de Nico · Inicio"
          onClick={() => setOpen(false)}
        >
          <span className="wordmark-caption">la vida de</span>{" "}
          <span className="wordmark-name">
            nico<span className="brand-dot">.</span>
          </span>
        </Link>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Cerrar −" : "Menú +"}
      </button>
      <nav
        id="site-navigation"
        aria-label="Navegación principal"
        className={`site-nav ${open ? "is-open" : ""}`}
      >
        {site.navigation.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={
              link.href === "/"
                ? pathname === "/"
                  ? "page"
                  : undefined
                : pathname.startsWith(link.href)
                  ? "page"
                  : undefined
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          className="nav-contact"
          href={site.socials[1].href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Hablemos <Arrow diagonal />
        </a>
      </nav>
    </header>
  )
}
