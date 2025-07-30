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
    name: 'TR315',
    category: 'PRO AV',
    subtitle: 'AI-Driven PTZ Camera for Pro AV & Education',
    description: 'Camera that remembers the person it is tracking.',
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
    id: '2',
    name: 'HUB30',
    category: 'VIDEO CONFERENCING',
    subtitle: '4K BYOM Matrix Switcher',
    description: 'Seamlessly switch sources and connect personal devices.',
    imgPath: '/images/backgrounds/bg-hub30new.png',
    slug: 'hub30',
    overlay: 60,
    productImagePath: '/images/products/prod-hub30.png',
    layout: {
      imageSize: 900,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },

  {
    id: '3',
    name: 'MT300N',
    category: 'PRO AV',
    subtitle: 'NDI Matrix Tracking Box',
    description: 'Your AV matrix, streamlined by NDI',
    imgPath: '/images/backgrounds/bg-mt300n.png',
    slug: 'mt300n',
    overlay: 70,
    productImagePath: '/images/products/prod-mt300n.svg',
    layout: {
      imageSize: 1000,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '4',
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
    id: '5',
    name: 'CAM570',
    category: 'VIDEO CONFERENCING',
    subtitle:
      '4K Dual Lens Audio Tracking Camera\n  Perfectly Track and Capture Attendees',
    description:
      '4K Dual Lens Audio Tracking Camera for Medium and Large Rooms',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'cam570',
    overlay: 0,
    productImagePath: '/images/products/prod-cam570.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },

  {
    id: '6',
    name: 'TR 615',
    category: 'PRO AV',
    subtitle: 'Broadcasting-Grade Auto Tracking Camera',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'tr-615',
    overlay: 0,
    productImagePath: '/images/products/prod-tr615.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '7',
    name: 'MT100',
    category: 'PRO AV',
    subtitle: 'Matrix Box, Effortless Integration. \nBoundless AV Experiences.',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'mt100',
    overlay: 0,
    productImagePath: '/images/products/prod-mt100.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '8',
    name: 'U70i',
    category: 'SMART CLASSROOM',
    subtitle:
      'USB Plug-and-Play Visualizer,\n AI Optimized Noise and Image Control ',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'u70i',
    overlay: 0,
    productImagePath: '/images/products/prod-u70i.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '9',
    name: 'M70W',
    category: 'SMART CLASSROOM',
    subtitle: '4K Mechanical Arm Wireless Visualizer',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'm70w',
    overlay: 0,
    productImagePath: '/images/products/prod-m70w.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '10',
    name: 'TR211',
    category: 'SMART CLASSROOM',
    subtitle: 'Superior AI Auto Tracking PTZ Camera',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'tr-211',
    overlay: 0,
    productImagePath: '/images/products/prod-tr211.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '11',
    name: 'VB370A',
    category: 'VIDEO CONFERENCING',
    subtitle: '4K Dual Lens Video Bar \nAndroid Powered. Zoom Rooms Perfected.',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'vb370a',
    overlay: 0,
    productImagePath: '/images/products/prod-vb370a.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '12',
    name: 'PTZ 211',
    category: 'PRO AV',
    subtitle: 'Professional PTZ Camera',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'ptz-211',
    overlay: 0,
    productImagePath: '/images/products/prod-ptz211.png',
    layout: {
      imageSize: 400,
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
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'vb342-pro',
    overlay: 0,
    productImagePath: '/images/products/prod-vb342pro.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  },
  {
    id: '14',
    name: 'FONE 700',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Ceiling Speakerphone System for\n Rooms of Any Size',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'fone-700',
    overlay: 0,
    productImagePath: '/images/products/prod-fone700.png',
    layout: {
      imageSize: 400,
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
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'vb350',
    overlay: 0,
    productImagePath: '/images/products/prod-vb350.png',
    layout: {
      imageSize: 400,
      imageAlign: 'center',
      textAlign: 'left',
      imageClass: 'translate-y-4 scale-105'
    }
  }
]
