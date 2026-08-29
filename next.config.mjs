/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // allowedDevOrigins harus di root level (bukan di dalam experimental)
  allowedDevOrigins: ['100.104.165.68'],
  // headers() tidak bekerja dengan output: 'export'
  // Set Cache-Control di CDN/hosting (Cloudflare, Vercel, dsb.)
}

export default nextConfig