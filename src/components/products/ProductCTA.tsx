import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface ProductCTAProps {
  productName: string
}

export function ProductCTA({ productName }: ProductCTAProps) {
  return (
    <section id="cta" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Enhanced gradient background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-900 to-red-900">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-red-600/20" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-92 h-64 bg-rose-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-48 bg-red-500/40 rounded-full blur-3xl animate-pulse delay-1000" />
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" /> */}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon/badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-sm font-medium text-white/90">
              Transform Your Workflow
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Ready to Experience{' '}
            <span className="bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
              {productName}
            </span>
            ?
          </h2>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl xl:text-2xl text-white/80 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to learn more about how this solution can
            transform your workflow.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-white text-slate-900 hover:bg-gray-100 text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-200 hover:scale-105"
            >
              <Link href="/inquiry" className="inline-flex items-center gap-2">
                Start Your Inquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300"
            ></Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
