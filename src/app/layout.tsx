import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

import { AllProviders } from '@/components/providers';
import { siteConfig } from '@/config/site';

const geistSans = Geist({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.title}`,
    default: `${siteConfig.title} - ${siteConfig.description}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keyword,
  verification: siteConfig.verification,
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.openGraph }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id' className='scroll-smooth' suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
