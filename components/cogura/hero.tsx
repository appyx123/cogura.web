import Image from "next/image"
import { ArrowRight, Leaf } from "lucide-react"

const WA_ORDER_URL =
  "https://wa.me/6282322222346?text=Halo%20COGURA%2C%20saya%20ingin%20memesan%20kopi%20Arabika%20Enrekang."

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        {/* Copy */}
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
            Single Origin · Sulawesi
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary text-balance md:text-5xl lg:text-6xl">
            Rasakan Otentisitas <span className="text-accent">Arabika Enrekang</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Kopi premium dari dataran tinggi Sulawesi Selatan, diproses dengan dedikasi untuk secangkir kesempurnaan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WA_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Pesan Sekarang
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Cerita Kami
            </a>
          </div>

          {/* Trust strip */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-8">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Ketinggian</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-primary">1500m</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Roasted</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-primary">Fresh</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Petani</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-primary">Lokal</dd>
            </div>
          </dl>
        </div>

        {/* Imagery */}
        <div className="relative">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20">
            <Image
              src="/hero_image.jpg"
              alt="Kopi Arabika Enrekang COGURA dalam berbagai ukuran kemasan"
              fill
              priority
              quality={75}
              className="h-full w-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          {/* Floating mini card */}
          <div className="absolute -bottom-8 -left-4 hidden w-64 rounded-2xl border border-border bg-card p-5 shadow-xl sm:block md:-left-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=200&q=80"
                  alt="Biji kopi Arabika segar"
                  width={48}
                  height={48}
                  quality={75}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-primary">Enrekang Arabika</p>
                <p className="text-xs text-muted-foreground">Panen Pilihan 2025</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="text-xs text-muted-foreground">Cupping Score</span>
              <span className="font-display text-sm font-bold text-accent">86.5</span>
            </div>
          </div>

          {/* Decorative blob */}
          <div className="absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-12 bottom-24 -z-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}




