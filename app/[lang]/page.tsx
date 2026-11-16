import { getDictionary, hasLocale } from "@/lib/get-dictionary"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/cogura/navbar"
import { Hero } from "@/components/cogura/hero"
import { Story } from "@/components/cogura/story"
import { Products } from "@/components/cogura/products"
import { BrewingGuide } from "@/components/cogura/brewing-guide"
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
          countryOfOrigin: "ID",
          additionalProperty: [
            { "@type": "PropertyValue", name: "Origin", value: "Dusun Gura, Desa Buntu Mondong, Enrekang" },
            { "@type": "PropertyValue", name: "Altitude", value: "1300-1600 masl (SHB)" },
            { "@type": "PropertyValue", name: "Varieties", value: "Typica, Lini S-795, Kartika, Andungsari-1, Bourbon" },
            { "@type": "PropertyValue", name: "Process", value: "Full Wash (Roof-Dried)" },
            { "@type": "PropertyValue", name: "Geographical Indication", value: "IDG000000018 (Kopi Arabika Kalosi Enrekang)" },
          ],
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
          countryOfOrigin: "ID",
          additionalProperty: [
            { "@type": "PropertyValue", name: "Origin", value: "Dusun Gura, Desa Buntu Mondong, Enrekang" },
            { "@type": "PropertyValue", name: "Process", value: "Full Wash (Roof-Dried)" },
            { "@type": "PropertyValue", name: "Geographical Indication", value: "IDG000000018" },
          ],
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
          countryOfOrigin: "ID",
          additionalProperty: [
            { "@type": "PropertyValue", name: "Origin", value: "Dusun Gura, Desa Buntu Mondong, Enrekang" },
            { "@type": "PropertyValue", name: "Process", value: "Full Wash (Roof-Dried)" },
            { "@type": "PropertyValue", name: "Geographical Indication", value: "IDG000000018" },
          ],
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
      <BrewingGuide dict={dict.brewingGuide} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <Wholesale dict={dict.wholesale} />
      <Footer lang={lang} dict={dict.footer} nav={dict.navbar} />
    </main>
  )
}
