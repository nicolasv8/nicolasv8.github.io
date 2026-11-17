import { Arrow, Asterisk } from "@/components/icons"
import { pageMetadata } from "@/lib/metadata"
import { projects, site } from "@/lib/site"
import Link from "next/link"

export const metadata = pageMetadata(
  "Lo que hago",
  "Proyectos y comunidades que he construido: Recobra, South-North Scholars, IA y videos.",
  "/resume"
)
export default function ResumePage() {
  return (
    <main id="main-content" className="shell interior-page">
      <header className="page-heading work-heading">
        <p className="eyebrow">Lo que hago / Proyectos e ideas</p>
        <h1>
          Algunas cosas
          <br />
          que <em>he hecho.</em>
        </h1>
        <p className="page-description">
          De una tarjeta para bloquear aplicaciones al capítulo de South-North Scholars en Duke
          Kunshan: aquí están algunos proyectos que he ayudado a construir.
        </p>
        <Asterisk />
      </header>
      <section className="project-list" aria-label="Proyectos seleccionados">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <div className="project-number">
              {project.number}
              <span aria-hidden="true">↘</span>
            </div>
            <div>
              <p className="eyebrow">{project.category}</p>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <ul className="tags" aria-label="Temas del proyecto">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {"href" in project && (
                  <Link
                    href={project.href}
                    className="text-link"
                    target={"external" in project && project.external ? "_blank" : undefined}
                    rel={
                      "external" in project && project.external ? "noopener noreferrer" : undefined
                    }
                  >
                    {project.linkLabel}
                    <Arrow diagonal={"external" in project && project.external} />
                  </Link>
                )}
                {"sourceHref" in project && (
                  <a
                    href={project.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {project.sourceLabel} <Arrow diagonal />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="work-approach">
        <p className="eyebrow">El hilo que une todo</p>
        <h2>
          Entender.
          <br />
          Probar.
          <br />
          <em>Construir.</em>
        </h2>
        <div>
          <p>
            Estudié economía política, pero también me gusta meterme en tecnología, hacer videos y
            aprender cómo funcionan los negocios.
          </p>
          <p>
            Me interesan los problemas difíciles, sobre todo cuando hay gente dispuesta a sentarse a
            trabajar en ellos conmigo.
          </p>
          <Link href="/writing" className="text-link">
            Pasar por el cuaderno <Arrow />
          </Link>
        </div>
      </section>
      <aside className="contact-note">
        <Asterisk />
        <div>
          <p className="eyebrow">¿Construimos algo?</p>
          <h2>Todo empieza hablando.</h2>
          <p>Cuéntame lo que tienes en mente.</p>
        </div>
        <a className="button" href={site.socials[1].href} target="_blank" rel="noopener noreferrer">
          Hablemos <Arrow diagonal />
        </a>
      </aside>
    </main>
  )
}
