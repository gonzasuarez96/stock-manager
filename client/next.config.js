/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: "s12-16-ft-php-next-production.up.railway.app",
  },
};

module.exports = nextConfig;
