import { MessageCircle } from "lucide-react"

type Product = {
  name: string
  tagline: string
  description: string
  price: string
  image: string
  notes: string[]
  waMessage: string
}

const products: Product[] = [
  {
    name: "Arabica Full Wash",
    tagline: "Clean · Bright · Elegant",
    description:
      "Proses pencucian penuh menghasilkan kopi yang bersih, cerah, dengan keasaman jeruk manis dan aftertaste yang rapi.",
    price: "Rp 85.000",
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=1200&q=80",
    notes: ["Citrus", "Brown Sugar", "Floral"],
    waMessage:
      "Halo%20COGURA%2C%20saya%20ingin%20memesan%20Arabica%20Full%20Wash%20200gr.",
  },
  {
    name: "Arabica Natural",
    tagline: "Fruity · Bold · Winey",
    description:
      "Dry-processed di bawah sinar matahari Enrekang, menghadirkan aroma berry yang kaya dan body yang tebal.",
    price: "Rp 90.000",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    notes: ["Red Berry", "Dark Chocolate", "Wine"],
    waMessage:
      "Halo%20COGURA%2C%20saya%20ingin%20memesan%20Arabica%20Natural%20200gr.",
  },
  {
    name: "Arabica Honey",
    tagline: "Sweet · Syrupy · Balanced",
    description:
      "Mucilage dipertahankan saat fermentasi untuk menghasilkan rasa manis madu dengan body yang sirup dan seimbang.",
    price: "Rp 95.000",
    image:
      "https://images.unsplash.com/photo-1559525839-d9acfd1ac2d0?auto=format&fit=crop&w=1200&q=80",
    notes: ["Honey", "Caramel", "Almond"],
    waMessage:
      "Halo%20COGURA%2C%20saya%20ingin%20memesan%20Arabica%20Honey%20200gr.",
  },
]

export function Products() {
  return (
    <section id="products" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Signature Roast</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-primary text-balance md:text-4xl lg:text-5xl">
            Pilih karakter favoritmu
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tiga metode proses, satu asal yang sama—Enrekang. Setiap kemasan 200 gram biji atau bubuk, freshly roasted.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={`Kopi ${p.name} COGURA`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  200 gr
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tagline}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-primary">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.notes.map((n) => (
                    <li
                      key={n}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {n}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Mulai dari</p>
                    <p className="font-display text-2xl font-extrabold text-primary">{p.price}</p>
                  </div>
                  <a
                    href={`https://wa.me/6282246641848?text=${p.waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Pesan via WA
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
