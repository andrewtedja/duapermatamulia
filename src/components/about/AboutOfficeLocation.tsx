'use client'

import dynamic from 'next/dynamic'
import { MapPin } from 'lucide-react'
import React from 'react'
import ContactButton from '../buttons/ContactButton'

// Dynamically import the map
const LeafletMap = dynamic(() => import('../map/LeafletMap'), {
  ssr: false,
  loading: () => <div className="h-64">Loading map...</div>
})

const AboutOfficeLocation = () => {
  return (
    <section className="mt-20">
      <div className="absolute left-0 top-0 w-1 h-8 bg-red-800" />
      <div className="flex items-center mb-6 pl-6">
        <MapPin className="h-6 w-6 text-red-800 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-900">
          Jangkauan Kantor Kami
        </h2>
      </div>

      <p className="text-gray-700 mb-8 px-6 max-w-3xl leading-relaxed">
        Dengan kantor berlokasi di <strong>Tangerang</strong> dan{' '}
        <strong>Surabaya</strong>, kami siap mendukung kebutuhan pelanggan di
        berbagai wilayah Indonesia. Keberadaan fisik kami mencerminkan komitmen
        untuk pelayanan langsung dan cepat.
      </p>

      <div className="px-6">
        <div className="w-full h-96 border border-gray-300 border-t-4 border-t-red-800 rounded overflow-hidden">
          <LeafletMap />
        </div>

        <div className="mt-8 flex justify-center">
          <ContactButton />
        </div>

        {/* Alternative: Card-style CTA */}
        {/* <div className="mt-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-full">
                <Mail className="h-6 w-6 text-red-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Butuh Informasi Lebih Lanjut?
                </h3>
                <p className="text-gray-600 text-sm">
                  Dapatkan detail kontak lengkap dan alamat kantor kami
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-red-800 text-red-800 font-medium rounded-lg hover:bg-red-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>Detail Kontak</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default AboutOfficeLocation
