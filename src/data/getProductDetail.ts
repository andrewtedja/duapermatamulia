// File: data/getProductDetail.ts
import { products } from './products'
import { productFeatures } from './productFeatures'
import { productSpecs } from './productSpecs'
import { productResources } from './productResources'

export function getProductDetail(slug: string) {
  const product = products.find((p) => p.slug === slug)
  if (!product) return null

  return {
    product,
    features: productFeatures[slug] || [],
    specs: productSpecs[slug] || [],
    resources: productResources[slug] || []
  }
}
