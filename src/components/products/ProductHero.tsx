import Image from 'next/image'
import { Product } from '@/data/products'

interface ProductHeroProps {
  product: Product
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={product.imgPath}
          alt={`${product.name} background`}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        {product.overlay > 0 && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: product.overlay / 100 }}
          />
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Content */}
            <div
              className={`space-y-6 ${
                product.layout?.textAlign === 'right' ? 'lg:order-2' : ''
              }`}
            >
              {/* Category Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium tracking-wide">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {product.name}
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed whitespace-pre-line">
                {product.subtitle}
              </h2>

              {/* Description */}
              {product.description && (
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  {product.description}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
                  Learn More
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Right Product Image */}
            <div
              className={`flex justify-center items-center ${
                product.layout?.textAlign === 'right' ? 'lg:order-1' : ''
              }`}
            >
              <div className="relative w-full max-w-2xl">
                <Image
                  src={product.productImagePath}
                  alt={product.name}
                  width={product.layout?.imageSize || 600}
                  height={product.layout?.imageSize || 600}
                  priority
                  quality={95}
                  className={`w-full h-auto object-contain ${
                    product.layout?.imageClass || ''
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
