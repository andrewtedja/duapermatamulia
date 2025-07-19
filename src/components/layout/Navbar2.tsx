// 'use client'
// import React, { useEffect, useRef, useState } from 'react'
// import { ChevronDown, Mail, Menu, Search, X } from 'lucide-react'
// import Logo from '../logo/logo'
// import { products } from '@/data/products'
// import { partners } from '@/data/solutions'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)

//   const [activeDropdown, setActiveDropdown] = useState(null)

//   const [activeProductCategory, setActiveProductCategory] =
//     useState('Popular Products')

//   const dropdownRefs = useRef({})
//   const timeoutRef = useRef(null)

//   // Product categories
//   const productCategories = [
//     'Popular Products',
//     ...Array.from(new Set(products.map((p) => p.category)))
//   ]

//   // Get filtered products
//   const filteredProducts = products
//     .filter((product) =>
//       activeProductCategory === 'Popular Products'
//         ? true
//         : product.category === activeProductCategory
//     )
//     .slice(0, 6)

//   const handleDropdownEnter = (dropdown) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current)
//     }
//     setActiveDropdown(dropdown)
//   }

//   const handleDropdownLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null)
//     }, 150)
//   }

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current)
//       }
//     }
//   }, [])

//   const navItems = [
//     {
//       name: 'Products',
//       hasDropdown: true,
//       dropdown: 'products'
//     },
//     {
//       name: 'Solutions',
//       hasDropdown: true,
//       dropdown: 'solutions'
//     },
//     { name: 'News', hasDropdown: false },
//     { name: 'About Us', hasDropdown: false },
//     { name: 'Contact Us', hasDropdown: false }
//   ]

//   return (
//     <nav className="fixed w-full h-16 bg-white shadow-sm border-b border-gray-200 z-1000">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Logo size={100} />

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex flex-1 justify-start">
//             <div className="ml-16 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative"
//                   onMouseEnter={() =>
//                     item.hasDropdown && handleDropdownEnter(item.dropdown)
//                   }
//                   onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
//                 >
//                   <a
//                     href="#"
//                     className="relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium duration-200 flex items-center after:absolute after:-bottom-3.5 after:left-0 after:w-full after:h-0.5 after:bg-transparent z-100 hover:after:bg-red-500"
//                   >
//                     {item.name}
//                     {item.hasDropdown && (
//                       <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
//                     )}
//                   </a>

//                   {/* Products Dropdown */}
//                   {item.dropdown === 'products' &&
//                     activeDropdown === 'products' && (
//                       <div className="absolute top-full left-0 mt-3 w-screen max-w-6xl bg-white border border-gray-100 shadow-lg overflow-hidden z-1">
//                         <div className="flex">
//                           {/* Categories Sidebar */}
//                           <div className="w-48 bg-gray-50 border-r border-gray-200">
//                             <div className="py-2">
//                               {productCategories.map((category) => (
//                                 <button
//                                   key={category}
//                                   onClick={() =>
//                                     setActiveProductCategory(category)
//                                   }
//                                   className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
//                                     activeProductCategory === category
//                                       ? 'bg-white text-gray-900 border-r-2 border-red-500'
//                                       : 'text-gray-600 hover:bg-white hover:text-gray-900'
//                                   }`}
//                                 >
//                                   {category}
//                                 </button>
//                               ))}
//                             </div>
//                           </div>

//                           {/* Products Grid */}
//                           <div className="flex-1 p-4">
//                             <div className="grid grid-cols-3 gap-4">
//                               {filteredProducts.map((product) => (
//                                 <a
//                                   key={product.id}
//                                   href={`/products/${product.slug}`}
//                                   className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
//                                 >
//                                   <div className="flex items-start space-x-3">
//                                     <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
//                                       <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xs text-gray-600">
//                                         IMG
//                                       </div>
//                                     </div>
//                                     <div className="flex-1 min-w-0">
//                                       <h4 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-150">
//                                         {product.name}
//                                       </h4>
//                                       <p className="text-xs text-gray-500 mt-1 line-clamp-2">
//                                         {product.subtitle}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </a>
//                               ))}
//                             </div>
//                             <div className="mt-4 pt-4 border-t border-gray-200">
//                               <a
//                                 href="/products"
//                                 className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center"
//                               >
//                                 View All Products
//                                 <svg
//                                   className="ml-1 h-4 w-4"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                   {/* Solutions Dropdown */}
//                   {item.dropdown === 'solutions' &&
//                     activeDropdown === 'solutions' && (
//                       <div className="absolute top-full left-0 mt-1 w-screen max-w-5xl bg-white border border-gray-100 shadow-lg rounded-lg overflow-hidden">
//                         <div className="p-4">
//                           <div className="grid grid-cols-2 gap-4">
//                             {partners.slice(0, 6).map((partner) => (
//                               <a
//                                 key={partner.id}
//                                 href={partner.visitLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border border-gray-100"
//                               >
//                                 <div className="flex items-start space-x-4">
//                                   <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
//                                     <div className="w-12 h-8 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
//                                       {partner.name.charAt(0)}
//                                     </div>
//                                   </div>
//                                   <div className="flex-1 min-w-0">
//                                     <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-150 mb-1">
//                                       {partner.name}
//                                     </h4>
//                                     <p className="text-xs text-gray-600 line-clamp-2 mb-2">
//                                       {partner.description}
//                                     </p>
//                                     <div className="space-y-1">
//                                       {partner.supportedModels
//                                         .slice(0, 2)
//                                         .map((model, index) => (
//                                           <div
//                                             key={index}
//                                             className="text-xs text-gray-500 truncate"
//                                           >
//                                             • {model}
//                                           </div>
//                                         ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                           <div className="mt-4 pt-4 border-t border-gray-200">
//                             <a
//                               href="/solutions"
//                               className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center"
//                             >
//                               View All Solutions
//                               <svg
//                                 className="ml-1 h-4 w-4"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M9 5l7 7-7 7"
//                                 />
//                               </svg>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Search and Globe Icons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Search Section */}
//             <div className="relative flex items-center">
//               <div
//                 className={`flex items-center transition-all duration-300 ease-in-out ${
//                   isSearchOpen ? 'w-80' : 'w-auto'
//                 }`}
//               >
//                 {isSearchOpen ? (
//                   <div className="relative w-full">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Search className="h-4 w-4 text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 focus:bg-white transition-all duration-200 text-sm placeholder-gray-500"
//                       autoFocus
//                     />
//                     <button
//                       onClick={() => setIsSearchOpen(false)}
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                     >
//                       <X className="h-4 w-4" />
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => setIsSearchOpen(true)}
//                     className="p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 group"
//                   >
//                     <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
//                   </button>
//                 )}
//               </div>

//               {/* Globe Icon */}
//               {/* <button className="p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 group ml-2">
//                 <Globe className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
//               </button> */}
//               <div className="ml-5 flex items-center justify-center">
//                 <p className="hidden lg:flex text-sm text-gray-600 transition-colors duration-200  items-center">
//                   <Mail className=" h-4 w-4 mr-2" />
//                   info@duapermatamulia.com
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
//             >
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 bg-white border-t border-gray-200 rounded-b-2xl">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
//               >
//                 {item}
//               </a>
//             ))}

//             {/* <button className="bg-gray-900 text-white hover:bg-gray-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 border-t border-gray-200 mt-2 pt-4">
//                                 Contact Us
//                             </button> */}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar
