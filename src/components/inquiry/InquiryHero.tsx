import Image from 'next/image'

export default function InquiryHero() {
  return (
    <div className="relative h-64 overflow-hidden w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/inquiry.jpg"
          alt="Inquiry Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Sales Inquiry
          </h1>
          {/* <p className="text-lg md:text-xl opacity-90 max-w-2xl font-light">
            Get in touch with our team to discuss your business needs
          </p> */}
        </div>
      </div>
    </div>
  )
}
