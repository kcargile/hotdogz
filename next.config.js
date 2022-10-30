/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.contentstack.io",
                port: "443",
                pathname: `/*/assets/${process.env.CONTENTSTACK_API_KEY}/**`
            }
        ]
    }
};

module.exports = nextConfig;
