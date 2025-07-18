'use client'

import React, { useEffect, useState } from 'react'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { products } from '@/data/products'
import { solutions } from '@/data/products'
import clsx from 'clsx'

const slides = products.slice(0, 4)

function AutoplayPlugin(slider: KeenSliderInstance) {
  let timeout: ReturnType<typeof setTimeout>
  const clearNextTimeout = () => {
    clearTimeout(timeout)
  }
  const nextTimeout = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      slider.next()
    }, 5000)
  }

  slider.on('created', () => {
    nextTimeout()
  })
  slider.on('dragStarted', () => {
    clearNextTimeout()
  })
  slider.on('animationEnded', () => {
    nextTimeout()
  })
  slider.on('updated', () => {
    nextTimeout()
  })
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
      //   animationStarted(slider) {
      //     setCurrentSlide(slider.track.details.rel)
      //   },
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

  return (
    <div className="relative">
      {/* Carousel */}
      <div
        ref={sliderRef}
        className={`keen-slider overflow-hidden h-[calc(100vh-4rem)] ${
          !loaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'
        }`}
      >
        {/* ======================================== CAROUSEL SLIDES ======================================== */}
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={clsx(
              'keen-slider__slide flex items-center justify-center',
              slide.name === 'SA-A5' ? 'text-black' : 'text-white',
              'bg-gray-800'
            )}
          >
            <div className="relative h-[calc(100vh-4rem)] w-full">
              {/* Background image via next/image */}
              <Image
                src={slide.imgPath}
                alt={slide.name}
                fill
                className="object-cover z-0"
                priority
              />

              {/* Dark overlay for better text readability */}
              <div
                className="absolute inset-0 z-10 bg-black"
                style={{ opacity: slide.overlay / 100 }}
              />

              {/* Product Image */}
              {/* <Image
                src="/product.png"
                alt="Product"
                width={600}
                height={600}
                className="absolute bottom-0 right-8 z-10 object-contain"
                /> */}

              {/* Text Content */}
              <div className="relative z-20 flex items-center h-full">
                <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
                  <div className="max-w-2xl">
                    <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                      {slide.name}
                    </h1>
                    <div className="mb-6">
                      <p className="text-2xl lg:text-3xl  font-semibold leading-relaxed">
                        {slide.subtitle}
                      </p>
                      {/* <p className="text-md lg:text-lg text-white  font-light leading-snug">
                      {slide.description}
                    </p> */}
                    </div>
                    <button
                      className={clsx(
                        'bg-transparent border-2 px-7 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 ease-in-out',
                        slide.name === 'SA-A5' ? 'border-black' : 'border-white'
                      )}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Navigation Button */}
      <div className="absolute top-0 left-0 h-full flex items-center z-10">
        <button
          className="h-24 w-12 backdrop-blur-sm text-white hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded-r-sm group"
          onClick={() => {
            setDisplayedSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
            instanceRef.current?.prev()
          }}
        >
          <svg
            className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-200"
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

      {/* Right Navigation Button */}
      <div className="absolute top-0 right-0 h-full flex items-center z-10">
        <button
          className="h-24 w-12 backdrop-blur-sm text-white hover:bg-black/30 transition-all duration-300 flex items-center justify-center rounded-l-sm group"
          onClick={() => {
            setDisplayedSlide(
              currentSlide === slides.length - 1 ? 0 : currentSlide + 1
            )
            instanceRef.current?.next()
          }}
        >
          <svg
            className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-200"
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
      <div className="absolute bottom-12 right-24 z-10">
        <div className="text-white">
          <button
            className="text-sm font-medium text-white/60 mb-1 hover:text-white/90 transition-colors duration-200 cursor-pointer"
            onClick={() => {
              setDisplayedSlide(
                currentSlide === 0 ? slides.length - 1 : currentSlide - 1
              )
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
                  <div className="text-xl font-bold text-white leading-tight">
                    | {slide.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="text-sm font-medium text-white/60 mb-1 hover:text-white/90 transition-colors duration-200 cursor-pointer"
            onClick={() => {
              setDisplayedSlide(
                currentSlide === slides.length - 1 ? 0 : currentSlide + 1
              )
              instanceRef.current?.next()
            }}
          >
            {slides[nextSlideIndex]?.name}
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div
          className="h-full bg-white transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div> */}

      {/* Dot indicators */}
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 transition-transform will-change-transform">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div> */}
    </div>
  )
}
