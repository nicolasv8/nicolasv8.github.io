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
      "Con una cámara, una idea y un espacio propio en YouTube. La Vida de Nico también se cuenta en video.",
    href: site.socials[0].href,
    label: "Ir a YouTube",
    external: true,
  },
  {
    number: "02",
    title: "Ir, mirar y contar",
    description:
      "Estudié entre China y Estados Unidos. He guardado fotos de muchos lugares en el camino; aquí puedes explorar algunos.",
    href: "/mapa",
    label: "Abrir mi mapa",
    external: false,
  },
  {
    number: "03",
    title: "Hacer que funcione",
    description:
      "Me gusta probar ideas con tecnología y trabajar en proyectos que resuelvan algo concreto.",
    href: "/resume",
    label: "Explorar mis proyectos",
    external: false,
  },
  {
    number: "04",
    title: "Ponerlo en palabras",
    description: "También he escrito sobre negocios y educación financiera, entre otras cosas.",
    href: "/writing",
    label: "Pasar por el cuaderno",
    external: false,
  },
]
export default function AboutPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <header className="page-heading">
        <p className="eyebrow">Sobre mí / Más allá de la bio</p>
        <h1>
          Soy Nico.
          <br />
          ¿Qué te <em>cuento?</em>
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
          <figcaption>El de la camiseta de Colombia. Sí, ese soy yo.</figcaption>
        </figure>
        <div className="about-copy">
          <p className="eyebrow">Hola, soy Nico.</p>
          <h2>
            Hay más de una forma
            <br />
            de contar una vida.
          </h2>
          <p>
            Soy Nicolás Velasco Pérez, Nico para los amigos, y soy de Medellín. Estudié entre Duke
            Kunshan, en China, y Duke, en Estados Unidos, con formación en Economía Política y
            Políticas Públicas. También me gusta correr, grabar videos y meterme en proyectos
            nuevos.
          </p>
          <p>
            He trabajado en iniciativas de desarrollo global, participado en One Young World y
            cofundado Recobra. Aquí reúno mis videos, escritos y algunos proyectos.
          </p>
          <p className="handwritten">Qué chimba tenerte por acá.</p>
          <Link href="/writing" className="text-link">
            Si tienes un ratico, lee algo <Arrow />
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
