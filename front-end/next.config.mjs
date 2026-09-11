/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.1.67'],
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
