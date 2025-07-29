export type ProductSpec = {
  category: string
  items: {
    label: string
    value: string | string[]
  }[]
}

export const productSpecs: Record<string, ProductSpec[]> = {
  'tr-315': [
    {
      category: 'Camera',
      items: [
        { label: 'Resolution', value: '4K' },
        { label: 'Sensor', value: '1/2.8" CMOS' }
      ]
    },
    {
      category: 'Optical',
      items: [{ label: 'Zoom', value: '12x Optical' }]
    }
  ]
}
