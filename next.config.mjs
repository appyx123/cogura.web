/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tambahkan baris ini
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig