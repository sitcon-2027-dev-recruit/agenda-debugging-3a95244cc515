/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").pop();

const nextConfig = {
  output: "export",
  basePath:
    process.env.GITHUB_ACTIONS === "true" && repositoryName
      ? `/${repositoryName}`
      : "",
  trailingSlash: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
