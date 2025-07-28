import Image from 'next/image'
import { Product } from '@/data/products'
import clsx from 'clsx'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

interface ProductHeroProps {
  product: Product
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
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
              <div className="flex justify-start pt-6">
                <Link
                  href="/inquiry"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-400 ease-out overflow-hidden"
                >
                  {/* Clean slide effect */}
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />

                  <span className="relative z-10 flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                    Inquire Now
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Product Image */}
            <div
              className={clsx(
                'flex justify-center items-center',
                product.layout?.textAlign === 'right' ? 'lg:order-1' : '',
                product.name === 'TR315' ? 'hidden' : 'flex'
              )}
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
