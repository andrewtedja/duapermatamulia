import React from 'react'
import { Youtube, Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react'
import { products } from '@/data/products'
import { partners } from '@/data/solutions'

import Logo from '../logo/logo'

// Group products by category
const categorizedProducts = products.reduce<Record<string, typeof products>>(
  (acc, product) => {
    if (!acc[product.category]) acc[product.category] = []
    acc[product.category].push(product)
    return acc
  },
  {}
)

const contactPersons = {
  headOffice: [
    { name: 'Jusak Budiman', phone: '+62-8111-7587-93' },
    { name: 'Muliana', phone: '+62-8129-4977-33' },
    { name: 'Zainudine', phone: '+62-8129-2754-688' }
  ],
  surabayaOffice: [
    { name: 'Satriyadi', phone: '+62-8113-3232-8' },
    { name: 'Aries', phone: '+62-8155-1002-21' }
  ]
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Categorized Products */}
          <div className="md:col-span-2">
            <h3 className="text-black font-bold mb-4">Products</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {Object.entries(categorizedProducts).map(
                ([category, categoryProducts]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-2">{category}</h4>
                    <ul className="space-y-1">
                      {categoryProducts.map((product) => (
                        <li key={product.id} className="hover:text-red-400">
                          <a href={'#'}>{product.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-black font-bold mb-4">Solutions</h3>
            <ul className="space-y-1 text-sm">
              {partners.map((solution) => (
                <li key={solution.id} className="hover:text-red-400">
                  <a href={'#'}>{solution.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-black font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@duapermatamulia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+(6221) 29324647 – 8</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>
                  Monday-Friday
                  <br />
                  08:30-17:30 WIB
                </span>
              </div>
            </div>
          </div>

          <div>
            {/* Head Office */}
            <div>
              <h3 className="text-black font-bold mb-4 ">Head Office</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>
                    Ruko Tematic Blok R/50 Jl. CBD Gading Serpong Selatan Curug
                    Sangereng, Kelapa Dua Kab. Tangerang – Banten
                  </span>
                </div>
                <div className="mt-3">
                  <p className="font-medium mb-1">Contact Person:</p>
                  {contactPersons.headOffice.map((person, index) => (
                    <p key={index}>{`${person.name} (${person.phone})`}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* Head Office */}
            <div className="mt-7">
              <h3 className="text-black font-bold mb-4">Surabaya</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Manggis VIII M-651 Pondok Tjandra Indah Sidoarjo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+(6231) 9968-3636</span>
                </div>

                {/* CP */}
                <div className="mt-3">
                  <p className="font-medium mb-1">Contact Person:</p>
                  {contactPersons.surabayaOffice.map((person, index) => (
                    <p key={index}>{`${person.name} (${person.phone})`}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Logo size={100} />
              <p className="text-sm text-black">
                Copyright &copy; {new Date().getFullYear()} PT. Dua Permata
                Mulia, All Rights Reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/duapermatamulia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCSiJp4kYdug8GYvNSwlRm9A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
