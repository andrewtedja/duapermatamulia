'use client'
import React, { useState } from 'react'
import { products } from '@/data/products'
import Image from 'next/image'

const ProductShowcaseSection = () => {
  const categories = [
    'Popular Products',
    ...Array.from(new Set(products.map((p) => p.category)))
  ]
  const [activeCategory, setActiveCategory] = useState('Popular Products')

  const filteredProducts = products
    .filter((product) =>
      activeCategory === 'Popular Products'
        ? true
        : product.category === activeCategory
    )
    .slice(0, 6)

  return (
    <section className="bg-white py-12 px-8 lg:px-4">
      <div className="max-w-7xl mx-auto text-center lg:text-start">
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Intelligent products built for
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            visual innovation.
          </h2>
          <h3 className="text-md md:text-xl font-light tracking-wider text-gray-900">
            Explore the future of AI-driven cameras.
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all border border-gray-200 duration-200 ${
                activeCategory === category
                  ? 'bg-red-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F8F9FC] rounded-3xl transition-all p-8 duration-300 overflow-hidden group cursor-pointer flex justify-between flex-col"
            >
              <div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg sm:text-xl text-center mb-4 whitespace-pre-line">
                    {product.subtitle}
                  </p>
                </div>

                <div className="relative flex items-center justify-center h-32 sm:h-64 bg-gray-50">
                  <Image
                    src={product.productImagePath}
                    alt={product.name}
                    width={250}
                    height={200}
                    className="rounded-lg hidden lg:block transform group-hover:scale-105 sm:group-hover:scale-115 transition-transform duration-300"
                    loading="lazy"
                  />
                  <Image
                    src={product.productImagePath}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg lg:hidden transform group-hover:scale-105 sm:group-hover:scale-115 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-7 lg:mt-1">
                <div className="flex justify-end">
                  <button className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-800/80 transition-colors duration-200 text-sm font-medium">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Discover more innovative solutions for your business
          </p>
          <button className="px-8 py-4 bg-red-800 text-white rounded-full hover:bg-red-700 transition-colors duration-200 font-semibold">
            View All Products
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default ProductShowcaseSection
