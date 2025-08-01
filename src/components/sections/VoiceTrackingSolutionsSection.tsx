'use client'

import { useState } from 'react'
import { ExternalLink, CheckCircle, ArrowRight } from 'lucide-react'
import { partners } from '@/data/solutions'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import DownloadSolutionButton from '../buttons/DownloadSolutionsButton'

const VoiceTrackingSolutionsSection = () => {
  const [selectedPartner, setSelectedPartner] = useState<string>('shure')

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        {/* Enhanced Header */}
        <div className="text-center mb-8 ">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Industry-Leading Partners
          </div>
          <h1 className="text-4xl lg:text-5xl  font-bold text-gray-900 mb-6 tracking-tight">
            Voice Tracking
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Solutions
            </span>
          </h1>
          <p className="text-xs lg:text-lg  text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of voice tracking solutions from
            industry-leading partners. Select a partner to learn more about
            their technology and supported models.
          </p>
        </div>

        {/* Mobile Enhanced View */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {/* Partner Selection Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {partners.slice(0, 6).map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => setSelectedPartner(partner.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedPartner === partner.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {partner.name}
                </button>
              ))}
            </div>

            {/* Selected Partner Details */}
            {(() => {
              const partner = partners.find((p) => p.id === selectedPartner)
              if (!partner) return null

              return (
                <Card className="overflow-hidden border-0 shadow-xl shadow-gray-900/10">
                  <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white backdrop-blur-sm rounded-lg p-3">
                        <Image
                          src={partner.logo || '/placeholder.svg'}
                          alt={partner.name}
                          width={60}
                          height={40}
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{partner.name}</h3>
                        <Link
                          href={partner.visitLink}
                          className="text-blue-300 hover:text-white  text-sm flex items-center space-x-1 mt-1 transition-colors"
                        >
                          <span>Visit {partner.name}</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {partner.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        Supported Models
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.supportedModels.map((model, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                          >
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })()}
          </div>
        </div>

        {/* Desktop Enhanced Grid View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-12">
            {/* Partner Selection Grid */}
            <div className="col-span-5">
              <div className="sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Select Partner
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  {partners.map((partner) => (
                    <Card
                      key={partner.id}
                      className={`group cursor-pointer transition-all duration-300 hover:scale-105 border-0 ${
                        selectedPartner === partner.id
                          ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20 bg-gradient-to-br from-blue-50 to-indigo-50'
                          : 'hover:shadow-lg shadow-md bg-white hover:shadow-gray-900/10'
                      }`}
                      onClick={() => setSelectedPartner(partner.id)}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center aspect-video justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src={partner.logo || '/placeholder.svg'}
                          alt={partner.name}
                          width={100}
                          height={60}
                          className="object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                          loading="lazy"
                        />
                        {selectedPartner === partner.id && (
                          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Partner Details */}
            <div className="col-span-7">
              {selectedPartner && (
                <Card className="border-0 shadow-2xl shadow-gray-900/10 overflow-hidden">
                  {(() => {
                    const partner = partners.find(
                      (p) => p.id === selectedPartner
                    )
                    if (!partner) return null

                    return (
                      <>
                        {/* Header with gradient */}
                        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 text-white relative overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.3),transparent_70%)]"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center space-x-6">
                                <div className="bg-white backdrop-blur-sm rounded-xl p-4">
                                  <Image
                                    src={partner.logo || '/placeholder.svg'}
                                    alt={partner.name}
                                    width={120}
                                    height={50}
                                    className="object-contain "
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <h2 className="text-3xl font-bold mb-2">
                                    {partner.name}
                                  </h2>
                                  <Link
                                    href={partner.visitLink}
                                    className="text-blue-300 hover:text-white font-medium flex items-center space-x-2 transition-colors group"
                                  >
                                    <span>Visit {partner.name}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <CardContent className="px-8 py-4">
                          <div className="space-y-4">
                            {/* About Section */}
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                About {partner.name}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-sm">
                                {partner.description}
                              </p>
                            </div>

                            {/* Supported Models */}
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                Supported Models
                              </h3>
                              <div className="flex flex-col gap-1">
                                {partner.supportedModels.map((model, index) => (
                                  <div
                                    key={index}
                                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-800 text-xs font-medium px-3 py-2 rounded-lg flex items-center"
                                  >
                                    {model}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <DownloadSolutionButton partner={partner} />
                          </div>
                        </CardContent>
                      </>
                    )
                  })()}
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoiceTrackingSolutionsSection
