/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "https://media1.tenor.com",
        hostname: "mir-s3-cdn-cf.behance.net",
      },
    ],
  },
};

module.exports = nextConfig;
