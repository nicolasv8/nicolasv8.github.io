import Link from "next/link"

type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <p className="mb-8 text-lg text-white/70">Coming soon...</p>
      <Link
        href="/"
        className="rounded-full bg-white/10 px-6 py-3 transition-colors hover:bg-white/20"
      >
        Back to Home
      </Link>
    </main>
  )
}
