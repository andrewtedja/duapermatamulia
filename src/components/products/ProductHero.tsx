import Image from 'next/image'
import type { Product } from '@/data/products'
import clsx from 'clsx'

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  const getThemeClasses = (currentSlideName: string, itemName: string) => {
    const isLight =
      currentSlideName === 'AmpliWave SA-A5' ||
      currentSlideName === 'CAM570' ||
      currentSlideName === 'U70i'
    const isSpecificItem = itemName === currentSlideName
    return {
      text: isLight ? 'text-black' : 'text-white',
      textMuted: isLight
        ? 'text-black/60 hover:text-black/90'
        : 'text-white/60 hover:text-white/90',
      border: isLight && isSpecificItem ? 'border-black' : 'border-white',
      icon: isLight ? 'text-black' : 'text-white',
      bg: isLight ? 'bg-black' : 'bg-white'
    }
  }

  const theme = getThemeClasses(product.name, product.name)

  const { layout } = product

  return (
    <section
      id="hero"
      className="relative h-[95vh] flex items-center overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-20  py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
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
            <div
              className={`inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium mb-4 lg:mb-6 ${theme.text} ${theme.border} border`}
            >
              {product.category}
            </div>
            <h1
              className={`text-3xl sm:text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 ${theme.text}`}
            >
              {product.name}
            </h1>
            <h2
              className={`text-lg sm:text-xl lg:text-2xl font-medium mb-6 lg:mb-8  ${theme.text}`}
            >
              {product.subtitle}
            </h2>
            <p
              className={`text-base lg:text-xl font-mono leading-relaxed  max-w-2xl ${theme.text}`}
            >
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
            <div
              className={clsx(
                'flex',
                product.layout?.imageAlign === 'right'
                  ? 'justify-end'
                  : 'justify-center',
                product.name === 'TR315' ||
                  product.name === 'CAM570' ||
                  product.name === 'U70i'
                  ? 'hidden'
                  : 'flex'
              )}
            >
              <Image
                src={product.productImagePath || '/placeholder.svg'}
                alt={product.name}
                width={product.layout?.imageSize || 600}
                height={product.layout?.imageSize || 600}
                className={`object-contain lg:w-auto lg:h-auto ${
                  layout?.imageClass || ''
                }`}
                style={{
                  width: `${layout?.imageSize || 600}px`,
                  height: `${layout?.imageSize || 600}px`
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-6 h-10 border-2 ${theme.border} rounded-full flex justify-center`}
        >
          <div
            className={`w-1 h-3 ${theme.bg}/90 rounded-full mt-2 animate-bounce`}
          ></div>
        </div>
      </div>
    </section>
  )
}
