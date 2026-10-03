import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  //https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/ad6d/live/d0eea8a0-bed1-11f1-a64c-550be9e3c66b.jpg.webp
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
        port: '',
        pathname: '/ace/**',
      },
    ],
  },
}

export default nextConfig
