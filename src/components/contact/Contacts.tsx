import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Clock, Send, PhoneCall, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ContactsHero from './ContactsHero'
import OfficeLocation from '../about/OfficeLocation'

export default function ContactUsPage() {
  return (
    <>
      <ContactsHero />
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          {/* <div className="text-center mb-16">
          <div className="w-24 h-1 bg-red-800 mx-auto mb-6"></div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Hubungi kami melalui salah satu
            channel berikut.
          </p>
          <div className="w-16 h-0.5 bg-red-800 mx-auto mt-6"></div>
        </div> */}

          <div className="space-y-16">
            {/* Send an Inquiry Section */}
            <section className="relative">
              <div className="flex items-center mb-8">
                <Send className="h-6 w-6 text-red-800 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Ajukan Pertanyaan
                </h2>
              </div>
              <div className="bg-gray-50 p-16 border border-gray-200 border-l-4 border-l-red-800 text-center">
                <p className="text-gray-600 mb-6 text-md">
                  Minta penawaran harga atau tanyakan tentang produk. Tim kami
                  akan menghubungi Anda dalam 24-48 jam.
                </p>
                <Link
                  href="/inquiry"
                  className="group relative inline-flex items-center px-8 py-4 bg-red-800 text-white font-semibold rounded-lg shadow-lg hover:bg-red-900 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-out"
                >
                  <div className="flex items-center space-x-3">
                    <span>Go to Inquiry Form</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-400 group-hover:w-[97%] transition-all duration-300"></div>
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
                        info@duapermatamulia.com
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
                        +62-21-2932-4647
                      </a>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 text-sm rounded">
                      <p className="font-medium text-gray-800 mb-1">
                        Contact Person (Head Office)
                      </p>
                      <a
                        href="tel:+1-800-987-6543"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Jusak (+62-8111-7587-93)
                      </a>
                      <br />
                      <a
                        href="tel:+1-800-987-6543"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Zainudine (+62-8129-2754-688)
                      </a>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 text-sm rounded">
                      <p className="font-medium text-gray-800 mb-1">
                        Contact Person (Surabaya)
                      </p>
                      <a
                        href="tel:+1-800-987-6543"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Satriyadi (+62-8113-3232-8)
                      </a>
                      <br />
                      <a
                        href="tel:+1-800-987-6543"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Aries (+62-8155-1002-21)
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
            <OfficeLocation />
          </div>
        </div>
      </div>
    </>
  )
}
