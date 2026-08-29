import Image from "next/image"
import { Dictionary } from "@/lib/get-dictionary"

type StoryProps = {
  dict: Dictionary["story"]
}

export function Story({ dict }: StoryProps) {
  return (
    <section id="story" className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/panen.webp"
                alt="Kebun kopi arabika di dataran tinggi Enrekang"
                fill
                quality={75}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 items-center justify-center rounded-full bg-accent text-center font-display text-sm font-bold leading-tight text-accent-foreground shadow-xl md:flex">
              Enrekang
              <br />
              Est. 1900s
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{dict.badge}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-primary text-balance md:text-4xl lg:text-5xl">
            {dict.headline}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-[17px]">
            <p>{dict.p1}</p>
            <p>{dict.p2}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-3xl font-bold text-primary">20+</p>
              <p className="mt-1 text-sm text-muted-foreground">{dict.metricFarmers}</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-primary">3</p>
              <p className="mt-1 text-sm text-muted-foreground">{dict.metricMethods}</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-primary">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">{dict.metricOrigin}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
