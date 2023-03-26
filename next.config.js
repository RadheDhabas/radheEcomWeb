/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    stripe_publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
  },
  typescript:{
    ignoreBuildErrors:true,
  },
   eslint: { 
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
