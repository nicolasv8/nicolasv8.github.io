export function HomeRunning() {
  return (
    <section className="home-running" aria-labelledby="running-title">
      <div className="home-running-inner shell">
        <div>
          <p className="nico-section-label">CARRERAS</p>
          <h2 id="running-title">
            También <em>corro.</em>
          </h2>
          <p>Me gusta correr medias maratones y salir a correr con otras personas.</p>
          <a
            className="nico-inline-link"
            href="https://www.strava.com/athletes/59913615"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi perfil en Strava ↗
          </a>
        </div>
        <div className="home-running-card">
          <div className="home-running-track" aria-hidden="true">
            <span>10K</span>
            <i />
          </div>
          <div>
            <p className="nico-section-label">DUKE KUNSHAN · 2025</p>
            <h3>10K con el equipo de DKU</h3>
            <p>Quedamos terceros por equipos en la carrera de Duke Kunshan.</p>
            <a
              href="https://athletics.dukekunshan.edu.cn/latest-in-athletics/home-course-home-champions-dku-varsity-running-claims-third-straight-victory/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver la carrera ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
