import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Turbopack is the default in Next.js 16; velite runs via prebuild script
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
