'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../logo/logo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    'Products',
    'Newsroom',
    'Insights',
    'DJI Academy',
    'Support',
    'About Us'
  ]

  return (
    <nav className="fixed w-full h-16 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo size={100} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-start">
            <div className="ml-16 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium duration-200 after:absolute after:-bottom-4 after:left-0 after:w-full after:h-0.5 after:bg-transparent hover:after:bg-red-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <button className="bg-[#E53E3E] text-white hover:bg-[#C53030] px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Contact Us
            </button>
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button className="bg-gray-900 text-white hover:bg-gray-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 border-t border-gray-200 mt-2 pt-4">
              Contact Us
            </button>
            {/* <button className="bg-gray-900 text-white hover:bg-gray-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 border-t border-gray-200 mt-2 pt-4">
                                Contact Us
                            </button> */}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
