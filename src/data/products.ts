export type Product = {
  id: string
  name: string
  category: string
  subtitle: string
  description: string
  imgPath: string
  slug: string
  overlay: number
  productImagePath: string
  layout?: {
    imageSize?: number
    imageAlign?: 'left' | 'center' | 'right'
    textAlign?: 'left' | 'right' | 'center'
    imageClass?: string
  }
}

export const products: Product[] = [
  {
    id: '1',
    name: 'TR615',
    category: 'PRO AV',
    subtitle: `Broadcasting-Grade Auto Tracking 20 MP Camera, Premium 1-Inch Exmor RS® CMOS Sensor`,
    description: '4K AI PTZ Camera for Pro Broadcasting & Live Events',
    imgPath: '/images/products/tr615/f3.png',
    slug: 'tr-615',
    overlay: 87,
    productImagePath: '/images/products/tr615/prod-tr615.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },

  {
    id: '2',
    name: 'TR315',
    category: 'PRO AV',
    subtitle: 'AI Auto-Tracking PTZ Camera',
    description:
      'AI Tracking Camera that remembers your presenter — not just motion.',
    imgPath: '/images/backgrounds/bg-tr315new.svg',
    slug: 'tr-315',
    overlay: 10,
    productImagePath: '/images/products/prod-tr315down.png',
    layout: {
      imageSize: 800,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '3',
    name: 'CAM570',
    category: 'VIDEO CONFERENCING',
    subtitle:
      '4K Dual Lens Audio Tracking Camera\n  Perfectly Track and Capture Attendees',
    description:
      '4K Dual Lens Audio Tracking Camera for Medium and Large Rooms',
    imgPath: '/images/backgrounds/bg-cam570.png',
    slug: 'cam-570',
    overlay: 0,
    productImagePath: '/images/products/cam570-1.png',
    layout: {
      imageSize: 1200,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '4',
    name: 'MT300N',
    category: 'PRO AV',
    subtitle: 'NDI\u00AE Matrix Tracking Box',
    description: 'Your AV matrix, streamlined by NDI\u00AE',
    imgPath: '/images/backgrounds/bg-mt300n-3.png',
    slug: 'mt-300n',
    overlay: 85,
    productImagePath: '/images/products/prod-mt300n.svg',
    layout: {
      imageSize: 1400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },

  {
    id: '5',
    name: 'HUB30',
    category: 'VIDEO CONFERENCING',
    subtitle: '4K BYOM Matrix Switcher',
    description: 'Seamlessly switch sources and connect personal devices.',
    imgPath: '/images/backgrounds/bg-hub30new.png',
    slug: 'hub-30',
    overlay: 30,
    productImagePath: '/images/products/prod-hub30.png',
    layout: {
      imageSize: 900,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },

  {
    id: '6',
    name: 'AmpliWave SA-A5',
    category: 'SMART CLASSROOM',
    subtitle: 'Streaming Audio System, \nThe Axis of Education',
    description: 'Classroom Streaming Audio System to the Next Level',
    imgPath: '/images/backgrounds/bg-saa5.png',
    slug: 'sa-a5',
    overlay: 0,
    productImagePath: '/images/products/prod-saa5.png',
    layout: {
      imageSize: 900,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '7',
    name: 'PTZ211',
    category: 'PRO AV',
    subtitle: '12X HD AI PTZ Camera',
    description:
      'Advanced professional-grade PTZ camera that gives you complete control over your streaming content.',
    imgPath: '/images/backgrounds/bg-ptz211.png',
    slug: 'ptz-211',
    overlay: 60,
    productImagePath: '/images/products/ptz211/prod-ptz211-2.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },

  {
    id: '8',
    name: 'MT100',
    category: 'PRO AV',
    subtitle: 'Matrix Box, Effortless Integration. \nBoundless AV Experiences.',
    description: '',
    imgPath: '/images/backgrounds/bg-mt100.avif',
    slug: 'mt-100',
    overlay: 0,
    productImagePath: '/images/products/prod-mt100.png',
    layout: {
      imageSize: 1200,
      imageAlign: 'left',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '9',
    name: 'U70i',
    category: 'SMART CLASSROOM',
    subtitle:
      'USB Plug-and-Play Visualizer,\n AI Optimized Noise and Image Control ',
    description: 'Portable Makes Incredible Happen',
    imgPath: '/images/backgrounds/bg-u70i.png',
    slug: 'u70-i',
    overlay: 0,
    productImagePath: '/images/products/prod-u70i.png',
    layout: {
      imageSize: 500,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '10',
    name: 'M70W',
    category: 'SMART CLASSROOM',
    subtitle: '4K Mechanical Arm Wireless Visualizer',
    description: 'Instantly Share & Interact With Vibrant Details',
    imgPath: '/images/backgrounds/bg-m70w.png',
    slug: 'm70-w',
    overlay: 0,
    productImagePath: '/images/products/prod-m70w.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '11',
    name: 'TR211',
    category: 'SMART CLASSROOM',
    subtitle: 'Superior AI Auto Tracking PTZ Camera',
    description: 'Superior Pro AV Tracking',
    imgPath: '/images/backgrounds/bg-tr211.png',
    slug: 'tr-211',
    overlay: 80,
    productImagePath: '/images/products/prod-tr211.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '12',
    name: 'VB370A',
    category: 'VIDEO CONFERENCING',
    subtitle: '4K Dual Lens Video Bar \nAndroid Powered. Zoom Rooms Perfected.',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'vb-370a',
    overlay: 0,
    productImagePath: '/images/products/prod-vb370a.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },

  {
    id: '13',
    name: 'VB342 Pro',
    category: 'VIDEO CONFERENCING',
    subtitle: '4K PTZ Video Bar for\n Small To Medium Rooms',
    description: '',
    imgPath: '/images/backgrounds/bg-vb342pro.png',
    slug: 'vb342-pro',
    overlay: 85,
    productImagePath: '/images/products/vb342pro/vb342pro-1.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '14',
    name: 'FONE700',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Ceiling Speakerphone System for\n Rooms of Any Size',
    description: 'Take Conferencing Audio to New Heights',
    imgPath: '/images/backgrounds/bg-fone700.png',
    slug: 'fone-700',
    overlay: 90,
    productImagePath: '/images/products/prod-fone700.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '15',
    name: 'VB350',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Dual Lens PTZ Video Bar\n with a Hybrid 18X Zoom Lens',
    description: '',
    imgPath: '/images/backgrounds/bg-vb350.png',
    slug: 'vb-350',
    overlay: 60,
    productImagePath: '/images/products/prod-vb350.png',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  }
]
