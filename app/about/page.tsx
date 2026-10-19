import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Arrow, Asterisk } from "@/components/icons"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Detrás de La Vida de Nico: videos, palabras y tecnología. Un poco más de mí.",
}
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
    title: "Ponerlo en palabras",
    description:
      "A veces es un ensayo. A veces, un poema. Otras veces, una nota pequeña para no dejar escapar una idea.",
    href: "/writing",
    label: "Leer mis escritos",
    external: false,
  },
  {
    number: "03",
    title: "Hacer que funcione",
    description:
      "Del diseño de una página a los asistentes de IA. Me interesa conectar la tecnología con problemas de la vida real.",
    href: "/resume",
    label: "Explorar mis proyectos",
    external: false,
  },
]
export default function AboutPage() {
  return (
    <main id="main-content" className="shell interior-page">
      <header className="page-heading">
        <p className="eyebrow">Sobre mí / Más allá de la bio</p>
        <h1>
          Muchas ideas.
          <br />
          Un mismo <em>Nico.</em>
        </h1>
      </header>
      <section className="about-intro" aria-label="Conoce a Nico">
        <figure className="about-photo">
          <div className="photo-grid" />
          <Asterisk className="about-flower" />
          <Image
            src={site.assets.portrait}
            alt="Nico con la camiseta de Colombia"
            width={1000}
            height={1276}
            sizes="(max-width: 720px) 90vw, 40vw"
            priority
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
            Este es mi lugar para juntar esas formas: lo que grabo, lo que escribo y lo que
            construyo. La Vida de Nico empezó como un nombre y acá tiene su propio rincón.
          </p>
          <p>
            Me muevo entre las historias y la tecnología. Entre una página en blanco y una idea que
            quiero ver funcionando. Por eso este espacio tiene un poco de cada cosa.
          </p>
          <p className="handwritten">Qué chimba tenerte por acá.</p>
          <Link href="/writing" className="text-link">
            Si tienes un ratico, lee algo <Arrow />
          </Link>
        </div>
      </section>
      <section className="interest-section">
        <div className="section-heading compact">
          <p className="eyebrow">Las cosas que se cruzan en mi mundo</p>
          <h2>
            Tres maneras
            <br />
            de <em>crear.</em>
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
