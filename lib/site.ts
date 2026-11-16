export const siteUrl = "https://cogura.store"

export const whatsappNumber = "6282322222346"

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "COGURA Coffee",
  image: `${siteUrl}/logo.svg`,
  description: "Kopi Arabika Premium dari Enrekang",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Enrekang",
    addressRegion: "Sulawesi Selatan",
    addressCountry: "ID",
  },
  telephone: `+${whatsappNumber}`,
  url: siteUrl,
}
