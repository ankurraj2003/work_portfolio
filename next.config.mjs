/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { turbo: {} },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
};

export default nextConfig;
