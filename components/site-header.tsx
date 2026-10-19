"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { site } from "@/lib/site"
import { Arrow } from "./icons"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className={`site-header shell ${pathname === "/" ? "is-home" : ""}`}>
      <Link
        href="/"
        className="wordmark"
        aria-label="La Vida de Nico · Inicio"
        onClick={() => setOpen(false)}
      >
        la vida de{" "}
        <span>
          nico<span className="brand-dot">.</span>
        </span>
      </Link>
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
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false)
            document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus()
          }
        }}
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
