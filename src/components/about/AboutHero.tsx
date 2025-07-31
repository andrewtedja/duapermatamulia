import Image from 'next/image'

export default function AboutHero() {
  return (
    <div className="relative h-64 overflow-hidden">
      <Image
        src="/images/backgrounds/contacts.avif"
        alt="About Us Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority={true}
      />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-4">
            About Us
          </h1>
        </div>
      </div>
    </div>
  )
}
