/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./images/ImageLoader.js"
    }
};

export default nextConfig;
