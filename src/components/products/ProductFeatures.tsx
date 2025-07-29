import Image from 'next/image'
import type { ProductFeature } from '@/data/productFeatures'

interface ProductFeaturesProps {
  features: ProductFeature[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`mb-16 lg:mb-32 ${
              index === features.length - 1 ? 'mb-0' : ''
            }`}
          >
            {feature.layout === 'left' && (
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            )}

            {feature.layout === 'right' && (
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative lg:order-1">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="lg:order-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )}

            {feature.layout === 'center' && (
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
                  {feature.title}
                </h3>
                <div className="relative mb-6 lg:mb-8">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={feature.title}
                    width={800}
                    height={500}
                    className="rounded-2xl shadow-2xl mx-auto"
                  />
                </div>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
