import { VideoShelf } from "@/components/video-shelf"
import type { Metadata } from "next"
import "./videos.css"

export const metadata: Metadata = {
  title: "Videos",
  description: "China, viajes y cosas que voy aprendiendo. Los videos de La Vida de Nico.",
}

export default function VideosPage() {
  return (
    <main id="main-content" className="shell videos-page">
      <header className="videos-heading">
        <div>
          <p className="eyebrow">La Vida de Nico / En video</p>
          <h1>
            Cosas que <em>grabé.</em>
          </h1>
          <p className="videos-intro">
            De las montañas de Xishan a Montreal. Aquí están mis videos de viajes, lugares y cosas
            que me dieron curiosidad.
          </p>
          <a
            href="https://www.youtube.com/@LaVidadeNicoVP"
            target="_blank"
            rel="noopener noreferrer"
            className="videos-channel"
          >
            Ir al canal de YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="videos-stamp" aria-hidden="true">
          <span>LA VIDA DE NICO</span>
          <b>▶</b>
          <span>REC • REC • REC</span>
        </div>
      </header>
      <VideoShelf />
    </main>
  )
}
