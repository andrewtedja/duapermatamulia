import Image from 'next/image'

export default function ContactsHero() {
  return (
    <div className="relative h-64 overflow-hidden">
      <Image
        src="/images/backgrounds/sales.png"
        alt="Sales Background"
        fill
        fetchPriority="high"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        priority
        blurDataURL="/images/backgrounds/sales.png?height=400&width=1200&blur"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-4">
            Contact Us
          </h1>
          <p className="text-lg opacity-90 max-w-2xl font-semibold">
            Kami senang mendengar dari Anda. Hubungi kami melalui salah satu
            channel berikut.
          </p>
        </div>
      </div>
    </div>
  )
}
