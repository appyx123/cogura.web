import { Navbar } from "@/components/cogura/navbar"
import { Hero } from "@/components/cogura/hero"
import { Story } from "@/components/cogura/story"
import { Products } from "@/components/cogura/products"
import { WhyChooseUs } from "@/components/cogura/why-choose-us"
import { Footer } from "@/components/cogura/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Story />
      <Products />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
