/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./ymv2", // Changes the build output directory to `./dist/`.
  basePath: process.env.NODE_ENV === "production" ? "/ymv2" : "",
};

export default nextConfig;
