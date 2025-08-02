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
      currentSlideName === 'U70i' ||
      currentSlideName === 'M70W'
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
      className="relative lg:min-h-[95vh] flex items-center overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-16 sm:px-6 lg:px-24 py-20 lg:py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Text Content */}
          <div
            className={`text-white  ${
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
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 ${theme.text}`}
            >
              {product.name}
            </h1>
            <h2
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 ${theme.text}`}
            >
              {product.subtitle}
            </h2>
            <h3
              className={`text-sm sm:text-base lg:text-lg font-mono leading-relaxed max-w-2xl ${theme.text}`}
            >
              {product.description}
            </h3>
          </div>

          {/* Product Image */}
          <div
            className={`flex mt-8 lg:mt-0 ${
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
                  product.name === 'U70i' ||
                  product.name === 'M70W' ||
                  product.name === 'VB350'
                  ? 'hidden'
                  : 'flex'
              )}
            >
              <Image
                src={product.productImagePath || '/placeholder.svg'}
                alt={product.name}
                width={product.layout?.imageSize || 600}
                height={product.layout?.imageSize || 600}
                className={`object-contain w-full max-w-sm lg:w-auto lg:h-auto lg:max-w-none ${
                  layout?.imageClass || ''
                }`}
                style={{
                  width: `min(100%, ${layout?.imageSize || 600}px)`,
                  height: 'auto'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 hidden lg:block left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-6 h-10 border-2 ${theme.border} rounded-full flex justify-center`}
        >
          <div
            className={`w-1 h-3 ${theme.bg} rounded-full mt-2 animate-bounce`}
          ></div>
        </div>
      </div>
    </section>
  )
}
