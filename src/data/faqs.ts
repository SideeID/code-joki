import type { FAQItem } from './faq'

export const faqItems: FAQItem[] = [
  {
    question: 'Apa itu jasa joki coding?',
    answer:
      'Jasa joki coding adalah layanan profesional yang membantu Anda menyelesaikan proyek pemrograman, tugas kuliah berbasis kode, atau pengembangan aplikasi/website. Tim kami terdiri dari developer berpengalaman yang mengerjakan kode sesuai kebutuhan Anda dengan kualitas terbaik.',
    category: 'Umum',
  },
  {
    question: 'Berapa biaya untuk menggunakan jasa CodeJoki?',
    answer:
      'Biaya layanan kami bervariasi mulai dari Rp 99.000 tergantung pada kompleksitas proyek, deadline, dan teknologi yang dibutuhkan. Kami menawarkan harga yang transparan dan terjangkau dengan kualitas hasil yang tidak mengecewakan.',
    category: 'Biaya',
  },
  {
    question: 'Apakah hasil pekerjaan bisa direvisi?',
    answer:
      'Tentu! Kami menyediakan maksimal 7x revisi minor (contoh: mengubah warna, tambahan fungsionalitas sederhana, dll.) untuk memastikan kepuasan Anda dengan hasil pekerjaan. Kepuasan Anda adalah prioritas utama kami.',
    category: 'Layanan',
  },
  {
    question: 'Berapa lama waktu pengerjaan proyek?',
    answer:
      'Durasi pengerjaan bergantung pada kompleksitas proyek. Proyek sederhana bisa selesai dalam 1-3 hari, sedangkan proyek yang lebih kompleks mungkin membutuhkan waktu 1-2 minggu atau lebih. Kami selalu berusaha memenuhi deadline yang disepakati.',
    category: 'Proses',
  },
  {
    question: 'Bahasa pemrograman dan teknologi apa saja yang dikuasai?',
    answer:
      'Tim kami menguasai berbagai bahasa pemrograman modern seperti JavaScript, TypeScript, Python, PHP, Java, C++, dan lainnya. Kami juga berpengalaman dengan framework populer seperti React, Next.js, Vue.js, Laravel, Express, Flutter, dan teknologi database seperti MySQL, PostgreSQL, MongoDB.',
    category: 'Teknis',
  },
  {
    question: 'Bagaimana proses pemesanan jasa di CodeJoki?',
    answer:
      'Proses pemesanan sangat mudah: (1) Hubungi kami melalui WhatsApp, Instagram, atau Bot Assistant, (2) Diskusikan detail proyek dan dapatkan penawaran harga, (3) Lakukan pembayaran DP untuk memulai pengerjaan, (4) Kami akan mengerjakan proyek dan memberikan update berkala, (5) Setelah selesai dan disetujui, lakukan pelunasan dan terima hasil akhir.',
    category: 'Proses',
  },
  {
    question: 'Apakah CodeJoki menjamin kerahasiaan proyek saya?',
    answer:
      'Ya, kami menjamin 100% kerahasiaan proyek Anda. Semua informasi proyek dan data pribadi klien kami lindungi dengan ketat dan tidak akan dibagikan kepada pihak ketiga tanpa izin.',
    category: 'Keamanan',
  },
  {
    question: 'Apa yang membedakan CodeJoki dengan jasa joki coding lainnya?',
    answer:
      'CodeJoki dijalankan oleh tim developer profesional dengan pengalaman industri yang luas. Kami menawarkan kualitas kode yang superior dengan dokumentasi lengkap, layanan revisi tanpa batas, dukungan after-service, harga transparan, dan garansi kepuasan 100%.',
    category: 'Umum',
  },
  {
    question: 'Apakah saya akan mendapatkan hak penuh atas kode yang dibuat?',
    answer:
      'Ya, setelah proyek selesai dan pembayaran lunas, Anda mendapatkan hak penuh atas kode yang kami buat. Anda bebas menggunakannya untuk keperluan pribadi maupun komersial sesuai kesepakatan.',
    category: 'Hukum',
  },
  {
    question: 'Bagaimana sistem pembayaran untuk proyek?',
    answer:
      'Kami menggunakan sistem DP 50% di awal dan pelunasan setelah proyek selesai. DP digunakan untuk memulai pengerjaan proyek dan memastikan komitmen dari kedua belah pihak.',
    category: 'Biaya',
  },
  {
    question: 'Bagaimana dengan support setelah proyek selesai?',
    answer:
      'Kami memberikan garansi bug fix selama 14 hari setelah proyek selesai. Jika ditemukan bug atau masalah teknis yang terkait dengan kode yang kami buat, kami akan memperbaikinya tanpa biaya tambahan.',
    category: 'Layanan',
  },
  {
    question: 'Apakah ada kebijakan refund?',
    answer:
      'Proyek yang sudah disepakati (DP sudah ditransfer) tidak dapat di-refund. Oleh karena itu, kami menyarankan untuk mendiskusikan semua detail dan kebutuhan proyek secara jelas sebelum memulai kerjasama.',
    category: 'Biaya',
  },
];

export const faqCategories = Array.from(
  new Set(faqItems.map((item) => item.category || 'Lainnya')),
);
