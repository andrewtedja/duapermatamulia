import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import { ScrollContainerSection } from '@/components/sections/ScrollContainerSection'
import TrustedBySection from '@/components/sections/TrustedBySection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="bg-gray-50 flex-1 pt-16">
        <HeroSection />
        <ScrollContainerSection />
        {/* <ProductShowcase /> */}

        <TrustedBySection />
        {/* <CallToAction />  */}
      </main>

      <Footer />
    </div>
  )
}
