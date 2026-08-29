import { getDictionary, Locale } from "@/lib/get-dictionary"
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
  const locale = (lang === "en" ? "en" : "id") as Locale
  const dict = await getDictionary(locale)

  return (
    <main className="min-h-screen bg-background">
      <Navbar lang={locale} dict={dict.navbar} />
      <Hero lang={locale} dict={dict.hero} />
      <Story dict={dict.story} />
      <Products lang={locale} dict={dict.products} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <Footer lang={locale} dict={dict.footer} />
    </main>
  )
}
