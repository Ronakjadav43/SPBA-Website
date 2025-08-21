import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.asme.org.sg",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "images.wsj.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev.admin.spba.asme.org.sg",
        port: "",
        pathname: "**",
      },

      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      
     
    ],
  },
};

export default nextConfig;
















