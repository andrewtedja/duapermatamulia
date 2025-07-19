import Image from 'next/image'
import React from 'react'

const OurUsers: React.FC = () => {
  // Partner logos with placeholder data
  const partners = [
    { id: 1, name: 'Company 1', logo: '/images/partners/company1.png' },
    { id: 2, name: 'Company 2', logo: '/images/partners/company2.png' },
    { id: 3, name: 'Company 3', logo: '/images/partners/company3.png' },
    { id: 4, name: 'Company 4', logo: '/images/partners/company4.png' },
    { id: 5, name: 'Company 5', logo: '/images/partners/company5.png' },
    { id: 6, name: 'Company 6', logo: '/images/partners/company6.png' },
    { id: 7, name: 'Company 7', logo: '/images/partners/company7.png' },
    { id: 8, name: 'Company 8', logo: '/images/partners/company8.png' },
    { id: 9, name: 'Company 9', logo: '/images/partners/company9.png' },
    { id: 10, name: 'Company 10', logo: '/images/partners/company10.png' }
  ]

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Users</h2>
          <div className="w-16 h-1 bg-red-400 mx-auto"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="aspect-square bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurUsers
