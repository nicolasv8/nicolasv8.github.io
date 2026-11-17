import { HomeCuriosity } from "@/components/home-curiosity"
import { Hero } from "@/components/home-hero"
import { HomeJourney } from "@/components/home-journey"
import { HomePostcards } from "@/components/home-postcards"
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
              <span>01</span> UN POCO SOBRE MÍ
            </p>
            <h2 id="intro-title">
              Medellín, China
              <br />
              <em>y Estados Unidos.</em>
            </h2>
            <p>
              Estudié entre Duke Kunshan y Duke, con formación en Economía Política y Políticas
              Públicas. En mi canal comparto videos de China, viajes y One Young World.
            </p>
            <p>
              También me gustan el emprendimiento, la IA y correr. Aquí encontrarás un poco de todo
              eso.
            </p>
            <Link className="nico-inline-link" href="/about">
              Conoce un poco más de mí <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="nico-intro-collage" aria-label="Recuerdos de viajes">
            <Link
              href="/mapa/?lugar=nueva-york#explorar"
              className="nico-photo nico-photo-nyc"
              aria-label="Ver Nueva York en mi mapa"
            >
              <img
                src="/images/travel/nueva-york-480.webp"
                srcSet="/images/travel/nueva-york-480.webp 480w, /images/travel/nueva-york-960.webp 960w"
                alt="Atardecer sobre Nueva York"
                width={600}
                height={800}
                sizes="(max-width: 720px) min(calc(51vw - 35px), 226px), (max-width: 950px) calc(23.6vw - 34px), min(calc(22.6vw - 42px), 270px)"
                loading="lazy"
                decoding="async"
              />
              <span>Nueva York, un atardecer. ↗</span>
            </Link>
            <Link
              href="/mapa/?lugar=shanghai#explorar"
              className="nico-photo nico-photo-shanghai"
              aria-label="Ver Shanghái en mi mapa"
            >
              <img
                src="/images/travel/shanghai-480.webp"
                srcSet="/images/travel/shanghai-480.webp 480w, /images/travel/shanghai-960.webp 960w"
                alt="El cielo de Shanghái de noche"
                width={600}
                height={800}
                sizes="(max-width: 720px) min(calc(51vw - 35px), 226px), (max-width: 950px) calc(23.6vw - 34px), min(calc(22.6vw - 42px), 270px)"
                loading="lazy"
                decoding="async"
              />
              <span>Una noche en Shanghái. ↗</span>
            </Link>
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

      <HomeJourney />

      <HomeCuriosity />

      <HomePostcards />

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
              <span className="nico-film-note">
                Entre lluvia y neblina, las montañas me recordaron a Medellín.
              </span>
              <span className="nico-film-bottom">
                <b>VER VIDEO ↗</b>
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
              <span className="nico-film-note">
                Mi libreta de Montreal y consejos para buscar una beca.
              </span>
              <span className="nico-film-bottom">
                <b>VER VIDEO ↗</b>
              </span>
            </a>
          </div>
          <Link href="/videos" className="nico-inline-link nico-all-videos">
            Explorar mis videos <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
