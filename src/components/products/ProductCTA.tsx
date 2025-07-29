import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ProductCTAProps {
  productName: string
}

export function ProductCTA({ productName }: ProductCTAProps) {
  return (
    <section
      id="cta"
      className="py-12 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
            Ready to Experience {productName}?
          </h2>
          <p className="text-base lg:text-xl text-white/90 mb-6 lg:mb-8">
            Get in touch with our experts to learn more about how this solution
            can transform your workflow.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
          >
            <Link href="/inquiry">Start Your Inquiry</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
