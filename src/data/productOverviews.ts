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
    title: 'AI-Powered PTZ Camera',
    hook: 'Seamless tracking for modern classrooms.',
    description:
      'The TR315 delivers cutting-edge AI auto-tracking and Full HD resolution, ideal for any education or enterprise setting.',
    images: [
      '/images/products/prod-tr315down.png',
      '/images/products/cam570-1.png',
      '/images/products/prod-tr315down.png',
      '/images/products/prod-tr315down.png'
    ]
  }
  // ... other products
}
