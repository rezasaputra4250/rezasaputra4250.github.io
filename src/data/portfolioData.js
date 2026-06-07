export const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Paket', href: '#packages' },
  { label: 'Proses', href: '#process' },
  { label: 'Kontak', href: '#contact' },
]

export const stats = [
  { value: '12+', label: 'Proyek selesai' },
  { value: '8', label: 'Skill utama' },
  { value: '100%', label: 'Responsif' },
]

export const skills = [
  'ReactJS',
  'TailwindCSS',
  'JavaScript',
  'HTML',
  'CSS',
  'Vite',
  'Responsive Design',
  'Git',
]

export const projects = [
  {
    title: 'Website Portofolio',
    type: 'Personal Site',
    description: 'Halaman personal untuk menampilkan profil, karya, skill, dan kontak secara ringkas.',
    stack: ['React', 'TailwindCSS', 'Vite'],
  },
  {
    title: 'Landing Page Bisnis',
    type: 'Company Profile',
    description: 'Halaman promosi dengan struktur konten jelas untuk menjelaskan layanan dan mendorong kontak.',
    stack: ['UI Design', 'React', 'SEO'],
    href: '#company-profile',
    action: 'Lihat contoh',
  },
  {
    title: 'Dashboard Admin',
    type: 'Web App',
    description: 'Tampilan pengelolaan data yang rapi, mudah dipindai, dan siap terhubung dengan API.',
    stack: ['React', 'API', 'Charts'],
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Diskusi kebutuhan',
    detail: 'Menentukan tujuan halaman, target pengguna, konten penting, dan referensi visual.',
  },
  {
    step: '02',
    title: 'Desain antarmuka',
    detail: 'Menyusun layout, warna, tipografi, dan komponen agar tampilan terasa konsisten.',
  },
  {
    step: '03',
    title: 'Build dan testing',
    detail: 'Mengubah desain menjadi React component lalu mengecek tampilan di desktop dan mobile.',
  },
]

export const websitePackages = [
  {
    name: 'Starter',
    price: 'Mulai 750K',
    label: 'Landing Page',
    description: 'Cocok untuk promosi produk, jasa, event, atau profil singkat.',
    features: ['1 halaman responsif', 'Desain modern', 'Form kontak', 'Optimasi dasar SEO'],
  },
  {
    name: 'Professional',
    price: 'Mulai 1.5JT',
    label: 'Company Profile',
    description: 'Untuk bisnis yang butuh website lengkap, rapi, dan mudah dipercaya.',
    features: ['3-5 halaman', 'Konten layanan', 'Galeri atau portofolio', 'Integrasi WhatsApp'],
    highlighted: true,
  },
  {
    name: 'Custom',
    price: 'Diskusi dulu',
    label: 'Web App',
    description: 'Untuk kebutuhan khusus seperti dashboard, katalog, atau sistem sederhana.',
    features: ['Flow sesuai kebutuhan', 'Komponen React', 'Siap dikembangkan', 'Konsultasi fitur'],
  },
]
