'use client'
import { useState } from 'react'
import type { ProductSpec } from '@/data/productSpecs'

interface ProductSpecsProps {
  specs: ProductSpec[]
  previewCount?: number // Number of specs to show when collapsed
}

export function ProductSpecs({ specs, previewCount = 2 }: ProductSpecsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const displayedSpecs = isExpanded ? specs : specs.slice(0, previewCount)
  const hasMoreSpecs = specs.length > previewCount

  return (
    <section id="specs" className="py-12 lg:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Specifications
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {displayedSpecs.map((spec, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  {spec.category}
                </h3>
              </div>

              {/* Specifications Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {spec.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className={`border-b border-gray-700 ${
                          itemIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'
                        } hover:bg-gray-700 transition-colors duration-200`}
                      >
                        {/* Label Column */}
                        <td className="px-6 py-4 w-1/3 lg:w-1/4">
                          <div className="font-semibold text-gray-300 text-sm lg:text-base">
                            {item.label}
                          </div>
                        </td>

                        {/* Value Column */}
                        <td className="px-6 py-4 w-2/3 lg:w-3/4">
                          <div className="text-white">
                            {Array.isArray(item.value) ? (
                              <ul className="space-y-1">
                                {item.value.map((val, valIndex) => (
                                  <li
                                    key={valIndex}
                                    className="text-sm lg:text-base"
                                  >
                                    • {val}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="text-sm lg:text-base">
                                {item.value}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Show More/Less Button */}
          {hasMoreSpecs && (
            <div className="text-center pt-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <svg
                      className="w-5 h-5 transform transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Show More Specifications ({specs.length - previewCount}{' '}
                    more)
                    <svg
                      className="w-5 h-5 transform transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
