'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'motion/react'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section
        id="overview"
        className="py-12 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                {title && (
                  <h2 className="text-2xl sm:text-5xl font-bold mb-4">
                    {title}
                  </h2>
                )}

                {hook && (
                  <p className="text-sm lg:text-xl text-gray-800 font-medium italic mb-2 lg:mb-8">
                    {hook}
                  </p>
                )}
                <p className="text-xs lg:text-lg text-gray-900 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative">
              <div
                className="relative aspect-square rounded-2xl overflow-hidden bg-transparent  cursor-grab"
                onClick={openModal}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentImage}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImage] || '/placeholder.svg'}
                      alt={`${productName} - Image ${currentImage + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute rounded-full border-2 left-3 lg:left-5 border-gray-300 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md w-9 h-9 lg:w-12 lg:h-12 transition-all duration-300 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute rounded-full right-3 border-2 border-gray-300 lg:right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md w-9 h-9 lg:w-12 lg:h-12 transition-all duration-300 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
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
                    className={`relative w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 px-1 lg:px-2 py-1 lg:py-2 transition-all ${
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

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 cursor-grab bg-black/95  flex flex-col items-center justify-center p-4"
          onClick={closeModal}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-24 right-12 z-[1000]  bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-full w-12 h-12"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </Button>
          <div
            className="relative w-full max-w-2xl mx-auto z-[500] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // ⬅️ move this wrapping around ALL modal content
          >
            {/* Modal Content */}
            <div
              className="relative w-full max-w-2xl mx-auto z-[500]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image Container */}
              <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden  ">
                <Image
                  src={images[currentImage] || '/placeholder.svg'}
                  alt={`${productName} - Image ${currentImage + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-contain"
                />

                {/* Modal Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-full w-14 h-14 transition-all duration-300 ease-in-out"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-full w-14 h-14 transition-all duration-300 ease-in-out"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            {/* Bottom Carousel Preview - Fixed at bottom */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
              {/* Modal Thumbnail Navigation */}
              <div className="flex justify-center gap-3 mb-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImage === index
                        ? 'border-blue-400 scale-110 shadow-lg'
                        : 'border-white/30 hover:border-white/50'
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

              {/* Modal Dots Indicator */}
              <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImage === index
                        ? 'bg-blue-400'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
