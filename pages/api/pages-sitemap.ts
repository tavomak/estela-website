import type { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import { SitemapStream, streamToPromise } from 'sitemap';
import { siteUrl } from '@/utils/constants';

// Stub pages (about, contact, portfolio) are noindex and excluded until they have real content
const pages = ['/', '/services'];
const locales = ['es', 'en'];
const defaultLocale = 'es';

const pagesSitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  const urls = pages.map(page => ({
    url: page,
    links: locales.map(locale => ({
      lang: locale,
      url: `${siteUrl}${locale === defaultLocale ? '' : `/${locale}`}${page === '/' ? '' : page}`,
    })),
  }));

  const stream = new SitemapStream({
    hostname: siteUrl,
    xmlns: { news: false, xhtml: true, image: false, video: false },
  });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(Readable.from(urls).pipe(stream)).then(data =>
    data.toString()
  );

  res.end(xmlString);
};

export default pagesSitemap;
