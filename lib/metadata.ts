import type { Metadata } from "next"

const shareImage = {
  url: "/images/og-cover.png",
  width: 1200,
  height: 630,
  alt: "La Vida de Nico: videos, viajes y proyectos",
}

/** Keep each page's social preview specific to the page being shared. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = path === "/" || path.endsWith("/") ? path : `${path}/`
  const shareTitle = `${title} | La Vida de Nico`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: shareTitle,
      description,
      url: canonical,
      siteName: "La Vida de Nico",
      locale: "es_CO",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [shareImage.url],
    },
  }
}
