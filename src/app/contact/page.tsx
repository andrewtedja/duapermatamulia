import ContactUsPage from '@/components/contact/Contacts'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="bg-gray-50 flex-1 pt-16">
        <ContactUsPage />
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
