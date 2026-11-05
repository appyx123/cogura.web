import { PackageCheck, Flame, Handshake } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { Dictionary } from "@/lib/get-dictionary"

type WholesaleProps = {
  dict: Dictionary["wholesale"]
}

export function Wholesale({ dict }: WholesaleProps) {
  const benefits = [
    {
      icon: PackageCheck,
      title: dict.b1Title,
      description: dict.b1Desc,
    },
    {
      icon: Flame,
      title: dict.b2Title,
      description: dict.b2Desc,
    },
    {
      icon: Handshake,
      title: dict.b3Title,
      description: dict.b3Desc,
    },
  ]

  const priceListUrl = `https://wa.me/6282322222346?text=${encodeURIComponent(dict.waPriceListMsg)}`
  const sampleUrl = `https://wa.me/6282322222346?text=${encodeURIComponent(dict.waSampleMsg)}`

  return (
    <section id="wholesale" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {dict.badge}
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-primary text-balance md:text-4xl">
                {dict.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {dict.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={priceListUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {dict.ctaPriceList}
                </a>
                <a
                  href={sampleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {dict.ctaSample}
                </a>
              </div>
            </div>

            <div className="grid gap-5 lg:col-span-6">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.title}
                    className="flex gap-4 rounded-2xl border border-border/80 bg-background/70 p-5 transition-colors hover:border-accent/60"
                  >
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-primary md:text-lg">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {b.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
