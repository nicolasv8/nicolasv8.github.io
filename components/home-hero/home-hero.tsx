import Image from "next/image"
import { site } from "@/lib/site"
import { Arrow, Asterisk } from "../icons"
import { LayeredPortrait } from "../layered-portrait"

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <Image
        className="hero-ambient"
        src={site.assets.background}
        alt=""
        fill
        sizes="100vw"
        priority
      />
      <div className="hero-photo">
        <LayeredPortrait priority />
      </div>
      <div className="hero-heading">
        <h1 id="home-title">
          ¡BIENVENIDO!<span className="sr-only"> a La Vida de Nico</span>
        </h1>
      </div>
      <div className="hero-subtitle" aria-label="A la vida de">
        <span>A LA</span>
        <span>VIDA DE</span>
      </div>
      <div className="hero-signature">
        <Image src={site.assets.signature} alt="Nico" width={1200} height={922} priority />
        <span className="sr-only">La Vida de Nico</span>
      </div>
      <div className="hero-sticker" aria-hidden="true">
        <Asterisk />
        <span>
          Hecho de
          <br />
          muchas cosas.
        </span>
      </div>
      <div className="hero-bottom">
        <span>Historias. Ideas. Lo que sigue.</span>
        <div className="hero-socials" aria-label="Encuéntrame también en">
          {site.socials.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
