import sharp from "sharp"
import { mkdir } from "node:fs/promises"

// Keep the original PNGs. Never trim the hero layers: matching canvases preserve alignment.
await mkdir("public/images", { recursive: true })
const images = [
  { source: "Background.png", target: "background", width: 1600, quality: 85 },
  { source: "Nico-cutout.png", target: "nico-layer", width: 1600, quality: 88 },
  { source: "Nico-cutout.png", target: "nico", width: 1000, quality: 85, trim: true },
  { source: "Signature.png", target: "signature", width: 800, quality: 85, trim: true },
]
for (const image of images) {
  let pipeline = sharp(`public/${image.source}`)
  if (image.trim) pipeline = pipeline.trim()
  await pipeline
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: image.quality })
    .toFile(`public/images/${image.target}.webp`)
}
