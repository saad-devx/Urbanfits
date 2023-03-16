/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "pbs.twimg.com"]
  },
  env: {
    MONGO_URI: "mongodb+srv://darkreaper:s19114666d@cluster0.eyxeosm.mongodb.net/Urbanfits?retryWrites=true&w=majority",
    // HOST: "http://localhost:3000",
    HOST: "https://urbanfits.vercel.app",
    SECRET_KEY: "MuhammadBilawalAshrafOwnsUrbanFisBrand",
    // Google client credentials
    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",
    // Email SMTP credentials
    SMTP_HOST: "smtp.sendgrid.net",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SMTP_SENDER_EMAIL: "",
  },
  async headers() {
    return [
      {
        // matching all API routes
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
