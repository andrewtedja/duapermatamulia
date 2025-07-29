export type ProductResource = {
  id: string
  name: string
  type: 'pdf' | 'doc' | 'image'
  thumbnail: string
  downloadUrl: string
}

export const productResources: Record<string, ProductResource[]> = {
  'tr-315': [
    {
      id: 'r1',
      name: 'Product Datasheet',
      type: 'pdf',
      thumbnail: '/thumbs/tr315-datasheet.png',
      downloadUrl: '/downloads/tr315-datasheet.pdf'
    },
    {
      id: 'r2',
      name: 'Installation Guide',
      type: 'pdf',
      thumbnail: '/thumbs/tr315-install.png',
      downloadUrl: '/downloads/tr315-install.pdf'
    }
  ]
}
