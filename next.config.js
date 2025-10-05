/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks']
  }
}

module.exports = nextConfig
