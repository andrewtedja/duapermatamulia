'use client'

import { useState, useEffect } from 'react'
import { Eye, Zap, Settings, MessageCircle, FileText } from 'lucide-react'

const sections = [
  { id: 'inquiry', label: 'Inquire Now', icon: MessageCircle },
  { id: 'overview', label: 'Overview', icon: Eye },
  { id: 'features', label: 'Features', icon: Zap },
  { id: 'specs', label: 'Specifications', icon: Settings },
  { id: 'resources', label: 'Resources', icon: FileText }
]

export function ProductSidebar() {
  const [, setActiveSection] = useState('hero')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed right-3 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ease-out group ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-2xl px-2 py-4 transition-all duration-300 group-hover:min-w-[160px]">
          <nav className="flex flex-col gap-2">
            {sections.map((section) => {
              const IconComponent = section.icon
              const isInquiry = section.id === 'inquiry'

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group/item relative flex items-center rounded-md text-sm font-semibold transition-all duration-300 overflow-hidden border ${
                    isInquiry
                      ? 'bg-gradient-to-r from-red-700 to-red-600 text-white shadow-lg border-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:to-red-400'
                      : 'text-gray-600 hover:border-gray-400 hover:shadow-xl border-gray-200 hover:text-gray-900'
                  }`}
                >
                  {/* Icon - always visible */}
                  <div className="flex items-center justify-center w-9 h-9 flex-shrink-0">
                    <IconComponent
                      className={`h-5 w-5 ${isInquiry ? 'text-white' : ''}`}
                    />
                  </div>

                  {/* Text - only shifts on hover of this item */}
                  <span className="absolute left-12 whitespace-nowrap text-xs group-hover/item:-translate-x-2 transition-all duration-300 pr-5">
                    {section.label}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/20 z-30 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
