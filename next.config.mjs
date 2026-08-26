/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(process.env.NEXT_OUTPUT_EXPORT === 'true' ? { output: 'export' } : {}),
}

export default nextConfig
