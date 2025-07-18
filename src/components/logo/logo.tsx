import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/logo/logo-dpm.png" // or "/logo.png", adjust as needed
        alt="Company Logo"
        width={size}
        height={size}
        priority
      />
      {/* <span className="text-xl font-bold text-red-600">
				PT. DUA PERMATA MULIA
			</span> */}
    </Link>
  )
}
