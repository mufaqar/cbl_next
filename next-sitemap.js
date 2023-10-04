const fs = require('fs');
const query = `
  query allProviders {
    allProviders(first: 100000) {
      nodes {
        date
        slug
      }
    }
    
    
  }
`;

const SITE_URI = 'https://cablemovers.vercel.app';

async function fetchData() {
  const response = await fetch('https://cblproject.cablemovers.net/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data;
}

async function generateSitemap() {
  const { allProviders } = await fetchData();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URI}</loc>
        <lastmod>2023-05-11T19:00:11+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/contact-us</loc>
        <lastmod>2023-05-11T19:00:11+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/about-us</loc>
        <lastmod>2023-05-11T19:00:11+00:00</lastmod>
        <priority>1.00</priority>
      </url>


      
      ${allProviders?.nodes
        .map(
          (item) => `
        <url>
          <loc>${SITE_URI}/providers/${item.slug}</loc>
          <lastmod>${item.date}+00:00</lastmod>
          <priority>0.80</priority>
        </url>
      `
        )
        .join('')}
      
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
