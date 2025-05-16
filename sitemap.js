
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';

const hostname = 'https://www.mrpipey.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/aboutus', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/allServices', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/frozen-pipes', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/toilet-repair', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/sump-pump', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/emergency-plumbing', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/backflow-preventers', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/pipe-insulation', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/water-valves', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/sewer-repair', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/leaking-pipes', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/water-shut-off', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/drain-repair', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/faucet-repair', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/basement-drains', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/sink-repair', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/plumbing-leaks', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/tankless-water-heaters', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/water-heaters', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/hot-water-dispensers', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/garbage-disposals', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/drain-cleaning', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/clogged-drains', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/sewer-drains', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/sewer-camera-inspection', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/hydroscrub-drain-jetting', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/trenchless-sewer-line-repair', changefreq: 'monthly', priority: 0.8 },

];

const stream = new SitemapStream( { hostname } )

streamToPromise(Readable.from(urls).pipe(stream)).then((data) => {
    const sitemap = data.toString();
    writeFileSync('sitemap.xml', sitemap);
  });