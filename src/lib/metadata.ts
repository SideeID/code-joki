import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

type MetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: MetadataProps): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.title.split(' - ')[0]}`
    : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.openGraph;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keyword,
    authors: [{ name: 'CodeJoki' }],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: siteConfig.robots.index,
      follow: siteConfig.robots.follow,
      googleBot: {
        index: siteConfig.robots.googleBot.index,
        follow: siteConfig.robots.googleBot.follow,
        'max-image-preview': 'large',
        'max-snippet': siteConfig.robots.googleBot['max-snippet'],
      },
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.title.split(' - ')[0],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: siteConfig.twitter,
    verification: siteConfig.verification,
  };
}
