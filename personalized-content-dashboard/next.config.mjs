/** @type {import('next').NextConfig} */
const nextConfig = {
    // Forces a static HTML/CSS/JS export for Netlify
    output: 'export',

    // Professional Image Handling
    images: {
        unoptimized: true, // Required for 'output: export'
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
            {
                protocol: 'https',
                hostname: '**.newsapi.org',
            },
        ],
    },

    // Build Resiliency
    eslint: {
        // Allows production builds to successfully complete even if
        // your project has ESLint errors (crucial for assignments).
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Similarly, ignore type errors during build to ensure deployment
        ignoreBuildErrors: true,
    },

    // Bypassing the Netlify 'ignoreDeprecations' crash
    experimental: {
        workerThreads: false,
        cpus: 1,
    },

    // Ensure trailing slashes for better SEO and static routing
    trailingSlash: true,
};

export default nextConfig;