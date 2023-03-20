/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env:{
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://anhvu62882690:anhvu123@cluster0.32xs5gb.mongodb.net/next_ecommerce?retryWrites=true&w=majority"
  }
}
