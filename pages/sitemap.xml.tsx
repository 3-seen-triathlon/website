const baseurl = 'https://dreiseenstafette.ch';

const sites = [
    { url: baseurl + '/' },
    { url: baseurl + '/information' },
    { url: baseurl + '/kategorien' },
    { url: baseurl + '/kontakt' },
    { url: baseurl + '/lauf' },
    { url: baseurl + '/partner' },
    { url: baseurl + '/seebachtaler' },
    { url: baseurl + '/roessli-hue' },
    { url: baseurl + '/stafette' },
    { url: baseurl + '/triathlon' },
];

function SiteMap() {
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${sites.map((site: any) => {
            return `
       <url>
           <loc>${`${site.url}`}</loc>
       </url>
     `;
        }).join('')}
   </urlset>
</xml>
 `
    )
}

export default SiteMap;

