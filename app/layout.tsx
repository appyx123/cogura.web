import type { Metadata } from "next"
import { Montserrat, DM_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"

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
  title: "COGURA: Kopi Arabika Premium dari Dataran Tinggi Enrekang",
  description:
    "Rasakan kenikmatan sejati kopi Arabika premium dari lereng vulkanik Enrekang, Sulawesi Selatan. Diproses dengan dedikasi penuh untuk kesempurnaan tiap cangkir.",
  generator: "v0.app",
  metadataBase: new URL("https://cogura.store"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "COGURA: Kopi Arabika Premium dari Dataran Tinggi Enrekang",
    description: "Rasakan kenikmatan sejati kopi Arabika premium dari lereng vulkanik Enrekang, Sulawesi Selatan. Diproses dengan dedikasi penuh untuk kesempurnaan tiap cangkir.",
    url: "https://cogura.store",
    siteName: "COGURA",
    images: [
      {
        url: "/hero_image.webp",
        width: 1200,
        height: 630,
        alt: "COGURA - Taste of Enrekang Arabica",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COGURA: Kopi Arabika Premium dari Dataran Tinggi Enrekang",
    description: "Rasakan kenikmatan sejati kopi Arabika premium dari lereng vulkanik Enrekang, Sulawesi Selatan. Diproses dengan dedikasi penuh untuk kesempurnaan tiap cangkir.",
    images: ["/hero_image.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "COGURA Coffee",
    "image": "https://cogura.store/logo.svg",
    "description": "Kopi Arabika Premium dari Enrekang",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Enrekang",
      "addressRegion": "Sulawesi Selatan",
      "addressCountry": "ID"
    },
    "telephone": "+628000000000",
    "url": "https://cogura.store"
  };

  return (
    <html lang="id" className={`${montserrat.variable} ${dmSans.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics Placeholder */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
