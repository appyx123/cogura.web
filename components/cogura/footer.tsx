import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react"

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "WhatsApp", href: "https://wa.me/6282246641848", icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-extrabold tracking-[0.18em] text-primary">COGURA</span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Taste of Enrekang Arabica. Kopi specialty dari dataran tinggi Sulawesi Selatan, diproses dengan dedikasi.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Menu</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="transition-colors hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="transition-colors hover:text-primary">
                  Story
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-primary">
                  Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Hubungi Kami</h3>
            <p className="mt-4 text-sm text-muted-foreground">Enrekang, Sulawesi Selatan</p>
            <p className="mt-1 text-sm text-muted-foreground">hello@cogura.id</p>
            <ul className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} COGURA. Taste of Enrekang Arabica. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Brewed with care in Sulawesi Selatan.</p>
        </div>
      </div>
    </footer>
  )
}
