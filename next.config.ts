import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  //https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/ad6d/live/d0eea8a0-bed1-11f1-a64c-550be9e3c66b.jpg.webp
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJ4IZbkwwyJD4dq7MObC7x1gpYN0xVkTOV_X9T9ZCMQ&s=10
  //https://lh3.googleusercontent.com/a/ACg8ocI_PMixwOI8Zn55HaAhe5F9dj70RiUCpMUrK0FpANVinHusXeSc=s96-c
  reactCompiler: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'ichef.bbci.co.uk',
      //   port: '',
      //   pathname: '/ace/**',
      // },
      {
        protocol: 'https',
        hostname: '**',
        // port: '',
        // pathname: '/ace/**',
      },
    ],
  },
}

export default nextConfig
