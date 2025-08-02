'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function WhatsAppButton() {
  return (
    <TooltipProvider delayDuration={150}>
      {/* Desktop / Tablet */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://wa.me/628111758793"
            aria-label="WhatsApp"
            className="hidden sm:block fixed bottom-6 right-6 z-[2000] rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo/logo-wa.avif"
              alt="WhatsApp"
              width={72}
              height={72}
              className="rounded-full"
              loading="lazy"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8}>
          Contact us on WhatsApp
        </TooltipContent>
      </Tooltip>

      {/* Mobile */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://wa.me/628111758793"
            aria-label="WhatsApp"
            className="sm:hidden fixed bottom-4 right-4 z-[2000] rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logo/logo-wa.png"
              alt="WhatsApp"
              width={54}
              height={54}
              className="rounded-full"
              loading="lazy"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8}>
          Contact us on WhatsApp
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
