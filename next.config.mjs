// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Enable React Strict Mode (optional)
    // Remove `appDir` from experimental
    webpack(config, { isServer }) {
      // Example: Modify webpack config if needed
      return config;
    },
    // Add other Next.js settings if necessary
  };
  
  export default nextConfig;
  