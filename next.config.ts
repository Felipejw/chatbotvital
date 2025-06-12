
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'checkout.tubaroesdabolsa.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seguro.chatbotvital.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chatguru.com.br',
        port: '',
        pathname: '/**',
      }
    ],
  },
  allowedDevOrigins: ['https://6000-firebase-studio-1749659974914.cluster-kc2r6y3mtba5mswcmol45orivs.cloudworkstations.dev'],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
