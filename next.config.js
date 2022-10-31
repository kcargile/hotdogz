/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.contentstack.io"
            }
        ]
    }
};
console.log("images");
console.log(nextConfig.images);
module.exports = nextConfig;
