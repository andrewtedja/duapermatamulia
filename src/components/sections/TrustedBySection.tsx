import Image from 'next/image'
import React from 'react'

const OurUsers: React.FC = () => {
  // Partner logos with placeholder data
  const companies = [
    { id: 1, name: 'Company 1', logo: '/images/logo/logo-dpm.avif' },
    { id: 2, name: 'Company 2', logo: '/images/logo/logo-dpm.avif' },
    { id: 3, name: 'Company 3', logo: '/images/logo/logo-dpm.avif' },
    { id: 4, name: 'Company 4', logo: '/images/logo/logo-dpm.avif' },
    { id: 5, name: 'Company 5', logo: '/images/logo/logo-dpm.avif' },
    { id: 6, name: 'Company 6', logo: '/images/logo/logo-dpm.avif' },
    { id: 7, name: 'Company 7', logo: '/images/logo/logo-dpm.avif' },
    { id: 8, name: 'Company 8', logo: '/images/logo/logo-dpm.avif' },
    { id: 9, name: 'Company 9', logo: '/images/logo/logo-dpm.avif' },
    { id: 10, name: 'Company 10', logo: '/images/logo/logo-dpm.avif' }
  ]

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Users</h2>
          <div className="w-16 h-1 bg-red-400 mx-auto"></div>
        </div>

        {/* companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {companies.map((partner) => (
            <div
              key={partner.id}
              className="aspect-square bg-white  border border-gray-200 shadow-lg  transition-all flex items-center justify-center"
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
