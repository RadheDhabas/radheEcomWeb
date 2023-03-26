/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    stripe_publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
     NEXTAUTH_URL: 'https://radhe-ecom-web-hfa8-git-main-radhedhabas.vercel.app',
        NEXTAUTH_SECRET: 'Ey7nTKnggBc0bRN8WUjyShw2qzOZ6KW4fUyqcKBePxY=',
  },
  typescript:{
    ignoreBuildErrors:true,
  },
   eslint: { 
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
