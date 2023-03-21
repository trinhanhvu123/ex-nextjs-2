/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env:{
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://anhvu6288:oRd1S2UX0bc6iYOn@cluster0.eigpmsx.mongodb.net/nextjs_ecommerce?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET": "s>6,2#W+^7nbGA*#ZDY>}gjYkdhavCfxHTv_-xGJP=/~q",
    "REFRESH_TOKEN_SECRET": "^N=u#[YrfpT5fhG2rtN2p9e#v^uj]+-PE*:>K'@fj'7;9A*@<"
  }
}
