import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // reactCompiler: true, // Next.js 버전에 따라 experimental 옵션일 수 있습니다. 에러가 나면 주석 처리하세요.
    output: "export",

    // 1. basePath와 assetPrefix 제거 (User Page는 루트 도메인을 사용함)
    // basePath: "/woojinyeonjung.github.io",
    // assetPrefix: "/woojinyeonjung.github.io",

    reactStrictMode: true,
    trailingSlash: true,

    // 2. rewrites 제거 (output: "export"에서는 작동하지 않음)
    // async rewrites() { ... },

    // 3. 이미지 최적화 비활성화 (Github Pages는 이미지 최적화 서버가 없음)
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
