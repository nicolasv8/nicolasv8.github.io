import { TravelMap } from "@/components/travel-map"
import { pageMetadata } from "@/lib/metadata"
import "./mapa.css"

export const metadata = pageMetadata(
  "Mi mapa",
  "Una selección de fotos y lugares de mis viajes, de Medellín al resto del mapa.",
  "/mapa"
)

export default function MapPage() {
  return (
    <main id="main-content" className="travel-page">
      <TravelMap />
    </main>
  )
}
