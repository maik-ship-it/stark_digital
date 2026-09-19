import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Turbopack is the default in Next.js 16; velite runs via prebuild script
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Blog posts merged into the industry page that serves the same search.
  // `permanent: true` sends 308: a 301 that keeps the request method.
  async redirects() {
    return [
      {
        source: '/blog/google-ads-for-accountants-dublin',
        destination: '/google-ads-dublin/accountants',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
