import type { Metadata } from "next"
import { Montserrat, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "COGURA — Taste of Enrekang Arabica",
  description:
    "Kopi premium dari dataran tinggi Enrekang, Sulawesi Selatan. Diproses dengan dedikasi untuk secangkir kesempurnaan.",
  generator: "v0.app",
  metadataBase: new URL("https://cogura.store"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "COGURA — Taste of Enrekang Arabica",
    description: "Kopi premium dari dataran tinggi Enrekang, Sulawesi Selatan. Diproses dengan dedikasi untuk secangkir kesempurnaan.",
    url: "https://cogura.store",
    siteName: "COGURA",
    images: [
      {
        url: "/hero_image.jpg",
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
    title: "COGURA — Taste of Enrekang Arabica",
    description: "Kopi premium dari dataran tinggi Enrekang, Sulawesi Selatan.",
    images: ["/hero_image.jpg"],
  },
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${dmSans.variable} bg-background`}>
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
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}

