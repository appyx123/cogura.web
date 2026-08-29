import { getDictionary, Locale } from "@/lib/get-dictionary"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale = (lang === "en" ? "en" : "id") as Locale
  const dict = await getDictionary(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://cogura.store/${locale}`,
      siteName: "COGURA",
      images: [
        {
          url: "/hero_image.webp",
          width: 1200,
          height: 630,
          alt: "COGURA - Taste of Enrekang Arabica",
        },
      ],
      locale: locale === "en" ? "en_US" : "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/hero_image.webp"],
    },
  }
}

export default async function LangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
