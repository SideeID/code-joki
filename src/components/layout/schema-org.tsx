'use client';

import { siteConfig } from '@/config/site';

export default function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeJoki',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.github,
      siteConfig.links.facebook,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6285157900849',
      contactType: 'customer service',
    },
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Jasa Pemrograman',
    provider: {
      '@type': 'Organization',
      name: 'CodeJoki',
    },
    description: 'Jasa pembuatan proyek dan tugas pemrograman berkualitas tinggi',
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, serviceSchema]),
      }}
    />
  );
}