/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "pbs.twimg.com", "i.etsystatic.com"]
  },
  env: {
    HOST: "https://st.urbanfits.ae",
    // HOST: "http://localhost:3000",
    // HOST: "https://urbanfits.vercel.app",
    MONGO_URI: "mongodb+srv://darkreaper:s19114666d@cluster0.eyxeosm.mongodb.net/Urbanfits?retryWrites=true&w=majority",
    SECRET_KEY: "MuhammadBilawalAshrafOwnsUrbanFitsBrand",
    // Google client credentials
    GOOGLE_CLIENT_ID: "1090637042326-jp571pnicbocv80911mkkmd94pvuhbk0.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    // Email SMTP credentials
    SMTP_HOST: "",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SMTP_SENDER_EMAIL: "",
    //Stripe keys
    STRIPE_PUBLISHABLE_KEY: "pk_test_51MkU2DHF1bkFLgckS5AUrOHFjoJAPxAW1RxkHDfriM4uDbVAM3MeVu3XOVfy7BqUGx9kiu9CMQxqbdRxoWSXMO8c003NMTN2AT",
    STRIPE_SECRET_KEY: "sk_test_51MkU2DHF1bkFLgck4aQNuqKxTOrWh2uSlx8AxKJucUFGPl4cDSpjLhhn4ynhISjShrTqGhl2U4A1UZJFe0RRclyo00hWAfnqeB",
    STRIPE_WEBHOOK_SECRET: "whsec_eb37720a4836dfd80d5b3603d61c4ca3b6c45aa186b1710f1cd3101a4ca861a7"
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/(.*)",
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
