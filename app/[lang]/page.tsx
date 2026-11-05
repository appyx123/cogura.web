import { getDictionary, hasLocale } from "@/lib/get-dictionary"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/cogura/navbar"
import { Hero } from "@/components/cogura/hero"
import { Story } from "@/components/cogura/story"
import { Products } from "@/components/cogura/products"
import { WhyChooseUs } from "@/components/cogura/why-choose-us"
import { Wholesale } from "@/components/cogura/wholesale"
import { Footer } from "@/components/cogura/footer"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: `COGURA ${dict.products.items.greenBean.name}`,
          description: dict.products.items.greenBean.description,
          image: "https://cogura.store/green.webp",
          brand: { "@type": "Brand", name: "COGURA" },
          offers: {
            "@type": "Offer",
            url: `https://cogura.store/${lang}#products`,
            priceCurrency: "IDR",
            price: "180000",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: `COGURA ${dict.products.items.wholeBean.name}`,
          description: dict.products.items.wholeBean.description,
          image: "https://cogura.store/roasted.webp",
          brand: { "@type": "Brand", name: "COGURA" },
          offers: {
            "@type": "AggregateOffer",
            url: `https://cogura.store/${lang}#products`,
            priceCurrency: "IDR",
            lowPrice: "45000",
            highPrice: "220000",
            offerCount: 3,
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: `COGURA ${dict.products.items.ground.name}`,
          description: dict.products.items.ground.description,
          image: "https://cogura.store/bubuk.webp",
          brand: { "@type": "Brand", name: "COGURA" },
          offers: {
            "@type": "AggregateOffer",
            url: `https://cogura.store/${lang}#products`,
            priceCurrency: "IDR",
            lowPrice: "50000",
            highPrice: "240000",
            offerCount: 3,
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Navbar lang={lang} dict={dict.navbar} />
      <Hero lang={lang} dict={dict.hero} />
      <Story dict={dict.story} />
      <Products lang={lang} dict={dict.products} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <Wholesale dict={dict.wholesale} />
      <Footer lang={lang} dict={dict.footer} nav={dict.navbar} />
    </main>
  )
}
