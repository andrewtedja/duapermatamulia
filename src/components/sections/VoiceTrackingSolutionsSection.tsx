'use client'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

import { partners } from '@/data/solutions'
import Image from 'next/image'
import Link from 'next/link'

const VoiceTrackingSolutionsSection = () => {
  const [selectedPartner, setSelectedPartner] = useState<string | null>('shure')

  const handlePartnerClick = (partnerId: string) => {
    setSelectedPartner(selectedPartner === partnerId ? 'null' : partnerId)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Voice Tracking Solutions
            </h2>
            <div className="w-16 h-1 bg-red-400 mx-auto"></div>
          </div>
        </div>

        <div className="flex gap-4 lg:gap-8">
          {/* Left side - Partner grid */}
          <div className="w-1/2 flex-1 flex flex-col justify-between h-full">
            <div className="grid grid-cols-2 gap-1 lg:gap-4 flex-grow">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className={`bg-white rounded-md cursor-pointer flex items-center justify-center px-2 lg:px-6 py-2 lg:py-0 transition-all duration-200 border border-gray-200 ${
                    selectedPartner === partner.id
                      ? ' shadow-2xl border-gray-300'
                      : 'border-gray-200 hover:shadow-md hover:shadow-gray-200'
                  } h-full`}
                  onClick={() => handlePartnerClick(partner.id)}
                >
                  <div className="p-0 lg:p-4">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={140}
                        height={140}
                        style={{ objectPosition: 'center' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Partner details */}
          <div className="w-1/2">
            {selectedPartner ? (
              <div className="bg-white rounded-lg shadow-2xl p-6 h-full">
                {(() => {
                  const partner = partners.find((p) => p.id === selectedPartner)
                  if (!partner) return null

                  return (
                    <>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center justify-center space-x-3 mb-3">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={140}
                            height={140}
                            style={{ objectPosition: 'center' }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        {partner.name}
                      </h1>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-6">
                        {partner.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <button className="text-blue-600 hover:text-blue-800 font-semibold text-md flex items-center space-x-1">
                            <Link href={partner.visitLink}>
                              Visit {partner.name}
                            </Link>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Supported Models
                          </h4>
                          <ul className="space-y-1">
                            {partner.supportedModels.map((model, index) => (
                              <li
                                key={index}
                                className="text-blue-600  text-xs lg:text-sm cursor-pointer"
                              >
                                {model}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Resources */}
                        {/* <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Resources
                          </h4>
                          <div className="space-y-2">
                            {partner.resources.map((resource, index) => (
                              <button
                                key={index}
                                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                              >
                                <resource.icon className="w-4 h-4" />
                                <span>{resource.text}</span>
                              </button>
                            ))}
                          </div>
                        </div> */}
                      </div>
                    </>
                  )
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center h-96">
                <p className="text-gray-500 text-center">
                  Select a partner to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoiceTrackingSolutionsSection
