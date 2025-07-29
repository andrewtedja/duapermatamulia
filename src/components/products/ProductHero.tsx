import Image from 'next/image'
import type { Product } from '@/data/products'

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  const { layout } = product

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${product.imgPath})` }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: product.overlay / 100 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div
            className={`text-white ${
              layout?.textAlign === 'center'
                ? 'text-center'
                : layout?.textAlign === 'right'
                ? 'text-right'
                : 'text-left'
            }`}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium mb-4 lg:mb-6">
              {product.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 lg:mb-6">
              {product.name}
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-light mb-6 lg:mb-8 text-white/90">
              {product.subtitle}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-white/80 max-w-2xl">
              {product.description}
            </p>
          </div>

          {/* Product Image */}
          <div
            className={`flex ${
              layout?.imageAlign === 'center'
                ? 'justify-center'
                : layout?.imageAlign === 'right'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            <div className="relative">
              <Image
                src={product.productImagePath || '/placeholder.svg'}
                alt={product.name}
                width={
                  layout?.imageSize
                    ? Math.min(layout.imageSize * 0.8, 400)
                    : 400
                }
                height={
                  layout?.imageSize
                    ? Math.min(layout.imageSize * 0.8, 400)
                    : 400
                }
                className={`object-contain lg:w-auto lg:h-auto ${
                  layout?.imageClass || ''
                }`}
                style={{
                  width: `${
                    layout?.imageSize
                      ? Math.min(layout.imageSize * 0.8, 400)
                      : 400
                  }px`,
                  height: `${
                    layout?.imageSize
                      ? Math.min(layout.imageSize * 0.8, 400)
                      : 400
                  }px`
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
