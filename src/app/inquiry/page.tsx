import InquiryForm from '@/components/inquiry/InquiryForm'
import InquiryHero from '@/components/inquiry/InquiryHero'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function SalesInquiryPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="bg-gray-50 flex-1 pt-16" >
        <InquiryHero />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  )
}
