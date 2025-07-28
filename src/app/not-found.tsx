// app/not-found.tsx
'use client' // optional for animations or interactivity

import Navbar from '@/components/layout/Navbar'
import Logo from '@/components/logo/logo'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <Logo size={150} />
        <h1 className="text-4xl font-bold my-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <a className="text-blue-500 hover:underline">← Back to Home</a>
        </Link>
      </div>
    </>
  )
}
