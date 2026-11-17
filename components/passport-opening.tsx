"use client"

export function PassportOpening({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return (
    <div className="passport-stage">
      <span className="passport-stage-orbit" aria-hidden="true" />
      <button
        type="button"
        className={`passport-book ${open ? "is-open" : ""}`}
        onClick={onOpen}
        aria-expanded={open}
        aria-label={open ? "Ir al mapa" : "Abrir el pasaporte y explorar el mapa"}
      >
        <span className="passport-page" aria-hidden="true">
          <span className="passport-page-heading">LA VIDA DE NICO</span>
          <img src="/images/world-map.svg" alt="" />
          <span className="passport-page-stamp">
            DE MEDELLÍN
            <br />
            AL MUNDO ✈
          </span>
          <span className="passport-page-caption">Un mapa de mis viajes</span>
        </span>
        <span className="passport-cover" aria-hidden="true">
          <span className="passport-country">REPÚBLICA DE COLOMBIA</span>
          <img className="passport-emblem" src="/images/travel/escudo-colombia.webp" alt="" />
          <span className="passport-title">PASAPORTE</span>
          <span className="passport-subtitle">PASSPORT · PASSEPORT</span>
          <span className="passport-flag">
            <i />
            <i />
            <i />
          </span>
        </span>
      </button>
      <span className="passport-instruction" aria-hidden="true">
        {open ? "Ir al mapa ↗" : "Toca el pasaporte para abrirlo ↗"}
      </span>
    </div>
  )
}
