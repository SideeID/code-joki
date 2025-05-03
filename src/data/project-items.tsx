import React from 'react';
import {
  Bot,
  MessageSquare,
  LayoutDashboard,
  Settings,
  Database,
  ShoppingCart,
} from 'lucide-react';
import type { ProjectItem } from './project-item'

export const projectItems: ProjectItem[] = [
  {
    title: 'WhatsApp Bot untuk CS',
    description:
      'Bot WhatsApp siap pakai untuk customer service dengan respons otomatis dan kemampuan integrasi dengan AI.',
    icon: <MessageSquare />,
  },
  {
    title: 'Chatbot AI Multifungsi',
    description:
      'Asisten AI pintar untuk website yang dapat menjawab pertanyaan, memberikan rekomendasi, dan meningkatkan konversi.',
    icon: <Bot />,
  },
  {
    title: 'Content Management System',
    description:
      'CMS modern dengan UI intuitif untuk mengelola konten web, blog, produk, dan pengguna dengan mudah.',
    icon: <LayoutDashboard />,
  },
  {
    title: 'E-commerce Platform',
    description:
      'Solusi e-commerce lengkap dengan pembayaran online, manajemen inventori, dan analitik penjualan.',
    icon: <ShoppingCart />,
  },
  {
    title: 'API Integration System',
    description:
      'Framework integrasi API yang memudahkan koneksi dengan berbagai layanan pihak ketiga dan microservices.',
    icon: <Database />,
  },
  {
    title: 'Admin Dashboard',
    description:
      'Dashboard admin yang komprehensif dengan berbagai komponen UI, grafik, dan fitur pengelolaan data.',
    icon: <LayoutDashboard />,
  },
  {
    title: 'Mobile App Template',
    description:
      'Template aplikasi mobile yang dapat dikustomisasi untuk Android dan iOS dengan fitur modern dan UI yang menarik.',
    icon: <Settings />,
  },
  {
    title: 'Backend Starter Kit',
    description:
      'Kerangka backend lengkap dengan autentikasi, database, dan API endpoint yang telah dikonfigurasi.',
    icon: <Database />,
  },
];
