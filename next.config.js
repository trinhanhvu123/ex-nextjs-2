/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env:{
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://anhvu6288:oRd1S2UX0bc6iYOn@cluster0.eigpmsx.mongodb.net/nextjs_ecommerce?retryWrites=true&w=majority"
  }
}
