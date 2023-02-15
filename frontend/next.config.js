/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://localhost:27017/urbanfits",
    HOST: "http://localhost:3000",
    SECRET_KEY: "MuhammadBilawalAshrafOwnsUrbanFisBrand"
  }
}

module.exports = nextConfig
