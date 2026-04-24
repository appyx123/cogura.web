"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type Product = {
  id: string
  name: string
  tagline: string
  description: string
  basePrice: string
  image: string
  notes: string[]
  weights: string[]
  roasts?: string[]
}

const products: Product[] = [
  {
    id: "green-bean",
    name: "Green Bean Arabica",
    tagline: "Raw · Fresh · Authentic",
    description:
      "Biji kopi mentah berkualitas tinggi dari dataran tinggi Enrekang. Sangat cocok bagi Anda roaster yang ingin mengeksplorasi profil sangrai sendiri.",
    basePrice: "Mulai dari Rp 120.000",
    image: "/green.jpg",
    notes: ["Fresh", "High Altitude"],
    weights: ["1kg", "5kg", "10kg"],
  },
  {
    id: "whole-bean",
    name: "Whole Bean Roasted",
    tagline: "Freshly Roasted · Aromatic",
    description:
      "Biji kopi sangrai segar yang mengunci aroma dan rasa optimal. Pilihan sempurna untuk digiling mendadak sebelum diseduh.",
    basePrice: "Mulai dari Rp 85.000",
    image: "/roasted.jpg",
    notes: ["Citrus", "Brown Sugar", "Floral"],
    weights: ["200g", "500g", "1000g"],
    roasts: ["Light", "Medium", "Dark"],
  },
  {
    id: "ground",
    name: "Ground Coffee (Bubuk)",
    tagline: "Ready to Brew · Convenient",
    description:
      "Kopi bubuk premium yang digiling dengan presisi, siap diseduh dengan kepraktisan maksimal untuk menemani hari-hari Anda.",
    basePrice: "Mulai dari Rp 85.000",
    image: "/bubuk.jpg",
    notes: ["Red Berry", "Dark Chocolate", "Wine"],
    weights: ["200g", "500g", "1000g"],
    roasts: ["Light", "Medium", "Dark"],
  },
]

function ProductCard({ product }: { product: Product }) {
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0])
  const [selectedRoast, setSelectedRoast] = useState(product.roasts?.[0] || "")

  // Build the WhatsApp message
  let message = `Halo COGURA, saya ingin memesan ${product.name} ukuran ${selectedWeight}.`
  if (product.roasts) {
    message = `Halo COGURA, saya ingin memesan ${product.name} ukuran ${selectedWeight} dengan tingkat roasting ${selectedRoast}.`
  }
  const waLink = `https://wa.me/6282322222346?text=${encodeURIComponent(message)}`

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`Kopi ${product.name} COGURA`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          {selectedWeight}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{product.tagline}</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-primary">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        <div className="mt-6 space-y-5 flex-1">
          {product.roasts && (
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Roast Level</span>
              <div className="flex flex-wrap gap-2">
                {product.roasts.map((roast) => (
                  <label key={roast} className="cursor-pointer">
                    <input
                      type="radio"
                      name={`${product.id}-roast`}
                      value={roast}
                      checked={selectedRoast === roast}
                      onChange={(e) => setSelectedRoast(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:bg-secondary">
                      {roast}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ukuran / Berat</span>
            <div className="flex flex-wrap gap-2">
              {product.weights.map((weight) => (
                <label key={weight} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`${product.id}-weight`}
                    value={weight}
                    checked={selectedWeight === weight}
                    onChange={(e) => setSelectedWeight(e.target.value)}
                    className="peer sr-only"
                  />
                  <div className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:bg-secondary">
                    {weight}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-border/50">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Harga</p>
            <p className="font-display text-lg font-extrabold text-primary">{product.basePrice}</p>
          </div>
          <a
            href={waLink}
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
  )
}

export function Products() {
  return (
    <section id="products" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pilihan Kopi</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-primary text-balance md:text-4xl lg:text-5xl">
            Varian Kopi Enrekang
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Dari Green Bean mentah hingga kopi bubuk siap seduh, pilih sesuai kebutuhan dan selera Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
