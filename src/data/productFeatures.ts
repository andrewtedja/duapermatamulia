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
      title: '1',
      description: '...',
      image: '/placeholder.svg',
      layout: 'left'
    },
    {
      id: 'f2',
      title: '2',
      description: '...',
      image: 'placeholder.svg',
      layout: 'right'
    },
    {
      id: 'f3',
      title: '3',
      description: '...',
      image: 'placeholder.svg',
      layout: 'center'
    },
    {
      id: 'f4',
      title: '4',
      description: '...',
      image: 'placeholder.svg',
      layout: 'center'
    }
  ]
}
