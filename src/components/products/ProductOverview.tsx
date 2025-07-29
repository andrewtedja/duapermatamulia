'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductOverviewProps {
  productName: string
  title?: string
  hook?: string
  description: string
  images: string[]
}

export function ProductOverview({
  productName,
  title,
  hook,
  description,
  images
}: ProductOverviewProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="overview" className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              {title && (
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                  {title}
                </h2>
              )}
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3 lg:mb-4">
                {productName}
              </h3>
              {hook && (
                <p className="text-lg text-gray-700 font-medium italic mb-4">
                  {hook}
                </p>
              )}
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white backdrop-blur-2xl shadow-2xl">
              <div className="absolute inset-0 bg-[url('/images/bubbles.png')] bg-repeat-x bg-center mix-blend-multiply opacity-50"></div>
              <Image
                src={images[currentImage] || '/placeholder.svg'}
                alt={`${productName} - Image ${currentImage + 1}`}
                fill
                className="object-contain p-5"
              />

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-8 h-8 lg:w-10 lg:h-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-8 h-8 lg:w-10 lg:h-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 lg:gap-3 mt-4 lg:mt-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === index
                      ? 'border-blue-500 scale-110'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-3 lg:mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index
                      ? 'bg-blue-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
