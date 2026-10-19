import Link from "next/link"
import { Arrow, Asterisk } from "@/components/icons"

export default function NotFound() {
  return (
    <main id="main-content" className="shell interior-page">
      <header className="page-heading">
        <p className="eyebrow">404 / Nos salimos del camino</p>
        <h1>
          Por acá
          <br />
          todavía <em>no.</em>
        </h1>
        <p className="page-description">
          Esta página no existe o cambió de lugar. Hay otras puertas abiertas para seguir
          explorando.
        </p>
        <Asterisk />
      </header>
      <Link className="button" href="/">
        Volver al inicio <Arrow />
      </Link>
    </main>
  )
}
