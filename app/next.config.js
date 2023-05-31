/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/ZzRose",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://web.facebook.com/朱震",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/zzrose41",
        permanent: true
      }
    ];
  },
};

module.exports = nextConfig
