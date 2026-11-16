import { HomeCuriosity } from "@/components/home-curiosity"
import { Hero } from "@/components/home-hero"
import { homeImages } from "@/lib/home-images"
import Image from "next/image"
import Link from "next/link"
import "./home-experience.css"

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <Hero />
      <section id="mi-mundo" className="nico-intro" aria-labelledby="intro-title">
        <div className="nico-intro-inner shell">
          <div className="nico-intro-copy">
            <p className="nico-section-label">
              <span>01</span> UN POQUITO DE CONTEXTO
            </p>
            <h2 id="intro-title">
              Medellín, China
              <br />
              <em>y unas cuantas vueltas.</em>
            </h2>
            <p>
              Estudié entre Duke Kunshan y Duke, con formación en Economía Política y Políticas
              Públicas. En mi canal comparto videos de China, viajes y One Young World.
            </p>
            <p>
              También me he metido de cabeza en el emprendimiento, la IA y las medias maratones. En
              esta página estoy juntando un poco de todo eso.
            </p>
            <Link className="nico-inline-link" href="/about">
              Conoce un poco más de mí <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="nico-intro-collage" aria-label="Recuerdos de viajes">
            <div className="nico-photo nico-photo-nyc">
              <Image
                src="/images/travel/nueva-york.webp"
                alt="Atardecer sobre Nueva York"
                width={600}
                height={800}
                sizes="(max-width: 720px) 45vw, 250px"
              />
              <span>Nueva York, un atardecer.</span>
            </div>
            <div className="nico-photo nico-photo-shanghai">
              <Image
                src="/images/travel/shanghai.webp"
                alt="El cielo de Shanghái de noche"
                width={600}
                height={800}
                sizes="(max-width: 720px) 45vw, 250px"
              />
              <span>Una noche en Shanghái.</span>
            </div>
            <span className="nico-collage-note" aria-hidden="true">
              mi carrete
              <br />
              no cabe aquí ✳
            </span>
            <span className="nico-collage-stamp" aria-hidden="true">
              HECHO
              <br />
              DE VIAJES
              <br />✈
            </span>
          </div>
        </div>
      </section>

      <HomeCuriosity />

      <section className="nico-map-teaser" aria-labelledby="map-teaser-title">
        <div className="nico-map-inner shell">
          <div className="nico-map-copy">
            <p className="nico-section-label">
              <span>03</span> POSTALES Y PARADAS
            </p>
            <h2 id="map-teaser-title">
              Pasaporte
              <br />
              <em>con fotos.</em>
            </h2>
            <p>
              Algunos de los lugares que han quedado en mi cámara. Elige un punto y acompáñame a dar
              una vuelta.
            </p>
            <Link href="/mapa" className="nico-button nico-button-dark">
              Explorar el mapa <span aria-hidden="true">↗</span>
            </Link>
            <span className="nico-map-note">De mi carrete al mapa.</span>
          </div>
          <Link
            href="/mapa"
            className="nico-map-art"
            aria-label="Ver mi mapa de viajes y fotografías"
          >
            <span className="nico-map-art-caption">UNA VUELTA POR EL MUNDO &nbsp; ↗</span>
            <img
              src={homeImages.london.src}
              srcSet={homeImages.london.srcSet}
              alt="Nico frente al Tower Bridge en Londres"
              width={1600}
              height={1200}
              sizes="(max-width: 720px) 82vw, 430px"
              loading="lazy"
              decoding="async"
            />
            <span className="nico-map-art-label">
              <b>LONDRES</b>
              <span>2024 ↗</span>
            </span>
            <span className="nico-map-art-stamp" aria-hidden="true">
              POSTAL
              <br />
              PARA
              <br />
              TI ✳
            </span>
          </Link>
        </div>
      </section>

      <section className="nico-video-section" aria-labelledby="video-title">
        <div className="shell">
          <div className="nico-video-heading">
            <div>
              <p className="nico-section-label">
                <span>04</span> LA VIDA, EN VIDEO
              </p>
              <h2 id="video-title">
                Dale <em>play.</em>
              </h2>
            </div>
            <p>Videos desde China y mi experiencia en One Young World, en Montreal.</p>
          </div>
          <div className="nico-video-grid">
            <a
              className="nico-film"
              href="https://www.youtube.com/watch?v=56f1HvY4zsg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nico-film-media">
                <Image
                  src="/images/videos/56f1HvY4zsg.webp"
                  alt=""
                  width={800}
                  height={450}
                  sizes="(max-width: 720px) 90vw, 45vw"
                />
                <span className="nico-film-play" aria-hidden="true">
                  ▶
                </span>
                <span className="nico-film-duration">07:33</span>
              </span>
              <span className="nico-film-top">CHINA &nbsp; / &nbsp; EN VIDEO</span>
              <span className="nico-film-title">
                Escalando Xishan:
                <br />
                <em>aventura en las montañas de China.</em>
              </span>
              <span className="nico-film-bottom">
                ESCALANDO XISHAN <b>VER VIDEO ↗</b>
              </span>
            </a>
            <a
              className="nico-film"
              href="https://www.youtube.com/watch?v=MSIRX2332S4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nico-film-media">
                <Image
                  src="/images/videos/MSIRX2332S4.webp"
                  alt=""
                  width={800}
                  height={450}
                  sizes="(max-width: 720px) 90vw, 45vw"
                />
                <span className="nico-film-play" aria-hidden="true">
                  ▶
                </span>
                <span className="nico-film-duration">13:54</span>
              </span>
              <span className="nico-film-top">MONTREAL &nbsp; / &nbsp; EN VIDEO</span>
              <span className="nico-film-title">
                Lo que aprendí
                <br />
                <em>en One Young World.</em>
              </span>
              <span className="nico-film-bottom">
                ONE YOUNG WORLD <b>VER VIDEO ↗</b>
              </span>
            </a>
          </div>
          <Link href="/videos" className="nico-inline-link nico-all-videos">
            Ver todos mis videos <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
