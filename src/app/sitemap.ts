import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/projects',
    '/faq',
    // '/pricing',
    // '/contact',
    // '/about',
    // '/blog',
    // '/terms',
    // '/privacy',
  ];

  const baseUrl = siteConfig.url;

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
