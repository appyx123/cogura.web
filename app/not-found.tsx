import Link from "next/link"
import { Coffee, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center">
      <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
        <Coffee className="h-12 w-12 text-accent" />
        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
          404
        </div>
      </div>
      
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
        Halaman Tidak Ditemukan
      </h1>
      
      <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
        Maaf, sepertinya Anda tersesat di perkebunan kami. Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary/90"
        >
          <Home className="h-4 w-4" />
          Kembali ke Beranda
        </Link>
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-secondary"
        >
          Lihat Pilihan Kopi
        </Link>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
    </div>
  )
}
