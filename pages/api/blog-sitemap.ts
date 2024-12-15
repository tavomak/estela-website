import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '@/utils/lib/api';

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const sitemapBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data: { posts: allPosts },
  } = await getAllPosts();

  const baseUrl = process.env.SITE_URL;

  const staticPages = allPosts.map(
    (item: any) => `${baseUrl}/blog/${item.slug}`
  );

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(staticPages).pipe(stream)
  ).then((data: any) => data.toString());

  res.end(xmlString);
};

export default sitemapBlog;
