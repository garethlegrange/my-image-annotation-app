/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname:
          "my-image-annotation-prpwfr3ph-garethlegranges-projects.vercel.app",
      },
    ],
  },
};

export default nextConfig;
