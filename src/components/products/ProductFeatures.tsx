'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ProductFeature } from '@/data/productFeatures'

interface ProductFeaturesProps {
  features: ProductFeature[]
}

import type { Variants } from 'framer-motion'

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' // ✅ this is allowed
    }
  }
}
export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section id="features" className="py-12 lg:py-20">
      <div className="container  mx-auto px-4 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`mb-16 lg:mb-28 ${
              index === features.length - 1 ? 'mb-0' : ''
            }`}
          >
            {feature.layout === 'left' && (
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-4 lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
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
                    loading="lazy"
                  />
                </div>
                <div className="lg:order-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-4 lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )}

            {feature.layout === 'center' && (
              <div className="text-center">
                <div className="mx-auto max-w-4xl mb-7">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="relative mb-2">
                  <Image
                    src={feature.image || '/placeholder.svg'}
                    alt={feature.title}
                    width={800}
                    height={750}
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
