import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import 'keen-slider/keen-slider.min.css'
import ScrollToTopButton from '@/components/buttons/ScrollToTopButton'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: 'Dua Permata Mulia',
  description:
    "We provide high-performance video conferencing visualizers, AI hardware, and smart systems for tomorrow's industries — specializing in education technology and visual collaboration solutions."
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
        <ScrollToTopButton />
      </body>
    </html>
  )
}
