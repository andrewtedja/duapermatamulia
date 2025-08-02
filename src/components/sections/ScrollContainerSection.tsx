'use client'
import React from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation'
import { YouTubeAutoOnView } from '../youtube/LiteYoutube'
// import Image from 'next/image'

export function ScrollContainerSection() {
  return (
    <div className="flex flex-col overflow-hidden py-24 bg-gradient-to-b from-white via-indigo-50 to-white ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-md md:text-4xl font-semibold text-black dark:text-white">
              Empowering Smarter Collaboration. <br />
              <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
                Built for <span className="text-red-600">Vision</span>,{' '}
                <br></br> Driven by{' '}
                <span className="text-rose-500">Innovation</span>.
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full aspect-[9/16] md:aspect-video rounded-xl overflow-hidden">
          {/* <Image
            src={`/images/backgrounds/bg-hub30.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
          <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
            <p className="text-6xl md:text-8xl font-bold text-red-800">
              PT. DuaPermataMulia
            </p>
          </div> */}

          <YouTubeAutoOnView />
        </div>
      </ContainerScroll>
    </div>
  )
}
