import { Arrow, Asterisk } from "@/components/icons"
import { RecobraVisual } from "@/components/recobra-visual"
import { pageMetadata } from "@/lib/metadata"
import { projects, site } from "@/lib/site"
import Link from "next/link"
import "./resume-projects.css"

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
        <p className="page-description">Algunos proyectos que he ayudado a construir.</p>
        <Asterisk />
      </header>
      <section className="project-list" aria-label="Proyectos seleccionados">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <div className="project-number">
              {project.number}
              <span aria-hidden="true">↘</span>
            </div>
            <div
              className={
                project.number === "01"
                  ? "project-details project-details-featured"
                  : "project-details"
              }
            >
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
                        "external" in project && project.external
                          ? "noopener noreferrer"
                          : undefined
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
              {project.number === "01" && <RecobraVisual />}
            </div>
          </article>
        ))}
      </section>
      <section className="work-approach">
        <p className="eyebrow">Un poco de contexto</p>
        <h2>
          Economía política,
          <br />
          tecnología
          <br />
          <em>y video.</em>
        </h2>
        <div>
          <p>
            Estudié economía política y creé pequeños negocios en Colombia con productos importados
            de China.
          </p>
          <p>
            También me gusta probar herramientas de IA, grabar videos y compartir oportunidades como
            las becas para One Young World.
          </p>
          <a
            href="https://www.youtube.com/watch?v=MSIRX2332S4"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi experiencia en Montreal <Arrow diagonal />
          </a>
        </div>
      </section>
      <aside className="contact-note">
        <Asterisk />
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>¿Tienes alguna idea?</h2>
          <p>Puedes escribirme por Instagram.</p>
        </div>
        <a className="button" href={site.socials[1].href} target="_blank" rel="noopener noreferrer">
          Ir a Instagram <Arrow diagonal />
        </a>
      </aside>
    </main>
  )
}
