import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import PhotoCarousel from "@/components/photo-carousel"
import { Services } from "@/components/services"
import { BusinessSide } from "@/components/business-side"
import { Office } from "@/components/office"
import { Videos } from "@/components/videos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AiChatFab } from "@/components/ai-chat-fab"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      <About />

      <PhotoCarousel />

      <Services />

      <BusinessSide />

      <Office />

      <Videos />

      <Contact />

      <Footer />
      <AiChatFab />
    </main>
  )
}
