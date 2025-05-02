export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

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
      'Tentu! Kami menyediakan garansi revisi tanpa batas sampai Anda puas dengan hasil pekerjaan. Kepuasan Anda adalah prioritas utama kami.',
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
    question: 'Apakah jasa ini legal dan etis?',
    answer:
      'Layanan kami berfokus untuk membantu dan mendukung proses pembelajaran. Kami menyarankan klien untuk memahami kode yang kami kerjakan dan menggunakannya sebagai referensi pembelajaran. Penggunaan layanan kami harus tetap memperhatikan kode etik institusi atau perusahaan masing-masing.',
    category: 'Umum',
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
];

export const faqCategories = Array.from(
  new Set(faqItems.map((item) => item.category || 'Lainnya')),
);
