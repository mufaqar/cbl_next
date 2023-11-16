/** @type {import('next').NextConfig} */


module.exports = {
  async redirects() {
    return [
   
      { source: '/order-internet-and-tv-service', destination: '/', permanent: true },
      { source: '/order-internet-and-tv-service/', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true } ,
      { source: '/feed/', destination: '/', permanent: true } 
      {
        source: 'http://www.cablemovers.net/:path*', // replace with your domain
        destination: 'https://www.cablemovers.net/:path*',
        permanent: true,
      },

    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['cblproject.cablemovers.net', 'localhost'],
  },
};
