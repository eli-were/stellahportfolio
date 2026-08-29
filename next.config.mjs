/** @type {import('next').NextConfig} */
const nextConfig = {
  // Source maps are useful for debugging, but are large files that do not need
  // to be published with a public portfolio.
  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Keep optimized local images in the cache for a week.
    minimumCacheTTL: 60 * 60 * 24 * 7,
    qualities: [75, 85, 100],
  },
};
export default nextConfig;

