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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "COGURA - Kopi Arabika Premium dari Dataran Tinggi Enrekang",
  description:
    "Rasakan kenikmatan sejati kopi Arabika premium dari lereng vulkanik Enrekang, Sulawesi Selatan. Diproses dengan dedikasi penuh untuk kesempurnaan tiap cangkir.",
  openGraph: {
    title: "COGURA - Kopi Arabika Premium dari Dataran Tinggi Enrekang",
    description:
      "Rasakan kenikmatan sejati kopi Arabika premium dari lereng vulkanik Enrekang, Sulawesi Selatan. Diproses dengan dedikasi penuh untuk kesempurnaan tiap cangkir.",
    url: siteUrl,
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
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COGURA - Kopi Arabika Premium dari Dataran Tinggi Enrekang",
    description:
      "Rasakan kenikmatan sejati kopi Arabika premium dari lereng vulkanik Enrekang, Sulawesi Selatan. Diproses dengan dedikasi penuh untuk kesempurnaan tiap cangkir.",
    images: ["/og-cover.jpg"],
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
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
