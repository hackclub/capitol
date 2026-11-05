/** @type {import('next').NextConfig} */
const nextConfig = {
  // A static site: `next build` writes plain HTML/CSS/JS to out/ and there is
  // no Node server at runtime. Security headers are set by whatever serves
  // out/ (see nginx.conf for the Docker image).
  output: "export",
};

export default nextConfig;
