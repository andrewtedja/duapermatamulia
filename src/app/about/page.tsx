import AboutHero from '@/components/about/AboutHero'
// import OfficeLocation from '@/components/about/OfficeLocation'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AboutSection from '@/components/sections/AboutSection'
// import { Target } from 'lucide-react'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="bg-gray-50 flex-1 pt-16">
        <AboutHero />
        <AboutSection />

        {/* <CallToAction />  */}
        {/* Optional: Mission Statement - Translated if needed */}

        {/* <div className="border-t border-gray-200 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-700 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Misi Kami
            </h3>
            <p className="text-md lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Menjadi penyedia solusi telekomunikasi terpercaya yang
              menghadirkan sistem kamera berbasis AI dan teknologi pelacakan
              suara terkini untuk mendorong kemajuan dan membangun kemitraan
              jangka panjang.
            </p>
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
