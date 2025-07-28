'use client'
import { useState } from 'react'
import { ChevronRight, ExternalLink } from 'lucide-react'

import { partners } from '@/data/solutions'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const VoiceTrackingSolutionsSection = () => {
  const [selectedPartner, setSelectedPartner] = useState<string>('shure')

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Voice Tracking Solutions
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of voice tracking solutions from
            industry-leading partners. Select a partner to learn more about
            their technology and supported models.
          </p>
        </div>

        {/* Mobile Tabs View */}
        <div className="lg:hidden">
          <Tabs value={selectedPartner} onValueChange={setSelectedPartner}>
            <TabsList className="grid w-full grid-cols-3 mb-6 gap-1">
              {partners.slice(0, 6).map((partner) => (
                <TabsTrigger
                  key={partner.id}
                  value={partner.id}
                  className="text-xs px-2 bg-gray-200"
                >
                  {partner.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {partners.map((partner) => (
              <TabsContent key={partner.id} value={partner.id}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <Image
                        src={partner.logo || '/placeholder.svg'}
                        alt={partner.name}
                        width={100}
                        height={60}
                        className="object-contain"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {partner.name}
                        </h3>
                        <Link
                          href={partner.visitLink}
                          className="text-red-600 hover:text-red-800 text-sm flex items-center space-x-1"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {partner.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Supported Models
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {partner.supportedModels.map((model, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 px-3 py-2 rounded text-sm text-gray-700"
                          >
                            {model}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8">
            {/* Partner Selection Grid */}
            <div className="col-span-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Select a Partner
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner) => (
                  <Card
                    key={partner.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedPartner === partner.id
                        ? 'ring-2 ring-red-500 shadow-lg bg-white'
                        : 'hover:shadow-md bg-white border-gray-200'
                    }`}
                    onClick={() => setSelectedPartner(partner.id)}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-24">
                      <Image
                        src={partner.logo || '/placeholder.svg'}
                        alt={partner.name}
                        width={120}
                        height={100}
                        className="object-contain mb-2"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Partner Details */}
            <div className="col-span-7">
              {selectedPartner && (
                <Card className="h-full">
                  <CardContent className="p-8">
                    {(() => {
                      const partner = partners.find(
                        (p) => p.id === selectedPartner
                      )
                      if (!partner) return null

                      return (
                        <>
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <Image
                                src={partner.logo || '/placeholder.svg'}
                                alt={partner.name}
                                width={120}
                                height={60}
                                className="object-contain"
                              />
                              <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                  {partner.name}
                                </h2>
                                <Link
                                  href={partner.visitLink}
                                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 mt-1"
                                >
                                  <span>Visit {partner.name}</span>
                                  <ExternalLink className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                About
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {partner.description}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Supported Models
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {partner.supportedModels.map((model, index) => (
                                  <span
                                    key={index}
                                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-1 rounded"
                                  >
                                    {model}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                              <Button asChild className="w-full sm:w-auto">
                                <Link href={partner.visitLink}>
                                  Learn More About {partner.name}
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </>
                      )
                    })()}
                  </CardContent>
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
