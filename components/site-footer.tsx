import { site } from "@/lib/site"
import Link from "next/link"
import { Arrow } from "./icons"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <p>
          Qué bueno que
          <br />
          <span>pasaste por acá.</span>
        </p>
        <div className="footer-links">
          {site.socials.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
              <Arrow diagonal />
            </a>
          ))}
          <Link href="/about">
            Un poco más de mí
            <Arrow />
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} La Vida de Nico</span>
        <a href="#top">Volver arriba ↑</a>
      </div>
    </footer>
  )
}
