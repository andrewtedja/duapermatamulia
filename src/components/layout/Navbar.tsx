'use client'
import React, { useState } from 'react'
import { Globe, Menu, Search, X } from 'lucide-react'
import Logo from '../logo/logo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navItems = ['Solutions', 'Products', 'News', 'About Us', 'Contact Us']

  return (
    <nav className="fixed w-full h-16 bg-white shadow-sm border-b border-gray-200 z-1000">
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
                  className="relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium duration-200 after:absolute after:-bottom-3.5 after:left-0 after:w-full after:h-0.5 after:bg-transparent hover:after:bg-red-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Search and Globe Icons */}
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

              {/* Globe Icon */}
              <button className="p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 group ml-2">
                <Globe className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
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
