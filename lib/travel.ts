// A small, intentional selection, not a complete travel history.
// Coordinates point to city centres; the photos contain no embedded location metadata.
export type TravelPlace = {
  id: string
  city: string
  country: string
  year: string
  latitude: number
  longitude: number
  image: string
  imageAlt: string
  note: string
  nudge?: [number, number]
  video?: { label: string; href: string }
}

export const travelPlaces: TravelPlace[] = [
  {
    id: "medellin",
    city: "Medellín",
    country: "Colombia",
    year: "2022",
    latitude: 6.2442,
    longitude: -75.5812,
    image: "/images/travel/medellin.webp",
    imageAlt: "El cielo sobre las montañas y edificios de Medellín",
    note: "El cielo sobre el Valle de Aburrá.",
  },
  {
    id: "durham",
    city: "Durham",
    country: "Estados Unidos",
    year: "2024",
    latitude: 35.994,
    longitude: -78.8986,
    image: "/images/travel/durham.webp",
    imageAlt: "Un rincón verde cerca de Duke University en Durham",
    note: "Un rincón verde cerca de Duke University.",
    nudge: [-18, 0],
  },
  {
    id: "nueva-york",
    city: "Nueva York",
    country: "Estados Unidos",
    year: "2024",
    latitude: 40.7128,
    longitude: -74.006,
    image: "/images/travel/nueva-york.webp",
    imageAlt: "El horizonte de Nueva York al atardecer",
    note: "Atardecer desde Manhattan.",
    nudge: [16, 5],
  },
  {
    id: "montreal",
    city: "Montreal",
    country: "Canadá",
    year: "2024",
    latitude: 45.5017,
    longitude: -73.5673,
    image: "/images/travel/montreal.webp",
    imageAlt: "Nico en un pasaje rodeado de plantas en Montreal",
    note: "One Young World · septiembre de 2024.",
    nudge: [-5, -17],
    video: {
      label: "Mira la historia en YouTube",
      href: "https://www.youtube.com/watch?v=MSIRX2332S4",
    },
  },
  {
    id: "amsterdam",
    city: "Ámsterdam",
    country: "Países Bajos",
    year: "2022",
    latitude: 52.3676,
    longitude: 4.9041,
    image: "/images/travel/amsterdam.webp",
    imageAlt: "Un canal de Ámsterdam entre árboles y edificios",
    note: "Un canal en octubre de 2022.",
    nudge: [10, -11],
  },
  {
    id: "londres",
    city: "Londres",
    country: "Reino Unido",
    year: "2024",
    latitude: 51.5072,
    longitude: -0.1276,
    image: "/images/travel/londres.webp",
    imageAlt: "Nico con la camiseta de Colombia frente a Tower Bridge en Londres",
    note: "Tower Bridge y la camiseta de Colombia.",
    nudge: [-12, 10],
  },
  {
    id: "doha",
    city: "Doha",
    country: "Catar",
    year: "2024",
    latitude: 25.2854,
    longitude: 51.531,
    image: "/images/travel/doha.webp",
    imageAlt: "Nico sonriendo de noche en Doha",
    note: "Una escala camino a One Young World.",
    video: { label: "La escala en video", href: "https://www.youtube.com/watch?v=nUPqWWgVAwc" },
  },
  {
    id: "pekin",
    city: "Pekín",
    country: "China",
    year: "2023",
    latitude: 39.9042,
    longitude: 116.4074,
    image: "/images/travel/pekin.webp",
    imageAlt: "Nico en un pasaje de arquitectura tradicional en Pekín",
    note: "Una visita al Museo del Palacio.",
    nudge: [2, -16],
  },
  {
    id: "kunshan",
    city: "Kunshan",
    country: "China",
    year: "2024",
    latitude: 31.384,
    longitude: 120.982,
    image: "/images/travel/kunshan.webp",
    imageAlt: "Una calle al atardecer en la región de Kunshan",
    note: "Duke Kunshan University · 2021–2025.",
    nudge: [-21, 1],
  },
  {
    id: "shanghai",
    city: "Shanghái",
    country: "China",
    year: "2024",
    latitude: 31.2304,
    longitude: 121.4737,
    image: "/images/travel/shanghai.webp",
    imageAlt: "El horizonte iluminado de Shanghái de noche",
    note: "El horizonte iluminado en octubre de 2024.",
    nudge: [17, 5],
  },
  {
    id: "hong-kong",
    city: "Hong Kong",
    country: "China · RAE",
    year: "2024",
    latitude: 22.3193,
    longitude: 114.1694,
    image: "/images/travel/hong-kong.webp",
    imageAlt: "Nico con la camiseta de Colombia en Hong Kong",
    note: "Una visita a Victoria Peak.",
    nudge: [0, 19],
  },
]
