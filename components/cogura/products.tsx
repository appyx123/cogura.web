"use client"

import Image from "next/image"
import { useState } from "react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { Locale, Dictionary } from "@/lib/get-dictionary"

type Product = {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  notes: string[]
  weights: string[]
  prices: Record<string, string>
  roasts?: string[]
}

type ProductsProps = {
  lang: Locale
  dict: Dictionary["products"]
}

function ProductCard({ product, dict }: { product: Product; dict: Dictionary["products"] }) {
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0])
  const [selectedRoast, setSelectedRoast] = useState(product.roasts?.[0] || "")

  // Build the WhatsApp message dynamically from dictionary template
  let message = dict.waMsg
    .replace("{name}", product.name)
    .replace("{weight}", selectedWeight)

  if (product.roasts) {
    message = dict.waMsgRoast
      .replace("{name}", product.name)
      .replace("{weight}", selectedWeight)
      .replace("{roast}", selectedRoast)
  }

  const waLink = `https://wa.me/6282322222346?text=${encodeURIComponent(message)}`

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={`Kopi ${product.name} COGURA`}
          fill
          quality={75}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{dict.roastLevel}</span>
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
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{dict.sizeWeight}</span>
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
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{dict.price}</p>
            <p className="font-display text-lg font-extrabold text-primary">{product.prices[selectedWeight]}</p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {dict.orderWa}
          </a>
        </div>
      </div>
    </article>
  )
}

export function Products({ dict }: ProductsProps) {
  const products: Product[] = [
    {
      id: "green-bean",
      name: dict.items.greenBean.name,
      tagline: dict.items.greenBean.tagline,
      description: dict.items.greenBean.description,
      image: "/green.webp",
      notes: ["Fresh", "High Altitude"],
      weights: ["1kg"],
      prices: {
        "1kg": "Rp 169.000",
      },
    },
    {
      id: "whole-bean",
      name: dict.items.wholeBean.name,
      tagline: dict.items.wholeBean.tagline,
      description: dict.items.wholeBean.description,
      image: "/roasted.webp",
      notes: ["Citrus", "Brown Sugar", "Floral"],
      weights: ["200g", "500g", "1000g"],
      prices: {
        "200g": "Rp 39.000",
        "500g": "Rp 95.000",
        "1000g": "Rp 189.000",
      },
      roasts: ["Light", "Medium", "Dark"],
    },
    {
      id: "ground",
      name: dict.items.ground.name,
      tagline: dict.items.ground.tagline,
      description: dict.items.ground.description,
      image: "/bubuk.webp",
      notes: ["Red Berry", "Dark Chocolate", "Wine"],
      weights: ["200g", "500g", "1000g"],
      prices: {
        "200g": "Rp 49.000",
        "500g": "Rp 109.000",
        "1000g": "Rp 219.000",
      },
      roasts: ["Light", "Medium", "Dark"],
    },
  ]

  return (
    <section id="products" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{dict.badge}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-primary text-balance md:text-4xl lg:text-5xl">
            {dict.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  )
}
