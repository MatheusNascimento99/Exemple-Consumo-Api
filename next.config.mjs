/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['reqres.in'], 
      remotePatterns: [
        {
          protocol: 'https', 
          hostname: 'reqres.in', 
          port: '', 
          pathname: '/img/faces/**', 
        },
      ],
    },
  };
  
  export default nextConfig;
  