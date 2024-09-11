/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const hostnames = ["i.pravatar.cc", "images.unsplash.com", "github.com"];

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
      pathname: "**",
    })),
  },
  transpilePackages: ['lucide-react'],
};
export default withNextIntl(nextConfig);
