import { getDictionary, hasLocale } from "@/lib/get-dictionary"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const dynamicParams = false

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        id: "/id",
        en: "/en",
        "x-default": "/id",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://cogura.store/${lang}`,
      siteName: "COGURA",
      images: [
        {
          url: "/hero_image.webp",
          width: 1200,
          height: 630,
          alt: "COGURA - Taste of Enrekang Arabica",
        },
      ],
      locale: lang === "en" ? "en_US" : "id_ID",
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
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)};`,
        }}
      />
      {children}
    </>
  )
}
