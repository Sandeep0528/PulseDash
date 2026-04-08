/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // THIS IS THE FIX: It stops the "Invalid value for --ignoreDeprecations" crash
    experimental: {
        workerThreads: false,
        cpus: 1
    }
};

export default nextConfig;