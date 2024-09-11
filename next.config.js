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
        // Match all routes or specific routes
        source: '/(.*)',

        headers: [
          {
            key: 'Expires',
            value: 'Wed, 21 Oct 2025 07:28:00 GMT', // Set the date for the Expires header
          },
        ],
      },
    ];
  }

}


module.exports = nextConfig
