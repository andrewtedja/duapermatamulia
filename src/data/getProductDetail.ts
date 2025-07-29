// File: data/getProductDetail.ts
import { products } from './products'
import { productFeatures } from './productFeatures'
import { productSpecs } from './productSpecs'
import { productResources } from './productResources'
import { productOverviews } from './productOverviews'

export function getProductDetail(slug: string) {
  const product = products.find((p) => p.slug === slug)
  if (!product) return null

  const overview = productOverviews[slug] || {
    description: '',
    images: []
  }

  return {
    product,
    features: productFeatures[slug] || [],
    specs: productSpecs[slug] || [],
    resources: productResources[slug] || [],
    overviewImages: overview.images,
    overviewDescription: overview.description,
    overviewTitle: overview.title,
    overviewHook: overview.hook
  }
}
