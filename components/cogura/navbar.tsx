"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Products", href: "#products" },
]

const WA_URL = "https://wa.me/6282246641848?text=Halo%20COGURA%2C%20saya%20ingin%20bertanya."

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-[0.18em] text-primary">COGURA</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Hubungi Kami
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 md:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hubungi Kami
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
