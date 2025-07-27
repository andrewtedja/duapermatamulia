import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import ProductHero from '@/components/products/ProductHero'
import { Metadata } from 'next'

// ✅ Fix: make params a Promise and await it
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
      images: [`/your/og-image/path/${product.id}.png`] // customize your OG path
    }
  }
}

// ✅ Fix: make the page component async and await params
export default async function ProductPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) return notFound()

  return <ProductHero product={product} />
}
