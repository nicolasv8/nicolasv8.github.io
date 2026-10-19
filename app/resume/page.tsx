import type { Metadata } from "next"
import Link from "next/link"
import { Arrow, Asterisk } from "@/components/icons"
import { projects, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Lo que hago",
  description:
    "Un vistazo a mis proyectos: asistentes de IA, herramientas cotidianas y un rincón propio en internet.",
}
export default function ResumePage() {
  return (
    <main id="main-content" className="shell interior-page">
      <header className="page-heading work-heading">
        <p className="eyebrow">Lo que hago / Proyectos e ideas</p>
        <h1>
          De «¿y si…?»
          <br />a <em>hacerlo.</em>
        </h1>
        <p className="page-description">
          Me interesa lo que pasa cuando una idea se convierte en algo que puedes usar. Estos son
          algunos de los caminos que estoy explorando.
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
              {"href" in project && (
                <Link href={project.href} className="text-link">
                  {project.linkLabel}
                  <Arrow />
                </Link>
              )}
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
            La tecnología me interesa cuando resuelve algo. Una conversación más útil, una tarea con
            menos pasos o una idea que por fin tiene dónde vivir.
          </p>
          <p>
            También hay otra parte del trabajo: contar lo aprendido. A veces termina en un video;
            otras, en una nota.
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
