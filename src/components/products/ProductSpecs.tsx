import type { ProductSpec } from '@/data/productSpecs'

interface ProductSpecsProps {
  specs: ProductSpec[]
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <section id="specs" className="py-12 lg:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Specifications
          </h2>
        </div>

        <div className="grid gap-6 lg:gap-8 max-w-6xl mx-auto">
          {specs.map((spec, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-300">
                {spec.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {spec.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-700 rounded-lg p-3 lg:p-4"
                  >
                    <h4 className="font-semibold mb-2 text-gray-300 text-sm lg:text-base">
                      {item.label}
                    </h4>
                    <div className="text-white">
                      {Array.isArray(item.value) ? (
                        <ul className="space-y-1">
                          {item.value.map((val, valIndex) => (
                            <li key={valIndex} className="text-xs lg:text-sm">
                              • {val}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs lg:text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
