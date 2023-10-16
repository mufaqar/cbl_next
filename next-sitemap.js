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

var date_time = new Date();

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

async function fetchStateWiseCity(){
    const responceStateWiseCity = await fetch('https://cblproject.cablemovers.net/wp-json/custom/v1/states-cities')
    const dataStateWiseCity = await responceStateWiseCity.json();
    // Initialize an empty array to store the result URLs
    const resultUrls = [];
    // Iterate through the keys and their associated arrays
    for (const key in dataStateWiseCity) {
      const subArray = dataStateWiseCity[key];
      for (const subValue of subArray) {
        const url = SITE_URI + '/' + key + '/' + subValue;
        resultUrls.push(url);
      }
    }
    return resultUrls
}


function getCurrentDateInISO8601Format() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad to two digits
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const iso8601Date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;
  return iso8601Date;
}

const currentDateInISO8601Format = getCurrentDateInISO8601Format();



async function generateSitemap() {
  const { allProviders, states, zones, resultUrls } = await fetchData();
  const stateWiseCity = await fetchStateWiseCity()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URI}</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/contact-us</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/about-us</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
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
      ${states?.nodes.map(
        (item) => `
          <url>
            <loc>${SITE_URI}/${item.slug}</loc>
            <lastmod>${currentDateInISO8601Format}</lastmod>
            <priority>1.00</priority>
          </url>
        `
      ).join('')}
      ${stateWiseCity.map(
        (item) => `
          <url>
            <loc>${item}</loc>
            <lastmod>${currentDateInISO8601Format}</lastmod>
            <priority>1.00</priority>
          </url>
        `
      ).join('')} 
      
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
