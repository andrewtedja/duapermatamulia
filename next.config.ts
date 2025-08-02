import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  swcMinify: true, // keeps build small & fast
  legacyBrowsers: false // stops ES5 transpilation
}

export default nextConfig
