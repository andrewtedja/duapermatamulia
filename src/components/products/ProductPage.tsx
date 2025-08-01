import { ProductHero } from './ProductHero'
import { ProductOverview } from './ProductOverview'
import { ProductFeatures } from './ProductFeatures'
import { ProductSpecs } from './ProductSpecs'
import { ProductCTA } from './ProductCTA'
// import { ProductResources } from './ProductResources'
import { ProductSidebar } from './ProductSidebar'
import type { Product } from '@/data/products'
import type { ProductFeature } from '@/data/productFeatures'
import type { ProductSpec } from '@/data/productSpecs'
import type { ProductResource } from '@/data/productResources'

interface ProductPageProps {
  product: Product
  overviewImages?: string[]
  overviewDescription?: string
  overviewTitle?: string
  overviewHook?: string
  features?: ProductFeature[]
  specs?: ProductSpec[]
  resources?: ProductResource[]
}

export function ProductPage({
  product,
  overviewImages = [],
  overviewDescription = '',
  overviewTitle = '',
  overviewHook = '',
  features = [],
  specs = []
  // resources = []
}: ProductPageProps) {
  return (
    <div className="relative">
      <div className="hidden md:block">
        <ProductSidebar />
      </div>
      <div className="pt-16 relative overflow-x-hidden">
        <ProductHero product={product} />
      </div>

      {overviewImages.length > 0 && (
        <ProductOverview
          productName={product.name}
          title={overviewTitle}
          hook={overviewHook}
          description={overviewDescription}
          images={overviewImages}
        />
      )}

      {features.length > 0 && <ProductFeatures features={features} />}

      {specs.length > 0 && <ProductSpecs specs={specs} />}

      <ProductCTA productName={product.name} />

      {/* {resources.length > 0 && <ProductResources resources={resources} />} */}
    </div>
  )
}
