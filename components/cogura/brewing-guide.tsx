"use client"

import { useState } from "react"
import { Coffee, Droplets, Flame, Timer } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dictionary } from "@/lib/get-dictionary"

type BrewingGuideProps = {
  dict: Dictionary["brewingGuide"]
}

export function BrewingGuide({ dict }: BrewingGuideProps) {
  const [activeId, setActiveId] = useState(dict.methods[0]?.id || "tubruk")
  const active = dict.methods.find((m) => m.id === activeId) || dict.methods[0]

  const metrics = [
    { icon: Coffee, label: dict.coffeeLabel, value: active.coffee },
    { icon: Droplets, label: dict.waterLabel, value: active.water },
    { icon: Flame, label: dict.tempLabel, value: active.temp },
    { icon: Timer, label: dict.timeLabel, value: active.time },
  ]

  return (
    <section id="brew" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {dict.badge}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-primary text-balance md:text-4xl lg:text-5xl">
            {dict.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {dict.subtitle}
          </p>
        </div>

        {/* Method Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3" role="tablist">
          {dict.methods.map((m) => {
            const isActive = m.id === active.id
            return (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(m.id)}
                className={cn(
                  "rounded-full border px-6 py-3 text-sm font-semibold transition-all cursor-pointer",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                )}
              >
                {m.name}
              </button>
            )
          })}
        </div>

        {/* Active Method Panel */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 md:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {active.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl">
                {active.name}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {metrics.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/80 bg-secondary/40 p-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                        <span>{item.label}</span>
                      </div>
                      <p className="mt-2 font-display text-base font-bold text-primary md:text-lg">
                        {item.value}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                {dict.stepsHeader}
              </h4>
              <ol className="mt-5 space-y-4">
                {active.steps.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-border/70 bg-background/70 p-4"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-accent-foreground">
                      {idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
