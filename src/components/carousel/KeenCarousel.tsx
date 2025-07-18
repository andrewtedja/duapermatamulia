'use client'

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const slides = [
  {
    id: 1,
    name: '1 Osmo Pocket 3',
    subtitle: 'DJI RS 4 Mini',
    description: 'DJI Matrice 400'
  },
  {
    id: 2,
    name: '2 Mavic Air 3',
    subtitle: 'DJI Mini 4 Pro',
    description: 'DJI Action 4'
  },
  {
    id: 3,
    name: '3 Inspire 3',
    subtitle: 'DJI Air 3',
    description: 'DJI FPV Combo'
  },
  {
    id: 4,
    name: '4 Ronin 4D',
    subtitle: 'DJI Avata 2',
    description: 'DJI Pocket 2'
  }
]

function AutoplayPlugin(slider: any) {
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'free-snap',
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      animationStarted(slider) {
        setCurrentSlide(slider.track.details.rel)
      }
    },
    [AutoplayPlugin]
  )

  return (
    <div className="relative">
      {/* Carousel */}
      <div
        ref={sliderRef}
        className="keen-slider  overflow-hidden h-[calc(100vh-4rem)]"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="keen-slider__slide flex items-center justify-center bg-gray-800 text-white text-3xl font-bold"
          >
            Slide {slide.id}
          </div>
        ))}
      </div>

      {/* Left Navigation Button */}
      <div className="absolute top-0 left-0 h-full flex items-center z-10">
        <button
          className="h-24 w-12 backdrop-blur-sm text-white hover:bg-black/50 transition-all duration-300 flex items-center justify-center rounded-r-2xl group"
          onClick={() => instanceRef.current?.prev()}
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
          className="h-24 w-12 backdrop-blur-sm text-white hover:bg-black/50 transition-all duration-300 flex items-center justify-center rounded-l-2xl group"
          onClick={() => instanceRef.current?.next()}
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
      <div className="absolute bottom-20 left-8 z-10">
        <div className="text-white">
          <div className="text-sm font-light text-white/70 mb-1">
            {slides[currentSlide]?.name}
          </div>
          <div className="relative h-16 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateY(-${currentSlide * 4}rem)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="h-16 flex flex-col justify-center">
                  <div className="text-4xl font-bold text-white leading-tight">
                    {slide.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-lg font-light text-white/80 mt-2">
            {slides[currentSlide]?.description}
          </div>
        </div>
      </div>

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
