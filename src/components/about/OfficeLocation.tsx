'use client'

import dynamic from 'next/dynamic'
import { MapPin, Phone } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import React from 'react'

// ⛔ Don't import from 'react-leaflet' here
const LeafletMap = dynamic(() => import('../map/LeafletMap'), {
  ssr: false,
  loading: () => <div className="h-64">Loading map...</div>
})

const OfficeLocation = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 w-1 h-8 bg-red-800" />
      <div className="flex items-center mb-8 pl-6">
        <MapPin className="h-6 w-6 text-red-800 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-900">
          Office Locations
        </h2>
      </div>

      {/* Map container */}
      <div className="mb-8 w-full">
        <div className="w-full h-96 border border-gray-300 border-t-4 border-t-red-800 rounded overflow-hidden">
          <LeafletMap />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-gray-200 border-l-4 border-l-red-800">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Head Office
                </h3>
                <p className="flex items-start">
                  <MapPin className="w-8 h-8 mr-2  text-red-800" />
                  Ruko Tematic Blok R/50 Jl. CBD Gading Serpong Selatan Curug
                  Sangereng, Kelapa Dua Kab. Tangerang – Banten
                </p>
                <p className="flex items-center mt-2">
                  <Phone className="w-4 h-4 mr-2 text-red-800" />
                  +(62-21) 2932-4647
                </p>
                <p className="font-semibold mt-4">Contact Person:</p>
                <ul className="pl-4 list-disc space-y-1">
                  <li>Jusak Budiman (+62-8111-7587-93)</li>
                  <li>Zainudine (+62-812-8313-584)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 border-l-4 border-l-red-800">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Surabaya</h3>
                <div className="text-gray-600 space-y-1">
                  <p className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-red-800" />
                    Manggis VIII M-651 Pondok Tjandra Indah Sidoarjo
                  </p>
                  <p className="flex items-center mt-2">
                    <Phone className="w-4 h-4 mr-2 text-red-800" />
                    +(62-31) 9968-3636
                  </p>
                  <p className="font-semibold mt-4">Contact Person:</p>
                  <ul className="pl-4 list-disc space-y-1">
                    <li>Satriyadi (+62-8113-3232-8)</li>
                    <li>Aries (+62-8155-1002-21)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default OfficeLocation
