'use client'

import KeenCarousel from '../carousel/KeenCarousel'

export default function HeroSection() {
  return (
    <section
      className="relative h-[calc(100vh-4rem)]
   w-full overflow-hidden bg-red-500"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0  ">
        <KeenCarousel />
      </div>
    </section>
  )
}
