import { Arrow, Asterisk } from "@/components/icons"
import { homeImages } from "@/lib/home-images"
import { pageMetadata } from "@/lib/metadata"
import { site } from "@/lib/site"
import Link from "next/link"
import "./about-personal.css"

export const metadata = pageMetadata(
  "Sobre mí: Nicolás Velasco Pérez",
  "Soy Nicolás Velasco Pérez, Nico: de Medellín, con una historia entre China, Estados Unidos y Colombia.",
  "/about"
)
const interests = [
  {
    number: "01",
    title: "Contar historias",
    description:
      "He grabado una caminata por Xishan y un día recogiendo naranjas en China rural. Los comparto en mi canal.",
    href: site.socials[0].href,
    label: "Ir a YouTube",
    external: true,
  },
  {
    number: "02",
    title: "Año Nuevo en China",
    description:
      "Celebré el Año Nuevo Lunar en una aldea de China: cocinamos, estuvimos en la naturaleza y fuimos a una ópera.",
    href: "https://www.instagram.com/lavidadenicovp/p/DFlwTFvyGmx/",
    label: "Ver ese Año Nuevo",
    external: true,
  },
  {
    number: "03",
    title: "Diplomacia de ping-pong",
    description:
      "En Hong Kong aprendí cómo un encuentro entre jugadores de ping-pong ayudó a abrir el diálogo entre China y Estados Unidos.",
    href: "https://cscc.dukekunshan.edu.cn/featured-student-nicolas-velasco-perez/",
    label: "Leer la entrevista",
    external: true,
  },
  {
    number: "04",
    title: "Ponerlo en palabras",
    description:
      "Escribí con otros autores un capítulo sobre el estado de resultados para pequeños negocios.",
    href: "/writing",
    label: "Ver mis escritos",
    external: false,
  },
]
export default function AboutPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <header className="page-heading">
        <p className="eyebrow">Sobre mí</p>
        <h1>
          Soy Nico.
          <br />
          Mucho <em>gusto.</em>
        </h1>
      </header>
      <section className="about-intro" aria-label="Conoce a Nico">
        <figure className="about-photo">
          <div className="photo-grid" />
          <Asterisk className="about-flower" />
          <img
            src={homeImages.portrait.src}
            srcSet={homeImages.portrait.srcSet}
            alt="Nico con la camiseta de Colombia"
            width={1600}
            height={2041}
            sizes="(max-width: 720px) min(calc(100vw - 88px), 412px), (max-width: 1000px) calc(45.5vw - 74px), min(calc(45.5vw - 92px), 535px)"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>Con mi camiseta de Colombia.</figcaption>
        </figure>
        <div className="about-copy">
          <p className="eyebrow">Hola, soy Nico.</p>
          <h2>
            De Medellín a China,
            <br />y Estados Unidos.
          </h2>
          <p>
            Soy Nicolás Velasco Pérez, pero todos me dicen Nico. Soy de Medellín y estudié entre
            Duke Kunshan, en China, y Duke, en Estados Unidos, con formación en Economía Política y
            Políticas Públicas. También me gusta correr, grabar videos y meterme en proyectos
            nuevos.
          </p>
          <p>
            He trabajado en iniciativas de desarrollo global, participado en One Young World y
            cofundado Recobra. Aquí reúno mis videos, escritos y algunos proyectos.
          </p>
          <p className="handwritten">Gracias por pasar por acá.</p>
          <Link href="/writing" className="text-link">
            Mis escritos <Arrow />
          </Link>
        </div>
      </section>
      <section className="about-chapters" aria-labelledby="chapters-title">
        <div className="about-chapters-heading">
          <div>
            <p className="eyebrow">Un poco de contexto</p>
            <h2 id="chapters-title">
              La versión <em>corta.</em>
            </h2>
          </div>
          <p>Algunos lugares y proyectos que hacen parte de esta historia.</p>
        </div>
        <div className="about-chapter-grid">
          <article>
            <span className="about-chapter-number">01 / COLOMBIA</span>
            <h3>Medellín</h3>
            <p>La ciudad de la que soy y un lugar que aparece mucho en mis fotos.</p>
          </article>
          <article>
            <span className="about-chapter-number">02 / 2021–2025</span>
            <h3>China y Estados Unidos</h3>
            <p>Estudié un programa de doble titulación en Duke Kunshan y Duke.</p>
          </article>
          <article>
            <span className="about-chapter-number">03 / 2024</span>
            <h3>Montreal y Hong Kong</h3>
            <p>
              Fui becario de CUSEF x One Young World y participé en el US-China Hong Kong Forum.
            </p>
            <a
              href="https://cscc.dukekunshan.edu.cn/featured-student-nicolas-velasco-perez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más <Arrow diagonal />
            </a>
          </article>
          <article>
            <span className="about-chapter-number">04 / CONSTRUYENDO</span>
            <h3>Recobra y más</h3>
            <p>
              Con Damián cofundé Recobra. También me gusta experimentar con IA y nuevas
              herramientas.
            </p>
            <Link href="/resume">
              Ver proyectos <Arrow />
            </Link>
          </article>
        </div>
      </section>
      <section className="interest-section">
        <div className="section-heading compact">
          <p className="eyebrow">Algunas cosas que me gustan</p>
          <h2>
            Un poco de
            <br />
            <em>todo.</em>
          </h2>
        </div>
        <div className="interest-list">
          {interests.map((item) => (
            <article key={item.number}>
              <span className="eyebrow">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <Link
                className="text-link"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
                <Arrow diagonal={item.external} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <aside className="contact-note">
        <Asterisk />
        <div>
          <p className="eyebrow">La conversación sigue</p>
          <h2>¿Una idea en común?</h2>
          <p>Nos podemos encontrar en Instagram.</p>
        </div>
        <a className="button" href={site.socials[1].href} target="_blank" rel="noopener noreferrer">
          Hablemos <Arrow diagonal />
        </a>
      </aside>
    </main>
  )
}
