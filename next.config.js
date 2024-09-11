/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
   },
   env:{
    BACKEND_URL:'https://blognew.dynamicssquare.ca'
  },

  async headers() {
    return [
      {
        source: '/(.*\\.(js|css|png|jpg|jpeg|gif|svg|webp|avif))',  // Match all JS, CSS, and image files
        headers: [
          {
            key: 'Expires',
            value: 'Wed, 21 Oct 2025 07:28:00 GMT', // Set far-future Expires header
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // One year caching, immutable content
          },
        ],
      },
      {
        source: '/(.*)',  // Match all other routes (e.g., HTML files)
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate', // No caching for HTML files
          },
        ],
      },
    ];
  },

}


module.exports = nextConfig
