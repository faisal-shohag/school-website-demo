/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       remotePatterns: [
        {
          protocol: "https",
          hostname: "i.postimg.cc",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "img1.wsimg.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: "",
          pathname: '/**'
        }
     
    ],
    },
};

export default nextConfig;
