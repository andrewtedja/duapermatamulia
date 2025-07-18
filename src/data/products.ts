export type Product = {
  id: number
  name: string
  category: string
  subtitle: string
  description: string
  imgPath: string
  slug: string
  overlay: number
}

export type Solution = {
  id: number
  name: string
}

export const solutions: Solution[] = [
  {
    id: 1,
    name: 'Aver Shure'
  },
  {
    id: 2,
    name: 'Aver Bosch'
  },
  {
    id: 3,
    name: 'Aver Yamaha'
  }
]

export const products: Product[] = [
  {
    id: 1,
    name: 'HUB30',
    category: 'VIDEO CONFERENCING',
    subtitle: '4K BYOM Matrix Switcher',
    description: '',
    imgPath: '/images/backgrounds/bg-hub30.png',
    slug: 'hub30',
    overlay: 50
  },
  {
    id: 2,
    name: 'MT300N',
    category: 'PRO AV',
    subtitle: 'NDI® Matrix Tracking Box',
    description: 'Your AV matrix, streamlined by NDI®',
    imgPath: '/images/backgrounds/bg-mt300n.png',
    slug: 'mt300n',
    overlay: 70
  },
  {
    id: 3,
    name: 'TR315',
    category: 'PRO AV',
    subtitle: 'AI-Driven PTZ Camera for Pro AV & Education',
    description: 'Superior Pro AV Tracking',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'tr-315',
    overlay: 20
  },
  {
    id: 4,
    name: 'SA-A5',
    category: 'SMART CLASSROOM',
    subtitle: 'Streaming Audio System',
    description: 'The Axis of Education',
    imgPath: '/images/backgrounds/bg-saa5.png',
    slug: 'sa-a5',
    overlay: 0
  },
  {
    id: 5,
    name: 'PTZ 211',
    category: 'PRO AV',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'ptz-211',
    overlay: 0
  },
  {
    id: 6,
    name: 'TR 615',
    category: 'PRO AV',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'tr-615',
    overlay: 0
  },
  {
    id: 7,
    name: 'MT100',
    category: 'PRO AV',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'mt100',
    overlay: 0
  },
  {
    id: 8,
    name: 'U70i',
    category: 'SMART CLASSROOM',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'u70i',
    overlay: 0
  },
  {
    id: 9,
    name: 'M70w',
    category: 'SMART CLASSROOM',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'm70w',
    overlay: 0
  },
  {
    id: 10,
    name: 'TR 211',
    category: 'SMART CLASSROOM',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'tr-211',
    overlay: 0
  },
  {
    id: 11,
    name: 'VB370A',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'vb370a',
    overlay: 0
  },
  {
    id: 12,
    name: 'CAM570',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'cam570',
    overlay: 0
  },
  {
    id: 13,
    name: 'VB342 Pro',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'vb342-pro',
    overlay: 0
  },
  {
    id: 14,
    name: 'FONE 700',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'fone-700',
    overlay: 0
  },
  {
    id: 15,
    name: 'VB350',
    category: 'VIDEO CONFERENCING',
    subtitle: 'Temporary Subtitle',
    description: '',
    imgPath: '/images/backgrounds/bg-tr315.svg',
    slug: 'vb350',
    overlay: 0
  }
]
