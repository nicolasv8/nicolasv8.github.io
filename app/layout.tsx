import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { site } from "@/lib/site"
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
  title: { default: site.name, template: "%s | La Vida de Nico" },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "es_CO",
    type: "website",
    images: [{ url: "/images/background.webp", width: 2049, height: 1161, alt: "La Vida de Nico" }],
  },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
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
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
