const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const siteConfig = {
  title: 'CodeJoki',
  description:
    'Jasa pembuatan proyek dan tugas pemrograman berkualitas dengan harga terjangkau dan hasil terbaik.',
  keyword: [
    'joki coding',
    'jasa pemrograman',
    'bantuan coding',
    'tugas programming',
    'proyek IT',
    'jasa website',
    'coding assistance',
  ],
  url: SITE_URL,
  openGraph: `${SITE_URL}/og.jpg`,
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