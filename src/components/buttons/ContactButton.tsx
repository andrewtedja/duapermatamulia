import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
  return (
    <div>
      {' '}
      <Link
        href="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-red-800 text-white font-semibold rounded-lg shadow-lg hover:bg-red-900 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-out"
      >
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5" />
          <span>Hubungi Kami Sekarang</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-400 group-hover:w-[97%] transition-all duration-300"></div>
      </Link>
    </div>
  )
}

export default ContactButton
