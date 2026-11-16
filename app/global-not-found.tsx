import type { Metadata } from "next"
import Link from "next/link"
import { Montserrat, DM_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "404 - Halaman tidak ditemukan | COGURA",
}

export default function GlobalNotFound() {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${dmSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center">
          <h1 className="font-display text-6xl font-extrabold text-primary">404</h1>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
            Halaman tidak ditemukan / Page not found
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. /
            Sorry, the page you are looking for is not available.
          </p>
          <Link
            href="/id"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Kembali ke Beranda / Back to Home
          </Link>
        </div>
      </body>
    </html>
  )
}
