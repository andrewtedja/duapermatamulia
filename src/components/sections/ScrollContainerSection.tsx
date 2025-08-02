'use client'
import React from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation'

export function ScrollContainerSection() {
  return (
    <div className="flex flex-col overflow-hidden py-24 bg-gradient-to-b from-white via-indigo-50 to-white">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-md md:text-4xl font-semibold text-black dark:text-white">
              Empowering Smarter Collaboration. <br />
              <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
                Built for <span className="text-red-600">Vision</span>, <br />
                Driven by <span className="text-rose-500">Innovation</span>.
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full aspect-[9/16] md:aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=ikpEXfsA_9o"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </ContainerScroll>
    </div>
  )
}
