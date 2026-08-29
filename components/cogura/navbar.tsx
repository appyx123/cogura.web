"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { cn } from "@/lib/utils"
import { Locale, Dictionary } from "@/lib/get-dictionary"

type NavbarProps = {
  lang: Locale
  dict: Dictionary["navbar"]
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const links = [
    { label: dict.home, href: `/${lang}#home` },
    { label: dict.story, href: `/${lang}#story` },
    { label: dict.products, href: `/${lang}#products` },
  ]

  const waMsg = encodeURIComponent(
    lang === "en"
      ? "Hello COGURA, I would like to make an inquiry."
      : "Halo COGURA, saya ingin bertanya."
  )
  const waUrl = `https://wa.me/6282322222346?text=${waMsg}`

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href={`/${lang}#home`} className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold tracking-[0.18em] text-primary">COGURA</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
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

        <div className="hidden items-center gap-4 md:flex">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 p-1 text-xs font-semibold">
            <Globe className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            <a
              href="/id"
              className={cn(
                "rounded-full px-2.5 py-0.5 transition-all",
                lang === "id"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              ID
            </a>
            <a
              href="/en"
              className={cn(
                "rounded-full px-2.5 py-0.5 transition-all",
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              EN
            </a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {dict.contact}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-1 rounded-full border border-border/80 bg-secondary/50 p-1 text-xs font-semibold">
            <a
              href="/id"
              className={cn(
                "rounded-full px-2 py-0.5 transition-all",
                lang === "id"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              ID
            </a>
            <a
              href="/en"
              className={cn(
                "rounded-full px-2 py-0.5 transition-all",
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              EN
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {dict.contact}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
