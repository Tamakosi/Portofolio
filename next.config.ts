import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // The dev badge sits over the bottom-left corner and shows up in review screenshots.
  // Compile and runtime errors are still shown.
  devIndicators: false,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
