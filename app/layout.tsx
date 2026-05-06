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
    icon: "/logo.svg",
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
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --background: #fdfbf7;
            --foreground: #1f2421;
            --primary: #183d33;
            --accent: #c5a059;
            --secondary: #f3ede1;
            --muted-foreground: #5c655f;
            --font-montserrat: "Montserrat", sans-serif;
            --font-dm-sans: "DM Sans", sans-serif;
          }
          body {
            background-color: var(--background);
            color: var(--foreground);
            font-family: var(--font-dm-sans);
            margin: 0;
            -webkit-font-smoothing: antialiased;
          }
          .font-display { font-family: var(--font-montserrat); }
          #home { background-color: var(--background); }
          h1 { font-family: var(--font-montserrat); font-weight: 800; color: var(--primary); }
        `}} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                      if (node.tagName === 'LINK' && node.rel === 'stylesheet') {
                        if (node.href.indexOf('063moh') !== -1 || node.href.indexOf('12p_95') !== -1) {
                          node.media = 'print';
                          node.onload = function() { this.media = 'all'; };
                        }
                      }
                    });
                  });
                });
                observer.observe(document.head, { childList: true });
              })();
            `
          }}
        />
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
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
