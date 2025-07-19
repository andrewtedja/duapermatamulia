import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AboutSection from '@/components/sections/AboutSection'
import HeroSection from '@/components/sections/HeroSection'
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection'
import { ScrollContainerSection } from '@/components/sections/ScrollContainerSection'
import TrustedBySection from '@/components/sections/TrustedBySection'
import VoiceTrackingSolutionsSection from '@/components/sections/VoiceTrackingSolutionsSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="bg-gray-50 flex-1 pt-16">
        <HeroSection />
        <ProductShowcaseSection />
        <ScrollContainerSection />
        <VoiceTrackingSolutionsSection />
        <AboutSection />

        <TrustedBySection />
        {/* <CallToAction />  */}
      </main>

      <Footer />
    </div>
  )
}
