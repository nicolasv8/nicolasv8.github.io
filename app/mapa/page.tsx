import { TravelMap } from "@/components/travel-map"
import type { Metadata } from "next"
import "./mapa.css"

export const metadata: Metadata = {
  title: "Mi mapa",
  description: "Una selección de fotos y lugares de mis viajes, de Medellín al resto del mapa.",
}

export default function MapPage() {
  return (
    <main id="main-content" className="travel-page">
      <TravelMap />
    </main>
  )
}
