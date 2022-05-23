/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  sassOptions: {
    prependData: '@import "~/styles/variables.scss";',
  },
  images: {
    domains: ['i.annihil.us'],
  },
};

module.exports = nextConfig;
