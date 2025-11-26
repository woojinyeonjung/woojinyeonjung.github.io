import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    output: "export",
    basePath: "/woojinyeonjung.github.io",
    assetPrefix: "/woojinyeonjung.github.io",
    reactStrictMode: true,
    trailingSlash: true,
    async rewrites() {
        return [
            {
                source: "/images/:path*",
                destination: "/woojinyeonjung.github.io/images/:path*", // The :path parameter isn't used here so will be automatically passed in the query
            },
        ];
    },
    images: {
        path: "/woojinyeonjung.github.io/_next/image",
    },
};

export default nextConfig;
