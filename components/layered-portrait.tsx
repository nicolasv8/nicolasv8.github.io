import Image from "next/image"
import { site } from "@/lib/site"

/** Both full-canvas layers share the same aspect ratio and geometry so the sharp cutout always matches the filtered photo. */
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
      <img
        className="portrait-layer portrait-foreground"
        src={site.assets.foreground}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        srcSet={site.assets.foregroundSrcSet}
        sizes="(max-width: 720px) max(100vw, calc((max(520px, 100svh) - 72px) * 1.764858)), max(100vw, calc((max(560px, 100svh) - 84px) * 1.764858))"
        width={4098}
        height={2322}
        alt="Nico sonriendo con la camiseta de la Selección Colombia"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </>
  )
}
