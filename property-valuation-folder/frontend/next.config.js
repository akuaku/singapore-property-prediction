
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http:
    console.log('Using backend URL:', backendUrl);
    
    return [
      {
        origin: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ]
  },
}

module['exports'] = nextConfig