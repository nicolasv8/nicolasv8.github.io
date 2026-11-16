import { site } from "@/lib/site"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="nico-hero" aria-labelledby="home-title">
      <div className="nico-hero-inner shell">
        <div className="nico-hero-copy">
          <p className="nico-kicker">
            <span aria-hidden="true">✳</span> MEDELLÍN · KUNSHAN · DURHAM
          </p>
          <h1 id="home-title">
            Hola, soy <em>Nico.</em>
          </h1>
          <p className="nico-hero-description">
            Soy de Medellín. Estudié en China y Estados Unidos; hago videos, corro y me gusta
            convertir ideas en proyectos.
          </p>
          <div className="nico-hero-actions">
            <a href="#mi-mundo" className="nico-button nico-button-light">
              Pasa, te muestro <span aria-hidden="true">↘</span>
            </a>
            <Link href="/mapa" className="nico-hero-map-link">
              Explorar mi mapa <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="nico-hero-stage" aria-label="Un vistazo al mundo de Nico">
          <div className="nico-hero-halo" aria-hidden="true" />
          <div className="nico-hero-orbit nico-orbit-one" aria-hidden="true" />
          <div className="nico-hero-orbit nico-orbit-two" aria-hidden="true" />
          <span className="nico-hero-spark nico-spark-one" aria-hidden="true">
            ✳
          </span>
          <span className="nico-hero-spark nico-spark-two" aria-hidden="true">
            ✺
          </span>
          <Link
            href="/mapa"
            className="nico-stage-postcard"
            aria-label="Explorar mi mapa de viajes"
          >
            <span className="nico-stage-tape" aria-hidden="true" />
            <Image src="/images/travel/londres.webp" alt="" width={720} height={540} priority />
            <span>
              Londres, 2024 <b>↗</b>
            </span>
          </Link>
          <div className="nico-hero-person">
            <Image
              src={site.assets.portrait}
              alt="Nico sonriendo con la camiseta de Colombia"
              width={1600}
              height={2041}
              sizes="(max-width: 720px) 68vw, 440px"
              priority
            />
          </div>
          <Link href="/mapa" className="nico-ticket">
            <span>✈ &nbsp; MEDELLÍN · COLOMBIA</span>
            <strong>
              De Medellín
              <br />
              al mundo.
            </strong>
            <span>VER MIS PARADAS &nbsp; ↗</span>
          </Link>
          <a
            href="https://www.youtube.com/@LaVidadeNicoVP"
            className="nico-video-stamp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver La Vida de Nico en YouTube (abre otra pestaña)"
          >
            <span aria-hidden="true">▶</span>
            <b>
              LA VIDA
              <br />
              EN VIDEO
            </b>
          </a>
          <span className="nico-hero-note" aria-hidden="true">
            ¡qué bueno verte por acá!
          </span>
        </div>
      </div>
      <div className="nico-hero-bottom shell">
        <span>HISTORIAS &nbsp; · &nbsp; IDEAS &nbsp; · &nbsp; LUGARES</span>
        <a href="#mi-mundo">
          DESLIZA PARA EXPLORAR <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
