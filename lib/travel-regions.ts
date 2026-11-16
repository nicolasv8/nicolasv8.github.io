export type RegionId = "colombia" | "china"

// Boundaries describe the crop of the same Natural Earth equirectangular map.
export const regions = {
  colombia: {
    label: "Colombia",
    center: "medellin",
    worldNudge: [13, 9],
    bounds: [-77, -73, 5, 11],
    ids: ["cartagena", "medellin", "guatape", "jerico"],
    nudges: { medellin: [-12, -10], guatape: [12, -10], jerico: [0, 20] },
  },
  china: {
    label: "Este de China",
    center: "kunshan",
    worldNudge: [21, -2],
    bounds: [119, 122.4, 29.5, 32.8],
    ids: ["suzhou", "kunshan", "shanghai", "hangzhou"],
    nudges: { suzhou: [-10, 0], kunshan: [8, 0], shanghai: [18, 0] },
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
