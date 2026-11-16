export const siteUrl = "https://cogura.store"

export const whatsappNumber = "6282322222346"

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "COGURA Coffee",
  image: `${siteUrl}/logo.svg`,
  description:
    "Kopi Arabika Specialty Single Origin dari Dusun Gura, Desa Buntu Mondong, Enrekang (1.300–1.600 mdpl). Terlindungi Indikasi Geografis Kalosi Enrekang No. Reg. IDG000000018.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dusun Gura, Desa Buntu Mondong, Kecamatan Buntu Batu",
    addressLocality: "Enrekang",
    addressRegion: "Sulawesi Selatan",
    addressCountry: "ID",
  },
  telephone: `+${whatsappNumber}`,
  url: siteUrl,
}
