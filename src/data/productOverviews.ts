// data/productOverviews.ts
export const productOverviews: Record<
  string,
  {
    title?: string
    hook?: string
    description: string
    images: string[]
  }
> = {
  'tr-315': {
    title: 'AI Auto Tracking PTZ Camera',
    hook: 'Seamless tracking for modern classrooms.',
    description:
      'AVer’s new TR315 AI Auto Tracking PTZ Camera extends powerful and dependable Pro AV prowess to users across the spectrum of industries. The TR315 showcases proprietary functions — including Presenter Mode, Zone Mode, and Hybrid Mode tracking — driven by advanced AI processing. Seamlessly blending a 12X Optical Zoom lens, 4K 60 fps resolution, and the finesse of hybrid auto tracking and smooth PTZ operations, it’s already the quintessential choice for broadcasting, streaming, or recording.',
    images: [
      '/images/products/tr315/tr315-2.png',
      '/images/products/tr315/tr315-1.png',

      '/images/products/tr315/tr315-3.png',

      '/images/products/tr315/tr315-4.png'
    ]
  }
  // ... other products
}
