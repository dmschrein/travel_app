/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to allow server-side features
  images: {
    // No need to set unoptimized unless you face other specific issues
  }
}

module.exports = nextConfig;
