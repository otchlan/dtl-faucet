/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 swcMinify: false,     // Set this to false
 swcLoader: false,     // Add this line
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
