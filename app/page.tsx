import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProductSection } from "@/components/sections/product"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
