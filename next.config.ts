import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com",
      "lh3.googleusercontent.com",
      'encrypted-tbn0.gstatic.com',
      'upload.wikimedia.org',
      "github.githubassets.com",
    ],
  }
};

export default nextConfig;
