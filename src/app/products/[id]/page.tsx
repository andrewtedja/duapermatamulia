import { getProductDetail } from '@/data/getProductDetail'
import { ProductPage } from '@/components/products/ProductPage'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import { products } from '@/data/products'

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) return {}

  return {
    title: `${product.name} | Dua Permata Mulia`,
    description: product.subtitle,
    openGraph: {
      title: product.name,
      description: product.subtitle,
      images: [`/your/og-image/path/${product.id}.avif`] // customize your OG path
    }
  }
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = getProductDetail(id)

  if (!data) return notFound()

  return (
    <div className="flex flex-col">
      <Navbar />
      <main>
        <ProductPage
          product={data.product}
          features={data.features}
          specs={data.specs}
          resources={data.resources}
          overviewImages={data.overviewImages}
          overviewDescription={data.overviewDescription}
          overviewTitle={data.overviewTitle}
          overviewHook={data.overviewHook}
        />
      </main>
      <Footer />
    </div>
  )
}
