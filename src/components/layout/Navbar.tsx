'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
  ChevronDown,
  ExternalLink,
  Globe,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  X
} from 'lucide-react'
import Logo from '../logo/logo'
import { products } from '@/data/products'
import { partners } from '@/data/solutions'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const DROPDOWN_CLOSE_DELAY = 300 // milliseconds

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeProductCategory, setActiveProductCategory] =
    useState('Popular Products')

  const [showTopBar, setShowTopBar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const timeoutRef = useRef<null | NodeJS.Timeout>(null)

  // Product categories
  const productCategories = [
    'Popular Products',
    ...Array.from(new Set(products.map((p) => p.category)))
  ]

  // Get filtered products
  const filteredProducts = products
    .filter((product) =>
      activeProductCategory === 'Popular Products'
        ? true
        : product.category === activeProductCategory
    )
    .slice(0, 6)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY === 0) {
        setShowTopBar(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowTopBar(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, DROPDOWN_CLOSE_DELAY)
  }

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const navItems = [
    { name: 'Home', hasDropdown: false, href: '/' },
    { name: 'Products', hasDropdown: true, dropdown: 'products' },
    { name: 'Solutions', hasDropdown: true, dropdown: 'solutions' },
    {
      name: 'News',
      hasDropdown: false,
      href: 'https://www.aver.com/press-release/AVer-Aligns-with-Shure-to-Empower-Pro-AV-Camera-Voice-Tracking'
    },
    { name: 'About Us', hasDropdown: false, href: '/about' },
    { name: 'Contact Us', hasDropdown: false, href: '/contact' }
  ]

  return (
    <>
      {/* Top Announcement Bar */}
      <motion.div
        className={`fixed w-full bg-red-800 text-white text-sm z-[1001] overflow-hidden transition-all duration-300 ${
          showTopBar ? 'opacity-100 h-10' : 'opacity-0 h-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Left side - Announcement */}
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/duapermatamulia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>

              <div className="h-4 w-px bg-white opacity-50 mx-3" />

              {/* Phone */}
              <div className="flex items-center space-x-1 text-sm">
                <Phone size={16} />
                <span className="hidden sm:inline">+62-21-2932-4647</span>
              </div>

              <div className="h-4 w-px bg-white opacity-50 mx-3 hidden sm:block" />

              {/* Email */}
              <div className="flex items-center space-x-1 text-sm">
                <Mail size={16} />
                <span className="hidden sm:inline">
                  info@duapermatamulia.com
                </span>
              </div>

              <Link
                href="/inquiry"
                className=" text-sm text-white border border-white px-3 py-0.5 rounded hover:bg-white hover:text-red-800 transition"
              >
                Inquire Now
              </Link>
            </div>

            {/* Right side - Region/Language Selector */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm hover:text-gray-300 cursor-pointer transition-colors">
                <Globe className="hidden sm:inline h-4 w-4" />
                <span className="hidden sm:inline">Indonesia</span>
              </div>

              {/* Close button for mobile */}
              <button
                onClick={() => setShowTopBar(false)}
                className="sm:hidden p-1 hover:bg-gray-800 rounded transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full h-16 bg-white shadow-sm border-b border-gray-200 z-[1001] ${
          showTopBar ? 'top-10' : 'top-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo size={100} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-start">
              <div className="ml-16 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <button
                        onClick={() => handleDropdownClick(item.dropdown!)}
                        className={`relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium duration-200 flex items-center
        after:absolute after:-bottom-3.5 after:left-0 after:w-full after:h-0.5 after:content-['']
        ${
          activeDropdown === item.dropdown
            ? 'text-gray-900 after:bg-red-500'
            : 'after:bg-transparent hover:after:bg-red-500'
        }`}
                        onMouseEnter={() => handleDropdownEnter(item.dropdown!)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                            activeDropdown === item.dropdown ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href!}
                        className={`relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium duration-200
        after:absolute after:-bottom-[15px] after:left-0 after:w-full after:h-0.5 after:content-['']
        after:bg-transparent hover:after:bg-red-500`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Contact */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Section */}
              <div className="relative flex items-center">
                <div
                  className={`flex items-center transition-all duration-300 ease-in-out ${
                    isSearchOpen ? 'w-80' : 'w-auto'
                  }`}
                >
                  {isSearchOpen ? (
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 focus:bg-white transition-all duration-200 text-sm placeholder-gray-500"
                        autoFocus
                      />
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 group"
                    >
                      <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden z-[100] relative">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 bg-white border-t border-gray-200 rounded-b-2xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Full Screen Black Overlay Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Full Screen Overlay Dropdowns */}
      {activeDropdown && (
        <motion.div
          initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0, y: -20 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, y: 0 }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`fixed inset-0 bg-white z-1000 overflow-hidden ${
            showTopBar ? 'top-24 h-[calc(100vh-2.5rem)]' : 'top-16'
          }`}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
          }}
          onMouseLeave={() => handleDropdownLeave()}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveDropdown(null)}
            className="absolute top-4 right-8 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Products Dropdown Content */}
          {activeDropdown === 'products' && (
            <div className="h-full overflow-y-auto">
              <div className=" mx-auto px-4  lg:px-8 py-8">
                <div className="flex h-full">
                  {/* Categories Sidebar */}
                  <div className="w-64 pr-4 border-r border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                      Product Categories
                    </h3>
                    <div className="space-y-1">
                      {productCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveProductCategory(category)}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeProductCategory === category
                              ? 'bg-red-50 text-red-600 border-l-4 border-red-500'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="flex-1 pl-4">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {activeProductCategory}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3    gap-3 mb-12">
                      {filteredProducts.map((product) => (
                        <a
                          key={product.id}
                          className="group block  rounded-xl transition-all duration-300 overflow-hidden  px-4 py-4 bg-[#F8F9FC]"
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative w-32 h-32 flex-shrink-0">
                              <Image
                                src={product.productImagePath}
                                alt={product.name}
                                fill
                                className="object-contain group-hover:scale-115 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-1">
                              <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {product.name}
                              </h4>
                              <p className="text-xs text-gray-600 ">
                                {product.subtitle}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solutions Dropdown Content */}
          {activeDropdown === 'solutions' && (
            <div className="h-full overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Solutions & Partners
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
                  {partners.slice(0, 9).map((partner) => (
                    <a
                      key={partner.id}
                      href={partner.visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-white border-gray-200 border rounded-xl hover:shadow-lg    "
                    >
                      <ExternalLink className="w-4 h-4 float-right" />
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        {/* Placeholder image */}
                        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1  min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900  transition-colors duration-200 mb-2">
                            {partner.name}
                          </h4>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Supported Models
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {partner.supportedModels
                            .slice(0, 3)
                            .map((model, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                              >
                                {model}
                              </span>
                            ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  )
}

export default Navbar
