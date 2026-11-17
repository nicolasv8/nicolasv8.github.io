export type RegionId = "colombia" | "china" | "china-norte"

// Boundaries describe the crop of the same Natural Earth equirectangular map.
export const regions = {
  colombia: {
    label: "Colombia y Caribe",
    center: "medellin",
    worldNudge: [13, 9],
    bounds: [-83, -73, 5, 13.5],
    ids: ["san-andres", "cartagena", "medellin", "guatape", "jerico"],
    nudges: { "san-andres": [0, -20], medellin: [-15, -14], guatape: [20, -14], jerico: [0, 20] },
  },
  china: {
    label: "Este de China",
    center: "kunshan",
    worldNudge: [21, -2],
    bounds: [119, 122.4, 29.5, 32.8],
    ids: ["suzhou", "kunshan", "shanghai", "hangzhou"],
    nudges: { suzhou: [-10, 0], kunshan: [8, 0], shanghai: [22, 0] },
  },
  "china-norte": {
    label: "Norte de China",
    center: "pekin",
    worldNudge: [-21, -16],
    bounds: [115.3, 118.4, 38.3, 40.7],
    ids: ["pekin", "tianjin"],
    nudges: {},
  },
} satisfies Record<
  RegionId,
  {
    label: string
    center: string
    worldNudge: [number, number]
    bounds: [number, number, number, number]
    ids: string[]
    nudges: Record<string, [number, number]>
  }
>

export function regionForPlace(id: string): RegionId | undefined {
  return (Object.keys(regions) as RegionId[]).find((region) =>
    (regions[region].ids as string[]).includes(id)
  )
}
