export type VideoCategory = "china" | "montreal" | "personal"

export type Video = {
  id: string
  title: string
  duration: string
  category: VideoCategory
  label: string
}

// Titles and durations come from the public La Vida de Nico YouTube channel.
export const videos: Video[] = [
  {
    id: "56f1HvY4zsg",
    title: "Escalando Xishan: aventura en las montañas de China",
    duration: "7:33",
    category: "china",
    label: "China",
  },
  {
    id: "vOabGQ-GgSU",
    title: "Día en China rural: naranjas y restaurante tradicional chino",
    duration: "6:51",
    category: "china",
    label: "China",
  },
  {
    id: "MSIRX2332S4",
    title: "One Young World Montreal 2024: ¿qué aprendí y cómo puedes ganarte una beca para ir?",
    duration: "13:54",
    category: "montreal",
    label: "One Young World",
  },
  {
    id: "6Nw_muqi6sM",
    title: "Viajando de China a Canadá: One Young World",
    duration: "13:15",
    category: "montreal",
    label: "El viaje · Parte 3",
  },
  {
    id: "nUPqWWgVAwc",
    title: "Viajando de China a Canadá: escala en Qatar",
    duration: "8:43",
    category: "montreal",
    label: "El viaje · Parte 2",
  },
  {
    id: "ylR2-2LXZvw",
    title: "Viajando de China a Canadá",
    duration: "7:46",
    category: "montreal",
    label: "El viaje · Parte 1",
  },
  {
    id: "vsu2L451BEE",
    title: "Schwarzman Scholars: video de presentación",
    duration: "1:01",
    category: "personal",
    label: "Un poco de mí",
  },
]
