import React from 'react'
import { Award, Search, Settings, Headphones } from 'lucide-react'
import AboutOfficeLocation from '../about/AboutOfficeLocation'

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900">TENTANG KAMI</h1>
          <h2 className="text-xl font-medium text-red-700 mb-6">
            PT. DUA PERMATA MULIA
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Company Overview */}
          <div>
            <div className="mb-8 mt-4 text-justify">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dua Permata Mulia adalah distributor terpercaya peralatan
                telekomunikasi berkualitas tinggi yang berbasis di Indonesia,
                khususnya dalam solusi audio, video, streaming dan{' '}
                <i>video conferencing</i>. Kami menyediakan berbagai produk
                unggulan dari merek ternama untuk mendukung kebutuhan komunikasi
                modern, seperti{' '}
                <strong>
                  Pro AV, Smart Classroom, AI Tracking Cameras, Streaming, dan
                  Video Conferencing
                </strong>
                . Fokus kami adalah memberikan solusi yang efektif dan mudah
                dijangkau sesuai kebutuhan klien.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sistem pelacakan suara canggih dan kamera berbasis AI kami
                menawarkan infrastruktur komunikasi hemat biaya yang dirancang
                untuk koordinasi multi-lokasi dan kebutuhan video konferensi
                skala perusahaan.
              </p>
            </div>

            <div className="border-l-4 border-red-700 pl-6">
              <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-3">
                Kemitraan Resmi
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Sebagai <span className="font-semibold">Distributor Resmi</span>{' '}
                produk sistem video konferensi AVer, kami menyediakan akses
                langsung ke solusi teknologi telekomunikasi terbaik di kelasnya.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-8">
              Layanan Menyeluruh
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    Produk Berkualitas dengan Garansi
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Peralatan telekomunikasi premium dengan jaminan garansi dan
                    kualitas terbaik.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    Survei, Konsultasi & Desain Sistem
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Penilaian lokasi, konsultasi produk, dan perancangan sistem
                    sesuai kebutuhan organisasi Anda.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    Implementasi Profesional
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Instalasi dan integrasi sistem dilakukan oleh teknisi
                    berpengalaman.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FC] rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h4 className="text-md lg:text-lg font-semibold text-gray-900 mb-2">
                    Dukungan Purna Jual
                  </h4>
                  <p className="text-xs lg:text-md text-gray-600">
                    Dukungan teknis berkelanjutan, layanan pemeliharaan, dan
                    optimasi sistem untuk kinerja maksimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Mission Statement - Translated if needed */}
        {/* 
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-700 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Misi Kami
            </h3>
            <p className="text-md lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Menjadi penyedia solusi telekomunikasi terpercaya yang menghadirkan sistem kamera berbasis AI dan teknologi pelacakan suara terkini untuk mendorong kesuksesan organisasi dan membangun kemitraan jangka panjang.
            </p>
          </div>
        </div> 
        */}
        <AboutOfficeLocation />
      </div>
    </section>
  )
}

export default AboutSection
