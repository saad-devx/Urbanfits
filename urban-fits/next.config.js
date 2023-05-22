/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "pbs.twimg.com", "i.etsystatic.com", "urban-fits.s3.eu-north-1.amazonaws.com", "lh3.googleusercontent.com"]
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
    SMTP_HOST: "mail.urbanfits.ae",
    SMTP_USER: "support@urbanfits.ae",
    SMTP_PASSWORD: "Support@2023",
    SMTP_SENDER_EMAIL: "",
    //Stripe keys
    STRIPE_PUBLISHABLE_KEY: "pk_test_51MkNT6BIhEpWj9u7qSXh10bWCubPCpGhUPbEwcWHap0EZZcn1FCnX46CYwmtSIRmdl8HfKPgqczIJ92t92Efj4AE00kUAlBVgf",
    STRIPE_SECRET_KEY: "sk_test_51MkNT6BIhEpWj9u7Kmn5ZPcmpXKSSQsDhiC0UjuoI2AdT5OUgUdqZAZFFQQ3ijO06znVKf0MMi7oBWnP3uMNWGrB00pzZZ7ZDJ",
    STRIPE_WEBHOOK_SECRET: "we_1NAZhmBIhEpWj9u7qUqmnoa0",
    //AWS S3 Access Key IDs
    S3_ACCESS_KEY: "AKIAWXH553KR4VBPA7YM",
    S3_SECRET_KEY: "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",
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
