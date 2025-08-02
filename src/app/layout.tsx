import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import 'keen-slider/keen-slider.min.css'
import ScrollToTopButton from '@/components/buttons/ScrollToTopButton'
import WhatsAppButton from '@/components/buttons/WAButton'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://duapermatamulia.co.id'),
  title: 'Dua Permata Mulia | Authorized AV Distributor | Situs Resmi',
  description:
    "We provide high-performance video conferencing visualizers, AI hardware, and smart systems for tomorrow's industries — specializing in education technology and visual collaboration solutions.",
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.avif', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.avif', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon.ico' }
    ],
    apple: [{ url: '/icons/apple-touch-icon.avif', sizes: '180x180' }],
    other: [
      {
        rel: 'icon',
        url: '/icons/android-chrome-192x192.avif',
        sizes: '192x192'
      }
    ]
  },
  openGraph: {
    type: 'website',
    url: 'https://duapermatamulia.co.id',
    siteName: 'Dua Permata Mulia | Authorized AV Distributor | Situs Resmi',
    title: 'Dua Permata Mulia | Authorized AV Distributor | Situs Resmi',
    description: `We provide high-performance video conferencing visualizers, AI hardware, and smart systems for tomorrow's industries — specializing in education technology and visual collaboration solutions.`,
    images: [
      { url: '/og/default-og.avif', width: 1200, height: 630, alt: 'OG' }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@duapermatamulia',
    creator: '@duapermatamulia'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        {children}
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
