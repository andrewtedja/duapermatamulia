import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 h-[200vh] pt-16">
        <HeroSection />

        {/* <FeaturesSection />
				<ProductShowcase />
				<TrustedBySection />
				<CallToAction /> */}
      </main>

      {/* <Footer /> */}
    </>
  )
}
