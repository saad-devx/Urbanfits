/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "pbs.twimg.com"]
  },
  env: {
    MONGO_URI: "mongodb+srv://darkreaper:s19114666d@cluster0.eyxeosm.mongodb.net/Urbanfits?retryWrites=true&w=majority",
    HOST: "http://localhost:3000",
    SECRET_KEY: "MuhammadBilawalAshrafOwnsUrbanFisBrand"
  }
}

module.exports = nextConfig
