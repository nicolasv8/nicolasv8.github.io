import sharp from "sharp"
import { mkdir, writeFile } from "node:fs/promises"

// Keep the original PNGs. Never trim the hero layers: matching canvases preserve alignment.
// Multiples of 683 preserve the original 683:387 ratio without rounding the canvas height.
await mkdir("public/images", { recursive: true })
const widths = [1366, 2049, 2732, 3415, 4098]
const foreground = []
for (const width of widths) {
  const target = `nico-layer-${width}`
  foreground.push({ src: `/images/${target}.webp`, width, height: (width * 387) / 683 })
  await sharp("public/Nico-cutout.png")
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 94, alphaQuality: 100, effort: 5 })
    .toFile(`public/images/${target}.webp`)
}
const images = [
  { source: "Background.png", target: "background", width: 2049, quality: 85 },
  { source: "Nico-cutout.png", target: "nico", width: 1600, quality: 94, trim: true },
  { source: "Signature.png", target: "signature", width: 1200, quality: 94, trim: true },
]
for (const image of images) {
  let pipeline = sharp(`public/${image.source}`)
  if (image.trim) pipeline = pipeline.trim()
  await pipeline
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: image.quality, alphaQuality: 100, effort: 5 })
    .toFile(`public/images/${image.target}.webp`)
}

await writeFile("lib/image-manifest.json", `${JSON.stringify({ foreground }, null, 2)}\n`)
