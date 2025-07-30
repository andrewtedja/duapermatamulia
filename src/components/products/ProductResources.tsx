import Image from 'next/image'
import Link from 'next/link'
import { Download, FileText, ImageIcon } from 'lucide-react'
import type { ProductResource } from '@/data/productResources'

interface ProductResourcesProps {
  resources: ProductResource[]
}

export function ProductResources({ resources }: ProductResourcesProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-6 w-6 lg:h-8 lg:w-8" />
      case 'image':
        return <ImageIcon className="h-6 w-6 lg:h-8 lg:w-8" />
      default:
        return <FileText className="h-6 w-6 lg:h-8 lg:w-8" />
    }
  }

  return (
    <section id="resources" className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Resources & Downloads
          </h2>
          <p className="text-base lg:text-xl text-gray-600">
            Access technical documentation, datasheets, and additional resources
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6  max-w-6xl mx-auto ">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              href={resource.downloadUrl}
              className="group bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 mb-3 lg:mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  {resource.thumbnail ? (
                    <Image
                      src={resource.thumbnail || '/placeholder.svg'}
                      alt={resource.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-gray-400">
                      {getIcon(resource.type)}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors text-sm lg:text-base">
                  {resource.name}
                </h3>
                <div className="flex items-center text-xs lg:text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
                  <Download className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                  Download {resource.type.toUpperCase()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
