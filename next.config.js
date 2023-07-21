/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
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
  },
    async headers() {
    return [
      { 
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
