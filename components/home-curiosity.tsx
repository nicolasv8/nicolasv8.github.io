"use client"

import Link from "next/link"
import { useState } from "react"

const things = [
  {
    id: "viajar",
    label: "Viajar",
    icon: "✈",
    title: "De Medellín a Shanghái.",
    body: "Fotos, rutas y algunas de las paradas que han quedado en mi cámara. Ojo: el mapa todavía tiene espacio para crecer.",
    href: "/mapa",
    link: "Abrir mi mapa",
  },
  {
    id: "crear",
    label: "Crear",
    icon: "✳",
    title: "Ideas que se pueden probar.",
    body: "Últimamente experimento con IA y automatización, incluyendo herramientas para que las conversaciones de WhatsApp sean más útiles.",
    href: "/resume",
    link: "Ver lo que construyo",
  },
  {
    id: "moverme",
    label: "Moverme",
    icon: "↗",
    title: "También corro. Bastante.",
    body: "He corrido varias medias maratones. En 2025 corrí los 10K con el equipo de Duke Kunshan; quedamos terceros por equipos.",
    href: "https://athletics.dukekunshan.edu.cn/latest-in-athletics/home-course-home-champions-dku-varsity-running-claims-third-straight-victory/",
    link: "Ver la carrera en DKU",
    external: true,
  },
] as const

export function HomeCuriosity() {
  const [selected, setSelected] = useState<(typeof things)[number]["id"]>("viajar")
  const active = things.find((thing) => thing.id === selected) ?? things[0]

  return (
    <section className="nico-curiosity" aria-labelledby="curiosity-title">
      <div className="nico-curiosity-inner shell">
        <div className="nico-curiosity-heading">
          <p className="nico-section-label">
            <span>02</span> VIAJES, PROYECTOS Y KILÓMETROS
          </p>
          <h2 id="curiosity-title">
            Tres pistas
            <br />
            <em>sobre mí.</em>
          </h2>
          <p>Escoge una y mira por dónde empezamos.</p>
          <span className="nico-curiosity-doodle" aria-hidden="true">
            ↘
          </span>
        </div>
        <div className="nico-curiosity-card">
          <fieldset className="nico-curiosity-tabs">
            <legend className="sr-only">Explora mis intereses</legend>
            {things.map((thing, index) => (
              <button
                key={thing.id}
                type="button"
                aria-pressed={selected === thing.id}
                onClick={() => setSelected(thing.id)}
              >
                <span>0{index + 1}</span> {thing.label}
              </button>
            ))}
          </fieldset>
          <div className="nico-curiosity-detail" aria-live="polite" aria-atomic="true">
            <span className="nico-curiosity-symbol" aria-hidden="true">
              {active.icon}
            </span>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
            {"external" in active && active.external ? (
              <a
                href={active.href}
                className="nico-inline-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${active.link} (abre otra pestaña)`}
              >
                {active.link} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link href={active.href} className="nico-inline-link">
                {active.link} <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
