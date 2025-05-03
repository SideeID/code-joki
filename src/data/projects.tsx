import React from 'react';
import {
  MessageSquare,
  Bot,
  LayoutDashboard,
  ShoppingCart,
  Database,
  LineChart,
  Calendar,
  Smartphone,
} from 'lucide-react';
import type { Project } from './project';

export const projects: Project[] = [
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Bot untuk CS',
    description:
      'Bot WhatsApp siap pakai dengan respons otomatis, pengelolaan tiket, dan integrasi AI untuk layanan pelanggan yang lebih efisien.',
    icon: <MessageSquare className='h-5 w-5 text-green-500' />,
    technologies: ['Node.js', 'WhatsApp API', 'AI Integration', 'MongoDB'],
    features: [
      'Pesan otomatis untuk pertanyaan umum',
      'Eskalasi ke agen manusia',
      'Integrasi dengan AI untuk jawaban cerdas',
      'Analitik percakapan dan sentimen',
      'Sistem antrian dan pengelolaan tiket',
    ],
    price: 'Mulai dari Rp 1.500.000',
    category: 'Chatbot',
    popular: true,
  },
  {
    id: 'ai-chatbot',
    title: 'Chatbot AI Multifungsi',
    description:
      'Asisten AI pintar yang dapat diintegrasikan ke website untuk menjawab pertanyaan, memberikan rekomendasi, dan meningkatkan konversi.',
    icon: <Bot className='h-5 w-5 text-purple-500' />,
    technologies: ['Next.js', 'TensorFlow.js', 'WebSocket', 'OpenAI API'],
    features: [
      'Pembelajaran mesin dari percakapan sebelumnya',
      'Dukungan multi-bahasa',
      'Kemampuan personalisasi respons',
      'Panel admin untuk mengelola jawaban',
      'Statistik dan analitik pengguna',
    ],
    price: 'Mulai dari Rp 2.000.000',
    category: 'Chatbot',
  },
  {
    id: 'cms-system',
    title: 'Content Management System',
    description:
      'CMS modern dengan antarmuka pengguna yang intuitif untuk mengelola konten web, blog, produk, dan pengguna dengan mudah.',
    icon: <LayoutDashboard className='h-5 w-5 text-blue-500' />,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    features: [
      'Editor konten WYSIWYG',
      'Sistem peran dan izin',
      'SEO-friendly',
      'Manajemen media',
      'Penerbitan terjadwal',
    ],
    price: 'Mulai dari Rp 3.500.000',
    category: 'Web',
    popular: true,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description:
      'Solusi e-commerce lengkap dengan pembayaran online, manajemen inventori, dan analitik penjualan untuk bisnis online Anda.',
    icon: <ShoppingCart className='h-5 w-5 text-orange-500' />,
    technologies: ['Next.js', 'Node.js', 'MySQL', 'Payment Gateway API'],
    features: [
      'Keranjang belanja dan checkout',
      'Integrasi pembayaran',
      'Manajemen produk dan stok',
      'Customer reviews',
      'Analitik penjualan',
    ],
    price: 'Mulai dari Rp 5.000.000',
    category: 'Web',
  },
  {
    id: 'api-integration',
    title: 'API Integration System',
    description:
      'Framework integrasi API yang memudahkan koneksi dengan berbagai layanan pihak ketiga dan microservices.',
    icon: <Database className='h-5 w-5 text-gray-500' />,
    technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
    features: [
      'Middleware autentikasi',
      'Rate limiting',
      'Caching',
      'Error handling',
      'Dokumentasi API',
    ],
    price: 'Mulai dari Rp 2.500.000',
    category: 'Backend',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Template',
    description:
      'Template aplikasi mobile yang dapat dikustomisasi untuk Android dan iOS dengan fitur modern dan UI yang menarik.',
    icon: <Smartphone className='h-5 w-5 text-sky-500' />,
    technologies: ['React Native', 'Firebase', 'Redux', 'Native Modules'],
    features: [
      'Autentikasi pengguna',
      'Penyimpanan offline',
      'Notifikasi push',
      'Animasi UI/UX',
      'Integrasi kamera dan galeri',
    ],
    price: 'Mulai dari Rp 4.500.000',
    category: 'Mobile',
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description:
      'Dashboard admin yang komprehensif dengan berbagai komponen UI, grafik, dan fitur pengelolaan data.',
    icon: <LineChart className='h-5 w-5 text-indigo-500' />,
    technologies: ['Vue.js', 'Tailwind CSS', 'Chart.js', 'REST API'],
    features: [
      'Multiple chart types',
      'Tabel data dengan sorting dan filtering',
      'Form wizard',
      'Dark mode',
      'Responsive design',
    ],
    price: 'Mulai dari Rp 3.000.000',
    category: 'Web',
    popular: true,
  },
  {
    id: 'booking-system',
    title: 'Sistem Pemesanan & Reservasi',
    description:
      'Sistem booking dan reservasi lengkap untuk hotel, restoran, atau jasa appointment lainnya.',
    icon: <Calendar className='h-5 w-5 text-teal-500' />,
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    features: [
      'Kalender pemesanan',
      'Notifikasi email dan SMS',
      'Pembayaran online',
      'Pembatalan dan pengembalian dana',
      'Panel admin',
    ],
    price: 'Mulai dari Rp 3.800.000',
    category: 'Web',
  },
];
