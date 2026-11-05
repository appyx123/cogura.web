import { getDictionary, hasLocale } from "@/lib/get-dictionary"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/cogura/navbar"
import { Hero } from "@/components/cogura/hero"
import { Story } from "@/components/cogura/story"
import { Products } from "@/components/cogura/products"
import { WhyChooseUs } from "@/components/cogura/why-choose-us"
import { Footer } from "@/components/cogura/footer"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-background">
      <Navbar lang={lang} dict={dict.navbar} />
      <Hero lang={lang} dict={dict.hero} />
      <Story dict={dict.story} />
      <Products lang={lang} dict={dict.products} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <Footer lang={lang} dict={dict.footer} nav={dict.navbar} />
    </main>
  )
}
