/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "pbs.twimg.com"]
  },
  env: {
    MONGO_URI: "mongodb://localhost:27017/urbanfits",
    HOST: "http://localhost:3000",
    SECRET_KEY: "MuhammadBilawalAshrafOwnsUrbanFisBrand"
  }
}

module.exports = nextConfig
