export type ProductFeature = {
  id: string
  title: string
  description: string
  image: string
  layout: 'left' | 'right' | 'center'
}

export const productFeatures: Record<string, ProductFeature[]> = {
  'tr-315': [
    {
      id: 'f1',
      title: '12X Optical Zoom Magnifies Details',
      description: `Experience the exceptional power of the TR315 camera's astounding 12X optical zoom. This feature seamlessly operates even while the camera is panning and tilting, granting you the ability to accentuate content and quickly shift between shooting perspectives. Embrace the advantage of dynamic, crystal-clear video feeds through the TR315’s unparalleled PTZ performance.`,
      image: '/images/products/tr315/f1.png',
      layout: 'center'
    },
    {
      id: 'f2',
      title: 'HDMI/USB/IP. 4K 60 FPS.',
      description: `Leverage the TR315's 4K 60 fps streaming potential through HDMI, USB, and IP outputs. Free from intricate configurations and cable entanglements, you can effortlessly use multiple devices simultaneously to produce fluid video streams.`,
      image: '/images/products/tr315/f2.png',
      layout: 'right'
    },
    {
      id: 'f3',
      title: 'AI Auto Tracking Makes Streaming Smart & Effortless',
      description: `Powered by highly precise processing, AVer's cutting-edge AI Auto Tracking algorithms easily identify and capture human figures and moving objects. You’ll never lose track of your target again with the TR315's unmatched tracking precision.`,
      image: '/images/products/tr315/f3.png',
      layout: 'left'
    },
    {
      id: 'f4',
      title: 'Presenter Mode',
      description:
        'Get unparalleled tracking performance with Presenter Mode. This dynamic feature empowers presenters to venture beyond the stage to engage with their audience while the camera maintains seamless tracking.',
      image: '/images/products/tr315/f4.png',
      layout: 'center'
    },
    {
      id: 'f5',
      title: 'Zone Mode',
      description: `Zone Mode elevates your ability to capture content across multiple displays. Generate up to four dedicated Content Zones to consistently capture displayed information or items, prioritizing important presentation materials over the presenter's movements.`,
      image: '/images/products/tr315/f5.png',
      layout: 'center'
    },
    {
      id: 'f6',
      title: 'Hybrid Mode',
      description:
        'Free your performers by enabling unrestricted movement with Hybrid Mode. Use preset areas for zone tracking, letting the camera seamlessly switch to a full view of each pre-defined location as performers move through the areas. If they move beyond these zones, the camera seamlessly adapts, switching to presenter mode to effortlessly and precisely track their movements.',
      image: '/images/products/tr315/f6.png',
      layout: 'center'
    }
  ]
}
