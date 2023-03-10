/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/*",
                destination: "/",
                permanent: false,
            }
        ]
    }
};
  
module.exports = nextConfig;
