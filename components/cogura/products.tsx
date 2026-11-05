"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Check, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
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
  numericPrices: Record<string, number>
  roasts?: string[]
}

type CartItem = {
  key: string
  productId: string
  name: string
  weight: string
  roast?: string
  unitPrice: number
  qty: number
}

type ProductsProps = {
  lang: Locale
  dict: Dictionary["products"]
}

const CART_STORAGE_KEY = "cogura_cart_v1"

function formatIdr(amount: number) {
  return `Rp ${amount.toLocaleString("id-ID")}`
}

function ProductCard({
  product,
  dict,
  onAddToCart,
}: {
  product: Product
  dict: Dictionary["products"]
  onAddToCart: (item: Omit<CartItem, "qty">) => void
}) {
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0])
  const [selectedRoast, setSelectedRoast] = useState(product.roasts?.[0] || "")
  const [justAdded, setJustAdded] = useState(false)

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

  const handleAdd = () => {
    const key = `${product.id}-${selectedWeight}-${selectedRoast || "none"}`
    onAddToCart({
      key,
      productId: product.id,
      name: product.name,
      weight: selectedWeight,
      roast: product.roasts ? selectedRoast : undefined,
      unitPrice: product.numericPrices[selectedWeight],
    })
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1200)
  }

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

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-border/50">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{dict.price}</p>
            <p className="font-display text-lg font-extrabold text-primary">{product.prices[selectedWeight]}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-secondary/60 px-4 py-2.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              {justAdded ? <Check className="h-3.5 w-3.5" /> : <ShoppingBag className="h-3.5 w-3.5" />}
              {justAdded ? dict.added : dict.addToCart}
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-accent-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              {dict.orderWa}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Products({ dict }: ProductsProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [customerName, setCustomerName] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) setCart(parsed)
      }
    } catch {
      // ignore localStorage read errors
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch {
      // ignore localStorage write errors
    }
  }, [cart])

  const handleAddToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.key === item.key)
      if (existing) {
        return prev.map((i) => (i.key === item.key ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const updateQty = (key: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    )
  }

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalAmount = cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0)

  const buildCartWaUrl = () => {
    const lines = [
      dict.waCartIntro,
      ...cart.map((item, idx) => {
        const variant = item.roast ? `${item.weight}, ${item.roast}` : item.weight
        return `${idx + 1}. ${item.name} (${variant}) x${item.qty} = ${formatIdr(item.unitPrice * item.qty)}`
      }),
      "",
      `${dict.waCartTotal}: ${formatIdr(totalAmount)}`,
    ]
    if (customerName.trim()) {
      lines.push(`${dict.waCartName}: ${customerName.trim()}`)
    }
    if (customerAddress.trim()) {
      lines.push(`${dict.waCartAddress}: ${customerAddress.trim()}`)
    }
    return `https://wa.me/6282322222346?text=${encodeURIComponent(lines.join("\n"))}`
  }

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
        "1kg": "Rp 180.000",
      },
      numericPrices: {
        "1kg": 180000,
      },
    },
    {
      id: "whole-bean",
      name: dict.items.wholeBean.name,
      tagline: dict.items.wholeBean.tagline,
      description: dict.items.wholeBean.description,
      image: "/roasted.webp",
      notes: ["Citrus", "Brown Sugar", "Floral"],
      weights: ["200g", "500g", "1kg"],
      prices: {
        "200g": "Rp 45.000",
        "500g": "Rp 110.000",
        "1kg": "Rp 220.000",
      },
      numericPrices: {
        "200g": 45000,
        "500g": 110000,
        "1kg": 220000,
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
      weights: ["200g", "500g", "1kg"],
      prices: {
        "200g": "Rp 50.000",
        "500g": "Rp 120.000",
        "1kg": "Rp 240.000",
      },
      numericPrices: {
        "200g": 50000,
        "500g": 120000,
        "1kg": 240000,
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
            <ProductCard key={p.id} product={p} dict={dict} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>

      {/* Floating Cart Drawer */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        {totalItems > 0 && (
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label={dict.cartTitle}
              className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/95 cursor-pointer"
            >
              <span className="relative inline-flex items-center">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-accent-foreground">
                  {totalItems}
                </span>
              </span>
              <span className="hidden sm:inline">{formatIdr(totalAmount)}</span>
            </button>
          </SheetTrigger>
        )}

        <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
          <SheetHeader className="border-b border-border pb-4">
            <div className="flex items-center justify-between pr-6">
              <SheetTitle className="font-display text-xl font-bold text-primary">
                {dict.cartTitle}
              </SheetTitle>
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={() => setCart([])}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-destructive cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  {dict.clearCart}
                </button>
              )}
            </div>
            <SheetDescription>{dict.cartSubtitle}</SheetDescription>
          </SheetHeader>

          {cart.length === 0 ? (
            <div className="flex flex-1 items-center justify-center p-6 text-center text-sm text-muted-foreground">
              {dict.cartEmpty}
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-3 overflow-y-auto px-4">
                {cart.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-sm font-bold text-primary">{item.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.weight}
                        {item.roast ? ` · ${item.roast}` : ""} — {formatIdr(item.unitPrice)}
                      </p>
                      <p className="mt-1 font-display text-sm font-bold text-accent">
                        {formatIdr(item.unitPrice * item.qty)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQty(item.key, -1)}
                        aria-label="Decrease quantity"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary/50 text-primary hover:bg-secondary cursor-pointer"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.key, 1)}
                        aria-label="Increase quantity"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary/50 text-primary hover:bg-secondary cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-border p-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground">
                      {dict.customerName}
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder={dict.customerNamePlaceholder}
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground">
                      {dict.customerAddress}
                    </label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder={dict.customerAddressPlaceholder}
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {dict.cartTotal}
                  </span>
                  <span className="font-display text-xl font-extrabold text-primary">
                    {formatIdr(totalAmount)}
                  </span>
                </div>

                <a
                  href={buildCartWaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-md transition-all hover:shadow-lg"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {dict.checkoutWa}
                </a>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  )
}
