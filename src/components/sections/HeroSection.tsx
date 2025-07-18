'use client'

import EmblaCarousel from '../carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI-Driven Visual Collaboration
          </h1>
          <p className="text-lg md:text-xl">
            Powering the future of video conferencing and smart systems.
          </p>
        </div>
      </div>
    </section>
  )
}
