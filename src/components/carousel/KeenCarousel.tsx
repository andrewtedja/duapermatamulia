'use client'

import React, { useState } from 'react'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { products } from '@/data/products'
import clsx from 'clsx'
import Link from 'next/link'

const slides = products.slice(0, 5)

function AutoplayPlugin(slider: KeenSliderInstance) {
  let timeout: ReturnType<typeof setTimeout>
  const clearNextTimeout = () => clearTimeout(timeout)
  const nextTimeout = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => slider.next(), 5000)
  }

  slider.on('created', nextTimeout)
  slider.on('dragStarted', clearNextTimeout)
  slider.on('animationEnded', nextTimeout)
  slider.on('updated', nextTimeout)
}

const getThemeClasses = (currentSlideName: string, itemName: string) => {
  const isSA_A5 = currentSlideName === 'AmpliWave SA-A5'
  const isSpecificItem = itemName === currentSlideName
  return {
    text: isSA_A5 ? 'text-black' : 'text-white',
    textMuted: isSA_A5
      ? 'text-black/60 hover:text-black/90'
      : 'text-white/60 hover:text-white/90',
    border: isSA_A5 && isSpecificItem ? 'border-black' : 'border-white',
    icon: isSA_A5 ? 'text-black' : 'text-white'
  }
}

export default function KeenCarousel() {
  const [loaded, setLoaded] = useState(false)
  const [displayedSlide, setDisplayedSlide] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'free-snap',
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        setDisplayedSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }
    },
    [AutoplayPlugin]
  )

  const previousSlideIndex =
    currentSlide === 0 ? slides.length - 1 : currentSlide - 1
  const nextSlideIndex =
    currentSlide === slides.length - 1 ? 0 : currentSlide + 1
  const currentSlideName = slides[currentSlide].name

  return (
    <div className="relative">
      {/* Carousel */}
      <div
        ref={sliderRef}
        className={`keen-slider overflow-hidden h-[calc(100vh-4rem)] ${
          !loaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'
        }`}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={clsx(
              'keen-slider__slide flex items-center justify-center',
              getThemeClasses(currentSlideName, slide.name).text,
              'bg-gray-800'
            )}
          >
            <div className="relative h-[calc(100vh-4rem)] w-full pt-40 md:pt-0">
              <Image
                src={slide.imgPath}
                alt={slide.name}
                fill
                className="object-cover z-0"
                priority
              />
              <div
                className="absolute inset-0 z-10 bg-black"
                style={{ opacity: slide.overlay / 100 }}
              />

              <div className="relative z-20 flex items-center h-full">
                <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-8 items-center">
                  {/* Text Section */}
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                      {slide.name}
                    </h1>
                    <p className="text-2xl lg:text-2xl font-bold leading-relaxed mt-2">
                      {slide.subtitle}
                    </p>
                    <p className="text-xl font-mono leading-relaxed mt-4 mb-6">
                      {slide.description}
                    </p>
                    <Link
                      href={`/products/${slide.slug}`}
                      className={clsx(
                        'inline-block bg-transparent border-2 px-7 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 ease-in-out',
                        getThemeClasses(currentSlideName, slide.name).border
                      )}
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Product Image Section */}
                  <div
                    className={clsx(
                      'flex',
                      slide.layout?.imageAlign === 'right'
                        ? 'justify-end'
                        : 'justify-center',
                      slide.name === 'TR315' ? 'hidden' : 'flex'
                    )}
                  >
                    <Image
                      src={slide.productImagePath}
                      alt={slide.name}
                      width={slide.layout?.imageSize || 400}
                      height={slide.layout?.imageSize || 400}
                      className={clsx(
                        'object-contain',
                        slide.layout?.imageClass
                      )}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Nav */}
      <div className="absolute top-0 left-0 h-full flex items-center z-10">
        <button
          className="h-24 w-12 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded-r-sm group"
          onClick={() => {
            setDisplayedSlide(previousSlideIndex)
            instanceRef.current?.prev()
          }}
        >
          <svg
            className={clsx(
              'w-8 h-8 transform group-hover:scale-110 transition-transform duration-200',
              getThemeClasses(currentSlideName, currentSlideName).icon
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Right Nav */}
      <div className="absolute top-0 right-0 h-full flex items-center z-10">
        <button
          className="h-24 w-12 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded-l-sm group"
          onClick={() => {
            setDisplayedSlide(nextSlideIndex)
            instanceRef.current?.next()
          }}
        >
          <svg
            className={clsx(
              'w-8 h-8 transform group-hover:scale-110 transition-transform duration-200',
              getThemeClasses(currentSlideName, currentSlideName).icon
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Product Name Display */}
      <div className="absolute bottom-12 left-16 z-10 hidden lg:block">
        <div>
          <button
            className={clsx(
              'text-sm font-medium mb-1 transition-colors duration-200 cursor-pointer',
              getThemeClasses(
                currentSlideName,
                slides[previousSlideIndex]?.name
              ).textMuted
            )}
            onClick={() => {
              setDisplayedSlide(previousSlideIndex)
              instanceRef.current?.prev()
            }}
          >
            {slides[previousSlideIndex]?.name}
          </button>

          <div className="relative h-16 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateY(-${displayedSlide * 4}rem)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="h-16 flex flex-col justify-center">
                  <div
                    className={clsx(
                      'text-xl font-bold leading-tight',
                      getThemeClasses(currentSlideName, slide.name).text
                    )}
                  >
                    | {slide.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={clsx(
              'text-sm font-medium mb-1 transition-colors duration-200 cursor-pointer',
              getThemeClasses(currentSlideName, slides[nextSlideIndex]?.name)
                .textMuted
            )}
            onClick={() => {
              setDisplayedSlide(nextSlideIndex)
              instanceRef.current?.next()
            }}
          >
            {slides[nextSlideIndex]?.name}
          </button>
        </div>
      </div>
    </div>
  )
}
