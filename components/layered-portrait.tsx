import Image from "next/image"
import { site } from "@/lib/site"

/** Both full-canvas layers share geometry so the sharp cutout always matches the filtered photo. */
export function LayeredPortrait({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        className="portrait-layer portrait-background"
        src={site.assets.background}
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 720px) 100vw, 94vw"
      />
      <div className="portrait-shade" />
      <Image
        className="portrait-layer portrait-foreground"
        src={site.assets.foreground}
        alt="Nico sonriendo con la camiseta de la Selección Colombia"
        fill
        priority={priority}
        sizes="(max-width: 720px) 100vw, 94vw"
      />
    </>
  )
}
