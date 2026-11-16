import { getDictionary, hasLocale } from "@/lib/get-dictionary"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Montserrat, DM_Sans } from "next/font/google"
import { Analytics, LocalBusinessSchema } from "@/components/cogura/root-extras"
import { siteUrl } from "@/lib/site"
import "../globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

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
    metadataBase: new URL(siteUrl),
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
      url: `${siteUrl}/${lang}`,
      siteName: "COGURA",
      images: [
        {
          url: "/og-cover.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
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
      images: ["/og-cover.jpg"],
    },
    icons: {
      icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
      apple: "/logo.svg",
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
    <html
      lang={lang}
      className={`${montserrat.variable} ${dmSans.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
