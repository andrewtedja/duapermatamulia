import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Clock, MapPin, Send, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white py-24  px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-red-800 mx-auto mb-6"></div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Hubungi kami melalui salah satu
            channel berikut.
          </p>
          <div className="w-16 h-0.5 bg-red-800 mx-auto mt-6"></div>
        </div>

        <div className="space-y-16">
          {/* Send an Inquiry Section */}
          <section className="relative">
            <div className="flex items-center mb-8">
              <Send className="h-6 w-6 text-red-800 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Kirim Pertanyaan
              </h2>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200 border-l-4 border-l-red-800 text-center">
              <p className="text-gray-600 mb-6 text-md">
                Minta penawaran harga atau tanyakan tentang produk. Tim kami
                akan menghubungi Anda dalam 24-48 jam.
              </p>
              <Link href="/inquiry">
                <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 text-lg">
                  Go to Inquiry Form
                </Button>
              </Link>
            </div>
          </section>

          {/* Section Divider */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="w-3 h-3 bg-red-800 rotate-45 mx-4"></div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <section className="relative">
            <div className="absolute left-0 top-0 w-1 h-8 bg-red-800"></div>
            <div className="flex items-center mb-8 pl-6">
              <PhoneCall className="h-6 w-6 text-red-800 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Channels
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Block */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 text-red-800 mr-2" />
                  Email
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 text-sm rounded">
                    <p className="font-medium text-gray-800 mb-1">General</p>
                    <a
                      href="mailto:info@company.com"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      info@company.com
                    </a>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 text-sm rounded">
                    <p className="font-medium text-gray-800 mb-1">Sales</p>
                    <a
                      href="mailto:sales@company.com"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      sales@company.com
                    </a>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 text-sm rounded">
                    <p className="font-medium text-gray-800 mb-1">Support</p>
                    <a
                      href="mailto:support@company.com"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      support@company.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Block */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 text-red-800 mr-2" />
                  Phone
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 text-sm rounded">
                    <p className="font-medium text-gray-800 mb-1">
                      Customer Support
                    </p>
                    <a
                      href="tel:+1-800-123-4567"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      +1 (800) 123-4567
                    </a>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 text-sm rounded">
                    <p className="font-medium text-gray-800 mb-1">
                      Sales Hotline
                    </p>
                    <a
                      href="tel:+1-800-987-6543"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      +1 (800) 987-6543
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Divider */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="w-3 h-3 bg-red-800 rotate-45 mx-4"></div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Business Hours Section */}
          <section className="relative">
            <div className="absolute left-0 top-0 w-1 h-8 bg-red-800"></div>
            <div className="flex items-center mb-8 pl-6">
              <Clock className="h-6 w-6 text-red-800 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Business Hours
              </h2>
            </div>
            <Card className="max-w-md border-gray-200 border-t-4 border-t-red-800">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="text-gray-900 font-medium">
                      8:30 AM - 17:30 PM
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Saturday-Sunday</span>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Semua waktu dalam WIB (Waktu Indonesia Barat) / GMT+7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section Divider */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="w-3 h-3 bg-red-800 rotate-45 mx-4"></div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Office Locations Section */}
          <section className="relative">
            <div className="absolute left-0 top-0 w-1 h-8 bg-red-800"></div>
            <div className="flex items-center mb-8 pl-6">
              <MapPin className="h-6 w-6 text-red-800 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Office Locations
              </h2>
            </div>

            {/* Map Placeholder */}
            <div className="mb-8">
              <div className="w-full h-64 bg-gray-200 border border-gray-300 border-t-4 border-t-red-800 flex items-center justify-center">
                <img
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+FF0000(106.6236722,-6.249992)/106.6236722,-6.249992,16/800x400?access_token=YOUR_MAPBOX_ACCESS_TOKEN
"
                  alt="Tangerang Office Map"
                />
              </div>
            </div>

            {/* Office Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-gray-200 border-l-4 border-l-red-800">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-800 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Head Office
                      </h3>
                      <p className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-1 text-red-800" />
                        Ruko Tematic Blok R/50 Jl. CBD Gading Serpong Selatan
                        Curug Sangereng, Kelapa Dua Kab. Tangerang – Banten
                      </p>
                      <p className="font-semibold mt-4">Contact Person:</p>
                      <ul className="pl-4 list-disc space-y-1">
                        <li>Jusak Budiman (+62-8111-7587-93)</li>
                        <li>Zainudine (+62-8129-2754-688)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 border-l-4 border-l-red-800">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-800 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Surabaya
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p className="flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-1 text-red-800" />
                          Manggis VIII M-651 Pondok Tjandra Indah Sidoarjo
                        </p>
                        <p className="flex items-center mt-2">
                          <Phone className="w-4 h-4 mr-2 text-red-800" />
                          +(6231) 9968-3636
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
        </div>
      </div>
    </div>
  )
}
