import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
})
export const metadata: Metadata = {
  metadataBase: new URL("https://nicolasv8.github.io"),
  title: { default: "La Vida de Nico | Nicolás Velasco Pérez", template: "%s | La Vida de Nico" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "La Vida de Nico | Nicolás Velasco Pérez",
    description: site.description,
    locale: "es_CO",
    type: "website",
    url: "/",
    siteName: site.name,
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "La Vida de Nico: videos, viajes y proyectos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-cover.png"],
  },
  icons: {
    icon: [{ url: "/favicon-n.png", type: "image/png", sizes: "128x128" }],
    apple: "/apple-n.png",
  },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body id="top" className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === "production" && process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  )
}
