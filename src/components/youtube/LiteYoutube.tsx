'use client'
import { useEffect, useRef } from 'react'

export function YouTubeAutoOnView() {
  const id = 'ikpEXfsA_9o'
  const base = `https://www.youtube-nocookie.com/embed/${id}?autoplay=0&mute=0&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`
  const ref = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const activate = () => {
      // Change autoplay to 1 when activating
      const autoplayUrl = base.replace('autoplay=0', 'autoplay=1')
      el.removeAttribute('srcdoc')
      el.src = autoplayUrl
    }

    if (!('IntersectionObserver' in window)) {
      activate()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          activate()
          io.disconnect()
        }
      },
      {
        root: null,
        rootMargin: '300px 0px',
        threshold: 0
      }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [base])

  return (
    <iframe
      ref={ref}
      title="Company intro"
      className="w-full h-full aspect-video rounded-xl overflow-hidden"
      loading="lazy"
      allow="autoplay; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
      src={base}
    />
  )
}
