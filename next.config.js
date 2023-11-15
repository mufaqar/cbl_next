/** @type {import('next').NextConfig} */


module.exports = {
  async redirects() {
    return [
      { source: 'https://cablemovers.net', destination: 'https://www.cablemovers.net', permanent: true },
      { source: 'http://cablemovers.net', destination: 'https://www.cablemovers.net', permanent: true },
      { source: 'https://www.cablemovers.net/order-internet-and-tv-service', destination: 'https://www.cablemovers.net', permanent: true },
      { source: 'http://www.cablemovers.net/order-internet-and-tv-service/', destination: 'https://www.cablemovers.net', permanent: true },
      { source: 'https://www.cablemovers.net/feed/', destination: 'https://www.cablemovers.net', permanent: true },
    

    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['cblproject.cablemovers.net', 'localhost'],
  },
};
