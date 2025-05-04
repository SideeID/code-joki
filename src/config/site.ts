const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const siteConfig = {
  title: 'CodeJoki - Jasa Pemrograman dan Tugas Coding Profesional',
  description:
    'Jasa pembuatan proyek dan tugas pemrograman berkualitas tinggi dengan harga terjangkau. Solusi cepat dan hasil terbaik untuk semua kebutuhan coding Anda.',
  keyword: [
    'joki coding',
    'jasa pemrograman',
    'bantuan coding',
    'tugas programming',
    'proyek IT',
    'jasa website',
    'coding assistance',
    'jasa pembuatan website',
    'joki tugas kuliah IT',
    'pengerjaan tugas programming',
    'ahli coding Indonesia',
  ],
  url: SITE_URL,
  openGraph: `${SITE_URL}/og.jpg`,
  locale: 'id_ID',
  type: 'website',
  themeColor: '#4f46e5',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeJoki - Jasa Pemrograman dan Tugas Coding Profesional',
    description:
      'Jasa pembuatan proyek dan tugas pemrograman berkualitas tinggi dengan harga terjangkau.',
    creator: '@side__id',
    images: [`${SITE_URL}/og.jpg`],
  },
  verification: {
    google: 'tambahkan-verification-code-google',
  },
  links: {
    facebook: '#',
    discord: '#',
    instagram: 'https://www.instagram.com/side__id/',
    github: 'https://github.com/sideeID',
    whatsapp: 'https://wa.me/+6285157900849',
    telegram: '#',
    shopee: '#',
  },
};
