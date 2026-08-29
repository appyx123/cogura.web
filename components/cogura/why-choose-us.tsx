import { Coffee, Mountain, Users } from "lucide-react"
import { Dictionary } from "@/lib/get-dictionary"

type WhyChooseUsProps = {
  dict: Dictionary["whyChooseUs"]
}

export function WhyChooseUs({ dict }: WhyChooseUsProps) {
  const features = [
    {
      icon: Coffee,
      title: dict.f1Title,
      description: dict.f1Desc,
    },
    {
      icon: Mountain,
      title: dict.f2Title,
      description: dict.f2Desc,
    },
    {
      icon: Users,
      title: dict.f3Title,
      description: dict.f3Desc,
    },
  ]

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{dict.badge}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            {dict.headline}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 transition-colors hover:bg-primary-foreground/10 md:p-10"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:-rotate-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold md:text-2xl">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-foreground/80">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
